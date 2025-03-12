
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Layout, Paintbrush, GraduationCap, Briefcase, Code, Video, Users, Award } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';
import Footer from '@/components/Footer';

const Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const categoryServices = {
    "Jasa Tugas": [
      {
        title: "Karya Tulis Ilmiah",
        description: "Pembuatan karya tulis ilmiah dengan standar akademis tinggi dan referensi yang valid.",
        icon: <FileText size={24} />,
        items: ["KTI", "Skripsi", "Tesis", "Disertasi"]
      },
      {
        title: "Artikel Akademik",
        description: "Penulisan artikel akademik dengan gaya bahasa formal dan struktur yang baik.",
        icon: <FileText size={24} />,
        items: ["Makalah", "Essay", "Jurnal", "Paper"]
      },
      {
        title: "Dokumen Bisnis",
        description: "Pembuatan dokumen bisnis profesional untuk kebutuhan organisasi.",
        icon: <Briefcase size={24} />,
        items: ["Proposal", "Laporan Keuangan", "Business Plan", "Studi Kelayakan"]
      },
      {
        title: "Presentasi",
        description: "Desain presentasi menarik dengan konten yang informatif dan terstruktur.",
        icon: <Layout size={24} />,
        items: ["PowerPoint", "Keynote", "Google Slides", "Infografis"]
      },
      {
        title: "Revisi & Proofreading",
        description: "Layanan perbaikan naskah untuk meningkatkan kualitas tulisan.",
        icon: <FileText size={24} />,
        items: ["Parafrase", "Turunkan Plagiasi", "Perbaikan Format", "Cek Grammar"]
      },
    ],
    "Jasa Digital": [
      {
        title: "Pengembangan Web",
        description: "Pembuatan website profesional dan responsif sesuai kebutuhan.",
        icon: <Code size={24} />,
        items: ["Website Perusahaan", "Toko Online", "Landing Page", "Portfolio"]
      },
      {
        title: "Desain Grafis",
        description: "Layanan desain grafis untuk kebutuhan visual branding Anda.",
        icon: <Paintbrush size={24} />,
        items: ["Logo", "Poster", "Banner", "Kartu Nama"]
      },
      {
        title: "Editing Video",
        description: "Layanan editing video profesional untuk konten digital Anda.",
        icon: <Video size={24} />,
        items: ["Video Promosi", "Editing Film", "Motion Graphics", "Social Media Content"]
      },
      {
        title: "Social Media Management",
        description: "Pengelolaan akun media sosial untuk meningkatkan engagement.",
        icon: <Users size={24} />,
        items: ["Followers", "Likes", "Comment", "Report/Hapus Akun"]
      },
    ],
    "Jasa Pembelajaran": [
      {
        title: "Pengembangan Web",
        description: "Kursus pembuatan website dari dasar hingga mahir.",
        icon: <Code size={24} />,
        items: ["HTML/CSS", "JavaScript", "React/Angular", "Full Stack Development"]
      },
      {
        title: "Desain Grafis",
        description: "Pembelajaran desain grafis dengan software profesional.",
        icon: <Paintbrush size={24} />,
        items: ["Photoshop", "Illustrator", "CorelDRAW", "Canva"]
      },
      {
        title: "Digital Marketing",
        description: "Pelatihan strategi digital marketing untuk bisnis online.",
        icon: <Users size={24} />,
        items: ["SEO", "Social Media Marketing", "Content Marketing", "Email Marketing"]
      },
      {
        title: "Office & Produktivitas",
        description: "Kursus aplikasi perkantoran untuk meningkatkan produktivitas.",
        icon: <Award size={24} />,
        items: ["Microsoft Word", "Excel", "PowerPoint", "Google Workspace"]
      },
      {
        title: "Instagram Branding",
        description: "Strategi branding melalui Instagram untuk bisnis Anda.",
        icon: <Users size={24} />,
        items: ["Content Strategy", "Feed Planning", "Engagement Tactics", "Growth Hacking"]
      },
    ],
  };
  
  return (
    <PageTransition>
      <main className="min-h-screen bg-cyber-black pt-24">
        {/* Hero Section */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid-bg -z-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-cyber-glow opacity-20 -z-10"></div>
          
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <motion.span 
                className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Layanan ROB'sPlus
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Berbagai <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Layanan Premium</span> Untuk Anda
              </motion.h1>
              <motion.p 
                className="text-gray-300 text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                ROB'sPlus menyediakan berbagai layanan premium untuk memenuhi kebutuhan Anda. Dari jasa tugas akademik, jasa digital, hingga pembelajaran yang komprehensif.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <CTAButton href="/order" size="lg">
                  Order Sekarang
                </CTAButton>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        {Object.entries(categoryServices).map(([category, services], categoryIndex) => (
          <section key={category} className="py-16 px-6 relative">
            <div className="absolute inset-0 bg-cyber-gradient -z-10 opacity-20"></div>
            
            <div className="container mx-auto">
              <motion.h2 
                className="text-3xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {category} <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">ROB'sPlus</span>
              </motion.h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (index % 3) }}
                  >
                    <ServiceCard 
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      items={service.items}
                    />
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <CTAButton 
                  href="/order" 
                  size="lg"
                  className="mx-auto"
                  variant={categoryIndex % 2 === 0 ? "primary" : "secondary"}
                >
                  Order {category}
                </CTAButton>
              </motion.div>
            </div>
          </section>
        ))}
        
        {/* CTA Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-black/80 cyber-grid-bg -z-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cyber-glow -z-10 blur-3xl opacity-30"></div>
          
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto glassmorphism rounded-lg p-8 lg:p-12 text-center">
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Butuh Layanan <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Khusus</span>?
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                ROB'sPlus menyediakan layanan kustom sesuai kebutuhan spesifik Anda. Konsultasikan kebutuhan Anda dengan tim kami untuk mendapatkan solusi terbaik.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <CTAButton 
                  href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20ingin%20konsultasi%20layanan%20khusus."
                  size="lg"
                  variant="secondary"
                >
                  Konsultasi Gratis
                </CTAButton>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Services;
