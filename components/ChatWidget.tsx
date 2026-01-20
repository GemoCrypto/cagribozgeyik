"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

function getLang(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0] || "en";
  const l = seg.toLowerCase().slice(0, 2);
  return l === "tr" || l === "de" || l === "en" ? l : "en";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"chat" | "invite">("chat");

  const pathname = usePathname() || "/en";
  const lang = getLang(pathname);

  // 🔒 ORİJİNAL PRIVATE LINK – DEĞİŞMEDİ
  const BOT_URL =
    "https://mono-ai-bot-web.vercel.app/chat#p=ewogICJwZXJzb25hX2lkIjogImJvemdleWlrMSIsCiAgInBlcnNvbl9uYW1lIjogIsOHYcSfcsSxIEJvemdleWlrIiwKICAicHJlZmVycmVkX3RvbmUiOiAiY29uY2lzZSIsCiAgImxhbmd1YWdlX3ByZWZlcmVuY2UiOiAiRW5nbGlzaCIsCiAgImV0aGljcyI6IHsKICAgICJydWxlX2ZsZXhpYmlsaXR5IjogIm91dGNvbWVfYmFzZWQiLAogICAgInByZXNzdXJlX3Jlc3BvbnNlIjogInNpZ25hbCIsCiAgICAidmVyYmFsX29yZGVyX3BvbGljeSI6ICJzbG93X2Rvd24iLAogICAgInJlc3BvbnNpYmlsaXR5X3BocmFzZSI6ICJjb250ZXh0dWFsIiwKICAgICJ3aGlzdGxlX3RlbmRlbmN5IjogImVzY2FsYXRlIiwKICAgICJzaWxlbmNlX3RocmVzaG9sZCI6ICJjb25kaXRpb25hbCIsCiAgICAiZXRoaWNzX2FuY2hvciI6ICJwZXJzb25hbCIsCiAgICAiY3Jpc2lzX2V0aGljc19zaGlmdCI6ICJmbGV4aWJsZSIsCiAgICAiZXRoaWNhbF9zZWxmX3ZpZXciOiAidW5jaGFuZ2VkIgogIH0sCiAgImN2IjogewogICAgImZpbGUiOiAiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL29wZW4_aWQ9";

  const t = useMemo(() => {
    const copy = {
      en: {
        btn: "Mono AI Chat",
        title: "Mono AI Chat",
        inviteTitle: "Request access",
        inviteText:
          "If you want access to the full version, email me with a short note about your use case.",
        email: "cagribozgeyik@gmail.com",
        emailCta: "Send email →",
      },
      tr: {
        btn: "Mono AI Chat",
        title: "Mono AI Chat",
        inviteTitle: "Erişim iste",
        inviteText:
          "Tam sürüm erişimi için kullanım amacını kısaca yazarak bana e-posta at.",
        email: "cagribozgeyik@gmail.com",
        emailCta: "E-posta gönder →",
      },
      de: {
        btn: "Mono AI Chat",
        title: "Mono AI Chat",
        inviteTitle: "Zugang anfragen",
        inviteText:
          "Fuer Vollzugang: kurze Beschreibung deines Use-Cases per E-Mail senden.",
        email: "cagribozgeyik@gmail.com",
        emailCta: "E-Mail senden →",
      },
    } as const;

    return copy[lang];
  }, [lang]);

  const styles = {
    panelBg: "rgba(12,12,14,0.94)",
    panelBorder: "1px solid rgba(255,255,255,0.10)",
    text: "rgba(255,255,255,0.92)",
    muted: "rgba(255,255,255,0.65)",
    accent: "rgba(255,255,255,0.10)",
    shadow: "0 14px 50px rgba(0,0,0,0.55)",
  } as const;

  const mailto = `mailto:${t.email}?subject=Mono%20AI%20Invite%20Request`;

  return (
    <>
      {/* 🔧 MOBİL TAM EKRAN */}
      <style>{`
        .monoai-panel {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 420px;
          height: 600px;
          border-radius: 16px;
        }
        @media (max-width: 520px) {
          .monoai-panel {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100svh !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            padding: "12px 14px",
            borderRadius: 999,
            border: styles.panelBorder,
            background: styles.panelBg,
            color: styles.text,
            cursor: "pointer",
            boxShadow: styles.shadow,
            fontWeight: 700,
          }}
        >
          {t.btn}
        </button>
      )}

      {open && (
        <div
          className="monoai-panel"
          style={{
            background: styles.panelBg,
            color: styles.text,
            border: styles.panelBorder,
            zIndex: 1001,
            boxShadow: styles.shadow,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: 800,
              borderBottom: `1px solid ${styles.accent}`,
            }}
          >
            {t.title}
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: styles.text,
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* CHAT – DİREKT */}
          <iframe
            src={BOT_URL}
            title="Mono AI Bot"
            style={{
              flex: 1,
              width: "100%",
              border: "none",
              background: "transparent",
            }}
            allow="clipboard-write; microphone; camera"
          />
        </div>
      )}
    </>
  );
}