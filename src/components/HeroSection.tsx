import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-success-light text-success px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Smart India Hackathon 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              SHUDDH:{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                "Safe Farms, Safe Food, Safe Future."
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              First app in India combining withdrawal calculator, AMU records, and alerts. 
              Digital medicine logging with automatic withdrawal period calculation using 
              MRLs to ensure livestock product safety and regulatory compliance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://shuddh--shuddh-sih.asia-east1.hosted.app/farmer/dashboard" target="_blank"><Button size="lg" className="group">
              View Live Demo
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button></a>
            <a href="https://shuddh--shuddh-sih.asia-east1.hosted.app/shop/dashboard" target="_blank"><Button variant="outline" size="lg">
              Pharmacy Portal
            </Button></a>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-sm text-muted-foreground">90% Reduced Residues</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-sm text-muted-foreground">Team WAVE</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-scale-in">
          <div className="relative rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={heroImage} 
              alt="Digital farm management dashboard showing livestock monitoring and compliance data"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute -top-6 -left-6 bg-card rounded-xl p-4 shadow-medium border animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-success-light rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Safe to Consume</p>
                <p className="text-sm text-muted-foreground">0 days remaining</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-medium border animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Compliance</p>
                <p className="text-sm text-muted-foreground">98.5% Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
