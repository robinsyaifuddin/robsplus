
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Star } from 'lucide-react';
import { PortfolioItem as PortfolioItemType } from './types';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  const [showTestimonial, setShowTestimonial] = useState(false);
  
  return (
    <motion.div 
      className="glassmorphism rounded-lg overflow-hidden h-full flex flex-col group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="font-medium text-white">{item.title}</h4>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <p className="text-sm text-gray-300 mb-4">{item.description}</p>
        
        <div className="mt-auto">
          <button 
            onClick={() => setShowTestimonial(!showTestimonial)}
            className="text-sm text-cyber-lightBlue hover:underline flex items-center gap-1"
          >
            {showTestimonial ? "Sembunyikan testimoni" : "Lihat testimoni"}
            <ArrowRight size={14} className={`transition-transform ${showTestimonial ? 'rotate-90' : ''}`} />
          </button>
          
          {showTestimonial && (
            <motion.div 
              className="mt-4 border-t border-cyber-purple/20 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="text-cyber-purple/30 mb-2" size={20} />
              <p className="text-sm text-gray-300 italic mb-3">"{item.testimonial}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-cyber-purple/20">
                  <img 
                    src={item.clientImage} 
                    alt={item.client} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.client}</p>
                  <p className="text-xs text-gray-400">{item.clientRole}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < item.rating ? "currentColor" : "none"}
                    className={i < item.rating ? "text-yellow-400" : "text-gray-500"}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
