const modules = [
  {
    module: "module::muscle_shield",
    title: "Lean Mass Defense",
    desc: "Amino acid defense layer. Supports muscle preservation during GLP-1 therapy.",
  },
  {
    module: "module::energy_core",
    title: "Sustained Output",
    desc: "B-complex + CoQ10 engine. Formulated to support sustained energy during GLP-1 therapy.",
  },
  {
    module: "module::metabolic_primer",
    title: "Metabolic Support",
    desc: "Nutrient support for metabolism. Formulated to support healthy metabolic rate during weight loss.",
  },
  {
    module: "module::gut_restore",
    title: "Biome Support",
    desc: "Microbiome support protocol. Formulated to support digestive health during GLP-1 therapy.",
  },
  {
    module: "module::electrolyte_matrix",
    title: "Mineral Balance",
    desc: "Precision mineral support. Na/K/Mg in ratios designed to support mineral balance.",
  },
  {
    module: "module::recovery_ops",
    title: "Recovery Support",
    desc: "Adaptogen blend formulated to support the body's natural stress response.",
  },
];

export function MetosModules() {
  return (
    <section id="modules" className="py-24 lg:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="font-mono text-xs font-medium tracking-[3px] uppercase text-teal mb-4">
          System Architecture
        </div>
        <h2 className="text-[40px] md:text-[52px] font-bold tracking-[-2.5px]">
          System Modules
        </h2>
        <p className="text-lg text-text-muted mt-4 max-w-[560px] mx-auto font-light">
          Six precision-engineered modules. Each one is designed to support a
          specific aspect of your wellness during GLP-1 therapy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((m) => (
          <div
            key={m.module}
            className="relative overflow-hidden bg-gradient-to-b from-graphite/60 to-navy/40 backdrop-blur-sm border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-9 transition-all duration-[350ms] hover:border-teal/20 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] group"
          >
            {/* Top highlight line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]" />

            <div className="font-mono text-[13px] font-medium text-teal mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-teal/50" />
              {m.module}
            </div>
            <h3 className="text-xl font-semibold mb-3 tracking-tight">
              {m.title}
            </h3>
            <p className="text-[15px] text-text-muted leading-relaxed">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
