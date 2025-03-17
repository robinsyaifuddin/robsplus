
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

interface EditPortfolioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
  portfolio: Portfolio | null;
  setPortfolio: React.Dispatch<React.SetStateAction<Portfolio | null>>;
  selectedFile: File | null;
  previewUrl: string;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearFileSelection: () => void;
  onReset: () => void;
}

const EditPortfolioDialog: React.FC<EditPortfolioDialogProps> = ({ 
  open, 
  onOpenChange,
  onSubmit,
  portfolio,
  setPortfolio,
  selectedFile,
  previewUrl,
  onFileChange,
  onClearFileSelection,
  onReset
}) => {
  if (!portfolio) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Edit Portfolio</DialogTitle>
          <DialogDescription>
            Ubah informasi untuk portfolio yang dipilih.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="edit-title">Judul Portfolio</Label>
            <Input
              id="edit-title"
              value={portfolio.title}
              onChange={(e) => setPortfolio({...portfolio, title: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-category">Kategori</Label>
            <Input
              id="edit-category"
              value={portfolio.category}
              onChange={(e) => setPortfolio({...portfolio, category: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-date">Tanggal</Label>
            <Input
              id="edit-date"
              type="date"
              value={portfolio.date}
              onChange={(e) => setPortfolio({...portfolio, date: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-description">Deskripsi</Label>
            <Textarea
              id="edit-description"
              value={portfolio.description}
              onChange={(e) => setPortfolio({...portfolio, description: e.target.value})}
              rows={3}
            />
          </div>
          <ImageUpload
            previewUrl={previewUrl}
            selectedFile={selectedFile}
            onFileChange={onFileChange}
            onClearFile={onClearFileSelection}
            inputId="edit-image"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => {
            onOpenChange(false);
            onReset();
          }}>
            Batal
          </Button>
          <Button onClick={onSubmit}>
            Simpan Perubahan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPortfolioDialog;
