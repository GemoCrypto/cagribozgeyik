"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = ["en", "tr", "de"] as const;

const LABELS = {
  en: { home: "Home", work: "Work", about: "About", contact: "Contact" },
  tr: { home: "Anasayfa", work: "Projeler", about: "Hakkımda", contact: "İletişim" },
  de: { home: "Start", work: "Projekte", about: "Ueber mich", contact: "Kontakt" },
} as const;

function replaceLang(pathname: string, nextLang: string) {
  const [path, hash] = pathname.split("#");
  const parts = (path || "").split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLang}${hash ? `#${hash}` : ""}`;
  parts[0] = nextLang;
  return "/" + parts.join("/") + (hash ? `#${hash}` : "");
}

export default function Header() {
  const pathname = usePathname() || "/en";
  const current = (pathname.split("/").filter(Boolean)[0] || "en") as keyof typeof LABELS;

  // ✅ Home section anchors (scroll)
  const hrefHome = `/${current}#top`;
  const hrefAbout = `/${current}#about`;
  const hrefWork = `/${current}#projects`;
  const hrefContact = `/${current}#contact`;

  const labels = LABELS[current] ?? LABELS.en;

  return (
    <header
      style={{
        padding: 16,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(10px)",
        background: "rgba(10,10,12,0.72)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link href={hrefHome}>{labels.home}</Link>
          <Link href={hrefAbout}>{labels.about}</Link>
          <Link href={hrefWork}>{labels.work}</Link>
          <Link href={hrefContact}>{labels.contact}</Link>
        </nav>

        <div style={{ display: "flex", gap: 10, fontSize: 14 }}>
          {LANGS.map((l) => {
            const href = replaceLang(pathname, l);
            const active = l === current;
            return (
              <Link key={l} href={href} style={{ fontWeight: active ? 800 : 500 }}>
                {l.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}