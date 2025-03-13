
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CategorySelectorProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isInView: boolean;
}

const CategorySelector = ({ 
  categories, 
  activeCategory, 
  setActiveCategory,
  isInView 
}: CategorySelectorProps) => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === category
              ? "bg-gradient-to-r from-cyber-purple to-cyber-blue text-white shadow-[0_0_15px_rgba(121,33,223,0.5)]"
              : "bg-cyber-deepBlue/50 text-gray-300 hover:bg-cyber-deepBlue"
          )}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
};

export default CategorySelector;
