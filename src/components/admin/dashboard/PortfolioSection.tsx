
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Image, Link } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  category: string;
}

interface PortfolioSectionProps {
  preview?: boolean;
}

// Mock portfolio data
const mockPortfolio: PortfolioItem[] = [
  {
    id: '1',
    title: 'Website E-commerce',
    description: 'Website toko online dengan fitur pembayaran terintegrasi',
    image: '/portfolio/ecommerce-site.jpg',
    link: 'https://example.com/ecommerce',
    category: 'Website',
  },
  {
    id: '2',
    title: 'Desain Logo Perusahaan',
    description: 'Logo modern untuk startup teknologi',
    image: '/portfolio/company-logo.jpg',
    category: 'Desain',
  },
  {
    id: '3',
    title: 'Aplikasi Mobile Pendidikan',
    description: 'Aplikasi pembelajaran bahasa Inggris untuk anak-anak',
    image: '/portfolio/education-app.jpg',
    link: 'https://example.com/eduapp',
    category: 'Aplikasi',
  },
  {
    id: '4',
    title: 'Laporan Penelitian',
    description: 'Laporan penelitian ilmiah tentang energi terbarukan',
    image: '/portfolio/research-paper.jpg',
    category: 'Tugas Akademik',
  },
];

const PortfolioSection = ({ preview = false }: PortfolioSectionProps) => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(mockPortfolio);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [newItem, setNewItem] = useState<Partial<PortfolioItem>>({
    title: '',
    description: '',
    image: '',
    link: '',
    category: '',
  });

  // For preview mode in dashboard
  if (preview) {
    return (
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <CardTitle className="text-cyber-neonGreen">Portofolio</CardTitle>
          <CardDescription className="text-cyber-lightBlue">
            Kelola proyek dan karya yang ditampilkan di website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {mockPortfolio.slice(0, 4).map((item) => (
              <div key={item.id} className="bg-cyber-darkBlue/50 p-3 rounded-md border border-cyber-purple/20">
                <h4 className="font-medium text-sm text-white truncate">{item.title}</h4>
                <p className="text-xs text-gray-400 truncate">{item.category}</p>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-cyber-purple/20 hover:bg-cyber-purple/40 text-cyber-lightBlue">
            Lihat Semua
          </Button>
        </CardContent>
      </Card>
    );
  }

  const handleAddItem = () => {
    setIsAddDialogOpen(true);
    setNewItem({ title: '', description: '', image: '', link: '', category: '' });
  };

  const handleEditItem = (item: PortfolioItem) => {
    setIsEditDialogOpen(true);
    setSelectedItem(item);
  };

  const handleDeleteItem = (item: PortfolioItem) => {
    setIsDeleteDialogOpen(true);
    setSelectedItem(item);
  };

  const confirmDeleteItem = () => {
    if (selectedItem) {
      setPortfolioItems(portfolioItems.filter((item) => item.id !== selectedItem.id));
      setIsDeleteDialogOpen(false);
      setSelectedItem(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setNewItem({ ...newItem, [field]: e.target.value });
  };

  const handleAddPortfolioItem = () => {
    const newItemWithId: PortfolioItem = {
      id: String(Date.now()),
      title: newItem.title || 'Untitled',
      description: newItem.description || '',
      image: newItem.image || '',
      link: newItem.link || '',
      category: newItem.category || 'Uncategorized',
    };

    setPortfolioItems([...portfolioItems, newItemWithId]);
    setIsAddDialogOpen(false);
    setNewItem({ title: '', description: '', image: '', link: '', category: '' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-cyber-neonGreen">Portofolio</h2>
        <Button onClick={handleAddItem} className="bg-cyber-purple/20 hover:bg-cyber-purple/40 text-cyber-lightBlue">
          <Plus className="mr-2 h-4 w-4" />
          Tambah Portofolio
        </Button>
      </div>

      <ScrollArea className="h-[500px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="glassmorphism border-cyber-lightBlue/30">
              <CardHeader>
                <CardTitle className="text-cyber-neonGreen">{item.title}</CardTitle>
                <CardDescription className="text-cyber-lightBlue">{item.category}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <img src={item.image} alt={item.title} className="rounded-md w-full h-32 object-cover mb-2" />
                <p className="text-sm text-cyber-lightBlue">{item.description}</p>
                <div className="flex justify-between items-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleEditItem(item)}
                    className="bg-cyber-blue/20 hover:bg-cyber-blue/40 text-cyber-lightBlue"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteItem(item)}
                    className="bg-red-500/20 hover:bg-red-500/40 text-cyber-lightBlue"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Hapus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {/* Add Portfolio Item Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="glassmorphism border-cyber-lightBlue/30">
          <DialogHeader>
            <DialogTitle className="text-cyber-neonGreen">Tambah Portofolio</DialogTitle>
            <DialogDescription className="text-cyber-lightBlue">
              Tambahkan proyek atau karya baru ke daftar portofolio Anda.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right text-cyber-lightBlue">
                Judul
              </Label>
              <Input
                id="title"
                value={newItem.title || ''}
                onChange={(e) => handleInputChange(e, 'title')}
                className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right text-cyber-lightBlue">
                Deskripsi
              </Label>
              <Textarea
                id="description"
                value={newItem.description || ''}
                onChange={(e) => handleInputChange(e, 'description')}
                className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right text-cyber-lightBlue">
                URL Gambar
              </Label>
              <Input
                id="image"
                value={newItem.image || ''}
                onChange={(e) => handleInputChange(e, 'image')}
                className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="link" className="text-right text-cyber-lightBlue">
                URL Proyek
              </Label>
              <Input
                id="link"
                value={newItem.link || ''}
                onChange={(e) => handleInputChange(e, 'link')}
                className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right text-cyber-lightBlue">
                Kategori
              </Label>
              <Input
                id="category"
                value={newItem.category || ''}
                onChange={(e) => handleInputChange(e, 'category')}
                className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => setIsAddDialogOpen(false)}>
              Batal
            </Button>
            <Button type="submit" onClick={handleAddPortfolioItem}>
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Portfolio Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="glassmorphism border-cyber-lightBlue/30">
          <DialogHeader>
            <DialogTitle className="text-cyber-neonGreen">Edit Portofolio</DialogTitle>
            <DialogDescription className="text-cyber-lightBlue">
              Edit detail proyek atau karya yang ada di daftar portofolio Anda.
            </DialogDescription>
          </DialogHeader>
          {selectedItem && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right text-cyber-lightBlue">
                  Judul
                </Label>
                <Input
                  id="title"
                  value={selectedItem.title}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, title: e.target.value })
                  }
                  className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right text-cyber-lightBlue">
                  Deskripsi
                </Label>
                <Textarea
                  id="description"
                  value={selectedItem.description}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, description: e.target.value })
                  }
                  className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right text-cyber-lightBlue">
                  URL Gambar
                </Label>
                <Input
                  id="image"
                  value={selectedItem.image}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, image: e.target.value })
                  }
                  className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="link" className="text-right text-cyber-lightBlue">
                  URL Proyek
                </Label>
                <Input
                  id="link"
                  value={selectedItem.link || ''}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, link: e.target.value })
                  }
                  className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right text-cyber-lightBlue">
                  Kategori
                </Label>
                <Input
                  id="category"
                  value={selectedItem.category}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, category: e.target.value })
                  }
                  className="col-span-3 bg-cyber-darkBlue/50 border-cyber-lightBlue/20 text-cyber-lightBlue"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => setIsEditDialogOpen(false)}>
              Batal
            </Button>
            <Button
              type="submit"
              onClick={() => {
                if (selectedItem) {
                  setPortfolioItems(
                    portfolioItems.map((item) => (item.id === selectedItem.id ? selectedItem : item))
                  );
                  setIsEditDialogOpen(false);
                  setSelectedItem(null);
                }
              }}
            >
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Portfolio Item Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="glassmorphism border-cyber-lightBlue/30">
          <DialogHeader>
            <DialogTitle className="text-cyber-neonGreen">Hapus Portofolio</DialogTitle>
            <DialogDescription className="text-cyber-lightBlue">
              Apakah Anda yakin ingin menghapus proyek atau karya ini dari daftar portofolio Anda?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => setIsDeleteDialogOpen(false)}>
              Batal
            </Button>
            <Button type="submit" variant="destructive" onClick={confirmDeleteItem}>
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioSection;
