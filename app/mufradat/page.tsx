"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { vocabulary } from "@/lib/data";
import { Arabic } from "@/components/arabic";
import { AudioButton } from "@/components/audio-button";

export default function MufradatPage() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("Semua tema");
  const topics = ["Semua tema", ...Array.from(new Set(vocabulary.map((word) => word.topic)))];
  const filtered = useMemo(() => vocabulary.filter((word) => {
    const query = search.toLowerCase();
    const matchesSearch = `${word.arabic} ${word.latin} ${word.meaning}`.toLowerCase().includes(query);
    return matchesSearch && (topic === "Semua tema" || word.topic === topic);
  }), [search, topic]);

  return (
    <>
      <SectionHeading eyebrow="PENGUASAAN KOSAKATA" title="Mufradat (المفردات)" description="Perkaya kosakata bahasa Arab berdasarkan tema. Dengarkan pelafalan, pahami makna, dan gunakan kata dalam kalimat sederhana." action={<div className="search-field"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Cari kosakata..." aria-label="Cari kosakata" /></div>} />
      <div className="filter-row">{topics.map((item) => <button key={item} className={`filter-chip ${topic === item ? "active" : ""}`} onClick={() => setTopic(item)}>{item}</button>)}</div>
      <div className="panel-header"><div><h2>{filtered.length} kosakata</h2><p>Gunakan tombol audio untuk mendengarkan pelafalan bahasa Arab.</p></div></div>
      {filtered.length ? <div className="vocab-grid">{filtered.map((word, index) => <article className="vocab-tile" key={`${word.arabic}-${index}`}><div className="vocab-tile-top"><span className="topic-tag">{word.topic}</span><AudioButton text={word.arabic} compact /></div><Arabic>{word.arabic}</Arabic><strong>{word.meaning}</strong><small>{word.latin}</small></article>)}</div> : <div className="empty-state">Kosakata tidak ditemukan. Coba kata kunci lain.</div>}
    </>
  );
}
