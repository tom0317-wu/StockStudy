import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getDayLesson } from "@/content/stock-camp/course";

const schema = z.object({
  day: z.number().int().min(1).max(32),
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "尚未登入" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "請求格式錯誤" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "day 參數不正確" }, { status: 400 });
  }

  const { day } = parsed.data;
  if (!getDayLesson(day)) {
    return NextResponse.json({ error: "找不到該日課程" }, { status: 404 });
  }

  const userId = session.user.id;
  try {
    await prisma.progress.upsert({
      where: { userId_day: { userId, day } },
      create: { userId, day, lessonCompleted: true },
      update: { lessonCompleted: true },
    });
    return NextResponse.json({ ok: true, day, lessonCompleted: true });
  } catch {
    return NextResponse.json({ error: "寫入失敗" }, { status: 500 });
  }
}
