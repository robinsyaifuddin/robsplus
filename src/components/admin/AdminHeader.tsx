
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, Menu, Home } from 'lucide-react';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AdminSidebar from './AdminSidebar';
import NavLogo from '@/components/navbar/NavLogo';

const AdminHeader = () => {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <header className="border-b border-cyber-lightBlue/20 p-4 glassmorphism shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-cyber-lightBlue">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 glassmorphism">
              <AdminSidebar isMobile />
            </SheetContent>
          </Sheet>
          
          <NavLogo isScrolled={true} />
          
          <div className="hidden md:flex">
            <h1 className="text-xl font-bold text-cyber-neonGreen">Admin Panel</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="text-xs hidden sm:flex items-center gap-1 text-cyber-lightBlue hover:text-white transition-colors"
          >
            <Home size={14} />
            <span>Beranda</span>
          </Link>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="border-cyber-lightBlue text-cyber-lightBlue hover:bg-cyber-lightBlue/20"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
