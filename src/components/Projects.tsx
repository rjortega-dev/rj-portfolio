import type { Project, ProjectsProps } from "../types";

const PROJECTS: Project[] = [
  {
    title: "Portfolio Site",
    year: "2026",
    tags: [
      "React",
      "TypeScript",
      "Javascript",
      "Vite",
      "Vercel",
      "HTML/CSS",
      "Git",
      "Node.js",
    ],
    desc: "Personal portfolio rebuilt from a Hugo site. Migrated to React and TypeScript for full control over the UI and maintainability.",
    github: "https://github.com/rjortega-dev/rj-portfolio",
  },
  {
    title: "AI Dungeon Master Assistant",
    year: "2026",
    tags: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Tailwind",
      "Neon",
      "Prisma",
      "Vercel",
      "Docker",
      "Git",
      "Node.js",
    ],
    desc: "AI-powered dungeon master assistant built with Next.js and the OpenAI API.",
    github: "https://github.com/rjortega-dev/ai-dungeon-master-assistant",
  },
  {
    title: "Ani Lobby",
    year: "2019",
    tags: [
      "React",
      "TypeScript",
      "JavaScript",
      "Semantic UI",
      "Golang",
      "Firebase",
      "Git",
    ],
    desc: "Flatiron capstone — anime browsing app with a React/TypeScript frontend, Golang backend, and Firebase OAuth.",
    github: "https://github.com/rj-ortega/ani-lobby",
  },
  {
    title: "Vue Enquire App",
    year: "2020",
    tags: ["Vue", "Vuetify", "JavaScript", "Firebase", "Git"],
    desc: "CRM demo app built with Vue and Vuetify, deployed on Firebase.",
    github: "https://github.com/rj-ortega/vue-enquire-app",
  },
  {
    title: "Wolves",
    year: "2019",
    tags: ["Ruby", "Ruby2D", "RSpec", "Git"],
    desc: "A 2D CLI game built with Ruby and Ruby2D. Place archers and riflemen to defend against incoming wolves.",
    github: "https://github.com/rj-ortega/wolves",
  },
  {
    title: "Game Lobby",
    year: "2019",
    tags: ["JavaScript", "Ruby on Rails", "Git"],
    desc: "A multiplayer game lobby interface built at Flatiron School.",
    github: "https://github.com/rj-ortega/game-lobby",
  },
  {
    title: "Star Wars Hub",
    year: "2019",
    tags: ["JavaScript", "TypeScript", "React", "Axios", "Git"],
    desc: "Star Wars data explorer using the SWAPI REST API.",
    github: "https://github.com/rj-ortega/star-wars-hub",
  },
];

export default function Projects({ activeSkill }: ProjectsProps) {
  const isMobile = window.innerWidth < 640;
  const columns = isMobile ? "1fr" : "repeat(3, 1fr)";
  return (
    <section id="projects">
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
          gridTemplateColumns: columns,
          gap: "12px",
          maxWidth: "900px",
        }}
      >
        {PROJECTS.map((project) => {
          const isMatch =
            activeSkill.length === 0 ||
            project.tags.some((tag) => activeSkill.includes(tag));

          const visibleTags = project.tags.slice(0, 4);
          const remainingCount = project.tags.length - 4;

          return (
            <div
              key={project.title}
              style={{
                background: "#161b22",
                border: `1px solid ${isMatch && activeSkill.length > 0 ? "#6366f1" : "#21262d"}`,
                borderRadius: "10px",
                padding: "18px",
                transition: "all 0.15s",
                display: "flex",
                flexDirection: "column",
                opacity: isMatch ? 1 : 0.3,
                minHeight: "180px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  isMatch && activeSkill.length > 0 ? "#6366f1" : "#373e47")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  isMatch && activeSkill.length > 0 ? "#6366f1" : "#21262d")
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
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#e2e8f0",
                  }}
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
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    flexWrap: "wrap",
                    minHeight: "44px",
                    alignItems: "flex-start",
                  }}
                >
                  {visibleTags.map((tag) => (
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
                  {remainingCount > 0 && (
                    <span
                      title={project.tags.slice(4).join(", ")}
                      style={{
                        background: "transparent",
                        border: "1px solid #373e47",
                        color: "#6e7681",
                        fontSize: "10px",
                        padding: "2px 7px",
                        borderRadius: "4px",
                        cursor: "default",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#6366f1";
                        e.currentTarget.style.color = "#818cf8";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#373e47";
                        e.currentTarget.style.color = "#6e7681";
                      }}
                    >
                      +{remainingCount}
                    </span>
                  )}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  style={{
                    fontSize: "11px",
                    color: "#6e7681",
                    marginLeft: "8px",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#e2e8f0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6e7681")
                  }
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
