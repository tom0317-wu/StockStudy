import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { knowledgeCategories, topicsByCategory } from "@/content/knowledge";
import SiteHeader from "@/components/SiteHeader";

export default async function KnowledgePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const reads = await prisma.knowledgeRead.findMany({
    where: { userId: session.user.id },
    select: { topicId: true },
  });
  const readSet = new Set(reads.map((r) => r.topicId));

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
        <nav className="text-sm text-slate-500">
          <Link href="/dashboard" className="hover:text-sky-600">
            儀表板
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-slate-700">金融知識庫</span>
        </nav>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">金融知識庫</h1>
        <p className="mt-1 text-sm text-slate-500">
          依主題查閱的投資知識小百科，隨時補充課程沒講到的細節。
        </p>

        <div className="mt-6 space-y-3">
          {knowledgeCategories.map((cat) => {
            const topics = topicsByCategory(cat.id);
            const readCount = topics.filter((t) => readSet.has(t.id)).length;
            return (
              <details
                key={cat.id}
                open
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 font-semibold text-slate-900 marker:content-none">
                  <span>{cat.title}</span>
                  {topics.length > 0 && (
                    <span className="text-sm font-normal text-slate-500">
                      已讀 {readCount}/{topics.length}
                    </span>
                  )}
                </summary>
                <div className="border-t border-slate-100">
                  {topics.length === 0 ? (
                    <p className="px-4 py-3 text-sm text-slate-400">
                      本分類主題準備中。
                    </p>
                  ) : (
                    <ul className="divide-y divide-slate-100">
                      {topics.map((t) => (
                        <li key={t.id}>
                          <Link
                            href={`/knowledge/${t.id}`}
                            className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-slate-50"
                          >
                            <span
                              className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full text-xs ${
                                readSet.has(t.id)
                                  ? "bg-green-100 text-green-600"
                                  : "bg-slate-100 text-slate-300"
                              }`}
                            >
                              ✓
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-slate-900">
                                {t.title}
                              </span>
                              <span className="block text-sm text-slate-500">
                                {t.summary}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </main>
    </>
  );
}
