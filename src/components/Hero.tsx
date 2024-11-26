import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const navigate = useNavigate();
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleNewProductsClick = () => {
    navigate('/products?filter=new');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      </div>
      
      {/* Gradient Overlay */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ease-in-out ${
          isButtonHovered 
          ? 'from-primary/5 via-background/50 to-secondary/5' 
          : 'from-primary/20 via-background/80 to-secondary/20'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <motion.div 
            className="max-w-3xl backdrop-blur-sm p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={handleNewProductsClick}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6 bg-background/80 backdrop-blur hover:bg-primary/10 transition-all cursor-pointer group shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary font-semibold">New Products Available</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.h1 
              className={`text-4xl font-bold tracking-tight sm:text-6xl mb-6 transition-opacity duration-500 ${
                isButtonHovered ? 'opacity-50' : 'opacity-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Trusted Partner in{" "}
              <span className="text-primary">Chemical & Lab Equipment</span> Supply
            </motion.h1>

            <motion.p 
              className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto transition-opacity duration-500 ${
                isButtonHovered ? 'opacity-50' : 'opacity-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Leading vendor for top national and multinational manufacturers and suppliers
              of chemicals and laboratory equipment. Discover our comprehensive range of products.
            </motion.p>

            <motion.div 
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-500 ${
                isButtonHovered ? 'opacity-50' : 'opacity-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 w-full sm:w-auto shadow-md"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="transition-all hover:scale-105 w-full sm:w-auto shadow-sm hover:bg-background/80"
                >
                  Contact Us
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}