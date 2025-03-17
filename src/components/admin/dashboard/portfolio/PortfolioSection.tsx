
import React, { useState } from 'react';
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
import PortfolioPreviewCard from './PortfolioPreviewCard';
import { usePortfolioHandlers } from './hooks/usePortfolioHandlers';

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ preview = false }) => {
  // Use our context
  const { portfolios, savePortfolios } = usePortfolio();
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  const {
    newPortfolio,
    currentPortfolio,
    selectedFile,
    previewUrl,
    hasUnsavedChanges,
    handleAddPortfolio,
    handleEditPortfolio,
    handleDeletePortfolio,
    handleFileChange,
    clearFileSelection,
    resetForm,
    setCurrentPortfolio
  } = usePortfolioHandlers();

  const openEditDialog = (portfolio: Portfolio) => {
    setCurrentPortfolio(portfolio);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (portfolio: Portfolio) => {
    setCurrentPortfolio(portfolio);
    setIsDeleteDialogOpen(true);
  };

  const handleSaveChanges = () => {
    savePortfolios();
    toast.success('Portfolio berhasil disimpan');
  };

  // Preview mode for the dashboard overview
  if (preview) {
    return <PortfolioPreviewCard portfolios={portfolios} />;
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
