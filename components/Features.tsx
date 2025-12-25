
import React from 'react';
import { Feature } from '../types';

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Capabilities</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to scale your operations without the technical overhead.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${feature.icon} text-purple-500 text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
