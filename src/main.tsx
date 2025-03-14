
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a style to hide any potential badge element
const style = document.createElement('style');
style.textContent = `
  #lovable-badge, [id*="lovable-badge"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
