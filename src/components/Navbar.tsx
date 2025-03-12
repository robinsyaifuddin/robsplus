
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import CTAButton from './CTAButton';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Layanan', path: '/services' },
  { name: 'Harga', path: '/pricing' },
  { name: 'Testimoni', path: '/testimonials' },
  { name: 'Order Jasa', path: '/order' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
    {
      "bg-transparent": !isScrolled && !isMobileMenuOpen,
      "glassmorphism shadow-md": isScrolled || isMobileMenuOpen
    }
  );
  
  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-cyber-neonPurple to-cyber-lightBlue bg-clip-text text-transparent">
              ROB's<span className="text-white">Plus</span>
            </span>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  to={link.path}
                  className={cn(
                    "text-sm font-medium relative",
                    {
                      "text-white": location.pathname === link.path,
                      "text-gray-300 hover:text-white": location.pathname !== link.path
                    }
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-cyber-lightBlue"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
          <CTAButton 
            href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20layanan%20gratis."
            size="sm"
            variant="secondary"
          >
            Konsultasi Gratis
          </CTAButton>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-white p-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="container mx-auto md:hidden py-4"
          >
            <ul className="flex flex-col gap-4 pb-4">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className={cn(
                      "block py-2 px-4 rounded-md transition-colors",
                      {
                        "bg-cyber-deepBlue text-cyber-lightBlue": location.pathname === link.path,
                        "text-gray-300 hover:bg-cyber-deepBlue/50 hover:text-white": location.pathname !== link.path
                      }
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-2"
              >
                <CTAButton 
                  href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20layanan%20gratis."
                  size="sm"
                  variant="secondary"
                  className="w-full justify-center"
                >
                  Konsultasi Gratis
                </CTAButton>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
