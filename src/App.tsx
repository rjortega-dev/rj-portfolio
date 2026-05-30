import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import type { EggId } from "./types";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
import type { ActiveSkill } from "./types";

export default function App() {
  const isMobile = window.innerWidth < 640;
  const [activeSkill, setActiveSkill] = useState<ActiveSkill>([]);

  const [eggFound, setEggFound] = useState<EggId[]>([]);
  const [konamiActive, setKonamiActive] = useState(false);
  const [avatarClicked, setAvatarClicked] = useState(false);

  const findEgg = (id: EggId) => {
    setEggFound((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  // Console Easter Egg
  useEffect(() => {
    console.log(
      "%c👋 Hey, you found this.",
      "color: #6366f1; font-size: 16px; font-weight: bold;",
    );
    console.log(
      "%cType claimEgg() in this console to claim a reward.",
      "color: #fff; font-size: 14px;",
    );

    window.claimEgg = () => {
      findEgg("console");
      console.log(
        "%cCongrats! You found the console 🥚 Easter egg! 🎉",
        "color: #6366f1; font-size: 16px; font-weight: bold;",
      );
    };
    return () => {
      delete window.claimEgg;
    };
  }, []);

  // Konami Code Easter Egg
  const konamiSequence = useRef<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && eggFound.includes("konami")) {
        setKonamiActive((prev) => !prev);
        return;
      }

      konamiSequence.current = [...konamiSequence.current, e.key].slice(
        -KONAMI.length,
      );
      if (konamiSequence.current.join(",") === KONAMI.join(",")) {
        setKonamiActive(true);
        findEgg("konami");
        console.log(
          "%cYou unlocked the Konami Code! 🥚🎉",
          "color: #6366f1; font-size: 16px; font-weight: bold;",
        );
        console.log(
          "%cPress Enter to toggle the Konami mode on/off.",
          "color: #8b949e; font-size: 13px;",
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiActive, eggFound]);

  // Avatar Click Easter Egg
  const handleAvatarClick = () => {
    findEgg("avatar");
    setAvatarClicked((prev) => !prev);
    console.log(
      "%cYou found the avatar Easter egg! 🥚🎉",
      "color: #6366f1; font-size: 16px; font-weight: bold;",
    );
  };
  const handleSkillClick = (skill: string) => {
    setActiveSkill((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const handleClear = () => setActiveSkill([]);

  // Easter egg 🥚 for anyone inspecting the console
  console.log(
    "%c👋 Hey, you found this.",
    "color: #6366f1; font-size: 16px; font-weight: bold;",
  );
  console.log(
    "%cLet's talk → rikrdo.ortega@gmail.com",
    "color: #8b949e; font-size: 13px;",
  );

  return (
    <div
      className={konamiActive ? "konami-active" : ""}
      style={{ position: "relative" }}
    >
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
          padding: isMobile ? "0 1rem" : "0 2.5rem",
        }}
      >
        <Hero
          eggFound={eggFound}
          onAvatarClick={handleAvatarClick}
          avatarClicked={avatarClicked}
        />
        <About />
        <Skills
          onSkillClick={handleSkillClick}
          activeSkill={activeSkill}
          onClear={handleClear}
        />
        <Projects activeSkill={activeSkill} />
        <Contact />
      </div>
      <footer
        style={{
          borderTop: "1px solid #21262d",
          padding: isMobile ? "18px 1rem" : "18px 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          background: "#0d1117",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: "11px", color: "#e2e8f0" }}>
          Ricardo Ortega © {new Date().getFullYear()}
        </span>
        <span style={{ fontSize: "11px", color: "#e2e8f0" }}>Denver, CO</span>
      </footer>
    </div>
  );
}
