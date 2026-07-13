import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getTopic } from "@/content/knowledge";

const schema = z.object({
  topicId: z.string().min(1),
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
    return NextResponse.json({ error: "topicId 參數不正確" }, { status: 400 });
  }

  const { topicId } = parsed.data;
  if (!getTopic(topicId)) {
    return NextResponse.json({ error: "找不到該知識主題" }, { status: 404 });
  }

  const userId = session.user.id;
  try {
    await prisma.knowledgeRead.upsert({
      where: { userId_topicId: { userId, topicId } },
      create: { userId, topicId },
      update: {},
    });
    return NextResponse.json({ ok: true, topicId });
  } catch {
    return NextResponse.json({ error: "寫入失敗" }, { status: 500 });
  }
}
