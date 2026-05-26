import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer
        style={{
          borderTop: "1px solid #21262d",
          padding: "18px 2.5rem",
          display: "flex",
          justifyContent: "space-between",
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
