
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PortfolioItem } from './types';
import { usePortfolio } from '@/contexts/PortfolioContext';

interface PortfolioPreviewProps {
  portfolios?: PortfolioItem[];
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ portfolios }) => {
  const { portfolios: adminPortfolios } = usePortfolio();
  
  // Use either provided portfolios or convert from admin portfolios
  const displayItems = portfolios || adminPortfolios.slice(0, 3).map(p => ({
    title: p.title,
    client: p.category,
    image: p.imageUrl,
    description: p.description,
    testimonial: "Testimoni belum tersedia",
    clientRole: "Klien",
    clientImage: "/testimonials/testimonial-1.jpg",
    rating: 5,
  }));
  
  return (
    <Card className="glassmorphism border-cyber-lightBlue/30">
      <CardHeader>
        <CardTitle className="text-lg text-cyber-neonGreen">Portofolio</CardTitle>
        <CardDescription className="text-cyber-lightBlue">Karya terbaru</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {displayItems.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-2 rounded-md bg-cyber-deepBlue/50">
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
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioPreview;
