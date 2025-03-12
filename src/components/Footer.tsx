
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Pages",
      links: [
        { name: "Beranda", path: "/" },
        { name: "Layanan", path: "/services" },
        { name: "Order Jasa", path: "/order" },
      ]
    },
    {
      title: "Layanan",
      links: [
        { name: "Jasa Tugas", path: "/services" },
        { name: "Jasa Digital", path: "/services" },
        { name: "Jasa Pembelajaran", path: "/services" },
      ]
    },
    {
      title: "Kontak",
      links: [
        { name: "WhatsApp: +62 822-7972-2417", path: "https://wa.me/6282279722417" },
        { name: "Email: contact@robsplus.com", path: "mailto:contact@robsplus.com" },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={18} />, url: "#" },
    { icon: <Instagram size={18} />, url: "#" },
    { icon: <Twitter size={18} />, url: "#" },
    { icon: <Linkedin size={18} />, url: "#" },
  ];
  
  return (
    <footer className="bg-cyber-deepBlue relative overflow-hidden pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-purple to-cyber-lightBlue"></div>
      
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyber-glow -z-10 blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-cyber-glow -z-10 blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="block text-2xl font-bold mb-4 cyber-text-glow-purple tracking-wider">
              ROB's<span className="text-cyber-lightBlue">Plus</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Layanan terbaik untuk memenuhi kebutuhan jasa tugas, digital, dan pembelajaran Anda dengan kualitas premium.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-cyber-deepBlue/70 border border-cyber-purple/30 flex items-center justify-center text-cyber-lightBlue hover:bg-cyber-purple/20 transition-colors"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-medium mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-gray-400 hover:text-cyber-lightBlue text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-cyber-purple/20 pt-6 text-center text-gray-400 text-sm">
          <p>© {year} ROB'sPlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
