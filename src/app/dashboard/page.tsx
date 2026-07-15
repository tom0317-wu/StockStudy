import { redirect } from "next/navigation";

// 舊路由 stub：股市營已搬到 /learn/stock-camp。
export default function DashboardRedirect() {
  redirect("/learn/stock-camp/dashboard");
}
