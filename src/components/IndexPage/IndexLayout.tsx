
import { ReactNode, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      <main className="min-h-screen bg-cyber-black pt-32 md:pt-36">
        {children}
      </main>
      <Footer />
    </PageTransition>
  );
};

export default IndexLayout;
