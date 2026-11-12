import type { ReactNode } from "react";

export function Arabic({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`arabic-text ${className}`} lang="ar" dir="rtl">{children}</span>;
}
