
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

interface ConsultationCTAProps {
  isInView: boolean;
}

const ConsultationCTA = ({ isInView }: ConsultationCTAProps) => {
  return (
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.8 }}
    >
      <p className="text-gray-300 mb-4">Butuh paket khusus? Konsultasikan kebutuhan Anda dengan tim kami</p>
      <CTAButton 
        href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20paket%20khusus."
        variant="secondary"
        size="lg"
        className="mx-auto"
      >
        Konsultasi Paket Khusus
      </CTAButton>
    </motion.div>
  );
};

export default ConsultationCTA;
