
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const pricingData = {
  "Jasa Tugas": [
    {
      name: "Paket Dasar",
      price: "Rp 50K - 150K",
      features: [
        "Esai pendek",
        "Laporan sederhana",
        "Perapihan format",
        "Parafrasa dasar",
        "Tata bahasa yang baik",
        "Struktur yang rapi",
        "Revisi sesuai paket"
      ],
      highlight: false,
    },
    {
      name: "Paket Menengah",
      price: "Rp 150K - 250K",
      features: [
        "Makalah kompleks",
        "Proposal",
        "PPT presentasi",
        "Penelitian mendalam",
        "Analisis data",
        "Penulisan terstruktur",
        "Penurunan plagiasi lanjut"
      ],
      highlight: true,
    },
    {
      name: "Paket Lanjutan",
      price: "Rp 250K - 500K+",
      features: [
        "KTI lengkap",
        "Jurnal",
        "Tugas penelitian khusus",
        "Penelitian ekstensif",
        "Analisis statistik",
        "Standar akademik tinggi",
        "Konsultasi intensif"
      ],
      highlight: false,
    }
  ],
  "Jasa Digital": [
    {
      name: "Paket Pemula",
      price: "Rp 50K - 100K",
      features: [
        "Desain logo sederhana",
        "Poster promosi dasar",
        "Editing video pendek",
        "Website statis sederhana",
        "Followers/likes terbatas",
        "Revisi terbatas"
      ],
      highlight: false,
    },
    {
      name: "Paket Profesional",
      price: "Rp 100K - 350K",
      features: [
        "Desain logo/poster unik",
        "Editing video dengan efek khusus",
        "Website dinamis",
        "Peningkatan followers signifikan",
        "Pelaporan akun media sosial",
        "Revisi sesuai kebutuhan"
      ],
      highlight: true,
    },
    {
      name: "Paket Premium",
      price: "Rp 350K - 650K",
      features: [
        "Website E-commerce",
        "Editing film pendek/iklan",
        "Perencanaan branding",
        "Peningkatan pengikut organik",
        "Penghapusan akun bermasalah",
        "Revisi tak terbatas",
        "Support 30 hari"
      ],
      highlight: false,
    }
  ],
  "Jasa Pembelajaran": [
    {
      name: "Sesi Individual",
      price: "Rp 50K - 150K/sesi",
      features: [
        "Pembelajaran privat",
        "Fokus pada topik tertentu",
        "Sesi tanya jawab",
        "Latihan praktis",
        "Pembelajaran dasar",
        "Materi pembelajaran dasar"
      ],
      highlight: false,
    },
    {
      name: "Paket Dasar",
      price: "Rp 150K - 200K",
      features: [
        "Kursus singkat",
        "Materi dasar dan latihan",
        "Akses materi pembelajaran",
        "Pembelajaran tingkat menengah",
        "Bimbingan terstruktur",
        "Sertifikat digital"
      ],
      highlight: true,
    },
    {
      name: "Paket Lanjutan",
      price: "Rp 200K - 300K+",
      features: [
        "Kursus intensif",
        "Materi mendalam",
        "Proyek praktik",
        "Mentoring berkelanjutan",
        "Pembelajaran tingkat lanjut",
        "Modul disesuaikan kebutuhan",
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
                
                <div className="text-xs text-gray-400 mb-6">
                  {activeCategory === "Jasa Tugas" && 
                    "Harga bervariasi berdasarkan tingkat kesulitan, panjang tugas, dan tenggat waktu."}
                  {activeCategory === "Jasa Digital" && 
                    "Harga tergantung pada kompleksitas desain, durasi video, atau jumlah followers yang diinginkan."}
                  {activeCategory === "Jasa Pembelajaran" && 
                    "Harga bervariasi tergantung pada durasi kursus, tingkat kesulitan materi, dan jumlah sesi."}
                </div>
                
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
