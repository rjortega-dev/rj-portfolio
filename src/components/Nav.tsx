import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { NavProps } from "../types";

const LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Nav({ isMobile }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isStats = location.pathname === "/stats";

  const navContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  const navLinkStyle = {
    color: "#e2e8f0",
    fontSize: "13px",
    transition: "color 0.15s",
    cursor: "pointer",
  };

  const onHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#6366f1";
  };
  const onUnhover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#e2e8f0";
  };

  const onDropdownHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#6366f1";
    e.currentTarget.style.background = "rgba(99,102,241,0.06)";
  };
  const onDropdownUnhover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#e2e8f0";
    e.currentTarget.style.background = "transparent";
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
        ref={navContainerRef}
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
          zIndex: 10,
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          onClick={() => navigate("/")}
          style={{
            fontWeight: 800,
            color: "#e2e8f0",
            fontSize: "15px",
            letterSpacing: "-0.3px",
            cursor: "pointer",
          }}
        >
          rj<span style={{ color: "#6366f1" }}>-</span>ortega
          <span style={{ color: "#6366f1" }}>.</span>dev
        </span>

        {isMobile ? (
          isStats ? (
            <span
              onClick={() => navigate("/")}
              style={navLinkStyle}
              onMouseEnter={onHover}
              onMouseLeave={onUnhover}
            >
              ← Home
            </span>
          ) : (
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
                  transform: menuOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "none",
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
          )
        ) : (
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {!isStats &&
              LINKS.map((link) => (
                <span
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  style={navLinkStyle}
                  onMouseEnter={onHover}
                  onMouseLeave={onUnhover}
                >
                  {link}
                </span>
              ))}
            <span
              onClick={() => navigate(isStats ? "/" : "/stats")}
              style={navLinkStyle}
              onMouseEnter={onHover}
              onMouseLeave={onUnhover}
            >
              {isStats ? "← Home" : "Stats"}
            </span>
          </div>
        )}

        {isMobile && !isStats && menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "52px",
              left: 0,
              right: 0,
              zIndex: 50,
              background: "rgba(13,17,23,0.98)",
              borderBottom: "1px solid #21262d",
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
                onMouseEnter={onDropdownHover}
                onMouseLeave={onDropdownUnhover}
              >
                {link}
              </div>
            ))}
            <div
              onClick={() => {
                setMenuOpen(false);
                navigate("/stats");
              }}
              style={{
                padding: "14px 1rem",
                color: "#e2e8f0",
                fontSize: "14px",
                cursor: "pointer",
                borderBottom: "1px solid #21262d",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={onDropdownHover}
              onMouseLeave={onDropdownUnhover}
            >
              Stats
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
