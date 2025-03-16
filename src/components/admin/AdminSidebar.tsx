
import { NavLink } from 'react-router-dom';
import { BarChart3, Home, Settings, ShoppingCart, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminSidebarProps {
  isMobile?: boolean;
}

const AdminSidebar = ({ isMobile = false }: AdminSidebarProps) => {
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/admin' },
    { icon: BarChart3, label: 'Analisis', path: '/admin/analytics' },
    { icon: ShoppingCart, label: 'Riwayat Order', path: '/admin/orders' },
    { icon: Settings, label: 'Kelola Layanan', path: '/admin/services' },
    { icon: Briefcase, label: 'Portofolio', path: '/admin/portfolio' },
  ];

  return (
    <aside className={cn(
      "border-r border-cyber-lightBlue/20 glassmorphism transition-all h-[calc(100vh-64px)]",
      isMobile ? "w-full h-full" : "hidden md:block w-64"
    )}>
      <div className="p-6">
        <h2 className="text-lg font-bold text-cyber-neonGreen mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-cyber-neonGreen text-black font-medium"
                    : "text-cyber-lightBlue hover:bg-cyber-lightBlue/10"
                )
              }
              end={item.path === '/admin'}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
