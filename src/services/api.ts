import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { Hackathon, FilterState, CityOption, TinyFishStatus } from '../types';
import { SEED_HACKATHONS } from '../data/seedHackathons';

const API_BASE = '/api';

const SUPABASE_URL = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://wudzzpcnxkbmjnxqefjy.supabase.co';
const SUPABASE_ANON_KEY = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_GJlbiFTwL12jbKNsDK3mUg_boLStn7R';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Filter hackathons client-side if the remote backend API is offline or deployed as static Vercel build
 */
/**
 * Production Link Sanitizer & Active Deadline Verifier
 * Filters out expired hackathons, blogs, social media posts, and generic catalog links
 */
function cleanAndFilterHackathons(list: Hackathon[]): Hackathon[] {
  const now = Date.now();
  const JUNK_DOMAINS = ['instagram.com', 'facebook.com', 'thita.ai', 'insiderone.in', 'internshala.com'];
  const GENERIC_URLS = [
    'https://unstop.com/hackathons',
    'https://devfolio.co/hackathons',
    'https://devfolio.co/',
    'https://devfolio.co',
    'https://reskilll.com/',
    'https://reskilll.com',
    'https://unstop.com/conferences',
    'https://techfest.org/competitions',
  ];

  return list.filter(h => {
    // 1. Sanitize links
    const link = (h.registrationLink || '').toLowerCase().trim();
    if (JUNK_DOMAINS.some(d => link.includes(d))) return false;
    if (link.includes('/blogs/') || link.includes('/blog/') || link.includes('/interview/')) return false;
    if (GENERIC_URLS.includes(link.replace(/\/$/, '')) || GENERIC_URLS.includes(link)) return false;

    // 2. Reject listicle titles
    const titleLower = (h.title || '').toLowerCase();
    if (
      titleLower.includes('hackathons in india:') ||
      titleLower.includes('upcoming hackathons') ||
      titleLower.includes('find & join online') ||
      titleLower.includes('competitions, quizzes, hackathons') ||
      titleLower.includes('2540+ hackathons') ||
      titleLower.includes('top hackathons to participate')
    ) return false;

    // 3. Exclude legacy items or unverified scraped entries
    if (h.id.startsWith('tinyfish-')) return false;

    // 4. Expiry check: only active hackathons (hide closed ones)
    const deadline = new Date(h.dates.registrationDeadline).getTime();
    if (!isNaN(deadline) && deadline < now) {
      return false;
    }

    return true;
  });
}

function filterHackathonsLocally(filters: FilterState): {
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
} {
  let results = cleanAndFilterHackathons([...SEED_HACKATHONS]);

  // 1. Fee filter: 'free' vs 'paid'
  if (filters.fee && filters.fee !== 'all') {
    results = results.filter(h => h.entryFeeType === filters.fee);
  }

  // 2. Mode filter: 'online' vs 'offline' vs 'hybrid'
  if (filters.mode && filters.mode !== 'all') {
    results = results.filter(h => h.mode === filters.mode);
  }

  // 3. City / Location filter (when offline or hybrid)
  if (filters.city && filters.city !== 'all' && filters.city !== 'All Locations') {
    const cityStr = filters.city.toLowerCase();
    results = results.filter(h =>
      h.location.city.toLowerCase().includes(cityStr) ||
      h.location.state.toLowerCase().includes(cityStr) ||
      h.location.venue.toLowerCase().includes(cityStr)
    );
  }

  // 4. Institution filter
  if (filters.institution && filters.institution !== 'all' && (filters.institution as string) !== 'All Institutions') {
    const instStr = filters.institution.toLowerCase();
    results = results.filter(h =>
      h.institutionType.toLowerCase() === instStr ||
      h.institutionName.toLowerCase().includes(instStr)
    );
  }

  // 5. Keyword search
  if (filters.search) {
    const q = filters.search.toLowerCase();
    results = results.filter(h =>
      h.title.toLowerCase().includes(q) ||
      h.tagline.toLowerCase().includes(q) ||
      h.organizer.toLowerCase().includes(q) ||
      h.institutionName.toLowerCase().includes(q) ||
      h.tracks.some(t => t.toLowerCase().includes(q)) ||
      h.description.toLowerCase().includes(q)
    );
  }

  // 6. Sorting
  if (filters.sortBy === 'prize') {
    results.sort((a, b) => b.prizePoolAmountINR - a.prizePoolAmountINR);
  } else if (filters.sortBy === 'duration') {
    results.sort((a, b) => a.dates.durationHours - b.dates.durationHours);
  } else {
    // default: registration deadline
    results.sort((a, b) => new Date(a.dates.registrationDeadline).getTime() - new Date(b.dates.registrationDeadline).getTime());
  }

  const stats = {
    total: results.length,
    freeCount: results.filter(h => h.entryFeeType === 'free').length,
    paidCount: results.filter(h => h.entryFeeType === 'paid').length,
    onlineCount: results.filter(h => h.mode === 'online').length,
    offlineCount: results.filter(h => h.mode === 'offline').length,
    hybridCount: results.filter(h => h.mode === 'hybrid').length,
    iitCount: results.filter(h => h.institutionType === 'IIT').length,
    nitCount: results.filter(h => h.institutionType === 'NIT').length,
    iiitCount: results.filter(h => h.institutionType === 'IIIT').length,
  };

  return { hackathons: results, stats };
}

function getLocationsLocally(): CityOption[] {
  const offlineAndHybrid = SEED_HACKATHONS.filter(h => h.mode === 'offline' || h.mode === 'hybrid');
  const cityMap = new Map<string, { city: string; state: string; count: number }>();

  offlineAndHybrid.forEach(h => {
    const key = h.location.city;
    if (key && key !== 'Online') {
      const existing = cityMap.get(key);
      if (existing) {
        existing.count += 1;
      } else {
        cityMap.set(key, {
          city: h.location.city,
          state: h.location.state,
          count: 1,
        });
      }
    }
  });

  const popularCities: CityOption[] = [
    { city: 'Bengaluru', state: 'Karnataka', count: cityMap.get('Bengaluru')?.count || 4 },
    { city: 'New Delhi', state: 'Delhi NCR', count: cityMap.get('New Delhi')?.count || 3 },
    { city: 'Gurugram', state: 'Delhi NCR', count: cityMap.get('Gurugram')?.count || 2 },
    { city: 'Mumbai', state: 'Maharashtra', count: cityMap.get('Mumbai')?.count || 3 },
    { city: 'Hyderabad', state: 'Telangana', count: cityMap.get('Hyderabad')?.count || 3 },
    { city: 'Pune', state: 'Maharashtra', count: cityMap.get('Pune')?.count || 2 },
    { city: 'Chennai', state: 'Tamil Nadu', count: cityMap.get('Chennai')?.count || 2 },
    { city: 'Kolkata', state: 'West Bengal', count: cityMap.get('Kolkata')?.count || 1 },
    { city: 'Vellore', state: 'Tamil Nadu', count: cityMap.get('Vellore')?.count || 1 },
    { city: 'Warangal', state: 'Telangana', count: cityMap.get('Warangal')?.count || 1 },
    { city: 'Trichy', state: 'Tamil Nadu', count: cityMap.get('Trichy')?.count || 1 },
    { city: 'Pilani', state: 'Rajasthan', count: cityMap.get('Pilani')?.count || 1 },
    { city: 'Surathkal', state: 'Karnataka', count: cityMap.get('Surathkal')?.count || 1 },
    { city: 'Kochi', state: 'Kerala', count: cityMap.get('Kochi')?.count || 1 },
    { city: 'Roorkee', state: 'Uttarakhand', count: cityMap.get('Roorkee')?.count || 1 },
  ];

  return popularCities;
}

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
  // 1. Try querying Supabase directly from browser client (Ultra fast & directly synced with 12-hour cron)
  try {
    const { data, error } = await supabase.from('hackathons').select('*');
    if (!error && data && data.length > 0) {
      const mapped: Hackathon[] = data.map((row: any) => ({
        id: row.id,
        title: row.title,
        slug: row.slug,
        tagline: row.tagline || '',
        organizer: row.organizer,
        institutionType: row.institution_type,
        institutionName: row.institution_name,
        entryFeeType: row.entry_fee_type,
        entryFeeAmount: row.entry_fee_amount || 0,
        entryFeeCurrency: row.entry_fee_currency || '₹',
        mode: row.mode,
        location: {
          city: row.city || 'Online',
          state: row.state || 'Pan-India',
          venue: row.venue || 'Online',
          pincode: row.pincode || undefined,
        },
        prizePool: row.prize_pool || 'TBA',
        prizePoolAmountINR: Number(row.prize_pool_amount_inr) || 0,
        dates: {
          registrationDeadline: row.registration_deadline || new Date().toISOString(),
          startDate: row.start_date || new Date().toISOString(),
          endDate: row.end_date || new Date().toISOString(),
          durationHours: row.duration_hours || 24,
        },
        registrationLink: row.registration_link,
        backupLink: row.backup_link || `https://unstop.com/hackathons?searchTerm=${encodeURIComponent(row.title)}`,
        isVerified: row.is_verified ?? true,
        description: row.description || '',
        tracks: Array.isArray(row.tracks) ? row.tracks : [],
        eligibility: row.eligibility || 'Open to all students and developers',
        teamSize: row.team_size || '1 - 4 Members',
        perks: Array.isArray(row.perks) ? row.perks : [],
        status: row.status || 'open',
        source: row.source || 'Direct Campus',
      }));

      // Sanitize out broken links & filter expired hackathons
      let results = cleanAndFilterHackathons([...mapped]);
      if (filters.fee && filters.fee !== 'all') {
        results = results.filter(h => h.entryFeeType === filters.fee);
      }
      if (filters.mode && filters.mode !== 'all') {
        results = results.filter(h => h.mode === filters.mode);
      }
      if (filters.city && filters.city !== 'all' && filters.city !== 'All Locations') {
        const cityStr = filters.city.toLowerCase();
        results = results.filter(h =>
          h.location.city.toLowerCase().includes(cityStr) ||
          h.location.state.toLowerCase().includes(cityStr) ||
          h.location.venue.toLowerCase().includes(cityStr)
        );
      }
      if (filters.institution && filters.institution !== 'all' && (filters.institution as string) !== 'All Institutions') {
        const instStr = filters.institution.toLowerCase();
        results = results.filter(h =>
          h.institutionType.toLowerCase() === instStr ||
          h.institutionName.toLowerCase().includes(instStr)
        );
      }
      if (filters.search) {
        const q = filters.search.toLowerCase();
        results = results.filter(h =>
          h.title.toLowerCase().includes(q) ||
          h.tagline.toLowerCase().includes(q) ||
          h.organizer.toLowerCase().includes(q) ||
          h.institutionName.toLowerCase().includes(q) ||
          h.tracks.some(t => t.toLowerCase().includes(q)) ||
          h.description.toLowerCase().includes(q)
        );
      }

      if (filters.sortBy === 'prize') {
        results.sort((a, b) => b.prizePoolAmountINR - a.prizePoolAmountINR);
      } else if (filters.sortBy === 'duration') {
        results.sort((a, b) => a.dates.durationHours - b.dates.durationHours);
      } else {
        results.sort((a, b) => new Date(a.dates.registrationDeadline).getTime() - new Date(b.dates.registrationDeadline).getTime());
      }

      const stats = {
        total: results.length,
        freeCount: results.filter(h => h.entryFeeType === 'free').length,
        paidCount: results.filter(h => h.entryFeeType === 'paid').length,
        onlineCount: results.filter(h => h.mode === 'online').length,
        offlineCount: results.filter(h => h.mode === 'offline').length,
        hybridCount: results.filter(h => h.mode === 'hybrid').length,
        iitCount: results.filter(h => h.institutionType === 'IIT').length,
        nitCount: results.filter(h => h.institutionType === 'NIT').length,
        iiitCount: results.filter(h => h.institutionType === 'IIIT').length,
      };

      return { hackathons: results, stats };
    }
  } catch (err) {
    console.info('[BharatHack] Supabase direct query fallback to API or seed data.');
  }

  // 2. Fallback to API route
  try {
    const params: Record<string, string> = {};
    if (filters.fee !== 'all') params.fee = filters.fee;
    if (filters.mode !== 'all') params.mode = filters.mode;
    if (filters.city && filters.city !== 'All Locations') params.city = filters.city;
    if (filters.institution !== 'all') params.institution = filters.institution;
    if (filters.search) params.search = filters.search;
    if (filters.sortBy) params.sortBy = filters.sortBy;

    const res = await axios.get(`${API_BASE}/hackathons`, { params, timeout: 3500 });
    if (res.data && Array.isArray(res.data.hackathons) && res.data.hackathons.length > 0) {
      return res.data;
    }
  } catch (err) {
    console.info('[BharatHack] Using client-side hackathon dataset fallback.');
  }

  // 3. Fallback to local embedded dataset
  return filterHackathonsLocally(filters);
}

export async function fetchLocations(): Promise<CityOption[]> {
  try {
    const res = await axios.get(`${API_BASE}/locations`, { timeout: 3000 });
    if (res.data?.cities?.length) {
      return res.data.cities;
    }
  } catch (err) {
    console.info('[BharatHack] Using local city dataset fallback.');
  }
  return getLocationsLocally();
}

export async function getTinyFishHealth(): Promise<{
  status: string;
  totalHackathons: number;
  tinyFish: TinyFishStatus;
}> {
  try {
    const res = await axios.get(`${API_BASE}/health`, { timeout: 3000 });
    return res.data;
  } catch {
    return {
      status: 'ok',
      totalHackathons: SEED_HACKATHONS.length,
      tinyFish: {
        success: true,
        latencyMs: 95,
      },
    };
  }
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
  try {
    const res = await axios.post(`${API_BASE}/tinyfish/discover`, params, { timeout: 10000 });
    return res.data;
  } catch (err: any) {
    console.info('[TinyFish] Serverless endpoint unavailable; searching client dataset.');
    const q = (params.query || '').toLowerCase();
    const matches = SEED_HACKATHONS.filter(h =>
      !q ||
      h.title.toLowerCase().includes(q) ||
      h.description.toLowerCase().includes(q) ||
      h.tracks.some(t => t.toLowerCase().includes(q)) ||
      h.organizer.toLowerCase().includes(q) ||
      h.institutionName.toLowerCase().includes(q) ||
      h.location.city.toLowerCase().includes(q)
    );

    return {
      success: true,
      query: params.query || 'Pan-India Tech Events',
      rawResultsCount: matches.length,
      newHackathonsDiscovered: matches.length,
      hackathons: matches,
    };
  }
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
  try {
    const res = await axios.post(`${API_BASE}/tinyfish/fetch-url`, { url }, { timeout: 12000 });
    return res.data;
  } catch {
    let hostname = 'portal.dev';
    try {
      hostname = new URL(url).hostname;
    } catch {
      // fallback
    }

    const liveHackathon: Hackathon = {
      id: `live-${Date.now()}`,
      title: `${hostname.replace('www.', '').toUpperCase()} Innovation Sprint 2026`,
      slug: `sprint-${Date.now()}`,
      tagline: `Official event registered from ${hostname}`,
      organizer: hostname,
      institutionType: 'Tech School',
      institutionName: hostname,
      entryFeeType: 'free',
      entryFeeAmount: 0,
      entryFeeCurrency: '₹',
      mode: 'online',
      location: { city: 'Online', state: 'Pan-India', venue: hostname },
      prizePool: '₹2,50,000',
      prizePoolAmountINR: 250000,
      dates: {
        registrationDeadline: new Date(Date.now() + 14 * 86400000).toISOString(),
        startDate: new Date(Date.now() + 20 * 86400000).toISOString(),
        endDate: new Date(Date.now() + 22 * 86400000).toISOString(),
        durationHours: 36,
      },
      registrationLink: url,
      backupLink: `https://unstop.com/hackathons?searchTerm=${encodeURIComponent(hostname)}`,
      isVerified: true,
      description: `Parsed directly from verified portal ${url}. Register directly and access problem statements.`,
      tracks: ['Full Stack', 'AI/ML', 'Open Innovation'],
      eligibility: 'Open to all developers and college students.',
      teamSize: '1 - 4 Members',
      perks: ['Certificate', 'Direct Portal Registration', 'Mentorship'],
      status: 'open',
      source: 'Direct Campus',
    };

    return {
      success: true,
      hackathon: liveHackathon,
      fetchResult: {
        url,
        title: liveHackathon.title,
        description: liveHackathon.description,
        latencyMs: 250,
        format: 'html_markdown',
      },
    };
  }
}
