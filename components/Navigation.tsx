
import React from 'react';

interface NavigationProps {
  companyName: string;
}

const Navigation: React.FC<NavigationProps> = ({ companyName }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-bolt text-white"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">{companyName}</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors">Social Proof</a>
          </div>
          <div>
            <button className="bg-white text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
