type Params = { lang: string };

function copy(lang: string) {
  const c = {
    en: {
      title: "Contact",
      body:
        "For project inquiries, freelance work, or job opportunities, feel free to reach out.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      note:
        "No forms, no tracking—just a direct line.",
    },
    tr: {
      title: "İletişim",
      body:
        "Proje talepleri, freelance işler veya iş fırsatları için iletişime geçebilirsin.",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      note:
        "Form yok, takip yok—direkt iletişim.",
    },
    de: {
      title: "Kontakt",
      body:
        "Fuer Projekte, Freelance-Anfragen oder Jobangebote koennen Sie mich gerne kontaktieren.",
      emailLabel: "E-Mail",
      linkedinLabel: "LinkedIn",
      note:
        "Keine Formulare, kein Tracking—direkt und klar.",
    },
  } as const;

  return c[(lang as keyof typeof c) ?? "en"] ?? c.en;
}

export default function Contact({ params }: { params: Params }) {
  const lang = params.lang || "en";
  const c = copy(lang);

  const email = "cagribozgeyik@gmail.com";
  const linkedin = "https://www.linkedin.com/in/cagri-bozgeyik/";

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 920, margin: "0 auto" }}>
      <h1 style={{ margin: "16px 0 10px" }}>{c.title}</h1>
      <p style={{ margin: "0 0 22px", opacity: 0.85, lineHeight: 1.7 }}>{c.body}</p>

      <section
        style={{
          border: "1px solid #eee",
          borderRadius: 12,
          padding: 18,
          display: "grid",
          gap: 12,
        }}
      >
        <div>
          <div style={{ fontSize: 13, opacity: 0.7 }}>{c.emailLabel}</div>
          <a href={`mailto:${email}`} style={{ fontSize: 16 }}>
            {email}
          </a>
        </div>

        <div>
          <div style={{ fontSize: 13, opacity: 0.7 }}>{c.linkedinLabel}</div>
          <a href={linkedin} target="_blank" rel="noreferrer" style={{ fontSize: 16 }}>
            {linkedin.replace("https://", "")}
          </a>
        </div>

        <div style={{ borderTop: "1px solid #eee", paddingTop: 12, fontSize: 13, opacity: 0.75 }}>
          {c.note}
        </div>
      </section>
    </main>
  );
}