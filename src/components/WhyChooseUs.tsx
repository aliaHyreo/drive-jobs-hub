import { Shield, Users, Zap, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Connecting drivers and carriers for over 10 years with verified job listings"
    },
    {
      icon: Users,
      title: "Thousands of Jobs",
      description: "Access to 100,000+ new job opportunities posted annually nationwide"
    },
    {
      icon: Zap,
      title: "Quick Applications",
      description: "Apply to multiple jobs in minutes with our streamlined application process"
    },
    {
      icon: Award,
      title: "Top Carriers",
      description: "Partner with 3,000+ leading carriers offering competitive pay and benefits"
    }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-accent">TruckHire</span>?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Professional truck drivers have trusted us to help them find great jobs that match their lifestyle and career goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-primary-foreground/80 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
