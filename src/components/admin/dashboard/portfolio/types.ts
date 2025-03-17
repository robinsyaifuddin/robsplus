
export interface Portfolio {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export interface PortfolioSectionProps {
  preview?: boolean;
}
