const features = [
  {
    icon: "\u{1F6E1}",
    title: "Muscle Shield",
    desc: "Targeted amino complex that supports muscle preservation during GLP-1 therapy. Keep what you built.",
  },
  {
    icon: "\u26A1",
    title: "Energy Core",
    desc: "B-vitamin + CoQ10 stack designed to support energy levels during GLP-1 therapy. Formulated without stimulants.",
  },
  {
    icon: "\u{1F525}",
    title: "Metabolic Primer",
    desc: "Phase-specific nutrients formulated to support healthy metabolic rate during weight loss.",
  },
  {
    icon: "\u{1F9EC}",
    title: "Gut Restore",
    desc: "Pre and probiotics formulated to support digestive comfort during GLP-1 therapy.",
  },
  {
    icon: "\u{1F4A7}",
    title: "Electrolyte Matrix",
    desc: "Sodium, potassium, magnesium in ratios designed to support mineral balance.",
  },
  {
    icon: "\u{1F504}",
    title: "Recovery Protocol",
    desc: "Adaptogen blend formulated to support the body's natural stress response and exercise recovery.",
  },
];

export function AtlasFeatures() {
  return (
    <section id="features" className="py-20 md:py-[100px] px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <div className="font-mono text-[11px] font-medium tracking-[3px] uppercase text-teal mb-4">
          The Protocol
        </div>
        <h2 className="text-4xl md:text-[48px] font-bold tracking-tight">
          What&apos;s In The Stack
        </h2>
        <p className="text-[17px] text-text-muted mt-4 max-w-[560px] mx-auto font-light">
          Six formulas, AI-matched to your phase and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-navy border border-white/[0.06] rounded-2xl p-8 transition-all duration-300 hover:border-sage/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
          >
            <div className="w-[52px] h-[52px] rounded-xl bg-sage/10 border border-sage/20 flex items-center justify-center mb-5 text-[22px]">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2.5">{f.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed font-light">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
