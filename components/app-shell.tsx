"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen, ChartNoAxesCombined, ChevronRight, GraduationCap, House,
  Languages, LibraryBig, Menu, Mic2, MessageCircle, PanelLeftClose,
  PanelLeftOpen, X, Sparkles
} from "lucide-react";
import type { ReactNode } from "react";
import { ProgressProvider } from "@/components/progress-provider";

const navItems = [
  { href: "/", label: "Beranda", icon: House },
  { href: "/materi", label: "Materi belajar", icon: BookOpen },
  { href: "/hiwar", label: "Hiwar", icon: MessageCircle },
  { href: "/mufradat", label: "Mufradat", icon: Languages },
  { href: "/latihan", label: "Latihan", icon: LibraryBig },
  { href: "/speaking", label: "Speaking practice", icon: Mic2 },
  { href: "/progress", label: "Progres belajar", icon: ChartNoAxesCombined }
];

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <aside className="sidebar-inner">
      <Link href="/" className="brand" onClick={onNavigate}>
        <span className="brand-mark"><GraduationCap size={23} strokeWidth={2.1} /></span>
        <span className="brand-copy"><strong>Maharah<span>Kalam</span></strong><small>Arabic learning space</small></span>
      </Link>
      <div className="sidebar-label">MENU UTAMA</div>
      <nav className="side-nav" aria-label="Navigasi utama">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link key={item.href} href={item.href} onClick={onNavigate} className={`nav-link ${active ? "active" : ""}`}>
              <Icon size={18} strokeWidth={1.9} />
              <span>{item.label}</span>
              {active && <ChevronRight size={15} className="nav-chevron" />}
            </Link>
          );
        })}
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-quote">
          <span className="quote-icon"><Sparkles size={16} /></span>
          <p>اَللُّغَةُ مِفْتَاحُ العِلْمِ</p>
          <small>Bahasa adalah kunci ilmu.</small>
        </div>
        <div className="sidebar-version"><span className="status-dot" /> Ruang belajar mandiri <span>v1.0</span></div>
      </div>
    </aside>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const current = navItems.find((item) => item.href === pathname || (item.href !== "/" && pathname.startsWith(`${item.href}/`)));
  const pageTitle = current?.label ?? "Ruang belajar";

  return (
    <ProgressProvider>
      <div className={`app-frame ${collapsed ? "sidebar-collapsed" : ""}`}>
        <div className={`sidebar-wrap ${mobileOpen ? "mobile-visible" : ""}`}>
          <Sidebar onNavigate={() => setMobileOpen(false)} />
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Tutup menu"><X size={20} /></button>
        </div>
        {mobileOpen && <button className="mobile-backdrop" onClick={() => setMobileOpen(false)} aria-label="Tutup navigasi" />}
        <div className="main-column">
          <header className="topbar">
            <div className="topbar-left">
              <button className="icon-button mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Buka menu"><Menu size={20} /></button>
              <button className="icon-button collapse-button" onClick={() => setCollapsed((value) => !value)} aria-label="Ciutkan sidebar">
                {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
              </button>
              <div className="topbar-heading"><span>AREA PEMBELAJARAN</span><strong>{pageTitle}</strong></div>
            </div>
            <div className="topbar-right">
              <span className="learning-chip"><span className="status-dot" /> Mode belajar mandiri</span>
              <div className="avatar">S</div>
            </div>
          </header>
          <main className="page-content">{children}</main>
          <footer className="site-footer"><span>© {new Date().getFullYear()} Maharah Kalam</span><span>Belajar bahasa Arab, selangkah setiap hari.</span></footer>
        </div>
      </div>
    </ProgressProvider>
  );
}
