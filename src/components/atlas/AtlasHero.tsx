"use client";

import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function AtlasHero() {
  return (
    <section className="pt-40 md:pt-[160px] pb-24 md:pb-[120px] px-6 md:px-10 text-center relative overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Primary background glow — stronger */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.18)_0%,rgba(45,212,191,0.08)_30%,transparent_60%)] pointer-events-none" />

      {/* Animated pulse glow */}
      <div className="absolute -top-[100px] left-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(74,222,128,0.12)_0%,transparent_70%)] pointer-events-none hero-pulse" />

      <div className="relative max-w-7xl mx-auto">
        <div className="inline-block bg-sage/10 border border-sage/25 text-sage font-mono text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-9">
          AI-Personalized GLP-1 Stack for Men
        </div>

        <h1 className="text-[44px] md:text-[76px] font-extrabold tracking-[-2px] md:tracking-[-3.5px] leading-[1.05] max-w-[800px] mx-auto">
          <span className="bg-gradient-to-r from-white via-white to-sage bg-clip-text text-transparent">
            Fuel the shift.
          </span>
          <br />
          <span className="bg-gradient-to-br from-sage to-teal bg-clip-text text-transparent">
            Own the outcome.
          </span>
        </h1>

        <p className="text-base md:text-[19px] text-text-muted mt-7 max-w-[580px] mx-auto font-light leading-relaxed">
          A precision-built supplement protocol for men on GLP-1. Formulated to
          support muscle preservation, energy, and your GLP-1 journey.
        </p>

        <div className="mt-11">
          <WaitlistForm variant="a" buttonLabel="Get Early Access" />
        </div>
      </div>
    </section>
  );
}
