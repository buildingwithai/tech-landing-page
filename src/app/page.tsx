import { HeroSection } from "@/components/hero-section";
import { FeatureSetSection } from "@/components/feature-set-section";
import { StrategicNarrativeSection } from "@/components/strategic-narrative";
import { InquirySection } from "@/components/inquiry-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <FeatureSetSection />
      <StrategicNarrativeSection />
      <InquirySection />
    </main>
  );
}
