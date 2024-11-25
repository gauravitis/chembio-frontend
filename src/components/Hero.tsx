import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Trusted Partner in
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            > Chemical & Lab Equipment</motion.span> Supply
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Leading vendor for top national and multinational manufacturers and suppliers
            of chemicals and laboratory equipment.
          </motion.p>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105"
              >
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="transition-transform hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}