
import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, cta }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-purple-600/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-pink-600/10 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/20">
            {cta}
          </button>
          <button className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700">
            Learn More
          </button>
        </div>

        <div className="mt-16 relative">
          <div className="rounded-2xl border border-slate-800 p-2 bg-slate-900/50 backdrop-blur-sm overflow-hidden shadow-2xl animate-float">
            <img 
              src="https://picsum.photos/1200/600?grayscale" 
              alt="Dashboard Preview" 
              className="rounded-xl w-full object-cover h-[300px] md:h-[500px] opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
