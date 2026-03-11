"use client";

import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function MetosCTA() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden py-24 lg:py-32 px-6 md:px-10"
    >
      {/* Stronger gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/90 to-sage/90" />
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.10)_0%,transparent_50%)] pointer-events-none" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative text-center">
        <h2 className="text-[36px] md:text-[56px] font-bold text-abyss tracking-tight mb-4">
          Ready to upgrade your protocol?
        </h2>
        <p className="text-lg md:text-xl text-abyss/75 mb-4 max-w-[520px] mx-auto">
          Join the waitlist. Be first to boot metOS when we launch.
        </p>
        <p className="text-sm font-medium text-abyss/50 mb-10">
          Early access spots are limited
        </p>
        <WaitlistForm variant="b" buttonLabel="Boot Your System" />
      </div>
    </section>
  );
}
