import { ThemeToggle } from "./ThemeToggle";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

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

export function Navbar() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity"
          >
            Chembio Lifescience
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="relative py-2 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="relative py-2 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              About
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="flex items-center h-full">
                  <NavigationMenuTrigger className="h-9 px-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
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
            <Link 
              to="/team" 
              className="relative py-2 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="relative py-2 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}