
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { text: 'Beranda', href: '/' },
    { text: 'Layanan', href: '/services' },
    { text: 'Harga', href: '/#pricing' },
    { text: 'Testimoni', href: '/#testimonials' }
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glassmorphism shadow-cyber' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold cyber-text-glow-purple tracking-wider"
          >
            ROB's<span className="text-cyber-lightBlue">Plus</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link 
                    to={link.href} 
                    className={`text-sm font-medium transition-colors hover:text-cyber-lightBlue ${
                      location.pathname === link.href ? 'text-cyber-lightBlue' : 'text-white'
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            
            <CTAButton href="/order" size="sm">
              Order Jasa
            </CTAButton>
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
                  <Link 
                    to={link.href} 
                    className={`block text-sm font-medium transition-colors hover:text-cyber-lightBlue ${
                      location.pathname === link.href ? 'text-cyber-lightBlue' : 'text-white'
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <li>
                <CTAButton href="/order" size="sm" className="w-full justify-center">
                  Order Jasa
                </CTAButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
