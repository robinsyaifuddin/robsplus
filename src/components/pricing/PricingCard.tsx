
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import CTAButton from '../CTAButton';

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlight: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  isInView: boolean;
  activeCategory: string;
}

const PricingCard = ({ plan, index, isInView, activeCategory }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
      className={cn(
        "glassmorphism rounded-lg overflow-hidden",
        plan.highlight ? "border-cyber-lightBlue/50 relative" : "border-cyber-purple/20"
      )}
    >
      {plan.highlight && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white text-xs font-semibold py-1 text-center">
          PALING POPULER
        </div>
      )}
      
      <div className={cn(
        "p-8",
        plan.highlight ? "pt-10" : ""
      )}>
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">
            {plan.price}
          </span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-cyber-lightBlue mt-0.5">
                <Check size={16} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="text-xs text-gray-400 mb-6">
          {activeCategory === "Jasa Tugas" && 
            "Harga bervariasi berdasarkan tingkat kesulitan, panjang tugas, dan tenggat waktu."}
          {activeCategory === "Jasa Digital" && 
            "Harga tergantung pada kompleksitas desain, durasi video, atau jumlah followers yang diinginkan."}
          {activeCategory === "Jasa Pembelajaran" && 
            "Harga bervariasi tergantung pada durasi kursus, tingkat kesulitan materi, dan jumlah sesi."}
        </div>
        
        <CTAButton 
          href="/order" 
          variant={plan.highlight ? "primary" : "outline"}
          className="w-full justify-center"
        >
          Order Sekarang
        </CTAButton>
      </div>
    </motion.div>
  );
};

export default PricingCard;
