import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getProgram, getProgramKnowledge } from "@/content";

const schema = z.object({
  programId: z.string().min(1),
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
    return NextResponse.json({ error: "programId 或 topicId 參數不正確" }, { status: 400 });
  }

  const { programId, topicId } = parsed.data;

  const program = getProgram(programId);
  if (!program || program.status === "draft") {
    return NextResponse.json({ error: "找不到該學習計畫" }, { status: 404 });
  }

  const knowledge = getProgramKnowledge(programId);
  if (!knowledge) {
    return NextResponse.json({ error: "該學習計畫無知識庫" }, { status: 404 });
  }
  if (!knowledge.getTopic(topicId)) {
    return NextResponse.json({ error: "找不到該知識主題" }, { status: 404 });
  }

  const userId = session.user.id;
  try {
    await prisma.knowledgeRead.upsert({
      where: { userId_programId_topicId: { userId, programId, topicId } },
      create: { userId, programId, topicId },
      update: {},
    });
    return NextResponse.json({ ok: true, topicId });
  } catch {
    return NextResponse.json({ error: "寫入失敗" }, { status: 500 });
  }
}
