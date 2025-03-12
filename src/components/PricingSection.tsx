
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const pricingData = {
  "Jasa Tugas": [
    {
      name: "Essentials",
      price: "Mulai Rp 50K",
      features: [
        "Makalah (1-5 halaman)",
        "Essay pendek",
        "Laporan sederhana",
        "Revisi 1x",
        "Pengerjaan 3-5 hari"
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "Mulai Rp 150K",
      features: [
        "Makalah (5-15 halaman)",
        "KTI pendek",
        "Proposal",
        "PPT presentasi",
        "Revisi 3x",
        "Pengerjaan 3-7 hari"
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "Mulai Rp 300K",
      features: [
        "Skripsi/KTI lengkap",
        "Jurnal penelitian",
        "Laporan kompleks",
        "Parafrase & anti plagiasi",
        "Revisi tak terbatas",
        "Pengerjaan sesuai kebutuhan"
      ],
      highlight: false,
    }
  ],
  "Jasa Digital": [
    {
      name: "Basic",
      price: "Mulai Rp 100K",
      features: [
        "Desain logo sederhana",
        "Poster/banner media sosial",
        "Paket 100 followers",
        "Editing video singkat",
        "Revisi 2x"
      ],
      highlight: false,
    },
    {
      name: "Business",
      price: "Mulai Rp 300K",
      features: [
        "Website 1-3 halaman",
        "Desain logo premium",
        "Paket 1000 followers/likes",
        "Editing video profesional",
        "Social media setup",
        "Revisi 5x"
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Mulai Rp 800K",
      features: [
        "Website lengkap & responsif",
        "Branding kit lengkap",
        "Social media management",
        "Video editing premium",
        "SEO dasar",
        "Revisi tak terbatas",
        "Support 30 hari"
      ],
      highlight: false,
    }
  ],
  "Jasa Pembelajaran": [
    {
      name: "Intro",
      price: "Mulai Rp 75K",
      features: [
        "1 sesi konsultasi (1 jam)",
        "Basic skill learning",
        "Materi pembelajaran dasar",
        "Akses komunitas basic"
      ],
      highlight: false,
    },
    {
      name: "Advanced",
      price: "Mulai Rp 200K",
      features: [
        "3 sesi pelatihan (1 jam)",
        "Advanced skill learning",
        "Materi lengkap & latihan",
        "Project sederhana",
        "Akses komunitas penuh",
        "Sertifikat digital"
      ],
      highlight: true,
    },
    {
      name: "Mastery",
      price: "Mulai Rp 500K",
      features: [
        "10 sesi pelatihan (1 jam)",
        "Expert level skill",
        "Materi premium & project",
        "Portfolio-ready project",
        "Bimbingan personal",
        "Akses seumur hidup",
        "Sertifikat resmi"
      ],
      highlight: false,
    }
  ]
};

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState("Jasa Tugas");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const categories = Object.keys(pricingData);
  
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="pricing" ref={ref}>
      <div className="absolute inset-0 bg-cyber-black/80 cyber-grid-bg -z-10"></div>
      
      <div className="container mx-auto">
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
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-gradient-to-r from-cyber-purple to-cyber-blue text-white shadow-[0_0_15px_rgba(121,33,223,0.5)]"
                  : "bg-cyber-deepBlue/50 text-gray-300 hover:bg-cyber-deepBlue"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData[activeCategory as keyof typeof pricingData].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={cn(
                "glassmorphism rounded-lg overflow-hidden",
                plan.highlight ? "border-cyber-lightBlue/50 relative" : "border-cyber-purple/20"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white text-xs font-semibold py-1 text-center">
                  PALING POPULER
                </div>
              )}
              
              <div className={cn(
                "p-8",
                plan.highlight ? "pt-10" : ""
              )}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyber-lightBlue mt-0.5">
                        <Check size={16} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <CTAButton 
                  href="/order" 
                  variant={plan.highlight ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  Order Sekarang
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-300 mb-4">Butuh paket khusus? Konsultasikan kebutuhan Anda dengan tim kami</p>
          <CTAButton 
            href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20paket%20khusus."
            variant="secondary"
            size="lg"
            className="mx-auto"
          >
            Konsultasi Paket Khusus
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
