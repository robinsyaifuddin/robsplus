
import { useLocation } from 'react-router-dom';
import { Phone, Lock } from 'lucide-react';
import NavItem from './NavItem';
import CTAButton from '../CTAButton';

interface DesktopNavProps {
  navLinks: Array<{ 
    text: string; 
    href: string; 
    isDropdown?: boolean; 
    dropdownItems?: Array<{ text: string; href: string }>;
    isAdmin?: boolean;
  }>;
  activeSection: string | null;
  handleNavigation: (path: string) => void;
  isHashActive: (href: string) => boolean;
}

const DesktopNav = ({ navLinks, activeSection, handleNavigation, isHashActive }: DesktopNavProps) => {
  const location = useLocation();
  
  return (
    <div className="hidden md:flex items-center space-x-8">
      <ul className="flex space-x-6">
        {navLinks.filter(link => !link.isAdmin).map((link) => (
          <li key={link.text}>
            <NavItem 
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
      
      <a 
        href="/admin/login"
        className="text-sm flex items-center gap-1 text-cyber-lightBlue hover:underline"
      >
        <Lock size={14} />
        <span>Admin</span>
      </a>
    </div>
  );
};

export default DesktopNav;
