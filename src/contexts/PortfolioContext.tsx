
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Portfolio } from '@/components/admin/dashboard/portfolio/types';
import { getAllPortfolios } from '@/components/portfolio/portfolioData';
import { toast } from 'sonner';

interface PortfolioContextType {
  portfolios: Portfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[]>>;
  savePortfolios: () => void;
  loading: boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize portfolios from data
    const initialPortfolios = getAllPortfolios().map((item, index) => ({
      id: (index + 1).toString(),
      title: item.title,
      description: item.description || "",
      imageUrl: item.image,
      category: item.client, // Using client as category for now
      date: new Date().toISOString().split('T')[0] // Default date
    }));
    
    // Check if we have stored portfolios in localStorage
    const storedPortfolios = localStorage.getItem('robsplus-portfolios');
    if (storedPortfolios) {
      try {
        setPortfolios(JSON.parse(storedPortfolios));
      } catch (error) {
        console.error('Error parsing stored portfolios:', error);
        setPortfolios(initialPortfolios);
      }
    } else {
      setPortfolios(initialPortfolios);
    }
    
    setLoading(false);
  }, []);

  const savePortfolios = () => {
    try {
      localStorage.setItem('robsplus-portfolios', JSON.stringify(portfolios));
      toast.success('Portfolio berhasil disimpan');
    } catch (error) {
      console.error('Error saving portfolios:', error);
      toast.error('Gagal menyimpan portfolio');
    }
  };

  return (
    <PortfolioContext.Provider value={{ portfolios, setPortfolios, savePortfolios, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};
