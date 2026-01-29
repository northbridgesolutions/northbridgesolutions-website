import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a1f3a]">
      <Navigation />
      <HeroSection />
      {/* <StatsSection /> */}
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
