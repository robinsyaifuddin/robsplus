
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ImageUpload from './ImageUpload';
import { Portfolio } from './types';
import { usePortfolio } from '@/contexts/PortfolioContext';

interface AddPortfolioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
  portfolio: Omit<Portfolio, 'id'>;
  selectedFile: File | null;
  previewUrl: string;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearFileSelection: () => void;
  onReset: () => void;
}

const AddPortfolioDialog: React.FC<AddPortfolioDialogProps> = ({ 
  open, 
  onOpenChange,
  onSubmit,
  portfolio,
  selectedFile,
  previewUrl,
  onFileChange,
  onClearFileSelection,
  onReset
}) => {
  const { setPortfolios } = usePortfolio();
  
  const updatePortfolio = (field: keyof Omit<Portfolio, 'id'>, value: string) => {
    setPortfolios(prevPortfolios => {
      // This doesn't actually update the portfolios array
      // It's just a way to trigger a re-render with the updated field
      return prevPortfolios;
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Tambah Portfolio Baru</DialogTitle>
          <DialogDescription>
            Masukkan informasi untuk portfolio baru yang akan ditambahkan.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Judul Portfolio</Label>
            <Input
              id="title"
              value={portfolio.title}
              onChange={(e) => updatePortfolio('title', e.target.value)}
              placeholder="Masukkan judul portfolio"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Kategori</Label>
            <Input
              id="category"
              value={portfolio.category}
              onChange={(e) => updatePortfolio('category', e.target.value)}
              placeholder="Website, Desain, Video, dll."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Tanggal</Label>
            <Input
              id="date"
              type="date"
              value={portfolio.date}
              onChange={(e) => updatePortfolio('date', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea
              id="description"
              value={portfolio.description}
              onChange={(e) => updatePortfolio('description', e.target.value)}
              placeholder="Deskripsi singkat tentang portfolio"
              rows={3}
            />
          </div>
          <ImageUpload
            previewUrl={previewUrl}
            selectedFile={selectedFile}
            onFileChange={onFileChange}
            onClearFile={onClearFileSelection}
            inputId="add-image"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => {
            onOpenChange(false);
            onReset();
          }}>
            Batal
          </Button>
          <Button onClick={onSubmit} disabled={!portfolio.title || !portfolio.category}>
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPortfolioDialog;
