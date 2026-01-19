type Params = { lang: string };

function t(lang: string) {
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
      cta: "Kontakt",
    },
  } as const;

  return copy[(lang as keyof typeof copy) ?? "en"] ?? copy.en;
}

export default function Home({ params }: { params: Params }) {
  const lang = params.lang || "en";
  const c = t(lang);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 920, margin: "0 auto" }}>
      {/* HERO */}
      <section style={{ padding: "24px 0" }}>
        <h1 style={{ fontSize: 34, margin: "0 0 8px" }}>{c.heroTitle}</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>{c.heroSub}</p>
      </section>

      {/* WHAT I DO */}
      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 12px" }}>{c.what}</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li><b>{c.what1}:</b> {c.what1s}</li>
          <li><b>{c.what2}:</b> {c.what2s}</li>
          <li><b>{c.what3}:</b> {c.what3s}</li>
        </ul>
      </section>

      {/* HOW I WORK */}
      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 12px" }}>{c.how}</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>{c.how1}</li>
          <li>{c.how2}</li>
          <li>{c.how3}</li>
        </ul>
      </section>

      {/* SELECTED WORK (placeholder) */}
      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 12px" }}>{c.selected}</h2>
        <p style={{ margin: 0, opacity: 0.8 }}>
          Coming next: 2–3 highlighted projects (including the Mono AI / CV bot).
        </p>
      </section>

      {/* CTA */}
      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 12px" }}>{c.cta}</h2>
        <p style={{ margin: 0 }}>
          Email: <a href="mailto:you@example.com">you@example.com</a>
        </p>
      </section>
    </main>
  );
}
