import type { SkillsProps } from "../types";

const SKILLS = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Vue",
    "Tailwind",
    "HTML/CSS",
  ],
  Backend: [
    "Node.js",
    "C#",
    "ASP.NET",
    "Ruby on Rails",
    "Ruby",
    "Golang",
    "PostgreSQL",
    "MS SQL",
  ],
  "Data & Analytics": [
    "Python",
    "Pandas",
    "PySpark",
    "Matplotlib",
    "Seaborn",
    "Tableau",
    "Prisma",
    "SQL",
  ],
  "Tools & Infra": [
    "Git",
    "Docker",
    "Azure",
    "NetSuite",
    "Firebase",
    "Jupyter",
    "VS Code",
    "Anaconda",
    "Vercel",
  ],
};

export default function Skills({
  activeSkill,
  onSkillClick,
  onClear,
}: SkillsProps) {
  return (
    <section id="skills">
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
          Skills
        </span>
        <div style={{ width: "32px", height: "1px", background: "#21262d" }} />
      </div>

      <h2
        style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#e2e8f0",
          letterSpacing: "-0.5px",
          marginBottom: "28px",
        }}
      >
        What I work with
      </h2>
      <div style={{ position: "relative", maxWidth: "780px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "14px",
          }}
        >
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              style={{
                background: "#161b22",
                border: "1px solid #21262d",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "#6366f1",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {items.map((skill) => {
                  const isActive = activeSkill.includes(skill);

                  return (
                    <span
                      key={skill}
                      onClick={() => onSkillClick(skill)}
                      style={{
                        background: isActive ? "#6366f1" : "#0d1117",
                        border: `1px solid ${isActive ? "#6366f1" : "#21262d"}`,
                        color: isActive ? "#fff" : "#e2e8f0",
                        fontSize: "11px",
                        padding: "3px 9px",
                        borderRadius: "5px",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {activeSkill.length > 0 && (
          <button
            onClick={onClear}
            style={{
              position: "absolute",
              top: "-48px",
              right: 0,
              background: "#161b22",
              border: "1px solid #21262d",
              color: "#e2e8f0",
              fontSize: "12px",
              padding: "4px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.15s",
              marginTop: "16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#373e47";
              e.currentTarget.style.color = "#e2e8f0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#21262d";
              e.currentTarget.style.color = "#8b949e";
            }}
          >
            Clear selection ✕
          </button>
        )}
      </div>
    </section>
  );
}
