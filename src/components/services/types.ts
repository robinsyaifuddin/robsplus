
import { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface PricingTier {
  title: string;
  priceRange: string;
  features: string[];
}

export interface ServiceCategory {
  description: string;
  icon: ReactNode;
  note: string;
  items: ServiceItem[];
  pricingTiers: PricingTier[];
}

export interface ServicesData {
  [key: string]: ServiceCategory;
}
