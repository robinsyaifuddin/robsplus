
import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import PricingSection from '@/components/PricingSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle direct navigation to hash sections
    const { hash } = window.location;
    if (hash) {
      // Slight delay to ensure all components are rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-cyber-black pt-32 md:pt-36">
        <Hero />
        <ServiceSection />
        <div className="container mx-auto px-6 -mt-12 mb-12">
          <div className="p-4 bg-cyber-deepBlue/30 border-l-2 border-cyber-purple rounded-r-md">
            <p className="text-sm text-gray-300"><span className="font-semibold text-cyber-lightBlue">Catatan:</span> Layanan lain di luar daftar di atas dapat didiskusikan lebih lanjut dengan tim ROB'sPlus untuk mendapatkan solusi yang sesuai dengan kebutuhan Anda. Untuk informasi lebih detail, silakan hubungi kami melalui kontak yang tersedia.</p>
          </div>
        </div>
        <PricingSection />
        <TestimonialSection />
        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
