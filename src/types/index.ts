export interface HomepageSignal {
  title: string;
  slug: string;
  market: string;
  asset: string;
  marketBias: string;
  confidence: number;
}

export interface HomepageMarket {
  market: string;

  reports: number;

  bullish: number;

  bearish: number;

  neutral: number;

  confidence: number;
}

export interface MarketOverview {
  market: string;

  bias: string;

  confidence: number;

  totalSignals: number;

  topAssets: string[];

  summary: string;
}

export interface MarketsResponse {
  items: MarketOverview[];
}

// Strategy

export interface Strategy {
  slug: string;
  title: string;
  category: string;
  description: string;
  riskLevel: string;
}
