export function AtlasWaitlistBlock() {
  return (
    <section className="py-24 lg:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="font-mono text-[11px] font-medium tracking-[3px] uppercase text-teal mb-4">
          Pre-Launch
        </div>
        <h2 className="text-4xl md:text-[48px] font-bold tracking-tight">
          Be First In Line
        </h2>
        <p className="text-[17px] text-text-muted mt-4 max-w-[560px] mx-auto font-light">
          We&apos;re finalizing formulations with our manufacturing partner. Join the waitlist for early access and launch pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card rounded-2xl p-8 md:p-9 text-center transition-all duration-300 hover:border-sage/20 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage/15 to-teal/10 border border-sage/20 flex items-center justify-center mx-auto mb-5 text-2xl">
            &#x1F3AF;
          </div>
          <h3 className="text-lg font-semibold mb-2">Early Access</h3>
          <p className="text-sm text-text-muted font-light leading-relaxed">
            Waitlist members get first access before public launch.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-9 text-center transition-all duration-300 hover:border-sage/20 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage/15 to-teal/10 border border-sage/20 flex items-center justify-center mx-auto mb-5 text-2xl">
            &#x1F916;
          </div>
          <h3 className="text-lg font-semibold mb-2">AI Assessment</h3>
          <p className="text-sm text-text-muted font-light leading-relaxed">
            Get your free AI metabolic evaluation when we launch. Your custom protocol starts on day one.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-9 text-center transition-all duration-300 hover:border-sage/20 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage/15 to-teal/10 border border-sage/20 flex items-center justify-center mx-auto mb-5 text-2xl">
            &#x1F4E6;
          </div>
          <h3 className="text-lg font-semibold mb-2">Priority Shipping</h3>
          <p className="text-sm text-text-muted font-light leading-relaxed">
            First batch ships to waitlist members before anyone else.
          </p>
        </div>
      </div>
    </section>
  );
}
