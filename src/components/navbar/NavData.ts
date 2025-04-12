
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
  { text: 'Portofolio', href: '/#portfolio' },
  { text: 'Tentang Kami', href: '/about' }
];

// Separate hidden admin link (not displayed in menu)
export const adminLink = { text: 'Admin', href: '/admin/login', isHidden: true };
