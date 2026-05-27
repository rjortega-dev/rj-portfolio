import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  console.log(
    "%c👋 Hey, you found this.",
    "color: #6366f1; font-size: 16px; font-weight: bold;",
  );
  console.log(
    "%cLet's talk → rikrdo.ortega@gmail.com",
    "color: #8b949e; font-size: 13px;",
  );
  return (
    <div style={{ position: "relative" }}>
      {/* Dot grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, #21262d 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <Nav />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <footer
        style={{
          borderTop: "1px solid #21262d",
          padding: "18px 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          background: "#0d1117",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: "11px", color: "#6e7681" }}>
          Ricardo Ortega © {new Date().getFullYear()}
        </span>
        <span style={{ fontSize: "11px", color: "#6e7681" }}>Denver, CO</span>
      </footer>
    </div>
  );
}
