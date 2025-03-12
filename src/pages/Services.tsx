
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import { FileText, Layout, Paintbrush, GraduationCap } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';
import Footer from '@/components/Footer';

const Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
  
  const servicesDetails = {
    "Jasa Tugas": {
      description: "Pembuatan berbagai macam tugas akademik dengan kualitas terbaik dan orginal.",
      icon: <FileText size={24} />,
      items: [
        {
          title: "KTI (Karya Tulis Ilmiah)",
          description: "Pembuatan karya tulis ilmiah sesuai dengan format dan standar akademik yang berlaku."
        },
        {
          title: "Makalah",
          description: "Penyusunan makalah untuk tugas kuliah atau keperluan akademik lainnya."
        },
        {
          title: "Essay",
          description: "Penulisan essay dalam bahasa Indonesia atau bahasa Inggris dengan struktur yang baik."
        },
        {
          title: "Laporan",
          description: "Pembuatan laporan penelitian, laporan magang, atau laporan proyek."
        },
        {
          title: "Proposal",
          description: "Penyusunan proposal penelitian, proposal bisnis, atau proposal kegiatan."
        },
        {
          title: "Jurnal",
          description: "Penulisan artikel jurnal ilmiah sesuai dengan template dan standar jurnal."
        },
        {
          title: "PPT",
          description: "Pembuatan presentasi PowerPoint yang menarik dan profesional."
        },
        {
          title: "Parafrase/Turunkan Plagiasi",
          description: "Layanan parafrase untuk menurunkan tingkat plagiasi pada tulisan Anda."
        }
      ]
    },
    "Jasa Digital": {
      description: "Solusi digital untuk meningkatkan bisnis dan brand Anda.",
      icon: <Layout size={24} />,
      items: [
        {
          title: "Pembuatan Website",
          description: "Desain dan pengembangan website responsif untuk personal atau bisnis."
        },
        {
          title: "Desain Logo/Poster",
          description: "Pembuatan logo, poster, banner, dan material grafis lainnya."
        },
        {
          title: "Editing Video/Film",
          description: "Pengeditan video profesional untuk konten media sosial atau presentasi."
        },
        {
          title: "Followers, Likes, Comment Sosmed",
          description: "Layanan peningkatan engagement pada platform media sosial Anda."
        },
        {
          title: "Report/Hapus Akun Sosmed",
          description: "Bantuan untuk menangani masalah akun media sosial yang bermasalah."
        }
      ]
    },
    "Jasa Pembelajaran": {
      description: "Kursus dan pelatihan untuk meningkatkan keterampilan Anda.",
      icon: <GraduationCap size={24} />,
      items: [
        {
          title: "Website",
          description: "Pembelajaran dasar hingga lanjutan tentang pengembangan website."
        },
        {
          title: "Desain Grafis",
          description: "Kursus desain grafis menggunakan aplikasi profesional."
        },
        {
          title: "Digital Marketing",
          description: "Pelatihan strategi pemasaran digital untuk meningkatkan bisnis Anda."
        },
        {
          title: "Instagram Branding",
          description: "Teknik branding dan marketing khusus untuk platform Instagram."
        },
        {
          title: "Ms. Word, Power Point, Excel",
          description: "Pembelajaran penggunaan aplikasi Microsoft Office secara profesional."
        }
      ]
    }
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-cyber-black">
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-gradient -z-10 opacity-30"></div>
          
          <div className="container mx-auto">
            <motion.div 
              className="text-center max-w-xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
            
            {Object.entries(servicesDetails).map(([category, details], categoryIndex) => (
              <div key={category} className="mb-20">
                <motion.h3 
                  className="text-2xl font-bold mb-6 border-l-4 border-cyber-purple pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * categoryIndex, duration: 0.5 }}
                >
                  {category}
                </motion.h3>
                <p className="text-gray-300 mb-8 pl-6">{details.description}</p>
                
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {details.items.map((service, index) => (
                    <motion.div key={service.title} variants={itemVariants}>
                      <ServiceCard 
                        title={service.title}
                        description={service.description}
                        icon={details.icon}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-gray-300 mb-6">Temukan solusi terbaik untuk kebutuhan Anda bersama ROB'sPlus</p>
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
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Services;
