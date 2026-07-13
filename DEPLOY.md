# StockStudy 部署指南（Vercel + Neon Postgres）

> **狀態：已部署上線（2026-07-13）**
> 正式網址：**https://stock-study-seven.vercel.app**
> Vercel 專案：`stock-study`（team: tom-corp）；資料庫：Neon Postgres（Marketplace）。
> 全流程（註冊／登入／課程／測驗閱卷／進度寫入）已在 production 實測通過。

本檔記錄實際的部署架構與「日後如何更新重部署」。若操作介面有出入，以 Vercel／Neon 官方文件為準。

## 一、實際架構

- **程式碼部署**：用 `vercel --prod` 從本機直接上傳建置（不經 GitHub）。也可把 repo 推上 GitHub 後在 Dashboard 連結，改成 push 自動部署。
- **資料庫**：Neon Postgres。Neon 的 Vercel 整合會自動注入一組環境變數，其中：
  - `POSTGRES_PRISMA_URL`：pooled 連線（含 pgbouncer 參數），給 **runtime** 用 → `schema.prisma` 的 `url`。
  - `POSTGRES_URL_NON_POOLING`：直連，給 **migration** 用 → `schema.prisma` 的 `directUrl`。
- **AUTH_SECRET**：用 `vercel env add` 產生並設在 Production 與 Preview（登入 session 加密用）。
- **建表方式**：`prisma/migrations/` 下有一份 Postgres 初始 migration（用 `prisma migrate diff --from-empty` 產生，不需連線）。build script 為
  `prisma generate && prisma migrate deploy && next build`，**Vercel 建置時**才連 Neon 套用 migration，因此本機不需要 Neon 連線字串。

> 為什麼不在本機建表：Neon 注入的環境變數被 Vercel 標記為 **Sensitive（敏感、可寫不可讀回）**，`vercel env pull` 拉回來是空值。因此改成建置時在 Vercel 環境內執行 migration，最穩、也不必把資料庫密碼放到本機。

## 二、日後「更新內容後重新部署」

改了課程／知識內容或程式碼後：

```bash
npx tsc --noEmit      # 確認型別無誤
npm run build         # 本機這步會因缺 Neon 連線而在 migrate deploy 卡住，屬正常；
                      # 只想本機驗證編譯可暫時跑 `next build`
vercel --prod --yes   # 上傳 + 在 Vercel 建置 + 部署
```

內容檔（`src/content/`）沒有動到資料表結構，所以 migrate deploy 不會有新動作，直接沿用既有表。

## 三、若改了資料表結構（schema.prisma）

1. 產生新的 migration SQL（不需連線）：
   ```bash
   # 以「目前資料庫狀態」為基準產生差異；簡單做法是用 migrate diff 產出後放進新的 migrations 子資料夾
   npx prisma migrate diff --from-schema-datasource prisma/schema.prisma \
     --to-schema-datamodel prisma/schema.prisma --script
   ```
   或在有 Neon 連線字串時直接 `npx prisma migrate dev --name <變更說明>`。
2. 把新 migration 資料夾 commit / 一起 `vercel --prod`，build 時 `migrate deploy` 會自動套用。

## 四、本機開發（重要）

`schema.prisma` 現在是 **postgresql**，本機 `.env` 的 `DATABASE_URL="file:./dev.db"` 已不被 schema 使用，所以 `npm run dev` 在本機會連不到資料庫。兩個選擇：

- **（推薦）本機也連 Neon dev branch**：在 Neon 建一個 development 分支，把它的 `POSTGRES_PRISMA_URL` / `POSTGRES_URL_NON_POOLING` 寫進本機 `.env`（此檔已被 `.gitignore` 擋住）。開發與正式環境一致。
- **回到 SQLite 本機開發**：把 `prisma/schema.prisma` 還原成 SQLite 版（備份在 `~/.claude/backups/2026-07-13/StockStudy-deploy/schema.prisma.sqlite`），並還原 `.env` 的 `DATABASE_URL`。缺點是與正式環境不一致。

## 五、部署後檢查清單（本次已全數通過）

- [x] 首頁未登入導向 /login
- [x] 註冊新帳號 → 登入 → dashboard 正常
- [x] 完成一天課程＋測驗，進度寫進 Neon
- [x] 測驗閱卷回傳分數與逐題詳解、正解不外洩
- [x] 邊界輸入回 4xx 而非 500

## 六、常見問題

- **build 失敗：PrismaClient 未生成** → build script 需含 `prisma generate`（已設，另有 `postinstall`）。
- **build 失敗：migrate 無法連線** → 確認 Neon 整合仍在、`POSTGRES_URL_NON_POOLING` 存在於該環境。
- **登入後 500 / UntrustedHost** → `trustHost: true` 已寫在 `src/auth.config.ts`；另確認 `AUTH_SECRET` 已設。
- **資料庫連線數用盡** → runtime 用的是 pooled 的 `POSTGRES_PRISMA_URL`，已正確；Neon 免費方案連線上限對個人使用足夠。
- **免費方案限制** → 個人＋親友使用綽綽有餘；若日後對外商業授課，Vercel 條款要求升級 Pro。
