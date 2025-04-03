
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-black p-4">
      <div className="glassmorphism p-8 md:p-12 rounded-lg max-w-lg w-full text-center border border-cyber-purple/30">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={64} className="text-cyber-neonGreen" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-cyber-neonGreen">404</h1>
        <h2 className="text-xl text-cyber-lightBlue mb-4">Halaman Tidak Ditemukan</h2>
        
        <p className="text-gray-300 mb-6">
          Maaf, halaman yang Anda cari tidak ada. URL <span className="text-cyber-purple font-mono">{location.pathname}</span> tidak ditemukan di server kami.
        </p>
        
        <div className="space-y-4">
          <p className="text-gray-400 text-sm">
            Jika Anda menggunakan domain kustom yang terhubung dengan Vercel, pastikan konfigurasi berikut telah diatur dengan benar:
          </p>
          
          <div className="bg-cyber-deepBlue/50 p-4 rounded-md text-left text-sm mb-6">
            <p className="text-white">1. Verifikasi pengaturan domain di Vercel</p>
            <p className="text-white">2. Pastikan catatan DNS sudah benar</p>
            <p className="text-white">3. Periksa konfigurasi rewrites dan redirects</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="border-cyber-purple/30">
            <Link to="/" className="flex items-center gap-2">
              <Home size={16} />
              <span>Kembali ke Beranda</span>
            </Link>
          </Button>
          
          <Button asChild className="bg-cyber-purple hover:bg-cyber-purple/80">
            <a 
              href="https://vercel.com/docs/concepts/projects/domains" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              <span>Panduan Konfigurasi Vercel</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
