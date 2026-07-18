// 依執行環境自動切換 Prisma datasource 的 provider（類似 Vue 的多環境設定檔）：
//   - 本機開發        → SQLite（url = DATABASE_URL，例如 file:./dev.db）
//   - Vercel 建置/執行 → PostgreSQL（Neon；url = POSTGRES_PRISMA_URL，directUrl = POSTGRES_URL_NON_POOLING）
//
// Prisma 的 datasource.provider 只能是字面值、不能用 env()，故改由本腳本在
// prisma generate / migrate / db push 之前，就地改寫 prisma/schema.prisma 的 datasource 區塊。
//
// 環境判定：
//   1. 明確指定 DATABASE_PROVIDER=sqlite|postgresql 時，以它為準（本機要測 Postgres 也能用）。
//   2. 否則偵測 Vercel（Vercel 於 install/build/runtime 皆會設 process.env.VERCEL=1）→ postgresql。
//   3. 其餘 → sqlite。
// 腳本為 idempotent：若 provider 已正確則不改動檔案（避免無謂的 git 變動）。

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const schemaPath = join(here, "..", "prisma", "schema.prisma");

const explicit = process.env.DATABASE_PROVIDER;
const usePostgres =
  explicit === "postgresql" ||
  (explicit !== "sqlite" && !!process.env.VERCEL);

const SQLITE_BLOCK = `datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}`;

const POSTGRES_BLOCK = `datasource db {
  provider  = "postgresql"
  url       = env("POSTGRES_PRISMA_URL")
  directUrl = env("POSTGRES_URL_NON_POOLING")
}`;

const target = usePostgres ? POSTGRES_BLOCK : SQLITE_BLOCK;
const label = usePostgres ? "postgresql" : "sqlite";

const schema = readFileSync(schemaPath, "utf8");
const datasourceRe = /datasource db \{[\s\S]*?\n\}/;

if (!datasourceRe.test(schema)) {
  console.error("[prisma] 找不到 datasource db 區塊，schema.prisma 可能已被改壞");
  process.exit(1);
}

const next = schema.replace(datasourceRe, target);
if (next === schema) {
  console.log(`[prisma] datasource 已是 ${label}，不需變動`);
} else {
  writeFileSync(schemaPath, next);
  console.log(`[prisma] datasource → ${label}`);
}
