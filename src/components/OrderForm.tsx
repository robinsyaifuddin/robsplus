
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const serviceTypes = {
  "Jasa Tugas": [
    "KTI",
    "Makalah",
    "Essay",
    "Laporan",
    "Proposal",
    "Jurnal",
    "PPT",
    "Parafrase/Turunkan Plagiasi",
    "Lainnya"
  ],
  "Jasa Digital": [
    "Pembuatan Website",
    "Desain Logo",
    "Desain Poster",
    "Editing Video/Film",
    "Followers, Likes, Comment Sosmed",
    "Report/Hapus Akun Sosmed",
    "Lainnya"
  ],
  "Jasa Pembelajaran": [
    "Website",
    "Desain Grafis",
    "Digital Marketing",
    "Instagram Branding",
    "Ms. Word",
    "Power Point",
    "Excel",
    "Lainnya"
  ]
};

const OrderForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    serviceCategory: 'Jasa Tugas',
    serviceType: '',
    deadline: '',
    description: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Reset serviceType when serviceCategory changes
    if (name === 'serviceCategory') {
      setFormState(prev => ({ ...prev, serviceType: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Nama harus diisi';
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'No. Whatsapp harus diisi';
    } else if (!/^[0-9+]+$/.test(formState.phone)) {
      newErrors.phone = 'Format No. Whatsapp tidak valid';
    }
    
    if (!formState.serviceType) {
      newErrors.serviceType = 'Jenis layanan harus dipilih';
    }
    
    if (!formState.deadline) {
      newErrors.deadline = 'Deadline harus diisi';
    }
    
    if (!formState.description.trim()) {
      newErrors.description = 'Deskripsi harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Format the WhatsApp message
    const message = `Halo ROB'sPlus, saya ingin order jasa:
    
*Nama:* ${formState.name}
*Kategori:* ${formState.serviceCategory}
*Jenis Layanan:* ${formState.serviceType}
*Deadline:* ${formState.deadline}
*Deskripsi:* ${formState.description}

Mohon informasi lebih lanjut. Terima kasih!`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/6282279722417?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };
  
  const inputClasses = "w-full px-4 py-3 bg-cyber-deepBlue/50 border border-cyber-purple/20 rounded-md focus:border-cyber-lightBlue focus:ring-1 focus:ring-cyber-lightBlue text-white";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1";
  const errorClasses = "text-sm text-red-400 mt-1";
  
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="order" ref={ref}>
      <div className="absolute inset-0 bg-cyber-black/80 cyber-grid-bg -z-10"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30 mb-4">
            Order Sekarang
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mulai <span className="bg-gradient-to-r from-cyber-purple to-cyber-lightBlue bg-clip-text text-transparent">Pesanan Anda</span> Sekarang
          </h2>
          <p className="text-gray-300">
            Isi formulir di bawah untuk memulai pesanan Anda. Tim kami akan segera menghubungi Anda melalui WhatsApp.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glassmorphism rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Masukkan nama lengkap"
                    className={cn(inputClasses, errors.name && "border-red-500")}
                    value={formState.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className={errorClasses}>{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className={labelClasses}>No. WhatsApp</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Contoh: 08123456789"
                    className={cn(inputClasses, errors.phone && "border-red-500")}
                    value={formState.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceCategory" className={labelClasses}>Kategori Layanan</label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    className={inputClasses}
                    value={formState.serviceCategory}
                    onChange={handleChange}
                  >
                    {Object.keys(serviceTypes).map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="serviceType" className={labelClasses}>Jenis Layanan</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className={cn(inputClasses, errors.serviceType && "border-red-500")}
                    value={formState.serviceType}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Jenis Layanan</option>
                    {serviceTypes[formState.serviceCategory as keyof typeof serviceTypes].map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.serviceType && <p className={errorClasses}>{errors.serviceType}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="deadline" className={labelClasses}>Deadline</label>
                <input
                  type="text"
                  id="deadline"
                  name="deadline"
                  placeholder="Contoh: 3 hari, 1 minggu, 30 November 2024"
                  className={cn(inputClasses, errors.deadline && "border-red-500")}
                  value={formState.deadline}
                  onChange={handleChange}
                />
                {errors.deadline && <p className={errorClasses}>{errors.deadline}</p>}
              </div>
              
              <div>
                <label htmlFor="description" className={labelClasses}>Deskripsi Pesanan</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Jelaskan detail pesanan Anda..."
                  className={cn(inputClasses, errors.description && "border-red-500")}
                  value={formState.description}
                  onChange={handleChange}
                />
                {errors.description && <p className={errorClasses}>{errors.description}</p>}
              </div>
              
              <motion.div 
                className="flex justify-center mt-8"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <CTAButton
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto px-8 justify-center"
                  icon={<Send size={18} />}
                >
                  Kirim Permintaan
                </CTAButton>
              </motion.div>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
                <CheckCircle size={16} className="text-cyber-lightBlue" />
                <p>Data Anda aman dan hanya digunakan untuk keperluan pemesanan.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
