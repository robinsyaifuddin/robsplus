
import { motion } from 'framer-motion';

const ServicesHeader = () => {
  return (
    <motion.div 
      className="text-center max-w-xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30 mb-4">
        Layanan Kami
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Solusi <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Lengkap</span> Untuk Kebutuhan Anda
      </h2>
      <p className="text-gray-300">
        Kami menyediakan berbagai jasa profesional untuk memenuhi kebutuhan akademik, digital, dan pembelajaran Anda.
      </p>
    </motion.div>
  );
};

export default ServicesHeader;
