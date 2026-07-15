import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import {
  getProgram,
  getProgramCourse,
  getProgramKnowledge,
  getStageMeta,
} from "@/content";
import { toClientQuiz } from "@/lib/course-client";
import Markdown from "@/components/Markdown";
import LessonActions from "@/components/LessonActions";
import Quiz from "@/components/Quiz";

export default async function CourseDayPage({
  params,
}: {
  params: Promise<{ programId: string; day: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { programId, day: dayParam } = await params;
  const program = getProgram(programId);
  if (!program || program.status === "draft") notFound();

  const day = Number(dayParam);
  if (!Number.isInteger(day) || day < 1 || day > program.config.dayCount) {
    notFound();
  }

  const course = getProgramCourse(programId);
  const lesson = course?.getDayLesson(day);
  if (!lesson) notFound();

  const progress = await prisma.progress.findUnique({
    where: {
      userId_programId_day: { userId: session.user.id, programId, day },
    },
  });

  const meta = getStageMeta(programId, lesson.phase);
  const badgeClass = meta?.badge ?? "bg-slate-100 text-slate-700";
  const accentClass = meta?.accentText ?? "text-slate-600";
  const chipClass = meta?.chip ?? "bg-slate-50 text-slate-700 border border-slate-200";

  const clientQuiz = toClientQuiz(lesson);

  const knowledge = getProgramKnowledge(programId);
  const related = knowledge
    ? (lesson.relatedTopicIds ?? [])
        .map((id) => knowledge.getTopic(id))
        .filter((t): t is NonNullable<typeof t> => Boolean(t))
    : [];

  const courseLen = course?.courseDays.length ?? 0;
  const prevDay = day > 1 && course?.getDayLesson(day - 1) ? day - 1 : null;
  const nextDay = day < courseLen && course?.getDayLesson(day + 1) ? day + 1 : null;

  const base = `/learn/${programId}`;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
      {/* 麵包屑 */}
      <nav className="text-sm text-slate-500">
        <Link href={`${base}/dashboard`} className="hover:text-sky-600">
          儀表板
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">Day {day}</span>
      </nav>

      <div className="mt-3 flex items-center gap-2">
        <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${badgeClass}`}>
          Day {lesson.day}
        </span>
        {meta && (
          <span className={`text-xs font-medium ${accentClass}`}>
            {meta.title}
          </span>
        )}
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
          programId={programId}
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
          <Quiz programId={programId} day={day} questions={clientQuiz} />
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
                href={`${base}/knowledge/${t.id}`}
                className={`rounded-full px-3 py-1 text-sm ${chipClass}`}
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
            href={`${base}/course/${prevDay}`}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            ← Day {prevDay}
          </Link>
        ) : (
          <span />
        )}
        {nextDay ? (
          <Link
            href={`${base}/course/${nextDay}`}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Day {nextDay} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
