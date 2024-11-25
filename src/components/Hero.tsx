import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // Get the base URL from Vite's configuration
    const baseUrl = import.meta.env.BASE_URL || '/';
    // Remove any trailing slashes from baseUrl and leading slashes from path
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    const cleanPath = path.replace(/^\//, '');
    // Combine them with a single slash
    const fullPath = `${cleanBaseUrl}/${cleanPath}`;
    window.location.href = `${window.location.origin}/${fullPath}`;
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10" />
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Partner in
            <span className="text-primary"> Chemical & Lab Equipment</span> Supply
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Leading vendor for top national and multinational manufacturers and suppliers
            of chemicals and laboratory equipment.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => handleNavigation('chembio-frontend/#/products')}
            >
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => handleNavigation('chembio-frontend/#/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}