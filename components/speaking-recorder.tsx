"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Mic, MicOff, RotateCcw, ShieldCheck, Square } from "lucide-react";

export function SpeakingRecorder() {
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "MediaRecorder" in window && !!navigator.mediaDevices?.getUserMedia);
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  async function startRecording() {
    setError("");
    if (!supported) {
      setError("Browser atau perangkat ini belum mendukung perekaman audio. Gunakan Chrome, Edge, atau Firefox versi terbaru.");
      return;
    }
    try {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        setRecording(false);
      };
      recorder.start();
      setRecording(true);
    } catch {
      setError("Akses mikrofon tidak tersedia. Izinkan penggunaan mikrofon pada browser dan pastikan website dibuka melalui HTTPS atau localhost.");
      setRecording(false);
    }
  }

  function stopRecording() {
    if (recorderRef.current && recorderRef.current.state !== "inactive") recorderRef.current.stop();
  }

  function clearRecording() {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setError("");
  }

  return (
    <div className="recorder-panel">
      <div className="recorder-prompt">
        <span className="topic-tag">TUGAS BERBICARA</span>
        <span className="arabic-text" lang="ar" dir="rtl">عَرِّفْ بِنَفْسِكَ</span>
        <h3>Perkenalkan dirimu dalam bahasa Arab.</h3>
        <p>Sampaikan nama, asal daerah, status sebagai pelajar, dan hobi. Gunakan kalimat sederhana yang sudah kamu pelajari.</p>
        <div style={{ marginTop: 15, paddingTop: 13, borderTop: "1px solid rgba(97,157,198,.12)" }}><strong style={{ fontSize: 10, color: "#527566" }}>Panduan latihan</strong><ol style={{ margin: "8px 0 0", paddingLeft: 17, color: "#7d8e84", fontSize: 10, lineHeight: 1.9 }}><li>Siapkan jawaban selama satu menit.</li><li>Ucapkan kalimat dengan jelas.</li><li>Dengarkan kembali hasil rekaman.</li></ol></div>
      </div>
      <div className="recorder-control">
        <div className={`mic-orb ${recording ? "recording" : ""}`}>{recording ? <Mic size={37} /> : <MicOff size={37} />}</div>
        <h3>{recording ? "Sedang merekam suara" : audioUrl ? "Rekaman siap diputar" : "Siap untuk latihan?"}</h3>
        <p>{recording ? "Berbicara dengan jelas. Tekan berhenti setelah selesai." : audioUrl ? "Dengarkan kembali dan evaluasi pelafalanmu." : "Izinkan akses mikrofon untuk memulai."}</p>
        <div className="record-actions">
          {!recording ? <button className="btn-primary" onClick={startRecording}><Mic size={15} /> Mulai merekam</button> : <button className="btn-primary" style={{ background: "#a94e43" }} onClick={stopRecording}><Square size={14} /> Berhenti</button>}
          {audioUrl && <><a className="btn-outline" href={audioUrl} download="latihan-maharah-kalam.webm"><Download size={14} /> Unduh</a><button className="btn-quiet" onClick={clearRecording}><RotateCcw size={14} /> Ulangi</button></>}
        </div>
        {audioUrl && <div className="audio-preview"><audio controls src={audioUrl}>Browser tidak mendukung pemutar audio.</audio></div>}
        {error && <div className="notice" style={{ marginTop: 13, textAlign: "left" }}>{error}</div>}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 17, color: "#98a3a5", fontSize: 9 }}><ShieldCheck size={13} /> Rekaman diproses di browser dan tidak dikirim ke server.</div>
      </div>
    </div>
  );
}
