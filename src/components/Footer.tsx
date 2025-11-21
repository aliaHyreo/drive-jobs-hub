import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">Fleeto</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Connecting truck drivers with their dream careers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Drivers</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Find Jobs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">CDL Training</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Career Resources</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Driver Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Carriers</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Recruitment Tools</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Fleeto. All rights reserved.</p>
          <p className="mt-2">Powered by <span className="text-accent font-semibold">hyreo</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
