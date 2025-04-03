
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AdminAuthProvider } from '@/contexts/AdminAuthContext';
import { PortfolioProvider } from '@/contexts/PortfolioContext';
import { Helmet } from 'react-helmet';
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
import AdminRoute from '@/components/admin/AdminRoute';

// Scroll to top for React Router
import ScrollToTop from '@/components/ui/scroll-to-top';

function App() {
  return (
    <AdminAuthProvider>
      <PortfolioProvider>
        <Helmet>
          <title>Official ROB'sPlus</title>
          <meta name="description" content="ROB'sPlus - Layanan jasa digital, pembuatan web, desain, dan jasa tugas." />
        </Helmet>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/order" element={<Order />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="analytics" element={<AdminDashboard section="analytics" />} />
              <Route path="orders" element={<AdminDashboard section="orders" />} />
              <Route path="services" element={<AdminDashboard section="services" />} />
              <Route path="portfolio" element={<AdminDashboard section="portfolio" />} />
            </Route>
            
            {/* 404 */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster position="top-right" />
        </Router>
      </PortfolioProvider>
    </AdminAuthProvider>
  );
}

export default App;
