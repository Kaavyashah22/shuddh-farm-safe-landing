import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              By Team WAVE
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-emerald-600">SHUDDH</span>
              <br />
              <span className="text-gray-800">Drug-Free Livestock</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              AI-powered solution ensuring antibiotic-free livestock production with real-time monitoring and compliance tracking.
            </p>
          </div>

          {/* Key Features */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">Drug Residue Detection</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">Real-time Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">Compliance Tracking</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Pharmacy Portal
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            <div>
              <div className="text-2xl font-bold text-emerald-600">100%</div>
              <div className="text-sm text-gray-600">Drug-Free Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-gray-600">Real-time Monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">AI</div>
              <div className="text-sm text-gray-600">Powered Analytics</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-scale-in">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-farm.jpg"
              alt="Modern livestock farm with SHUDDH monitoring system"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">System Active</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-center">
              <div className="text-lg font-bold text-emerald-600">Zero</div>
              <div className="text-xs text-gray-600">Drug Residues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;