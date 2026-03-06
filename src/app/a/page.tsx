import { AtlasNav } from "@/components/atlas/AtlasNav";
import { AtlasHero } from "@/components/atlas/AtlasHero";
import { AtlasStats } from "@/components/atlas/AtlasStats";
import { AtlasFeatures } from "@/components/atlas/AtlasFeatures";
import { AtlasHowItWorks } from "@/components/atlas/AtlasHowItWorks";
import { AtlasWaitlistBlock } from "@/components/atlas/AtlasWaitlistBlock";
import { AtlasCTA } from "@/components/atlas/AtlasCTA";
import { AtlasFooter } from "@/components/atlas/AtlasFooter";
import { ScrollTracker } from "@/components/shared/ScrollTracker";

export default function AtlasPage() {
  return (
    <>
      <ScrollTracker />
      <AtlasNav />
      <AtlasHero />
      <AtlasStats />
      <AtlasFeatures />
      <AtlasHowItWorks />
      <AtlasWaitlistBlock />
      <AtlasCTA />
      <AtlasFooter />
    </>
  );
}
