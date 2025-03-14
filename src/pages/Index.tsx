
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
        <PricingSection />
        <TestimonialSection />
        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
