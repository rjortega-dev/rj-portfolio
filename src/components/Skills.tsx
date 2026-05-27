const SKILLS = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Vue",
    "React Router",
    "HTML/CSS",
  ],
  Backend: ["Node.js", "C#", "ASP.NET", "Ruby on Rails"],
  "Data & Analytics": [
    "Python",
    "Pandas",
    "PySpark",
    "Matplotlib",
    "Seaborn",
    "Tableau",
    "SQL",
  ],
  "Tools & Infra": ["Git", "Docker", "Azure", "Jupyter", "VS Code", "Anaconda"],
};

export default function Skills() {
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "14px",
          maxWidth: "780px",
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
              {items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "#0d1117",
                    border: "1px solid #21262d",
                    color: "#e2e8f0",
                    fontSize: "11px",
                    padding: "3px 9px",
                    borderRadius: "5px",
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
