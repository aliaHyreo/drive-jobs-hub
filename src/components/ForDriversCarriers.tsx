import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Building2, ArrowRight } from "lucide-react";

const ForDriversCarriers = () => {
  return (
    <section id="for-drivers" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Drivers */}
          <Card className="border-2 hover:border-accent transition-colors duration-300">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="h-10 w-10 text-accent" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Have Your CDL?
                </h3>
                <p className="text-muted-foreground">
                  Start your career with top carriers today. Browse thousands of jobs and find the perfect match for your lifestyle.
                </p>
              </div>

              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Quick and easy application process
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Connect with top carriers nationwide
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Get matched with jobs that fit your needs
                </li>
              </ul>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group">
                Find Driver Jobs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* For Carriers */}
          <Card className="border-2 hover:border-primary transition-colors duration-300" id="for-carriers">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Need Qualified Drivers?
                </h3>
                <p className="text-muted-foreground">
                  Post your jobs and connect with thousands of qualified CDL drivers actively seeking opportunities.
                </p>
              </div>

              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Reach thousands of qualified drivers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Easy job posting and management tools
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Streamlined hiring process
                </li>
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                Post Free Jobs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForDriversCarriers;
