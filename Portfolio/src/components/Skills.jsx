// ── Skills section ───────────────────────────────────────────
import { SKILLS } from "../data";
import { CERTIFICATES} from "../data";
import SectionHeader from "./SectionHeader";
import useInView from "./useInView";

export default function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="02. skills" title="Tech Stack" accentColor="#06d6a0" />

        <div ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <div key={category}
              className={`bg-bg2 border border-border rounded-xl p-6 card-hover
                ${inView ? "fade-up in-view" : "fade-up"}`}
              style={{ transitionDelay: `${i * 70}ms` }}>

              <h3 className="font-head font-bold text-sm text-accent2 uppercase
                tracking-wider mb-4 flex items-center gap-2">
                <i className="ri-code-s-slash-line" />
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  // <span key={skill} className="tag">{skill}</span>
                  <a
                    key={skill}
                    href={CERTIFICATES[skill]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag cursor-pointer hover:scale-105 transition"
                  >
                  {skill}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
