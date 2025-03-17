
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { portfolioData, getAllPortfolios } from './portfolioData';
import { PortfolioSectionProps } from './types';
import PortfolioGrid from './PortfolioGrid';
import PortfolioPreview from './PortfolioPreview';

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ preview = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("semua");
  
  if (preview) {
    return <PortfolioPreview />;
  }
  
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="portfolio" ref={ref}>
      <div className="absolute inset-0 bg-cyber-gradient -z-10 opacity-30"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30 mb-4">
            Portofolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hasil <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Karya Kami</span>
          </h2>
          <p className="text-gray-300">
            Berikut adalah beberapa contoh hasil karya kami beserta testimoni dari klien yang telah menggunakan layanan ROB'sPlus.
          </p>
        </motion.div>
        
        <Tabs 
          defaultValue="semua" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="mb-8"
        >
          <TabsList className="mx-auto glassmorphism border border-cyber-purple/20 p-1 mb-8">
            <TabsTrigger 
              value="semua"
              className="data-[state=active]:bg-cyber-purple data-[state=active]:text-white"
            >
              Semua
            </TabsTrigger>
            <TabsTrigger 
              value="jasa-tugas"
              className="data-[state=active]:bg-cyber-purple data-[state=active]:text-white"
            >
              Jasa Tugas
            </TabsTrigger>
            <TabsTrigger 
              value="jasa-digital"
              className="data-[state=active]:bg-cyber-purple data-[state=active]:text-white"
            >
              Jasa Digital
            </TabsTrigger>
            <TabsTrigger 
              value="jasa-pembelajaran"
              className="data-[state=active]:bg-cyber-purple data-[state=active]:text-white"
            >
              Jasa Pembelajaran
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="semua" className="mt-0">
            <PortfolioGrid 
              portfolios={getAllPortfolios()} 
              isInView={isInView} 
              keyPrefix="all" 
            />
          </TabsContent>
          
          <TabsContent value="jasa-tugas" className="mt-0">
            <PortfolioGrid 
              portfolios={portfolioData.jasaTugas} 
              isInView={isInView} 
              keyPrefix="tugas" 
            />
          </TabsContent>
          
          <TabsContent value="jasa-digital" className="mt-0">
            <PortfolioGrid 
              portfolios={portfolioData.jasaDigital} 
              isInView={isInView} 
              keyPrefix="digital" 
            />
          </TabsContent>
          
          <TabsContent value="jasa-pembelajaran" className="mt-0">
            <PortfolioGrid 
              portfolios={portfolioData.jasaPembelajaran} 
              isInView={isInView} 
              keyPrefix="pembelajaran" 
            />
          </TabsContent>
        </Tabs>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-300 mb-6">Ingin melihat lebih banyak hasil karya kami? Hubungi kami untuk diskusi lebih lanjut.</p>
          <a 
            href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20melihat%20lebih%20banyak%20portofolio%20karya%20kalian." 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-lightBlue text-white font-medium hover:shadow-lg hover:shadow-cyber-purple/30 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Briefcase size={18} />
            Lihat Portofolio Lainnya
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
