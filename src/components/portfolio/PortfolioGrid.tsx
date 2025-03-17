
import React from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import { PortfolioItem as PortfolioItemType } from './types';

interface PortfolioGridProps {
  portfolios: PortfolioItemType[];
  isInView: boolean;
  keyPrefix: string;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ portfolios, isInView, keyPrefix }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolios.map((item, index) => (
        <motion.div
          key={`${keyPrefix}-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
        >
          <PortfolioItem item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
