type Params = { lang: string };

function copy(lang: string) {
  const c = {
    en: {
      title: "About",
      b1Title: "Short background",
      b1Body:
        "I build web products and AI-enabled features with a focus on clarity, speed, and long-term maintainability. I enjoy turning messy requirements into simple, usable systems.",
      b2Title: "How I work",
      b2Items: [
        "I start by clarifying the problem and success criteria.",
        "I ship the simplest working version first, then iterate.",
        "I prefer measurable outcomes over vague “nice-to-haves”.",
      ],
      b3Title: "What I avoid",
      b3Items: [
        "Overengineering and unnecessary complexity.",
        "Buzzword-driven decisions without clear user value.",
        "Fragile setups that require constant maintenance.",
      ],
    },
    tr: {
      title: "Hakkımda",
      b1Title: "Kısa özet",
      b1Body:
        "Web ürünleri ve AI destekli özellikler geliştiriyorum. Önceliğim netlik, hız ve uzun vadede sürdürülebilirlik. Dağınık ihtiyaçları sade ve kullanılabilir sistemlere dönüştürmeyi seviyorum.",
      b2Title: "Nasıl çalışırım?",
      b2Items: [
        "Önce problemi ve başarı kriterini netleştiririm.",
        "İlk olarak en basit çalışan versiyonu çıkarır, sonra iterasyon yaparım.",
        "Belirsiz “olsa iyi olur” yerine ölçülebilir çıktıları tercih ederim.",
      ],
      b3Title: "Nelerden kaçınırım?",
      b3Items: [
        "Gereksiz overengineering ve fazladan karmaşa.",
        "Kullanıcı değeri net olmayan buzzword kararları.",
        "Sürekli bakım isteyen kırılgan kurulumlar.",
      ],
    },
    de: {
      title: "Ueber mich",
      b1Title: "Kurzprofil",
      b1Body:
        "Ich entwickle Web-Produkte und KI-Features mit Fokus auf Klarheit, Geschwindigkeit und langfristige Wartbarkeit. Ich mag es, unklare Anforderungen in einfache, nutzbare Systeme zu verwandeln.",
      b2Title: "Arbeitsweise",
      b2Items: [
        "Zuerst klaere ich Problem und Erfolgskriterien.",
        "Ich liefere die einfachste funktionierende Version und iteriere dann.",
        "Messbare Ergebnisse sind mir wichtiger als vage “nice-to-haves”.",
      ],
      b3Title: "Was ich vermeide",
      b3Items: [
        "Overengineering und unnoetige Komplexitaet.",
        "Buzzword-Entscheidungen ohne klaren Nutzwert.",
        "Fragile Setups mit dauerhaftem Wartungsaufwand.",
      ],
    },
  } as const;

  return c[(lang as keyof typeof c) ?? "en"] ?? c.en;
}

export default function About({ params }: { params: Params }) {
  const lang = params.lang || "en";
  const c = copy(lang);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 920, margin: "0 auto" }}>
      <h1 style={{ margin: "16px 0 18px" }}>{c.title}</h1>

      <section style={{ padding: "18px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 10px" }}>{c.b1Title}</h2>
        <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7 }}>{c.b1Body}</p>
      </section>

      <section style={{ padding: "18px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 10px" }}>{c.b2Title}</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          {c.b2Items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "18px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ margin: "0 0 10px" }}>{c.b3Title}</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          {c.b3Items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}