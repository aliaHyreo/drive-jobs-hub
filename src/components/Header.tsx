import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-primary">TruckHire</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#jobs" className="text-foreground hover:text-accent transition-colors">
              Browse Jobs
            </a>
            <a href="#for-drivers" className="text-foreground hover:text-accent transition-colors">
              For Drivers
            </a>
            <a href="#for-carriers" className="text-foreground hover:text-accent transition-colors">
              For Carriers
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-accent transition-colors">
              How It Works
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Post a Job
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
