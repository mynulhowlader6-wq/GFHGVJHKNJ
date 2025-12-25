
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface LandingPageData {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  features: Feature[];
  pricing: PricingTier[];
  testimonials: Testimonial[];
  companyName: string;
  niche: string;
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
