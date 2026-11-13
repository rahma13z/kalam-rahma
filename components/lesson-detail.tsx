"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock3, Mic2, Target } from "lucide-react";
import type { Lesson } from "@/lib/types";
import { useProgress } from "@/components/progress-provider";
import { AudioButton } from "@/components/audio-button";
import { Arabic } from "@/components/arabic";

export function LessonDetail({ lesson }: { lesson: Lesson }) {
  const { progress, markLessonComplete } = useProgress();
  const completed = progress.completedLessons.includes(lesson.id);
  return (
    <>
      <div style={{ marginBottom: 17 }}><Link href="/materi" className="text-link"><ArrowLeft size={14} /> Kembali ke materi</Link></div>
      <div className="lesson-detail-layout">
        <div className="detail-main">
          <section className="detail-hero">
            <div className="eyebrow">{lesson.level.toUpperCase()} · {lesson.duration} MENIT</div>
            <Arabic className="">{lesson.arabicTitle}</Arabic>
            <h1>{lesson.title}</h1>
            <span className="lesson-translit">{lesson.transliteration}</span>
            <p>{lesson.description}</p>
          </section>
          <section className="panel">
            <div className="panel-header"><div><h2><Target size={15} style={{ display: "inline", marginRight: 6, color: "#619DC6" }} />Tujuan pembelajaran</h2><p>Kompetensi yang diharapkan setelah mempelajari materi.</p></div></div>
            <p style={{ margin: 0, color: "#6f8087", fontSize: 11, lineHeight: 1.8 }}>{lesson.objective}</p>
          </section>
          <section className="panel">
            <div className="panel-header"><div><h2><BookOpen size={15} style={{ display: "inline", marginRight: 6, color: "#619DC6" }} />Kosakata penting</h2><p>Dengarkan pelafalan dan pahami maknanya.</p></div></div>
            <div className="vocab-list">{lesson.vocabulary.map((word) => <div className="vocab-card" key={word.arabic}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><Arabic>{word.arabic}</Arabic><AudioButton text={word.arabic} compact /></div><strong>{word.meaning}</strong><span>{word.latin}</span></div>)}</div>
          </section>
          <section className="panel">
            <div className="panel-header"><div><h2>Praktik hiwar (الحوار)</h2><p>Baca dialog, dengarkan contoh, lalu tirukan setiap ungkapan.</p></div><span className="topic-tag">{lesson.dialogue.length} ungkapan</span></div>
            <div className="dialogue-list">{lesson.dialogue.map((line, index) => <div className="dialogue-row" key={`${line.speaker}-${index}`}><span className="speaker-badge">{line.speaker}</span><div className="dialogue-content"><Arabic>{line.arabic}</Arabic><p>{line.translation}</p></div><AudioButton text={line.arabic} compact /></div>)}</div>
          </section>
          <section className="panel">
            <div className="panel-header"><div><h2><Mic2 size={15} style={{ display: "inline", marginRight: 6, color: "#619DC6" }} />Tugas berbicara</h2><p>Gunakan kosakata dan ungkapan yang telah dipelajari.</p></div></div>
            <p style={{ margin: "0 0 14px", color: "#6f8087", fontSize: 11, lineHeight: 1.8 }}>{lesson.practicePrompt}</p>
            <Link href="/speaking" className="btn-primary">Buka speaking practice <ArrowRight size={15} /></Link>
          </section>
        </div>
        <aside className="detail-side">
          <div className="panel">
            <div className="panel-header"><div><h2>Status materi</h2><p>Catat penyelesaian belajarmu.</p></div></div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, color: completed ? "#619DC6" : "#89969b", fontSize: 11, fontWeight: 700 }}>{completed ? <CheckCircle2 size={17} /> : <Clock3 size={17} />}{completed ? "Materi telah diselesaikan" : "Belum diselesaikan"}</div>
            <button className={completed ? "btn-outline" : "btn-primary"} style={{ width: "100%" }} onClick={() => markLessonComplete(lesson.id)} disabled={completed}>{completed ? "Sudah selesai" : "Tandai selesai"}<CheckCircle2 size={15} /></button>
          </div>
          <div className="objective-box"><strong>Tips belajar</strong><p>Ulangi dialog dengan suara lantang. Cobalah mengganti nama, tempat, atau informasi dalam dialog agar kamu tidak hanya menghafal contoh.</p></div>
          <Link href="/materi" className="btn-outline"><ArrowLeft size={14} /> Pilih materi lain</Link>
        </aside>
      </div>
    </>
  );
}
