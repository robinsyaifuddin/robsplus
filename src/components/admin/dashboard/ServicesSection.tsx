
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText, Layout, GraduationCap, Save, PlusCircle, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { servicesDetails } from '@/components/services/servicesData';
import { useToast } from '@/components/ui/use-toast';
import { ServiceCategory, ServiceItem, PricingTier } from '@/components/services/types';

const ServicesSection = () => {
  const [services, setServices] = useState(servicesDetails);
  const [activeCategory, setActiveCategory] = useState('Jasa Tugas');
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<ServiceCategory>(services['Jasa Tugas']);
  const { toast } = useToast();

  const handleSaveChanges = () => {
    // In a real application, this would be an API call to update the services
    setServices({
      ...services,
      [activeCategory]: editData
    });
    
    setEditMode(false);
    toast({
      title: "Perubahan disimpan",
      description: `Kategori ${activeCategory} berhasil diperbarui`,
    });
  };

  const handleEdit = () => {
    setEditData(services[activeCategory]);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditData(services[activeCategory]);
  };

  const handleAddService = () => {
    setEditData({
      ...editData,
      items: [
        ...editData.items,
        { title: 'Layanan Baru', description: 'Deskripsi layanan baru' }
      ]
    });
  };

  const handleRemoveService = (index: number) => {
    setEditData({
      ...editData,
      items: editData.items.filter((_, i) => i !== index)
    });
  };

  const handleAddPricingTier = () => {
    setEditData({
      ...editData,
      pricingTiers: [
        ...editData.pricingTiers,
        { 
          title: 'Paket Baru', 
          priceRange: 'Rp 0 - Rp 0',
          features: ['Fitur 1', 'Fitur 2', 'Fitur 3']
        }
      ]
    });
  };

  const handleRemovePricingTier = (index: number) => {
    setEditData({
      ...editData,
      pricingTiers: editData.pricingTiers.filter((_, i) => i !== index)
    });
  };

  const updateServiceItem = (index: number, field: keyof ServiceItem, value: string) => {
    const updatedItems = [...editData.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    
    setEditData({
      ...editData,
      items: updatedItems
    });
  };

  const updatePricingTier = (index: number, field: keyof PricingTier, value: string | string[]) => {
    const updatedTiers = [...editData.pricingTiers];
    updatedTiers[index] = {
      ...updatedTiers[index],
      [field]: value
    };
    
    setEditData({
      ...editData,
      pricingTiers: updatedTiers
    });
  };

  const updatePricingFeature = (tierIndex: number, featureIndex: number, value: string) => {
    const updatedTiers = [...editData.pricingTiers];
    const updatedFeatures = [...updatedTiers[tierIndex].features];
    updatedFeatures[featureIndex] = value;
    
    updatedTiers[tierIndex] = {
      ...updatedTiers[tierIndex],
      features: updatedFeatures
    };
    
    setEditData({
      ...editData,
      pricingTiers: updatedTiers
    });
  };

  const addPricingFeature = (tierIndex: number) => {
    const updatedTiers = [...editData.pricingTiers];
    updatedTiers[tierIndex] = {
      ...updatedTiers[tierIndex],
      features: [...updatedTiers[tierIndex].features, 'Fitur baru']
    };
    
    setEditData({
      ...editData,
      pricingTiers: updatedTiers
    });
  };

  const removePricingFeature = (tierIndex: number, featureIndex: number) => {
    const updatedTiers = [...editData.pricingTiers];
    updatedTiers[tierIndex] = {
      ...updatedTiers[tierIndex],
      features: updatedTiers[tierIndex].features.filter((_, i) => i !== featureIndex)
    };
    
    setEditData({
      ...editData,
      pricingTiers: updatedTiers
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Jasa Tugas':
        return <FileText className="h-5 w-5" />;
      case 'Jasa Digital':
        return <Layout className="h-5 w-5" />;
      case 'Jasa Pembelajaran':
        return <GraduationCap className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Card className="glassmorphism border-cyber-lightBlue/30">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-cyber-neonGreen">Kelola Layanan</CardTitle>
            <CardDescription className="text-cyber-lightBlue">
              Edit informasi layanan yang ditampilkan di website
            </CardDescription>
          </div>
          
          {!editMode ? (
            <Button 
              onClick={handleEdit} 
              className="bg-cyber-neonGreen hover:bg-cyber-neonGreen/80 text-black"
            >
              Edit Layanan
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={handleCancel}
                className="border-cyber-lightBlue text-cyber-lightBlue hover:bg-cyber-lightBlue/20"
              >
                Batal
              </Button>
              <Button 
                onClick={handleSaveChanges}
                className="bg-cyber-neonGreen hover:bg-cyber-neonGreen/80 text-black"
              >
                <Save className="mr-2 h-4 w-4" />
                Simpan
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs 
          value={activeCategory}
          onValueChange={(value) => {
            if (editMode) {
              const confirm = window.confirm("Perubahan belum disimpan. Lanjutkan?");
              if (!confirm) return;
            }
            setActiveCategory(value);
            setEditMode(false);
            setEditData(services[value]);
          }}
        >
          <TabsList className="mb-4 bg-cyber-darkBlue/50 border border-cyber-lightBlue/20">
            {Object.keys(services).map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-cyber-neonGreen data-[state=active]:text-black"
              >
                {getCategoryIcon(category)}
                <span className="ml-2">{category}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.keys(services).map(category => (
            <TabsContent key={category} value={category} className="space-y-4">
              {!editMode ? (
                // View mode
                <>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-cyber-neonGreen mb-1">Deskripsi</h3>
                      <p className="text-cyber-lightBlue">{services[category].description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-cyber-neonGreen mb-1">Catatan</h3>
                      <p className="text-cyber-lightBlue">{services[category].note}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-cyber-neonGreen mb-2">Jenis Layanan</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services[category].items.map((item, index) => (
                          <Card key={index} className="glassmorphism border-cyber-lightBlue/30">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base text-cyber-neonGreen">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-cyber-lightBlue">{item.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-cyber-neonGreen mb-2">Paket Harga</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {services[category].pricingTiers.map((tier, index) => (
                          <Card key={index} className="glassmorphism border-cyber-lightBlue/30">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base text-cyber-neonGreen">{tier.title}</CardTitle>
                              <CardDescription className="text-base font-semibold text-cyber-lightBlue">
                                {tier.priceRange}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2">
                                {tier.features.map((feature, fIndex) => (
                                  <li key={fIndex} className="text-sm text-cyber-lightBlue flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Edit mode
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-cyber-lightBlue">Deskripsi</Label>
                    <Textarea
                      id="description"
                      value={editData.description}
                      onChange={(e) => setEditData({...editData, description: e.target.value})}
                      rows={2}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="note" className="text-cyber-lightBlue">Catatan</Label>
                    <Textarea
                      id="note"
                      value={editData.note}
                      onChange={(e) => setEditData({...editData, note: e.target.value})}
                      rows={2}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-lg font-semibold text-cyber-lightBlue">Jenis Layanan</Label>
                      <Button 
                        onClick={handleAddService}
                        size="sm"
                        className="bg-cyber-neonGreen hover:bg-cyber-neonGreen/80 text-black"
                      >
                        <PlusCircle className="mr-1 h-4 w-4" />
                        Tambah Layanan
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {editData.items.map((item, index) => (
                        <Card key={index} className="glassmorphism border-cyber-lightBlue/30">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <Label htmlFor={`service-title-${index}`} className="text-cyber-lightBlue">Judul Layanan</Label>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => handleRemoveService(index)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            <Input
                              id={`service-title-${index}`}
                              value={item.title}
                              onChange={(e) => updateServiceItem(index, 'title', e.target.value)}
                            />
                          </CardHeader>
                          <CardContent>
                            <Label htmlFor={`service-desc-${index}`} className="text-cyber-lightBlue">Deskripsi</Label>
                            <Textarea
                              id={`service-desc-${index}`}
                              value={item.description}
                              onChange={(e) => updateServiceItem(index, 'description', e.target.value)}
                              rows={2}
                              className="mt-1"
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-lg font-semibold text-cyber-lightBlue">Paket Harga</Label>
                      <Button 
                        onClick={handleAddPricingTier}
                        size="sm"
                        className="bg-cyber-neonGreen hover:bg-cyber-neonGreen/80 text-black"
                      >
                        <PlusCircle className="mr-1 h-4 w-4" />
                        Tambah Paket
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {editData.pricingTiers.map((tier, tIndex) => (
                        <Card key={tIndex} className="glassmorphism border-cyber-lightBlue/30">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <Label htmlFor={`tier-title-${tIndex}`} className="text-cyber-lightBlue">Nama Paket</Label>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => handleRemovePricingTier(tIndex)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            <Input
                              id={`tier-title-${tIndex}`}
                              value={tier.title}
                              onChange={(e) => updatePricingTier(tIndex, 'title', e.target.value)}
                              className="mb-2"
                            />
                            
                            <Label htmlFor={`tier-price-${tIndex}`} className="text-cyber-lightBlue">Rentang Harga</Label>
                            <Input
                              id={`tier-price-${tIndex}`}
                              value={tier.priceRange}
                              onChange={(e) => updatePricingTier(tIndex, 'priceRange', e.target.value)}
                            />
                          </CardHeader>
                          <CardContent>
                            <div className="mb-2 flex justify-between items-center">
                              <Label className="text-cyber-lightBlue">Fitur Paket</Label>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => addPricingFeature(tIndex)}
                                className="h-7 border-cyber-lightBlue text-cyber-lightBlue hover:bg-cyber-lightBlue/20"
                              >
                                <PlusCircle className="mr-1 h-3 w-3" />
                                Tambah Fitur
                              </Button>
                            </div>
                            
                            <div className="space-y-2">
                              {tier.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-center gap-2">
                                  <Input
                                    value={feature}
                                    onChange={(e) => updatePricingFeature(tIndex, fIndex, e.target.value)}
                                  />
                                  <Button 
                                    variant="destructive" 
                                    size="icon" 
                                    className="h-8 w-8" 
                                    onClick={() => removePricingFeature(tIndex, fIndex)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ServicesSection;
