import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { listPublishedPrograms } from "@/content";
import SiteHeader from "@/components/SiteHeader";

// 平台入口：未登入導 /login；登入後顯示可進入的學習計畫卡片。
export default async function Home() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const programs = listPublishedPrograms();

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900">選擇學習計畫</h1>
        <p className="mt-1 text-sm text-slate-500">
          點選任一計畫即可進入該計畫的儀表板，隨時可從頂欄切換。
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {programs.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-sky-300"
            >
              <h2 className="text-lg font-bold text-slate-900">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {p.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {p.config.dayCount} 天課程
                  {p.config.hasKnowledge && " · 附知識庫"}
                </span>
                <Link
                  href={`/learn/${p.id}`}
                  className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                >
                  進入計畫
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
