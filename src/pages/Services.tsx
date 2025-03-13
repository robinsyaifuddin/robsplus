
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import { FileText, Layout, GraduationCap } from 'lucide-react';
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
      note: "Harga dapat bervariasi tergantung pada tingkat kesulitan, panjang tugas, dan tenggat waktu. Revisi diberikan sesuai dengan paket yang dipilih.",
      items: [
        {
          title: "Karya Tulis Ilmiah (KTI)",
          description: "Pembuatan KTI dengan standar akademik tinggi, termasuk penelitian ekstensif dan analisis mendalam."
        },
        {
          title: "Makalah",
          description: "Penyusunan makalah untuk tugas kuliah atau keperluan akademik dengan struktur yang baik dan referensi lengkap."
        },
        {
          title: "Esai",
          description: "Penulisan esai dalam bahasa Indonesia atau bahasa Inggris dengan argumentasi yang kuat dan gaya bahasa yang menarik."
        },
        {
          title: "Laporan",
          description: "Pembuatan laporan penelitian, laporan magang, atau laporan proyek dengan format dan data yang akurat."
        },
        {
          title: "Proposal",
          description: "Penyusunan proposal penelitian, proposal bisnis, atau proposal kegiatan yang komprehensif dan persuasif."
        },
        {
          title: "Jurnal",
          description: "Penulisan artikel jurnal ilmiah sesuai dengan template dan standar publikasi akademik."
        },
        {
          title: "Presentasi PowerPoint (PPT)",
          description: "Pembuatan slide presentasi yang menarik, informatif, dan profesional untuk berbagai keperluan."
        },
        {
          title: "Parafrasa/Penurunan Plagiasi",
          description: "Layanan parafrase untuk menurunkan tingkat plagiasi pada tulisan tanpa mengubah maksud aslinya."
        },
        {
          title: "Perapihan Format Tugas",
          description: "Perbaikan format, tata letak, dan penomoran dokumen akademik sesuai dengan standar yang berlaku."
        },
        {
          title: "Tugas Lainnya",
          description: "Konsultasi dan pengerjaan berbagai jenis tugas akademik lainnya sesuai kebutuhan klien."
        }
      ]
    },
    "Jasa Digital": {
      description: "Solusi digital untuk meningkatkan bisnis dan brand Anda.",
      icon: <Layout size={24} />,
      note: "Harga tergantung pada kompleksitas desain, durasi video, atau jumlah followers yang diinginkan. Konsultasi awal untuk memahami kebutuhan klien.",
      items: [
        {
          title: "Pembuatan Website",
          description: "Desain dan pengembangan website responsif untuk personal, bisnis, atau toko online dengan berbagai fitur sesuai kebutuhan."
        },
        {
          title: "Desain Logo/Poster",
          description: "Pembuatan logo, poster, banner, dan material grafis lainnya dengan desain profesional dan sesuai identitas brand."
        },
        {
          title: "Editing Video/Film",
          description: "Pengeditan video profesional untuk konten media sosial, presentasi, iklan, atau film pendek dengan efek visual menarik."
        },
        {
          title: "Followers, Likes, Comment Sosmed",
          description: "Layanan peningkatan engagement pada platform media sosial untuk meningkatkan kredibilitas dan jangkauan akun Anda."
        },
        {
          title: "Report/Hapus Akun Sosmed",
          description: "Bantuan untuk menangani masalah akun media sosial yang bermasalah, termasuk pelaporan dan pengajuan penghapusan akun."
        }
      ]
    },
    "Jasa Pembelajaran": {
      description: "Kursus dan pelatihan untuk meningkatkan keterampilan Anda.",
      icon: <GraduationCap size={24} />,
      note: "Harga bervariasi tergantung pada durasi kursus, tingkat kesulitan materi, dan jumlah sesi. Modul pembelajaran dapat disesuaikan dengan kebutuhan peserta.",
      items: [
        {
          title: "Pembuatan Website",
          description: "Pembelajaran dasar hingga lanjutan tentang pengembangan website menggunakan HTML, CSS, JavaScript, dan platform populer seperti WordPress."
        },
        {
          title: "Desain Grafis",
          description: "Kursus desain grafis menggunakan aplikasi profesional seperti Photoshop, Illustrator, atau Canva untuk berbagai keperluan visual."
        },
        {
          title: "Digital Marketing",
          description: "Pelatihan strategi pemasaran digital yang efektif, termasuk SEO, media sosial, konten marketing, dan analisis data."
        },
        {
          title: "Instagram Branding",
          description: "Teknik branding dan marketing khusus untuk platform Instagram, termasuk strategi konten, hashtag, dan engagement followers."
        },
        {
          title: "Ms. Word, Power Point, Excel",
          description: "Pembelajaran penggunaan aplikasi Microsoft Office secara profesional untuk meningkatkan produktivitas dalam pekerjaan atau pendidikan."
        }
      ]
    }
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-cyber-black">
        <section className="pt-28 px-6 relative overflow-hidden">
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
                <p className="text-gray-300 mb-4 pl-6">{details.description}</p>
                
                {details.note && (
                  <div className="mb-8 pl-6 p-4 bg-cyber-deepBlue/30 border-l-2 border-cyber-purple/50 rounded-r-md">
                    <p className="text-sm text-gray-300"><span className="font-semibold text-cyber-lightBlue">Catatan:</span> {details.note}</p>
                  </div>
                )}
                
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
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
                
                <div className="mb-10 pl-6">
                  <h4 className="text-lg font-semibold mb-4 text-cyber-lightBlue">Tingkatan Harga dan Layanan:</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {category === "Jasa Tugas" && (
                      <>
                        <div className="bg-cyber-deepBlue/20 p-4 rounded-lg border border-cyber-purple/10">
                          <h5 className="font-medium text-white mb-2">Paket Dasar (Rp 5.000 - Rp 50.000)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Cocok untuk tugas-tugas ringan seperti esai pendek, laporan sederhana, atau perapihan format.</li>
                            <li>Fokus pada penulisan dengan tata bahasa yang baik dan struktur yang rapi.</li>
                            <li>Parafrasa dasar untuk menurunkan plagiasi.</li>
                          </ul>
                        </div>
                        <div className="bg-cyber-deepBlue/30 p-4 rounded-lg border border-cyber-purple/20">
                          <h5 className="font-medium text-white mb-2">Paket Menengah (Rp 50.000 - Rp 150.000)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Untuk tugas-tugas yang lebih kompleks seperti makalah, proposal, atau PPT presentasi.</li>
                            <li>Penelitian mendalam, analisis data (jika diperlukan), dan penulisan yang lebih terstruktur.</li>
                            <li>Penurunan plagiasi dengan teknik yang lebih canggih.</li>
                          </ul>
                        </div>
                        <div className="bg-cyber-deepBlue/20 p-4 rounded-lg border border-cyber-purple/10">
                          <h5 className="font-medium text-white mb-2">Paket Lanjutan (Rp 150.000 - Rp 350.000 atau lebih)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Untuk KTI, jurnal, atau tugas-tugas penelitian yang membutuhkan keahlian khusus.</li>
                            <li>Penelitian ekstensif, analisis statistik (jika diperlukan), dan penulisan dengan standar akademik tinggi.</li>
                            <li>Konsultasi intensif dan revisi berkala.</li>
                          </ul>
                        </div>
                      </>
                    )}
                    
                    {category === "Jasa Digital" && (
                      <>
                        <div className="bg-cyber-deepBlue/20 p-4 rounded-lg border border-cyber-purple/10">
                          <h5 className="font-medium text-white mb-2">Paket Pemula (Rp 50.000 - Rp 150.000)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Desain logo sederhana, poster promosi dasar, atau editing video pendek.</li>
                            <li>Pembuatan website statis dengan template sederhana.</li>
                            <li>Peningkatan followers/likes/komentar dalam jumlah terbatas.</li>
                          </ul>
                        </div>
                        <div className="bg-cyber-deepBlue/30 p-4 rounded-lg border border-cyber-purple/20">
                          <h5 className="font-medium text-white mb-2">Paket Profesional (Rp 150.000 - Rp 400.000)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Desain logo/poster yang lebih kompleks dan unik, editing video dengan efek khusus.</li>
                            <li>Pembuatan website dinamis dengan fitur-fitur tambahan.</li>
                            <li>Peningkatan followers/likes/komentar yang lebih signifikan.</li>
                            <li>Pelaporan akun sosial media.</li>
                          </ul>
                        </div>
                        <div className="bg-cyber-deepBlue/20 p-4 rounded-lg border border-cyber-purple/10">
                          <h5 className="font-medium text-white mb-2">Paket Premium (Rp 400.000 - Rp 700.000)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Pembuatan Website E-commerce, atau website dengan tingkat kesulitan sangat tinggi.</li>
                            <li>Editing film pendek, atau iklan komersil.</li>
                            <li>Perencanaan branding sosial media, dan peningkatan pengikut secara organik.</li>
                            <li>Penghapusan akun sosial media yang bermasalah.</li>
                          </ul>
                        </div>
                      </>
                    )}
                    
                    {category === "Jasa Pembelajaran" && (
                      <>
                        <div className="bg-cyber-deepBlue/20 p-4 rounded-lg border border-cyber-purple/10">
                          <h5 className="font-medium text-white mb-2">Sesi Individual (Rp 50.000 - Rp 100.000 per sesi)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Pembelajaran privat dengan fokus pada topik tertentu.</li>
                            <li>Sesi tanya jawab dan latihan praktis.</li>
                            <li>Pembelajaran dasar.</li>
                          </ul>
                        </div>
                        <div className="bg-cyber-deepBlue/30 p-4 rounded-lg border border-cyber-purple/20">
                          <h5 className="font-medium text-white mb-2">Paket Dasar (Rp 100.000 - Rp 200.000)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Kursus singkat dengan materi dasar dan latihan.</li>
                            <li>Akses ke materi pembelajaran online atau offline.</li>
                            <li>Pembelajaran tingkat menengah.</li>
                          </ul>
                        </div>
                        <div className="bg-cyber-deepBlue/20 p-4 rounded-lg border border-cyber-purple/10">
                          <h5 className="font-medium text-white mb-2">Paket Lanjutan (Rp 200.000 - Rp 300.000 atau lebih)</h5>
                          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                            <li>Kursus intensif dengan materi mendalam dan proyek praktik.</li>
                            <li>Mentoring dan dukungan berkelanjutan.</li>
                            <li>Pembelajaran tingkat lanjut.</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
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
