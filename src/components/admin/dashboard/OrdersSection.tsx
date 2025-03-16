
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, ExternalLink, Filter } from 'lucide-react';
import { useState } from 'react';

// Mock data for orders
const orderData = [
  {
    id: 'ORD-1234',
    customer: 'Budi Santoso',
    service: 'Jasa Tugas - Makalah',
    date: '2023-06-15',
    status: 'completed',
    whatsapp: '6282279722417'
  },
  {
    id: 'ORD-1235',
    customer: 'Dewi Lestari',
    service: 'Jasa Digital - Desain Logo',
    date: '2023-06-20',
    status: 'inprogress',
    whatsapp: '6282279722417'
  },
  {
    id: 'ORD-1236',
    customer: 'Ahmad Hidayat',
    service: 'Jasa Pembelajaran - MS Excel',
    date: '2023-06-25',
    status: 'pending',
    whatsapp: '6282279722417'
  },
  {
    id: 'ORD-1237',
    customer: 'Siti Rahayu',
    service: 'Jasa Tugas - Presentasi PPT',
    date: '2023-06-28',
    status: 'completed',
    whatsapp: '6282279722417'
  },
  {
    id: 'ORD-1238',
    customer: 'Rudi Hermawan',
    service: 'Jasa Digital - Editing Video',
    date: '2023-07-02',
    status: 'inprogress',
    whatsapp: '6282279722417'
  },
];

interface OrdersSectionProps {
  preview?: boolean;
}

const OrdersSection = ({ preview = false }: OrdersSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOrders = orderData.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 hover:bg-green-600';
      case 'inprogress':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'pending':
        return 'bg-yellow-500 hover:bg-yellow-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Selesai';
      case 'inprogress':
        return 'Proses';
      case 'pending':
        return 'Menunggu';
      default:
        return status;
    }
  };

  const openWhatsApp = (phone: string, orderId: string) => {
    const message = `Halo, saya admin ROB'sPlus mengenai order ${orderId}...`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (preview) {
    return (
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <CardTitle className="text-lg text-cyber-neonGreen">Riwayat Order</CardTitle>
          <CardDescription className="text-cyber-lightBlue">Order terbaru</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Pelanggan</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderData.slice(0, 3).map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium text-cyber-lightBlue">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusText(order.status)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glassmorphism border-cyber-lightBlue/30">
      <CardHeader>
        <CardTitle className="text-cyber-neonGreen">Riwayat Order</CardTitle>
        <CardDescription className="text-cyber-lightBlue">
          Kelola dan pantau order dari pelanggan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari order..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="rounded-md border border-cyber-lightBlue/30">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-cyber-lightBlue">ID Order</TableHead>
                <TableHead className="text-cyber-lightBlue">Pelanggan</TableHead>
                <TableHead className="text-cyber-lightBlue">Layanan</TableHead>
                <TableHead className="text-cyber-lightBlue">Tanggal</TableHead>
                <TableHead className="text-cyber-lightBlue">Status</TableHead>
                <TableHead className="text-cyber-lightBlue">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium text-cyber-lightBlue">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.service}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString('id-ID')}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusText(order.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => openWhatsApp(order.whatsapp, order.id)}
                      className="text-cyber-lightBlue border-cyber-lightBlue hover:bg-cyber-lightBlue/20"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredOrders.length === 0 && (
            <div className="p-4 text-center text-cyber-lightBlue">
              Tidak ada order yang ditemukan
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrdersSection;
