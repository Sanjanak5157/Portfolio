// ── Education section ─────────────────────────────────────────
import { EDUCATION } from "../data";
import SectionHeader from "./SectionHeader";
import useInView from "./useInView";

export default function Education() {
  const [ref, inView] = useInView();
  return (
    <section id="education" className="py-28 px-6 bg-bg2">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="03. education" title="Academic Background" accentColor="#f72585" />

        <div ref={ref} className="flex flex-col gap-6">
          {EDUCATION.map((edu, i) => (
            <div key={edu.degree}
              className={`bg-bg border border-border rounded-xl px-8 py-6
                relative overflow-hidden card-hover
                ${inView ? "fade-left in-view" : "fade-left"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>

              {/* Left color bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ background: edu.accentColor }} />

              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h3 className="font-head font-bold text-lg text-white">{edu.degree}</h3>
                <span className="font-mono text-xs text-muted bg-bg2 border border-border
                  rounded-md px-3 py-1 whitespace-nowrap">
                  {edu.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-3">
                {/* School name — links to college website if provided */}
                {edu.collegeLink ? (
                  <a href={edu.collegeLink} target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-sm hover:underline flex items-center gap-1"
                    style={{ color: edu.accentColor }}>
                    {edu.school}
                    <i className="ri-external-link-line text-xs opacity-70" />
                  </a>
                ) : (
                  <span className="font-semibold text-sm" style={{ color: edu.accentColor }}>
                    {edu.school}
                  </span>
                )}

                {/* Grade badge */}
                <span className="font-mono text-xs px-3 py-1 rounded-md border"
                  style={{
                    color: edu.accentColor,
                    borderColor: edu.accentColor + "50",
                    background: edu.accentColor + "18",
                  }}>
                  {edu.grade}
                </span>
              </div>

              <p className="text-muted text-sm leading-relaxed">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
