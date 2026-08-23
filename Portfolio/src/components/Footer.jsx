// ── Footer ────────────────────────────────────────────────────
import { PERSONAL } from "../data";

export default function Footer() {
  const firstName = PERSONAL.name.split(" ")[0];
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center
        justify-between gap-5">

        {/* Brand */}
        <div>
          <span className="font-head font-extrabold text-lg text-white">
            <span className="text-accent">&lt;</span>{firstName}<span className="text-accent">/&gt;</span>
          </span>
          <p className="text-muted text-xs mt-1 font-mono">
            B.Tech CSE Fresher · Open to Work
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap gap-5">
          <a href={`https://mail.google.com/mail/?view=cm&to=${PERSONAL.email}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted text-sm font-mono
              hover:text-white transition-colors no-underline">
            <i className="ri-mail-fill text-[#EA4335]" />
            {PERSONAL.email}
          </a>
          <span className="flex items-center gap-2 text-muted text-sm font-mono">
            <i className="ri-phone-fill text-accent2" />
            {PERSONAL.phone}
          </span>
        </div>

        {/* Copyright
        <p className="text-muted text-xs font-mono">
          Built with React + Vite · © {new Date().getFullYear()}
        </p> */}
      </div>
    </footer>
  );
}
