
import React from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactLink: React.FC = () => {
  return (
    <motion.div 
      className="mt-6 mb-2 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="mb-3 text-sm text-gray-300">Butuh bantuan lebih lanjut?</p>
      <a 
        href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20tertarik%20dengan%20layanan%20Anda." 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-md hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <MessageSquare size={16} />
        <span>Hubungi kami via WhatsApp</span>
        <ExternalLink size={14} />
      </a>
    </motion.div>
  );
};

export default ContactLink;
