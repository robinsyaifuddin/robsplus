
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine which section is currently in view
      const sections = ['pricing', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport (with some buffer for navbar)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          } else {
            setActiveSection(null);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Helper function to handle hash links and normal links
  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      // If we're already on the homepage, just scroll to the section
      if (location.pathname === '/') {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on another page, navigate to homepage + hash
        window.location.href = '/' + path;
      }
    }
    setIsMenuOpen(false);
  };
  
  // Function to check if a hash link is active
  const isHashActive = (href: string) => {
    if (!href.startsWith('#')) return false;
    
    const sectionId = href.substring(1);
    return activeSection === sectionId || 
      (location.pathname === '/' && location.hash === href);
  };
  
  return {
    isScrolled,
    isMenuOpen,
    setIsMenuOpen,
    activeSection,
    handleNavigation,
    isHashActive
  };
};
