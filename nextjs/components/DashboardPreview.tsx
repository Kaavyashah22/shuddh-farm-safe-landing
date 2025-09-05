import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, FileText, CheckCircle } from "lucide-react";

const kpis = [
  {
    title: "Reduced Residues",
    value: "90%",
    change: "Expected Impact",
    icon: TrendingUp,
    description: "Reduction in unsafe residues through automated tracking"
  },
  {
    title: "Increased Efficiency", 
    value: "30%",
    change: "Time Saved",
    icon: Users,
    description: "Farmers save time with digital record-keeping"
  },
  {
    title: "Enhanced Trust",
    value: "100%",
    change: "Consumer Confidence",
    icon: FileText,
    description: "Building trust in locally sourced livestock products"
  }
];

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expected Impact & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable outcomes from implementing SHUDDH across farming communities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {kpis.map((kpi, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-3xl font-bold text-card-foreground">
                    {kpi.value}
                  </div>
                  <div className="text-sm font-medium text-success">
                    {kpi.change}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {kpi.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card rounded-2xl shadow-strong border p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chart mockup */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  Compliance Trends
                </h3>
                <div className="h-48 bg-gradient-hero rounded-xl border flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Interactive compliance chart</p>
                  </div>
                </div>
              </div>
              
              {/* Recent activity */}
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {[
                    { action: "Safe consumption alert sent", farm: "Green Valley Dairy", time: "2 mins ago" },
                    { action: "MRL compliance verified", farm: "Hill Top Poultry", time: "15 mins ago" },
                    { action: "Medicine withdrawal calculated", farm: "Sunny Acres Cattle", time: "1 hour ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-card-foreground">
                          {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.farm} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;