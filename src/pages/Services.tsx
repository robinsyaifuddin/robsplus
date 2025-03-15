
import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHeader from '@/components/services/ServicesHeader';
import ServiceCategory from '@/components/services/ServiceCategory';
import PricingTiers from '@/components/services/PricingTiers';
import ServicesCTA from '@/components/services/ServicesCTA';
import { servicesDetails } from '@/components/services/servicesData';

const Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-cyber-black">
        <section className="pt-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-gradient -z-10 opacity-30"></div>
          
          <div className="container mx-auto">
            <ServicesHeader />
            
            {Object.entries(servicesDetails).map(([category, details], categoryIndex) => (
              <div key={category}>
                <ServiceCategory 
                  category={category}
                  description={details.description}
                  icon={details.icon}
                  note={details.note}
                  items={details.items}
                  categoryIndex={categoryIndex}
                />
                
                <PricingTiers 
                  category={category}
                  tiers={details.pricingTiers}
                />
              </div>
            ))}
            
            <ServicesCTA />
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Services;
