// body-care（30 天人體照護學習計畫）的 program config。
// 大綱來源：repo 根目錄 body_prompt.md（30 天、四週四個 stage）。
// 色系刻意避開 stock-camp 用過的 sky/emerald/amber/violet，改用 teal/rose/indigo/orange；
// Tailwind v4 需要靜態可見的 class 字串，故完整 class 字面寫死，不可用變數組字串。

import type { ProgramConfig, StageMeta } from "@/content/programs";

const stages: StageMeta[] = [
  {
    id: "W1",
    title: "第一週｜基礎解剖學與觸診",
    subtitle: "辨識骨骼與肌肉紋理，學習正確的身體力學與施力姿勢",
    bar: "bg-teal-500",
    badge: "bg-teal-100 text-teal-700",
    cardRing: "hover:border-teal-400",
    accentText: "text-teal-700",
    chip: "bg-teal-50 text-teal-700 border border-teal-200",
  },
  {
    id: "W2",
    title: "第二週｜筋絡、穴道與筋膜放鬆",
    subtitle: "結合中醫經絡學說與現代筋膜學，學習徒手按壓基本技巧",
    bar: "bg-rose-500",
    badge: "bg-rose-100 text-rose-700",
    cardRing: "hover:border-rose-400",
    accentText: "text-rose-700",
    chip: "bg-rose-50 text-rose-700 border border-rose-200",
  },
  {
    id: "W3",
    title: "第三週｜功能性評估與常見症狀解析",
    subtitle: "檢測肌肉不平衡，找出緊繃或無力的根源",
    bar: "bg-indigo-500",
    badge: "bg-indigo-100 text-indigo-700",
    cardRing: "hover:border-indigo-400",
    accentText: "text-indigo-700",
    chip: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  },
  {
    id: "W4",
    title: "第四週｜運動處方與綜合徒手治療",
    subtitle: "整合放鬆與訓練，為不同族群設計專屬運動處方與照護計畫",
    bar: "bg-orange-500",
    badge: "bg-orange-100 text-orange-700",
    cardRing: "hover:border-orange-400",
    accentText: "text-orange-700",
    chip: "bg-orange-50 text-orange-700 border border-orange-200",
  },
];

export const bodyCareConfig: ProgramConfig = {
  dayCount: 30,
  stages,
  hasKnowledge: false,
};
