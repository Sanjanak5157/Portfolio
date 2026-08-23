import { useState, useEffect } from "react";
import { PERSONAL } from "../data";

const NAV = ["about","skills","education","projects","experience","activity","resume","contact"];

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const firstName = PERSONAL.name.split(" ")[0];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6
      ${scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">

        {/* Logo */}
        <span className="font-head font-extrabold text-xl text-white">
          <span className="text-accent">&lt;</span>{firstName}<span className="text-accent">/&gt;</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-1">
          {NAV.map(n => (
            <a key={n} href={`#${n}`}
              className={`px-3 py-1 rounded-md text-xs font-mono uppercase tracking-widest transition-all
                ${active === n
                  ? "bg-accent text-white"
                  : "text-muted hover:text-white"}`}>
              {n}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-muted hover:text-white text-2xl"
          onClick={() => setMenuOpen(o => !o)}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-3-line"} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-bg2 border-t border-border px-6 py-4 flex flex-col gap-3">
          {NAV.map(n => (
            <a key={n} href={`#${n}`} onClick={() => setMenuOpen(false)}
              className={`font-mono text-sm uppercase tracking-widest
                ${active === n ? "text-accent" : "text-muted"}`}>
              {n}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
