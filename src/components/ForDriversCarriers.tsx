import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Building2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForDriversCarriers = () => {
  const navigate = useNavigate();
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
                  Access 100,000+ jobs annually with 3,000+ carriers. One profile, multiple applications.
                </p>
              </div>

              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Local, Regional, and OTR positions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Filter by Dry Van, Flatbed, Reefer, Tanker
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Track applications in one place
                </li>
              </ul>

              <Button 
                onClick={() => navigate("/jobs")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group"
              >
                Start Job Search
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
                  For Carriers & Fleets
                </h3>
                <p className="text-muted-foreground">
                  All-in-one platform with job board, ATS, and automated compliance checks.
                </p>
              </div>

              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Built-in applicant tracking system
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Automated driver abstracts & CVOR checks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  TMS integration (Rose Rocket, Descartes)
                </li>
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                Request Demo
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
