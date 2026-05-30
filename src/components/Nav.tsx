const LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Nav() {
  const isMobile = window.innerWidth < 640;
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
        {!isMobile && (
          <div style={{ display: "flex", gap: "24px" }}>
            {LINKS.map((link) => (
              <span
                key={link}
                onClick={() =>
                  document
                    .getElementById(link.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" })
                }
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
    </>
  );
}
