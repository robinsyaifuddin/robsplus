
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

const CTAButton = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className,
  icon,
}: CTAButtonProps) => {
  const baseClasses = "relative font-medium tracking-wide inline-flex items-center justify-center gap-2 rounded-md transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-lightBlue focus-visible:ring-opacity-50";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyber-purple to-cyber-blue text-white shadow-[0_0_15px_rgba(121,33,223,0.5)]",
    secondary: "bg-gradient-to-r from-cyber-lightBlue to-cyber-blue text-white shadow-[0_0_15px_rgba(0,255,255,0.3)]",
    outline: "bg-transparent border border-cyber-purple text-white hover:border-cyber-lightBlue",
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  const ButtonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {children}
      </span>
      <motion.span 
        className="absolute inset-0 bg-gradient-to-r from-cyber-neonPurple to-cyber-lightBlue opacity-0 hover:opacity-100 transition-opacity duration-300"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
  
  if (href) {
    return (
      <motion.a 
        href={href} 
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {ButtonContent}
      </motion.a>
    );
  }
  
  return (
    <motion.button 
      onClick={onClick} 
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {ButtonContent}
    </motion.button>
  );
};

export default CTAButton;
