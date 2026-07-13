import type { KnowledgeTopic } from "@/lib/content/types";
import { knowledgeCategories } from "./categories";
import marketBasics from "./topics/market-basics";
import instruments from "./topics/instruments";
import fundamental from "./topics/fundamental";
import technical from "./topics/technical";
import chips from "./topics/chips";
import macro from "./topics/macro";
import psychologyRisk from "./topics/psychology-risk";
import aiTools from "./topics/ai-tools";

export const allTopics: KnowledgeTopic[] = [
  ...marketBasics,
  ...instruments,
  ...fundamental,
  ...technical,
  ...chips,
  ...macro,
  ...psychologyRisk,
  ...aiTools,
];

export function getTopic(id: string): KnowledgeTopic | undefined {
  return allTopics.find((t) => t.id === id);
}

export function topicsByCategory(categoryId: string): KnowledgeTopic[] {
  return allTopics.filter((t) => t.categoryId === categoryId);
}

export { knowledgeCategories };
