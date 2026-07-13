"use client";

import { useState } from "react";
import Link from "next/link";
import type { Phase } from "@/lib/content/types";
import type { DayCardMeta } from "@/lib/course-client";
import { phaseMetas } from "@/lib/phases";

export interface DayCardData extends DayCardMeta {
  status: "not-started" | "read" | "quizzed";
  bestScore: number | null;
  quizTotal: number | null;
}

export interface TopicItem {
  id: string;
  title: string;
  summary: string;
  read: boolean;
}

export interface CategorySection {
  id: string;
  title: string;
  topics: TopicItem[];
}

export interface DashboardData {
  stats: {
    completedLessons: number;
    totalDays: number;
    quizzedDays: number;
    avgPercent: number | null;
    readCount: number;
  };
  phases: { id: Phase; cards: DayCardData[] }[];
  categories: CategorySection[];
}

type Mode = "course" | "knowledge";

export default function DashboardTabs({ data }: { data: DashboardData }) {
  const [mode, setMode] = useState<Mode>("course");

  return (
    <div className="mt-6">
      <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
        <TabButton active={mode === "course"} onClick={() => setMode("course")}>
          課程模式
        </TabButton>
        <TabButton
          active={mode === "knowledge"}
          onClick={() => setMode("knowledge")}
        >
          金融知識模式
        </TabButton>
      </div>

      {mode === "course" ? (
        <CourseMode data={data} />
      ) : (
        <KnowledgeMode categories={data.categories} />
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-sky-600 text-white shadow"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
  );
}

function CourseMode({ data }: { data: DashboardData }) {
  const { stats } = data;
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="已完成課程" value={`${stats.completedLessons}/${stats.totalDays} 天`} />
        <StatCard label="已測驗天數" value={`${stats.quizzedDays} 天`} />
        <StatCard
          label="平均分數"
          value={stats.avgPercent === null ? "—" : `${stats.avgPercent}%`}
        />
        <StatCard label="已讀知識" value={`${stats.readCount} 篇`} />
      </div>

      <div className="mt-8 space-y-10">
        {data.phases.map((phase) => {
          const meta = phaseMetas[phase.id];
          return (
            <section key={phase.id}>
              <div className="flex items-center gap-3">
                <span className={`h-6 w-1.5 rounded-full ${meta.bar}`} />
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {meta.title}
                  </h2>
                  <p className="text-sm text-slate-500">{meta.subtitle}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {phase.cards.map((card) => (
                  <DayCard key={card.day} card={card} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-1 text-xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

function DayCard({ card }: { card: DayCardData }) {
  const meta = phaseMetas[card.phase];
  return (
    <Link
      href={`/course/${card.day}`}
      className={`group flex flex-col rounded-xl border border-slate-200 bg-white p-4 transition-colors ${meta.cardRing} hover:shadow-sm`}
    >
      <div className="flex items-center justify-between">
        <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${meta.badge}`}>
          Day {card.day}
        </span>
        <span className="text-xs text-slate-400">{card.minutes} 分鐘</span>
      </div>
      <h3 className="mt-2 flex-1 text-sm font-semibold leading-6 text-slate-900">
        {card.title}
      </h3>
      <div className="mt-3">
        <StatusBadge card={card} />
      </div>
    </Link>
  );
}

function StatusBadge({ card }: { card: DayCardData }) {
  if (card.status === "quizzed") {
    const best =
      card.bestScore !== null && card.quizTotal !== null
        ? `　最佳 ${card.bestScore}/${card.quizTotal}`
        : "";
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
        ✓ 已完成測驗{best}
      </span>
    );
  }
  if (card.status === "read") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700">
        已讀課程
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
      未開始
    </span>
  );
}

function KnowledgeMode({ categories }: { categories: CategorySection[] }) {
  const [open, setOpen] = useState<string | null>(categories[0]?.id ?? null);

  return (
    <div className="mt-6 space-y-3">
      {categories.map((cat) => {
        const isOpen = open === cat.id;
        const readCount = cat.topics.filter((t) => t.read).length;
        return (
          <div
            key={cat.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : cat.id)}
              className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-slate-50"
            >
              <span className="font-semibold text-slate-900">{cat.title}</span>
              <span className="flex items-center gap-3 text-sm text-slate-500">
                {cat.topics.length > 0 && (
                  <span>
                    已讀 {readCount}/{cat.topics.length}
                  </span>
                )}
                <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-slate-100">
                {cat.topics.length === 0 ? (
                  <p className="px-4 py-3 text-sm text-slate-400">
                    本分類主題準備中。
                  </p>
                ) : (
                  <ul className="divide-y divide-slate-100">
                    {cat.topics.map((t) => (
                      <li key={t.id}>
                        <Link
                          href={`/knowledge/${t.id}`}
                          className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-slate-50"
                        >
                          <span
                            className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full text-xs ${
                              t.read
                                ? "bg-green-100 text-green-600"
                                : "bg-slate-100 text-slate-300"
                            }`}
                            aria-label={t.read ? "已讀" : "未讀"}
                          >
                            ✓
                          </span>
                          <span>
                            <span className="block text-sm font-medium text-slate-900">
                              {t.title}
                            </span>
                            <span className="block text-sm text-slate-500">
                              {t.summary}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
