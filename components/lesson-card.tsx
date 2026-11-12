import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock3, Play } from "lucide-react";
import type { Lesson } from "@/lib/types";

export function LessonCard({ lesson, completed = false }: { lesson: Lesson; completed?: boolean }) {
  return (
    <article className={`lesson-card lesson-${lesson.accent}`}>
      <div className="lesson-card-top">
        <span className="level-pill">{lesson.level}</span>
        {completed ? <span className="completed-mark"><CheckCircle2 size={16} /> Selesai</span> : <span className="lesson-duration"><Clock3 size={14} /> {lesson.duration} menit</span>}
      </div>
      <div className="lesson-arabic"><span className="arabic-text" lang="ar" dir="rtl">{lesson.arabicTitle}</span></div>
      <div className="lesson-card-copy">
        <h3>{lesson.title}</h3>
        <span className="lesson-translit">{lesson.transliteration}</span>
        <p>{lesson.description}</p>
      </div>
      <Link href={`/materi/${lesson.id}`} className="lesson-card-link">{completed ? "Pelajari lagi" : "Mulai belajar"}<ArrowUpRight size={16} /></Link>
    </article>
  );
}
