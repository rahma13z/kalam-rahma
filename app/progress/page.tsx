"use client";

import Link from "next/link";
import { useProgress } from "@/components/progress-provider";
import { ProgressBar } from "@/components/progress-bar";
import { SectionHeading } from "@/components/section-heading";
import { lessons } from "@/lib/data";
import { BookOpen, CheckCircle2, Clock3, RotateCcw, Trophy } from "lucide-react";

export default function ProgressPage() {
  const { progress, ready, resetProgress } = useProgress();
  const completed = progress.completedLessons.length;
  const percentage = Math.round((completed / lessons.length) * 100);
  const average = progress.quizResults.length
    ? Math.round(progress.quizResults.reduce((sum, result) => sum + (result.score / result.total) * 100, 0) / progress.quizResults.length)
    : 0;

  function handleReset() {
    if (window.confirm("Hapus seluruh progres dan riwayat latihan yang tersimpan di browser ini?")) resetProgress();
  }

  return (
    <>
      <SectionHeading eyebrow="RINGKASAN PERKEMBANGAN" title="Progres belajar" description="Pantau materi yang telah diselesaikan dan hasil latihanmu. Data ini tersimpan secara lokal pada browser yang digunakan." action={<button className="btn-outline" onClick={handleReset}><RotateCcw size={14} /> Reset progres</button>} />
      <div className="progress-overview">
        <div className="progress-big-card"><h3>Penyelesaian materi</h3><p>Jumlah materi yang sudah kamu tandai selesai.</p><div className="progress-number"><strong>{ready ? `${percentage}%` : "—"}</strong><span>{completed} dari {lessons.length} materi</span></div><ProgressBar value={ready ? percentage : 0} showValue={false} /></div>
        <div className="progress-big-card"><h3>Rata-rata hasil kuis</h3><p>Rata-rata persentase dari seluruh latihan yang dikerjakan.</p><div className="progress-number"><strong>{ready ? `${average}%` : "—"}</strong><span>{progress.quizResults.length} latihan dikerjakan</span></div><ProgressBar value={ready ? average : 0} showValue={false} /></div>
      </div>
      <div className="content-grid">
        <section className="panel">
          <div className="panel-header"><div><h2>Status setiap materi</h2><p>Selesaikan materi secara bertahap.</p></div><BookOpen size={17} color="#16745d" /></div>
          <div className="activity-list">{lessons.map((lesson) => {
            const done = progress.completedLessons.includes(lesson.id);
            return <div className="activity-row" key={lesson.id}><span className="activity-icon">{done ? <CheckCircle2 size={17} /> : <BookOpen size={17} />}</span><div className="activity-copy"><strong>{lesson.title}</strong><span>{lesson.level} · {lesson.duration} menit</span></div><span className="activity-score">{done ? "Selesai" : <Link href={`/materi/${lesson.id}`} className="text-link">Pelajari</Link>}</span></div>;
          })}</div>
        </section>
        <aside className="panel">
          <div className="panel-header"><div><h2>Riwayat latihan</h2><p>Hasil kuis terakhir.</p></div><Trophy size={17} color="#a77b43" /></div>
          {progress.quizResults.length ? <div className="activity-list">{progress.quizResults.slice(0, 8).map((result) => <div className="activity-row" key={result.id}><span className="activity-icon"><Trophy size={16} /></span><div className="activity-copy"><strong>Latihan kosakata</strong><span>{ready ? new Date(result.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) : ""}</span></div><span className="activity-score">{result.score}/{result.total}</span></div>)}</div> : <div className="empty-state"><Clock3 size={22} style={{ margin: "0 auto 9px" }} /><div>Belum ada riwayat latihan.</div><Link href="/latihan" className="text-link" style={{ justifyContent: "center", marginTop: 10 }}>Mulai latihan <span>→</span></Link></div>}
          <div className="notice" style={{ marginTop: 15 }}>Progres hanya tersedia pada browser dan perangkat ini. Hapus data situs atau gunakan perangkat lain dapat menghilangkan riwayat.</div>
        </aside>
      </div>
    </>
  );
}
