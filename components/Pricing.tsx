
import React from 'react';
import { PricingTier } from '../types';

interface PricingProps {
  pricing: PricingTier[];
}

const Pricing: React.FC<PricingProps> = ({ pricing }) => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Choose the plan that's right for your growth stage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl flex flex-col ${
                tier.isPopular 
                ? 'bg-purple-600 border-purple-400 shadow-2xl shadow-purple-600/20 scale-105 z-10' 
                : 'bg-slate-900 border border-slate-800'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${tier.isPopular ? 'text-white' : 'text-slate-200'}`}>{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${tier.isPopular ? 'text-white' : 'text-white'}`}>{tier.price}</span>
                  <span className={tier.isPopular ? 'text-purple-200' : 'text-slate-400'}>/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <i className={`fa-solid fa-check text-sm ${tier.isPopular ? 'text-white' : 'text-purple-500'}`}></i>
                    <span className={tier.isPopular ? 'text-purple-50' : 'text-slate-400'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                tier.isPopular 
                ? 'bg-white text-purple-600 hover:bg-slate-100' 
                : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
