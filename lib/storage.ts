import type { LearningProgress } from "@/lib/types";

export const STORAGE_KEY = "maharah-kalam-progress-v1";

export const emptyProgress: LearningProgress = {
  completedLessons: [],
  quizResults: [],
  updatedAt: null
};

export function readProgress(): LearningProgress {
  if (typeof window === "undefined") return emptyProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed = JSON.parse(raw) as Partial<LearningProgress>;
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      quizResults: Array.isArray(parsed.quizResults) ? parsed.quizResults : [],
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : null
    };
  } catch {
    return emptyProgress;
  }
}

export function writeProgress(progress: LearningProgress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
