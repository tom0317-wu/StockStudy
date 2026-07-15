import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { getTopic, topicsByCategory, knowledgeCategories } from "@/content/stock-camp/knowledge";
import SiteHeader from "@/components/SiteHeader";
import Markdown from "@/components/Markdown";
import KnowledgeReadTracker from "@/components/KnowledgeReadTracker";

export default async function KnowledgeTopicPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) notFound();

  const category = knowledgeCategories.find((c) => c.id === topic.categoryId);
  const siblings = topicsByCategory(topic.categoryId).filter(
    (t) => t.id !== topic.id,
  );

  return (
    <>
      <SiteHeader />
      <KnowledgeReadTracker programId="stock-camp" topicId={topic.id} />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
        <nav className="text-sm text-slate-500">
          <Link href="/dashboard" className="hover:text-sky-600">
            儀表板
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/knowledge" className="hover:text-sky-600">
            知識庫
          </Link>
          {category && (
            <>
              <span className="mx-1.5">/</span>
              <span className="text-slate-700">{category.title}</span>
            </>
          )}
        </nav>

        <h1 className="mt-3 text-2xl font-bold text-slate-900">{topic.title}</h1>
        <p className="mt-1 text-sm text-slate-500">{topic.summary}</p>

        <article className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <Markdown>{topic.body}</Markdown>
        </article>

        {siblings.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold text-slate-900">
              同分類其他主題
            </h2>
            <ul className="mt-3 space-y-2">
              {siblings.map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/knowledge/${t.id}`}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition-colors hover:border-sky-300 hover:bg-sky-50"
                  >
                    <span className="font-medium text-slate-900">{t.title}</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </>
  );
}
