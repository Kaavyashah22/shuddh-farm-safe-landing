import { Card, CardContent } from "@/components/ui/card";
import { Shield, Activity, BarChart3, Bell } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Digital Medicine Logging",
    description: "Easy farmer/shop/vet entry system with QR/barcode scanning for medicines. Offline-first with multilingual and voice-enabled UI.",
    color: "text-blue-600"
  },
  {
    icon: Activity,
    title: "Automatic Withdrawal Calculation", 
    description: "System fetches MRL & withdrawal data using Codex + FSSAI standards. AI model calculates safe consumption dates automatically.",
    color: "text-green-600"
  },
  {
    icon: BarChart3,
    title: "AMU Records & Compliance",
    description: "Digital AMU record keeping reduces antibiotic misuse. Dashboard aggregates usage data for FSSAI/DAHD regulators.",
    color: "text-purple-600"
  },
  {
    icon: Bell,
    title: "Safe/Unsafe Alerts",
    description: "Real-time SMS/IVR alerts for milk, meat, eggs safety. FCM-based notifications sent to farmers and cooperatives.",
    color: "text-orange-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Innovative Solution Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            First comprehensive platform in India for MRL monitoring and AMU management with One Health approach
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
                  feature.color === 'text-blue-600' ? 'bg-blue-50 dark:bg-blue-900/20' :
                  feature.color === 'text-green-600' ? 'bg-green-50 dark:bg-green-900/20' :
                  feature.color === 'text-purple-600' ? 'bg-purple-50 dark:bg-purple-900/20' :
                  'bg-orange-50 dark:bg-orange-900/20'
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