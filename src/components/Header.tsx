"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = ["en", "tr", "de"] as const;

function replaceLang(pathname: string, nextLang: string) {
  // pathname: /en, /en/work, /tr/about ...
  const parts = pathname.split("/").filter(Boolean); // ["en","work"]
  if (parts.length === 0) return `/${nextLang}`;
  parts[0] = nextLang;
  return "/" + parts.join("/");
}

export default function Header() {
  const pathname = usePathname() || "/en";
  const current = pathname.split("/").filter(Boolean)[0] || "en";

  return (
    <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link href={`/${current}`}>Home</Link>
          <Link href={`/${current}/work`}>Work</Link>
          <Link href={`/${current}/about`}>About</Link>
          <Link href={`/${current}/contact`}>Contact</Link>
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
