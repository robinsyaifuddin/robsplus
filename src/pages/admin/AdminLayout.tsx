
import { Outlet } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import PageTransition from '@/components/PageTransition';

const AdminLayout = () => {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <PageTransition>
      <div className="flex min-h-screen bg-gradient-to-br from-cyber-darkBlue via-black to-cyber-darkBlue">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminLayout;
