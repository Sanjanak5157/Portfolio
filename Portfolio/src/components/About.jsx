// ── About / Hero section ─────────────────────────────────────
// The animated role is now a FIXED HEIGHT block — no layout shift
import { useState, useEffect, useRef } from "react";
import { PERSONAL } from "../data";
import defaultPhoto from "../assets/Sanjana_photos_new_2026 .jpeg";

// Social links config — edit href values in data/index.js → PERSONAL
const SOCIALS = [
  { label: "Email",      icon: "ri-mail-fill",        color: "#EA4335", href: () => `https://mail.google.com/mail/?view=cm&to=${PERSONAL.email}` },
  { label: "GitHub",     icon: "ri-github-fill",       color: "#ffffff", href: () => PERSONAL.github },
  { label: "LinkedIn",   icon: "ri-linkedin-box-fill", color: "#0077B5", href: () => PERSONAL.linkedin },
  { label: "Code360",   icon: "ri-checkbox-circle-fill",   color: "#5B4638", href: () => PERSONAL.code360 },
  { label: "LeetCode",   icon: "ri-code-s-slash-line", color: "#FFA116", href: () => PERSONAL.leetcode },
  // { label: "Naukri",     icon: "ri-briefcase-fill",    color: "#FF7555", href: () => PERSONAL.naukri },
  // { label: "HackerRank", icon: "ri-terminal-box-fill", color: "#2EC866", href: () => PERSONAL.hackerrank },
  // { label: "Kaggle",     icon: "ri-bar-chart-fill",    color: "#20BEFF", href: () => PERSONAL.kaggle },

  // { label: "Duolingo",   icon: "ri-translate-2",       color: "#58CC02", href: () => PERSONAL.duolingo },
  
  // { label: "Unstop",     icon: "ri-trophy-fill",       color: "#6C63FF", href: () => PERSONAL.unstop },
];

// ── Typing animation (CSS only — no JS reflow) ───────────────
// Uses CSS animation with clip trick; parent div has a fixed min-height
// so the content below never shifts.
const ROLES = [
  "Fresher Developer",
  "ML Enthusiast",
  "Full Stack Developer",
  "Open Source Contributor",
  "Problem Solver",
];

function TypingRole() {
  return (
    /*  min-h fixes the height so nothing below jumps.
        Adjust min-h value if you change font-size.         */
    <div className="min-h-[1.15em] overflow-hidden">
      <span
        id="typing-role"
        className="font-head font-extrabold text-4xl md:text-2xl lg:text-4xl tracking-tight"
        style={{
          WebkitTextStroke: "1px #7c3aed",
          color: "transparent",
          display: "inline-block",
        }}
      >
        <TypingText roles={ROLES} />
      </span>
    </div>
  );
}

function TypingText({ roles }) {
  const [display, setDisplay] = useState("");
  const [ri, setRi] = useState(0);
  const fwd = useRef(true);
  const idx = useRef(0);

  useEffect(() => {
    const cur = () => roles[ri];
    const iv = setInterval(() => {
      if (fwd.current) {
        idx.current++;
        setDisplay(cur().slice(0, idx.current));
        if (idx.current === cur().length) {
          fwd.current = false;
          // pause before erasing
          setTimeout(() => {}, 1000);
        }
      } else {
        idx.current--;
        setDisplay(cur().slice(0, idx.current));
        if (idx.current === 0) {
          fwd.current = true;
          setRi(r => (r + 1) % roles.length);
        }
      }
    }, 90);
    return () => clearInterval(iv);
  }, [ri]);

  return (
    <>
      {display}
      <span className="blink" style={{ color: "#7c3aed", WebkitTextStroke: "none" }}>|</span>
    </>
  );
}

// ── Profile photo with update option ──────────────────────────
// Click the camera icon to pick a new photo (stored in browser session only —
// for a permanent change, replace src/assets/profile.jpg with your image file).
function ProfilePhoto() {
  const [photo, setPhoto] = useState(defaultPhoto);
  const inputRef = useRef(null);

  const handleFile = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setPhoto(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative w-44 h-44 md:w-56 md:h-56 shrink-0 group">
      <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-accent/30
        shadow-[0_0_40px_rgba(124,58,237,0.15)]">
        <img src={photo} alt={PERSONAL.name} className="w-full h-full object-cover" />
      </div>

      {/* Update photo button */}
      <button onClick={() => inputRef.current?.click()}
        title="Update photo"
        className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent
          border-4 border-bg flex items-center justify-center
          hover:bg-accent/80 transition-colors cursor-pointer">
        <i className="ri-camera-fill text-white text-sm" />
      </button>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center
      px-6 pt-28 pb-20 relative overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 left-1/6 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,214,160,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-5xl w-full relative z-10 flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">

        {/* Photo column */}
        <ProfilePhoto />

        {/* Text column */}
        <div className="flex-1 min-w-0">

        {/* Status badge */}
        <p className="font-mono text-accent2 text-xs uppercase tracking-widest mb-5">
          <i className="ri-checkbox-circle-fill mr-2" />
          {PERSONAL.tagline}
        </p>

        {/* Name — static */}
        <h1 className="font-head font-extrabold leading-tight tracking-tight mb-3
          text-4xl md:text-6xl lg:text-7xl text-white">
          {PERSONAL.name}
        </h1>

        {/* Role — typing, fixed height container so nothing shifts */}
        <TypingRole />

        {/* Bio */}
        <p className="mt-6 max-w-xl text-muted text-base leading-relaxed">
          {PERSONAL.bio}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects"
            className="px-7 py-3 bg-accent text-white rounded-lg font-mono font-bold text-sm
              tracking-wider hover:bg-accent/80 transition-colors">
            View Projects →
          </a>
          <a href={PERSONAL.resumeLink} target="_blank" rel="noopener noreferrer"
            className="px-7 py-3 border border-accent2 text-accent2 rounded-lg font-mono text-sm
              tracking-wider hover:bg-accent2/10 transition-colors">
            <i className="ri-download-line mr-1" /> Download Resume
          </a>
          <a href="#contact"
            className="px-7 py-3 border border-border text-white rounded-lg font-mono text-sm
              tracking-wider hover:border-white/30 transition-colors">
            Hire Me
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-8 flex flex-wrap gap-3">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href()} target="_blank" rel="noopener noreferrer"
              title={s.label}
              className="w-11 h-11 rounded-xl border border-border bg-bg2
                flex items-center justify-center hover:border-white/30
                hover:scale-110 transition-all duration-200">
              <i className={`${s.icon} text-xl`} style={{ color: s.color }} />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap gap-10">
          {PERSONAL.stats.map(({ value, label }) => (
            <div key={label}>
              <div className="font-head font-extrabold text-4xl text-accent">{value}</div>
              <div className="font-mono text-xs text-muted uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
