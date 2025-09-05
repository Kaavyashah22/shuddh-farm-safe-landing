import { Code, Database, Smartphone, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techStack = [
  {
    icon: Smartphone,
    title: "Frontend",
    items: ["NextJS Dashboard", "Tailwind CSS", "React Native Mobile"],
    color: "text-blue-600"
  },
  {
    icon: Database,
    title: "Backend & APIs",
    items: ["Firebase", "Cloud Functions", "Drug MRL Database", "QR/Barcode Scanning"],
    color: "text-green-600"
  },
  {
    icon: Cloud,
    title: "Notifications",
    items: ["SMS/IVR Alerts", "FCM Push Notifications", "Real-time Updates"],
    color: "text-purple-600"
  },
  {
    icon: Code,
    title: "AI & Features",
    items: ["MRL Calculation Model", "Voice-enabled UI", "Offline-first Design"],
    color: "text-orange-600"
  }
];

const methodology = [
  "Farmer logs treatment (drug, dose, animal)",
  "System fetches MRL & withdrawal data",
  "AI model calculates safe consumption date",
  "Alert sent to farmer & cooperative",
  "Dashboard aggregates usage for regulators"
];

const TechnicalApproach = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Robust technology stack designed for scalability and farmer-friendly adoption
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {tech.title}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Methodology Flow */}
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
          <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">
            How SHUDDH Works
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {methodology.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step}
                </p>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-border mx-auto mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalApproach;