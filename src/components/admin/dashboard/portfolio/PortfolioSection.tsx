
import React, { useState, useEffect } from 'react';
import { PortfolioSectionProps } from './types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PortfolioTable from './PortfolioTable';
import { PlusCircle, Save } from 'lucide-react';
import { Portfolio } from './types';
import AddPortfolioDialog from './AddPortfolioDialog';
import EditPortfolioDialog from './EditPortfolioDialog';
import DeletePortfolioDialog from './DeletePortfolioDialog';
import { toast } from 'sonner';
import { usePortfolio } from '@/contexts/PortfolioContext';

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ preview = false }) => {
  // Use our context instead of local state
  const { portfolios, setPortfolios, savePortfolios } = usePortfolio();
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
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
    setHasUnsavedChanges(true);
    
    toast.success('Portofolio berhasil ditambahkan', {
      description: 'Jangan lupa untuk menyimpan perubahan'
    });
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
    setHasUnsavedChanges(true);
    
    toast.success('Portofolio berhasil diperbarui', {
      description: 'Jangan lupa untuk menyimpan perubahan'
    });
  };

  const handleDeletePortfolio = () => {
    if (!currentPortfolio) return;
    
    const filteredPortfolios = portfolios.filter(p => p.id !== currentPortfolio.id);
    setPortfolios(filteredPortfolios);
    setIsDeleteDialogOpen(false);
    setCurrentPortfolio(null);
    setHasUnsavedChanges(true);
    
    toast.success('Portofolio berhasil dihapus', {
      description: 'Jangan lupa untuk menyimpan perubahan'
    });
  };

  const handleSaveChanges = () => {
    savePortfolios();
    setHasUnsavedChanges(false);
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

  // Preview mode for the dashboard overview
  if (preview) {
    return (
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <CardTitle className="text-lg text-cyber-neonGreen">Portofolio</CardTitle>
          <CardDescription className="text-cyber-lightBlue">Kelola portofolio ROB'sPlus</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {portfolios.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-md bg-cyber-deepBlue/50">
                <div className="w-10 h-10 rounded overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-cyber-lightBlue">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="link" size="sm" className="text-cyber-neonGreen mt-2 w-full">
            Kelola Portofolio
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg text-cyber-neonGreen">Portofolio</CardTitle>
              <CardDescription className="text-cyber-lightBlue">Kelola portofolio ROB'sPlus</CardDescription>
            </div>
            <div className="flex gap-2">
              {hasUnsavedChanges && (
                <Button 
                  onClick={handleSaveChanges} 
                  className="flex items-center gap-1 bg-cyber-neonGreen text-black hover:bg-cyber-neonGreen/80"
                >
                  <Save size={16} />
                  <span>Simpan Perubahan</span>
                </Button>
              )}
              <Button 
                onClick={() => setIsAddDialogOpen(true)} 
                className="flex items-center gap-1"
              >
                <PlusCircle size={16} />
                <span>Tambah</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <PortfolioTable 
            portfolios={portfolios} 
            onEdit={openEditDialog} 
            onDelete={openDeleteDialog} 
          />
        </CardContent>
      </Card>

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
    </div>
  );
};

export default PortfolioSection;
