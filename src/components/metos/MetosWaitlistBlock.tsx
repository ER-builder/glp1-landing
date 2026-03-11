export function MetosWaitlistBlock() {
  return (
    <section className="py-24 lg:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="font-mono text-xs font-medium tracking-[3px] uppercase text-teal mb-4">
          Early Access
        </div>
        <h2 className="text-[40px] md:text-[52px] font-bold tracking-[-2.5px]">
          System Launch Imminent
        </h2>
        <p className="text-lg text-text-muted mt-4 max-w-[560px] mx-auto font-light">
          metOS is in final development. Join the waitlist to be among the first to boot the system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="relative overflow-hidden bg-gradient-to-b from-graphite/60 to-navy/40 backdrop-blur-sm border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-9 text-center group transition-all duration-300 hover:border-teal/20 hover:-translate-y-1">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-14 h-14 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-5 text-2xl">
            &#x1F6A8;
          </div>
          <h3 className="text-lg font-semibold mb-2">Priority Access</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Waitlist members boot first. Full system access before public launch.
          </p>
        </div>
        <div className="relative overflow-hidden bg-gradient-to-b from-graphite/60 to-navy/40 backdrop-blur-sm border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-9 text-center group transition-all duration-300 hover:border-teal/20 hover:-translate-y-1">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-14 h-14 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-5 text-2xl">
            &#x1F916;
          </div>
          <h3 className="text-lg font-semibold mb-2">AI Diagnostic</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Get your free AI metabolic assessment. Your custom protocol starts before launch.
          </p>
        </div>
        <div className="relative overflow-hidden bg-gradient-to-b from-graphite/60 to-navy/40 backdrop-blur-sm border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-9 text-center group transition-all duration-300 hover:border-teal/20 hover:-translate-y-1">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-14 h-14 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-5 text-2xl">
            &#x1F4E6;
          </div>
          <h3 className="text-lg font-semibold mb-2">First Batch</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            First production run ships to waitlist members. Limited availability.
          </p>
        </div>
      </div>
    </section>
  );
}
