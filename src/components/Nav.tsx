import { useState } from "react";
import type { NavProps } from "../types";

const LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Nav({ isMobile }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 250); // matches your transition duration
  };

  return (
    <>
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
        }}
      />
      <nav
        style={{
          background: "rgba(13,17,23,0.95)",
          borderBottom: "1px solid #21262d",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0 1rem" : "0 2.5rem",
          height: "52px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          style={{
            fontWeight: 800,
            color: "#e2e8f0",
            fontSize: "15px",
            letterSpacing: "-0.3px",
          }}
        >
          rj<span style={{ color: "#6366f1" }}>-</span>ortega
          <span style={{ color: "#6366f1" }}>.</span>dev
        </span>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#e2e8f0",
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#e2e8f0",
                transition: "opacity 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#e2e8f0",
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        ) : (
          <div style={{ display: "flex", gap: "24px" }}>
            {LINKS.map((link) => (
              <span
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  color: "#e2e8f0",
                  fontSize: "13px",
                  transition: "color 0.15s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e8f0")}
              >
                {link}
              </span>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile dropdown */}
      {isMobile && (
        <div
          style={{
            position: "sticky",
            top: "55px",
            zIndex: 99,
            background: "rgba(13,17,23,0.98)",
            borderBottom: menuOpen ? "1px solid #21262d" : "none",
            overflow: "hidden",
            maxHeight: menuOpen ? "240px" : "0",
            transition: "max-height 0.25s ease, border-bottom 0.25s",
            backdropFilter: "blur(8px)",
          }}
        >
          {LINKS.map((link) => (
            <div
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                padding: "14px 1rem",
                color: "#e2e8f0",
                fontSize: "14px",
                cursor: "pointer",
                borderBottom: "1px solid #21262d",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#6366f1";
                e.currentTarget.style.background = "rgba(99,102,241,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#e2e8f0";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
