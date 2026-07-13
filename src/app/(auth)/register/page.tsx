import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import RegisterForm from "@/components/RegisterForm";

export default async function RegisterPage() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">建立你的帳號</h1>
          <p className="mt-1 text-sm text-slate-500">
            免費開始 32 天股市新手課程
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <RegisterForm />
        </div>
        <p className="mt-4 text-center text-sm text-slate-500">
          已經有帳號了？{" "}
          <Link href="/login" className="font-medium text-sky-600 hover:underline">
            前往登入
          </Link>
        </p>
      </div>
    </main>
  );
}
