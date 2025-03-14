
// Common FAQ questions for the assistant
export const commonQuestions = [
  {
    id: 1,
    question: "Apa saja layanan yang ditawarkan ROB'sPlus?",
    answer: "ROB'sPlus menawarkan 3 kategori layanan utama: Jasa Tugas (KTI, makalah, proposal), Jasa Digital (website, desain logo, editing video), dan Jasa Pembelajaran (kursus website, desain grafis, digital marketing)."
  },
  {
    id: 2,
    question: "Berapa biaya untuk jasa pembuatan website?",
    answer: "Biaya pembuatan website bervariasi mulai dari Rp 50.000 untuk website sederhana hingga Rp 700.000 untuk website e-commerce lengkap. Untuk informasi detail dan penawaran khusus, silakan hubungi kami via WhatsApp."
  },
  {
    id: 3,
    question: "Bagaimana cara memesan jasa di ROB'sPlus?",
    answer: "Anda dapat memesan jasa melalui halaman Order di website kami atau langsung menghubungi kami via WhatsApp untuk konsultasi awal. Kami akan membantu Anda memilih paket yang sesuai dengan kebutuhan Anda."
  },
  {
    id: 4,
    question: "Berapa lama waktu pengerjaan untuk jasa tugas?",
    answer: "Waktu pengerjaan bervariasi tergantung pada kompleksitas dan panjang tugas. Untuk tugas sederhana bisa selesai dalam 1-2 hari, sedangkan untuk tugas kompleks seperti KTI membutuhkan waktu lebih lama. Kami selalu berusaha memenuhi tenggat waktu yang disepakati."
  },
  {
    id: 5,
    question: "Apakah ada jaminan revisi untuk jasa yang dipesan?",
    answer: "Ya, kami menyediakan jaminan revisi sesuai dengan paket yang Anda pilih. Jumlah revisi bervariasi tergantung paket, dan kami selalu berusaha memastikan kepuasan klien dengan hasil akhir."
  },
];

// Define the Message interface with a strict union type for sender
export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";  // This is a union type, only "user" or "bot" allowed
}

// Initial bot greeting messages - properly typed
export const initialMessages: Message[] = [
  {
    id: 1,
    text: "Halo! Saya asisten ROB'sPlus. Ada yang bisa saya bantu?",
    sender: "bot"
  }
];

// Predefined responses based on keywords
export const keywordResponses: { [key: string]: string } = {
  "harga": "Harga layanan kami bervariasi tergantung jenis dan kompleksitas. Untuk Jasa Tugas mulai dari Rp 5.000 - Rp 350.000, Jasa Digital mulai dari Rp 50.000 - Rp 700.000, dan Jasa Pembelajaran mulai dari Rp 50.000 - Rp 300.000. Untuk penawaran spesifik, silakan hubungi tim kami via WhatsApp di 082279722417.",
  "website": "Kami menyediakan jasa pembuatan website dengan berbagai pilihan mulai dari website statis sederhana hingga e-commerce lengkap. Harga mulai dari Rp 50.000 - Rp 700.000 tergantung kompleksitas. Tertarik untuk mendiskusikan lebih lanjut? Hubungi kami via WhatsApp!",
  "tugas": "Layanan Jasa Tugas kami mencakup pembuatan KTI, makalah, proposal, jurnal, presentasi, dan banyak lagi. Kami menawarkan berbagai paket mulai dari Rp 5.000 hingga Rp 350.000 tergantung kompleksitas. Untuk konsultasi lebih lanjut, silakan hubungi kami via WhatsApp.",
  "kursus": "ROB'sPlus menyediakan jasa pembelajaran dalam berbagai bidang seperti pembuatan website, desain grafis, digital marketing, dan penggunaan aplikasi Microsoft Office. Biaya mulai dari Rp 50.000 per sesi dengan format privat yang disesuaikan kebutuhan Anda.",
  "kontak": "Anda dapat menghubungi kami melalui WhatsApp di nomor 082279722417, atau melalui email di hello.robplus@gmail.com. Kami juga aktif di Instagram @ofc.robplus",
  "bayar": "Kami menerima pembayaran melalui transfer bank dan e-wallet (OVO, DANA, GoPay). Detail pembayaran akan diberikan setelah konsultasi dan kesepakatan layanan. Untuk informasi lebih lanjut, silakan hubungi kami via WhatsApp.",
  "revisi": "Kami menyediakan jaminan revisi untuk semua layanan kami. Jumlah revisi bervariasi tergantung paket yang dipilih. Kami berkomitmen untuk memberikan hasil yang memuaskan sesuai kebutuhan Anda.",
};

// Get a response based on user input
export const getResponse = (userMessage: string): string => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  // Check if any keywords match
  for (const keyword in keywordResponses) {
    if (lowerCaseMessage.includes(keyword)) {
      return keywordResponses[keyword];
    }
  }
  
  // Default response if no keywords match
  return "Terima kasih atas pertanyaan Anda. Untuk informasi lebih detail dan konsultasi langsung, silakan hubungi tim kami melalui WhatsApp di nomor 082279722417. Tim kami siap membantu Anda dengan solusi yang tepat sesuai kebutuhan.";
};
