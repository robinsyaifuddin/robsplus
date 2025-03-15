
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import PricingSectionHeader from './pricing/PricingSectionHeader';
import CategorySelector from './pricing/CategorySelector';
import PricingCard from './pricing/PricingCard';
import ConsultationCTA from './pricing/ConsultationCTA';
import { pricingData } from './pricing/pricingData';
import { ScrollArea } from './ui/scroll-area';

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState("Jasa Tugas");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const categories = Object.keys(pricingData);
  
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="pricing" ref={ref}>
      <div className="absolute inset-0 bg-cyber-black/80 cyber-grid-bg -z-10"></div>
      
      <div className="container mx-auto">
        <PricingSectionHeader isInView={isInView} />
        
        <CategorySelector 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isInView={isInView}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-h-[600px]"
        >
          <ScrollArea className="h-full max-h-[600px] pr-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingData[activeCategory as keyof typeof pricingData].map((plan, index) => (
                <PricingCard 
                  key={plan.name}
                  plan={plan}
                  index={index}
                  isInView={isInView}
                  activeCategory={activeCategory}
                />
              ))}
            </div>
          </ScrollArea>
        </motion.div>
        
        <ConsultationCTA isInView={isInView} />
      </div>
    </section>
  );
};

export default PricingSection;
