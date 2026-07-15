-- 多學習計畫平台：Progress / KnowledgeRead 加 programId。
-- NOT NULL DEFAULT 'stock-camp' 會自動 backfill 既有資料（原股市學習營進度不遺失）。
-- 本 migration 為手寫（本機無 Neon 連線），由部署時的 `prisma migrate deploy` 套用。

-- AlterTable
ALTER TABLE "Progress" ADD COLUMN "programId" TEXT NOT NULL DEFAULT 'stock-camp';
ALTER TABLE "KnowledgeRead" ADD COLUMN "programId" TEXT NOT NULL DEFAULT 'stock-camp';

-- 舊 unique index 換成含 programId 的複合 unique
DROP INDEX "Progress_userId_day_key";
DROP INDEX "KnowledgeRead_userId_topicId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Progress_userId_programId_day_key" ON "Progress"("userId", "programId", "day");
CREATE UNIQUE INDEX "KnowledgeRead_userId_programId_topicId_key" ON "KnowledgeRead"("userId", "programId", "topicId");
