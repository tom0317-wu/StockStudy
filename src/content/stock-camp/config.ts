// stock-camp（股市新手 32 天學習營）的 program config。
// stages 原封搬自 src/lib/phases.ts 的 phaseMetas，樣式與文案完全不變，
// 只是把 Record<Phase, PhaseMeta> 改成 StageMeta[]（依顯示順序 A → D）。

import type { ProgramConfig, StageMeta } from "@/content/programs";

const stages: StageMeta[] = [
  {
    id: "A",
    title: "Phase A ｜ 入門基礎",
    subtitle: "認識投資、市場與交易的基本運作",
    bar: "bg-sky-500",
    badge: "bg-sky-100 text-sky-700",
    cardRing: "hover:border-sky-400",
    accentText: "text-sky-700",
    chip: "bg-sky-50 text-sky-700 border border-sky-200",
  },
  {
    id: "B",
    title: "Phase B ｜ 分析方法",
    subtitle: "基本面、技術面、籌碼面與消息面",
    bar: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    cardRing: "hover:border-emerald-400",
    accentText: "text-emerald-700",
    chip: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  {
    id: "C",
    title: "Phase C ｜ 策略與風控",
    subtitle: "資產配置、部位管理與投資心理",
    bar: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
    cardRing: "hover:border-amber-400",
    accentText: "text-amber-700",
    chip: "bg-amber-50 text-amber-700 border border-amber-200",
  },
  {
    id: "D",
    title: "Phase D ｜ AI 與實戰整合",
    subtitle: "善用 AI 工具打造個人投資研究流程",
    bar: "bg-violet-500",
    badge: "bg-violet-100 text-violet-700",
    cardRing: "hover:border-violet-400",
    accentText: "text-violet-700",
    chip: "bg-violet-50 text-violet-700 border border-violet-200",
  },
];

export const stockCampConfig: ProgramConfig = {
  dayCount: 32,
  stages,
  hasKnowledge: true,
};
