
import { useState } from 'react';
import { Portfolio } from '../types';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { toast } from 'sonner';

export const usePortfolioHandlers = () => {
  const { portfolios, setPortfolios } = usePortfolio();
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
    setHasUnsavedChanges(true);
    resetForm();
    
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
    setHasUnsavedChanges(true);
    resetForm();
    
    toast.success('Portofolio berhasil diperbarui', {
      description: 'Jangan lupa untuk menyimpan perubahan'
    });
  };

  const handleDeletePortfolio = () => {
    if (!currentPortfolio) return;
    
    const filteredPortfolios = portfolios.filter(p => p.id !== currentPortfolio.id);
    setPortfolios(filteredPortfolios);
    setHasUnsavedChanges(true);
    setCurrentPortfolio(null);
    
    toast.success('Portofolio berhasil dihapus', {
      description: 'Jangan lupa untuk menyimpan perubahan'
    });
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

  return {
    newPortfolio,
    setNewPortfolio,
    currentPortfolio,
    setCurrentPortfolio,
    selectedFile,
    previewUrl,
    hasUnsavedChanges,
    handleAddPortfolio,
    handleEditPortfolio,
    handleDeletePortfolio,
    handleFileChange,
    clearFileSelection,
    resetForm
  };
};
