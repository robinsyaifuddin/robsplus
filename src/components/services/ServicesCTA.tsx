
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

interface ServicesCTAProps {
  delay?: number;
}

const ServicesCTA = ({ delay = 0.8 }: ServicesCTAProps) => {
  return (
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <p className="text-gray-300 mb-6">Temukan solusi terbaik untuk kebutuhan Anda bersama ROB'sPlus</p>
      <CTAButton 
        href="/order" 
        size="lg"
        className="mx-auto"
      >
        Order Layanan Sekarang
      </CTAButton>
    </motion.div>
  );
};

export default ServicesCTA;
