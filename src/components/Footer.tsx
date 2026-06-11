import type { FooterProps } from "../types";

export default function Footer({ isMobile }: FooterProps) {
  return (
    <footer
      style={{
        borderTop: "1px solid #21262d",
        padding: isMobile ? "18px 1rem" : "18px 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        background: "#0d1117",
        position: "relative",
        zIndex: 1,
      }}
    >
      <span style={{ fontSize: "11px", color: "#e2e8f0" }}>
        Ricardo Ortega © {new Date().getFullYear()}
      </span>
      <span style={{ fontSize: "11px", color: "#e2e8f0" }}>Denver, CO</span>
    </footer>
  );
}
