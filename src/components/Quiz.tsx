"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ClientQuizQuestion } from "@/lib/course-client";

interface QuizResultItem {
  questionId: string;
  correct: boolean;
  correctIndex: number;
  explanation: string;
}

interface QuizResult {
  score: number;
  total: number;
  results: QuizResultItem[];
}

export default function Quiz({
  day,
  questions,
}: {
  day: number;
  questions: ClientQuizQuestion[];
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => questions.map(() => null),
  );
  const [result, setResult] = useState<QuizResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const allAnswered = answers.every((a) => a !== null);

  function select(qIdx: number, optIdx: number) {
    if (result) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = optIdx;
      return next;
    });
  }

  async function submit() {
    if (!allAnswered || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/progress/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ day, answers }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? "交卷失敗，請稍後再試");
        return;
      }
      setResult(data as QuizResult);
      router.refresh();
    } catch {
      setError("交卷時發生錯誤，請稍後再試");
    } finally {
      setSubmitting(false);
    }
  }

  function retry() {
    setAnswers(questions.map(() => null));
    setResult(null);
    setError("");
  }

  if (questions.length === 0) {
    return (
      <p className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
        本日尚無測驗題目。
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {result && (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <div className="text-sm text-slate-500">本次得分</div>
          <div className="mt-1 text-3xl font-bold text-slate-900">
            {result.score}
            <span className="text-lg text-slate-400"> / {result.total}</span>
          </div>
          <div className="mt-1 text-sm text-slate-500">
            答對 {result.score} 題，共 {result.total} 題
          </div>
        </div>
      )}

      {questions.map((q, qIdx) => {
        const item = result?.results[qIdx];
        const userAns = answers[qIdx];
        return (
          <div
            key={q.id}
            className={`rounded-xl border bg-white p-4 ${
              item && !item.correct
                ? "border-red-300 ring-1 ring-red-200"
                : "border-slate-200"
            }`}
          >
            <div className="flex items-start gap-2">
              <span className="text-sm font-bold text-slate-400">
                {qIdx + 1}.
              </span>
              <p className="flex-1 text-sm font-semibold leading-6 text-slate-900">
                {q.question}
              </p>
            </div>
            <div className="mt-3 space-y-2">
              {q.options.map((opt, optIdx) => {
                const selected = userAns === optIdx;
                let optClass =
                  "border-slate-200 hover:border-sky-300 hover:bg-sky-50";
                if (result && item) {
                  if (optIdx === item.correctIndex) {
                    optClass = "border-green-400 bg-green-50";
                  } else if (selected && !item.correct) {
                    optClass = "border-red-400 bg-red-50";
                  } else {
                    optClass = "border-slate-200 opacity-70";
                  }
                } else if (selected) {
                  optClass = "border-sky-500 bg-sky-50";
                }
                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => select(qIdx, optIdx)}
                    disabled={!!result}
                    className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm transition-colors ${optClass} disabled:cursor-default`}
                  >
                    <span
                      className={`grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border text-xs ${
                        selected
                          ? "border-sky-500 bg-sky-500 text-white"
                          : "border-slate-300 text-transparent"
                      }`}
                    >
                      ●
                    </span>
                    <span className="text-slate-800">{opt}</span>
                  </button>
                );
              })}
            </div>
            {item && (
              <div
                className={`mt-3 rounded-lg px-3 py-2 text-sm leading-6 ${
                  item.correct
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                <span className="font-semibold">
                  {item.correct ? "答對了！" : "答錯了"}
                </span>
                　{item.explanation}
              </div>
            )}
          </div>
        );
      })}

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      {!result ? (
        <button
          type="button"
          onClick={submit}
          disabled={!allAnswered || submitting}
          className="w-full rounded-xl bg-sky-600 py-3 font-semibold text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting
            ? "交卷中…"
            : allAnswered
              ? "交卷"
              : `尚有 ${answers.filter((a) => a === null).length} 題未作答`}
        </button>
      ) : (
        <button
          type="button"
          onClick={retry}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          重新測驗
        </button>
      )}
    </div>
  );
}
