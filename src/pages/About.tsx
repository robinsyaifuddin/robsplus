
import React from 'react';
import { motion } from 'framer-motion';
import { Info, Award, Target, Users, Phone, Mail, Instagram, MapPin } from 'lucide-react';
import IndexLayout from '@/components/IndexPage/IndexLayout';
import PageTransition from '@/components/PageTransition';

const AboutUs = () => {
  return (
    <IndexLayout>
      <PageTransition>
        <div className="container mx-auto px-6 py-20">
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30 mb-4">
                Tentang Kami
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Kenali <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">ROB'sPlus</span> Lebih Dekat
              </h1>
              <p className="text-gray-300 text-lg">
                Penyedia layanan terbaik untuk memenuhi kebutuhan jasa tugas, digital, dan pembelajaran Anda
              </p>
            </div>

            <div className="glassmorphism p-8 md:p-12 rounded-xl mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden border-2 border-cyber-purple/30">
                    <img 
                      src="/about/company-image.jpg" 
                      alt="ROB'sPlus Team" 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Sejarah ROB'sPlus</h2>
                  <p className="text-gray-300 mb-4">
                    ROB'sPlus didirikan pada tahun 2020 sebagai solusi untuk membantu mahasiswa dan profesional mengatasi berbagai tantangan akademik dan digital. Kami memulai dengan fokus pada jasa pembuatan tugas akademik, dan seiring berjalannya waktu, kami memperluas layanan kami untuk mencakup jasa digital dan pembelajaran.
                  </p>
                  <p className="text-gray-300">
                    Nama ROB'sPlus sendiri berasal dari inisial pendiri kami dan "Plus" yang menandakan komitmen kami untuk memberikan nilai tambah dalam setiap layanan. Seiring berkembangnya kebutuhan klien, kami terus berinovasi dan memperluas jangkauan layanan kami untuk menjadi solusi komprehensif bagi kebutuhan akademik dan digital.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="glassmorphism rounded-xl p-8 flex flex-col items-center text-center"
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(121,33,223,0.3)" }}
              >
                <div className="w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-5">
                  <Info className="text-cyber-lightBlue" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Visi Kami</h3>
                <p className="text-gray-300">
                  Menjadi penyedia layanan terdepan yang membantu individu dan organisasi mencapai potensi maksimal mereka melalui solusi akademik dan digital yang inovatif dan berkualitas tinggi.
                </p>
              </motion.div>

              <motion.div 
                className="glassmorphism rounded-xl p-8 flex flex-col items-center text-center"
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(121,33,223,0.3)" }}
              >
                <div className="w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-5">
                  <Target className="text-cyber-lightBlue" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Misi Kami</h3>
                <p className="text-gray-300">
                  Menyediakan layanan berkualitas tinggi yang memenuhi kebutuhan klien, berkontribusi positif pada perkembangan akademik dan profesional klien, serta terus berinovasi dalam menghadapi perubahan teknologi dan pendidikan.
                </p>
              </motion.div>

              <motion.div 
                className="glassmorphism rounded-xl p-8 flex flex-col items-center text-center"
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(121,33,223,0.3)" }}
              >
                <div className="w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-5">
                  <Award className="text-cyber-lightBlue" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Nilai Kami</h3>
                <p className="text-gray-300">
                  Kualitas, Integritas, Inovasi, Kepuasan Pelanggan, dan Pembelajaran Berkelanjutan adalah nilai-nilai yang melandasi setiap aspek pekerjaan kami di ROB'sPlus.
                </p>
              </motion.div>
            </div>

            <div className="glassmorphism rounded-xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Tim Kami</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div 
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyber-purple/30 mb-4">
                    <img 
                      src="/about/founder.jpg" 
                      alt="Founder" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold">Robert Oktovianto</h3>
                  <p className="text-cyber-lightBlue mb-2">Founder & CEO</p>
                  <p className="text-gray-300 text-sm">
                    Visioner yang memulai ROB'sPlus dengan misi membantu mahasiswa dan profesional mencapai potensi terbaik mereka.
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyber-purple/30 mb-4">
                    <img 
                      src="/about/content-director.jpg" 
                      alt="Content Director" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold">Budi Santoso</h3>
                  <p className="text-cyber-lightBlue mb-2">Content Director</p>
                  <p className="text-gray-300 text-sm">
                    Ahli konten akademik yang memastikan semua layanan tugas kami memenuhi standar kualitas tertinggi.
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyber-purple/30 mb-4">
                    <img 
                      src="/about/tech-lead.jpg" 
                      alt="Tech Lead" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold">Dewi Lestari</h3>
                  <p className="text-cyber-lightBlue mb-2">Tech Lead</p>
                  <p className="text-gray-300 text-sm">
                    Penggerak inovasi digital yang mengarahkan layanan teknologi dan pembelajaran digital kami.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="glassmorphism rounded-xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Kontak Resmi</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-cyber-lightBlue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">WhatsApp</h4>
                      <a 
                        href="https://wa.me/6282279722417" 
                        className="text-cyber-lightBlue hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +62 822-7972-2417
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-cyber-lightBlue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a 
                        href="mailto:hello.robplus@gmail.com" 
                        className="text-cyber-lightBlue hover:underline"
                      >
                        hello.robplus@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                      <Instagram className="text-cyber-lightBlue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Instagram</h4>
                      <a 
                        href="https://instagram.com/ofc.robplus" 
                        className="text-cyber-lightBlue hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @ofc.robplus
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-cyber-lightBlue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Lokasi</h4>
                      <p className="text-gray-300">
                        Kota Surabaya, Jawa Timur, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                      <Users className="text-cyber-lightBlue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Jam Operasional</h4>
                      <p className="text-gray-300">
                        Senin - Minggu: 08.00 - 21.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </PageTransition>
    </IndexLayout>
  );
};

export default AboutUs;
