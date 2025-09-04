import { Card, CardContent } from "@/components/ui/card";
import { Shield, Activity, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "MRL Monitoring",
    description: "Real-time tracking of Maximum Residue Limits in livestock products. Automated alerts when withdrawal periods end and products become safe for consumption.",
    color: "text-success"
  },
  {
    icon: Activity,
    title: "Antimicrobial Usage Tracking",
    description: "Comprehensive logging of all medicine administered to livestock. Digital records prevent overuse and support responsible antimicrobial stewardship.",
    color: "text-primary"
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description: "Generate detailed compliance reports for regulatory authorities. Analytics help optimize farm health management and reduce medicine dependency.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description: "Collaborative platform for farmers, veterinarians, and regulators. Role-based access ensures proper oversight and compliance verification.",
    color: "text-primary-dark"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Farm Safety Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to ensure food safety compliance and responsible antimicrobial use in modern farming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  feature.color === 'text-success' ? 'bg-success-light' :
                  feature.color === 'text-primary' ? 'bg-primary-light' :
                  feature.color === 'text-accent' ? 'bg-accent/10' :
                  'bg-primary-light'
                }`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;