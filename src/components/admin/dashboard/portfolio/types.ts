
export interface PortfolioSectionProps {
  preview?: boolean;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export interface PortfolioTableProps {
  portfolios: Portfolio[];
  onEdit: (portfolio: Portfolio) => void;
  onDelete: (portfolio: Portfolio) => void;
}
