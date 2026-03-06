"use client";

import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function MetosCTA() {
  return (
    <section
      id="waitlist"
      className="bg-gradient-to-br from-teal to-sage py-20 md:py-[100px] px-6 md:px-10 text-center relative overflow-hidden"
    >
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="relative">
        <h2 className="text-[32px] md:text-[52px] font-bold text-abyss tracking-tight mb-4">
          Ready to upgrade your protocol?
        </h2>
        <p className="text-lg md:text-xl text-abyss/75 mb-10 max-w-[520px] mx-auto">
          Join the waitlist. Be first to boot metOS when we launch.
        </p>
        <WaitlistForm variant="b" buttonLabel="Boot Your System" />
      </div>
    </section>
  );
}
