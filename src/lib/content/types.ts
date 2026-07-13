// 內容型別合約：所有 src/content/ 底下的課程與知識檔案必須符合這些型別。
// 這個檔案是規格的一部分（見 DESIGN.md），不要隨意修改。

export type Phase = "A" | "B" | "C" | "D";

export interface QuizQuestion {
  /** 格式 d{day 兩位數}-q{序號}，例如 "d01-q3" */
  id: string;
  question: string;
  /** 固定 4 個選項 */
  options: string[];
  /** 正解索引 0-3 */
  answerIndex: number;
  /** 詳解：至少 2 句，要教觀念，不能只講答案 */
  explanation: string;
}

export interface LessonSection {
  heading: string;
  /** Markdown（GFM），可用 ###、表格、粗體、列表；不可用 HTML */
  body: string;
}

export interface DayLesson {
  /** 1-32 */
  day: number;
  phase: Phase;
  title: string;
  /** 預估閱讀分鐘數 */
  minutes: number;
  /** 課前學習目標，1-2 句 */
  goal: string;
  /** 3-4 節 */
  sections: LessonSection[];
  /** 本日重點 3-5 條 */
  keyTakeaways: string[];
  /** 6-8 題（Day 32 總複習 12-15 題） */
  quiz: QuizQuestion[];
  /** 對應知識庫 topic id（見 DESIGN.md 清單），2-5 個 */
  relatedTopicIds: string[];
}

export interface KnowledgeCategory {
  id: string;
  title: string;
  order: number;
}

export interface KnowledgeTopic {
  /** kebab-case，全站唯一，必須出現在 DESIGN.md 的主題清單中 */
  id: string;
  categoryId: string;
  title: string;
  /** 一句話摘要，樹狀清單顯示用 */
  summary: string;
  /** Markdown（GFM），400-800 字 */
  body: string;
}
