import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getProgram, getProgramCourse } from "@/content";

const schema = z.object({
  programId: z.string().min(1),
  day: z.number().int().min(1),
  answers: z.array(z.number().int()),
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
    return NextResponse.json(
      { error: "programId、day 或 answers 參數不正確" },
      { status: 400 },
    );
  }

  const { programId, day, answers } = parsed.data;

  const program = getProgram(programId);
  if (!program || program.status === "draft") {
    return NextResponse.json({ error: "找不到該學習計畫" }, { status: 404 });
  }
  if (day > program.config.dayCount) {
    return NextResponse.json({ error: "day 參數不正確" }, { status: 400 });
  }

  const course = getProgramCourse(programId);
  if (!course) {
    return NextResponse.json({ error: "找不到該學習計畫" }, { status: 404 });
  }

  const lesson = course.getDayLesson(day);
  if (!lesson) {
    return NextResponse.json({ error: "找不到該日課程" }, { status: 404 });
  }

  const quiz = lesson.quiz;
  if (answers.length !== quiz.length) {
    return NextResponse.json(
      { error: `答案數量不符，本日共 ${quiz.length} 題` },
      { status: 400 },
    );
  }

  // 伺服器端閱卷：正解只在這裡使用，不會出現在課程頁初始 props。
  const results = quiz.map((q, i) => {
    const correct = answers[i] === q.answerIndex;
    return {
      questionId: q.id,
      correct,
      correctIndex: q.answerIndex,
      explanation: q.explanation,
    };
  });
  const score = results.filter((r) => r.correct).length;
  const total = quiz.length;
  const wrongQuestionIds = results
    .filter((r) => !r.correct)
    .map((r) => r.questionId);

  const userId = session.user.id;
  try {
    const existing = await prisma.progress.findUnique({
      where: { userId_programId_day: { userId, programId, day } },
      select: { bestScore: true },
    });
    const bestScore = Math.max(existing?.bestScore ?? 0, score);

    await prisma.progress.upsert({
      where: { userId_programId_day: { userId, programId, day } },
      create: {
        userId,
        programId,
        day,
        lastScore: score,
        bestScore,
        quizTotal: total,
        wrongQuestionIds: JSON.stringify(wrongQuestionIds),
        attempts: 1,
      },
      update: {
        lastScore: score,
        bestScore,
        quizTotal: total,
        wrongQuestionIds: JSON.stringify(wrongQuestionIds),
        attempts: { increment: 1 },
      },
    });

    return NextResponse.json({ score, total, results });
  } catch {
    return NextResponse.json({ error: "寫入失敗" }, { status: 500 });
  }
}
