import { useState } from 'react';
import { Trash, Plus, Edit, ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

// Sample portfolio data (this would normally come from a backend)
const initialPortfolioData = {
  jasaTugas: [
    {
      id: 't1',
      title: "Karya Tulis Ilmiah - Ekonomi Kreatif",
      client: "Ahmad Rizky",
      image: "/portfolio/tugas-1.jpg",
      description: "KTI tentang Peran Ekonomi Kreatif dalam Pemulihan Ekonomi Pasca Pandemi.",
      testimonial: "ROB'sPlus benar-benar membantu skripsi saya. Hasilnya sangat berkualitas dengan pengerjaan yang tepat waktu. Berkat bantuan mereka, saya berhasil mendapatkan nilai A!",
      clientRole: "Mahasiswa S1 Teknik",
      clientImage: "/testimonials/testimonial-1.jpg",
      rating: 5,
      category: "jasaTugas"
    },
    {
      id: 't2',
      title: "Essay Riset - Pendidikan Lingkungan",
      client: "Dewi Lestari",
      image: "/portfolio/tugas-2.jpg",
      description: "Essay ilmiah tentang Pendidikan Lingkungan Hidup di Sekolah Dasar.",
      testimonial: "Jasa pembuatan jurnal ilmiah ROB'sPlus sangat membantu tesis saya. Metodologi penelitian yang disusun sangat terstruktur dan referensinya lengkap. Pelayanan terbaik!",
      clientRole: "Mahasiswa S2 Pendidikan",
      clientImage: "/testimonials/testimonial-4.jpg",
      rating: 5,
      category: "jasaTugas"
    },
  ],
  jasaDigital: [
    {
      id: 'd1',
      title: "Website Toko Online Fashion",
      client: "Siti Rahayu",
      image: "/portfolio/digital-1.jpg",
      description: "Pembuatan website e-commerce untuk toko fashion dengan integrasi pembayaran online.",
      testimonial: "Website yang dibuat oleh tim ROB'sPlus sangat profesional dan sesuai dengan kebutuhan bisnis saya. Desainnya modern, responsif, dan fiturnya lengkap. Sangat merekomendasikan!",
      clientRole: "Pengusaha Online Shop",
      clientImage: "/testimonials/testimonial-2.jpg",
      rating: 5,
      category: "jasaDigital"
    },
    {
      id: 'd2',
      title: "Video Company Profile",
      client: "Rudi Hartono",
      image: "/portfolio/digital-2.jpg",
      description: "Pembuatan video profil perusahaan untuk instansi pemerintahan.",
      testimonial: "Layanan editing video ROB'sPlus sangat memuaskan. Hasil editingnya profesional dan sesuai dengan konsep yang saya inginkan. Sudah 3 kali pakai jasa mereka dan selalu puas!",
      clientRole: "Pegawai Pemerintahan",
      clientImage: "/testimonials/testimonial-5.jpg",
      rating: 5,
      category: "jasaDigital"
    },
  ],
  jasaPembelajaran: [
    {
      id: 'p1',
      title: "Kursus Digital Marketing",
      client: "Budi Santoso",
      image: "/portfolio/pembelajaran-1.jpg",
      description: "Pelatihan digital marketing untuk karyawan BUMN.",
      testimonial: "Kursus digital marketing dari ROB'sPlus membuat saya lebih memahami cara promosi produk secara online. Materinya lengkap dan mentor-mentornya sangat kompeten.",
      clientRole: "Karyawan BUMN",
      clientImage: "/testimonials/testimonial-3.jpg",
      rating: 5,
      category: "jasaPembelajaran"
    },
    {
      id: 'p2',
      title: "Pelatihan Microsoft Office",
      client: "Rina Wijaya",
      image: "/portfolio/pembelajaran-2.jpg",
      description: "Pelatihan komprehensif Microsoft Office untuk staf pengajar SMA.",
      testimonial: "Kursus Ms. Office dari ROB'sPlus sangat membantu saya menguasai PowerPoint dan Excel. Sekarang saya bisa membuat presentasi yang lebih menarik untuk materi pembelajaran.",
      clientRole: "Guru SMA",
      clientImage: "/testimonials/testimonial-6.jpg",
      rating: 5,
      category: "jasaPembelajaran"
    },
  ],
};

// Convert the object to an array for easier management
const flattenPortfolioData = (data: typeof initialPortfolioData) => {
  return [
    ...data.jasaTugas,
    ...data.jasaDigital,
    ...data.jasaPembelajaran
  ];
};

interface PortfolioItemType {
  id: string;
  title: string;
  client: string;
  image: string;
  description: string;
  testimonial: string;
  clientRole: string;
  clientImage: string;
  rating: number;
  category: string;
}

interface PortfolioSectionProps {
  preview?: boolean;
}

const PortfolioSection = ({ preview = false }: PortfolioSectionProps) => {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [flatPortfolioItems, setFlatPortfolioItems] = useState(flattenPortfolioData(portfolioData));
  const [editingItem, setEditingItem] = useState<PortfolioItemType | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  const [formData, setFormData] = useState<Partial<PortfolioItemType>>({
    title: '',
    client: '',
    image: '',
    description: '',
    testimonial: '',
    clientRole: '',
    clientImage: '',
    rating: 5,
    category: 'jasaTugas'
  });
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddPortfolio = () => {
    const newItem: PortfolioItemType = {
      id: Date.now().toString(),
      title: formData.title || '',
      client: formData.client || '',
      image: formData.image || '/placeholder.svg',
      description: formData.description || '',
      testimonial: formData.testimonial || '',
      clientRole: formData.clientRole || '',
      clientImage: formData.clientImage || '/placeholder.svg',
      rating: formData.rating || 5,
      category: formData.category || 'jasaTugas',
    };
    
    const category = newItem.category as keyof typeof portfolioData;
    setPortfolioData(prev => ({
      ...prev,
      [category]: [...prev[category], newItem]
    }));
    
    setFlatPortfolioItems(prev => [...prev, newItem]);
    
    setFormData({
      title: '',
      client: '',
      image: '',
      description: '',
      testimonial: '',
      clientRole: '',
      clientImage: '',
      rating: 5,
      category: 'jasaTugas'
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Portofolio ditambahkan",
      description: "Portofolio baru berhasil ditambahkan",
    });
  };
  
  const handleEditPortfolio = () => {
    if (!editingItem) return;
    
    const updatedItem: PortfolioItemType = {
      id: editingItem.id,
      title: formData.title || editingItem.title,
      client: formData.client || editingItem.client,
      image: formData.image || editingItem.image,
      description: formData.description || editingItem.description,
      testimonial: formData.testimonial || editingItem.testimonial,
      clientRole: formData.clientRole || editingItem.clientRole,
      clientImage: formData.clientImage || editingItem.clientImage,
      rating: formData.rating || editingItem.rating,
      category: formData.category || editingItem.category,
    };
    
    if (editingItem.category !== updatedItem.category) {
      const oldCategory = editingItem.category as keyof typeof portfolioData;
      const newCategory = updatedItem.category as keyof typeof portfolioData;
      
      setPortfolioData(prev => ({
        ...prev,
        [oldCategory]: prev[oldCategory].filter(item => item.id !== editingItem.id),
        [newCategory]: [...prev[newCategory], updatedItem]
      }));
    } else {
      const category = updatedItem.category as keyof typeof portfolioData;
      setPortfolioData(prev => ({
        ...prev,
        [category]: prev[category].map(item => 
          item.id === updatedItem.id ? updatedItem : item
        )
      }));
    }
    
    setFlatPortfolioItems(prev => 
      prev.map(item => item.id === updatedItem.id ? updatedItem : item)
    );
    
    setEditingItem(null);
    setIsEditDialogOpen(false);
    
    toast({
      title: "Portofolio diperbarui",
      description: "Perubahan pada portofolio berhasil disimpan",
    });
  };
  
  const handleDeletePortfolio = (id: string) => {
    const itemToDelete = flatPortfolioItems.find(item => item.id === id);
    if (!itemToDelete) return;
    
    const category = itemToDelete.category as keyof typeof portfolioData;
    
    setPortfolioData(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item.id !== id)
    }));
    
    setFlatPortfolioItems(prev => prev.filter(item => item.id !== id));
    
    toast({
      title: "Portofolio dihapus",
      description: "Portofolio berhasil dihapus",
    });
  };
  
  const startEditItem = (item: PortfolioItemType) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      client: item.client,
      image: item.image,
      description: item.description,
      testimonial: item.testimonial,
      clientRole: item.clientRole,
      clientImage: item.clientImage,
      rating: item.rating,
      category: item.category
    });
    setIsEditDialogOpen(true);
  };
  
  if (preview) {
    return (
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <CardTitle className="text-cyber-lightBlue flex items-center justify-between">
            <span>Manajemen Portofolio</span>
            <Button size="sm" variant="outline" asChild>
              <a href="/admin/portfolio">Lihat Semua</a>
            </Button>
          </CardTitle>
          <CardDescription className="text-gray-400">
            Kelola portofolio dan testimoni dari klien
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {flatPortfolioItems.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2 rounded-md bg-cyber-deepBlue/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded overflow-hidden">
                    <img 
                      src={item.image} 
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
                    <p className="text-xs text-gray-400">{item.client}</p>
                  </div>
                </div>
              </div>
            ))}
            {flatPortfolioItems.length > 3 && (
              <p className="text-xs text-center text-gray-400">
                + {flatPortfolioItems.length - 3} portofolio lainnya
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-cyber-lightBlue">Manajemen Portofolio</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-cyber-purple hover:bg-cyber-purple/80">
              <Plus className="mr-2 h-4 w-4" /> Tambah Portofolio
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-cyber-deepBlue border-cyber-purple/30">
            <DialogHeader>
              <DialogTitle className="text-cyber-lightBlue">Tambah Portofolio Baru</DialogTitle>
              <DialogDescription className="text-gray-400">
                Tambahkan portofolio baru untuk ditampilkan di website
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul Portofolio</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleFormChange} 
                    className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Kategori</Label>
                  <Select 
                    name="category" 
                    value={formData.category} 
                    onValueChange={(value) => handleSelectChange('category', value)}
                  >
                    <SelectTrigger className="bg-cyber-deepBlue/70 border-cyber-purple/30">
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent className="bg-cyber-deepBlue border-cyber-purple/30">
                      <SelectItem value="jasaTugas">Jasa Tugas</SelectItem>
                      <SelectItem value="jasaDigital">Jasa Digital</SelectItem>
                      <SelectItem value="jasaPembelajaran">Jasa Pembelajaran</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleFormChange} 
                  className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">URL Gambar Portofolio</Label>
                <Input 
                  id="image" 
                  name="image" 
                  value={formData.image} 
                  onChange={handleFormChange} 
                  className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                  placeholder="/portfolio/image.jpg"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Nama Klien</Label>
                  <Input 
                    id="client" 
                    name="client" 
                    value={formData.client} 
                    onChange={handleFormChange} 
                    className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="clientRole">Posisi/Pekerjaan Klien</Label>
                  <Input 
                    id="clientRole" 
                    name="clientRole" 
                    value={formData.clientRole} 
                    onChange={handleFormChange} 
                    className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="testimonial">Testimoni</Label>
                <Textarea 
                  id="testimonial" 
                  name="testimonial" 
                  value={formData.testimonial} 
                  onChange={handleFormChange} 
                  className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientImage">URL Foto Klien</Label>
                  <Input 
                    id="clientImage" 
                    name="clientImage" 
                    value={formData.clientImage} 
                    onChange={handleFormChange} 
                    className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                    placeholder="/testimonials/person.jpg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating (1-5)</Label>
                  <Select 
                    name="rating" 
                    value={formData.rating?.toString()} 
                    onValueChange={(value) => handleSelectChange('rating', value)}
                  >
                    <SelectTrigger className="bg-cyber-deepBlue/70 border-cyber-purple/30">
                      <SelectValue placeholder="Pilih rating" />
                    </SelectTrigger>
                    <SelectContent className="bg-cyber-deepBlue border-cyber-purple/30">
                      {[1, 2, 3, 4, 5].map(rating => (
                        <SelectItem key={rating} value={rating.toString()}>{rating} Bintang</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Batal</Button>
              <Button 
                className="bg-cyber-purple hover:bg-cyber-purple/80" 
                onClick={handleAddPortfolio}
              >
                Tambah Portofolio
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-cyber-darkBlue/50 border border-cyber-purple/30">
          <TabsTrigger value="all" className="data-[state=active]:bg-cyber-purple data-[state=active]:text-white">
            Semua
          </TabsTrigger>
          <TabsTrigger value="jasaTugas" className="data-[state=active]:bg-cyber-purple data-[state=active]:text-white">
            Jasa Tugas
          </TabsTrigger>
          <TabsTrigger value="jasaDigital" className="data-[state=active]:bg-cyber-purple data-[state=active]:text-white">
            Jasa Digital
          </TabsTrigger>
          <TabsTrigger value="jasaPembelajaran" className="data-[state=active]:bg-cyber-purple data-[state=active]:text-white">
            Jasa Pembelajaran
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-4">
            {flatPortfolioItems.map((item) => (
              <div key={item.id} className="glassmorphism p-4 rounded-lg flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 aspect-video md:aspect-square rounded overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="md:w-3/4 flex flex-col md:flex-row">
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-400">
                          {item.category === 'jasaTugas' ? 'Jasa Tugas' : 
                           item.category === 'jasaDigital' ? 'Jasa Digital' : 'Jasa Pembelajaran'}
                        </p>
                      </div>
                      <a 
                        href="/#portfolio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs flex items-center gap-1 text-cyber-lightBlue hover:underline"
                      >
                        <ExternalLink size={12} /> Lihat
                      </a>
                    </div>
                    <p className="text-sm">{item.description}</p>
                    <div className="bg-cyber-deepBlue/50 p-3 rounded-md text-sm">
                      <p className="italic text-gray-300">"{item.testimonial}"</p>
                      <div className="flex items-center mt-2 gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img 
                            src={item.clientImage} 
                            alt={item.client} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-xs font-medium">{item.client}</p>
                          <p className="text-xs text-gray-400">{item.clientRole}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2 mt-4 md:mt-0 md:ml-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => startEditItem(item)}
                      className="border-cyber-purple/30 text-cyber-lightBlue"
                    >
                      <Edit size={16} />
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleDeletePortfolio(item.id)}
                    >
                      <Trash size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        {(['jasaTugas', 'jasaDigital', 'jasaPembelajaran'] as const).map(category => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-4">
              {portfolioData[category].map((item) => (
                <div key={item.id} className="glassmorphism p-4 rounded-lg flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 aspect-video md:aspect-square rounded overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="md:w-3/4 flex flex-col md:flex-row">
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{item.title}</h3>
                        <a 
                          href="/#portfolio" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs flex items-center gap-1 text-cyber-lightBlue hover:underline"
                        >
                          <ExternalLink size={12} /> Lihat
                        </a>
                      </div>
                      <p className="text-sm">{item.description}</p>
                      <div className="bg-cyber-deepBlue/50 p-3 rounded-md text-sm">
                        <p className="italic text-gray-300">"{item.testimonial}"</p>
                        <div className="flex items-center mt-2 gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden">
                            <img 
                              src={item.clientImage} 
                              alt={item.client} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                          <div>
                            <p className="text-xs font-medium">{item.client}</p>
                            <p className="text-xs text-gray-400">{item.clientRole}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 mt-4 md:mt-0 md:ml-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => startEditItem(item)}
                        className="border-cyber-purple/30 text-cyber-lightBlue"
                      >
                        <Edit size={16} />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => handleDeletePortfolio(item.id)}
                      >
                        <Trash size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              {portfolioData[category].length === 0 && (
                <div className="text-center py-10 text-gray-400">
                  <p>Belum ada portofolio dalam kategori ini</p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-cyber-deepBlue border-cyber-purple/30">
          <DialogHeader>
            <DialogTitle className="text-cyber-lightBlue">Edit Portofolio</DialogTitle>
            <DialogDescription className="text-gray-400">
              Edit informasi portofolio yang sudah ada
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Judul Portofolio</Label>
                <Input 
                  id="edit-title" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleFormChange} 
                  className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-category">Kategori</Label>
                <Select 
                  name="category" 
                  value={formData.category} 
                  onValueChange={(value) => handleSelectChange('category', value)}
                >
                  <SelectTrigger className="bg-cyber-deepBlue/70 border-cyber-purple/30">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-deepBlue border-cyber-purple/30">
                    <SelectItem value="jasaTugas">Jasa Tugas</SelectItem>
                    <SelectItem value="jasaDigital">Jasa Digital</SelectItem>
                    <SelectItem value="jasaPembelajaran">Jasa Pembelajaran</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-description">Deskripsi</Label>
              <Textarea 
                id="edit-description" 
                name="description" 
                value={formData.description} 
                onChange={handleFormChange} 
                className="bg-cyber-deepBlue/70 border-cyber-purple/30"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-image">URL Gambar Portofolio</Label>
              <Input 
                id="edit-image" 
                name="image" 
                value={formData.image} 
                onChange={handleFormChange} 
                className="bg-cyber-deepBlue/70 border-cyber-purple/30"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-client">Nama Klien</Label>
                <Input 
                  id="edit-client" 
                  name="client" 
                  value={formData.client} 
                  onChange={handleFormChange} 
                  className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-clientRole">Posisi/Pekerjaan Klien</Label>
                <Input 
                  id="edit-clientRole" 
                  name="clientRole" 
                  value={formData.clientRole} 
                  onChange={handleFormChange} 
                  className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-testimonial">Testimoni</Label>
              <Textarea 
                id="edit-testimonial" 
                name="testimonial" 
                value={formData.testimonial} 
                onChange={handleFormChange} 
                className="bg-cyber-deepBlue/70 border-cyber-purple/30"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-clientImage">URL Foto Klien</Label>
                <Input 
                  id="edit-clientImage" 
                  name="clientImage" 
                  value={formData.clientImage} 
                  onChange={handleFormChange} 
                  className="bg-cyber-deepBlue/70 border-cyber-purple/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-rating">Rating (1-5)</Label>
                <Select 
                  name="rating" 
                  value={formData.rating?.toString()} 
                  onValueChange={(value) => handleSelectChange('rating', value)}
                >
                  <SelectTrigger className="bg-cyber-deepBlue/70 border-cyber-purple/30">
                    <SelectValue placeholder="Pilih rating" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-deepBlue border-cyber-purple/30">
                    {[1, 2, 3, 4, 5].map(rating => (
                      <SelectItem key={rating} value={rating.toString()}>{rating} Bintang</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Batal</Button>
            <Button 
              className="bg-cyber-purple hover:bg-cyber-purple/80" 
              onClick={handleEditPortfolio}
            >
              Simpan Perubahan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioSection;

