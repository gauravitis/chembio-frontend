import { Button } from "./ui/button";

export function Hero() {
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
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Products
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}