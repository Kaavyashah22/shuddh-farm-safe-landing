import { Users, Building2, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const targetAudience = [
  {
    icon: Users,
    title: "Farmers",
    benefit: "Better compliance, fewer losses",
    color: "text-green-600"
  },
  {
    icon: Building2,
    title: "Cooperatives/Processors",
    benefit: "Safer supply chain, export readiness",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Regulators",
    benefit: "AMU/Residue monitoring data",
    color: "text-purple-600"
  },
  {
    icon: Heart,
    title: "Consumers",
    benefit: "Residue-free, safe food",
    color: "text-red-600"
  }
];

const impacts = [
  {
    category: "Social Impact",
    description: "Residue-free food, reduced AMR risk, improved consumer trust",
    icon: "🌱"
  },
  {
    category: "Economic Impact",
    description: "Less milk/meat rejection, higher farmer income, premium market access",
    icon: "💰"
  },
  {
    category: "Regulatory Compliance",
    description: "Digital AMU data for FSSAI/DAHD, supports NAP-AMR compliance",
    icon: "📋"
  },
  {
    category: "Export Readiness",
    description: "Aligns with Codex standards, boosts India's global competitiveness",
    icon: "🌍"
  },
  {
    category: "Environmental Protection",
    description: "Reduced drug misuse, lower contamination of soil & water",
    icon: "🌿"
  },
  {
    category: "One Health Approach",
    description: "Protects human, animal & ecosystem health together",
    icon: "🔗"
  }
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Impact & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SHUDDH creates value across the entire livestock ecosystem, from farm to fork
          </p>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Target Audience
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <audience.icon className={`w-8 h-8 ${audience.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {audience.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {audience.benefit}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{impact.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">
                      {impact.category}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Driving the Future of Sustainable Livestock Management
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-green-200 mb-2">Empowering Farmers</h4>
                <p className="text-sm text-white/90">Providing tools for better decision-making and regulatory compliance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-200 mb-2">Protecting Consumers</h4>
                <p className="text-sm text-white/90">Ensuring food safety by preventing harmful residues from reaching the market.</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-200 mb-2">Fostering Sustainability</h4>
                <p className="text-sm text-white/90">Promoting responsible medicine use, contributing to environmental health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;