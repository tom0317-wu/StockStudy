# StudyHub 系統設計規格（v2，2026-07-15，多學習計畫平台改造）

StudyHub 學習平台（暫名）：單一帳號、單一入口的多學習計畫網站。目前收錄兩個計畫（program）：
「股市新手 32 天學習營」（`stock-camp`）與「30 天人體照護學習計畫」（`body-care`）。
繁體中文介面與內容，未來可持續新增計畫。
本檔是唯一規格來源（single source of truth），所有實作與內容產出以此為準。

> v1（2026-07-13）為單一 stock-camp 學習營時期的規格，已由本版取代；歷史內容參考 git log。

## 已定架構決策（不要重新討論）

| 項目 | 決策 |
|---|---|
| 框架 | Next.js App Router + TypeScript + Tailwind CSS v4（不用 shadcn，純 Tailwind 元件） |
| 認證 | Auth.js（next-auth v5 beta）Credentials provider，Email+密碼，JWT session，bcryptjs 雜湊 |
| 資料庫 | 本機開發用 Prisma + SQLite（`file:./dev.db`）；部署 Vercel 用 Neon Postgres（`prisma/schema.prisma` 現況即 Neon，見 DEPLOY.md） |
| 使用規模 | 自用＋親友 <10 人。**不做** email 驗證、忘記密碼、速率限制 |
| 課程/知識內容 | 靜態 TypeScript 檔內建於 repo（`src/content/`），不進資料庫、不線上抓取 |
| 內容語言 | 繁體中文，白話、對完全新手友善 |
| **多計畫平台** | 單一帳號、單一入口（`/`）。每個學習計畫是獨立 program（id、內容資料夾、路由前綴 `/learn/[programId]`），彼此進度、內容互不影響 |
| **Program 上下架** | `src/content/programs.ts` 內 `Program.status` 靜態旗標管理：`published`（入口頁列出、可進入）／`archived`（可用網址直達，但入口頁不列出）／`draft`（一律 `notFound()`）。改檔＋部署即完成上下架，**不做線上後台** |
| **內容資料夾規則** | 每個 program 的內容放 `src/content/<programId>/`（`config.ts` 必要；`course/` 必要；`knowledge/` 選用，見 `hasKnowledge` 旗標） |

## 資料夾結構

```
src/
  app/
    page.tsx                          # 平台入口：計畫卡片（未登入 → /login）
    (auth)/login/page.tsx             # 登入
    (auth)/register/page.tsx          # 註冊
    learn/[programId]/
      layout.tsx                      # 守門：auth() + program 存在性/draft 檢查 + SiteHeader + ProgramSidebar
      page.tsx                        # redirect ./dashboard
      dashboard/page.tsx              # 該計畫的學習儀表板
      course/[day]/page.tsx           # 單日課程 + 測驗
      knowledge/page.tsx              # 知識庫樹狀目錄（無知識庫 program → notFound）
      knowledge/[topicId]/page.tsx    # 知識主題內文
    dashboard/page.tsx                # 舊路徑 redirect stub → /learn/stock-camp/dashboard
    course/[day]/page.tsx             # 舊路徑 redirect stub → /learn/stock-camp/course/[day]
    knowledge/page.tsx                # 舊路徑 redirect stub → /learn/stock-camp/knowledge
    knowledge/[topicId]/page.tsx      # 舊路徑 redirect stub → /learn/stock-camp/knowledge/[topicId]
    api/register/route.ts             # POST 註冊
    api/auth/[...nextauth]/route.ts
    api/progress/lesson/route.ts      # POST {programId, day} 標記課程已讀
    api/progress/quiz/route.ts        # POST {programId, day, answers:number[]} 後端閱卷
    api/knowledge/read/route.ts       # POST {programId, topicId} 標記知識已讀
  auth.ts                             # Auth.js 設定（合併 Credentials provider）
  auth.config.ts                      # edge-safe 設定：trustHost:true、protectedPrefixes（見下）、callbacks
  proxy.ts                            # Next 16：middleware 已改名 proxy，`export default NextAuth(authConfig).auth`
  lib/
    prisma.ts                         # PrismaClient singleton
    course-client.ts                  # DayLesson → client 安全形狀（DayCardMeta / ClientQuizQuestion，不含正解）
    content/types.ts                  # 內容型別合約（已存在，不要改；見「內容合約」節）
  content/
    programs.ts                       # program registry（Program / ProgramConfig / StageMeta 型別＋ programs 陣列）
    index.ts                          # 內容存取層：getProgram／listPublishedPrograms／getProgramCourse／getProgramKnowledge／getStageMeta
    stock-camp/
      config.ts                       # stockCampConfig：dayCount 32、stages A–D、hasKnowledge:true
      course/day01.ts ... day32.ts    # 每日課程（DayLesson）
      course/index.ts                 # 匯總 courseDays
      knowledge/categories.ts         # 分類清單
      knowledge/topics/<categoryId>.ts  # 各分類的 KnowledgeTopic[]
      knowledge/index.ts              # 匯總
    body-care/
      config.ts                       # bodyCareConfig：dayCount 30、stages W1–W4、hasKnowledge:false
      course/day01.ts                 # 目前僅 day01 已寫，其餘課文待產出
      course/index.ts                 # 匯總 courseDays
  components/
    SiteHeader.tsx                    # server wrapper：取 session 名稱 + published programs
    PlatformHeader.tsx                # client：計畫切換下拉 + 帳號選單 + 登出，手機收合
    ProgramSidebar.tsx                # client：左側章節導覽，依 stage 分組、手機漢堡收合
    DashboardTabs.tsx                 # client：課程模式／知識模式 tab（hasKnowledge:false 時只顯示課程模式）
    LessonActions.tsx / Quiz.tsx / KnowledgeReadTracker.tsx  # 皆含 programId prop，POST body 帶上
    LoginForm.tsx / RegisterForm.tsx / LogoutButton.tsx / SiteFooter.tsx / Markdown.tsx
prisma/
  schema.prisma
  migrations/20260715120000_add_program_id/migration.sql   # 手寫 migration，見「Prisma schema」節
```

## 學習計畫 registry 與 program config

`src/content/programs.ts` 是唯一的 program 清單來源：

```ts
export type ProgramStatus = "published" | "archived" | "draft";

export interface StageMeta {
  id: string;          // 對應 DayLesson.phase，同一 program 內須唯一
  title: string;
  subtitle: string;
  bar: string;          // 分區標題左側色條
  badge: string;        // 徽章底色與文字
  cardRing: string;     // 卡片 hover 邊框
  accentText: string;   // 分區小標題文字色
  chip: string;         // 淺色底 chip
}

export interface ProgramConfig {
  dayCount: number;     // 課程總天數
  stages: StageMeta[];  // 依顯示順序排列的章節清單
  hasKnowledge: boolean; // false 則該 program 只有課程模式，無金融知識庫模式
}

export interface Program {
  id: string;
  title: string;
  shortTitle?: string;  // 導覽列等窄空間顯示用，省略則沿用 title
  description: string;
  status: ProgramStatus;
  config: ProgramConfig;
}

export const programs: Program[] = [
  { id: "stock-camp", title: "股市新手 32 天學習營", shortTitle: "股市營", status: "published", config: stockCampConfig, /* ... */ },
  { id: "body-care", title: "30 天人體照護學習計畫", shortTitle: "人體照護", status: "published", config: bodyCareConfig, /* ... */ },
];
```

**新增 program 的步驟**：在 `src/content/<programId>/config.ts` 定義 `ProgramConfig`（stages 的 Tailwind class
須完整字面寫死，理由見「內容合約」節）→ 在 `src/content/<programId>/course/`（＋選用 `knowledge/`）放內容 →
在 `src/content/index.ts` 的 `courseMap`／`knowledgeMap` 註冊該 programId 的 loader →
在 `programs.ts` 的 `programs` 陣列加入該 program（初期建議 `status: "draft"`，驗收後改 `published`）。

**內容存取層**（`src/content/index.ts`）：因 program 數量少，直接用靜態 import map，不用動態 import。

```ts
export function getProgram(id: string): Program | undefined;
export function listPublishedPrograms(): Program[];               // 只回傳 status === "published"
export function getProgramCourse(programId: string): ProgramCourse | undefined;
export function getProgramKnowledge(programId: string): ProgramKnowledge | null | undefined; // 無知識庫 program 回傳 null
export function getStageMeta(programId: string, stageId: string): StageMeta | undefined;
```

## Prisma schema（現況：Neon Postgres）

```prisma
generator client { provider = "prisma-client-js" }
datasource db {
  provider  = "postgresql"
  url       = env("POSTGRES_PRISMA_URL")
  directUrl = env("POSTGRES_URL_NON_POOLING")
}

model User {
  id             String          @id @default(cuid())
  email          String          @unique
  passwordHash   String
  name           String
  createdAt      DateTime        @default(now())
  progresses     Progress[]
  knowledgeReads KnowledgeRead[]
}

model Progress {
  id               String   @id @default(cuid())
  userId           String
  programId        String   @default("stock-camp") // 見 src/content/programs.ts；default 供既有資料 backfill
  day              Int
  lessonCompleted  Boolean  @default(false)
  bestScore        Int?     // 歷史最佳答對題數
  lastScore        Int?     // 最近一次答對題數
  quizTotal        Int?     // 該日總題數
  wrongQuestionIds String   @default("[]") // 最近一次錯題 id，JSON 字串（SQLite 無 Json 型別，Postgres 沿用同寫法）
  attempts         Int      @default(0)
  updatedAt        DateTime @updatedAt
  user             User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([userId, programId, day])
}

model KnowledgeRead {
  id        String   @id @default(cuid())
  userId    String
  programId String   @default("stock-camp") // 同 Progress.programId
  topicId   String
  readAt    DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([userId, programId, topicId])
}
```

注意：不用 enum、不用 Json 型別。

**`programId` migration**（`prisma/migrations/20260715120000_add_program_id/migration.sql`，手寫）：

```sql
ALTER TABLE "Progress"      ADD COLUMN "programId" TEXT NOT NULL DEFAULT 'stock-camp';
ALTER TABLE "KnowledgeRead" ADD COLUMN "programId" TEXT NOT NULL DEFAULT 'stock-camp';
DROP INDEX "Progress_userId_day_key";
DROP INDEX "KnowledgeRead_userId_topicId_key";
CREATE UNIQUE INDEX "Progress_userId_programId_day_key" ON "Progress"("userId","programId","day");
CREATE UNIQUE INDEX "KnowledgeRead_userId_programId_topicId_key" ON "KnowledgeRead"("userId","programId","topicId");
```

此 migration 為手寫（本機開發環境無 Neon 連線可跑 `prisma migrate dev` 產生），由部署流程套用：
`package.json` 的 `build` script 是 `prisma generate && prisma migrate deploy && next build`，
**每次 `npm run build`（含本機）都會對 `DATABASE_URL`/`POSTGRES_PRISMA_URL` 指向的資料庫跑 `migrate deploy`**，
本機驗證務必先確認環境變數指向 Neon dev branch，不可誤觸正式庫。`NOT NULL DEFAULT 'stock-camp'`
會自動 backfill 既有資料列（改造前只有 stock-camp 一個計畫，既有進度全部歸戶到 stock-camp，不遺失）。

## 頁面行為規格

- **/（平台入口）**：未登入 → redirect `/login`。登入後渲染 `SiteHeader` ＋ `listPublishedPrograms()` 的卡片列表，
  每張卡顯示 title、description、`dayCount` 天課程、`hasKnowledge` 則加註「附知識庫」，按鈕連到 `/learn/[programId]`。
- **/login、/register**：置中卡片表單。註冊欄位：名稱、email、密碼（≥8 碼）。登入／註冊成功後 `router.push("/")`
  （導向平台入口卡片頁，不是某個 program 的 dashboard）。錯誤訊息中文顯示（email 已存在、密碼錯誤等）。
- **/learn/[programId]/layout.tsx（server，守門）**：`auth()` 無 session → redirect `/login`；
  `getProgram(programId)` 不存在或 `status === "draft"` → `notFound()`（`archived` 可直達，因入口頁本就不列出它，
  不需要在 layout 額外擋）；查該 program 的 `Progress` 算出各章節完成狀態；render `SiteHeader`（帶
  `currentProgramId`）＋ `ProgramSidebar`（章節清單依 `program.config.stages` 分組，只列實際有課文的
  stage）＋ `children`。
- **/learn/[programId]（page.tsx）**：無內容，`redirect('./dashboard')`。
- **/learn/[programId]/dashboard**：主體上方統計列（已完成 X/課程總天數、已測驗 Y 天、平均分數，
  `hasKnowledge` 則加已讀知識篇數）。`hasKnowledge:true` 才顯示「課程模式／金融知識模式」兩個大 tab
  （client state 切換，不換頁）；`hasKnowledge:false` 只顯示課程模式，無 tab。
  - 課程模式：依 `program.config.stages` 顯示順序分區（只渲染實際有課文的 stage）的日卡片。卡片顯示：
    Day 編號、標題、狀態徽章（未開始／已讀課程／已完成測驗＋最佳分數）。點卡片進
    `/learn/[programId]/course/[day]`。**任意天皆可點，不鎖進度。**
  - 金融知識模式（僅 `hasKnowledge:true` 的 program）：各分類手風琴（accordion），展開列主題（title＋summary＋已讀勾勾）。
    點主題進 `/learn/[programId]/knowledge/[topicId]`。
- **/learn/[programId]/course/[day]**：`day` 超出 `program.config.dayCount` 或該日課文不存在 → `notFound()`。
  麵包屑、stage 徽章與強調色（`getStageMeta(programId, lesson.phase)`）、標題、預估分鐘數、學習目標 →
  各小節（Markdown 用 react-markdown+remark-gfm 渲染）→ 本日重點整理 → 「完成閱讀」按鈕（`LessonActions`
  POST `/api/progress/lesson` 帶 `{programId, day}`）→ 測驗區（`Quiz` client component）：逐題單選、全部作答後
  才能交卷 → POST `/api/progress/quiz` 帶 `{programId, day, answers}` → 顯示得分、逐題對錯與**每題詳解**
  （答錯的紅框標示）→「重新測驗」清空重來 → 相關知識區塊（`hasKnowledge:false` 的 program 或
  `lesson.relatedTopicIds` 未填時不顯示）→ 頁尾「上一天／下一天」導覽（依該 program 實際 `courseDays` 長度，
  不是 `dayCount`，因為 body-care 目前只有 day01）。
- **/learn/[programId]/knowledge、/learn/[programId]/knowledge/[topicId]**：`getProgramKnowledge(programId)`
  回傳 `null`（`hasKnowledge:false`）或找不到 program／topic → `notFound()`。內文 Markdown 渲染，載入時
  `KnowledgeReadTracker`（client）POST `/api/knowledge/read` 帶 `{programId, topicId}` 標記已讀（每 topic 一次）。
  頁尾列出同分類其他主題連結。
- **舊路徑 redirect stub**：`/dashboard`、`/course/[day]`、`/knowledge`、`/knowledge/[topicId]` 保留為
  3 行左右的頁面級 `redirect()`，一律導向 `/learn/stock-camp/...` 對應路徑（帶原本的 `day`／`topicId` 參數）。
  `auth.config.ts` 的 `protectedPrefixes` 同時涵蓋新舊前綴（`["/learn", "/dashboard", "/course", "/knowledge"]`），
  未登入直接打舊路徑不會在 redirect 前裸奔。
- 所有受保護頁未登入一律導向 `/login`。全站 footer：「本站內容僅供投資教學參考，不構成任何投資建議。」
  （身體照護課程內容亦不構成醫療建議，見「body-care 內容規格」節）。

## 後端閱卷規則

POST `/api/progress/quiz` 收 `{programId, day, answers:number[]}`（answers[i] 為第 i 題選項索引）。
`programId` 用 `getProgram` 驗證存在且非 `draft`，`day` 對照該 program `config.dayCount` 驗證上限，
再用 `getProgramCourse(programId)` 取該 program 的正解閱卷，回傳
`{score, total, results:[{questionId, correct, correctIndex, explanation}]}`，
同時以複合 key `userId_programId_day` upsert `Progress`：attempts+1、lastScore、bestScore=max、
wrongQuestionIds、quizTotal。**閱卷邏輯（對答案、計分、wrongQuestionIds）與改造前完全相同，只是多一層
programId 過濾／驗證。** 正解不可出現在傳給 client 的初始 props（防止直接看答案）。

`/api/progress/lesson`（`{programId, day}`）與 `/api/knowledge/read`（`{programId, topicId}`）比照辦理：
先驗證 program 存在、非 draft，再用複合 key（`userId_programId_day` / `userId_programId_topicId`）
upsert；`knowledge/read` 另外驗證 `getProgramKnowledge(programId)` 非 `null` 且 topic 存在。

## 內容合約（重要：所有內容檔必須符合）

型別定義在 `src/lib/content/types.ts`，內容檔格式：

```ts
import type { DayLesson } from "@/lib/content/types";

const lesson: DayLesson = { /* ... */ };
export default lesson;
```

- `DayLesson.phase: string` —— 泛化後不再是固定的 `"A"|"B"|"C"|"D"`，而是對應該 program
  `config.stages` 內某個 `StageMeta.id`（stock-camp 沿用歷史的 `"A"~"D"`；body-care 用 `"W1"~"W4"`）。
  `Phase = "A"|"B"|"C"|"D"` 型別仍保留在 `types.ts`，僅供 stock-camp 內部沿用，不代表全平台合法值。
- `relatedTopicIds?: string[]` 改為**選填**：只有附帶知識庫（`hasKnowledge:true`）的 program 需要填，
  且只能使用該 program 對應知識庫（目前只有 stock-camp）主題清單中存在的 id，每日 2–5 個；無知識庫的
  program（如 body-care）省略此欄位，頁面讀取一律用 `lesson.relatedTopicIds ?? []` 防呆。
- 每日 3–4 個 sections，每節 300–600 字 Markdown（可用 `###`、表格、粗體、列表；**不可用 HTML**）。
- **解剖示意圖（選填 `LessonSection.figures?: LessonFigure[]`）**：內文禁止 HTML，故媒體改走此結構化欄位，
  由 `src/components/Figure.tsx` 以受控方式渲染在該節 body 之後。`LessonFigure` 欄位：`id`（格式
  `d{day}-fig{n}`）、`title`、`alt`（無障礙描述）、`svg`（**自繪**的內嵌 SVG 原始碼字串，須自帶
  `viewBox`、寬高不寫死，**禁止** `<script>`／外部資源／事件屬性）、選填 `caption`。SVG 為作者自繪的可信
  靜態向量圖，不外連、不線上抓取，符合「內容是靜態 TS 檔」原則。body-care 每個課程重點應至少搭配一張示意圖。
- goal 1–2 句；keyTakeaways 3–5 條。
- 有測驗的 program：quiz 6–8 題（stock-camp Day 32 為總複習，12–15 題）；測驗選項固定 4 個；
  explanation 至少 2 句，要**教觀念**，不能只說「答案是 B」。題目 id 格式 `d{day 兩位數}-q{序號}`，如 `d01-q3`。
- 涉及數字的制度性事實（稅率、漲跌幅、法規門檻等）務必正確；不確定的數字寧可寫「以主管機關公告為準」，
  **禁止編造**。

**Program registry 型別**（`src/content/programs.ts`，定義見「學習計畫 registry 與 program config」節）：
`StageMeta`、`ProgramConfig`、`Program`。新增或修改 `StageMeta` 時，**`bar`／`badge`／`cardRing`／
`accentText`／`chip` 的 Tailwind class 必須是完整字面字串寫死在對應 program 的 `config.ts`**（例如
`"bg-teal-500"`），不可用模板字串或變數組出 class 名——Tailwind v4 只掃原始碼中字面可見的 class，
組出來的字串掃不到會導致樣式遺失。

## stock-camp 課程清單（day / phase / title，內容檔必須使用一致標題）

以下 32 天課程清單屬 `stock-camp` program（`src/content/stock-camp/course/`）。

| Day | Phase | Title |
|---|---|---|
| 1 | A | 為什麼要投資？通膨、複利與時間的力量 |
| 2 | A | 股票是什麼？股東權益、股利與市值 |
| 3 | A | 市場架構：美股與台股的交易所 |
| 4 | A | 交易機制：交易時間、撮合、漲跌幅與零股 |
| 5 | A | 開戶與成本：手續費、證交稅與美股稅務 |
| 6 | A | 投資商品總覽：個股、ETF、基金與債券 |
| 7 | A | 認識指數：S&P 500、NASDAQ、道瓊與台灣加權 |
| 8 | A | 看懂報價與 K 線基礎 |
| 9 | B | 基本面①：財報三表白話導讀 |
| 10 | B | 基本面②：EPS、本益比與股價淨值比 |
| 11 | B | 基本面③：ROE、毛利率與殖利率 |
| 12 | B | 基本面④：產業分析與護城河 |
| 13 | B | 技術面①：K 線型態與支撐壓力 |
| 14 | B | 技術面②：移動平均線與趨勢判讀 |
| 15 | B | 技術面③：常用指標 KD、MACD、RSI |
| 16 | B | 籌碼面①：台股三大法人與融資融券 |
| 17 | B | 籌碼面②：美股 13F 與內部人交易 |
| 18 | B | 消息面：財經新聞與財報行事曆的讀法 |
| 19 | C | 投資 vs 投機：長期與短期策略 |
| 20 | C | 資產配置與分散風險 |
| 21 | C | 定期定額與 ETF 被動投資實務 |
| 22 | C | 停損停利與部位管理 |
| 23 | C | 投資心理學：認識你的心理偏誤 |
| 24 | C | 總體經濟入門：利率、通膨與就業數據 |
| 25 | C | 槓桿的危險：融資、當沖與衍生性商品警示 |
| 26 | C | 建立自己的投資紀律與檢查清單 |
| 27 | D | AI 投資工具總覽：能做什麼、不能做什麼 |
| 28 | D | 用 AI 讀財報與摘要新聞：prompt 與幻覺驗證 |
| 29 | D | 用 AI 輔助技術面研究與回測概念 |
| 30 | D | 打造個人投資研究流程 |
| 31 | D | （選修）資料 API 入門：TWSE OpenAPI 與 yfinance |
| 32 | D | （選修）總複習與綜合測驗 |

## 知識庫分類與主題清單（id 固定，不可增刪改名；屬 stock-camp 專用）

以下 8 分類 49 主題只屬於 `stock-camp` program（`src/content/stock-camp/knowledge/`）；
body-care（`hasKnowledge:false`）沒有對應知識庫。

- **market-basics 市場基礎**：what-is-stock 股票與股東權益／exchanges 美股與台股的交易所／trading-mechanics 交易時間與撮合制度／price-limits 漲跌幅限制與熔斷機制／odd-lots 零股與碎股交易／fees-taxes 手續費與稅務／indices 主要指數認識／candlestick-basics K 線與報價基礎
- **instruments 投資商品**：etf ETF 指數股票型基金／mutual-funds 共同基金／bonds 債券／dividends 股利與除權息／derivatives-intro 衍生性商品簡介
- **fundamental 基本面分析**：financial-statements 財報三表／eps 每股盈餘 EPS／pe-ratio 本益比／pb-ratio 股價淨值比／roe 股東權益報酬率／dividend-yield 殖利率／moat 護城河與產業分析
- **technical 技術面分析**：candlestick-patterns K 線型態／support-resistance 支撐與壓力／moving-averages 移動平均線／kd-indicator KD 隨機指標／macd MACD 指標／rsi RSI 相對強弱指標／volume 成交量分析
- **chips 籌碼面分析**：institutional-investors 台股三大法人／margin-trading 融資融券／form-13f 美股 13F 機構持股報告／insider-trading 內部人交易申報／shareholding-dispersion 股權分散表
- **macro 總體經濟**：interest-rates 利率與升降息循環／inflation-cpi 通膨與 CPI／employment-data 就業數據／business-cycle 景氣循環與指標／fed-central-banks 聯準會與央行政策
- **psychology-risk 心態與風險控管**：investing-vs-speculating 投資與投機／asset-allocation 資產配置／dollar-cost-averaging 定期定額／stop-loss 停損停利／position-sizing 部位管理／behavioral-biases 常見心理偏誤／leverage-risks 槓桿風險
- **ai-tools AI 投資工具**：llm-for-research 用 LLM 做投資研究／ai-hallucination-check AI 幻覺與資料驗證／prompt-for-finance 財經研究 prompt 技巧／data-apis 公開資料 API／backtesting-basics 回測概念

每個主題 body 400–800 字 Markdown，結構：是什麼 → 為什麼重要 → 新手常見誤區 → 延伸（美股／台股差異，若適用）。

## body-care（30 天人體照護學習計畫）內容規格

`body-care` program（`src/content/body-care/`）：`dayCount: 30`，`hasKnowledge: false`（無金融知識庫模式，
只有課程模式），四個 stage（`W1`~`W4`，對應四週）。**目前只有 `day01` 已寫成 `DayLesson` 內容檔
（`src/content/body-care/course/day01.ts`），day02–day30 待產出。** 大綱依 repo 根目錄的
`body_prompt.md`（未提交入版控，僅供內容產出參考，不得 commit）四週結構摘述如下：

- **W1（第 1–7 天）基礎解剖學與觸診**：認識人體三大面、主要骨骼、觸診練習、大肌肉群、深層肌與筋膜線、
  正確站姿坐姿、長者關節活動度（ROM）初步評估。
- **W2（第 8–14 天）筋絡、穴道與筋膜放鬆**：中醫經絡基礎、常用穴道、徒手治療原理（按揉推捏）、
  筋膜刀／滾筒使用、上肢肩頸與下肢足底筋膜放鬆實作、長者下肢水腫的輕柔按摩對策。
- **W3（第 15–21 天）功能性評估與常見症狀解析**：常見不良體態識別、靜態／動態體態評估、肌肉張力評估、
  上／下交叉症候群解析、長者防跌倒基礎評估與居家安全建議。
- **W4（第 22–30 天）運動處方與綜合徒手治療**：FITT 原則、伸展原理、阻力訓練護關節、主動肌與拮抗肌平衡
  訓練、綜合個案演練、長者專屬運動處方與徒手照護禁忌症、總複習與自我照護計畫產出。

內容撰寫原則（比照「內容合約」節）：普通級的身體照護與運動知識，**不含醫療診斷或治療建議**，遇到
需要專業判斷的情境一律建議「請諮詢醫師／物理治療師等專業人員」；涉及禁忌症、施力強度等安全相關描述須
保守，不確定的制度性或醫學數字一律寫「以主管機關公告為準」或「請諮詢專業人員」，**禁止編造**。
`day01.ts` 目前不含測驗（`quiz` 可為空陣列，UI 對空測驗題目顯示「本日尚無測驗題目」）；後續 day02+
是否加測驗，依撰寫時的教學需求決定，不強制比照 stock-camp 的 6–8 題。

**媒體策略（2026-07-15 定案）**：因人體結構複雜，body-care 每個課程重點須搭配**自繪 SVG 解剖示意圖**
（走 `LessonSection.figures`，見「內容合約」節）。素材一律自繪、不外連真實圖片／影片／3D 連結（避免
編造來源與連結失效）；SVG 為 schematic 示意風格，`alt` 須據實描述「這是示意圖、畫了什麼」。每日均需
課後測驗，交卷後對錯題顯示詳解（沿用既有 `Quiz` 元件與後端閱卷）。學員可自由挑選任一天上課（dashboard
已支援任意進入）。`day02.ts` 為此策略的範本（含 4 張示意圖與 7 題測驗）。

## 驗收基準

1. `npm run build` 成功、`npx tsc --noEmit` 無錯誤。（注意：`npm run build` 內含 `prisma migrate deploy`，
   本機驗證前務必確認 `DATABASE_URL`/`POSTGRES_PRISMA_URL` 指向的是 Neon dev branch，不是正式庫。）
2. 註冊 → 登入 → 導向 `/` 平台入口 → 進任一 program → dashboard → 進任一天課程 → 完成閱讀 → 交測驗卷
   （有測驗的 program）→ 回 dashboard 看到狀態更新，全流程可跑。
3. stock-camp 知識模式：展開分類 → 讀主題 → 已讀勾勾出現。
4. 未登入直開 `/`、`/learn/stock-camp/dashboard`、舊路徑 `/dashboard`、`/course/5` 皆會被導向 `/login`。
5. **計畫切換**：登入後頂欄下拉／手機選單只列出 `published` 的 program，切換後 `ProgramSidebar` 與
   dashboard 內容正確對應該 program；`archived`／`draft` 的 program 不出現在切換清單或入口卡片。
6. **舊路徑 redirect**：`/dashboard`、`/course/1`、`/knowledge`、`/knowledge/<topicId>` 全數 redirect 到
   對應的 `/learn/stock-camp/...` 新路徑。
7. **backfill 後既有進度不遺失**：改造前建立的 `Progress`／`KnowledgeRead` 資料列，套用
   `20260715120000_add_program_id` migration 後 `programId` 全部為 `'stock-camp'`，在
   `/learn/stock-camp/dashboard` 上完整呈現（完成狀態、最佳分數等與改造前一致）。
8. **跨 program 進度隔離**：同一使用者在 `stock-camp` day1 與 `body-care` day1 的完成／測驗狀態互不影響
   （複合 unique `userId_programId_day` 生效）。
9. **無知識庫降級**：`body-care`（`hasKnowledge:false`）的 dashboard 不顯示知識模式 tab、
   `ProgramSidebar` 不顯示「金融知識庫」連結，直接訪問 `/learn/body-care/knowledge` 回應 404。
10. 32 個 stock-camp 課程檔與 49 個知識主題全部通過型別檢查且無佔位文字（「TODO」「待補」）；
    body-care `day01` 通過型別檢查，day02–day30 允許尚未產出。
11. 課程頁初始 HTML／props 無測驗正解與詳解（view-source 抽查）。
