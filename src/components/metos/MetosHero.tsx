"use client";

import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function MetosHero() {
  return (
    <section className="pt-[180px] pb-20 md:pb-[120px] px-6 md:px-10 text-center relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.06)_0%,rgba(74,222,128,0.03)_30%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(45,212,191,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/25 text-teal font-mono text-xs font-medium tracking-[2px] uppercase px-5 py-2.5 rounded-full mb-9">
          <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_theme(colors.teal)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
          Metabolic Operating System
        </div>

        <h1 className="text-[42px] md:text-[76px] font-extrabold tracking-[-2px] md:tracking-[-3.5px] leading-[1.05] max-w-[900px] mx-auto">
          The stack that makes
          <br />
          <span className="bg-gradient-to-br from-teal to-sage bg-clip-text text-transparent">
            the drug work harder.
          </span>
        </h1>

        <p className="text-[17px] md:text-xl text-text-muted mt-7 max-w-[640px] mx-auto font-light leading-relaxed">
          Your GLP-1 handles the signal. metOS handles everything else — muscle,
          energy, gut, nutrients. The complete metabolic stack for men.
        </p>

        <div className="mt-11">
          <WaitlistForm variant="b" buttonLabel="Boot Your System" />
        </div>
      </div>
    </section>
  );
}
