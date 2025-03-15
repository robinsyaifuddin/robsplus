
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavbar } from './navbar/useNavbar';
import NavLogo from './navbar/NavLogo';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { navLinks } from './navbar/NavData';

const Navbar = () => {
  const { 
    isScrolled,
    isMenuOpen,
    setIsMenuOpen,
    handleNavigation,
    isHashActive
  } = useNavbar();
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glassmorphism shadow-cyber' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLogo isScrolled={isScrolled} />
          
          {/* Desktop Navigation */}
          <DesktopNav 
            navLinks={navLinks}
            activeSection={null} // Using isHashActive directly in component
            handleNavigation={handleNavigation}
            isHashActive={isHashActive}
          />
          
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
          <MobileNav 
            isMenuOpen={isMenuOpen}
            navLinks={navLinks}
            handleNavigation={handleNavigation}
            isHashActive={isHashActive}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
