export interface Hackathon {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  organizer: string;
  institutionType: 'IIT' | 'NIT' | 'IIIT' | 'Tech School' | 'Private / Corporate' | 'Corporate / Private';
  institutionName: string;
  entryFeeType: 'free' | 'paid';
  entryFeeAmount: number;
  entryFeeCurrency: string;
  mode: 'online' | 'offline' | 'hybrid';
  location: {
    city: string;
    state: string;
    venue: string;
    pincode?: string;
  };
  prizePool: string;
  prizePoolAmountINR: number;
  dates: {
    registrationDeadline: string;
    startDate: string;
    endDate: string;
    durationHours: number;
  };
  registrationLink: string;
  backupLink?: string;
  isVerified?: boolean;
  description: string;
  tracks: string[];
  eligibility: string;
  teamSize: string;
  perks: string[];
  status: 'open' | 'closing_soon' | 'upcoming';
  source: 'TinyFish AI Live' | 'Devfolio' | 'Unstop' | 'Direct Campus';
  featured?: boolean;
}

export type FeeFilter = 'all' | 'free' | 'paid';
export type ModeFilter = 'all' | 'online' | 'offline' | 'hybrid';
export type InstitutionFilter = 'all' | 'IIT' | 'NIT' | 'IIIT' | 'Tech School' | 'Private / Corporate' | 'Corporate / Private';

export interface FilterState {
  fee: FeeFilter;
  mode: ModeFilter;
  city: string;
  institution: InstitutionFilter;
  search: string;
  sortBy: 'deadline' | 'prize' | 'duration';
}

export interface CityOption {
  city: string;
  state: string;
  count: number;
}

export interface TinyFishStatus {
  success: boolean;
  latencyMs: number;
  error?: string;
}
