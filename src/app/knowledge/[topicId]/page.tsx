import { redirect } from "next/navigation";

// 舊路由 stub：帶 topicId 導向新的 /learn/stock-camp 路徑。
export default async function KnowledgeTopicRedirect({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params;
  redirect(`/learn/stock-camp/knowledge/${topicId}`);
}
