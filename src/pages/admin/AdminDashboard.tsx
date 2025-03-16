
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Eye, ShoppingCart, Users } from 'lucide-react';
import AnalyticsSection from '@/components/admin/dashboard/AnalyticsSection';
import OrdersSection from '@/components/admin/dashboard/OrdersSection';
import ServicesSection from '@/components/admin/dashboard/ServicesSection';
import { useNavigate } from 'react-router-dom';

// Mock data for stats
const statsData = [
  {
    title: "Total Pengunjung",
    value: "12,234",
    change: "+12%",
    icon: <Eye className="h-4 w-4 text-cyan-500" />,
    description: "vs bulan lalu"
  },
  {
    title: "Total Order",
    value: "573",
    change: "+5.3%",
    icon: <ShoppingCart className="h-4 w-4 text-green-500" />,
    description: "vs bulan lalu"
  },
  {
    title: "Pengunjung Aktif",
    value: "24",
    change: "+20%",
    icon: <Users className="h-4 w-4 text-indigo-500" />,
    description: "saat ini"
  },
  {
    title: "Layanan Populer",
    value: "Jasa Tugas",
    icon: <BarChart3 className="h-4 w-4 text-yellow-500" />,
    description: "bulan ini"
  }
];

interface AdminDashboardProps {
  section?: 'analytics' | 'orders' | 'services';
}

const AdminDashboard = ({ section }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  // Set active tab based on the route section
  useEffect(() => {
    if (section) {
      setActiveTab(section);
    }
  }, [section]);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    if (value !== 'overview') {
      navigate(`/admin/${value}`);
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-cyber-neonGreen">Dashboard</h1>
      
      {!section && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <Card key={index} className="glassmorphism border-cyber-lightBlue/30">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-cyber-lightBlue">
                  {stat.title}
                </CardTitle>
                <div className="bg-cyber-darkBlue rounded-full p-2">{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyber-neonGreen">{stat.value}</div>
                {stat.change && (
                  <p className="text-xs text-cyber-lightBlue flex items-center gap-1">
                    <span className={stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                      {stat.change}
                    </span>
                    <span>{stat.description}</span>
                  </p>
                )}
                {!stat.change && (
                  <p className="text-xs text-cyber-lightBlue">{stat.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      <Tabs 
        value={activeTab} 
        onValueChange={handleTabChange}
        className="space-y-4"
      >
        <TabsList className="bg-cyber-darkBlue/50 border border-cyber-lightBlue/20">
          <TabsTrigger value="overview" className="data-[state=active]:bg-cyber-neonGreen data-[state=active]:text-black">
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-cyber-neonGreen data-[state=active]:text-black">
            Analisis Website
          </TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-cyber-neonGreen data-[state=active]:text-black">
            Riwayat Order
          </TabsTrigger>
          <TabsTrigger value="services" className="data-[state=active]:bg-cyber-neonGreen data-[state=active]:text-black">
            Kelola Layanan
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card className="glassmorphism border-cyber-lightBlue/30">
            <CardHeader>
              <CardTitle className="text-cyber-neonGreen">Selamat Datang di Dashboard Admin</CardTitle>
              <CardDescription className="text-cyber-lightBlue">
                Pantau dan kelola website ROB'sPlus dari satu tempat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-cyber-lightBlue">
                Gunakan tab di atas untuk navigasi ke bagian yang berbeda dari dashboard admin.
                Di sini Anda dapat melihat analisis website, mengelola layanan, dan melihat riwayat order.
              </p>
            </CardContent>
          </Card>
          
          {/* Preview sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnalyticsSection preview />
            <OrdersSection preview />
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
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
