
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavItemProps {
  href: string;
  text: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem = ({ href, text, isActive, onClick }: NavItemProps) => {
  if (href.startsWith('#')) {
    return (
      <button
        onClick={onClick}
        className={`text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
          isActive ? 'text-cyber-lightBlue' : 'text-white'
        }`}
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
      className={`text-sm font-medium transition-colors hover:text-cyber-lightBlue relative ${
        isActive ? 'text-cyber-lightBlue' : 'text-white'
      }`}
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
