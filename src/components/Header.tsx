import { Truck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const shouldHideButton = location.pathname.startsWith('/apply') || location.pathname === '/jobs';
  
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Truck className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-primary">Fleeto</span>
          </Link>
          
          {!shouldHideButton && (
            <div className="flex items-center gap-3">
              <a href="#for-drivers" className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center justify-center">
                For Drivers
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
