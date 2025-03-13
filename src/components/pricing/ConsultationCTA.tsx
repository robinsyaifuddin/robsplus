
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import CTAButton from '../CTAButton';

interface ConsultationCTAProps {
  isInView: boolean;
}

const ConsultationCTA = ({ isInView }: ConsultationCTAProps) => {
  return (
    <motion.div 
      className="mt-16 text-center glassmorphism p-8 rounded-lg max-w-2xl mx-auto border border-cyber-purple/30"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      whileHover={{ boxShadow: "0 10px 25px -5px rgba(121,33,223,0.2)" }}
    >
      <div className="w-16 h-16 rounded-full bg-cyber-deepBlue/70 flex items-center justify-center mx-auto mb-4 border border-cyber-purple/30">
        <MessageCircle className="text-cyber-lightBlue" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">
        Butuh Solusi Khusus?
      </h3>
      <p className="text-gray-300 mb-6">Konsultasikan kebutuhan Anda dengan tim kami untuk mendapatkan paket yang sesuai dengan kebutuhan spesifik Anda</p>
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
