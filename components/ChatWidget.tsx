"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function getLang(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0] || "en";
  const l = seg.toLowerCase().slice(0, 2);
  return l === "tr" || l === "de" || l === "en" ? l : "en";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"chat" | "invite">("chat");
  const [iframeSrc, setIframeSrc] = useState<string>("about:blank");

  const pathname = usePathname() || "/en";
  const lang = getLang(pathname);

  // ✅ ORİJİNAL MONO AI BOT LİNKİN (HASH #p=... KORUNUR)
  const BOT_URL =
    "https://mono-ai-bot-web.vercel.app/chat#p=ewogICJwZXJzb25hX2lkIjogImJvemdleWlrMSIsCiAgInBlcnNvbl9uYW1lIjogIsOHYcSfcsSxIEJvemdleWlrIiwKICAicHJlZmVycmVkX3RvbmUiOiAiY29uY2lzZSIsCiAgImxhbmd1YWdlX3ByZWZlcmVuY2UiOiAiRW5nbGlzaCIsCiAgImV0aGljcyI6IHsKICAgICJydWxlX2ZsZXhpYmlsaXR5IjogIm91dGNvbWVfYmFzZWQiLAogICAgInByZXNzdXJlX3Jlc3BvbnNlIjogInNpZ25hbCIsCiAgICAidmVyYmFsX29yZGVyX3BvbGljeSI6ICJzbG93X2Rvd24iLAogICAgInJlc3BvbnNpYmlsaXR5X3BocmFzZSI6ICJjb250ZXh0dWFsIiwKICAgICJ3aGlzdGxlX3RlbmRlbmN5IjogImVzY2FsYXRlIiwKICAgICJzaWxlbmNlX3RocmVzaG9sZCI6ICJjb25kaXRpb25hbCIsCiAgICAiZXRoaWNzX2FuY2hvciI6ICJwZXJzb25hbCIsCiAgICAiY3Jpc2lzX2V0aGljc19zaGlmdCI6ICJmbGV4aWJsZSIsCiAgICAiZXRoaWNhbF9zZWxmX3ZpZXciOiAidW5jaGFuZ2VkIgogIH0sCiAgImN2IjogewogICAgImZpbGUiOiAiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL29wZW4_aWQ9MU13blBNckM1Y3RNMC1TS0JTNXlScElvWVVaRy1MVmJBIiwKICAgICJub3RlcyI6ICLDh0HEnlJJIEJPWkdFWcSwSyBcbkZFQVNJQklMSVRZIEFORCBJTk5PVkFUSU9OLUZPQ1VTRUQgUFJPSkVDVCBBRFZJU09SIFxu77-977-9IFZpZW5uYSwgQXVzdHJpYSB8IO-_ve-_vSBjYWdyaWJvemdleWlrQGdtYWlsLmNvbSB8IO-_ve-_vSs0MyA2NzYgNjY4IDYzMDAgXG5QUk9GRVNTSU9OQUwgUFJPRklMRSBcbk11bHRpZGlzY2lwbGluYXJ5IGNvbnN1bHRhbnQgc3BlY2lhbGl6aW5nIGluIHByb2R1Y3Rpb24gc3RyYXRlZ2llcywgZmVhc2liaWxpdHkgc3R1ZGllcywgYW5kIGlubm92YXRpb24tZm9jdXNlZCBwcm9qZWN0cyBhY3Jvc3MgbWFudWZhY3R1cmluZywgYmlvdGVjaG5vbG9neSwgYW5kIGFncmljdWx0dXJhbCB0ZWNobm9sb2dpZXMuIEV4cGVyaWVuY2VkIGluIGxlYWRpbmcgdGVjaG5pY2FsIHByb2Nlc3NlcywgcXVhbGl0eSBjb250cm9sLCBhbmQgbWFya2V0IGVudHJ5IHN0cmF0ZWdpZXMgZm9yIGludGVybmF0aW9uYWwgY29tcGFuaWVzLiIsCiAgICAic3VtbWFyeSI6ICJJIGFtIGEgc3lzdGVtLW9yaWVudGVkIHRlY2hub2xvZ2lzdCB3aXRoIGEgc3Ryb25nIGZvY3VzIG9uIGJ1aWxkaW5nIHJlbGlhYmxlLCBjb250cm9sbGFibGUsIGFuZCBwdXJwb3NlLWRyaXZlbiBwcm9kdWN0cyByYXRoZXIgdGhhbiBleHBlcmltZW50YWwgb3IgcHVyZWx5IHRoZW9yZXRpY2FsIHNvbHV0aW9ucy5cbi4uLiIKICB9Cn0";

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

  // ✅ Hash ilk anda okunmadı / uyarı ekranda kaldı sorununu azaltmak için:
  // 1) iframe önce about:blank
  // 2) 1 tick sonra gerçek BOT_URL
  // 3) Chat aç/kapa veya tab değişince yeniden yükle
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!open || tab !== "chat") {
      setIframeSrc("about:blank");
      return;
    }

    setIframeSrc("about:blank");
    const id = window.setTimeout(() => {
      setIframeSrc(BOT_URL);
    }, 50);

    return () => window.clearTimeout(id);
  }, [open, tab, BOT_URL]);

  return (
    <>
      {/* ✅ Mobil tam ekran (sen istemiştin, aynen korudum) */}
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
          z-index: 1001;
          overflow: hidden;
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
            border-radius: 14px !important;
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
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
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
            boxShadow: styles.shadow,
            display: "flex",
            flexDirection: "column",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
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
              flex: "0 0 auto",
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
                lineHeight: 1,
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: `1px solid ${styles.subtle}`,
              flex: "0 0 auto",
            }}
          >
            <button
              onClick={() => setTab("chat")}
              style={{
                flex: 1,
                padding: 12,
                border: "none",
                background: tab === "chat" ? styles.accent : "transparent",
                color: styles.text,
                cursor: "pointer",
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
                cursor: "pointer",
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
                flex: "1 1 auto",
                minHeight: 0, // ✅ iOS/Safari + flex + iframe için kritik
                overflow: "hidden",
              }}
            >
              <iframe
                ref={iframeRef}
                // ✅ her açılışta temiz başlatmak için key
                key={`${open ? "open" : "closed"}-${tab}-${iframeSrc === "about:blank" ? "blank" : "bot"}`}
                title="Mono AI Bot"
                src={iframeSrc}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "transparent",
                  display: "block",
                }}
                allow="clipboard-write; microphone; camera"
              />
            </div>
          ) : (
            <div style={{ padding: 16, lineHeight: 1.65, overflow: "auto" }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>{t.inviteTitle}</div>
              <div style={{ color: styles.muted, marginBottom: 14 }}>{t.inviteText}</div>

              <a
                href={mailto}
                style={{
                  display: "inline-block",
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

              <div style={{ marginTop: 10, fontSize: 12, color: styles.muted }}>
                {t.email}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}