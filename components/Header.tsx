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
  const parts = pathname.split("/").filter(Boolean); // ["en","work"]
  if (parts.length === 0) return `/${nextLang}`;
  parts[0] = nextLang;
  return "/" + parts.join("/");
}

export default function Header() {
  const pathname = usePathname() || "/en";
  const current = (pathname.split("/").filter(Boolean)[0] || "en") as keyof typeof LABELS;

  const hrefHome = `/${current}`;
  const hrefWork = `/${current}/work`;
  const hrefAbout = `/${current}/about`;
  const hrefContact = `/${current}/contact`;

  const labels = LABELS[current] ?? LABELS.en;

  return (
    <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link href={hrefHome}>{labels.home}</Link>
          <Link href={hrefWork}>{labels.work}</Link>
          <Link href={hrefAbout}>{labels.about}</Link>
          <Link href={hrefContact}>{labels.contact}</Link>
        </nav>

        <div style={{ display: "flex", gap: 10, fontSize: 14 }}>
          {LANGS.map((l) => {
            const href = replaceLang(pathname, l);
            const active = l === current;
            return (
              <Link key={l} href={href} style={{ fontWeight: active ? 700 : 400 }}>
                {l.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}