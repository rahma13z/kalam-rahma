"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { LearningProgress } from "@/lib/types";
import { emptyProgress, readProgress, writeProgress } from "@/lib/storage";

 type ProgressContextValue = {
  progress: LearningProgress;
  ready: boolean;
  markLessonComplete: (lessonId: string) => void;
  saveQuizResult: (score: number, total: number) => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<LearningProgress>(emptyProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(readProgress());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) writeProgress(progress);
  }, [progress, ready]);

  const markLessonComplete = useCallback((lessonId: string) => {
    setProgress((current) => ({
      ...current,
      completedLessons: current.completedLessons.includes(lessonId)
        ? current.completedLessons
        : [...current.completedLessons, lessonId],
      updatedAt: new Date().toISOString()
    }));
  }, []);

  const saveQuizResult = useCallback((score: number, total: number) => {
    setProgress((current) => ({
      ...current,
      quizResults: [
        { id: `${Date.now()}`, score, total, date: new Date().toISOString() },
        ...current.quizResults
      ].slice(0, 20),
      updatedAt: new Date().toISOString()
    }));
  }, []);

  const resetProgress = useCallback(() => setProgress(emptyProgress), []);

  const value = useMemo(
    () => ({ progress, ready, markLessonComplete, saveQuizResult, resetProgress }),
    [progress, ready, markLessonComplete, saveQuizResult, resetProgress]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress harus digunakan di dalam ProgressProvider");
  return context;
}
