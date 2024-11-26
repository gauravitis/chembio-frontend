import { ThemeToggle } from "./ThemeToggle";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { MobileNav } from "./MobileNav";
import { UserCircle2 } from "lucide-react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, onClick, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
            className
          )}
          onClick={onClick}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
    // Close the navigation menu after clicking
    const event = new Event('click');
    document.dispatchEvent(event);
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <motion.span 
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chembio Lifescience
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  className="absolute -bottom-[27px] left-0 right-0 h-[2px] bg-primary"
                  layoutId="navbar-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex items-center h-full">
                <NavigationMenuTrigger 
                  className={cn(
                    "h-9 px-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    location.pathname === "/products" && "text-primary"
                  )}
                  onClick={() => navigate('/products')}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3">
                    <ListItem
                      title="Chemistry & Biochemicals"
                      onClick={() => handleCategoryClick('chemistry-biochemicals')}
                    >
                      High-quality chemicals and biochemical reagents
                    </ListItem>
                    <ListItem
                      title="Laboratory Equipment"
                      onClick={() => handleCategoryClick('laboratory-equipment')}
                    >
                      Professional lab equipment and instruments
                    </ListItem>
                    <ListItem
                      title="Molecular Biology"
                      onClick={() => handleCategoryClick('molecular-biology')}
                    >
                      Tools and reagents for molecular research
                    </ListItem>
                    <ListItem
                      title="Cell Culture"
                      onClick={() => handleCategoryClick('cell-culture')}
                    >
                      Cell culture media and supplies
                    </ListItem>
                    <ListItem
                      title="Chromatography"
                      onClick={() => handleCategoryClick('chromatography')}
                    >
                      Chromatography equipment and supplies
                    </ListItem>
                    <ListItem
                      title="Lab Plasticware"
                      onClick={() => handleCategoryClick('lab-plasticware')}
                    >
                      High-quality plastic labware
                    </ListItem>
                    <ListItem
                      title="Safety Equipment"
                      onClick={() => handleCategoryClick('safety-equipment')}
                    >
                      Laboratory safety gear and equipment
                    </ListItem>
                    <ListItem
                      title="Glass Labware"
                      onClick={() => handleCategoryClick('glass-labware')}
                    >
                      Premium glass laboratory equipment
                    </ListItem>
                    <ListItem
                      title="Lab Consumables"
                      onClick={() => handleCategoryClick('lab-consumables')}
                    >
                      Essential lab supplies and consumables
                    </ListItem>
                    <ListItem
                      title="Research Instruments"
                      onClick={() => handleCategoryClick('research-instruments')}
                    >
                      Advanced research and analytical instruments
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={() => navigate('/admin')}
                >
                  <UserCircle2 className="h-5 w-5 transition-colors hover:text-primary" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Admin Login</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
}