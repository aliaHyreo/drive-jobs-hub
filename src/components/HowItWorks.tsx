import { Card, CardContent } from "@/components/ui/card";
import stepProfile from "@/assets/step-profile.jpg";
import stepBrowse from "@/assets/step-browse.jpg";
import stepApply from "@/assets/step-apply.jpg";
import stepHired from "@/assets/step-hired.jpg";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up in minutes and build your driver profile with your CDL details, experience, and preferences.",
      image: stepProfile,
    },
    {
      number: "02",
      title: "Browse Opportunities",
      description: "Search thousands of verified jobs from top carriers. Filter by route type, pay, home time, and more.",
      image: stepBrowse,
    },
    {
      number: "03",
      title: "Apply with One Click",
      description: "Submit applications instantly to multiple carriers. Track all your applications in one dashboard.",
      image: stepApply,
    },
    {
      number: "04",
      title: "Get Hired Faster",
      description: "Connect directly with hiring managers. Our streamlined process gets you behind the wheel quicker.",
      image: stepHired,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four steps to land your next trucking job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
