
import { Link } from 'react-router-dom';

const NavLogo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2"
    >
      <img 
        src="/lovable-uploads/27477e8d-895e-477f-88b3-9a6354c8a392.png" 
        alt="ROB's Plus Logo"
        className={`transition-all duration-300 ${
          isScrolled ? 'h-10' : 'h-12'
        }`}
      />
      <span className="text-xl font-bold cyber-text-glow-purple tracking-wider">
        ROB's<span className="text-cyber-lightBlue">Plus</span>
      </span>
    </Link>
  );
};

export default NavLogo;
