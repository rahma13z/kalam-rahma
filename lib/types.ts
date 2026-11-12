export type Level = "Pemula" | "Dasar" | "Menengah";

export type Lesson = {
  id: string;
  title: string;
  arabicTitle: string;
  transliteration: string;
  description: string;
  level: Level;
  duration: number;
  accent: "mint" | "sand" | "blue" | "lilac";
  objective: string;
  vocabulary: { arabic: string; latin: string; meaning: string }[];
  dialogue: { speaker: string; arabic: string; translation: string }[];
  practicePrompt: string;
};

export type QuizQuestion = {
  id: number;
  question: string;
  arabic?: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type QuizResult = {
  id: string;
  score: number;
  total: number;
  date: string;
};

export type LearningProgress = {
  completedLessons: string[];
  quizResults: QuizResult[];
  updatedAt: string | null;
};
