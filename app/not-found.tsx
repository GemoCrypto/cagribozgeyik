import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background: "#0b0b0d",
        color: "rgba(255,255,255,0.92)",
        fontFamily: "system-ui",
      }}
    >
      <div style={{ maxWidth: 640, width: "100%" }}>
        <div style={{ fontSize: 12, letterSpacing: 1.4, fontWeight: 800, opacity: 0.7 }}>
          404
        </div>

        <h1 style={{ margin: "10px 0 6px", fontSize: 34, letterSpacing: 0.2 }}>
          Page not found
        </h1>

        <p style={{ margin: 0, lineHeight: 1.7, opacity: 0.8 }}>
          The page you’re looking for doesn’t exist (or was moved).
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link
            href="/en"
            style={{
              display: "inline-block",
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
              color: "#f0e6d6",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Go to Home
          </Link>

          
        </div>
      </div>
    </main>
  );
}