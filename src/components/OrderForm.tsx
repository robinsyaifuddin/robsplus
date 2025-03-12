
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import CTAButton from '@/components/CTAButton';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define form schema with Zod
const orderFormSchema = z.object({
  name: z.string().min(2, { message: 'Nama harus minimal 2 karakter' }),
  email: z.string().email({ message: 'Email tidak valid' }),
  whatsapp: z.string().min(10, { message: 'Nomor WhatsApp tidak valid' }),
  serviceType: z.string().min(1, { message: 'Pilih jenis layanan' }),
  serviceDetail: z.string().optional(),
  projectDetails: z.string().min(10, { message: 'Detail proyek harus minimal 10 karakter' }),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

const OrderForm = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  
  // Define the form
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      serviceType: '',
      serviceDetail: '',
      projectDetails: '',
    }
  });
  
  // Handle form submission
  const onSubmit = (data: OrderFormValues) => {
    // Create WhatsApp message
    const message = encodeURIComponent(
      `Halo, saya ingin memesan layanan ROB'sPlus:\n\nNama: ${data.name}\nEmail: ${data.email}\nNomor WhatsApp: ${data.whatsapp}\nJenis Layanan: ${data.serviceType}${data.serviceDetail ? ' - ' + data.serviceDetail : ''}\nDetail Tugas/Proyek: ${data.projectDetails}`
    );
    
    // Set success state (for the success animation)
    setIsSubmitSuccess(true);
    
    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/6282279722417?text=${message}`, '_blank');
      
      // Reset form after submission
      form.reset();
      setIsSubmitSuccess(false);
    }, 1500);
  };
  
  // Show different service detail options based on service type
  const serviceTypeOptions = {
    'Jasa Tugas': ['KTI', 'Makalah', 'Essay', 'Laporan', 'Proposal', 'Jurnal', 'PPT', 'Parafrase/Turunkan Plagiasi'],
    'Jasa Digital': ['Pembuatan Website', 'Desain Logo/Poster', 'Editing Video/Film', 'Followers/Likes/Comment Sosmed', 'Report/Hapus Akun Sosmed'],
    'Jasa Pembelajaran': ['Website', 'Desain Grafis', 'Digital Marketing', 'Instagram Branding', 'Ms. Word, Power Point, Excel'],
  };
  
  const selectedServiceType = form.watch('serviceType') as keyof typeof serviceTypeOptions;
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-200">Nama</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Nama lengkap Anda" 
                    className="bg-cyber-deepBlue/50 border-cyber-purple/30 text-white placeholder:text-gray-500" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-200">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="alamat@email.com" 
                    className="bg-cyber-deepBlue/50 border-cyber-purple/30 text-white placeholder:text-gray-500" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200">Nomor WhatsApp</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Contoh: 082279722417" 
                  className="bg-cyber-deepBlue/50 border-cyber-purple/30 text-white placeholder:text-gray-500" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-200">Jenis Layanan</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-cyber-deepBlue/50 border-cyber-purple/30 text-white">
                      <SelectValue placeholder="Pilih jenis layanan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-cyber-deepBlue border-cyber-purple/30">
                    {Object.keys(serviceTypeOptions).map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-cyber-purple/20">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {selectedServiceType && (
            <FormField
              control={form.control}
              name="serviceDetail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">Detail Layanan</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-cyber-deepBlue/50 border-cyber-purple/30 text-white">
                        <SelectValue placeholder="Pilih detail layanan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-cyber-deepBlue border-cyber-purple/30">
                      {serviceTypeOptions[selectedServiceType]?.map((option) => (
                        <SelectItem key={option} value={option} className="text-white hover:bg-cyber-purple/20">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        
        <FormField
          control={form.control}
          name="projectDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200">Detail Tugas/Proyek</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Jelaskan detail tugas atau proyek yang Anda inginkan" 
                  className="bg-cyber-deepBlue/50 border-cyber-purple/30 text-white placeholder:text-gray-500 min-h-32" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-4">
          {isSubmitSuccess ? (
            <motion.div
              className="flex items-center justify-center p-2 bg-green-500/20 rounded-md border border-green-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Check className="mr-2 text-green-500" size={18} />
              <span className="text-green-500">Berhasil! Mengarahkan ke WhatsApp...</span>
            </motion.div>
          ) : (
            <CTAButton
              href="#"
              size="lg"
              className="w-full justify-center"
              icon={<ArrowRight size={18} />}
              onClick={() => form.handleSubmit(onSubmit)()}
            >
              Kirim Permintaan
            </CTAButton>
          )}
        </div>
      </form>
    </Form>
  );
};

export default OrderForm;
