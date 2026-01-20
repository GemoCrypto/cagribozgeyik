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

  // 🔒 Mono AI – BASE + HASH (iframe KULLANILMIYOR)
  const BOT_BASE_URL = "https://mono-ai-bot-web.vercel.app/chat";
  const BOT_HASH =
    "#p=ewogICJwZXJzb25hX2lkIjogImJvemdleWlrMSIsCiAgInBlcnNvbl9uYW1lIjogIsOHYcSfcsSxIEJvemdleWlrIiwKICAicHJlZmVycmVkX3RvbmUiOiAiY29uY2lzZSIsCiAgImxhbmd1YWdlX3ByZWZlcmVuY2UiOiAiRW5nbGlzaCIsCiAgImV0aGljcyI6IHsKICAgICJydWxlX2ZsZXhpYmlsaXR5IjogIm91dGNvbWVfYmFzZWQiLAogICAgInByZXNzdXJlX3Jlc3BvbnNlIjogInNpZ25hbCIsCiAgICAidmVyYmFsX29yZGVyX3BvbGljeSI6ICJzbG93X2Rvd24iLAogICAgInJlc3BvbnNpYmlsaXR5X3BocmFzZSI6ICJjb250ZXh0dWFsIiwKICAgICJ3aGlzdGxlX3RlbmRlbmN5IjogImVzY2FsYXRlIiwKICAgICJzaWxlbmNlX3RocmVzaG9sZCI6ICJjb25kaXRpb25hbCIsCiAgICAiZXRoaWNzX2FuY2hvciI6ICJwZXJzb25hbCIsCiAgICAiY3Jpc2lzX2V0aGljc19zaGlmdCI6ICJmbGV4aWJsZSIsCiAgICAiZXRoaWNhbF9zZWxmX3ZpZXciOiAidW5jaGFuZ2VkIgogIH0sCiAgImN2IjogewogICAgImZpbGUiOiAiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL29wZW4_aWQ9MU13blBNckM1Y3RNMC1TS0JTNXlScElvWVVaRy1MVmJBIiwKICAgICJub3RlcyI6IC4uLiIKICB9Cn0";

  const t = useMemo(() => {
    const copy = {
      en: {
        btn: "Mono AI Chat",
        title: "Mono AI Chat",
        chatTab: "Chat",
        inviteTab: "Request Invite",
        inviteTitle: "Request access",
        inviteText:
          "If you want access to the full version, email me with a short note about your use case.",
        email: "cagribozgeyik@gmail.com",
        emailCta: "Send email →",
      },
      tr: {
        btn: "Mono AI Chat",
        title: "Mono AI Chat",
        chatTab: "Chat",
        inviteTab: "Davet İste",
        inviteTitle: "Erişim iste",
        inviteText:
          "Tam sürüm erişimi için kullanım amacını kısaca yazarak bana e-posta at.",
        email: "cagribozgeyik@gmail.com",
        emailCta: "E-posta gönder →",
      },
      de: {
        btn: "Mono AI Chat",
        title: "Mono AI Chat",
        chatTab: "Chat",
        inviteTab: "Invite anfragen",
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
    subtle: "rgba(255,255,255,0.08)",
    accent: "rgba(255,255,255,0.10)",
    shadow: "0 14px 50px rgba(0,0,0,0.55)",
  } as const;

  const mailto = `mailto:${t.email}?subject=Mono%20AI%20Invite%20Request&body=Hi%20Cagri,%0A%0AI%20want%20access%20to%20the%20Mono%20AI%20bot.%0AUse%20case:%20...%0A%0AThanks`;

  return (
    <>
      <style>{`
        .monoai-panel {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 420px;
          height: 600px;
          max-width: calc(100vw - 40px);
          max-height: calc(100svh - 40px);
          border-radius: 16px;
        }
        @media (max-width: 520px) {
          .monoai-panel {
            left: 12px !important;
            right: 12px !important;
            top: 12px !important;
            bottom: 12px !important;
            width: auto !important;
            height: auto !important;
            max-width: none !important;
            max-height: none !important;
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
              borderBottom: `1px solid ${styles.subtle}`,
              fontWeight: 800,
            }}
          >
            {t.title}
            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 18,
                color: styles.text,
              }}
            >
              ×
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: `1px solid ${styles.subtle}` }}>
            <button
              onClick={() => setTab("chat")}
              style={{
                flex: 1,
                padding: 12,
                border: "none",
                background: tab === "chat" ? styles.accent : "transparent",
                color: styles.text,
                fontWeight: tab === "chat" ? 800 : 600,
              }}
            >
              {t.chatTab}
            </button>
            <button
              onClick={() => setTab("invite")}
              style={{
                flex: 1,
                padding: 12,
                border: "none",
                background: tab === "invite" ? styles.accent : "transparent",
                color: styles.text,
                fontWeight: tab === "invite" ? 800 : 600,
              }}
            >
              {t.inviteTab}
            </button>
          </div>

          {/* Content */}
          {tab === "chat" ? (
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                textAlign: "center",
              }}
            >
              <button
                onClick={() =>
                  window.open(
                    BOT_BASE_URL + BOT_HASH,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                style={{
                  padding: "14px 18px",
                  borderRadius: 14,
                  border: styles.panelBorder,
                  background: styles.accent,
                  color: styles.text,
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Open Mono AI Chat
              </button>
            </div>
          ) : (
            <div style={{ padding: 16 }}>
              <div style={{ fontWeight: 900 }}>{t.inviteTitle}</div>
              <div style={{ color: styles.muted, margin: "10px 0" }}>
                {t.inviteText}
              </div>
              <a
                href={mailto}
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: styles.panelBorder,
                  background: styles.accent,
                  color: styles.text,
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                {t.emailCta}
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}