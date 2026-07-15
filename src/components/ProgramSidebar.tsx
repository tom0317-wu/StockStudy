"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { StageMeta } from "@/content/programs";

export interface SidebarChapter {
  day: number;
  title: string;
  /** 對應 stage id（DayLesson.phase） */
  phase: string;
  status: "not-started" | "read" | "quizzed";
}

// 進入計畫後的左側章節導覽（client）。
// 章節清單 = 該 program 實際存在的 courseDays（不補滿 dayCount）＋完成狀態。
// 桌面固定左欄；手機以漢堡收合。目前章節依 pathname 高亮。
export default function ProgramSidebar({
  programId,
  programTitle,
  chapters,
  stages,
  hasKnowledge,
}: {
  programId: string;
  programTitle: string;
  chapters: SidebarChapter[];
  stages: StageMeta[];
  hasKnowledge: boolean;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const base = `/learn/${programId}`;
  const knowledgeActive = pathname.startsWith(`${base}/knowledge`);
  const activeDay = (() => {
    const m = pathname.match(new RegExp(`^${base}/course/(\\d+)`));
    return m ? Number(m[1]) : null;
  })();

  // 依 stage 顯示順序分組，只渲染實際有章節的 stage。
  const grouped = stages
    .map((stage) => ({
      stage,
      items: chapters.filter((c) => c.phase === stage.id),
    }))
    .filter((g) => g.items.length > 0);
  // 保底：phase 不在 stages 內的章節（理論上不會發生）。
  const orphans = chapters.filter(
    (c) => !stages.some((s) => s.id === c.phase),
  );

  const nav = (
    <nav className="space-y-5">
      <Link
        href={`${base}/dashboard`}
        onClick={() => setOpen(false)}
        className={`block rounded-lg px-3 py-2 text-sm font-semibold ${
          pathname === `${base}/dashboard`
            ? "bg-sky-50 text-sky-700"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        學習儀表板
      </Link>

      {grouped.map(({ stage, items }) => (
        <div key={stage.id}>
          <div className="flex items-center gap-2 px-1">
            <span className={`h-4 w-1 rounded-full ${stage.bar}`} />
            <span className={`text-xs font-semibold ${stage.accentText}`}>
              {stage.title}
            </span>
          </div>
          <ul className="mt-1.5 space-y-0.5">
            {items.map((c) => (
              <ChapterLink
                key={c.day}
                base={base}
                chapter={c}
                active={activeDay === c.day}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </ul>
        </div>
      ))}

      {orphans.length > 0 && (
        <ul className="space-y-0.5">
          {orphans.map((c) => (
            <ChapterLink
              key={c.day}
              base={base}
              chapter={c}
              active={activeDay === c.day}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </ul>
      )}

      {hasKnowledge && (
        <div className="border-t border-slate-100 pt-4">
          <Link
            href={`${base}/knowledge`}
            onClick={() => setOpen(false)}
            className={`block rounded-lg px-3 py-2 text-sm font-semibold ${
              knowledgeActive
                ? "bg-sky-50 text-sky-700"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            金融知識庫
          </Link>
        </div>
      )}
    </nav>
  );

  return (
    <>
      {/* 手機版：漢堡切換條 */}
      <div className="border-b border-slate-200 bg-white px-4 py-2 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="program-sidebar-nav"
          className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700"
        >
          <span className="text-base leading-none">☰</span>
          章節目錄
        </button>
        {open && (
          <div id="program-sidebar-nav" className="mt-3 pb-2">
            {nav}
          </div>
        )}
      </div>

      {/* 桌面版：固定左欄 */}
      <aside className="hidden w-64 flex-shrink-0 border-r border-slate-200 bg-white lg:block">
        <div className="sticky top-[57px] max-h-[calc(100vh-57px)] overflow-y-auto p-4">
          <p className="px-1 pb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {programTitle}
          </p>
          {nav}
        </div>
      </aside>
    </>
  );
}

function ChapterLink({
  base,
  chapter,
  active,
  onNavigate,
}: {
  base: string;
  chapter: SidebarChapter;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={`${base}/course/${chapter.day}`}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={`flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm ${
          active
            ? "bg-slate-100 font-semibold text-slate-900"
            : "text-slate-600 hover:bg-slate-50"
        }`}
      >
        <StatusDot status={chapter.status} />
        <span className="flex-shrink-0 text-xs font-medium text-slate-400">
          Day {chapter.day}
        </span>
        <span className="flex-1 truncate">{chapter.title}</span>
      </Link>
    </li>
  );
}

function StatusDot({ status }: { status: SidebarChapter["status"] }) {
  const cls =
    status === "quizzed"
      ? "bg-green-500"
      : status === "read"
        ? "bg-sky-400"
        : "bg-slate-300";
  const label =
    status === "quizzed" ? "已完成測驗" : status === "read" ? "已讀" : "未開始";
  return (
    <span
      className={`h-2 w-2 flex-shrink-0 rounded-full ${cls}`}
      aria-label={label}
    />
  );
}
