const steps = [
  { num: "1", title: "Assess", desc: "AI evaluates your profile and GLP-1 phase" },
  { num: "2", title: "Match", desc: "AI builds your personalized protocol" },
  { num: "3", title: "Stack", desc: "Daily protocol, no guesswork" },
  { num: "4", title: "Recomp", desc: "AI adapts as you progress" },
];

export function AtlasHowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy relative py-24 lg:py-32 px-6 md:px-10">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/[0.02] to-transparent pointer-events-none" />

      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-sage" />

      <div className="relative">
        <div className="text-center mb-16 lg:mb-20">
          <div className="font-mono text-[11px] font-medium tracking-[3px] uppercase text-teal mb-4">
            Process
          </div>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tight">
            How it works
          </h2>
          <p className="text-[17px] text-text-muted mt-4 max-w-[560px] mx-auto font-light">
            Four steps from assessment to recomposition.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Connecting line — visible gradient */}
          <div className="hidden md:block absolute top-10 left-[80px] right-[80px] h-px bg-gradient-to-r from-sage/40 via-teal/30 to-sage/40" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className="relative z-[2] w-20 h-20 rounded-full bg-sage/10 border-2 border-sage/30 flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(74,222,128,0.08)]">
                <span className="font-mono text-[11px] text-sage/50 absolute -top-0.5 -right-0.5">
                  0{step.num}
                </span>
                <span className="font-mono text-2xl font-medium text-sage">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-text-dim font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
