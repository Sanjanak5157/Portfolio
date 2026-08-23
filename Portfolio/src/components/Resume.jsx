// ── Resume section ────────────────────────────────────────────
import { PERSONAL } from "../data";
import SectionHeader from "./SectionHeader";

export default function Resume() {
  return (
    <section id="resume" className="py-28 px-6 bg-bg2">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader label="07. resume" title="My Resume" accentColor="#06d6a0" />

        <p className="text-muted text-base leading-relaxed mb-12 -mt-4">
          Download or view my resume — covers education, projects, internships, and skills.
        </p>

        <div className="bg-bg border border-border rounded-2xl p-12 flex flex-col items-center gap-6">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/25
            flex items-center justify-center">
            <i className="ri-file-pdf-line text-4xl text-accent" />
          </div>

          <div>
            <h3 className="font-head font-bold text-2xl text-white mb-1">
              {PERSONAL.name} — Resume
            </h3>
            {/* ↓ Update this line after you upload a new version */}
            <p className="text-muted text-sm">Updated June 2025 · PDF · 1 page</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href={PERSONAL.resumeLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-lg
                font-mono font-bold text-sm tracking-wider hover:bg-accent/80 transition-colors">
              <i className="ri-download-2-line" /> Download PDF
            </a>
            <a href={PERSONAL.resumeLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-border text-white
                rounded-lg font-mono text-sm tracking-wider hover:border-white/30 transition-colors">
              <i className="ri-eye-line" /> View Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
