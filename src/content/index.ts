// 內容存取層：多學習計畫平台的統一入口。
// program 數量少，直接用靜態 import map，不需要動態 import。

import type { DayLesson, KnowledgeTopic, KnowledgeCategory } from "@/lib/content/types";
import { programs, type Program, type StageMeta } from "./programs";

import {
  courseDays as stockCampCourseDays,
  getDayLesson as getStockCampDayLesson,
} from "./stock-camp/course";
import {
  allTopics as stockCampTopics,
  knowledgeCategories as stockCampCategories,
  getTopic as getStockCampTopic,
  topicsByCategory as stockCampTopicsByCategory,
} from "./stock-camp/knowledge";

import {
  courseDays as bodySafetyCourseDays,
  getDayLesson as getBodySafetyDayLesson,
} from "./body-safety/course";

export interface ProgramCourse {
  courseDays: DayLesson[];
  getDayLesson: (day: number) => DayLesson | undefined;
}

export interface ProgramKnowledge {
  allTopics: KnowledgeTopic[];
  knowledgeCategories: KnowledgeCategory[];
  getTopic: (id: string) => KnowledgeTopic | undefined;
  topicsByCategory: (categoryId: string) => KnowledgeTopic[];
}

const courseMap: Record<string, ProgramCourse> = {
  "stock-camp": { courseDays: stockCampCourseDays, getDayLesson: getStockCampDayLesson },
  "body-safety": { courseDays: bodySafetyCourseDays, getDayLesson: getBodySafetyDayLesson },
};

// 無知識庫的 program（如 body-safety）在此 map 為 null。
const knowledgeMap: Record<string, ProgramKnowledge | null> = {
  "stock-camp": {
    allTopics: stockCampTopics,
    knowledgeCategories: stockCampCategories,
    getTopic: getStockCampTopic,
    topicsByCategory: stockCampTopicsByCategory,
  },
  "body-safety": null,
};

export function getProgram(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}

export function listPublishedPrograms(): Program[] {
  return programs.filter((p) => p.status === "published");
}

export function getProgramCourse(programId: string): ProgramCourse | undefined {
  return courseMap[programId];
}

export function getProgramKnowledge(programId: string): ProgramKnowledge | null | undefined {
  return knowledgeMap[programId];
}

export function getStageMeta(programId: string, stageId: string): StageMeta | undefined {
  return getProgram(programId)?.config.stages.find((s) => s.id === stageId);
}
