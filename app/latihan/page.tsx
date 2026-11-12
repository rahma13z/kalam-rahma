import { ClipboardCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { QuizClient } from "@/components/quiz-client";

export default function LatihanPage() {
  return (
    <>
      <SectionHeading eyebrow="UJI PEMAHAMAN" title="Latihan interaktif" description="Kerjakan kuis singkat untuk menguji pemahaman kosakata dan ungkapan bahasa Arab. Hasil latihan tersimpan di browser." />
      <div className="panel" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, padding: "13px 16px" }}><span className="stat-icon"><ClipboardCheck size={19} /></span><div><strong style={{ fontSize: 11 }}>Kuis kosakata dan ungkapan</strong><p style={{ margin: "4px 0 0", color: "#8a979b", fontSize: 10 }}>5 pertanyaan · Pilihan ganda · Hasil tersimpan otomatis</p></div></div>
      <QuizClient />
    </>
  );
}
