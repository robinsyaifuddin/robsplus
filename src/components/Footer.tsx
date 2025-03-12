
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-deepBlue border-t border-cyber-purple/20 pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-glow -z-10 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyber-glow -z-10 opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyber-neonPurple to-cyber-lightBlue bg-clip-text text-transparent">
                ROB's<span className="text-white">Plus</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Menyediakan solusi terbaik untuk kebutuhan akademik, digital, dan pembelajaran Anda dengan kualitas premium.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-cyber-purple/30 text-cyber-lightBlue hover:bg-cyber-purple/20 transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              {["Jasa Tugas", "Jasa Digital", "Jasa Pembelajaran", "Konsultasi"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-cyber-lightBlue transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Navigasi</h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", path: "/" },
                { name: "Layanan", path: "/services" },
                { name: "Harga", path: "/pricing" },
                { name: "Testimoni", path: "/testimonials" },
                { name: "Order Jasa", path: "/order" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-cyber-lightBlue transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-cyber-lightBlue shrink-0 mt-1" />
                <span>+62 822-7972-2417</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-cyber-lightBlue shrink-0 mt-1" />
                <span>contact@robsplus.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-cyber-lightBlue shrink-0 mt-1" />
                <span>Jl. Cyber, Kota Digital, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-purple/10 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ROB'sPlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
