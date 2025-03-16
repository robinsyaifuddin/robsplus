
export const navLinks = [
  { text: 'Beranda', href: '/' },
  { 
    text: 'Layanan', 
    href: '/services',
    isDropdown: true,
    dropdownItems: [
      { text: 'Jasa Tugas', href: '/services#jasa-tugas' },
      { text: 'Jasa Digital', href: '/services#jasa-digital' },
      { text: 'Jasa Pembelajaran', href: '/services#jasa-pembelajaran' }
    ]
  },
  { text: 'Harga', href: '/#pricing' },
  { text: 'Portofolio', href: '/#portfolio' },
  { text: 'Tentang Kami', href: '/about' },
  { text: 'Admin', href: '/admin/login', isAdmin: true }
];
