
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import CTAButton from './CTAButton';

const Navbar = () => {
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
  
  const navLinks = [
    { text: 'Beranda', href: '/' },
    { text: 'Layanan', href: '/services' },
    { text: 'Harga', href: '/#pricing' },
    { text: 'Testimoni', href: '/#testimonials' },
    { text: 'Kontak', href: '/#contact' }
  ];
  
  // Function to check if a hash link is active
  const isHashActive = (href: string) => {
    if (!href.startsWith('#')) return false;
    
    const sectionId = href.substring(1);
    return activeSection === sectionId || 
      (location.pathname === '/' && location.hash === href);
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glassmorphism shadow-cyber' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <img 
              src="/lovable-uploads/27477e8d-895e-477f-88b3-9a6354c8a392.png" 
              alt="ROB's Plus Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-12'
              }`}
            />
            <span className="text-xl font-bold cyber-text-glow-purple tracking-wider">
              ROB's<span className="text-cyber-lightBlue">Plus</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.text}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className={`text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
                        isHashActive(link.href) ? 'text-cyber-lightBlue' : 'text-white'
                      }`}
                    >
                      {link.text}
                      {isHashActive(link.href) && (
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyber-lightBlue"
                          layoutId="navIndicator"
                        />
                      )}
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
                        location.pathname === link.href ? 'text-cyber-lightBlue' : 'text-white'
                      }`}
                    >
                      {link.text}
                      {location.pathname === link.href && (
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyber-lightBlue"
                          layoutId="navIndicator" 
                        />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <CTAButton href="/order" size="sm">
              Order Jasa
            </CTAButton>
            
            <a 
              href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20layanan."
              className="text-sm flex items-center gap-1 text-cyber-lightBlue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={14} />
              <span>Konsultasi</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden glassmorphism absolute left-0 right-0 px-6 py-4 shadow-cyber"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.text}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className={`block text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
                        isHashActive(link.href) ? 'text-cyber-lightBlue' : 'text-white'
                      }`}
                    >
                      {link.text}
                      {isHashActive(link.href) && (
                        <span className="absolute -left-2 top-0 bottom-0 w-0.5 bg-cyber-lightBlue" />
                      )}
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`block text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
                        location.pathname === link.href ? 'text-cyber-lightBlue' : 'text-white'
                      }`}
                    >
                      {link.text}
                      {location.pathname === link.href && (
                        <span className="absolute -left-2 top-0 bottom-0 w-0.5 bg-cyber-lightBlue" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <CTAButton href="/order" size="sm" className="w-full justify-center">
                  Order Jasa
                </CTAButton>
              </li>
              <li>
                <a 
                  href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20layanan."
                  className="flex items-center gap-1 text-sm text-cyber-lightBlue hover:underline w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={14} />
                  <span>Konsultasi</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
