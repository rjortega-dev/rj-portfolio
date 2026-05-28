import profilePhoto from "../assets/profile.jpg";

export default function Hero() {
  const yearsExperience = new Date().getFullYear() - 2019;
  const isMobile = window.innerWidth < 640;
  return (
    <section
      style={{
        padding: "72px 0 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative" }}>
        {/* Status pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "20px",
            padding: "4px 12px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#3fb950",
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: "#818cf8",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            Open to opportunities
          </span>
        </div>

        {/* Avatar + name row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "16px",
          }}
        >
          <img
            src={profilePhoto}
            alt="Ricardo Ortega"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "left bottom",
              border: "2px solid #6366f1",
              flexShrink: 0,
            }}
          />
          <div>
            <h1
              style={{
                fontSize: "46px",
                fontWeight: 800,
                color: "#e2e8f0",
                letterSpacing: "-1.5px",
                lineHeight: 1.08,
                marginBottom: "16px",
              }}
            >
              Ricardo Ortega
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#6366f1",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              Software Developer {isMobile ? <br /> : "·"} Data Analyst
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "#8b949e",
            lineHeight: 1.75,
            marginBottom: "28px",
            maxWidth: "800px",
            textAlign: "justify",
          }}
        >
          Building web apps and data pipelines. Background in React and
          TypeScript — currently deepening skills in Python, data analysis, and
          visualization.
        </p>

        <div style={{ display: "flex", gap: "10px", marginBottom: "44px" }}>
          <a
            href="https://github.com/rjortega-dev/"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#4f46e5",
              color: "#fff",
              padding: "9px 20px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/rj-ortega"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#4f46e5",
              color: "#fff",
              padding: "9px 20px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            paddingTop: "28px",
            borderTop: "1px solid #21262d",
            maxWidth: "800px",
          }}
        >
          {[
            { n: `${yearsExperience}+`, label: "Years coding" },
            { n: "Denver", label: "Colorado" },
          ].map(({ n, label }) => (
            <div key={label}>
              <div
                style={{ fontSize: "20px", fontWeight: 700, color: "#e2e8f0" }}
              >
                {n}
              </div>
              <div
                style={{ fontSize: "11px", color: "#6e7681", marginTop: "2px" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
