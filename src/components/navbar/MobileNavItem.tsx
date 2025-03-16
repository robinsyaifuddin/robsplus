
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface MobileNavItemProps {
  href: string;
  text: string;
  isActive: boolean;
  onClick?: () => void;
  isDropdown?: boolean;
  dropdownItems?: Array<{ text: string; href: string }>;
}

const MobileNavItem = ({ href, text, isActive, onClick, isDropdown, dropdownItems }: MobileNavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (isDropdown) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
            isActive ? 'text-cyber-lightBlue' : 'text-white'
          }`}
        >
          <span>{text}</span>
          {isExpanded ? (
            <ChevronDown size={16} className="ml-1" />
          ) : (
            <ChevronRight size={16} className="ml-1" />
          )}
          {isActive && (
            <span className="absolute -left-2 top-0 bottom-0 w-0.5 bg-cyber-lightBlue" />
          )}
        </button>
        
        {isExpanded && dropdownItems && (
          <div className="pl-4 space-y-1 border-l border-cyber-lightBlue/20">
            {dropdownItems.map((item) => (
              <Link
                key={item.text}
                to={item.href}
                className="block text-sm text-white hover:text-cyber-lightBlue py-1"
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  if (href.startsWith('#')) {
    return (
      <button
        onClick={onClick}
        className={`block text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
          isActive ? 'text-cyber-lightBlue' : 'text-white'
        }`}
      >
        {text}
        {isActive && (
          <span className="absolute -left-2 top-0 bottom-0 w-0.5 bg-cyber-lightBlue" />
        )}
      </button>
    );
  }
  
  return (
    <Link 
      to={href} 
      className={`block text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
        isActive ? 'text-cyber-lightBlue' : 'text-white'
      }`}
    >
      {text}
      {isActive && (
        <span className="absolute -left-2 top-0 bottom-0 w-0.5 bg-cyber-lightBlue" />
      )}
    </Link>
  );
};

export default MobileNavItem;
