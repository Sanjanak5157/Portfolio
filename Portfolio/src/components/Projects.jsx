// ── Projects section ─────────────────────────────────────────
// liveLink: set "" in data to hide the Live Demo button (flexible!)
import { PROJECTS } from "../data";
import SectionHeader from "./SectionHeader";
import useInView from "./useInView";

export default function Projects() {
  const [ref, inView] = useInView();
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="04. projects" title="Featured Work" accentColor="#7c3aed" />
        

        {/* Guide text
        <p className="text-muted text-sm font-mono mb-10 -mt-6">
          <i className="ri-information-line mr-1" />
          Live Demo button shows only when a project has a live URL — set <code className="text-accent">liveLink: ""</code> in <code className="text-accent">data/index.js</code> to hide it.
        </p> */}

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div key={project.title}
              className={`bg-bg2 border border-border rounded-xl p-7
                relative overflow-hidden flex flex-col card-hover
                ${inView ? "fade-up in-view" : "fade-up"}`}
              style={{ transitionDelay: `${i * 80}ms` }}>

              {/* Top color strip */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                style={{ background: project.accentColor }} />
{/* title+date */}
              {/* <h3 className="font-head font-bold text-xl text-white mb-3">{project.title}</h3> */}
              <div className="flex flex-wrap justify-between gap-2 mb-3">
          <h3 className="font-head font-bold text-xl text-white flex-1">
    {project.title}
  </h3>

  {project.date && (
    <span
      className="font-mono text-xs text-muted bg-bg2 border border-border
      rounded-md px-3 py-1 h-fit"
    >
      {project.date}
    </span>
  )}
</div>
              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs font-mono border"
                    style={{
                      color: project.accentColor,
                      borderColor: project.accentColor + "40",
                      background: project.accentColor + "15",
                    }}>
                    {t}
                  </span>
                ))}
              </div>
              

              {/* Action links */}
              <div className="flex gap-4 flex-wrap items-center">
                {/* Live Demo — only shown when liveLink is set */}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-mono text-white
                      border-b transition-colors hover:opacity-70"
                    style={{ borderColor: project.accentColor }}>
                    <i className="ri-external-link-line" /> Live Demo
                  </a>
                )}

                {/* GitHub — shown when githubLink is set */  /* in text you put text-white instead of text-muted in the className of the anchor tag, I have corrected it to text-white */} 
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-mono text-white
                      border-b transition-colors hover:text-white transition-colors"
                      style={{ borderColor: project.accentColor }}>
                    <i className="ri-github-line" /> GitHub
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
