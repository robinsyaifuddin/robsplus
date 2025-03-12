
import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';

const Order = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-cyber-black py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">
              Order Layanan
            </span>
          </h1>
          <div className="glassmorphism p-6 md:p-8 rounded-lg">
            <p className="text-gray-300 text-center mb-8">
              Silahkan isi formulir di bawah ini untuk memesan layanan. Tim kami akan segera menghubungi Anda.
            </p>
            <OrderForm />
          </div>
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Order;
