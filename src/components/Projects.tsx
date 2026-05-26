type Project = {
  title: string;
  year: string;
  tags: string[];
  desc: string;
  github: string;
};

const PROJECTS: Project[] = [
  {
    title: "Portfolio Site",
    year: "2025",
    tags: ["React", "TypeScript", "Vite"],
    desc: "Personal portfolio rebuilt from a Hugo site. Migrated to React and TypeScript for full control over the UI and maintainability.",
    github: "https://github.com/rjortega-dev/rj-portfolio",
  },
  {
    title: "AI Dungeon Master Assistant",
    year: "2026",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    desc: "AI-powered dungeon master assistant built with Next.js and the OpenAI API.",
    github: "https://github.com/rjortega-dev/ai-dungeon-master-assistant",
  },
  {
    title: "Wolves",
    year: "2020",
    tags: ["JavaScript"],
    desc: "A JavaScript project built at Flatiron School.",
    github: "https://github.com/rj-ortega/wolves",
  },
  {
    title: "Vue Enquire App",
    year: "2019",
    tags: ["Vue", "JavaScript"],
    desc: "CRM mobile demo app built with Vue",
    github: "https://github.com/rj-ortega/vue-enquire-app",
  },
  {
    title: "Ani Lobby",
    year: "2019",
    tags: ["JavaScript", "Jikan API"],
    desc: "Flatiron capstone — anime browsing and search app powered by the Jikan REST API.",
    github: "https://github.com/rj-ortega/ani-lobby",
  },
  {
    title: "Game Lobby",
    year: "2019",
    tags: ["JavaScript"],
    desc: "A multiplayer game lobby interface built at Flatiron School.",
    github: "https://github.com/rj-ortega/game-lobby",
  },
  {
    title: "Star Wars Hub",
    year: "2019",
    tags: ["JavaScript", "SWAPI"],
    desc: "Star Wars data explorer using the SWAPI REST API.",
    github: "https://github.com/rj-ortega/star-wars-hub",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 2.5rem" }}>
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
          Projects
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
        Things I've built
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          maxWidth: "900px",
        }}
      >
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#161b22",
              border: "1px solid #21262d",
              borderRadius: "10px",
              padding: "18px",
              transition: "border-color 0.15s",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#373e47")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "#21262d")
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "7px",
              }}
            >
              <span
                style={{ fontSize: "13px", fontWeight: 600, color: "#e2e8f0" }}
              >
                {project.title}
              </span>
              <span style={{ fontSize: "11px", color: "#6e7681" }}>
                {project.year}
              </span>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#8b949e",
                lineHeight: 1.6,
                marginBottom: "13px",
                flex: 1,
              }}
            >
              {project.desc}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      color: "#818cf8",
                      fontSize: "10px",
                      padding: "2px 7px",
                      borderRadius: "4px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "11px",
                  color: "#6e7681",
                  marginLeft: "8px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6e7681")}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
