import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Beaker, 
  TruckIcon, 
  BadgeCheck, 
  HeadphonesIcon, 
  ShieldCheck, 
  Microscope 
} from "lucide-react";

const features = [
  {
    icon: <Beaker className="h-8 w-8" />,
    title: "Premium Quality",
    description: "All products meet the highest industry standards"
  },
  {
    icon: <TruckIcon className="h-8 w-8" />,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to your facility"
  },
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: "Certified Products",
    description: "Products certified by leading organizations"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
  <motion.div
    className="p-6 rounded-2xl bg-background border shadow-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
      {feature.icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
    <p className="text-muted-foreground">{feature.description}</p>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive solutions for all your laboratory and research needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <Footer />
    </div>
  );
};

export default Index;