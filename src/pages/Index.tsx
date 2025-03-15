
import IndexLayout from '@/components/IndexPage/IndexLayout';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import ServiceNote from '@/components/IndexPage/ServiceNote';
import PricingSection from '@/components/PricingSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <IndexLayout>
      <Hero />
      <ServiceSection />
      <ServiceNote />
      <PricingSection />
      <TestimonialSection />
      <ContactSection />
    </IndexLayout>
  );
};

export default Index;
