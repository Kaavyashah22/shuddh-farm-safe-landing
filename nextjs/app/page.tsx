import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechnicalApproach from "@/components/TechnicalApproach";
import DashboardPreview from "@/components/DashboardPreview";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TechnicalApproach />
      <DashboardPreview />
      <ImpactSection />
      <Footer />
    </div>
  );
}