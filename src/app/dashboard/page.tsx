import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { courseDays } from "@/content/course";
import { knowledgeCategories, topicsByCategory } from "@/content/knowledge";
import { toDayCardMeta } from "@/lib/course-client";
import SiteHeader from "@/components/SiteHeader";
import DashboardTabs, {
  type DashboardData,
  type DayCardData,
} from "@/components/DashboardTabs";
import type { Phase } from "@/lib/content/types";
import { phaseOrder } from "@/lib/phases";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const userId = session.user.id;

  const [progresses, reads] = await Promise.all([
    prisma.progress.findMany({ where: { userId } }),
    prisma.knowledgeRead.findMany({
      where: { userId },
      select: { topicId: true },
    }),
  ]);

  const progressByDay = new Map(progresses.map((p) => [p.day, p]));
  const readSet = new Set(reads.map((r) => r.topicId));

  // 依 Phase 分組課程卡片
  const cardsByPhase: Record<Phase, DayCardData[]> = { A: [], B: [], C: [], D: [] };
  for (const lesson of courseDays) {
    const meta = toDayCardMeta(lesson);
    const p = progressByDay.get(lesson.day);
    const quizzed = !!p && (p.attempts > 0 || p.lastScore !== null);
    const status: DayCardData["status"] = quizzed
      ? "quizzed"
      : p?.lessonCompleted
        ? "read"
        : "not-started";
    // Stage 1 型別泛化後 phase 變成 string；stock-camp 內部仍固定用 Phase 字面值，故先用型別斷言
    // 相容既有索引（Stage 5 會改用 getStageMeta()/config.stages 取代，屆時移除）。
    cardsByPhase[lesson.phase as Phase].push({
      ...meta,
      status,
      bestScore: p?.bestScore ?? null,
      quizTotal: p?.quizTotal ?? null,
    });
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

  // 知識庫分類 + 主題 + 已讀狀態
  const categories = knowledgeCategories.map((c) => ({
    id: c.id,
    title: c.title,
    topics: topicsByCategory(c.id).map((t) => ({
      id: t.id,
      title: t.title,
      summary: t.summary,
      read: readSet.has(t.id),
    })),
  }));

  const data: DashboardData = {
    stats: {
      completedLessons,
      totalDays: courseDays.length,
      quizzedDays,
      avgPercent,
      readCount: readSet.size,
    },
    phases: phaseOrder.map((id) => ({ id, cards: cardsByPhase[id] })),
    categories,
  };

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <h1 className="text-2xl font-bold text-slate-900">學習儀表板</h1>
        <p className="mt-1 text-sm text-slate-500">
          32 天股市新手養成，任何一天都可以自由點開學習。
        </p>
        <DashboardTabs data={data} />
      </main>
    </>
  );
}
