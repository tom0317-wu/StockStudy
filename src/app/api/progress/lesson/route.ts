import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getProgram, getProgramCourse } from "@/content";

const schema = z.object({
  programId: z.string().min(1),
  day: z.number().int().min(1),
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
    return NextResponse.json({ error: "programId 或 day 參數不正確" }, { status: 400 });
  }

  const { programId, day } = parsed.data;

  const program = getProgram(programId);
  if (!program || program.status === "draft") {
    return NextResponse.json({ error: "找不到該學習計畫" }, { status: 404 });
  }
  if (day > program.config.dayCount) {
    return NextResponse.json({ error: "day 參數不正確" }, { status: 400 });
  }

  const course = getProgramCourse(programId);
  if (!course || !course.getDayLesson(day)) {
    return NextResponse.json({ error: "找不到該日課程" }, { status: 404 });
  }

  const userId = session.user.id;
  try {
    await prisma.progress.upsert({
      where: { userId_programId_day: { userId, programId, day } },
      create: { userId, programId, day, lessonCompleted: true },
      update: { lessonCompleted: true },
    });
    return NextResponse.json({ ok: true, day, lessonCompleted: true });
  } catch {
    return NextResponse.json({ error: "寫入失敗" }, { status: 500 });
  }
}
