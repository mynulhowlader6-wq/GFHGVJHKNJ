
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <i className="fa-solid fa-bolt text-white text-xs"></i>
            </div>
            <span className="font-bold text-white tracking-tight">LuminaLanding</span>
          </div>
          
          <div className="flex gap-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-800">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-800">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Lumina Landing. All dummy rights reserved. Powered by Gemini.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
