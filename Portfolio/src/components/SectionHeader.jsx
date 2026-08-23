// Reusable section heading used by every section
export default function SectionHeader({ label, title, accentColor = "#7c3aed" }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: accentColor }}>
        <span className="section-accent-line" style={{ background: accentColor }} />
        {label}
      </p>
      <h2 className="font-head font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-white">
        {title}
      </h2>
    </div>
  );
}
