
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { Portfolio } from './types';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PortfolioTableProps {
  portfolios: Portfolio[];
  preview?: boolean;
  onEdit?: (portfolio: Portfolio) => void;
  onDelete?: (portfolio: Portfolio) => void;
}

const PortfolioTable: React.FC<PortfolioTableProps> = ({ 
  portfolios, 
  preview = false,
  onEdit,
  onDelete
}) => {
  return (
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
          {portfolios.length > 0 ? (
            portfolios.map((portfolio) => (
              <TableRow key={portfolio.id}>
                <TableCell className="font-medium">{portfolio.title}</TableCell>
                <TableCell>{portfolio.category}</TableCell>
                <TableCell>{new Date(portfolio.date).toLocaleDateString('id-ID')}</TableCell>
                {!preview && (
                  <TableCell className="text-right space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onEdit && onEdit(portfolio)}
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onDelete && onDelete(portfolio)}
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
  );
};

export default PortfolioTable;
