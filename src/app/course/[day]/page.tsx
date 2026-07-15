import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getDayLesson, courseDays } from "@/content/stock-camp/course";
import { getTopic } from "@/content/stock-camp/knowledge";
import { toClientQuiz } from "@/lib/course-client";
import { phaseMetas } from "@/lib/phases";
import type { Phase } from "@/lib/content/types";
import SiteHeader from "@/components/SiteHeader";
import Markdown from "@/components/Markdown";
import LessonActions from "@/components/LessonActions";
import Quiz from "@/components/Quiz";

export default async function CourseDayPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { day: dayParam } = await params;
  const day = Number(dayParam);
  if (!Number.isInteger(day) || day < 1 || day > 32) notFound();

  const lesson = getDayLesson(day);
  if (!lesson) notFound();

  const progress = await prisma.progress.findUnique({
    where: {
      userId_programId_day: {
        userId: session.user.id,
        programId: "stock-camp",
        day,
      },
    },
  });

  // Stage 1 型別泛化後 phase 變成 string；stock-camp 內部仍固定用 Phase 字面值，故先用型別斷言
  // 相容既有 phaseMetas 索引（Stage 5 會改用 getStageMeta() 取代，屆時移除）。
  const meta = phaseMetas[lesson.phase as Phase];
  const clientQuiz = toClientQuiz(lesson);
  const related = (lesson.relatedTopicIds ?? [])
    .map((id) => getTopic(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const prevDay = day > 1 ? day - 1 : null;
  const nextDay = day < courseDays.length ? day + 1 : null;

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
        {/* 麵包屑 */}
        <nav className="text-sm text-slate-500">
          <Link href="/dashboard" className="hover:text-sky-600">
            儀表板
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-slate-700">Day {day}</span>
        </nav>

        <div className="mt-3 flex items-center gap-2">
          <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${meta.badge}`}>
            Day {lesson.day}
          </span>
          <span className={`text-xs font-medium ${meta.accentText}`}>
            {meta.title}
          </span>
          <span className="text-xs text-slate-400">· 約 {lesson.minutes} 分鐘</span>
        </div>

        <h1 className="mt-2 text-2xl font-bold text-slate-900">{lesson.title}</h1>

        {/* 學習目標 */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-sm font-semibold text-slate-700">學習目標</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{lesson.goal}</p>
        </div>

        {/* 各小節 */}
        <div className="mt-6 space-y-8">
          {lesson.sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-2 text-xl font-bold text-slate-900">
                {section.heading}
              </h2>
              <Markdown>{section.body}</Markdown>
            </section>
          ))}
        </div>

        {/* 本日重點 */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-sky-50/50 p-5">
          <h2 className="text-lg font-bold text-slate-900">本日重點整理</h2>
          <ul className="mt-3 space-y-2">
            {lesson.keyTakeaways.map((k, i) => (
              <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 完成閱讀 */}
        <div className="mt-6">
          <LessonActions
            programId="stock-camp"
            day={day}
            initialCompleted={progress?.lessonCompleted ?? false}
          />
        </div>

        {/* 測驗 */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">隨堂測驗</h2>
          <p className="mt-1 text-sm text-slate-500">
            全部作答後即可交卷，交卷後會顯示每題詳解。
          </p>
          <div className="mt-4">
            <Quiz programId="stock-camp" day={day} questions={clientQuiz} />
          </div>
        </div>

        {/* 相關知識 */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-bold text-slate-900">延伸知識庫</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {related.map((t) => (
                <Link
                  key={t.id}
                  href={`/knowledge/${t.id}`}
                  className={`rounded-full px-3 py-1 text-sm ${meta.chip}`}
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 上一天 / 下一天 */}
        <nav className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
          {prevDay ? (
            <Link
              href={`/course/${prevDay}`}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← Day {prevDay}
            </Link>
          ) : (
            <span />
          )}
          {nextDay ? (
            <Link
              href={`/course/${nextDay}`}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Day {nextDay} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </>
  );
}
