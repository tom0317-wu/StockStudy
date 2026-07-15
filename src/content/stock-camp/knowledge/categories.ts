import type { KnowledgeCategory } from "@/lib/content/types";

// 知識庫分類（順序即顯示順序）。id 與 DESIGN.md 主題清單對應，不可改。
export const knowledgeCategories: KnowledgeCategory[] = [
  { id: "market-basics", title: "市場基礎", order: 1 },
  { id: "instruments", title: "投資商品", order: 2 },
  { id: "fundamental", title: "基本面分析", order: 3 },
  { id: "technical", title: "技術面分析", order: 4 },
  { id: "chips", title: "籌碼面分析", order: 5 },
  { id: "macro", title: "總體經濟", order: 6 },
  { id: "psychology-risk", title: "心態與風險控管", order: 7 },
  { id: "ai-tools", title: "AI 投資工具", order: 8 },
];
