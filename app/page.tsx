import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import SpacesSection from "@/components/home/SpacesSection";
import TeamSection from "@/components/home/TeamSection";
import StatsSection from "@/components/home/StatsSection";
import ConveniosSection from "@/components/home/ConveniosSection";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <HowItWorksSection />
      <ServicesSection />
      <SpacesSection />
      <TeamSection />
      <StatsSection />
      <ConveniosSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
