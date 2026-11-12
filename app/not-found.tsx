import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="panel" style={{ maxWidth: 560, margin: "50px auto", padding: 35, textAlign: "center" }}>
      <SearchX size={34} color="#16745d" style={{ margin: "0 auto 12px" }} />
      <h1 style={{ margin: "0 0 8px", fontSize: 22 }}>Materi tidak ditemukan</h1>
      <p style={{ color: "#829097", fontSize: 11, lineHeight: 1.7 }}>Materi yang kamu cari belum tersedia atau alamat halaman tidak tepat.</p>
      <Link href="/materi" className="btn-primary" style={{ marginTop: 12 }}><ArrowLeft size={14} /> Kembali ke materi</Link>
    </div>
  );
}
