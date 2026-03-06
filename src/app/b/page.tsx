import { MetosNav } from "@/components/metos/MetosNav";
import { MetosHero } from "@/components/metos/MetosHero";
import { MetosStats } from "@/components/metos/MetosStats";
import { MetosModules } from "@/components/metos/MetosModules";
import { MetosHowItWorks } from "@/components/metos/MetosHowItWorks";
import { MetosWaitlistBlock } from "@/components/metos/MetosWaitlistBlock";
import { MetosCTA } from "@/components/metos/MetosCTA";
import { MetosFooter } from "@/components/metos/MetosFooter";
import { ScrollTracker } from "@/components/shared/ScrollTracker";

export default function MetosPage() {
  return (
    <>
      <ScrollTracker />
      <MetosNav />
      <MetosHero />
      <MetosStats />
      <MetosModules />
      <MetosHowItWorks />
      <MetosWaitlistBlock />
      <MetosCTA />
      <MetosFooter />
    </>
  );
}
