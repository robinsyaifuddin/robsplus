
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import CTAButton from './CTAButton';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const contactItems = [
    {
      icon: <Phone className="text-cyber-lightBlue" size={24} />,
      title: "WhatsApp",
      content: "+62 822-7972-2417",
      href: "https://wa.me/6282279722417",
    },
    {
      icon: <Mail className="text-cyber-lightBlue" size={24} />,
      title: "Email",
      content: "contact@robsplus.com",
      href: "mailto:contact@robsplus.com",
    },
    {
      icon: <MapPin className="text-cyber-lightBlue" size={24} />,
      title: "Lokasi",
      content: "Jl. Cyber, Kota Digital, Indonesia",
      href: "#",
    },
    {
      icon: <Clock className="text-cyber-lightBlue" size={24} />,
      title: "Jam Operasional",
      content: "Senin - Minggu: 08:00 - 21:00",
      href: "#",
    },
  ];
  
  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-cyber-gradient -z-10 opacity-30"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30 mb-4">
            Kontak Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Informasi</span> Lebih Lanjut?
          </h2>
          <p className="text-gray-300">
            Tim kami siap membantu Anda. Hubungi kami melalui berbagai channel di bawah ini.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="glassmorphism rounded-lg p-6 flex flex-col items-center justify-center text-center h-full hover:bg-cyber-deepBlue/70 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-cyber-deepBlue/70 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.content}</p>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-300 mb-6">Konsultasikan kebutuhan Anda dengan tim kami untuk mendapatkan solusi terbaik</p>
          <CTAButton 
            href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20layanan"
            size="lg"
            className="mx-auto"
          >
            Konsultasi Gratis
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
