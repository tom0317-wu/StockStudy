"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LessonActions({
  day,
  initialCompleted,
}: {
  day: number;
  initialCompleted: boolean;
}) {
  const router = useRouter();
  const [completed, setCompleted] = useState(initialCompleted);
  const [loading, setLoading] = useState(false);

  async function markComplete() {
    if (completed || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/progress/lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ day }),
      });
      if (res.ok) {
        setCompleted(true);
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  if (completed) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
        ✓ 你已完成本日課程閱讀
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={markComplete}
      disabled={loading}
      className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 disabled:opacity-60"
    >
      {loading ? "標記中…" : "完成閱讀"}
    </button>
  );
}
