
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Layout, Paintbrush, GraduationCap } from 'lucide-react';
import ServiceCard from './ServiceCard';
import CTAButton from './CTAButton';

const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };
  
  const services = [
    {
      title: "Jasa Tugas",
      description: "Pembuatan berbagai macam tugas akademik dengan kualitas terbaik dan orginal.",
      icon: <FileText size={24} />,
      items: ["KTI", "Makalah", "Essay", "Laporan", "Proposal", "Jurnal", "PPT", "Parafrase/Turunkan Plagiasi"]
    },
    {
      title: "Jasa Digital",
      description: "Solusi digital untuk meningkatkan bisnis dan brand Anda.",
      icon: <Layout size={24} />,
      items: ["Pembuatan Website", "Desain Logo/Poster", "Editing Video/Film", "Followers, Likes, Comment Sosmed", "Report/Hapus Akun Sosmed"]
    },
    {
      title: "Jasa Pembelajaran",
      description: "Kursus dan pelatihan untuk meningkatkan keterampilan Anda.",
      icon: <GraduationCap size={24} />,
      items: ["Website", "Desain Grafis", "Digital Marketing", "Instagram Branding", "Ms. Word, Power Point, Excel"]
    },
  ];
  
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="services" ref={ref}>
      <div className="absolute inset-0 bg-cyber-gradient -z-10 opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-glow opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyber-glow opacity-20 -z-10"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                items={service.items}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <CTAButton 
            href="/order" 
            size="lg"
            className="mx-auto"
          >
            Order Layanan Sekarang
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
