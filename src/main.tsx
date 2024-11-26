import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force dark mode
const forceDarkMode = () => {
  // Remove any existing theme classes
  document.documentElement.classList.remove('light', 'system');
  // Add dark class
  document.documentElement.classList.add('dark');
  // Set color scheme
  document.documentElement.style.colorScheme = 'dark';
  // Store preference
  localStorage.setItem('chembio-theme', 'dark');
};

// Apply dark mode immediately
forceDarkMode();

// Re-apply dark mode after any dynamic content changes
const observer = new MutationObserver(forceDarkMode);
observer.observe(document.documentElement, { 
  attributes: true, 
  childList: true, 
  subtree: true 
});

createRoot(document.getElementById("root")!).render(<App />);
