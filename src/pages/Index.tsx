
import { Fragment } from 'react';
import IndexLayout from '@/components/IndexPage/IndexLayout';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import TestimonialSection from '@/components/TestimonialSection';

const Index = () => {
  return (
    <IndexLayout>
      <Hero />
      <ServiceSection />
      <TestimonialSection />
      <PortfolioSection />
      <ContactSection />
    </IndexLayout>
  );
};

export default Index;
