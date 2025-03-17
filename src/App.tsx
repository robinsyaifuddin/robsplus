
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AdminAuthProvider } from '@/contexts/AdminAuthContext';
import { PortfolioProvider } from '@/contexts/PortfolioContext';
import './App.css';

// Pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Order from '@/pages/Order';
import NotFound from '@/pages/NotFound';

// Admin pages
import AdminLayout from '@/pages/admin/AdminLayout';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';

// Page transition
import PageTransition from '@/components/PageTransition';

// Scroll to top for React Router
import ScrollToTop from '@/components/ui/scroll-to-top';

function App() {
  return (
    <AdminAuthProvider>
      <PortfolioProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/order" element={<PageTransition><Order /></PageTransition>} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="analytics" element={<AdminDashboard section="analytics" />} />
              <Route path="orders" element={<AdminDashboard section="orders" />} />
              <Route path="services" element={<AdminDashboard section="services" />} />
              <Route path="portfolio" element={<AdminDashboard section="portfolio" />} />
            </Route>
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster position="top-right" />
        </Router>
      </PortfolioProvider>
    </AdminAuthProvider>
  );
}

export default App;
