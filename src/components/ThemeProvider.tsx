import { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

const TRANSITION_DURATION = 0.15;

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "chembio-theme",
  ...props
}: ThemeProviderProps) {
  // Always initialize with dark theme
  const [theme, setTheme] = useState<Theme>("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Force dark mode on mount and theme change
  useEffect(() => {
    const root = window.document.documentElement;
    
    const forceDarkMode = () => {
      root.classList.remove("light", "system");
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      localStorage.setItem(storageKey, "dark");
    };

    // Apply dark mode
    forceDarkMode();

    // Set up an interval to check and reapply dark mode
    const interval = setInterval(forceDarkMode, 100);

    // Clean up
    return () => clearInterval(interval);
  }, [storageKey]);

  const value = {
    theme: "dark",
    setTheme: () => {
      // Always keep dark theme
      const root = window.document.documentElement;
      root.classList.remove("light", "system");
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      localStorage.setItem(storageKey, "dark");
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TRANSITION_DURATION }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
