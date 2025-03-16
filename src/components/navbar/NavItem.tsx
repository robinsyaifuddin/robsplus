
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface NavItemProps {
  href: string;
  text: string;
  isActive: boolean;
  onClick?: () => void;
  isDropdown?: boolean;
  dropdownItems?: Array<{ text: string; href: string }>;
  className?: string;
}

const NavItem = ({ href, text, isActive, onClick, isDropdown, dropdownItems, className = "" }: NavItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  if (isDropdown) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          className={`flex items-center text-xs font-medium transition-colors hover:text-cyber-lightBlue cursor-pointer ${
            isActive ? 'text-cyber-lightBlue' : 'text-white'
          } ${className}`}
        >
          <span>{text}</span>
          <ChevronDown size={14} className="ml-1" />
          {isActive && (
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyber-lightBlue"
              layoutId="navIndicator"
            />
          )}
        </div>
        
        {isHovering && (
          <div className="absolute top-full left-0 mt-1 w-44 rounded-md shadow-lg overflow-hidden z-50">
            <div className="bg-cyber-darkBlue border border-cyber-lightBlue/20 rounded-md py-1">
              {dropdownItems?.map((item) => (
                <Link
                  key={item.text}
                  to={item.href}
                  className="block px-4 py-2 text-xs text-white hover:bg-cyber-blue/10 hover:text-cyber-lightBlue"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  if (href.startsWith('#')) {
    return (
      <button
        onClick={onClick}
        className={`text-xs font-medium transition-colors hover:text-cyber-lightBlue relative ${
          isActive ? 'text-cyber-lightBlue' : 'text-white'
        } ${className}`}
      >
        {text}
        {isActive && (
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyber-lightBlue"
            layoutId="navIndicator"
          />
        )}
      </button>
    );
  }
  
  return (
    <Link 
      to={href} 
      className={`text-xs font-medium transition-colors hover:text-cyber-lightBlue relative ${
        isActive ? 'text-cyber-lightBlue' : 'text-white'
      } ${className}`}
    >
      {text}
      {isActive && (
        <motion.span 
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyber-lightBlue"
          layoutId="navIndicator" 
        />
      )}
    </Link>
  );
};

export default NavItem;
