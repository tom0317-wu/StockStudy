import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getProgram, getProgramCourse } from "@/content";
import SiteHeader from "@/components/SiteHeader";
import ProgramSidebar, {
  type SidebarChapter,
} from "@/components/ProgramSidebar";

export default async function ProgramLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ programId: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { programId } = await params;
  const program = getProgram(programId);
  if (!program || program.status === "draft") notFound();

  const course = getProgramCourse(programId);
  const courseDays = course?.courseDays ?? [];

  // 該 program 的進度，用來標示每個章節的完成狀態。
  const progresses = await prisma.progress.findMany({
    where: { userId: session.user.id, programId },
  });
  const progressByDay = new Map(progresses.map((p) => [p.day, p]));

  const chapters: SidebarChapter[] = courseDays.map((lesson) => {
    const p = progressByDay.get(lesson.day);
    const quizzed = !!p && (p.attempts > 0 || p.lastScore !== null);
    const status: SidebarChapter["status"] = quizzed
      ? "quizzed"
      : p?.lessonCompleted
        ? "read"
        : "not-started";
    return {
      day: lesson.day,
      title: lesson.title,
      phase: lesson.phase,
      status,
    };
  });

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader currentProgramId={programId} />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col lg:flex-row">
        <ProgramSidebar
          programId={programId}
          programTitle={program.title}
          chapters={chapters}
          stages={program.config.stages}
          hasKnowledge={program.config.hasKnowledge}
        />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
