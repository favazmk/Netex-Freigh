export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  bulletPoints: string[];
}

export interface SpecCategory {
  id: string;
  name: string;
  subtitle: string;
  capacityTonnes: number;
  capacityVolM3: number;
  illustrationType: 'truck' | 'container' | 'car-transporter';
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  advantages: {
    title: string;
    description: string;
    isExpanded?: boolean;
  }[];
}

export interface RouteOption {
  code: string;
  city: string;
  country: string;
  hub: string;
}

export interface QuoteDraft {
  id: string;
  origin: string;
  destination: string;
  serviceType: 'air' | 'sea' | 'land';
  weightKg: number;
  volumeM3: number;
  cargoType: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes?: string;
  createdAt: string;
  estimatedCostUsd: number;
  estimatedDays: number;
}
