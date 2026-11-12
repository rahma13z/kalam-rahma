import Link from "next/link";
import { ArrowRight, MessageCircle, Volume2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { lessons } from "@/lib/data";
import { Arabic } from "@/components/arabic";
import { AudioButton } from "@/components/audio-button";

export default function HiwarPage() {
  return (
    <>
      <SectionHeading eyebrow="PRAKTIK PERCAKAPAN" title="Hiwar (الحوار)" description="Pelajari percakapan kontekstual. Dengarkan ungkapan bahasa Arab, pahami artinya, kemudian praktikkan bersama teman atau secara mandiri." />
      <div className="panel" style={{ marginBottom: 17, background: "linear-gradient(110deg,#eff6f1,#fff)", borderColor: "#e4eee7" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 13 }}><span className="stat-icon"><MessageCircle size={21} /></span><div><strong style={{ fontSize: 12 }}>Strategi latihan hiwar</strong><p style={{ margin: "5px 0 0", color: "#809087", fontSize: 10, lineHeight: 1.7 }}>Dengarkan satu ungkapan, tirukan dengan suara lantang, lalu ulangi dialog tanpa melihat terjemahan.</p></div></div>
      </div>
      <div className="page-stack" style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        {lessons.map((lesson) => (
          <section className="dialogue-feature" key={lesson.id}>
            <div className="dialogue-feature-art"><Arabic>{lesson.arabicTitle}</Arabic><span>{lesson.title} · {lesson.level}</span></div>
            <div className="dialogue-feature-content">
              <div className="panel-header" style={{ marginBottom: 9 }}><div><h3>{lesson.title}</h3><p>{lesson.description}</p></div><span className="topic-tag">{lesson.dialogue.length} baris</span></div>
              {lesson.dialogue.slice(0, 3).map((line, index) => <div className="dialogue-line" key={`${lesson.id}-${index}`}><div><Arabic>{line.arabic}</Arabic><small>{line.translation}</small></div><AudioButton text={line.arabic} compact /></div>)}
              <div style={{ marginTop: 12 }}><Link href={`/materi/${lesson.id}`} className="text-link">Pelajari materi lengkap <ArrowRight size={14} /></Link></div>
            </div>
          </section>
        ))}
      </div>
      <div className="notice" style={{ marginTop: 17 }}><Volume2 size={16} /> Audio pada halaman ini menggunakan fitur pembaca suara bawaan browser. Ketersediaan dan kualitas suara bahasa Arab bergantung pada perangkat serta voice yang terpasang.</div>
    </>
  );
}
