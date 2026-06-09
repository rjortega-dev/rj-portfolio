import type { ContactProps } from "../types";

export default function Contact({ trackClick }: ContactProps) {
  const isMobile = window.innerWidth < 640;
  return (
    <section
      id="contact"
      style={{ padding: isMobile ? "40px 0 60px" : "60px 0 120px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "6px",
        }}
      >
        <span
          style={{
            color: "#6366f1",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Contact
        </span>
        <div style={{ width: "32px", height: "1px", background: "#21262d" }} />
      </div>

      <h2
        style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#e2e8f0",
          letterSpacing: "-0.5px",
          marginBottom: "8px",
        }}
      >
        Let's talk
      </h2>

      <p style={{ fontSize: "14px", color: "#8b949e", marginBottom: "28px" }}>
        Open to roles in software engineering and data analytics.
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href="mailto:rikrdo.ortega@gmail.com"
          onClick={() => trackClick("email-contact")}
          style={{
            background: "transparent",
            color: "#e2e8f0",
            border: "1px solid #21262d",
            padding: "11px 22px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 500,
            fontFamily: "monospace",
            transition: "border-color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#373e47")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#21262d")}
        >
          rikrdo.ortega@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/rj-ortega"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackClick("linkedin-contact")}
          style={{
            background: "transparent",
            color: "#e2e8f0",
            border: "1px solid #21262d",
            padding: "11px 22px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 500,
            fontFamily: "monospace",
            transition: "border-color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#373e47")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#21262d")}
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
