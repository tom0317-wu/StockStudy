# StockStudy 系統設計規格（v1，2026-07-13）

股市小白 32 天投資學習網站。美股＋台股並重，繁體中文介面與內容。
本檔是唯一規格來源（single source of truth），所有實作與內容產出以此為準。

## 已定架構決策（不要重新討論）

| 項目 | 決策 |
|---|---|
| 框架 | Next.js App Router + TypeScript + Tailwind CSS v4（不用 shadcn，純 Tailwind 元件） |
| 認證 | Auth.js（next-auth v5 beta）Credentials provider，Email+密碼，JWT session，bcryptjs 雜湊 |
| 資料庫 | 本機開發用 Prisma + SQLite（`file:./dev.db`）；部署 Vercel 時切換 Neon Postgres（見 DEPLOY.md） |
| 使用規模 | 自用＋親友 <10 人。**不做** email 驗證、忘記密碼、速率限制 |
| 課程/知識內容 | 靜態 TypeScript 檔內建於 repo（`src/content/`），不進資料庫、不線上抓取 |
| 內容語言 | 繁體中文，白話、對完全新手友善；美股與台股制度都要講 |

## 資料夾結構

```
src/
  app/
    (auth)/login/page.tsx        # 登入
    (auth)/register/page.tsx     # 註冊
    dashboard/page.tsx           # 登入後首頁：模式切換 + 進度總覽
    course/[day]/page.tsx        # 單日課程 + 測驗
    knowledge/page.tsx           # 知識庫樹狀目錄
    knowledge/[topicId]/page.tsx # 知識主題內文
    api/register/route.ts        # POST 註冊
    api/auth/[...nextauth]/route.ts
    api/progress/lesson/route.ts # POST {day} 標記課程已讀
    api/progress/quiz/route.ts   # POST {day, answers:number[]} 後端閱卷
    api/knowledge/read/route.ts  # POST {topicId} 標記知識已讀
  auth.ts                        # Auth.js 設定
  middleware.ts                  # 保護 /dashboard /course /knowledge
  lib/
    prisma.ts                    # PrismaClient singleton
    content/types.ts             # 內容型別合約（已存在，不要改）
  content/
    course/day01.ts ... day32.ts # 每日課程（DayLesson）
    course/index.ts              # 匯總 courseDays（已存在，不要改）
    knowledge/categories.ts      # 分類清單（已存在，不要改）
    knowledge/topics/<categoryId>.ts  # 各分類的 KnowledgeTopic[]
    knowledge/index.ts           # 匯總（已存在，不要改）
  components/                    # UI 元件
prisma/schema.prisma
```

## Prisma schema（本機 SQLite 版）

```prisma
generator client { provider = "prisma-client-js" }
datasource db { provider = "sqlite"; url = env("DATABASE_URL") }

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
  day              Int
  lessonCompleted  Boolean  @default(false)
  bestScore        Int?     // 歷史最佳答對題數
  lastScore        Int?     // 最近一次答對題數
  quizTotal        Int?     // 該日總題數
  wrongQuestionIds String   @default("[]") // 最近一次錯題 id，JSON 字串（SQLite 無 Json 型別）
  attempts         Int      @default(0)
  updatedAt        DateTime @updatedAt
  user             User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([userId, day])
}

model KnowledgeRead {
  id      String   @id @default(cuid())
  userId  String
  topicId String
  readAt  DateTime @default(now())
  user    User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([userId, topicId])
}
```

注意：不用 enum、不用 Json 型別（SQLite 不支援），保持未來可無痛切 Postgres。

## 頁面行為規格

- **/login、/register**：置中卡片表單。註冊欄位：名稱、email、密碼（≥8 碼）。註冊成功自動登入導向 /dashboard。錯誤訊息中文顯示（email 已存在、密碼錯誤等）。
- **/dashboard**：頂欄含網站名「StockStudy 股市學習營」、使用者名稱、登出。主體上方是兩個大 tab：**課程模式**／**金融知識模式**（client state 切換，不換頁）。
  - 課程模式：統計列（已完成 X/32 天、已測驗 Y 天、平均分數）＋ 依 Phase A–D 分四區的 32 張日卡片。卡片顯示：Day 編號、標題、狀態徽章（未開始／已讀課程／已完成測驗＋最佳分數）。點卡片進 /course/[day]。**任意天皆可點，不鎖進度。**
  - 金融知識模式：8 個分類手風琴（accordion），展開列主題（title＋summary＋已讀勾勾）。點主題進 /knowledge/[topicId]。
- **/course/[day]**：麵包屑、標題、預估分鐘數、學習目標 → 各小節（Markdown 用 react-markdown+remark-gfm 渲染）→ 本日重點整理 → 「完成閱讀」按鈕（POST 後變已完成狀態）→ 測驗區（client component）：逐題單選、全部作答後才能交卷 → POST /api/progress/quiz → 顯示得分、逐題對錯與**每題詳解**（答錯的紅框標示）→「重新測驗」清空重來。頁尾「上一天／下一天」導覽。
- **/knowledge/[topicId]**：內文 Markdown 渲染，載入時 client 端 POST 標記已讀（每 topic 一次）。頁尾列出同分類其他主題連結。
- 所有受保護頁未登入一律導向 /login。全站 footer：「本站內容僅供投資教學參考，不構成任何投資建議。」

## 後端閱卷規則

POST /api/progress/quiz 收 `{day, answers:number[]}`（answers[i] 為第 i 題選項索引），
伺服器端從 `src/content/course` 取正解閱卷，回傳
`{score, total, results:[{questionId, correct, correctIndex, explanation}]}`，
同時 upsert Progress：attempts+1、lastScore、bestScore=max、wrongQuestionIds、quizTotal。
正解不可出現在傳給 client 的初始 props（防止直接看答案）。

## 內容合約（重要：所有內容檔必須符合）

型別定義在 `src/lib/content/types.ts`，內容檔格式：

```ts
import type { DayLesson } from "@/lib/content/types";

const lesson: DayLesson = { /* ... */ };
export default lesson;
```

- 每日 3–4 個 sections，每節 300–600 字 Markdown（可用 `###`、表格、粗體、列表；**不可用 HTML**）。
- goal 1–2 句；keyTakeaways 3–5 條；quiz 6–8 題（Day 32 為總複習，12–15 題）。
- 測驗選項固定 4 個；explanation 至少 2 句，要**教觀念**，不能只說「答案是 B」。
- 題目 id 格式 `d{day 兩位數}-q{序號}`，如 `d01-q3`。
- relatedTopicIds 只能使用本檔下方「知識庫主題清單」中存在的 id，每日 2–5 個。
- 涉及數字的制度性事實（台股漲跌幅 10%、當日沖銷、美股 T+1 交割、證交稅 0.3% 等）務必正確；不確定的數字寧可不寫，**禁止編造**。

## 32 天課程清單（day / phase / title，內容檔必須使用一致標題）

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

## 知識庫分類與主題清單（id 固定，不可增刪改名）

- **market-basics 市場基礎**：what-is-stock 股票與股東權益／exchanges 美股與台股的交易所／trading-mechanics 交易時間與撮合制度／price-limits 漲跌幅限制與熔斷機制／odd-lots 零股與碎股交易／fees-taxes 手續費與稅務／indices 主要指數認識／candlestick-basics K 線與報價基礎
- **instruments 投資商品**：etf ETF 指數股票型基金／mutual-funds 共同基金／bonds 債券／dividends 股利與除權息／derivatives-intro 衍生性商品簡介
- **fundamental 基本面分析**：financial-statements 財報三表／eps 每股盈餘 EPS／pe-ratio 本益比／pb-ratio 股價淨值比／roe 股東權益報酬率／dividend-yield 殖利率／moat 護城河與產業分析
- **technical 技術面分析**：candlestick-patterns K 線型態／support-resistance 支撐與壓力／moving-averages 移動平均線／kd-indicator KD 隨機指標／macd MACD 指標／rsi RSI 相對強弱指標／volume 成交量分析
- **chips 籌碼面分析**：institutional-investors 台股三大法人／margin-trading 融資融券／form-13f 美股 13F 機構持股報告／insider-trading 內部人交易申報／shareholding-dispersion 股權分散表
- **macro 總體經濟**：interest-rates 利率與升降息循環／inflation-cpi 通膨與 CPI／employment-data 就業數據／business-cycle 景氣循環與指標／fed-central-banks 聯準會與央行政策
- **psychology-risk 心態與風險控管**：investing-vs-speculating 投資與投機／asset-allocation 資產配置／dollar-cost-averaging 定期定額／stop-loss 停損停利／position-sizing 部位管理／behavioral-biases 常見心理偏誤／leverage-risks 槓桿風險
- **ai-tools AI 投資工具**：llm-for-research 用 LLM 做投資研究／ai-hallucination-check AI 幻覺與資料驗證／prompt-for-finance 財經研究 prompt 技巧／data-apis 公開資料 API／backtesting-basics 回測概念

每個主題 body 400–800 字 Markdown，結構：是什麼 → 為什麼重要 → 新手常見誤區 → 延伸（美股／台股差異，若適用）。

## 驗收基準

1. `npm run build` 成功、`npx tsc --noEmit` 無錯誤。
2. 註冊 → 登入 → dashboard → 進任一天課程 → 完成閱讀 → 交測驗卷 → 回 dashboard 看到狀態更新，全流程可跑。
3. 知識模式：展開分類 → 讀主題 → 已讀勾勾出現。
4. 未登入直開 /dashboard 或 /course/5 會被導向 /login。
5. 32 個課程檔與 49 個知識主題全部通過型別檢查且無佔位文字（「TODO」「待補」）。
