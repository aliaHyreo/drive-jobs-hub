import { Button } from "@/components/ui/button";
import { Building2, Shield, Users, Zap } from "lucide-react";

const CarrierRecruitment = () => {
  const features = [
    {
      icon: Users,
      title: "Qualified Driver Pool",
      description: "Access to pre-screened, CDL-certified drivers ready to work"
    },
    {
      icon: Shield,
      title: "Compliance Built-In",
      description: "Automated CVOR, driver abstracts, and safety checks"
    },
    {
      icon: Zap,
      title: "Fast Hiring Process",
      description: "Reduce time-to-hire with streamlined recruiting workflows"
    },
    {
      icon: Building2,
      title: "Dedicated Support",
      description: "Expert recruitment team supporting your hiring goals"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <div className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-4">
            FOR CARRIERS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Your Truck Driver Recruitment Experts
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            For over three decades, we've been helping carriers keep freight moving with reliable solutions 
            for finding and retaining safe professional truck drivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Request Drivers
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
            >
              Schedule Demo
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarrierRecruitment;
