import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Maharah Kalam | Belajar Keterampilan Berbicara Bahasa Arab",
  description: "Platform pembelajaran mandiri untuk meningkatkan keterampilan berbicara bahasa Arab melalui materi, hiwar, mufradat, latihan, dan speaking practice."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body><AppShell>{children}</AppShell></body>
    </html>
  );
}
