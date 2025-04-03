
import React from 'react';
import { 
  Activity, 
  BarChart3, 
  ChevronRight,
  CreditCard,
  Database,
  Folder, 
  GalleryVerticalEnd, 
  Home, 
  Image, 
  Package2, 
  Settings 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import AnalyticsSection from '@/components/admin/dashboard/AnalyticsSection';
import OrdersSection from '@/components/admin/dashboard/OrdersSection';
import PortfolioSection from '@/components/admin/dashboard/portfolio/PortfolioSection';
import ServicesSection from '@/components/admin/dashboard/ServicesSection';

interface AdminDashboardProps {
  section?: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ section = "overview" }) => {
  const navigate = useNavigate();
  
  // Function to handle tab changes and update URL
  const handleTabChange = (value: string) => {
    navigate(`/admin/${value === 'overview' ? '' : value}`);
  };
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Home size={14} />
        <span>Admin</span>
        <ChevronRight size={14} />
        <span className="text-cyber-neonGreen font-medium">Dashboard</span>
      </div>
      
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      
      <Tabs 
        defaultValue={section} 
        className="w-full"
        onValueChange={handleTabChange}
      >
        <div className="mb-6 overflow-x-auto">
          <TabsList className="inline-flex h-10 bg-cyber-deepBlue/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-cyber-purple/20">
              <Database className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            
            <TabsTrigger value="analytics" className="data-[state=active]:bg-cyber-purple/20">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
            
            <TabsTrigger value="orders" className="data-[state=active]:bg-cyber-purple/20">
              <CreditCard className="mr-2 h-4 w-4" />
              Orders
            </TabsTrigger>
            
            <TabsTrigger value="services" className="data-[state=active]:bg-cyber-purple/20">
              <Package2 className="mr-2 h-4 w-4" />
              Services
            </TabsTrigger>
            
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-cyber-purple/20">
              <Image className="mr-2 h-4 w-4" />
              Portfolio
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnalyticsSection preview />
            <OrdersSection preview />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServicesSection />
            <PortfolioSection preview />
          </div>
          
          <div className="flex justify-end gap-4">
            <Button
              variant="outline" 
              className="border-cyber-lightBlue/30 text-cyber-lightBlue"
              onClick={() => navigate('/admin/settings')}
            >
              <Settings size={16} className="mr-2" />
              Settings
            </Button>
            
            <Button
              className="bg-cyber-purple hover:bg-cyber-purple/80"
              onClick={() => navigate('/admin/files')}
            >
              <Folder size={16} className="mr-2" />
              Manage Files
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics">
          <AnalyticsSection />
        </TabsContent>
        
        <TabsContent value="orders">
          <OrdersSection />
        </TabsContent>
        
        <TabsContent value="services">
          <ServicesSection />
        </TabsContent>
        
        <TabsContent value="portfolio">
          <PortfolioSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
