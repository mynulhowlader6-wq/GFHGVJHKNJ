
import React from 'react';
import { LandingPageData } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const pageData: LandingPageData = {
  companyName: "Lumina Analytics",
  niche: "AI-powered analytics platform",
  hero: {
    headline: "Transform Your Data Into Actionable Insights",
    subheadline: "AI-powered analytics platform that helps you understand user behavior, predict trends, and make data-driven decisions with confidence.",
    cta: "Start Free Trial"
  },
  features: [
    {
      title: "Real-time Analytics",
      description: "Monitor your product metrics in real-time with our lightning-fast dashboard that updates as your users interact.",
      icon: "fa-bolt"
    },
    {
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and predictions powered by advanced machine learning algorithms.",
      icon: "fa-brain"
    },
    {
      title: "Easy Integration",
      description: "Set up in minutes with our simple SDK. Works seamlessly with your existing tech stack.",
      icon: "fa-plug"
    }
  ],
  pricing: [
    {
      name: "Starter",
      price: "$29",
      features: [
        "Up to 10K events/month",
        "Basic analytics dashboard",
        "7-day data retention",
        "Email support"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$99",
      features: [
        "Up to 100K events/month",
        "Advanced analytics & AI insights",
        "90-day data retention",
        "Priority support",
        "Custom reports"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      features: [
        "Unlimited events",
        "Full AI suite",
        "Unlimited data retention",
        "24/7 dedicated support",
        "Custom integrations",
        "SLA guarantee"
      ],
      isPopular: false
    }
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content: "This platform transformed how we understand our users. The AI insights are incredibly accurate and have helped us increase retention by 40%.",
      avatar: "https://i.pravatar.cc/150?u=1"
    },
    {
      name: "Michael Chen",
      role: "Product Manager at StartupXYZ",
      content: "The real-time analytics give us the edge we need. We can now make decisions based on live data rather than waiting for weekly reports.",
      avatar: "https://i.pravatar.cc/150?u=2"
    }
  ]
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation companyName={pageData.companyName} />
      <Hero
        headline={pageData.hero.headline}
        subheadline={pageData.hero.subheadline}
        cta={pageData.hero.cta}
      />
      <Features features={pageData.features} />
      <section id="testimonials" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted Worldwide</h2>
            <p className="text-slate-400">Join thousands of businesses scaling with our solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pageData.testimonials.map((t, idx) => (
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
      <Pricing pricing={pageData.pricing} />
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
    </div>
  );
};

export default App;
