
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items?: string[];
  className?: string;
}

const ServiceCard = ({ title, description, icon, items, className }: ServiceCardProps) => {
  return (
    <motion.div
      className={cn(
        "glassmorphism rounded-lg p-6 overflow-hidden relative group h-full",
        className
      )}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-cyber-purple/20 blur-xl group-hover:bg-cyber-purple/30 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 flex items-center justify-center bg-cyber-deepBlue rounded-lg mb-4 text-cyber-lightBlue border border-cyber-purple/30">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:cyber-text-glow-purple transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4 text-sm">
          {description}
        </p>
        
        {items && items.length > 0 && (
          <ul className="space-y-2 mt-4">
            {items.map((item, index) => (
              <motion.li 
                key={index}
                className="text-sm text-gray-300 flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="w-1.5 h-1.5 bg-cyber-lightBlue rounded-full mr-2"></span>
                {item}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-purple to-cyber-lightBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
};

export default ServiceCard;
