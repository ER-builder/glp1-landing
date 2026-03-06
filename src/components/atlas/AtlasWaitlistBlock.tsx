export function AtlasWaitlistBlock() {
  return (
    <section className="py-20 md:py-[100px] px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
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
        <div className="bg-navy border border-white/[0.06] rounded-2xl p-8 text-center">
          <div className="text-3xl mb-4">&#x1F3AF;</div>
          <h3 className="text-lg font-semibold mb-2">Early Access</h3>
          <p className="text-sm text-text-muted font-light">
            Waitlist members get first access before public launch.
          </p>
        </div>
        <div className="bg-navy border border-white/[0.06] rounded-2xl p-8 text-center">
          <div className="text-3xl mb-4">&#x1F4B0;</div>
          <h3 className="text-lg font-semibold mb-2">Launch Pricing</h3>
          <p className="text-sm text-text-muted font-light">
            Exclusive discount for founding members. One-time offer.
          </p>
        </div>
        <div className="bg-navy border border-white/[0.06] rounded-2xl p-8 text-center">
          <div className="text-3xl mb-4">&#x1F4E6;</div>
          <h3 className="text-lg font-semibold mb-2">Priority Shipping</h3>
          <p className="text-sm text-text-muted font-light">
            First batch ships to waitlist members before anyone else.
          </p>
        </div>
      </div>
    </section>
  );
}
