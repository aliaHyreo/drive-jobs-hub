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
            Find Real CDL Jobs<br></br><span className="text-accent">No Spam. No Lies.</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
          3,000+ carriers. Verified pay and home time. You control who contacts you. Apply once, track everything, and get hired faster — with zero recruiter spam.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.location.href = '/jobs'}
              className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-10 text-lg font-semibold min-w-[200px]"
            >
              Browse CDL Jobs
            </Button>
          <Button 
            onClick={() => window.location.href = '#how-it-works'}
            variant="outline"
            className="border-2 border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary h-14 px-10 text-lg font-semibold min-w-[200px]"
          >
            How It Works
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
