
import React, { useState, useEffect, useCallback } from 'react';
import { LandingPageData, GenerationStatus } from './types';
import { generateLandingContent } from './services/geminiService';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const DEFAULT_NICHE = "SaaS Platform for AI-driven Product Analytics";

const App: React.FC = () => {
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [data, setData] = useState<LandingPageData | null>(null);
  const [niche, setNiche] = useState(DEFAULT_NICHE);
  const [inputValue, setInputValue] = useState(DEFAULT_NICHE);

  const fetchLandingContent = useCallback(async (targetNiche: string) => {
    setStatus(GenerationStatus.LOADING);
    try {
      const result = await generateLandingContent(targetNiche);
      setData(result);
      setStatus(GenerationStatus.SUCCESS);
    } catch (err) {
      console.error(err);
      setStatus(GenerationStatus.ERROR);
    }
  }, []);

  useEffect(() => {
    fetchLandingContent(DEFAULT_NICHE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setNiche(inputValue);
      fetchLandingContent(inputValue);
    }
  };

  if (status === GenerationStatus.LOADING && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 flex-col gap-6">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-center animate-pulse">
          <h2 className="text-2xl font-bold text-white mb-2">Generating Excellence...</h2>
          <p className="text-slate-400">Gemini is crafting high-converting copy for you.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Dynamic Overlay Form for Re-generation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-lg">
        <form 
          onSubmit={handleGenerate}
          className="bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700 shadow-2xl flex gap-2"
        >
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Try another niche (e.g. Yoga Studio)..."
            className="flex-grow bg-slate-800 border-none rounded-xl px-4 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
          />
          <button 
            type="submit" 
            disabled={status === GenerationStatus.LOADING}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2"
          >
            {status === GenerationStatus.LOADING ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            )}
            <span className="hidden sm:inline">Remix</span>
          </button>
        </form>
      </div>

      {data && (
        <>
          <Navigation companyName={data.companyName} />
          <Hero 
            headline={data.hero.headline}
            subheadline={data.hero.subheadline}
            cta={data.hero.cta}
          />
          
          <Features features={data.features} />
          
          <section id="testimonials" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted Worldwide</h2>
                <p className="text-slate-400">Join thousands of businesses scaling with our solutions.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.testimonials.map((t, idx) => (
                  <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                    <p className="text-lg text-slate-300 italic mb-6">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      <img src={`https://i.pravatar.cc/150?u=${idx}`} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-purple-600/20" />
                      <div>
                        <h4 className="text-white font-bold">{t.name}</h4>
                        <p className="text-slate-500 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Pricing pricing={data.pricing} />
          
          <section className="py-24 bg-gradient-to-b from-slate-950 to-purple-950/20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Ready to transform your workflow?</h2>
              <p className="text-xl text-slate-400 mb-10">Start your 14-day free trial today. No credit card required.</p>
              <button className="px-10 py-5 bg-white text-slate-950 rounded-full font-extrabold text-xl hover:scale-105 transition-transform shadow-2xl shadow-white/10">
                Get Started Now
              </button>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
