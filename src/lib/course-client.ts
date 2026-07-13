import type { DayLesson } from "@/lib/content/types";

// 傳給 client 端的單題型別：刻意不含 answerIndex / explanation（防止直接看答案）。
export interface ClientQuizQuestion {
  id: string;
  question: string;
  options: string[];
}

export function toClientQuiz(lesson: DayLesson): ClientQuizQuestion[] {
  return lesson.quiz.map((q) => ({
    id: q.id,
    question: q.question,
    options: q.options,
  }));
}

// dashboard 卡片用的輕量課程摘要（不含內文與測驗）。
export interface DayCardMeta {
  day: number;
  phase: DayLesson["phase"];
  title: string;
  minutes: number;
  quizCount: number;
}

export function toDayCardMeta(lesson: DayLesson): DayCardMeta {
  return {
    day: lesson.day,
    phase: lesson.phase,
    title: lesson.title,
    minutes: lesson.minutes,
    quizCount: lesson.quiz.length,
  };
}
