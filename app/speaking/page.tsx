import { Info, Mic2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SpeakingRecorder } from "@/components/speaking-recorder";

export default function SpeakingPage() {
  return (
    <>
      <SectionHeading eyebrow="LATIHAN PRODUKSI LISAN" title="Speaking practice" description="Latih kemampuan berbicara dengan merekam jawabanmu. Putar ulang rekaman dan evaluasi kejelasan pelafalan secara mandiri." />
      <div className="panel" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, padding: "13px 16px" }}><span className="stat-icon"><Mic2 size={19} /></span><div><strong style={{ fontSize: 11 }}>Latihan mandiri dengan perekam suara</strong><p style={{ margin: "4px 0 0", color: "#8a979b", fontSize: 10 }}>Rekaman dapat diputar dan diunduh. Browser akan meminta izin akses mikrofon.</p></div></div>
      <SpeakingRecorder />
      <div className="notice" style={{ marginTop: 16 }}><Info size={16} /> Fitur ini belum memberikan penilaian otomatis terhadap makharijul huruf, kelancaran, atau tata bahasa. Gunakan rubrik penilaian mandiri atau minta umpan balik dari pengajar.</div>
    </>
  );
}
