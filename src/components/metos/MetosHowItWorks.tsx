const steps = [
  {
    num: "1",
    label: "Diagnostic",
    title: "Assess",
    desc: "Full metabolic assessment. We map your deficiencies, goals, and current GLP-1 protocol.",
  },
  {
    num: "2",
    label: "Configure",
    title: "Match",
    desc: "Match your protocol to the right module configuration. Personalized to your phase and biology.",
  },
  {
    num: "3",
    label: "Deploy",
    title: "Execute",
    desc: "Daily stack delivered. Zero guesswork. Every dose timed and dosed for maximum effect.",
  },
  {
    num: "4",
    label: "Recomp",
    title: "Optimize",
    desc: "Track, measure, and refine. Continuous optimization based on your real-world data.",
  },
];

export function MetosHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-[120px] px-6 md:px-10 bg-navy relative">
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/15 to-transparent" />

      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[72px]">
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
          {/* Connecting line */}
          <div className="hidden md:block absolute top-9 left-[60px] right-[60px] h-px bg-gradient-to-r from-teal to-sage opacity-15" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className="relative z-[2] w-[72px] h-[72px] rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6 font-mono text-2xl font-semibold text-teal">
                {step.num}
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
