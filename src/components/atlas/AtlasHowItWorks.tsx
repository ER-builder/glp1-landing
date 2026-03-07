const steps = [
  { num: "1", title: "Assess", desc: "AI evaluates your profile and GLP-1 phase" },
  { num: "2", title: "Match", desc: "AI builds your personalized protocol" },
  { num: "3", title: "Stack", desc: "Daily protocol, no guesswork" },
  { num: "4", title: "Recomp", desc: "AI adapts as you progress" },
];

export function AtlasHowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy py-20 md:py-[100px] px-6 md:px-10">
      <div className="text-center mb-16">
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

      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.num} className="text-center relative">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-storm to-transparent" />
            )}
            <div className="w-16 h-16 rounded-full bg-sage/10 border-2 border-sage/30 flex items-center justify-center mx-auto mb-5 font-mono text-xl font-medium text-sage">
              {step.num}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-text-dim font-light">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
