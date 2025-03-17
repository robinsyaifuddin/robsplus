
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlusCircle, Pencil, Trash2, ImagePlus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { toast } from 'sonner';

interface Portfolio {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export interface PortfolioSectionProps {
  preview?: boolean;
}

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
  const { toast: uiToast } = useToast();

  const handleAddPortfolio = () => {
    if (selectedFile) {
      // In a real application, this would upload the file to a server
      // For this demo, we'll just use a placeholder
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
      // Handle file upload in a real application
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
    
    // Create a preview URL
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

  // If in preview mode, only show a few portfolios
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
        <ScrollArea className="h-[calc(100vh-15rem)] pr-4">
          <Table>
            <TableCaption>Daftar portfolio terbaru {preview && "(preview)"}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Tanggal</TableHead>
                {!preview && <TableHead className="text-right">Aksi</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayPortfolios.length > 0 ? (
                displayPortfolios.map((portfolio) => (
                  <TableRow key={portfolio.id}>
                    <TableCell className="font-medium">{portfolio.title}</TableCell>
                    <TableCell>{portfolio.category}</TableCell>
                    <TableCell>{new Date(portfolio.date).toLocaleDateString('id-ID')}</TableCell>
                    {!preview && (
                      <TableCell className="text-right space-x-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => openEditDialog(portfolio)}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => openDeleteDialog(portfolio)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                    Belum ada data portfolio
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>

      {/* Add Portfolio Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
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
                value={newPortfolio.title}
                onChange={(e) => setNewPortfolio({...newPortfolio, title: e.target.value})}
                placeholder="Masukkan judul portfolio"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Kategori</Label>
              <Input
                id="category"
                value={newPortfolio.category}
                onChange={(e) => setNewPortfolio({...newPortfolio, category: e.target.value})}
                placeholder="Website, Desain, Video, dll."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Tanggal</Label>
              <Input
                id="date"
                type="date"
                value={newPortfolio.date}
                onChange={(e) => setNewPortfolio({...newPortfolio, date: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                value={newPortfolio.description}
                onChange={(e) => setNewPortfolio({...newPortfolio, description: e.target.value})}
                placeholder="Deskripsi singkat tentang portfolio"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Gambar Thumbnail</Label>
              <div className="flex items-center gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => document.getElementById('add-image')?.click()}
                >
                  <ImagePlus size={16} className="mr-2" />
                  Pilih Gambar
                </Button>
                <input
                  id="add-image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    onClick={clearFileSelection}
                  >
                    <X size={16} />
                  </Button>
                )}
              </div>
              {previewUrl && (
                <div className="mt-2 border rounded-md overflow-hidden">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="w-full h-auto max-h-40 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsAddDialogOpen(false);
              resetForm();
            }}>
              Batal
            </Button>
            <Button onClick={handleAddPortfolio} disabled={!newPortfolio.title || !newPortfolio.category}>
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Portfolio Dialog */}
      {currentPortfolio && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
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
                  value={currentPortfolio.title}
                  onChange={(e) => setCurrentPortfolio({...currentPortfolio, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-category">Kategori</Label>
                <Input
                  id="edit-category"
                  value={currentPortfolio.category}
                  onChange={(e) => setCurrentPortfolio({...currentPortfolio, category: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-date">Tanggal</Label>
                <Input
                  id="edit-date"
                  type="date"
                  value={currentPortfolio.date}
                  onChange={(e) => setCurrentPortfolio({...currentPortfolio, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Deskripsi</Label>
                <Textarea
                  id="edit-description"
                  value={currentPortfolio.description}
                  onChange={(e) => setCurrentPortfolio({...currentPortfolio, description: e.target.value})}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Gambar Thumbnail</Label>
                <div className="flex items-center gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => document.getElementById('edit-image')?.click()}
                  >
                    <ImagePlus size={16} className="mr-2" />
                    {previewUrl ? 'Ganti Gambar' : 'Pilih Gambar'}
                  </Button>
                  <input
                    id="edit-image"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {previewUrl && (
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      onClick={clearFileSelection}
                    >
                      <X size={16} />
                    </Button>
                  )}
                </div>
                {previewUrl && (
                  <div className="mt-2 border rounded-md overflow-hidden">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="w-full h-auto max-h-40 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setIsEditDialogOpen(false);
                resetForm();
              }}>
                Batal
              </Button>
              <Button onClick={handleEditPortfolio}>
                Simpan Perubahan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Portfolio Dialog */}
      {currentPortfolio && (
        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Konfirmasi Hapus</AlertDialogTitle>
              <AlertDialogDescription>
                Anda yakin ingin menghapus portfolio "{currentPortfolio.title}"? 
                Tindakan ini tidak dapat dibatalkan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => {
                setIsDeleteDialogOpen(false);
                setCurrentPortfolio(null);
              }}>
                Batal
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleDeletePortfolio} className="bg-red-500 hover:bg-red-600">
                Hapus
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </Card>
  );
};

export default PortfolioSection;
