"use client";

import { usePathname } from "next/navigation";

function getLang(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0] || "en";
  const l = seg.toLowerCase().slice(0, 2);
  return l === "tr" || l === "de" || l === "en" ? l : "en";
}

export default function Work() {
  const pathname = usePathname() || "/en";
  const lang = getLang(pathname);

  const copy = {
    en: {
      title: "Work",
      intro:
        "Selected projects that demonstrate how I build practical web and AI solutions—lean, measurable, and maintainable.",
      projectTitle: "Mono AI / CV Bot (Invite-only prototype)",
      projectTagline:
        "An AI assistant that helps structure, analyze, and improve a CV—built to be usable, not flashy.",
      problemTitle: "Problem",
      problemBody:
        "CV reviews are time-consuming and inconsistent. Most people need fast, actionable feedback in a clear structure.",
      approachTitle: "Approach",
      approachBody:
        "I designed a simple conversational flow with guardrails, focusing on clarity and repeatability. The goal was a realistic prototype that could be extended later—without overengineering.",
      solutionTitle: "Solution",
      solutionBody:
        "A CV-focused assistant that guides users through inputs, suggests improvements, and outputs a cleaner, more job-ready version. The system is built to be demo-friendly and expandable.",
      outcomeTitle: "Outcome",
      outcomeBody:
        "A working prototype that demonstrates AI capability, product thinking, and clean UX. It’s easy to present in interviews and credible for potential clients.",
      notesTitle: "Notes",
      notesBody:
        "Details like hosting and integrations are intentionally kept minimal at this stage. The goal is a stable, easy-to-maintain showcase.",
    },
    tr: {
      title: "Projeler",
      intro:
        "Web ve AI çözümlerini nasıl sade, ölçülebilir ve sürdürülebilir şekilde geliştirdiğimi gösteren seçili çalışmalar.",
      projectTitle: "Mono AI / CV Bot (Davetli prototip)",
      projectTagline:
        "CV’yi düzenlemeye ve geliştirmeye yardımcı olan, gösteriş değil kullanılabilirlik odaklı bir AI asistanı.",
      problemTitle: "Problem",
      problemBody:
        "CV inceleme süreçleri zaman alıyor ve tutarsız olabiliyor. İnsanların hızlı, net ve uygulanabilir geri bildirime ihtiyacı var.",
      approachTitle: "Yaklaşım",
      approachBody:
        "Basit bir konuşma akışı ve koruyucu kurallar (guardrails) tasarladım. Hedef: gereksiz karmaşa olmadan, ileride genişleyebilecek gerçekçi bir prototip.",
      solutionTitle: "Çözüm",
      solutionBody:
        "Kullanıcıdan girdileri toplayan, iyileştirme önerileri sunan ve daha işe uygun bir CV çıktısı üreten CV odaklı asistan. Demo ve geliştirme için uygun bir yapı.",
      outcomeTitle: "Sonuç",
      outcomeBody:
        "AI yetkinliğini, ürün düşüncesini ve temiz UX yaklaşımını gösteren çalışan bir prototip. İş görüşmeleri ve potansiyel müşteriler için güçlü kanıt.",
      notesTitle: "Not",
      notesBody:
        "Hosting/entegrasyon gibi detaylar bu aşamada bilinçli olarak minimal tutuldu. Hedef: stabil ve bakımı kolay bir vitrin.",
    },
    de: {
      title: "Projekte",
      intro:
        "Ausgewaehlte Projekte, die zeigen, wie ich praxisnahe Web- und KI-Loesungen schlank, messbar und wartbar umsetze.",
      projectTitle: "Mono AI / CV Bot (Invite-only Prototyp)",
      projectTagline:
        "Ein KI-Assistent, der beim Strukturieren, Analysieren und Verbessern eines Lebenslaufs hilft—nutzbar statt flashy.",
      problemTitle: "Problem",
      problemBody:
        "Lebenslauf-Reviews sind zeitaufwendig und oft inkonsistent. Viele brauchen schnelles, klares und umsetzbares Feedback.",
      approachTitle: "Ansatz",
      approachBody:
        "Ein einfacher Dialogfluss mit Guardrails, Fokus auf Klarheit und Wiederholbarkeit. Ziel: ein realistischer Prototyp ohne Overengineering.",
      solutionTitle: "Loesung",
      solutionBody:
        "Ein CV-Assistent, der Inputs strukturiert sammelt, Verbesserungen vorschlaegt und eine klarere Version erzeugt. Demo-tauglich und spaeter erweiterbar.",
      outcomeTitle: "Ergebnis",
      outcomeBody:
        "Ein funktionierender Prototyp, der KI-Kompetenz, Produktdenken und saubere UX zeigt. Gut fuer Interviews und potenzielle Kunden.",
      notesTitle: "Notiz",
      notesBody:
        "Hosting/Integrationen werden bewusst minimal gehalten. Ziel: ein stabiler, leicht wartbarer Showcase.",
    },
  } as const;

  const c = copy[lang];

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 920, margin: "0 auto" }}>
      <h1 style={{ margin: "16px 0 8px" }}>{c.title}</h1>
      <p style={{ margin: "0 0 24px", opacity: 0.8 }}>{c.intro}</p>

      <section style={{ border: "1px solid #eee", borderRadius: 12, padding: 18 }}>
        <h2 style={{ margin: "0 0 6px" }}>{c.projectTitle}</h2>
        <p style={{ margin: "0 0 16px", opacity: 0.85 }}>{c.projectTagline}</p>

        <div style={{ display: "grid", gap: 14 }}>
          <div>
            <h3 style={{ margin: "0 0 6px" }}>{c.problemTitle}</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>{c.problemBody}</p>
          </div>

          <div>
            <h3 style={{ margin: "0 0 6px" }}>{c.approachTitle}</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>{c.approachBody}</p>
          </div>

          <div>
            <h3 style={{ margin: "0 0 6px" }}>{c.solutionTitle}</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>{c.solutionBody}</p>
          </div>

          <div>
            <h3 style={{ margin: "0 0 6px" }}>{c.outcomeTitle}</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>{c.outcomeBody}</p>
          </div>

          <div style={{ borderTop: "1px solid #eee", paddingTop: 12 }}>
            <h3 style={{ margin: "0 0 6px" }}>{c.notesTitle}</h3>
            <p style={{ margin: 0, opacity: 0.85 }}>{c.notesBody}</p>
          </div>
        </div>
      </section>
    </main>
  );
}