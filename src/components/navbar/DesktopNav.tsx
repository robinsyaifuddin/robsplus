
import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import NavItem from './NavItem';
import CTAButton from '../CTAButton';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
      <ul className="flex space-x-2 lg:space-x-4">
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
      
      <CTAButton href="/order" size="sm" className="py-1 px-3 text-xs">
        Order Jasa
      </CTAButton>
      
      <a 
        href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20layanan."
        className="text-xs flex items-center gap-1 text-cyber-lightBlue hover:underline whitespace-nowrap"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone size={12} />
        <span>Konsultasi</span>
      </a>
      
      <NavItem
        href="/admin/login"
        text="Admin"
        isActive={location.pathname.includes('/admin')}
        onClick={() => {}}
      />
    </div>
  );
};

export default DesktopNav;
