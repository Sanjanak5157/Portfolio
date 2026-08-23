// ============================================================
//  App.jsx — Root component
//  All sections are separate files under src/components/
//  All content data lives in src/data/index.js
// ============================================================
import { useState, useEffect } from "react";
import "./index.css";

import Navbar        from "./components/Navbar";
import LockScreen    from "./components/LockScreen";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Education     from "./components/Education";
import Projects      from "./components/Projects";
import Experience    from "./components/Experience";
import Activity  from "./components/Activity";
import Resume        from "./components/Resume";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";

// Noise texture overlay
function Noise() {
  return (
    <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

const NAV_IDS = ["about","skills","education","projects","experience","activity","resume","contact"];

export default function App() {
  const [active, setActive] = useState("about");

  // Lock screen: unlocked once per browser session (set PIN in LockScreen.jsx)
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("portfolio_unlocked") === "true"
  );

  // Highlight nav item based on scroll position
  useEffect(() => {
    if (!unlocked) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_IDS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [unlocked]);

  if (!unlocked) {
    return <LockScreen onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="bg-bg text-white min-h-screen">
      <Noise />
      <Navbar active={active} />
      <main className="relative z-10">
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Activity />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
