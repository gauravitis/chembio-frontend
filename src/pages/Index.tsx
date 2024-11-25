import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;