import type { DayLesson } from "@/lib/content/types";
import day01 from "./day01";

export const courseDays: DayLesson[] = [day01];

export function getDayLesson(day: number): DayLesson | undefined {
  return courseDays.find((d) => d.day === day);
}
