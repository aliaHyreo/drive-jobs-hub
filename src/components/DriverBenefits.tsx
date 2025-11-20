import { Shield, Lock, Star, Award, MousePointer, Bell } from "lucide-react";

const DriverBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Verified Job Listings",
      description: "No vague pay or home time"
    },
    {
      icon: Lock,
      title: "Driver Privacy Guaranteed",
      description: "Only applied carriers can reach you"
    },
    {
      icon: Star,
      title: "Real Driver Reviews & Safety Scores",
      description: "See what drivers really think before you apply"
    },
    {
      icon: Award,
      title: "Respect for Experience",
      description: "Better matching for veterans"
    },
    {
      icon: MousePointer,
      title: "One Profile, Multiple Applications",
      description: "1-Click Apply to save time"
    },
    {
      icon: Bell,
      title: "Real-time Application Tracking",
      description: "Track and communicate with carriers instantly"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-primary">100,000+ Drivers</span> Trust Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We put drivers first with transparency, privacy, and tools that actually work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DriverBenefits;
