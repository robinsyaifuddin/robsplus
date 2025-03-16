
import { ReactNode, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ui/scroll-to-top';

interface IndexLayoutProps {
  children: ReactNode;
}

const IndexLayout = ({ children }: IndexLayoutProps) => {
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
      <main className="min-h-screen bg-cyber-black pt-24 md:pt-28">
        <div className="space-y-16 md:space-y-20">
          {children}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </PageTransition>
  );
};

export default IndexLayout;
