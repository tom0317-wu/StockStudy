import { redirect } from "next/navigation";

// 舊路由 stub：帶 day 導向新的 /learn/stock-camp 路徑。
export default async function CourseDayRedirect({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  redirect(`/learn/stock-camp/course/${day}`);
}
