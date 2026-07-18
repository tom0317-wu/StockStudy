// 內容型別合約：所有 src/content/ 底下的課程與知識檔案必須符合這些型別。
// 這個檔案是規格的一部分（見 DESIGN.md），不要隨意修改。
// 本檔已隨多學習計畫平台改造泛化：phase 改 string（合法值由各 program config 宣告），
// relatedTopicIds 改選填（無知識庫的 program 可省略）。

/** stock-camp 內部沿用的 Phase 字面型別；其他 program 用各自的 stage id 字串。 */
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

/**
 * 課程內嵌的解剖示意圖（自繪 SVG）。
 * svg 是可信的靜態向量原始碼字串，由 <Figure> 元件以受控方式渲染；
 * 這是「內文禁止 HTML」合約之外、獨立的結構化媒體欄位，不放進 section.body。
 */
export interface LessonFigure {
  /** 唯一 id，格式 d{day 兩位數}-fig{序號}，例如 "d02-fig1" */
  id: string;
  /** 圖說標題 */
  title: string;
  /** 無障礙 alt 文字：用文字描述這張圖畫了什麼、標了哪些構造 */
  alt: string;
  /**
   * 圖形來源，svg 與 image 二選一（至少提供一個）：
   * - svg：內嵌 SVG 原始碼字串。必須自帶 viewBox 以便響應式縮放，寬高不寫死；
   *   禁止 <script> 與事件屬性。可用 <image href="/body-care/figures/xxx.svg"> 內嵌本地
   *   真實解剖圖並疊加中文引線標籤（見 public/body-care/figures/）。
   * - image：直接顯示的本地真實圖片素材（下載自公有領域來源，存在 public/ 下）。
   */
  svg?: string;
  image?: {
    /** 本地資產路徑（以 / 開頭，對應 public/），如 "/body-care/figures/skeleton.svg" */
    src: string;
  };
  /**
   * 真實圖片素材的來源與授權標註，顯示於圖下方小字。
   * 使用外部素材（Wikimedia 等）時必填；優先採用公有領域（Public Domain）來源。
   */
  credit?: string;
  /** 選填：圖下方的補充說明或觀察提示 */
  caption?: string;
}

export interface LessonSection {
  heading: string;
  /** Markdown（GFM），可用 ###、表格、粗體、列表；不可用 HTML */
  body: string;
  /** 選填：本節搭配的解剖示意圖，依序顯示在 body 之後 */
  figures?: LessonFigure[];
}

export interface DayLesson {
  /** 1-32（各 program 依 config.dayCount 決定範圍） */
  day: number;
  /** 對應 program config 內宣告的 stage id（stock-camp 沿用 Phase 字面值） */
  phase: string;
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
  /** 對應知識庫 topic id（見 DESIGN.md 清單），2-5 個；無知識庫的 program 可省略 */
  relatedTopicIds?: string[];
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
