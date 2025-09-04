export interface GamePricingData {
  title: string;
  description: string;
  lastUpdated: string;
  dataSource: string;
  availablePlatforms: string[];
  prices: GamePrice[];
  storeLinks: Record<string, string>;
  currencySymbols: Record<string, string>;
}

export interface GamePrice {
  region: string;
  regionCode: string;
  platforms: Record<string, number | null>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  questions: FAQItem[];
}

export interface GamePricingPage {
  gamePricing?: GamePricingData;
  faq?: FAQData;
}