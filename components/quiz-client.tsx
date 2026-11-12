"use client";

import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, RotateCcw, Target } from "lucide-react";
import { quizQuestions } from "@/lib/data";
import { Arabic } from "@/components/arabic";
import { useProgress } from "@/components/progress-provider";

export function QuizClient() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { saveQuizResult } = useProgress();
  const question = quizQuestions[index];

  function nextQuestion() {
    if (index === quizQuestions.length - 1) {
      const finalScore = score + (selected === question.answer && !checked ? 1 : 0);
      setScore(finalScore);
      saveQuizResult(finalScore, quizQuestions.length);
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
    setChecked(false);
  }

  function checkAnswer() {
    if (selected === null) return;
    if (selected === question.answer) setScore((value) => value + 1);
    setChecked(true);
  }

  function restart() {
    setIndex(0); setSelected(null); setChecked(false); setScore(0); setFinished(false);
  }

  if (finished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="quiz-card quiz-result">
        <div className="result-circle">{percentage}%</div>
        <h2>{percentage >= 80 ? "Hasil sangat baik!" : percentage >= 60 ? "Terus tingkatkan!" : "Tetap semangat belajar!"}</h2>
        <p>Kamu menjawab {score} dari {quizQuestions.length} pertanyaan dengan benar.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 9, flexWrap: "wrap", marginTop: 18 }}><button className="btn-primary" onClick={restart}><RotateCcw size={15} /> Ulangi latihan</button><a className="btn-outline" href="/progress">Lihat progres</a></div>
      </div>
    );
  }

  return (
    <div className="quiz-layout">
      <section className="quiz-card">
        <div className="quiz-topline"><span>PERTANYAAN {index + 1} DARI {quizQuestions.length}</span><span>Skor sementara: {score}</span></div>
        <div className="progress-track" style={{ marginTop: 10 }}><div className="progress-fill" style={{ width: `${((index + 1) / quizQuestions.length) * 100}%` }} /></div>
        <h2 className="quiz-question">{question.question}</h2>
        {question.arabic && <div className="quiz-arabic"><Arabic>{question.arabic}</Arabic></div>}
        <div className="quiz-options">{question.options.map((option, optionIndex) => {
          const isCorrect = checked && optionIndex === question.answer;
          const isIncorrect = checked && selected === optionIndex && optionIndex !== question.answer;
          return <button key={option} className={`quiz-option ${selected === optionIndex ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isIncorrect ? "incorrect" : ""}`} onClick={() => !checked && setSelected(optionIndex)} disabled={checked}>
            <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>{option}{isCorrect && <CheckCircle2 size={16} style={{ marginLeft: "auto" }} />}
          </button>;
        })}</div>
        {checked && <div className="quiz-feedback"><strong>{selected === question.answer ? "Benar." : "Belum tepat."}</strong> {question.explanation}</div>}
        <div className="quiz-footer"><span style={{ color: "#9aa5a9", fontSize: 10 }}>Pilih satu jawaban yang paling tepat.</span>{!checked ? <button className="btn-primary" disabled={selected === null} onClick={checkAnswer}>Periksa jawaban <CheckCircle2 size={15} /></button> : <button className="btn-primary" onClick={nextQuestion}>{index === quizQuestions.length - 1 ? "Lihat hasil" : "Pertanyaan berikutnya"} <ChevronRight size={15} /></button>}</div>
      </section>
      <aside className="quiz-side-card"><h3><Target size={15} style={{ display: "inline", marginRight: 6, color: "#16745d" }} />Petunjuk latihan</h3><p>Baca setiap pertanyaan dengan teliti. Perhatikan bentuk kata dan konteks penggunaannya. Setelah memilih jawaban, tekan tombol periksa untuk melihat penjelasan.</p><div style={{ marginTop: 16, paddingTop: 13, borderTop: "1px solid #edf1ee" }}><strong style={{ fontSize: 10 }}>Kompetensi yang dilatih</strong><ul style={{ margin: "9px 0 0", paddingLeft: 17, color: "#829097", fontSize: 10, lineHeight: 2 }}><li>Pemahaman kosakata</li><li>Ungkapan komunikatif</li><li>Makna kalimat sederhana</li></ul></div></aside>
    </div>
  );
}
