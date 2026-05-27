const PARAGRAPHS = [
  "Born and raised in Venezuela, I came to the US at 14. I ended up graduating college with a double major in Psychology and Modern Languages — not the most direct path to software, but it shaped how I think about people and communication. Beyond code, I speak English, Spanish, and Italian fluently, and I'm currently learning Japanese.",
  "After years in different industries I stumbled into coding and it immediately clicked. I joined Flatiron School and found a field I could be passionate about surrounded by a great community. After graduating I joined Enquire as a full-stack software developer, building CRM software for senior living facilities. I spent two and a half years creating and contributing to real production work — C#, ASP.NET, Vue, SQL, and Azure.",
  "I'm currently in a software development apprenticeship building AI-powered features with OpenAI's API alongside React and TypeScript. In parallel, I'm going deeper into data science through a second bootcamp — building analysis pipelines with Python, PySpark, and Pandas, and visualizing results in Tableau.",
  "I'm based in Denver and looking for roles that sit at the intersection of engineering and data.",
];

export default function About() {
  return (
    <section id="about">
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
          About
        </span>
        <div style={{ width: "32px", height: "1px", background: "#21262d" }} />
      </div>

      <h2
        style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#e2e8f0",
          letterSpacing: "-0.5px",
          marginBottom: "20px",
        }}
      >
        Non-linear path, clear direction
      </h2>

      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {PARAGRAPHS.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: "14px",
              color: "#8b949e",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
