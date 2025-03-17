
import { PortfolioData } from './types';

// Portfolio data with categories
export const portfolioData: PortfolioData = {
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

// Helper function to get all portfolios combined
export const getAllPortfolios = (): PortfolioItem[] => {
  return [
    ...portfolioData.jasaTugas,
    ...portfolioData.jasaDigital,
    ...portfolioData.jasaPembelajaran,
  ];
};
