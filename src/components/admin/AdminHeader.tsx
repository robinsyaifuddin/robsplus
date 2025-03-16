
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, Menu } from 'lucide-react';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AdminSidebar from './AdminSidebar';

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
        <div className="flex items-center">
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
          <h1 className="text-xl font-bold text-cyber-neonGreen md:ml-2">ROB'sPlus Admin</h1>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="border-cyber-lightBlue text-cyber-lightBlue hover:bg-cyber-lightBlue/20"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
