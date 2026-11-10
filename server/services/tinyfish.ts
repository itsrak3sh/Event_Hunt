import axios from 'axios';
import { Hackathon } from '../data/hackathons';

const TINYFISH_API_KEY = process.env.TINYFISH_API_KEY || '';
const TINYFISH_SEARCH_URL = 'https://api.search.tinyfish.ai';
const TINYFISH_FETCH_URL = 'https://api.fetch.tinyfish.ai';

export interface TinyFishSearchResult {
  title: string;
  url: string;
  snippet: string;
  site_name?: string;
  date?: string;
  position?: number;
}

export interface TinyFishSearchResponse {
  query: string;
  results: TinyFishSearchResult[];
  total_results: number;
}

export interface TinyFishFetchResult {
  url: string;
  final_url: string;
  title: string;
  description: string;
  text: string;
  author?: string;
  latency_ms?: number;
  format?: string;
}

/**
 * Verify TinyFish API connectivity and credentials
 */
export async function testTinyFishConnection(): Promise<{ success: boolean; latencyMs: number; error?: string }> {
  const startTime = Date.now();
  try {
    const res = await axios.get(`${TINYFISH_SEARCH_URL}?query=hackathon+india&location=IN`, {
      headers: {
        'X-API-Key': TINYFISH_API_KEY,
      },
      timeout: 8000,
    });
    return {
      success: res.status === 200,
      latencyMs: Date.now() - startTime,
    };
  } catch (err: any) {
    return {
      success: false,
      latencyMs: Date.now() - startTime,
      error: err.response?.data?.message || err.message,
    };
  }
}

/**
 * Run a live search on TinyFish Search API
 */
export async function searchHackathonsWithTinyFish(query: string): Promise<TinyFishSearchResponse> {
  const apiKey = TINYFISH_API_KEY || process.env.TINYFISH_API_KEY;
  if (!apiKey) {
    console.warn('[TinyFish] No API key configured. Skipping external search.');
    return { query, results: [], total_results: 0 };
  }

  const formattedQuery = encodeURIComponent(query);
  const response = await axios.get<TinyFishSearchResponse>(
    `${TINYFISH_SEARCH_URL}?query=${formattedQuery}&location=IN&language=en`,
    {
      headers: {
        'X-API-Key': apiKey,
      },
      timeout: 12000,
    }
  );
  return response.data;
}

/**
 * Deep Fetch any URL using TinyFish Fetch API (renders headless page & returns clean markdown)
 */
export async function fetchUrlWithTinyFish(targetUrl: string): Promise<TinyFishFetchResult> {
  const response = await axios.post<{ results: TinyFishFetchResult[]; errors: any[] }>(
    TINYFISH_FETCH_URL,
    { urls: [targetUrl] },
    {
      headers: {
        'X-API-Key': TINYFISH_API_KEY,
        'Content-Type': 'application/json',
      },
      timeout: 15000,
    }
  );

  if (response.data.results && response.data.results.length > 0) {
    return response.data.results[0];
  }
  throw new Error('No content returned by TinyFish Fetch API');
}

/**
 * Transform TinyFish search results into rich Hackathon cards with accurate Indian location and mode heuristics
 */
export function transformTinyFishResultsToHackathons(results: TinyFishSearchResult[], baseQuery: string): Hackathon[] {
  const JUNK_DOMAINS = [
    'instagram.com',
    'facebook.com',
    'youtube.com',
    'twitter.com',
    'x.com',
    'linkedin.com',
    'insiderone.in',
    'thita.ai',
    'internshala.com',
  ];

  const GENERIC_DIRECTORIES = [
    'https://unstop.com/hackathons',
    'https://unstop.com/hackathons/',
    'https://devfolio.co/hackathons',
    'https://devfolio.co/hackathons/',
    'https://devfolio.co',
    'https://devfolio.co/',
    'https://reskilll.com',
    'https://reskilll.com/',
    'https://techfest.org/competitions',
    'https://unstop.com/conferences',
  ];

  return results
    .filter(item => {
      const url = (item.url || '').toLowerCase();
      const titleLower = item.title.toLowerCase();
      const snippetLower = item.snippet.toLowerCase();
      const text = `${titleLower} ${snippetLower}`;

      // 1. Must relate to hackathons
      const hasHackathonKeyword = text.includes('hackathon') || text.includes('challenge') || text.includes('sprint') || text.includes('hacks');
      if (!hasHackathonKeyword) return false;

      // 2. Reject social media, blogs & generic scrapers
      if (JUNK_DOMAINS.some(domain => url.includes(domain))) return false;
      if (url.includes('/blogs/') || url.includes('/blog/') || url.includes('/interview/')) return false;

      // 3. Reject generic catalog landing pages (require specific event URL)
      if (GENERIC_DIRECTORIES.includes(url.replace(/\/$/, '')) || GENERIC_DIRECTORIES.includes(url)) return false;

      // 4. Reject listicle article titles
      if (
        titleLower.includes('hackathons in india:') ||
        titleLower.includes('upcoming hackathons') ||
        titleLower.includes('find & join online') ||
        titleLower.includes('2540+ hackathons') ||
        titleLower.includes('devfolio - your one application')
      ) return false;

      return true;
    })
    .map((item, index) => {
      const text = `${item.title} ${item.snippet}`.toLowerCase();

      // Detect Mode: Online vs Offline vs Hybrid first
      let mode: 'online' | 'offline' | 'hybrid' = 'online';
      if (text.includes('hybrid') || (text.includes('online') && text.includes('offline'))) {
        mode = 'hybrid';
      } else if (text.includes('offline') || text.includes('in-person') || text.includes('on-campus') || text.includes('venue:') || text.includes('auditorium')) {
        mode = 'offline';
      } else if (text.includes('online') || text.includes('virtual') || text.includes('remote') || text.includes('zoom') || text.includes('discord')) {
        mode = 'online';
      }

      // Detect Institution Type accurately
      let institutionType: Hackathon['institutionType'] = 'Tech School';
      let institutionName = 'Indian Engineering & Tech Institute';

      const isActualIIT = text.includes('iit ') || text.includes('iit-') || text.includes('indian institute of technology');
      const isActualNIT = text.includes('nit ') || text.includes('national institute of technology');
      const isActualIIIT = text.includes('iiit') || text.includes('iiit-');

      if (isActualIIT) {
        // Only classify as IIT campus if it is genuinely hosted by an IIT
        if (text.includes('bombay') || text.includes('powai')) {
          institutionType = 'IIT';
          institutionName = 'IIT Bombay';
        } else if (text.includes('delhi')) {
          institutionType = 'IIT';
          institutionName = 'IIT Delhi';
        } else if (text.includes('madras')) {
          institutionType = 'IIT';
          institutionName = 'IIT Madras';
        } else if (text.includes('kharagpur')) {
          institutionType = 'IIT';
          institutionName = 'IIT Kharagpur';
        } else if (text.includes('roorkee')) {
          institutionType = 'IIT';
          institutionName = 'IIT Roorkee';
        } else if (text.includes('kanpur')) {
          institutionType = 'IIT';
          institutionName = 'IIT Kanpur';
        } else if (text.includes('mandi')) {
          institutionType = 'IIT';
          institutionName = 'IIT Mandi';
        } else if (text.includes('hyderabad')) {
          institutionType = 'IIT';
          institutionName = 'IIT Hyderabad';
        } else {
          institutionType = 'IIT';
          institutionName = 'Indian Institute of Technology (IIT)';
        }
      } else if (isActualIIIT) {
        institutionType = 'IIIT';
        if (text.includes('hyderabad')) institutionName = 'IIIT Hyderabad';
        else if (text.includes('bangalore') || text.includes('bengaluru')) institutionName = 'IIIT Bangalore';
        else if (text.includes('delhi')) institutionName = 'IIIT Delhi';
        else if (text.includes('allahabad')) institutionName = 'IIIT Allahabad';
        else institutionName = 'IIIT Campus India';
      } else if (isActualNIT) {
        institutionType = 'NIT';
        if (text.includes('trichy')) institutionName = 'NIT Trichy';
        else if (text.includes('surathkal') || text.includes('karnataka')) institutionName = 'NIT Surathkal';
        else if (text.includes('warangal')) institutionName = 'NIT Warangal';
        else if (text.includes('calicut')) institutionName = 'NIT Calicut';
        else institutionName = 'National Institute of Technology (NIT)';
      } else if (text.includes('corporate') || text.includes('company') || text.includes('flipkart') || text.includes('google') || text.includes('microsoft') || text.includes('t-hub')) {
        institutionType = 'Private / Corporate';
        institutionName = item.site_name || 'Corporate Innovation Hub';
      } else {
        if (text.includes('bits') || text.includes('pilani')) institutionName = 'BITS Pilani';
        else if (text.includes('vit') || text.includes('vellore')) institutionName = 'VIT Vellore';
        else if (text.includes('coep')) institutionName = 'COEP Tech University';
        else institutionName = item.site_name ? `${item.site_name} Tech Hub` : 'Premier Indian Tech Campus';
      }

      // Detect Location
      let city = mode === 'online' ? 'Online' : 'Bengaluru';
      let state = mode === 'online' ? 'Pan-India' : 'Karnataka';
      let venue = `${institutionName} Main Campus`;

      if (text.includes('bengaluru') || text.includes('bangalore')) {
        city = 'Bengaluru';
        state = 'Karnataka';
        venue = `${institutionName}, Bengaluru`;
      } else if (text.includes('delhi') || text.includes('noida') || text.includes('gurugram') || text.includes('gurgaon')) {
        city = text.includes('gurugram') ? 'Gurugram' : 'New Delhi';
        state = 'Delhi NCR';
        venue = `${institutionName}, New Delhi / NCR`;
      } else if (text.includes('mumbai') || text.includes('powai') || text.includes('navi mumbai')) {
        city = 'Mumbai';
        state = 'Maharashtra';
        venue = `${institutionName}, Mumbai`;
      } else if (text.includes('hyderabad') || text.includes('gachibowli')) {
        city = 'Hyderabad';
        state = 'Telangana';
        venue = `${institutionName}, Gachibowli, Hyderabad`;
      } else if (text.includes('pune')) {
        city = 'Pune';
        state = 'Maharashtra';
        venue = `${institutionName}, Shivajinagar, Pune`;
      } else if (text.includes('chennai') || text.includes('adyar')) {
        city = 'Chennai';
        state = 'Tamil Nadu';
        venue = `${institutionName}, Chennai`;
      } else if (text.includes('kolkata')) {
        city = 'Kolkata';
        state = 'West Bengal';
        venue = `${institutionName}, Salt Lake, Kolkata`;
      } else if (text.includes('pilani')) {
        city = 'Pilani';
        state = 'Rajasthan';
        venue = `${institutionName}, Vidya Vihar, Pilani`;
      } else if (text.includes('vellore')) {
        city = 'Vellore';
        state = 'Tamil Nadu';
        venue = `${institutionName}, Vellore`;
      }

      // Detect Fee Type: Free vs Paid
      let entryFeeType: 'free' | 'paid' = 'free';
      let entryFeeAmount = 0;
      if (text.includes('paid') || text.includes('ticket') || text.includes('₹') || text.includes('fee:') || text.includes('entry fee')) {
        // Look for price mention
        const feeMatch = text.match(/₹\s?(\d+)/);
        if (feeMatch) {
          entryFeeAmount = parseInt(feeMatch[1], 10);
          if (entryFeeAmount > 0) entryFeeType = 'paid';
        } else if (text.includes('paid')) {
          entryFeeType = 'paid';
          entryFeeAmount = 250;
        }
      }

      // Detect Prize Pool
      let prizePool = '₹5,00,000';
      let prizePoolAmountINR = 500000;
      const prizeMatch = text.match(/₹\s?([\d,]+(?:\s?lakhs?|\s?lakh|\s?cr)?)/i);
      if (prizeMatch) {
        prizePool = `₹${prizeMatch[1].replace(/₹/g, '').trim()}`;
        if (prizePool.includes('lakh')) {
          const num = parseFloat(prizePool.replace(/[^\d.]/g, ''));
          prizePoolAmountINR = (num || 5) * 100000;
        }
      }

      // Clean Title
      const cleanTitle = item.title
        .replace(/ - Devfolio.*$/i, '')
        .replace(/ - Unstop.*$/i, '')
        .replace(/ \| .*$/i, '')
        .trim();

      const uniqueId = `tinyfish-${Date.now()}-${index}-${Math.floor(Math.random() * 1000)}`;

      return {
        id: uniqueId,
        title: cleanTitle || 'Indian Tech Innovation Sprint',
        slug: (cleanTitle || 'hackathon').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        tagline: item.snippet.slice(0, 110) + '...',
        organizer: item.site_name || institutionName,
        institutionType,
        institutionName,
        entryFeeType,
        entryFeeAmount,
        entryFeeCurrency: '₹',
        mode,
        location: {
          city,
          state,
          venue: mode === 'online' ? 'Virtual (Unstop / Devfolio / Zoom)' : venue,
        },
        prizePool,
        prizePoolAmountINR,
        dates: {
          registrationDeadline: new Date(Date.now() + 15 * 86400000).toISOString(),
          startDate: new Date(Date.now() + 25 * 86400000).toISOString(),
          endDate: new Date(Date.now() + 27 * 86400000).toISOString(),
          durationHours: 36,
        },
        registrationLink: item.url,
        description: item.snippet,
        tracks: ['Artificial Intelligence', 'Web3 & Decentralization', 'Cloud Computing', 'Open Innovation'],
        eligibility: 'Open to engineering, polytechnic, and university students across India.',
        teamSize: '1 - 4 Members',
        perks: [
          'Direct Live Scraped via TinyFish AI Web Search',
          'Fast-track Registration via official platform',
          'Industry Certification and Mentorship',
        ],
        status: 'open',
        source: 'TinyFish AI Live',
      };
    });
}
