import { Card, CardContent } from "@/components/ui/card";
import { Bot, TrendingUp, FileCheck, Users } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: "Smart Job Matching",
      description: "Our AI algorithm matches drivers with the perfect opportunities based on experience, preferences, and qualifications."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Help carriers forecast hiring needs and optimize recruitment strategies with data-driven insights."
    },
    {
      icon: FileCheck,
      title: "Automated Compliance",
      description: "AI-powered verification of driver records, abstracts, and certifications for faster, error-free hiring."
    },
    {
      icon: Users,
      title: "Retention Insights",
      description: "Machine learning identifies factors that improve driver satisfaction and reduce turnover rates."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Bot className="h-4 w-4" />
            AI-POWERED PLATFORM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Using AI to Help Trucking Companies <span className="text-accent">Be More Efficient</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage cutting-edge artificial intelligence to streamline hiring, improve driver matching, 
            and make data-driven decisions that keep your fleet moving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Join thousands of carriers and drivers already benefiting from our AI-powered platform. 
            Experience the future of trucking recruitment today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
