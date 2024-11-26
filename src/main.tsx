import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Simple dark mode initialization
document.documentElement.classList.add('dark');
localStorage.setItem('chembio-theme', 'dark');

createRoot(document.getElementById("root")!).render(<App />);
