
export interface PortfolioItem {
  title: string;
  client: string;
  image: string;
  description: string;
  testimonial: string;
  clientRole: string;
  clientImage: string;
  rating: number;
}

export interface PortfolioData {
  jasaTugas: PortfolioItem[];
  jasaDigital: PortfolioItem[];
  jasaPembelajaran: PortfolioItem[];
}

export interface PortfolioSectionProps {
  preview?: boolean;
}
