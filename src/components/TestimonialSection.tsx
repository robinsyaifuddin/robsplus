
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmad Rizky",
    role: "Mahasiswa S1 Teknik",
    image: "/testimonials/testimonial-1.jpg",
    content: "ROB'sPlus benar-benar membantu skripsi saya. Hasilnya sangat berkualitas dengan pengerjaan yang tepat waktu. Berkat bantuan mereka, saya berhasil mendapatkan nilai A!",
    rating: 5,
  },
  {
    name: "Siti Rahayu",
    role: "Pengusaha Online Shop",
    image: "/testimonials/testimonial-2.jpg",
    content: "Website yang dibuat oleh tim ROB'sPlus sangat profesional dan sesuai dengan kebutuhan bisnis saya. Desainnya modern, responsif, dan fiturnya lengkap. Sangat merekomendasikan!",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Karyawan BUMN",
    image: "/testimonials/testimonial-3.jpg",
    content: "Kursus digital marketing dari ROB'sPlus membuat saya lebih memahami cara promosi produk secara online. Materinya lengkap dan mentor-mentornya sangat kompeten.",
    rating: 5,
  },
  {
    name: "Dewi Lestari",
    role: "Mahasiswa S2 Pendidikan",
    image: "/testimonials/testimonial-4.jpg",
    content: "Jasa pembuatan jurnal ilmiah ROB'sPlus sangat membantu tesis saya. Metodologi penelitian yang disusun sangat terstruktur dan referensinya lengkap. Pelayanan terbaik!",
    rating: 5,
  },
  {
    name: "Rudi Hartono",
    role: "Pegawai Pemerintahan",
    image: "/testimonials/testimonial-5.jpg",
    content: "Layanan editing video ROB'sPlus sangat memuaskan. Hasil editingnya profesional dan sesuai dengan konsep yang saya inginkan. Sudah 3 kali pakai jasa mereka dan selalu puas!",
    rating: 5,
  },
  {
    name: "Rina Wijaya",
    role: "Guru SMA",
    image: "/testimonials/testimonial-6.jpg",
    content: "Kursus Ms. Office dari ROB'sPlus sangat membantu saya menguasai PowerPoint dan Excel. Sekarang saya bisa membuat presentasi yang lebih menarik untuk materi pembelajaran.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <motion.div 
      className="glassmorphism rounded-lg p-6 h-full flex flex-col relative group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Quote className="text-cyber-purple/30 absolute top-4 right-4" size={24} />
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyber-purple/20">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < testimonial.rating ? "currentColor" : "none"}
            className={i < testimonial.rating ? "text-yellow-400" : "text-gray-500"}
          />
        ))}
      </div>
      
      <p className="text-gray-300 text-sm flex-grow">"{testimonial.content}"</p>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-purple to-cyber-lightBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
};

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="testimonials" ref={ref}>
      <div className="absolute inset-0 bg-cyber-gradient -z-10 opacity-30"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30 mb-4">
            Testimonial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Apa Kata <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Klien Kami</span>
          </h2>
          <p className="text-gray-300">
            Kepuasan klien adalah prioritas utama kami. Berikut adalah testimoni dari beberapa klien yang telah menggunakan layanan ROB'sPlus dan merasakan manfaatnya.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
