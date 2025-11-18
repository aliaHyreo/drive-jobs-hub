import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Drive Your Career <span className="text-accent">Forward</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Connect with top carriers. Find CDL jobs that match your lifestyle.
          </p>

          {/* Search Section */}
          <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl space-y-4">
            <h2 className="text-foreground text-lg font-semibold text-left">Search Jobs</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Job title or keywords" 
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="City, State or ZIP" 
                  className="pl-10 h-12 bg-background"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                CDL A
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                CDL B
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Local
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                OTR
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Regional
              </Badge>
            </div>

            <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 text-lg font-semibold">
              Show Jobs
            </Button>
          </div>

          {/* Popular Searches */}
          <div className="text-left">
            <p className="text-sm text-primary-foreground/70 mb-2">Popular Searches:</p>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="text-sm text-primary-foreground underline hover:text-accent transition-colors">
                Local Driver
              </a>
              <span className="text-primary-foreground/50">•</span>
              <a href="#" className="text-sm text-primary-foreground underline hover:text-accent transition-colors">
                CDL A Jobs
              </a>
              <span className="text-primary-foreground/50">•</span>
              <a href="#" className="text-sm text-primary-foreground underline hover:text-accent transition-colors">
                Entry Level
              </a>
              <span className="text-primary-foreground/50">•</span>
              <a href="#" className="text-sm text-primary-foreground underline hover:text-accent transition-colors">
                2+ Years Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
