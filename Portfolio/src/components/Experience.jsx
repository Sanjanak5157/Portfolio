// ── Experience section ────────────────────────────────────────
// Each entry can have optional githubLink and certLink
import { EXPERIENCE } from "../data";
import SectionHeader from "./SectionHeader";
import useInView from "./useInView";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="05. experience" title="Work Experience" accentColor="#f72585" />

        {/* Timeline */}
        <div ref={ref} className="relative pl-6 border-l border-border flex flex-col gap-12">
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.company + i}
              className={`relative ${inView ? "fade-left in-view" : "fade-left"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>

              {/* Timeline dot */}
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-accent3
                border-2 border-bg" />

              {/* Header row */}
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                <h3 className="font-head font-bold text-xl text-white">{exp.role}</h3>
                <span className="text-accent3 text-sm font-semibold">{exp.company}</span>
              </div>

              {/* Date */}
              <p className="font-mono text-xs text-muted mb-3 flex items-center gap-1">
                <i className="ri-calendar-line" /> {exp.period}
              </p>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-4">{exp.desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Links — only shown when set in data */}
              <div className="flex flex-wrap gap-3">
                {exp.githubLink && (
                  <a href={exp.githubLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-md border
                      text-xs font-mono text-white border-white/15 bg-white/5
                      hover:bg-white/10 transition-colors">
                    <i className="ri-github-line" /> GitHub
                  </a>
                )}
                {exp.certLink && (
                  <a href={exp.certLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-md border
                      text-xs font-mono text-accent2 border-accent2/30 bg-accent2/8
                      hover:bg-accent2/15 transition-colors">
                    <i className="ri-medal-line" /> Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
