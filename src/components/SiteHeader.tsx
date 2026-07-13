import Link from "next/link";
import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";

// 已登入頁面共用的頂欄：站名 + 使用者名稱 + 登出。
export default async function SiteHeader() {
  const session = await auth();
  const name = session?.user?.name ?? "同學";

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-bold text-slate-900"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-600 text-sm font-black text-white">
            S
          </span>
          StockStudy 股市學習營
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-600 sm:inline">
            嗨，{name}
          </span>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
