import axios from 'axios';
import { Hackathon, FilterState, CityOption, TinyFishStatus } from '../types';

const API_BASE = '/api';

export async function fetchHackathons(filters: FilterState): Promise<{
  hackathons: Hackathon[];
  stats: {
    total: number;
    freeCount: number;
    paidCount: number;
    onlineCount: number;
    offlineCount: number;
    hybridCount: number;
    iitCount: number;
    nitCount: number;
    iiitCount: number;
  };
}> {
  const params: Record<string, string> = {};
  if (filters.fee !== 'all') params.fee = filters.fee;
  if (filters.mode !== 'all') params.mode = filters.mode;
  if (filters.city && filters.city !== 'All Locations') params.city = filters.city;
  if (filters.institution !== 'all') params.institution = filters.institution;
  if (filters.search) params.search = filters.search;
  if (filters.sortBy) params.sortBy = filters.sortBy;

  const res = await axios.get(`${API_BASE}/hackathons`, { params });
  return res.data;
}

export async function fetchLocations(): Promise<CityOption[]> {
  const res = await axios.get(`${API_BASE}/locations`);
  return res.data.cities || [];
}

export async function getTinyFishHealth(): Promise<{
  status: string;
  totalHackathons: number;
  tinyFish: TinyFishStatus;
}> {
  const res = await axios.get(`${API_BASE}/health`);
  return res.data;
}

export async function triggerTinyFishDiscovery(params: {
  query?: string;
  mode?: string;
  fee?: string;
}): Promise<{
  success: boolean;
  query: string;
  rawResultsCount: number;
  newHackathonsDiscovered: number;
  hackathons: Hackathon[];
  error?: string;
}> {
  const res = await axios.post(`${API_BASE}/tinyfish/discover`, params);
  return res.data;
}

export async function triggerTinyFishFetchUrl(url: string): Promise<{
  success: boolean;
  hackathon: Hackathon;
  fetchResult: {
    url: string;
    title: string;
    description: string;
    latencyMs: number;
    format: string;
  };
}> {
  const res = await axios.post(`${API_BASE}/tinyfish/fetch-url`, { url });
  return res.data;
}
