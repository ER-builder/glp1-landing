"use client";

import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function AtlasCTA() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden py-24 lg:py-32 px-6 md:px-10"
    >
      {/* Stronger gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage/90 to-teal/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12)_0%,transparent_60%)] pointer-events-none" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative text-center">
        <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-4 text-abyss">
          Ready to join the waitlist?
        </h2>
        <p className="text-lg md:text-xl text-abyss/70 mb-4 max-w-[520px] mx-auto">
          Be the first to know when Atlas. launches. Early access and exclusive pricing for founding members.
        </p>
        <p className="text-sm font-medium text-abyss/50 mb-10">
          Early access spots are limited
        </p>
        <WaitlistForm variant="a" buttonLabel="Get Early Access" />
      </div>
    </section>
  );
}
