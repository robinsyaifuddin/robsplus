
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import MobileNavItem from './MobileNavItem';
import CTAButton from '../CTAButton';

interface MobileNavProps {
  isMenuOpen: boolean;
  navLinks: Array<{ 
    text: string; 
    href: string; 
    isDropdown?: boolean; 
    dropdownItems?: Array<{ text: string; href: string }>;
    isAdmin?: boolean;
  }>;
  handleNavigation: (path: string) => void;
  isHashActive: (href: string) => boolean;
}

const MobileNav = ({ isMenuOpen, navLinks, handleNavigation, isHashActive }: MobileNavProps) => {
  const location = useLocation();
  
  return (
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
            <MobileNavItem 
              href={link.href} 
              text={link.text}
              isActive={link.href.startsWith('#') 
                ? isHashActive(link.href) 
                : location.pathname === link.href}
              onClick={() => link.href.startsWith('#') && handleNavigation(link.href)}
              isDropdown={link.isDropdown}
              dropdownItems={link.dropdownItems}
            />
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
  );
};

export default MobileNav;
