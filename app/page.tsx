"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Clock3, Flame, Headphones, Lightbulb, Mic2, Sparkles, Target, Trophy } from "lucide-react";
import { lessons, learningTips } from "@/lib/data";
import { useProgress } from "@/components/progress-provider";
import { LessonCard } from "@/components/lesson-card";
import { ProgressBar } from "@/components/progress-bar";

export default function HomePage() {
  const { progress, ready } = useProgress();
  const completed = progress.completedLessons.length;
  const percentage = Math.round((completed / lessons.length) * 100);
  const latestTip = learningTips[(completed + progress.quizResults.length) % learningTips.length];

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <div className="hero-kicker"><Sparkles size={13} /> RUANG BELAJAR BAHASA ARAB</div>
          <h1>Berani berbicara,<br /><span>mulai dari satu kalimat.</span></h1>
          <p>Latih keterampilan berbicara bahasa Arab melalui materi tematik, percakapan, kosakata, dan latihan mandiri yang terarah.</p>
          <div className="hero-actions">
            <Link href="/materi" className="btn-light">Mulai belajar <ArrowRight size={15} /></Link>
            <Link href="/speaking" className="btn-outline" style={{ background: "rgba(255,255,255,.08)", color: "white", borderColor: "rgba(255,255,255,.25)" }}><Mic2 size={15} /> Latihan berbicara</Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit"><div className="hero-arabic arabic-text" lang="ar" dir="rtl">مَهَارَةُ<br />الكَلَامِ</div></div>
          <div className="hero-float one"><Headphones size={14} /> Dengarkan & tirukan</div>
          <div className="hero-float two"><Target size={14} /> Belajar terarah</div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Ringkasan progres belajar">
        <div className="stat-card"><div className="stat-icon"><BookOpen size={19} /></div><div className="stat-copy"><span>Total materi</span><strong>{lessons.length}</strong></div></div>
        <div className="stat-card"><div className="stat-icon sand"><CheckCircle2 size={19} /></div><div className="stat-copy"><span>Materi selesai</span><strong>{ready ? completed : "—"}</strong></div></div>
        <div className="stat-card"><div className="stat-icon blue"><Trophy size={19} /></div><div className="stat-copy"><span>Latihan dikerjakan</span><strong>{ready ? progress.quizResults.length : "—"}</strong></div></div>
        <div className="stat-card"><div className="stat-icon lilac"><Flame size={19} /></div><div className="stat-copy"><span>Progres belajar</span><strong>{ready ? `${percentage}%` : "—"}</strong></div></div>
      </section>

      <div className="content-grid">
        <section>
          <div className="panel-header"><div><h2>Lanjutkan pembelajaran</h2><p>Pilih materi dan tingkatkan kemampuan berbicaramu.</p></div><Link href="/materi" className="text-link">Semua materi <ArrowRight size={14} /></Link></div>
          <div className="lesson-grid">
            {lessons.slice(0, 3).map((lesson) => <LessonCard key={lesson.id} lesson={lesson} completed={progress.completedLessons.includes(lesson.id)} />)}
          </div>
        </section>
        <aside>
          <div className="panel">
            <div className="panel-header"><div><h2>Ringkasan belajar</h2><p>Perkembangan belajarmu saat ini.</p></div><ChartIcon /></div>
            <div className="progress-number"><strong>{ready ? percentage : 0}%</strong><span>materi dituntaskan</span></div>
            <ProgressBar value={ready ? percentage : 0} showValue={false} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, color: "#8b989d", fontSize: 10 }}><span>{completed} dari {lessons.length} materi</span><span>{lessons.length - completed} tersisa</span></div>
            <div className="tip-card"><strong><Lightbulb size={15} /> Tips belajar hari ini</strong><p>{latestTip}</p></div>
          </div>
          <div className="panel" style={{ marginTop: 14 }}>
            <div className="panel-header"><div><h2>Latihan singkat</h2><p>Asah pemahaman kosakata dan ungkapan.</p></div></div>
            <div className="quick-list">
              <Link href="/hiwar" className="quick-item"><span className="quick-icon"><Headphones size={17} /></span><span className="quick-copy"><strong>Dengarkan hiwar</strong><span>Latihan memahami dialog</span></span><ArrowRight size={15} color="#9aa6a8" /></Link>
              <Link href="/mufradat" className="quick-item"><span className="quick-icon"><BookOpen size={17} /></span><span className="quick-copy"><strong>Pelajari mufradat</strong><span>Perkaya kosakata harian</span></span><ArrowRight size={15} color="#9aa6a8" /></Link>
              <Link href="/latihan" className="quick-item"><span className="quick-icon"><Target size={17} /></span><span className="quick-copy"><strong>Kerjakan kuis</strong><span>Uji pemahaman materi</span></span><ArrowRight size={15} color="#9aa6a8" /></Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ChartIcon() {
  return <span className="stat-icon" style={{ width: 30, height: 30 }}><Trophy size={15} /></span>;
}
