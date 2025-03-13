
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <section className="relative min-h-screen px-6 flex items-center cyber-grid-bg overflow-hidden">
      <div className="absolute inset-0 bg-cyber-black/80 z-0"></div>
      
      {/* Background effects */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-cyber-glow -z-10 blur-3xl opacity-30"
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.05, 1],
        }} 
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="block">Layanan Terbaik</span> 
                <span className="bg-gradient-to-r from-cyber-neonPurple to-cyber-lightBlue bg-clip-text text-transparent">
                  Penuhi Kebutuhan Anda
                </span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-gray-300 text-lg max-w-xl"
                variants={itemVariants}
              >
                Kami menyediakan solusi lengkap untuk kebutuhan jasa tugas, 
                pembelajaran, dan digital dengan kualitas premium dan hasil yang memuaskan.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-4"
              variants={itemVariants}
            >
              <CTAButton 
                href="/order" 
                size="lg"
                variant="primary"
                icon={<ArrowRight size={18} />}
              >
                Order Sekarang
              </CTAButton>
              <CTAButton 
                href="/services" 
                size="lg"
                variant="outline"
              >
                Lihat Layanan
              </CTAButton>
            </motion.div>
            
            <motion.div 
              className="mt-6 flex items-center gap-6"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-cyber-purple to-cyber-blue flex items-center justify-center text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold cyber-text-glow-purple">100+</span> Client Puas
                </p>
                <div className="flex text-yellow-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative z-10 glassmorphism rounded-lg p-8 border border-cyber-purple/20">
              <motion.h3 
                className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Layanan Kami
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Jasa Tugas", desc: "KTI, Makalah, Essay, dll." },
                  { title: "Jasa Digital", desc: "Website, Desain, Sosmed" },
                  { title: "Jasa Pembelajaran", desc: "Kursus dan Pelatihan" },
                  { title: "Konsultasi", desc: "Konsultasi Gratis" }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="p-4 rounded-md border border-cyber-purple/10 bg-cyber-deepBlue/50 hover:bg-cyber-deepBlue/80 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 0 20px rgba(121,33,223,0.3)" 
                    }}
                  >
                    <h4 className="font-medium mb-2 text-white">{service.title}</h4>
                    <p className="text-sm text-gray-300">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <CTAButton
                  href="/services"
                  size="sm"
                  className="mx-auto"
                >
                  Semua Layanan
                </CTAButton>
              </motion.div>
            </div>
            
            {/* Abstract shape decorations */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-cyber-purple opacity-30 rounded-full blur-3xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyber-blue opacity-20 rounded-full blur-3xl animate-pulse-subtle"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
