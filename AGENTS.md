<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# StockStudy 專案要點（2026-07-13 建置）

股市新手 32 天學習網站：課程模式（32 天課文＋測驗＋詳解）＋金融知識模式（8 分類 49 主題）。
規格唯一來源是 `DESIGN.md`；部署步驟在 `DEPLOY.md`。

- **架構決策（已定，勿重議）**：Auth.js v5 credentials（Email+密碼、JWT session）；本機 Prisma+SQLite（`dev.db`），部署 Vercel 時切 Neon Postgres；課程與知識內容是 `src/content/` 靜態 TS 檔，不進 DB、不線上抓取。
- **Prisma 鎖在 v6**（6.19.x）：v7 對 SQLite 強制 driver adapter，與本專案 schema 寫法衝突，勿升級。
- Next 16 的 middleware 已改名 proxy：路由保護在 `src/proxy.ts`（`export default NextAuth(authConfig).auth`，已無 deprecation 警告）；受保護頁另有 server 端 `auth()` 雙重防護。`auth.config.ts` 已設 `trustHost: true`（本機 `next start` 與自訂網域登入需要）。
- **閱卷在後端**：`/api/progress/quiz` 收 answers 陣列後端對答案；正解與詳解不得出現在課程頁初始 HTML/props。
- 內容檔合約見 `src/lib/content/types.ts` 與 DESIGN.md「內容合約」節：改內容檔後跑 `npx tsc --noEmit`；制度性數字（稅率、漲跌幅等）不確定就寫「以主管機關公告為準」，禁止編造。
- 指令：`npm run dev`／`npm run build`／`npx tsc --noEmit`／`npx prisma migrate dev`。
