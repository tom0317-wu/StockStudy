import { redirect } from "next/navigation";

// 舊路由 stub：知識庫已搬到 /learn/stock-camp。
export default function KnowledgeRedirect() {
  redirect("/learn/stock-camp/knowledge");
}
