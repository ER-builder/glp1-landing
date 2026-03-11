const steps = [
  {
    num: "1",
    label: "Diagnostic",
    title: "Assess",
    desc: "Full metabolic assessment. AI evaluates your goals, lifestyle, and current GLP-1 phase to build your custom protocol.",
  },
  {
    num: "2",
    label: "Configure",
    title: "Match",
    desc: "Match your protocol to the right module configuration. AI-matched to your goals and GLP-1 phase.",
  },
  {
    num: "3",
    label: "Deploy",
    title: "Execute",
    desc: "Daily stack delivered. Zero guesswork. Every dose timed and dosed for your daily routine.",
  },
  {
    num: "4",
    label: "Recomp",
    title: "Optimize",
    desc: "Track, measure, and refine. AI adapts your protocol as you progress.",
  },
];

export function MetosHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-6 md:px-10 bg-navy relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal/[0.02] to-transparent pointer-events-none" />

      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 section-divider-teal" />

      <div className="max-w-[1100px] mx-auto relative">
        <div className="text-center mb-16 lg:mb-20">
          <div className="font-mono text-xs font-medium tracking-[3px] uppercase text-teal mb-4">
            Boot Sequence
          </div>
          <h2 className="text-[40px] md:text-[52px] font-bold tracking-[-2.5px]">
            How It Works
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-[560px] mx-auto font-light">
            Four steps from assessment to recomposition. No guesswork at any stage.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
          {/* Connecting line — visible gradient */}
          <div className="hidden md:block absolute top-10 left-[60px] right-[60px] h-px bg-gradient-to-r from-teal/40 via-sage/30 to-teal/40" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className="relative z-[2] w-20 h-20 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(45,212,191,0.08)]">
                <span className="font-mono text-[11px] text-teal/50 absolute -top-0.5 -right-0.5">
                  0{step.num}
                </span>
                <span className="font-mono text-2xl font-semibold text-teal">
                  {step.num}
                </span>
              </div>
              <div className="font-mono text-xs font-medium text-teal tracking-[2px] uppercase mb-2">
                {step.label}
              </div>
              <h3 className="text-[22px] font-semibold mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[15px] text-text-dim leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
