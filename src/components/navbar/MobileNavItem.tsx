
import { Link } from 'react-router-dom';

interface MobileNavItemProps {
  href: string;
  text: string;
  isActive: boolean;
  onClick?: () => void;
}

const MobileNavItem = ({ href, text, isActive, onClick }: MobileNavItemProps) => {
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
