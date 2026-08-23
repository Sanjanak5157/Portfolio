// ── Achievements section ─────────────────────────────────────
// Tabs: Papers | Hackathons | Workshops | Extracurricular
import { useState } from "react";
import { PAPERS, CERTIFICATIONS } from "../data";
import SectionHeader from "./SectionHeader";
import useInView from "./useInView";

// Reusable colored badge
function Badge({ children, color }) {
  return (
    <span className="px-2 py-0.5 rounded text-xs font-mono border"
      style={{ color, borderColor: color + "40", background: color + "15" }}>
      {children}
    </span>
  );
}

// Reusable link button
function LinkBtn({ href, icon, label, color = "var(--muted)" }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-4 py-2 rounded-md border text-xs font-mono
        transition-colors hover:opacity-80"
      style={{ color, borderColor: color + "50", background: color + "12" }}>
      <i className={icon} /> {label}
    </a>
  );
}

// ── Tab panels ───────────────────────────────────────────────

function Papers({ inView }) {
  return (
    <div className="flex flex-col gap-5">
      {PAPERS.map((p, i) => (
        <div key={p.title}
          className={`bg-bg border border-border rounded-xl px-7 py-6 card-hover
            ${inView ? "fade-up in-view" : "fade-up"}`}
          style={{ transitionDelay: `${i * 100}ms` }}>

          <div className="flex flex-wrap justify-between gap-2 mb-2">
            <h3 className="font-head font-bold text-lg text-white flex-1">{p.title}</h3>
            <span className="font-mono text-xs text-muted bg-bg2 border border-border
              rounded-md px-3 py-1 h-fit">{p.year}</span>
          </div>

          <p className="text-yellow-400 font-mono text-xs mb-1">{p.journal}</p>
          <p className="text-muted text-xs italic mb-3">{p.authors}</p>
          <p className="text-muted text-sm leading-relaxed mb-4">{p.abstract}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.map(t => <Badge key={t} color="#fbbf24">{t}</Badge>)}
          </div>

          <div className="flex flex-wrap gap-3">
            <LinkBtn href={p.paperLink} icon="ri-article-line" label="View Paper ↗" color="#fbbf24" />
            <LinkBtn href={p.certLink}  icon="ri-medal-line"   label="Certificate ↗" color="#6b6b80" />
          </div>
        </div>
      ))}
    </div>
  );
}
function Certifications({ inView }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {CERTIFICATIONS.map((c, i) => (
        <div key={c.title}
          className={`bg-bg border border-border rounded-xl px-6 py-5 card-hover
            ${inView ? "fade-up in-view" : "fade-up"}`}
          style={{ transitionDelay: `${i * 100}ms` }}>

          <div className="flex items-start gap-4 mb-3">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: c.color + "18", border: `1px solid ${c.color}35` }}>
              <i className={`${c.icon} text-xl`} style={{ color: c.color }} />
            </div>
            <div>
              <h3 className="font-head font-bold text-base text-white mb-0.5 leading-snug">{c.title}</h3>
              <p className="text-xs font-mono" style={{ color: c.color }}>{c.issuer}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-mono text-xs text-muted">
              <span>{c.date}</span>
              {/* <span className="mx-1.5">·</span> */}
              {/* <span>ID: {c.credId}</span> */}
            </div>
            <LinkBtn href={c.certLink} icon="ri-medal-line" label="Certificate ↗" color="#6b6b80" />
          </div>
        </div>
      ))}
    </div>
  );
}


// function Hackathons({ inView }) {
//   return (
//     <div className="flex flex-col gap-5">
//       {HACKATHONS.map((h, i) => (
//         <div key={h.title}
//           className={`bg-bg border border-border rounded-xl px-7 py-6 card-hover
//             ${inView ? "fade-up in-view" : "fade-up"}`}
//           style={{ transitionDelay: `${i * 100}ms` }}>

//           <div className="flex flex-wrap justify-between gap-2 mb-2">
//             <h3 className="font-head font-bold text-lg text-white flex-1">{h.title}</h3>
//             <span className="font-mono text-xs text-muted bg-bg2 border border-border
//               rounded-md px-3 py-1 h-fit">{h.date}</span>
//           </div>

//           <div className="flex flex-wrap items-center gap-3 mb-3">
//             <span className="text-accent2 font-mono text-xs">{h.organizer}</span>
//             <span className="font-mono text-xs px-3 py-0.5 rounded-md border"
//               style={{ color:"#fbbf24", borderColor:"#fbbf2460", background:"rgba(251,191,36,.1)" }}>
//               {h.result} · {h.prize}
//             </span>
//           </div>

//           <p className="text-muted text-sm leading-relaxed mb-4">{h.desc}</p>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {h.tags.map(t => <Badge key={t} color="#06d6a0">{t}</Badge>)}
//           </div>

//           <LinkBtn href={h.certLink} icon="ri-medal-line" label="Certificate ↗" color="#6b6b80" />
//         </div>
//       ))}
//     </div>
//   );
// }

// function Workshops({ inView }) {
//   return (
//     <div className="flex flex-col gap-5">
//       {WORKSHOPS.map((w, i) => (
//         <div key={w.title}
//           className={`bg-bg border border-border rounded-xl px-7 py-6 card-hover
//             ${inView ? "fade-up in-view" : "fade-up"}`}
//           style={{ transitionDelay: `${i * 100}ms` }}>

//           <div className="flex flex-wrap justify-between gap-2 mb-2">
//             <h3 className="font-head font-bold text-lg text-white flex-1">{w.title}</h3>
//             <span className="font-mono text-xs text-muted bg-bg2 border border-border
//               rounded-md px-3 py-1 h-fit">{w.date}</span>
//           </div>

//           <p className="text-accent font-mono text-xs mb-3">{w.organizer}</p>
//           <p className="text-muted text-sm leading-relaxed mb-4">{w.desc}</p>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {w.tags.map(t => <Badge key={t} color="#7c3aed">{t}</Badge>)}
//           </div>

//           <LinkBtn href={w.certLink} icon="ri-medal-line" label="Certificate ↗" color="#6b6b80" />
//         </div>
//       ))}
//     </div>
//   );
// }


// function Extracurricular({ inView }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//       {EXTRACURRICULAR.map((e, i) => (
//         <div key={e.title}
//           className={`bg-bg border border-border rounded-xl px-6 py-5 card-hover
//             ${inView ? "fade-up in-view" : "fade-up"}`}
//           style={{ transitionDelay: `${i * 100}ms` }}>

//           <div className="flex items-start gap-4">
//             <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20
//               flex items-center justify-center shrink-0">
//               <i className={`${e.icon} text-xl text-accent`} />
//             </div>
//             <div>
//               <h3 className="font-head font-bold text-base text-white mb-0.5">{e.title}</h3>
//               <div className="flex gap-2 flex-wrap items-center mb-2">
//                 <span className="text-accent2 font-mono text-xs">{e.org}</span>
//                 <span className="text-muted font-mono text-xs">· {e.period}</span>
//               </div>
//               <p className="text-muted text-sm leading-relaxed">{e.desc}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// ── Main component ────────────────────────────────────────────
const TABS = [
  { key: "papers",         label: "📄 Papers",          Component: Papers },
  { key: "certifications", label: "📜 Certificates",    Component: Certifications },
  // { key: "hackathons",     label: "🏆 Hackathons",      Component: Hackathons },
  // { key: "workshops",      label: "🎓 Workshops",       Component: Workshops },
  // { key: "extracurricular",label: "⭐ Extracurricular", Component: Extracurricular },
];

export default function Activity() {
  const [tab, setTab] = useState("papers");
  const [ref, inView] = useInView();
  const Active = TABS.find(t => t.key === tab).Component;

  return (
    <section id="activity" ref={ref} className="py-28 px-6 bg-bg2">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="06. Activity" title="Research & Certificates" accentColor="#fbbf24" />

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map(({ key, label }) => (
            <button key={key} onClick={() => setTab(key)}
              className={`px-5 py-2 rounded-lg border font-mono text-sm transition-all cursor-pointer
                ${tab === key
                  ? "bg-yellow-400 text-black border-yellow-400 font-bold"
                  : "bg-bg border-border text-muted hover:text-white"}`}>
              {label}
            </button>
          ))}
        </div>

        <Active inView={inView} />
      </div>
    </section>
  );
}
