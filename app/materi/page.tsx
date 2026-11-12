"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { LessonCard } from "@/components/lesson-card";
import { lessons } from "@/lib/data";
import { useProgress } from "@/components/progress-provider";

const filters = ["Semua", "Pemula", "Dasar", "Menengah"] as const;

export default function MateriPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Semua");
  const [search, setSearch] = useState("");
  const { progress } = useProgress();
  const filtered = useMemo(() => lessons.filter((lesson) => {
    const matchesLevel = activeFilter === "Semua" || lesson.level === activeFilter;
    const matchesSearch = `${lesson.title} ${lesson.arabicTitle} ${lesson.description}`.toLowerCase().includes(search.toLowerCase());
    return matchesLevel && matchesSearch;
  }), [activeFilter, search]);

  return (
    <>
      <SectionHeading eyebrow="PERPUSTAKAAN PEMBELAJARAN" title="Materi pembelajaran" description="Pelajari tema percakapan secara bertahap. Setiap materi dilengkapi tujuan, kosakata, dialog, dan tugas berbicara." action={<div className="search-field"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Cari materi..." aria-label="Cari materi" /></div>} />
      <div className="filter-row">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#91a09a", fontSize: 10, marginRight: 3 }}><SlidersHorizontal size={14} /> Filter level</span>
        {filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`filter-chip ${activeFilter === filter ? "active" : ""}`}>{filter}</button>)}
      </div>
      <div className="panel-header"><div><h2>{filtered.length} materi tersedia</h2><p>Progres tersimpan otomatis pada browser yang kamu gunakan.</p></div></div>
      {filtered.length ? <div className="lesson-grid">{filtered.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} completed={progress.completedLessons.includes(lesson.id)} />)}</div> : <div className="empty-state">Materi tidak ditemukan. Coba kata kunci atau filter yang berbeda.</div>}
    </>
  );
}
