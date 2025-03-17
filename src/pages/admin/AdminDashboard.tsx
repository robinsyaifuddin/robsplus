
import React from 'react';
import { 
  Activity, 
  ShoppingCart, 
  FileText, 
  Image, 
  Briefcase, 
  ChevronRight, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import AnalyticsSection from '../../../components/admin/dashboard/AnalyticsSection';
import OrdersSection from '../../../components/admin/dashboard/OrdersSection';
import PortfolioSection from '../../../components/admin/dashboard/portfolio/PortfolioSection';
import ServicesSection from '../../../components/admin/dashboard/ServicesSection';

interface AdminDashboardProps {
  section?: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ section = 'dashboard' }) => {
  const navigate = useNavigate();
  
  // Show only the specified section if not on the main dashboard
  if (section === 'analytics') {
    return <AnalyticsSection />;
  }
  
  if (section === 'orders') {
    return <OrdersSection />;
  }
  
  if (section === 'services') {
    return <ServicesSection />;
  }
  
  if (section === 'portfolio') {
    return <PortfolioSection />;
  }
  
  // Dashboard Overview
  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-sm text-gray-400">Selamat datang kembali, Admin</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glassmorphism border-cyber-lightBlue/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg text-cyber-neonGreen">Pendapatan</CardTitle>
            <Activity size={20} className="text-cyber-neonGreen" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold">Rp 5.2M</p>
              <div className="flex items-center text-green-500 text-xs">
                <ArrowUpRight size={14} />
                <span>12%</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">+Rp 520.000 dari bulan lalu</p>
          </CardContent>
        </Card>
        
        <Card className="glassmorphism border-cyber-lightBlue/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg text-cyber-neonGreen">Pesanan</CardTitle>
            <ShoppingCart size={20} className="text-cyber-neonGreen" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold">82</p>
              <div className="flex items-center text-green-500 text-xs">
                <ArrowUpRight size={14} />
                <span>8%</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">+6 pesanan dari minggu lalu</p>
          </CardContent>
        </Card>
        
        <Card className="glassmorphism border-cyber-lightBlue/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg text-cyber-neonGreen">Pengguna</CardTitle>
            <Briefcase size={20} className="text-cyber-neonGreen" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold">128</p>
              <div className="flex items-center text-red-500 text-xs">
                <ArrowDownRight size={14} />
                <span>3%</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">-4 pengguna dari bulan lalu</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsSection preview={true} />
        <OrdersSection preview={true} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PortfolioSection preview={true} />
        <ServicesSection preview={true} />
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="glassmorphism border-cyber-lightBlue/30 flex-1">
          <CardHeader>
            <CardTitle className="text-lg text-cyber-neonGreen">Aktivitas Terbaru</CardTitle>
            <CardDescription className="text-cyber-lightBlue">Aktivitas admin dalam 24 jam terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-cyber-purple/20 p-2 rounded-full">
                  <FileText size={16} className="text-cyber-lightBlue" />
                </div>
                <div>
                  <p className="text-sm font-medium">Pesanan Baru #ROB-2023</p>
                  <p className="text-xs text-gray-400">Rizky Aditya telah memesan Jasa Pembuatan Website</p>
                  <p className="text-xs text-gray-400">1 jam yang lalu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-cyber-neonGreen/20 p-2 rounded-full">
                  <Image size={16} className="text-cyber-neonGreen" />
                </div>
                <div>
                  <p className="text-sm font-medium">Portfolio Ditambahkan</p>
                  <p className="text-xs text-gray-400">Admin telah menambahkan portfolio "Desain UI Website E-commerce"</p>
                  <p className="text-xs text-gray-400">3 jam yang lalu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-cyber-lightBlue/20 p-2 rounded-full">
                  <TrendingUp size={16} className="text-cyber-lightBlue" />
                </div>
                <div>
                  <p className="text-sm font-medium">Pendapatan Meningkat</p>
                  <p className="text-xs text-gray-400">Pendapatan minggu ini meningkat 15% dari minggu lalu</p>
                  <p className="text-xs text-gray-400">8 jam yang lalu</p>
                </div>
              </div>
            </div>
            
            <Button variant="link" size="sm" className="text-cyber-neonGreen mt-2 px-0">
              <span>Lihat semua aktivitas</span>
              <ChevronRight size={16} />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
