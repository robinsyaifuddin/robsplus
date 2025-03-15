
import React from 'react';

interface PricingTier {
  title: string;
  priceRange: string;
  features: string[];
}

interface PricingTiersProps {
  category: string;
  tiers: PricingTier[];
}

const PricingTiers = ({ category, tiers }: PricingTiersProps) => {
  return (
    <div className="mb-10 pl-6">
      <h4 className="text-lg font-semibold mb-4 text-cyber-lightBlue">Tingkatan Harga dan Layanan:</h4>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div 
            key={tier.title}
            className={`${index === 1 ? 'bg-cyber-deepBlue/30' : 'bg-cyber-deepBlue/20'} p-4 rounded-lg border ${index === 1 ? 'border-cyber-purple/20' : 'border-cyber-purple/10'}`}
          >
            <h5 className="font-medium text-white mb-2">{tier.title}</h5>
            <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
              {tier.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTiers;
