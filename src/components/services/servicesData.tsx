
import { FileText, Layout, GraduationCap } from 'lucide-react';
import { ServicesData } from './types';

export const servicesDetails: ServicesData = {
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
    ],
    pricingTiers: [
      {
        title: "Paket Dasar (Rp 5.000 - Rp 50.000)",
        priceRange: "Rp 5.000 - Rp 50.000",
        features: [
          "Cocok untuk tugas-tugas ringan seperti esai pendek, laporan sederhana, atau perapihan format.",
          "Fokus pada penulisan dengan tata bahasa yang baik dan struktur yang rapi.",
          "Parafrasa dasar untuk menurunkan plagiasi."
        ]
      },
      {
        title: "Paket Menengah (Rp 50.000 - Rp 150.000)",
        priceRange: "Rp 50.000 - Rp 150.000",
        features: [
          "Untuk tugas-tugas yang lebih kompleks seperti makalah, proposal, atau PPT presentasi.",
          "Penelitian mendalam, analisis data (jika diperlukan), dan penulisan yang lebih terstruktur.",
          "Penurunan plagiasi dengan teknik yang lebih canggih."
        ]
      },
      {
        title: "Paket Lanjutan (Rp 150.000 - Rp 350.000 atau lebih)",
        priceRange: "Rp 150.000 - Rp 350.000+",
        features: [
          "Untuk KTI, jurnal, atau tugas-tugas penelitian yang membutuhkan keahlian khusus.",
          "Penelitian ekstensif, analisis statistik (jika diperlukan), dan penulisan dengan standar akademik tinggi.",
          "Konsultasi intensif dan revisi berkala."
        ]
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
    ],
    pricingTiers: [
      {
        title: "Paket Pemula (Rp 50.000 - Rp 150.000)",
        priceRange: "Rp 50.000 - Rp 150.000",
        features: [
          "Desain logo sederhana, poster promosi dasar, atau editing video pendek.",
          "Pembuatan website statis dengan template sederhana.",
          "Peningkatan followers/likes/komentar dalam jumlah terbatas."
        ]
      },
      {
        title: "Paket Profesional (Rp 150.000 - Rp 400.000)",
        priceRange: "Rp 150.000 - Rp 400.000",
        features: [
          "Desain logo/poster yang lebih kompleks dan unik, editing video dengan efek khusus.",
          "Pembuatan website dinamis dengan fitur-fitur tambahan.",
          "Peningkatan followers/likes/komentar yang lebih signifikan.",
          "Pelaporan akun sosial media."
        ]
      },
      {
        title: "Paket Premium (Rp 400.000 - Rp 700.000)",
        priceRange: "Rp 400.000 - Rp 700.000+",
        features: [
          "Pembuatan Website E-commerce, atau website dengan tingkat kesulitan sangat tinggi.",
          "Editing film pendek, atau iklan komersil.",
          "Perencanaan branding sosial media, dan peningkatan pengikut secara organik.",
          "Penghapusan akun sosial media yang bermasalah."
        ]
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
    ],
    pricingTiers: [
      {
        title: "Sesi Individual (Rp 50.000 - Rp 100.000 per sesi)",
        priceRange: "Rp 50.000 - Rp 100.000/sesi",
        features: [
          "Pembelajaran privat dengan fokus pada topik tertentu.",
          "Sesi tanya jawab dan latihan praktis.",
          "Pembelajaran dasar."
        ]
      },
      {
        title: "Paket Dasar (Rp 100.000 - Rp 200.000)",
        priceRange: "Rp 100.000 - Rp 200.000",
        features: [
          "Kursus singkat dengan materi dasar dan latihan.",
          "Akses ke materi pembelajaran online atau offline.",
          "Pembelajaran tingkat menengah."
        ]
      },
      {
        title: "Paket Lanjutan (Rp 200.000 - Rp 300.000 atau lebih)",
        priceRange: "Rp 200.000 - Rp 300.000+",
        features: [
          "Kursus intensif dengan materi mendalam dan proyek praktik.",
          "Mentoring dan dukungan berkelanjutan.",
          "Pembelajaran tingkat lanjut."
        ]
      }
    ]
  }
};
