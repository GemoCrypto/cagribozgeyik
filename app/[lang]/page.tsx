"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getLang(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0] || "en";
  const l = seg.toLowerCase().slice(0, 2);
  return l === "tr" || l === "de" || l === "en" ? l : "en";
}

export default function Home() {
  const pathname = usePathname() || "/en";
  const lang = getLang(pathname);

  const copy = {
    en: {
      heroTitle: "Web + AI solutions, built lean and sustainable.",
      heroSub: "From idea to a working product—without overengineering.",
      what: "What I do",
      what1: "Web systems",
      what1s: "Fast, maintainable websites and apps.",
      what2: "AI solutions",
      what2s: "Practical AI features that solve real problems.",
      what3: "Automation",
      what3s: "Reduce manual work with smart workflows.",
      how: "How I work",
      how1: "Clarify the problem first",
      how2: "Ship the simplest working version",
      how3: "Iterate with measurable impact",
      selected: "Selected work",
      card1Title: "Mono AI / CV Bot",
      card1Desc: "Invite-only prototype for CV analysis and improvements.",
      card2Title: "Website AI Chat (Invite-only)",
      card2Desc: "Embedded assistant to showcase AI capability on a personal site.",
      viewAll: "View all projects →",
      cta: "Contact",
    },
    tr: {
      heroTitle: "Web + AI çözümleri: sade, hızlı, sürdürülebilir.",
      heroSub: "Fikirden çalışan ürüne—gereksiz overengineering olmadan.",
      what: "Ne yapıyorum?",
      what1: "Web sistemleri",
      what1s: "Hızlı ve bakımı kolay web çözümleri.",
      what2: "AI çözümleri",
      what2s: "Gerçek problemleri çözen pratik AI özellikleri.",
      what3: "Otomasyon",
      what3s: "Tekrarlı işleri akıllı akışlarla azaltma.",
      how: "Nasıl çalışırım?",
      how1: "Önce problemi netleştiririm",
      how2: "En basit çalışan versiyonu çıkarırım",
      how3: "Ölçülebilir etkiyle iterasyon yaparım",
      selected: "Seçili işler",
      card1Title: "Mono AI / CV Bot",
      card1Desc: "CV analiz ve iyileştirme için davetli prototip.",
      card2Title: "Web Sitesi AI Chat (Davetli)",
      card2Desc: "Kişisel sitede AI yetkinliğini gösteren gömülü asistan.",
      viewAll: "Tüm projeler →",
      cta: "İletişim",
    },
    de: {
      heroTitle: "Web- und KI-Loesungen, schlank und nachhaltig gebaut.",
      heroSub: "Von der Idee zum funktionierenden Produkt—ohne Overengineering.",
      what: "Was ich mache",
      what1: "Web-Systeme",
      what1s: "Schnelle, wartbare Websites und Apps.",
      what2: "KI-Loesungen",
      what2s: "Praktische KI-Funktionen fuer echte Probleme.",
      what3: "Automatisierung",
      what3s: "Weniger Handarbeit durch smarte Workflows.",
      how: "Arbeitsweise",
      how1: "Zuerst Problem klaeren",
      how2: "Einfachste funktionierende Version liefern",
      how3: "Iterieren mit messbarem Effekt",
      selected: "Ausgewaehlte Projekte",
      card1Title: "Mono AI / CV Bot",
      card1Desc: "Invite-only Prototyp fuer CV-Analyse und Verbesserungen.",
      card2Title: "Website KI-Chat (Invite-only)",
      card2Desc: "Eingebetteter Assistent als KI-Showcase auf der Website.",
      viewAll: "Alle Projekte →",
      cta: "Kontakt",
    },
  } as const;

  const c = copy[lang];
  const workHref = `/${lang}/work`;

  const cardStyle: React.CSSProperties = {
    border: "1px solid #eee",
    borderRadius: 12,
    padding: 16,
    textDecoration: "none",
    color: "inherit",
    display: "block",
  };

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 920, margin: "0 auto" }}>
      <section style={{ padding: "24px 0" }}>
        <h1 style={{ fontSize: 34, margin: "0 0 8px" }}>{c.heroTitle}</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>{c.heroSub}</p>
      </section>

      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 12px" }}>{c.what}</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>
            <b>{c.what1}:</b> {c.what1s}
          </li>
          <li>
            <b>{c.what2}:</b> {c.what2s}
          </li>
          <li>
            <b>{c.what3}:</b> {c.what3s}
          </li>
        </ul>
      </section>

      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 12px" }}>{c.how}</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>{c.how1}</li>
          <li>{c.how2}</li>
          <li>{c.how3}</li>
        </ul>
      </section>

      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
          <h2 style={{ margin: "0 0 12px" }}>{c.selected}</h2>
          <Link href={workHref} style={{ fontSize: 14 }}>
            {c.viewAll}
          </Link>
        </div>

        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <Link href={workHref} style={cardStyle}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{c.card1Title}</div>
            <div style={{ opacity: 0.85, lineHeight: 1.6 }}>{c.card1Desc}</div>
          </Link>

          <Link href={workHref} style={cardStyle}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{c.card2Title}</div>
            <div style={{ opacity: 0.85, lineHeight: 1.6 }}>{c.card2Desc}</div>
          </Link>
        </div>
      </section>

      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 12px" }}>{c.cta}</h2>
        <p style={{ margin: 0 }}>
          Email: <a href="mailto:cagribozgeyik@gmail.com">cagribozgeyik@gmail.com</a>
        </p>
      </section>
    </main>
  );
}