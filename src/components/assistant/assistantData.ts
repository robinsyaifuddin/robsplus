
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
  {
    id: 6,
    question: "Bagaimana proses pembayaran di ROB'sPlus?",
    answer: "Kami menerapkan sistem pembayaran yang fleksibel. Untuk sebagian layanan, kami meminta DP 50% di awal dan pelunasan setelah pekerjaan selesai. Pembayaran dapat dilakukan melalui transfer bank atau e-wallet seperti OVO, DANA, dan GoPay."
  },
  {
    id: 7,
    question: "Apakah ROB'sPlus menyediakan kursus digital marketing?",
    answer: "Ya, kami menyediakan kursus digital marketing dengan materi yang komprehensif mencakup SEO, social media marketing, content marketing, dan Google Ads. Kursus dapat dilakukan secara privat atau grup kecil dengan jadwal yang fleksibel."
  },
  {
    id: 8,
    question: "Dimana lokasi kantor ROB'sPlus?",
    answer: "Saat ini ROB'sPlus beroperasi secara online, namun kami dapat melakukan pertemuan tatap muka jika diperlukan untuk klien di area tertentu. Silakan hubungi kami via WhatsApp untuk informasi lebih lanjut."
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
    text: "Halo! Saya asisten ROB'sPlus. Ada yang bisa saya bantu terkait layanan kami? Anda bisa bertanya tentang jasa tugas, jasa digital, atau jasa pembelajaran yang kami tawarkan.",
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
  "promo": "Kami sering mengadakan promo khusus untuk berbagai layanan kami. Saat ini, kami memiliki diskon 20% untuk pembuatan website dan 15% untuk jasa tugas bagi pelanggan baru. Hubungi kami untuk informasi promo terbaru.",
  "waktu": "Waktu pengerjaan bervariasi tergantung jenis layanan. Untuk jasa tugas sederhana, kami bisa menyelesaikan dalam 1-2 hari. Website membutuhkan waktu 3-7 hari, dan jasa editing video sekitar 2-5 hari tergantung kompleksitas.",
  "desain": "Kami menawarkan jasa desain grafis meliputi desain logo, banner, poster, brosur, kartu nama, dan berbagai kebutuhan visual lainnya. Harga mulai dari Rp 50.000 tergantung kompleksitas desain yang diinginkan.",
  "video": "Jasa editing video kami mencakup video promosi, company profile, wedding, event documentation, dan konten media sosial. Harga mulai dari Rp 100.000 tergantung durasi dan tingkat kompleksitas editing.",
  "makalah": "Untuk jasa pembuatan makalah, kami menawarkan harga mulai dari Rp 30.000 - Rp 150.000 tergantung topik, panjang, dan tenggat waktu pengerjaan. Kami memastikan kualitas konten dan originalitas tulisan.",
  "skripsi": "Kami menyediakan jasa konsultasi dan bantuan penulisan skripsi/KTI dengan harga mulai dari Rp 200.000 tergantung bidang ilmu dan kompleksitas penelitian. Silakan hubungi kami untuk diskusi lebih lanjut.",
};

// Advanced pattern recognition for better response matching
const patterns = [
  { regex: /\b(biaya|harga|tarif|berapa|harganya)\b/i, key: "harga" },
  { regex: /\b(website|web|situs)\b/i, key: "website" },
  { regex: /\b(tugas|kti|makalah|paper|esai)\b/i, key: "tugas" },
  { regex: /\b(kursus|pembelajaran|belajar|les|privat)\b/i, key: "kursus" },
  { regex: /\b(kontak|hubungi|telepon|email|wa|whatsapp)\b/i, key: "kontak" },
  { regex: /\b(bayar|pembayaran|transfer|ovo|dana|gopay)\b/i, key: "bayar" },
  { regex: /\b(revisi|ubah|koreksi|perubahan)\b/i, key: "revisi" },
  { regex: /\b(promo|diskon|potongan|cashback)\b/i, key: "promo" },
  { regex: /\b(waktu|lama|durasi|pengerjaan|deadline)\b/i, key: "waktu" },
  { regex: /\b(desain|design|logo|banner|grafis)\b/i, key: "desain" },
  { regex: /\b(video|editing|youtube|konten)\b/i, key: "video" },
  { regex: /\b(makalah|paper|essay|artikel)\b/i, key: "makalah" },
  { regex: /\b(skripsi|thesis|tesis|kti)\b/i, key: "skripsi" },
];

// Context-aware response function
export const getResponse = (userMessage: string): string => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  // Check if there's a direct question match from common questions
  const exactQuestion = commonQuestions.find(q => 
    q.question.toLowerCase() === lowerCaseMessage || 
    q.question.toLowerCase().includes(lowerCaseMessage)
  );
  
  if (exactQuestion) {
    return exactQuestion.answer;
  }
  
  // Check pattern matching for more natural language processing
  for (const pattern of patterns) {
    if (pattern.regex.test(lowerCaseMessage) && keywordResponses[pattern.key]) {
      return keywordResponses[pattern.key];
    }
  }
  
  // Check if any keywords match (fallback)
  for (const keyword in keywordResponses) {
    if (lowerCaseMessage.includes(keyword)) {
      return keywordResponses[keyword];
    }
  }
  
  // If no match is found, provide a smart default response
  if (lowerCaseMessage.length < 10) {
    return "Mohon berikan pertanyaan yang lebih detail agar saya dapat membantu Anda dengan lebih baik. Anda dapat bertanya tentang layanan kami, harga, atau proses pemesanan.";
  } else if (lowerCaseMessage.includes("terima kasih") || lowerCaseMessage.includes("makasih")) {
    return "Sama-sama! Senang dapat membantu Anda. Jika ada pertanyaan lain, jangan ragu untuk bertanya kembali.";
  } else if (lowerCaseMessage.includes("hai") || lowerCaseMessage.includes("halo") || lowerCaseMessage.includes("hello")) {
    return "Halo! Selamat datang di layanan ROB'sPlus. Ada yang bisa saya bantu hari ini?";
  }
  
  // Default response if no patterns match
  return "Terima kasih atas pertanyaan Anda. Untuk informasi lebih detail tentang layanan ROB'sPlus, silakan hubungi tim kami melalui WhatsApp di nomor 082279722417. Tim kami siap membantu Anda dengan solusi yang tepat sesuai kebutuhan.";
};
