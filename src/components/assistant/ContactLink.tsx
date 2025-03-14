
import React from 'react';
import { Phone } from 'lucide-react';

const ContactLink: React.FC = () => {
  return (
    <div className="mt-4 text-center">
      <a 
        href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20tertarik%20dengan%20layanan%20Anda." 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs flex items-center justify-center gap-1 text-cyber-lightBlue hover:underline"
      >
        <Phone size={12} />
        <span>Konsultasi lebih lanjut via WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactLink;
