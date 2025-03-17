
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Portfolio, PortfolioSectionProps } from './types';
import PortfolioTable from './PortfolioTable';
import AddPortfolioDialog from './AddPortfolioDialog';
import EditPortfolioDialog from './EditPortfolioDialog';
import DeletePortfolioDialog from './DeletePortfolioDialog';

const initialPortfolios: Portfolio[] = [
  {
    id: '1',
    title: 'Website E-Commerce Toko Batik',
    description: 'Pembuatan website toko online untuk penjualan produk batik dengan fitur pembayaran dan katalog produk yang lengkap.',
    imageUrl: '/placeholder.svg',
    category: 'Website',
    date: '2023-05-15'
  },
  {
    id: '2',
    title: 'Desain Logo Brand Fashion',
    description: 'Perancangan logo untuk brand fashion lokal dengan konsep minimalis dan modern yang mencerminkan nilai merek.',
    imageUrl: '/placeholder.svg',
    category: 'Desain',
    date: '2023-06-22'
  },
  {
    id: '3',
    title: 'Aplikasi Manajemen Inventaris',
    description: 'Pengembangan aplikasi untuk memudahkan pengusaha kecil melacak inventaris, penjualan, dan pembelian barang.',
    imageUrl: '/placeholder.svg',
    category: 'Aplikasi',
    date: '2023-07-10'
  },
  {
    id: '4',
    title: 'Video Promosi Produk Makanan',
    description: 'Pembuatan video iklan produk makanan untuk platform social media dengan durasi 1 menit yang memperlihatkan value proposition.',
    imageUrl: '/placeholder.svg',
    category: 'Video',
    date: '2023-08-05'
  }
];

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ preview = false }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>(initialPortfolios);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [newPortfolio, setNewPortfolio] = useState<Omit<Portfolio, 'id'>>({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [currentPortfolio, setCurrentPortfolio] = useState<Portfolio | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleAddPortfolio = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
    }

    const newId = (portfolios.length + 1).toString();
    const portfolioWithId = { 
      ...newPortfolio, 
      id: newId,
      imageUrl: previewUrl || '/placeholder.svg' 
    };
    
    setPortfolios([...portfolios, portfolioWithId]);
    setIsAddDialogOpen(false);
    resetForm();
    
    toast.success('Portofolio berhasil ditambahkan');
  };

  const handleEditPortfolio = () => {
    if (!currentPortfolio) return;
    
    if (selectedFile) {
      console.log('Uploading updated file:', selectedFile);
    }

    const updatedPortfolios = portfolios.map(p => 
      p.id === currentPortfolio.id 
        ? { 
            ...currentPortfolio, 
            imageUrl: previewUrl || currentPortfolio.imageUrl 
          } 
        : p
    );
    
    setPortfolios(updatedPortfolios);
    setIsEditDialogOpen(false);
    resetForm();
    
    toast.success('Portofolio berhasil diperbarui');
  };

  const handleDeletePortfolio = () => {
    if (!currentPortfolio) return;
    
    const filteredPortfolios = portfolios.filter(p => p.id !== currentPortfolio.id);
    setPortfolios(filteredPortfolios);
    setIsDeleteDialogOpen(false);
    setCurrentPortfolio(null);
    
    toast.success('Portofolio berhasil dihapus');
  };

  const resetForm = () => {
    setNewPortfolio({
      title: '',
      description: '',
      imageUrl: '',
      category: '',
      date: new Date().toISOString().split('T')[0]
    });
    setCurrentPortfolio(null);
    setSelectedFile(null);
    setPreviewUrl('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setSelectedFile(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const clearFileSelection = () => {
    setSelectedFile(null);
    setPreviewUrl('');
  };

  const openEditDialog = (portfolio: Portfolio) => {
    setCurrentPortfolio(portfolio);
    setPreviewUrl(portfolio.imageUrl);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (portfolio: Portfolio) => {
    setCurrentPortfolio(portfolio);
    setIsDeleteDialogOpen(true);
  };

  const displayPortfolios = preview ? portfolios.slice(0, 3) : portfolios;

  return (
    <Card className="w-full shadow-md border-gray-800/20">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Portfolio</CardTitle>
            <CardDescription>Daftar portfolio dan karya yang telah dibuat.</CardDescription>
          </div>
          {!preview && (
            <Button 
              onClick={() => setIsAddDialogOpen(true)} 
              className="flex items-center gap-1"
            >
              <PlusCircle size={16} />
              <span>Tambah</span>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <PortfolioTable 
          portfolios={displayPortfolios}
          preview={preview}
          onEdit={openEditDialog}
          onDelete={openDeleteDialog}
        />
      </CardContent>

      <AddPortfolioDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSubmit={handleAddPortfolio}
        portfolio={newPortfolio}
        setPortfolio={setNewPortfolio}
        selectedFile={selectedFile}
        previewUrl={previewUrl}
        onFileChange={handleFileChange}
        onClearFileSelection={clearFileSelection}
        onReset={resetForm}
      />

      <EditPortfolioDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onSubmit={handleEditPortfolio}
        portfolio={currentPortfolio}
        setPortfolio={setCurrentPortfolio}
        selectedFile={selectedFile}
        previewUrl={previewUrl}
        onFileChange={handleFileChange}
        onClearFileSelection={clearFileSelection}
        onReset={resetForm}
      />

      <DeletePortfolioDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeletePortfolio}
        portfolio={currentPortfolio}
        onReset={resetForm}
      />
    </Card>
  );
};

export default PortfolioSection;
