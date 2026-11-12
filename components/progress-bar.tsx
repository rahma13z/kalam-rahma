export function ProgressBar({ value, label, showValue = true }: { value: number; label?: string; showValue?: boolean }) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-wrap">
      {(label || showValue) && <div className="progress-meta">{label && <span>{label}</span>}{showValue && <strong>{safeValue}%</strong>}</div>}
      <div className="progress-track"><div className="progress-fill" style={{ width: `${safeValue}%` }} /></div>
    </div>
  );
}
