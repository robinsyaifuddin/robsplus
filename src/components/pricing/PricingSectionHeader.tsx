
import { motion } from 'framer-motion';

interface PricingSectionHeaderProps {
  isInView: boolean;
}

const PricingSectionHeader = ({ isInView }: PricingSectionHeaderProps) => {
  return (
    <motion.div 
      className="text-center max-w-xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30 mb-4">
        Harga Layanan
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Pilih Paket <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Sesuai Kebutuhan</span> Anda
      </h2>
      <p className="text-gray-300">
        Kami menawarkan berbagai paket dengan harga yang kompetitif dan kualitas terbaik untuk setiap kategori layanan.
      </p>
    </motion.div>
  );
};

export default PricingSectionHeader;
