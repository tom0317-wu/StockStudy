// 多學習計畫平台的 program registry。
// 上下架用靜態旗標管理（published/archived/draft），改檔＋部署即完成上下架，不做線上後台。
// 型別是規格的一部分：新增 program 前先讀 DESIGN.md「學習計畫 registry 與 program config」節。

import { stockCampConfig } from "./stock-camp/config";
import { bodyCareConfig } from "./body-care/config";

/** published：入口頁列出可進入；archived：可直達但入口不列出；draft：一律 notFound */
export type ProgramStatus = "published" | "archived" | "draft";

/**
 * 章節（stage）的顯示資訊與 accent 樣式，取代原本單一 program 專用的 phaseMetas。
 * 注意：Tailwind v4 需要靜態可見的 class 字串，故每個 stage 必須把完整 class 字面寫死在
 * 對應 program 的 config.ts，不可用變數組字串。
 */
export interface StageMeta {
  /** 對應 DayLesson.phase 的值，同一 program 內須唯一 */
  id: string;
  title: string;
  subtitle: string;
  /** 分區標題左側色條 */
  bar: string;
  /** 徽章底色與文字 */
  badge: string;
  /** 卡片 hover 邊框 */
  cardRing: string;
  /** 分區小標題文字色 */
  accentText: string;
  /** 淺色底 chip */
  chip: string;
}

export interface ProgramConfig {
  /** 課程總天數 */
  dayCount: number;
  /** 依顯示順序排列的章節清單 */
  stages: StageMeta[];
  /** 是否附帶金融知識庫模式；false 則該 program 只有課程模式 */
  hasKnowledge: boolean;
}

export interface Program {
  id: string;
  title: string;
  /** 導覽列等窄空間顯示用的短標題，省略則沿用 title */
  shortTitle?: string;
  description: string;
  status: ProgramStatus;
  config: ProgramConfig;
}

export const programs: Program[] = [
  {
    id: "stock-camp",
    title: "股市新手 32 天學習營",
    shortTitle: "股市營",
    description: "從零開始的股市新手課程：32 天課文＋測驗＋詳解，搭配 8 分類金融知識庫。",
    status: "published",
    config: stockCampConfig,
  },
  {
    id: "body-care",
    title: "30 天人體照護學習計畫",
    shortTitle: "人體照護",
    description: "融合動作訓練、傷害預防與徒手放鬆技巧的 30 天人體照護入門課程。",
    status: "published",
    config: bodyCareConfig,
  },
];
