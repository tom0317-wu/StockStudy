# StockStudy 部署指南（Vercel + Neon Postgres）

本機開發用 SQLite（`.env` 的 `DATABASE_URL="file:./dev.db"`），部署到 Vercel 時切換 Neon Postgres。
以下步驟撰寫日期 2026-07-13，操作介面若有出入以 Vercel／Neon 官方文件為準。

## 一、前置：安裝 Vercel CLI 並登入

```bash
npm i -g vercel
vercel login
```

## 二、建立 Vercel 專案並開通 Neon

1. 專案根目錄執行 `vercel link`（建立/連結 Vercel 專案）。
2. 到 Vercel Dashboard → 該專案 → **Storage** → **Create Database** → 選 **Neon**（Marketplace，免費方案即可）。
3. 開通後 Vercel 會自動注入 `DATABASE_URL` 等環境變數到專案（Production/Preview）。
4. 在 Dashboard → Settings → Environment Variables 手動加上：
   - `AUTH_SECRET`：執行 `openssl rand -base64 32` 產生（不要沿用本機值）。
   - （`trustHost` 已寫在 `src/auth.config.ts`，故不必再設 `AUTH_TRUST_HOST`。）
5. 執行 `vercel env pull .env.production.local` 取得雲端變數（本機跑 migration 用）。

## 三、切換 Prisma 到 Postgres

1. 改 `prisma/schema.prisma` 的 datasource：

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. 刪除 SQLite 時代的 migrations（`prisma/migrations/` 整個資料夾）— 不同 provider 的 migration 不相容，重新產生：

```bash
DATABASE_URL="<Neon 的連線字串>" npx prisma migrate dev --name init-postgres
```

3. `package.json` 的 build script 已含 `prisma generate`（`"build": "prisma generate && next build"`，另有 `postinstall: prisma generate`），Vercel build 不必再調整。

> 注意：本機之後若還想用 SQLite 開發，就不要 commit 這個 provider 變更，
> 或乾脆本機也改用 Neon 的免費開發分支（Neon 支援 branch，開發/正式分開）。
> 建議：切了 Postgres 就不要回頭，本機直接連 Neon dev branch，環境一致最省事。

## 四、部署

```bash
vercel          # 預覽部署
vercel --prod   # 正式部署
```

或把 repo 推上 GitHub 後在 Vercel Dashboard 連結該 repo，之後 push 即自動部署。

## 五、部署後檢查清單

- [ ] 首頁未登入導向 /login
- [ ] 註冊新帳號 → 登入 → dashboard 正常
- [ ] 完成一天課程＋測驗，重新整理後進度仍在（確認寫進 Neon）
- [ ] 知識模式已讀勾勾正常

## 常見問題

- **build 失敗：PrismaClient 未生成** → build script 要有 `prisma generate`。
- **登入後 500 / UntrustedHost** → 確認 `AUTH_TRUST_HOST=true` 與 `AUTH_SECRET` 已設。
- **資料庫連線數用盡** → Neon 免費方案有連線上限，確認用的是 Neon 提供的 pooled 連線字串（含 `-pooler`）。
- **免費方案限制** → 個人＋親友使用綽綽有餘；若日後對外商業授課，Vercel 條款要求升級 Pro。
