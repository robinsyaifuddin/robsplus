
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ServiceCard from '../ServiceCard';
import { ServiceItem } from './types';

interface ServiceCategoryProps {
  category: string;
  description: string;
  icon: ReactNode;
  note: string;
  items: ServiceItem[];
  categoryIndex: number;
}

const ServiceCategory = ({ 
  category, 
  description, 
  icon, 
  note, 
  items, 
  categoryIndex 
}: ServiceCategoryProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div className="mb-20">
      <motion.h3 
        className="text-2xl font-bold mb-6 border-l-4 border-cyber-purple pl-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 * categoryIndex, duration: 0.5 }}
      >
        {category}
      </motion.h3>
      <p className="text-gray-300 mb-4 pl-6">{description}</p>
      
      {note && (
        <div className="mb-8 pl-6 p-4 bg-cyber-deepBlue/30 border-l-2 border-cyber-purple/50 rounded-r-md">
          <p className="text-sm text-gray-300"><span className="font-semibold text-cyber-lightBlue">Catatan:</span> {note}</p>
        </div>
      )}
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((service, index) => (
          <motion.div key={service.title} variants={itemVariants}>
            <ServiceCard 
              title={service.title}
              description={service.description}
              icon={icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceCategory;
