import { Button } from "@/components/ui/button";
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
            Easily search and apply to CDL jobs with 3,000+ carriers across North America
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.location.href = '/jobs'}
              className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-10 text-lg font-semibold min-w-[200px]"
            >
              Browse All Jobs
            </Button>
            <Button 
              onClick={() => window.location.href = '/jobs'}
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-14 px-10 text-lg font-semibold min-w-[200px]"
            >
              Find CDL Jobs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
