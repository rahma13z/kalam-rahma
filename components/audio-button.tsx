"use client";

import { useState } from "react";
import { Pause, Volume2 } from "lucide-react";

export function AudioButton({ text, label = "Dengarkan pelafalan", compact = false }: { text: string; label?: string; compact?: boolean }) {
  const [playing, setPlaying] = useState(false);

  function handleSpeak() {
    // Pisahkan pemeriksaan window agar TypeScript tidak menyempitkan
    // objek window menjadi never pada cabang kondisi gabungan.
    if (typeof window === "undefined") return;

    const synthesis = window.speechSynthesis;
    if (typeof synthesis === "undefined") {
      window.alert(
        "Browser ini belum mendukung fitur pembaca suara. Coba gunakan Chrome atau Edge versi terbaru."
      );
      return;
    }

    if (playing) {
      synthesis.cancel();
      setPlaying(false);
      return;
    }

    synthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    utterance.rate = 0.82;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    setPlaying(true);
    synthesis.speak(utterance);
  }

  return (
    <button className={`audio-button ${compact ? "audio-compact" : ""} ${playing ? "is-playing" : ""}`} onClick={handleSpeak} type="button" aria-label={playing ? "Hentikan audio" : label}>
      {playing ? <Pause size={compact ? 15 : 17} /> : <Volume2 size={compact ? 15 : 17} />}
      {!compact && <span>{playing ? "Hentikan" : "Dengarkan"}</span>}
    </button>
  );
}
