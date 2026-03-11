"use client";

import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function MetosHero() {
  return (
    <section className="pt-[180px] pb-24 md:pb-[120px] px-6 md:px-10 text-center relative overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Primary background glow — stronger */}
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.15)_0%,rgba(74,222,128,0.06)_30%,transparent_60%)] pointer-events-none" />

      {/* Animated pulse glow */}
      <div className="absolute top-[60px] left-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(45,212,191,0.10)_0%,transparent_70%)] pointer-events-none hero-pulse" />

      <div className="relative max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/25 text-teal font-mono text-xs font-medium tracking-[2px] uppercase px-5 py-2.5 rounded-full mb-9">
          <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_theme(colors.teal)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
          AI-Powered Metabolic OS
        </div>

        <h1 className="text-[42px] md:text-[76px] font-extrabold tracking-[-2px] md:tracking-[-3.5px] leading-[1.05] max-w-[900px] mx-auto">
          <span className="bg-gradient-to-r from-white via-white to-teal/80 bg-clip-text text-transparent">
            Your GLP-1 stack,
          </span>
          <br />
          <span className="bg-gradient-to-br from-teal to-sage bg-clip-text text-transparent">
            upgraded.
          </span>
        </h1>

        <p className="text-[17px] md:text-xl text-text-muted mt-7 max-w-[640px] mx-auto font-light leading-relaxed">
          Your GLP-1 handles the signal. metOS is designed to support the rest —
          muscle preservation, energy, digestive comfort, and nutrient balance.
        </p>

        <div className="mt-11">
          <WaitlistForm variant="b" buttonLabel="Boot Your System" />
        </div>
      </div>
    </section>
  );
}
