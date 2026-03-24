import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServicesSection from "@/components/home/ServicesSection";
import SpacesSection from "@/components/home/SpacesSection";
import TeamSection from "@/components/home/TeamSection";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <SpacesSection />
      <TeamSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
