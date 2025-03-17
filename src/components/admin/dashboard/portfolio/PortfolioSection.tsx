import React from 'react';
import { PortfolioSectionProps } from './types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllPortfolios } from '@/components/portfolio/portfolioData';
import PortfolioTable from './PortfolioTable';

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ preview = false }) => {
  const allPortfolios = getAllPortfolios();
  
  if (preview) {
    return (
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <CardTitle className="text-lg text-cyber-neonGreen">Portofolio</CardTitle>
          <CardDescription className="text-cyber-lightBlue">Kelola portofolio ROB'sPlus</CardDescription>
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
          <Button variant="link" size="sm" className="text-cyber-neonGreen mt-2 w-full">
            Kelola Portofolio
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <CardTitle className="text-lg text-cyber-neonGreen">Portofolio</CardTitle>
          <CardDescription className="text-cyber-lightBlue">Kelola portofolio ROB'sPlus</CardDescription>
        </CardHeader>
        <CardContent>
          <PortfolioTable />
          <Button className="mt-4">Tambah Portofolio</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioSection;
