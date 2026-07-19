<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# StockStudy 專案要點（2026-07-19 更新）

多學習計畫平台（StudyHub，暫名）：單一帳號、單一入口（`/`），目前收錄兩個 program——
`stock-camp`（股市新手 32 天學習營：課程模式＋8 分類 49 主題金融知識模式）與
`body-care`（30 天人體照護學習計畫，**day01–day30 全數完成**：課程內容、每日測驗與詳解、
每個重點搭配圖）。各 program 內容位於 `src/content/<programId>/`，路由統一在
`/learn/[programId]/...`（舊路徑保留 redirect stub）。規格唯一來源是 `DESIGN.md`；部署步驟在
`DEPLOY.md`。**已上線 production：https://stock-study-seven.vercel.app （Vercel 專案 stock-study）**。

- **架構決策（已定，勿重議）**：Auth.js v5 credentials（Email+密碼、JWT session）；課程與知識內容是 `src/content/` 靜態 TS 檔，不進 DB、不線上抓取。
- **DB 多環境自動切換**：`scripts/set-prisma-provider.mjs` 依環境改寫 `schema.prisma` 的 datasource——本機 → **SQLite**（`dev.db`）、Vercel（偵測 `VERCEL`）→ **Neon Postgres**；掛在 `dev`/`build`/`db:push`/`postinstall` 之前跑（見 `package.json`、DEPLOY.md「四」）。committed schema 設為 postgres（部署安全），本機 `npm run dev` 會自動切回 sqlite。**Prisma 鎖在 v6**（6.19.x），勿升級 v7。
- **body-care 圖片系統**：`LessonFigure`（`svg` / `image` / `credit`，見 types.ts）由 `src/components/Figure.tsx` 渲染，點圖可開 lightbox（放大/縮小/全螢幕）。解剖圖用**公有領域真實素材**（下載存 `public/body-care/figures/`，清單與授權見 `src/content/body-care/figures-manifest.md`）疊中文引線，或自繪擬真 SVG。**注意：`spine-lateral.svg` 其實是頸椎圖，勿當全脊椎用**；真圖標籤位置改動後要用無頭瀏覽器截圖核對（純 tsc/XML 檢查看不出位置錯）。
- Next 16 的 middleware 已改名 proxy：路由保護在 `src/proxy.ts`（`export default NextAuth(authConfig).auth`，已無 deprecation 警告）；受保護頁另有 server 端 `auth()` 雙重防護。`auth.config.ts` 已設 `trustHost: true`（本機 `next start` 與自訂網域登入需要）。
- **閱卷在後端**：`/api/progress/quiz` 收 answers 陣列後端對答案；正解與詳解不得出現在課程頁初始 HTML/props。
- 內容檔合約見 `src/lib/content/types.ts` 與 DESIGN.md「內容合約」節：改內容檔後跑 `npx tsc --noEmit`；制度性數字（稅率、漲跌幅等）不確定就寫「以主管機關公告為準」，禁止編造。內容正確性經雙人獨立交叉驗證（見 acceptance-check skill 第五節）。
- **不進版控**：`body_prompt.md`（內容產出參考）、`.mcp.json`（本機 playwright MCP 設定）已 `.gitignore`。`playwright` 是本機截圖 QA 的工具、**非 app 相依**（會拖累 Vercel build），要用時 `npm i -D playwright` 臨時裝。
- 指令：`npm run dev`／`npm run build`／`npx tsc --noEmit`／`npm run db:push`（本機建/同步 sqlite 表）；部署 `vercel --prod`（build 時自動切 postgres＋`migrate deploy`）。
