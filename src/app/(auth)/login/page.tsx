import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect("/");

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            StudyHub 學習平台
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            登入後繼續你的學習計畫
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <LoginForm />
        </div>
        <p className="mt-4 text-center text-sm text-slate-500">
          還沒有帳號？{" "}
          <Link href="/register" className="font-medium text-sky-600 hover:underline">
            立即註冊
          </Link>
        </p>
      </div>
    </main>
  );
}
