import { Shield, Users, Zap, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified & Compliant",
      description: "Integrated driver abstracts and carrier safety checks (CVOR, ICBC, SAAQ) ensure secure, compliant hiring"
    },
    {
      icon: Users,
      title: "100,000+ Jobs Annually",
      description: "Access opportunities with 3,000+ carriers across North America - from local routes to OTR"
    },
    {
      icon: Zap,
      title: "Streamlined Hiring",
      description: "Combined job board and ATS platform - apply to multiple carriers in minutes, track applications in one place"
    },
    {
      icon: Award,
      title: "Complete Solution",
      description: "All-in-one platform with job search, recruiting software, and safety verification - no juggling multiple systems"
    }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Complete <span className="text-accent">Hiring Platform</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            More than a job board - we combine job search, recruiting software, and integrated compliance checks for mid to large fleets
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
