import { Navbar } from "@/components/ui/navbar";
import { ParticleBackground } from "@/components/ui/particle-background";
import { HeroSection } from "@/components/hero-section";
import { OverviewSection } from "@/components/overview-section";
import { TargetAudience } from "@/components/target-audience";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { FeaturesGrid } from "@/components/features-grid";
import { DemoSection } from "@/components/demo-section";
import { HowItWorks } from "@/components/how-it-works";
import { PricingSection } from "@/components/pricing-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground selection:bg-primary/30">
      <ParticleBackground />
      <Navbar />

      <HeroSection />
      <OverviewSection />
      <TargetAudience />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <DemoSection />
      <HowItWorks />
      <PricingSection />
      <WhyChooseUs />
      <FAQSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
