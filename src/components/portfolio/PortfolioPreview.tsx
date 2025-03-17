
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PortfolioItem } from './types';
import { getAllPortfolios } from './portfolioData';

const PortfolioPreview: React.FC = () => {
  const allPortfolios = getAllPortfolios();
  
  return (
    <Card className="glassmorphism border-cyber-lightBlue/30">
      <CardHeader>
        <CardTitle className="text-lg text-cyber-neonGreen">Portofolio</CardTitle>
        <CardDescription className="text-cyber-lightBlue">Karya terbaru</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {allPortfolios.slice(0, 3).map((item, index) => (
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
