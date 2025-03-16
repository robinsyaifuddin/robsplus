
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ArrowRight, ArrowLeft, Briefcase } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

// Portfolio data with categories
const portfolioData = {
  jasaTugas: [
    {
      title: "Karya Tulis Ilmiah - Ekonomi Kreatif",
      client: "Ahmad Rizky",
      image: "/portfolio/tugas-1.jpg",
      description: "KTI tentang Peran Ekonomi Kreatif dalam Pemulihan Ekonomi Pasca Pandemi.",
      testimonial: "ROB'sPlus benar-benar membantu skripsi saya. Hasilnya sangat berkualitas dengan pengerjaan yang tepat waktu. Berkat bantuan mereka, saya berhasil mendapatkan nilai A!",
      clientRole: "Mahasiswa S1 Teknik",
      clientImage: "/testimonials/testimonial-1.jpg",
      rating: 5,
    },
    {
      title: "Essay Riset - Pendidikan Lingkungan",
      client: "Dewi Lestari",
      image: "/portfolio/tugas-2.jpg",
      description: "Essay ilmiah tentang Pendidikan Lingkungan Hidup di Sekolah Dasar.",
      testimonial: "Jasa pembuatan jurnal ilmiah ROB'sPlus sangat membantu tesis saya. Metodologi penelitian yang disusun sangat terstruktur dan referensinya lengkap. Pelayanan terbaik!",
      clientRole: "Mahasiswa S2 Pendidikan",
      clientImage: "/testimonials/testimonial-4.jpg",
      rating: 5,
    },
  ],
  jasaDigital: [
    {
      title: "Website Toko Online Fashion",
      client: "Siti Rahayu",
      image: "/portfolio/digital-1.jpg",
      description: "Pembuatan website e-commerce untuk toko fashion dengan integrasi pembayaran online.",
      testimonial: "Website yang dibuat oleh tim ROB'sPlus sangat profesional dan sesuai dengan kebutuhan bisnis saya. Desainnya modern, responsif, dan fiturnya lengkap. Sangat merekomendasikan!",
      clientRole: "Pengusaha Online Shop",
      clientImage: "/testimonials/testimonial-2.jpg",
      rating: 5,
    },
    {
      title: "Video Company Profile",
      client: "Rudi Hartono",
      image: "/portfolio/digital-2.jpg",
      description: "Pembuatan video profil perusahaan untuk instansi pemerintahan.",
      testimonial: "Layanan editing video ROB'sPlus sangat memuaskan. Hasil editingnya profesional dan sesuai dengan konsep yang saya inginkan. Sudah 3 kali pakai jasa mereka dan selalu puas!",
      clientRole: "Pegawai Pemerintahan",
      clientImage: "/testimonials/testimonial-5.jpg",
      rating: 5,
    },
  ],
  jasaPembelajaran: [
    {
      title: "Kursus Digital Marketing",
      client: "Budi Santoso",
      image: "/portfolio/pembelajaran-1.jpg",
      description: "Pelatihan digital marketing untuk karyawan BUMN.",
      testimonial: "Kursus digital marketing dari ROB'sPlus membuat saya lebih memahami cara promosi produk secara online. Materinya lengkap dan mentor-mentornya sangat kompeten.",
      clientRole: "Karyawan BUMN",
      clientImage: "/testimonials/testimonial-3.jpg",
      rating: 5,
    },
    {
      title: "Pelatihan Microsoft Office",
      client: "Rina Wijaya",
      image: "/portfolio/pembelajaran-2.jpg",
      description: "Pelatihan komprehensif Microsoft Office untuk staf pengajar SMA.",
      testimonial: "Kursus Ms. Office dari ROB'sPlus sangat membantu saya menguasai PowerPoint dan Excel. Sekarang saya bisa membuat presentasi yang lebih menarik untuk materi pembelajaran.",
      clientRole: "Guru SMA",
      clientImage: "/testimonials/testimonial-6.jpg",
      rating: 5,
    },
  ],
};

const PortfolioItem = ({ item }: { item: {
  title: string;
  client: string;
  image: string;
  description: string;
  testimonial: string;
  clientRole: string;
  clientImage: string;
  rating: number;
}}) => {
  const [showTestimonial, setShowTestimonial] = useState(false);
  
  return (
    <motion.div 
      className="glassmorphism rounded-lg overflow-hidden h-full flex flex-col group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="font-medium text-white">{item.title}</h4>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <p className="text-sm text-gray-300 mb-4">{item.description}</p>
        
        <div className="mt-auto">
          <button 
            onClick={() => setShowTestimonial(!showTestimonial)}
            className="text-sm text-cyber-lightBlue hover:underline flex items-center gap-1"
          >
            {showTestimonial ? "Sembunyikan testimoni" : "Lihat testimoni"}
            <ArrowRight size={14} className={`transition-transform ${showTestimonial ? 'rotate-90' : ''}`} />
          </button>
          
          {showTestimonial && (
            <motion.div 
              className="mt-4 border-t border-cyber-purple/20 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="text-cyber-purple/30 mb-2" size={20} />
              <p className="text-sm text-gray-300 italic mb-3">"{item.testimonial}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-cyber-purple/20">
                  <img 
                    src={item.clientImage} 
                    alt={item.client} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.client}</p>
                  <p className="text-xs text-gray-400">{item.clientRole}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < item.rating ? "currentColor" : "none"}
                    className={i < item.rating ? "text-yellow-400" : "text-gray-500"}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("semua");
  
  // Combine all portfolios for the "All" tab
  const allPortfolios = [
    ...portfolioData.jasaTugas,
    ...portfolioData.jasaDigital,
    ...portfolioData.jasaPembelajaran,
  ];
  
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPortfolios.map((item, index) => (
                <motion.div
                  key={`all-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                >
                  <PortfolioItem item={item} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="jasa-tugas" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.jasaTugas.map((item, index) => (
                <motion.div
                  key={`tugas-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <PortfolioItem item={item} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="jasa-digital" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.jasaDigital.map((item, index) => (
                <motion.div
                  key={`digital-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <PortfolioItem item={item} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="jasa-pembelajaran" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.jasaPembelajaran.map((item, index) => (
                <motion.div
                  key={`pembelajaran-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <PortfolioItem item={item} />
                </motion.div>
              ))}
            </div>
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
