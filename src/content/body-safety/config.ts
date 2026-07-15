// body-safety（身體防護教學）的 program config。
// 本次僅骨架＋1 天範例課，故只有單一 stage；色系比照 stock-camp 的字面 class 樣式改成 teal 系。

import type { ProgramConfig, StageMeta } from "@/content/programs";

const stages: StageMeta[] = [
  {
    id: "S1",
    title: "Stage S1 ｜ 基礎防護觀念",
    subtitle: "居家、外出與網路情境的風險意識與預防原則",
    bar: "bg-teal-500",
    badge: "bg-teal-100 text-teal-700",
    cardRing: "hover:border-teal-400",
    accentText: "text-teal-700",
    chip: "bg-teal-50 text-teal-700 border border-teal-200",
  },
];

export const bodySafetyConfig: ProgramConfig = {
  dayCount: 1,
  stages,
  hasKnowledge: false,
};
