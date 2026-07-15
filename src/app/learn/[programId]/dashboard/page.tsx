import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getProgram, getProgramCourse, getProgramKnowledge } from "@/content";
import { toDayCardMeta } from "@/lib/course-client";
import DashboardTabs, {
  type DashboardData,
  type DayCardData,
} from "@/components/DashboardTabs";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ programId: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const userId = session.user.id;

  const { programId } = await params;
  const program = getProgram(programId);
  if (!program || program.status === "draft") notFound();

  const course = getProgramCourse(programId);
  const courseDays = course?.courseDays ?? [];
  const knowledge = getProgramKnowledge(programId);

  const [progresses, reads] = await Promise.all([
    prisma.progress.findMany({ where: { userId, programId } }),
    knowledge
      ? prisma.knowledgeRead.findMany({
          where: { userId, programId },
          select: { topicId: true },
        })
      : Promise.resolve([]),
  ]);

  const progressByDay = new Map(progresses.map((p) => [p.day, p]));
  const readSet = new Set(reads.map((r) => r.topicId));

  // 依 stage 分組課程卡片（只保留實際有課文的 stage）。
  const cardsByStage = new Map<string, DayCardData[]>();
  for (const lesson of courseDays) {
    const meta = toDayCardMeta(lesson);
    const p = progressByDay.get(lesson.day);
    const quizzed = !!p && (p.attempts > 0 || p.lastScore !== null);
    const status: DayCardData["status"] = quizzed
      ? "quizzed"
      : p?.lessonCompleted
        ? "read"
        : "not-started";
    const card: DayCardData = {
      ...meta,
      status,
      bestScore: p?.bestScore ?? null,
      quizTotal: p?.quizTotal ?? null,
    };
    const list = cardsByStage.get(lesson.phase) ?? [];
    list.push(card);
    cardsByStage.set(lesson.phase, list);
  }

  // 統計列
  const completedLessons = progresses.filter((p) => p.lessonCompleted).length;
  const quizzedRecords = progresses.filter(
    (p) => p.attempts > 0 || p.lastScore !== null,
  );
  const quizzedDays = quizzedRecords.length;
  let avgPercent: number | null = null;
  const withTotal = quizzedRecords.filter(
    (p) => p.quizTotal && p.quizTotal > 0 && p.bestScore !== null,
  );
  if (withTotal.length > 0) {
    const sum = withTotal.reduce(
      (acc, p) => acc + (p.bestScore! / p.quizTotal!) * 100,
      0,
    );
    avgPercent = Math.round(sum / withTotal.length);
  }

  // 知識庫分類 + 主題 + 已讀狀態（無知識庫則為空）。
  const categories = knowledge
    ? knowledge.knowledgeCategories.map((c) => ({
        id: c.id,
        title: c.title,
        topics: knowledge.topicsByCategory(c.id).map((t) => ({
          id: t.id,
          title: t.title,
          summary: t.summary,
          read: readSet.has(t.id),
        })),
      }))
    : [];

  const data: DashboardData = {
    stats: {
      completedLessons,
      totalDays: courseDays.length,
      quizzedDays,
      avgPercent,
      readCount: readSet.size,
    },
    // 依 config.stages 顯示順序排列，並略過沒有課文的 stage。
    phases: program.config.stages
      .filter((s) => cardsByStage.has(s.id))
      .map((s) => ({ id: s.id, cards: cardsByStage.get(s.id)! })),
    categories,
  };

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900">學習儀表板</h1>
      <p className="mt-1 text-sm text-slate-500">{program.description}</p>
      <DashboardTabs
        data={data}
        stages={program.config.stages}
        programId={programId}
        hasKnowledge={program.config.hasKnowledge}
      />
    </main>
  );
}
