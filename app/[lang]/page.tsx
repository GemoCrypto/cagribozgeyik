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
      name: "ÇAĞRI BOZGEYİK",
      title: "Feasibility & Innovation-Focused Project Advisor",
      location: "Based in Vienna, Austria",
      intro:
        "I advise and execute feasibility-driven projects—turning complex ideas into scalable outcomes through clear analysis, production strategy, and innovation-focused delivery.",
      aiNote:
        "For a deeper understanding of my background, decision-making style, and project alignment, you can consult my personalized AI assistant (English only).",
      sectionAbout: "Professional profile",
      about:
        "Multidisciplinary project advisor with experience across manufacturing, biotechnology, and agricultural technologies. Strong in feasibility studies, production planning, and market-entry execution, with a hands-on approach to technical coordination and quality.",
      sectionSkills: "Key skills",
      skills: [
        {
          k: "Feasibility Analysis & Market Research",
          v: "Market sizing, pricing logic, risk mapping, go/no-go decisions",
        },
        {
          k: "Production Process Management",
          v: "Process planning, quality mindset, execution under constraints",
        },
        {
          k: "Agricultural & Biotechnology Solutions",
          v: "Mycelium biomaterials, agricultural technology, applied R&D support",
        },
        {
          k: "Technical Project Planning",
          v: "Project structuring, stakeholder alignment, technical documentation",
        },
        {
          k: "AI Tools & Automation Expertise",
          v: "Practical AI workflows, lightweight automation, fast prototypes",
        },
        { k: "Tooling", v: "Advanced Excel, AutoCAD, SolidWorks, Adobe Suite, VS Code" },
      ],
      sectionExp: "Experience",
      exp: [
        {
          org: "Grauhirsch Mechatronik e.U (Vienna)",
          role: "Technical Planning & On-site Assembly (Temporary)",
          time: "Nov 2024 – Feb 2025",
          bullets: [
            "Planned LED lighting systems and technical layout.",
            "Managed technical design and executed on-site assembly.",
          ],
        },
        {
          org: "BioP Biotechnology (Vienna)",
          role: "Material and Performance Consultant",
          time: "Feb 2023 – Mar 2024",
          bullets: [
            "Provided consultancy on industrial mycelium-based biomaterials.",
            "Led material efficiency and performance optimization initiatives.",
          ],
        },
        {
          org: "Independent Consultant (İzmir & Vienna)",
          role: "Financial and Feasibility Advisor",
          time: "Jul 2022 – Jul 2024",
          bullets: [
            "Conducted market research and pricing analysis for companies entering new sectors.",
            "Prepared feasibility studies for cryptocurrency and securities markets.",
          ],
        },
        {
          org: "IQ Group (Ankara)",
          role: "Factory Manager",
          time: "May 2021 – May 2022",
          bullets: [
            "Managed large-scale production and international trade operations for medical textiles.",
            "Oversaw contract negotiations, logistics, and supply chain coordination.",
          ],
        },
        {
          org: "MAKENTEK (İzmir)",
          role: "Co-Founder & Production Supervisor",
          time: "Feb 2020 – Mar 2021",
          bullets: [
            "Developed disposable hygienic mask manufacturing machinery and process design.",
            "Supervised material quality control and production workflow.",
            "Contributed to planning subcontractor assembly-based projects.",
          ],
        },
        {
          org: "Greenpeace (İzmir)",
          role: "Resource Development Assistant (Part-time)",
          time: "2013 – 2014",
          bullets: [
            "Supported the resource development team in donor communication and fundraising operations.",
          ],
        },
      ],
      sectionProjects: "Projects",
      projectsIntro:
        "Selected work that demonstrates practical execution, feasibility thinking, and clean, maintainable delivery.",
      projects: [
        {
          title: "Mono AI Bot — Personalized AI Assistant",
          meta: "Creator • 2025–Present • Invite-only",
          bullets: [
            "Built a system that creates custom AI assistants based on user CV, ethics, and communication style.",
            "Automated persona creation and secure delivery via email.",
            "Focused on ethical decision modeling and adaptive AI behavior.",
          ],
          cta: "Live demo (invite-only)",
          href: "https://tinyurl.com/mono-ai-demo",
        },
        {
          title: "grauhirsch.at — Business Website (Next.js)",
          meta: "Web build • 2025 • Dark + minimal, production-ready",
          bullets: [
            "Designed and implemented a lean, maintainable company website with a clear service structure.",
            "Set up multilingual-friendly routing, clean UI components, and a fast, modern build pipeline.",
            "Handled deployment workflow and practical production details (stability-first, no overengineering).",
          ],
          cta: "Visit website",
          href: "https://grauhirsch.at",
        },
        {
          title: "Mycelium Biomaterials — Performance & Strategy Consulting",
          meta: "Consultant • 2023–2024",
          bullets: [
            "Strategic guidance and performance consulting for industrial mycelium-based biomaterials.",
            "Material efficiency and performance optimization initiatives.",
          ],
        },
        {
          title: "Feasibility & Market Entry — Crypto & Traditional Finance",
          meta: "Advisor • 2022–2024",
          bullets: [
            "Market assessment and feasibility studies for companies entering regulated sectors.",
            "Pricing analysis and risk mapping for crypto and traditional finance contexts.",
          ],
        },
        {
          title: "Mask Manufacturing Machinery — Process & Quality",
          meta: "Co-Founder • 2020–2021",
          bullets: [
            "Designed process flow and supervised quality control during machinery development.",
            "Planned subcontractor assembly-based project workflows.",
          ],
        },
        {
          title: "Photobioreactor Lighting Simulation (TÜBİTAK-supported)",
          meta: "Consultant • 2017",
          bullets: [
            "Consulted on light simulation for a TÜBİTAK-supported photobioreactor project with Dokuz Eylül University teams.",
          ],
        },
      ],
      sectionEdu: "Education & languages",
      edu: [
        "Dokuz Eylül University — Textile Engineering • 2012–2017",
        "Doğa College, Mersin • 2007–2011",
        "Occupational Health & Safety Training (non-certified) — Dokuz Eylül University • 2017",
      ],
      langs: [
        "Turkish — Native",
        "English — Working proficiency",
        "German — A2 (continuing)",
      ],
      sectionContact: "Contact",
      contactLine: "Email:",
      linkedinLine: "LinkedIn:",
      footer: "© 2026",
    },

    tr: {
      name: "ÇAĞRI BOZGEYİK",
      title: "Fizibilite ve İnovasyon Odaklı Proje Danışmanı",
      location: "Viyana, Avusturya",
      intro:
        "Fizibilite odaklı projelerde analiz ve yürütmeyi birleştirerek karmaşık fikirleri ölçeklenebilir sonuçlara dönüştürürüm; üretim stratejisi ve inovasyon odaklı teslimatla ilerlerim.",
      aiNote:
        "Arka planım, karar alma tarzım ve proje uyumum hakkında daha derin bir bakış için kişisel AI asistanımı kullanabilirsiniz (yalnızca İngilizce).",
      sectionAbout: "Profesyonel profil",
      about:
        "Üretim, biyoteknoloji ve tarım teknolojileri alanlarında deneyimli, çok disiplinli proje danışmanıyım. Fizibilite çalışmaları, üretim planlama ve pazara giriş yürütmesinde güçlüyüm; teknik koordinasyon ve kalite odağını saha pratiğiyle birlikte yönetirim.",
      sectionSkills: "Yetkinlikler",
      skills: [
        {
          k: "Fizibilite & Pazar Araştırması",
          v: "Pazar büyüklüğü, fiyatlama mantığı, risk haritalama, go/no-go kararları",
        },
        {
          k: "Üretim Süreci Yönetimi",
          v: "Süreç planlama, kalite odağı, kısıtlar altında yürütme",
        },
        {
          k: "Tarım & Biyoteknoloji",
          v: "Mycelium bazlı biyomalzemeler, tarım teknolojileri, uygulamalı Ar-Ge desteği",
        },
        {
          k: "Teknik Proje Planlama",
          v: "Proje yapılandırma, dokümantasyon, ekipler arası koordinasyon",
        },
        {
          k: "AI Araçları & Otomasyon",
          v: "Pratik AI iş akışları, hafif otomasyon, hızlı prototipleme",
        },
        { k: "Araçlar", v: "İleri Excel, AutoCAD, SolidWorks, Adobe Suite, VS Code" },
      ],
      sectionExp: "Deneyim",
      exp: [
        {
          org: "Grauhirsch Mechatronik e.U (Viyana)",
          role: "Teknik Planlama & Saha Montajı (Geçici)",
          time: "Kas 2024 – Şub 2025",
          bullets: [
            "LED aydınlatma sistemleri için teknik yerleşim ve planlama yaptı.",
            "Teknik tasarım ve sahada montaj/kurulum süreçlerinde yer aldı.",
          ],
        },
        {
          org: "BioP Biotechnology (Viyana)",
          role: "Malzeme ve Performans Danışmanı",
          time: "Şub 2023 – Mar 2024",
          bullets: [
            "Endüstriyel mycelium bazlı biyomalzemeler üzerine danışmanlık verdi.",
            "Verimlilik ve performans optimizasyonu çalışmalarını yürüttü.",
          ],
        },
        {
          org: "Bağımsız Danışman (İzmir & Viyana)",
          role: "Finansal & Fizibilite Danışmanı",
          time: "Tem 2022 – Tem 2024",
          bullets: [
            "Yeni sektöre giriş için pazar araştırması ve fiyatlama analizleri yaptı.",
            "Kripto para ve menkul kıymet piyasaları için fizibilite hazırladı.",
          ],
        },
        {
          org: "IQ Group (Ankara)",
          role: "Fabrika Müdürü",
          time: "May 2021 – May 2022",
          bullets: [
            "Medikal tekstilde yüksek hacimli üretim ve dış ticaret süreçlerini yönetti.",
            "Sözleşme, lojistik ve tedarik zinciri koordinasyonunu yürüttü.",
          ],
        },
        {
          org: "MAKENTEK (İzmir)",
          role: "Kurucu Ortak & Üretim Sorumlusu",
          time: "Şub 2020 – Mar 2021",
          bullets: [
            "Hijyenik maske üretim makinesi süreç tasarımına katkı sağladı.",
            "Malzeme kalite kontrolü ve üretim akışını yönetti.",
            "Taşeron montaj temelli projelerin planlamasında görev aldı.",
          ],
        },
        {
          org: "Greenpeace (İzmir)",
          role: "Kaynak Geliştirme Asistanı (Part-time)",
          time: "2013 – 2014",
          bullets: [
            "Kaynak geliştirme departmanında bağışçı iletişimi ve fon geliştirme süreçlerine destek verdi.",
          ],
        },
      ],
      sectionProjects: "Projeler",
      projectsIntro:
        "Fizibilite odaklı düşünce, teknik yürütme ve sürdürülebilir teslimat örnekleri.",
      projects: [
        {
          title: "Mono AI Bot — Kişiselleştirilmiş AI Asistan",
          meta: "Creator • 2025–Günümüz • Davetiye ile",
          bullets: [
            "CV, etik ve iletişim tarzına göre kişisel AI asistan üreten bir sistem.",
            "Persona üretimi ve e-posta ile güvenli teslimat otomasyonu.",
            "Etik karar modelleme ve adaptif davranış odaklı.",
          ],
          cta: "Canlı demo (davetiyeli)",
          href: "https://tinyurl.com/mono-ai-demo",
        },
        {
          title: "grauhirsch.at — Kurumsal Website (Next.js)",
          meta: "Web geliştirme • 2025 • Koyu tema + sade yapı",
          bullets: [
            "Net servis yapısı olan, bakımı kolay ve hızlı bir kurumsal site tasarladım ve geliştirdim.",
            "Çok dilliliğe uygun routing ve temiz component yapısı ile sürdürülebilir bir iskelet kurdum.",
            "Deploy süreci ve pratik üretim detaylarını yönettim (stabilite odaklı, overengineering yok).",
          ],
          cta: "Siteyi aç",
          href: "https://grauhirsch.at",
        },
        {
          title: "Mycelium Biyomalzeme — Performans & Strateji Danışmanlığı",
          meta: "Danışman • 2023–2024",
          bullets: [
            "Endüstriyel biyomalzemeler için stratejik ve performans danışmanlığı.",
            "Verimlilik ve performans optimizasyon çalışmaları.",
          ],
          cta: undefined,
          href: undefined,
        },
        {
          title: "Fizibilite & Pazara Giriş — Kripto & Geleneksel Finans",
          meta: "Danışman • 2022–2024",
          bullets: [
            "Regüle sektörlerde pazar değerlendirme ve fizibilite projeleri.",
            "Fiyatlama analizi ve risk haritalama.",
          ],
          cta: undefined,
          href: undefined,
        },
        {
          title: "Maske Üretim Makinesi — Süreç & Kalite",
          meta: "Kurucu • 2020–2021",
          bullets: [
            "Süreç akışı ve kalite kontrol yönetimi.",
            "Taşeron montaj temelli proje akışlarının planlanması.",
          ],
          cta: undefined,
          href: undefined,
        },
        {
          title: "Fotobiyoreaktör Aydınlatma Simülasyonu (TÜBİTAK)",
          meta: "Danışman • 2017",
          bullets: [
            "TÜBİTAK destekli fotobiyoreaktör projesi için ışık simülasyonu danışmanlığı.",
          ],
          cta: undefined,
          href: undefined,
        },
      ],
      sectionEdu: "Eğitim & diller",
      edu: [
        "Dokuz Eylül Üniversitesi — Tekstil Mühendisliği • 2012–2017",
        "Doğa Koleji, Mersin • 2007–2011",
        "İş Sağlığı ve Güvenliği Eğitimi (sertifikasız) — Dokuz Eylül Üniversitesi • 2017",
      ],
      langs: [
        "Türkçe — Anadili",
        "İngilizce — Çalışma düzeyi",
        "Almanca — A2 (devam ediyor)",
      ],
      sectionContact: "İletişim",
      contactLine: "E-posta:",
      linkedinLine: "LinkedIn:",
      footer: "© 2026",
    },

    de: {
      name: "ÇAĞRI BOZGEYİK",
      title: "Projektberater für Machbarkeit & Innovation",
      location: "Ansässig in Wien, Österreich",
      intro:
        "Ich begleite und realisiere machbarkeitsgetriebene Projekte und überführe komplexe Ideen in skalierbare Ergebnisse – durch klare Analyse, Produktionsstrategie und innovationsorientierte Umsetzung.",
      aiNote:
        "Für ein tieferes Verständnis meines Hintergrunds, meines Entscheidungsstils und der Projektpassung können Sie meinen personalisierten KI-Assistenten nutzen (nur Englisch).",
      sectionAbout: "Berufliches Profil",
      about:
        "Multidisziplinärer Projektberater mit Erfahrung in Fertigung, Biotechnologie und Agrartechnologien. Schwerpunkt auf Machbarkeitsstudien, Produktionsplanung und Markteintritt, kombiniert mit praxisnaher technischer Koordination und Qualitätsfokus.",
      sectionSkills: "Kompetenzen",
      skills: [
        {
          k: "Machbarkeit & Marktforschung",
          v: "Marktgröße, Preislogik, Risiko-Mapping, Go/No-Go-Entscheidungen",
        },
        {
          k: "Produktionsprozess-Management",
          v: "Prozessplanung, Qualitätsfokus, Umsetzung unter Restriktionen",
        },
        {
          k: "Agrar- & Biotechnologie",
          v: "Myzel-Biomaterialien, Agrartechnologien, angewandte F&E-Unterstützung",
        },
        {
          k: "Technische Projektplanung",
          v: "Strukturierung, Dokumentation, Team-Koordination",
        },
        {
          k: "KI-Tools & Automatisierung",
          v: "Praktische KI-Workflows, leichte Automatisierung, schnelle Prototypen",
        },
        { k: "Tools", v: "Advanced Excel, AutoCAD, SolidWorks, Adobe Suite, VS Code" },
      ],
      sectionExp: "Berufserfahrung",
      exp: [
        {
          org: "Grauhirsch Mechatronik e.U (Wien)",
          role: "Technische Planung & Montage vor Ort (befristet)",
          time: "Nov 2024 – Feb 2025",
          bullets: [
            "Planung von LED-Beleuchtungssystemen und technischem Layout.",
            "Technisches Design sowie Installation/Montage vor Ort umgesetzt.",
          ],
        },
        {
          org: "BioP Biotechnology (Wien)",
          role: "Berater für Material & Performance",
          time: "Feb 2023 – Mär 2024",
          bullets: [
            "Beratung zu industriellen Myzel-basierten Biomaterialien.",
            "Initiativen zur Effizienz- und Performance-Optimierung geleitet.",
          ],
        },
        {
          org: "Selbstständig (İzmir & Wien)",
          role: "Finanz- & Machbarkeitsberater",
          time: "Jul 2022 – Jul 2024",
          bullets: [
            "Marktforschung und Preisanalysen für Markteintritte durchgeführt.",
            "Machbarkeitsstudien für Krypto- und Wertpapiermärkte erstellt.",
          ],
        },
        {
          org: "IQ Group (Ankara)",
          role: "Werksleiter",
          time: "Mai 2021 – Mai 2022",
          bullets: [
            "Großserienproduktion und internationaler Handel für medizinische Textilien.",
            "Verträge, Logistik und Supply-Chain-Koordination verantwortet.",
          ],
        },
        {
          org: "MAKENTEK (İzmir)",
          role: "Mitgründer & Produktionsleitung",
          time: "Feb 2020 – Mär 2021",
          bullets: [
            "Entwicklung von Maskenmaschinen: Prozessdesign & Produktionsworkflow.",
            "Material-QC und Produktionssteuerung.",
            "Planung von Subunternehmer-Montageprojekten unterstützt.",
          ],
        },
        {
          org: "Greenpeace (İzmir)",
          role: "Mitarbeiter Ressourcenentwicklung (Teilzeit)",
          time: "2013 – 2014",
          bullets: [
            "Unterstützung des Bereichs Ressourcenentwicklung in der Spenderkommunikation und Fundraising-Prozessen.",
          ],
        },
      ],
      sectionProjects: "Projekte",
      projectsIntro:
        "Ausgewählte Arbeiten, die Machbarkeitsdenken, technische Umsetzung und wartbare Lieferung zeigen.",
      projects: [
        {
          title: "Mono AI Bot — Personalisierter KI-Assistent",
          meta: "Creator • 2025–Heute • Nur mit Einladung",
          bullets: [
            "System zur Erstellung personalisierter KI-Assistenten aus CV, Ethik und Kommunikationsstil.",
            "Automatisierte Persona-Erstellung und sichere Zustellung per E-Mail.",
            "Fokus auf ethische Entscheidungsmodelle und adaptives Verhalten.",
          ],
          cta: "Live-Demo (nur mit Einladung)",
          href: "https://tinyurl.com/mono-ai-demo",
        },
        {
          title: "grauhirsch.at — Unternehmenswebsite (Next.js)",
          meta: "Web build • 2025 • Dunkles, minimalistisches Design",
          bullets: [
            "Konzeption und Umsetzung einer schlanken, wartbaren Website mit klarer Service-Struktur.",
            "Sauberes Routing (mehrsprachig-freundlich) und komponentenbasierte UI für langfristige Pflege.",
            "Deployment-Workflow und praxistaugliche Production-Details (stabil, ohne Overengineering).",
          ],
          cta: "Website ansehen",
          href: "https://grauhirsch.at",
        },
        {
          title: "Myzel-Biomaterialien — Performance & Strategie",
          meta: "Berater • 2023–2024",
          bullets: [
            "Strategische Beratung und Performance-Optimierung für Biomaterialien.",
            "Effizienz- und Materialleistungsinitiativen.",
          ],
          cta: undefined,
          href: undefined,
        },
        {
          title: "Machbarkeit & Markteintritt — Krypto & traditionelle Finanzen",
          meta: "Advisor • 2022–2024",
          bullets: [
            "Markt- und Machbarkeitsbewertungen für regulierte Bereiche.",
            "Pricing-Logik und Risiko-Mapping.",
          ],
          cta: undefined,
          href: undefined,
        },
        {
          title: "Maskenmaschinen — Prozess & Qualität",
          meta: "Mitgründer • 2020–2021",
          bullets: [
            "Prozessfluss & Qualitätsmanagement während der Entwicklung.",
            "Planung von Subunternehmer-Montageworkflows.",
          ],
          cta: undefined,
          href: undefined,
        },
        {
          title: "Photobioreaktor – Lichtsimulation (TÜBİTAK)",
          meta: "Berater • 2017",
          bullets: [
            "Beratung zur Lichtsimulation in einem TÜBİTAK-geförderten Photobioreaktor-Projekt.",
          ],
          cta: undefined,
          href: undefined,
        },
      ],
      sectionEdu: "Ausbildung & Sprachen",
      edu: [
        "Dokuz Eylül Universität — Textilingenieurwesen • 2012–2017",
        "Doğa College, Mersin • 2007–2011",
        "Arbeitssicherheit & Gesundheitsschutz (ohne Zertifikat) — Dokuz Eylül Universität • 2017",
      ],
      langs: ["Türkisch — Muttersprache", "Englisch — Beruflich", "Deutsch — A2 (laufend)"],
      sectionContact: "Kontakt",
      contactLine: "E-Mail:",
      linkedinLine: "LinkedIn:",
      footer: "© 2026",
    },
  } as const;

  const c = copy[lang as "en" | "tr" | "de"] ?? copy.en;

  // theme (autumn-dark)
  const theme = {
    bg: "#0b0b0d",
    panel: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.10)",
    text: "rgba(255,255,255,0.92)",

    // ✅ kahverengi çizgi/ikincil ton
    accent: "#c07a3b", // amber/brown
    accentSoft: "rgba(192,122,59,0.12)",
    accentText: "#c07a3b",

    // ✅ “kahverengi üzerinde kaybolmasın” diye özel link rengi
    link: "#f0e6d6", // warm off-white
    linkMuted: "rgba(240,230,214,0.85)",
    dim: "rgba(255,255,255,0.55)",
  } as const;

  const email = "cagribozgeyik@gmail.com";
  const linkedin = "https://www.linkedin.com/in/cagri-bozgeyik/";

  const Card = ({
    title,
    meta,
    bullets,
    href,
    cta,
    ctaTone,
  }: {
    title: string;
    meta?: string;
    bullets: readonly string[];
    href?: string;
    cta?: string;
    ctaTone?: "accent" | "link";
  }) => {
    const inner = (
      <div
        style={{
          border: `1px solid ${theme.border}`,
          background: theme.panel,
          borderRadius: 14,
          padding: 16,
        }}
      >
        <div style={{ fontWeight: 900, letterSpacing: 0.2 }}>{title}</div>
        {meta && <div style={{ marginTop: 6, fontSize: 13, color: theme.dim }}>{meta}</div>}
        <ul style={{ margin: "12px 0 0", paddingLeft: 18, color: theme.accentText, lineHeight: 1.7 }}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {href && cta && (
          <div style={{ marginTop: 12, fontSize: 13 }}>
            <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: theme.link }}>
              <span
                style={{
                  color: ctaTone === "link" ? theme.link : theme.accentText,
                  fontWeight: 900,
                }}
              >
                {cta}
              </span>
            </a>
          </div>
        )}
      </div>
    );
    return inner;
  };

  return (
    <main
      id="top"
      style={{
        background: theme.bg,
        color: theme.text,
        padding: 24,
        fontFamily: "system-ui",
        minHeight: "100vh",
      }}
    >
      <style>{`
        section { scroll-margin-top: 92px; }
        a { color: ${theme.link}; }
        a:hover { opacity: 0.9; }
      `}</style>

      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        {/* HERO */}
        <section style={{ padding: "28px 0 22px" }}>
          <div style={{ color: theme.text, fontSize: 13, letterSpacing: 1.2, fontWeight: 900 }}>
            {c.location}
          </div>

          <h1 style={{ fontSize: 42, margin: "10px 0 6px", letterSpacing: 0.2 }}>{c.name}</h1>

          <div style={{ fontSize: 16, color: theme.text, fontWeight: 800 }}>{c.title}</div>

          {/* ✅ başlık beyaz, alt vurgular kahverengi */}
          <p style={{ marginTop: 14, maxWidth: 860, color: theme.accentText, lineHeight: 1.75 }}>
            {c.intro}
          </p>

          {/* ✅ AI note: kahverengi vurgu çizgisi gibi */}
          <div
            style={{
              marginTop: 14,
              maxWidth: 860,
              padding: 14,
              borderRadius: 14,
              border: `1px solid ${theme.border}`,
              background: theme.accentSoft,
              color: theme.accentText,
              lineHeight: 1.7,
              fontSize: 14,
            }}
          >
            {c.aiNote}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: "26px 0", borderTop: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: "0 0 12px", fontSize: 18, letterSpacing: 0.2 }}>{c.sectionAbout}</h2>
          <p style={{ margin: 0, color: theme.accentText, lineHeight: 1.8, maxWidth: 920 }}>{c.about}</p>
        </section>

        {/* SKILLS */}
        <section style={{ padding: "26px 0", borderTop: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: "0 0 14px", fontSize: 18, letterSpacing: 0.2 }}>{c.sectionSkills}</h2>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {c.skills.map((s) => (
              <div
                key={s.k}
                style={{
                  border: `1px solid ${theme.border}`,
                  background: theme.panel,
                  borderRadius: 14,
                  padding: 14,
                }}
              >
                <div style={{ fontWeight: 900 }}>{s.k}</div>
                <div style={{ marginTop: 8, color: theme.accentText, lineHeight: 1.7, fontSize: 14 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding: "26px 0", borderTop: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: "0 0 14px", fontSize: 18, letterSpacing: 0.2 }}>{c.sectionExp}</h2>

          <div style={{ display: "grid", gap: 12 }}>
            {c.exp.map((e) => (
              <div
                key={e.org + e.role}
                style={{
                  border: `1px solid ${theme.border}`,
                  background: theme.panel,
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 900 }}>{e.role}</div>
                    <div style={{ color: theme.dim, marginTop: 4 }}>{e.org}</div>
                  </div>
                  <div style={{ color: theme.dim, fontSize: 13, fontWeight: 800 }}>{e.time}</div>
                </div>

                <ul style={{ margin: "12px 0 0", paddingLeft: 18, color: theme.accentText, lineHeight: 1.75 }}>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "26px 0", borderTop: `1px solid ${theme.border}` }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <h2 style={{ margin: "0 0 10px", fontSize: 18, letterSpacing: 0.2 }}>{c.sectionProjects}</h2>
          </div>

          <p style={{ margin: "0 0 14px", color: theme.accentText, lineHeight: 1.7 }}>{c.projectsIntro}</p>

          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {c.projects.map((p) => {
              const href = "href" in p ? p.href : undefined;
              const cta = "cta" in p ? p.cta : undefined;

              return (
              <Card
                key={`${p.title}-${p.meta ?? ""}`}
                title={p.title}
                meta={p.meta}
                bullets={p.bullets}
                href={"href" in p ? p.href : undefined}
                cta={"cta" in p ? p.cta : undefined}
                // ✅ CTA kahverengi değil (okunur/kontrast)
                ctaTone="link"
               />
              );
                
            })}
          </div>
        </section>

        {/* EDUCATION & LANG */}
        <section id="education" style={{ padding: "26px 0", borderTop: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: "0 0 12px", fontSize: 18, letterSpacing: 0.2 }}>{c.sectionEdu}</h2>

          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            <div
              style={{
                border: `1px solid ${theme.border}`,
                background: theme.panel,
                borderRadius: 14,
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 900, marginBottom: 10 }}>{lang === "tr" ? "Eğitim" : lang === "de" ? "Ausbildung" : "Education"}</div>
              <ul style={{ margin: 0, paddingLeft: 18, color: theme.accentText, lineHeight: 1.75 }}>
                {c.edu.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                border: `1px solid ${theme.border}`,
                background: theme.panel,
                borderRadius: 14,
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 900, marginBottom: 10 }}>{lang === "tr" ? "Diller" : lang === "de" ? "Sprachen" : "Languages"}</div>
              <ul style={{ margin: 0, paddingLeft: 18, color: theme.accentText, lineHeight: 1.75 }}>
                {c.langs.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "26px 0", borderTop: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: "0 0 12px", fontSize: 18, letterSpacing: 0.2 }}>{c.sectionContact}</h2>

          <div
            style={{
              border: `1px solid ${theme.border}`,
              background: theme.panel,
              borderRadius: 14,
              padding: 16,
              display: "grid",
              gap: 10,
              maxWidth: 720,
            }}
          >
            <div style={{ color: theme.accentText }}>
              <b style={{ color: theme.text }}>{c.contactLine}</b>{" "}
              {/* ✅ email kahverengi değil */}
              <a href={`mailto:${email}`} style={{ fontWeight: 900, color: theme.link }}>
                {email}
              </a>
            </div>

            <div style={{ color: theme.accentText }}>
              <b style={{ color: theme.text }}>{c.linkedinLine}</b>{" "}
              {/* ✅ linkedin kahverengi değil */}
              <a href={linkedin} target="_blank" rel="noreferrer" style={{ fontWeight: 900, color: theme.linkMuted }}>
                linkedin.com/in/cagri-bozgeyik
              </a>
            </div>
          </div>
        </section>

        <div style={{ padding: "18px 0 40px", color: theme.dim, fontSize: 12 }}>
          {c.footer}
        </div>
      </div>
    </main>
  );
}