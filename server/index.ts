import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { Hackathon, SEED_HACKATHONS } from './data/hackathons';
import {
  testTinyFishConnection,
  searchHackathonsWithTinyFish,
  fetchUrlWithTinyFish,
  transformTinyFishResultsToHackathons,
} from './services/tinyfish';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory hackathon repository initialized with seed data
let hackathonsDatabase: Hackathon[] = [...SEED_HACKATHONS];

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

/**
 * Health check & TinyFish connectivity status
 */
app.get('/api/health', async (req: Request, res: Response) => {
  const tinyFishStatus = await testTinyFishConnection();
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    totalHackathons: hackathonsDatabase.length,
    tinyFish: tinyFishStatus,
  });
});

/**
 * Get hackathons with filters:
 * - fee: 'free' | 'paid' | 'all'
 * - mode: 'online' | 'offline' | 'hybrid' | 'all'
 * - city: location string
 * - institution: 'IIT' | 'NIT' | 'IIIT' | 'Tech School' | 'Private / Corporate' | 'all'
 * - search: query text
 */
app.get('/api/hackathons', (req: Request, res: Response) => {
  const {
    fee,
    mode,
    city,
    institution,
    search,
    sortBy = 'deadline',
  } = req.query;

  let results = [...hackathonsDatabase];

  // 1. Fee filter: 'free' vs 'paid'
  if (fee && fee !== 'all') {
    results = results.filter(h => h.entryFeeType === fee);
  }

  // 2. Mode filter: 'online' vs 'offline' vs 'hybrid'
  if (mode && mode !== 'all') {
    results = results.filter(h => h.mode === mode);
  }

  // 3. City / Location filter (when offline or hybrid)
  if (city && city !== 'all' && city !== 'All Locations') {
    const cityStr = String(city).toLowerCase();
    results = results.filter(h =>
      h.location.city.toLowerCase().includes(cityStr) ||
      h.location.state.toLowerCase().includes(cityStr) ||
      h.location.venue.toLowerCase().includes(cityStr)
    );
  }

  // 4. Institution filter
  if (institution && institution !== 'all' && institution !== 'All Institutions') {
    const instStr = String(institution).toLowerCase();
    results = results.filter(h =>
      h.institutionType.toLowerCase() === instStr ||
      h.institutionName.toLowerCase().includes(instStr)
    );
  }

  // 5. Keyword search
  if (search) {
    const q = String(search).toLowerCase();
    results = results.filter(h =>
      h.title.toLowerCase().includes(q) ||
      h.tagline.toLowerCase().includes(q) ||
      h.organizer.toLowerCase().includes(q) ||
      h.institutionName.toLowerCase().includes(q) ||
      h.location.city.toLowerCase().includes(q) ||
      h.tracks.some(t => t.toLowerCase().includes(q))
    );
  }

  // Sort
  if (sortBy === 'prize') {
    results.sort((a, b) => b.prizePoolAmountINR - a.prizePoolAmountINR);
  } else if (sortBy === 'deadline') {
    results.sort((a, b) => new Date(a.dates.registrationDeadline).getTime() - new Date(b.dates.registrationDeadline).getTime());
  } else if (sortBy === 'duration') {
    results.sort((a, b) => a.dates.durationHours - b.dates.durationHours);
  }

  // Calculate summary counts
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

  res.json({
    hackathons: results,
    stats,
  });
});

/**
 * Get distinct locations for filter dropdown
 */
app.get('/api/locations', (req: Request, res: Response) => {
  const offlineAndHybrid = hackathonsDatabase.filter(h => h.mode === 'offline' || h.mode === 'hybrid');
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

  const popularCities = [
    { city: 'Bengaluru', state: 'Karnataka', count: cityMap.get('Bengaluru')?.count || 0 },
    { city: 'New Delhi', state: 'Delhi NCR', count: cityMap.get('New Delhi')?.count || 0 },
    { city: 'Gurugram', state: 'Delhi NCR', count: cityMap.get('Gurugram')?.count || 0 },
    { city: 'Mumbai', state: 'Maharashtra', count: cityMap.get('Mumbai')?.count || 0 },
    { city: 'Hyderabad', state: 'Telangana', count: cityMap.get('Hyderabad')?.count || 0 },
    { city: 'Pune', state: 'Maharashtra', count: cityMap.get('Pune')?.count || 0 },
    { city: 'Chennai', state: 'Tamil Nadu', count: cityMap.get('Chennai')?.count || 0 },
    { city: 'Kolkata', state: 'West Bengal', count: cityMap.get('Kolkata')?.count || 0 },
    { city: 'Tiruchirappalli', state: 'Tamil Nadu', count: cityMap.get('Tiruchirappalli')?.count || 0 },
    { city: 'Vellore', state: 'Tamil Nadu', count: cityMap.get('Vellore')?.count || 0 },
    { city: 'Pilani', state: 'Rajasthan', count: cityMap.get('Pilani')?.count || 0 },
    { city: 'Roorkee', state: 'Uttarakhand', count: cityMap.get('Roorkee')?.count || 0 },
    { city: 'Kochi', state: 'Kerala', count: cityMap.get('Kochi')?.count || 0 },
    { city: 'Mangaluru', state: 'Karnataka', count: cityMap.get('Mangaluru')?.count || 0 },
  ];

  res.json({
    cities: popularCities,
  });
});

/**
 * Live Discover using TinyFish Search API
 */
app.post('/api/tinyfish/discover', async (req: Request, res: Response) => {
  const { query, mode, fee } = req.body;

  let searchQuery = query || 'hackathons in india 2026 devfolio unstop iit nit';
  if (mode === 'offline') searchQuery += ' offline campus';
  if (mode === 'online') searchQuery += ' online virtual';
  if (fee === 'free') searchQuery += ' free entry';
  if (fee === 'paid') searchQuery += ' registration fee';

  try {
    console.log(`[TinyFish API] Executing live search for: "${searchQuery}"`);
    const rawData = await searchHackathonsWithTinyFish(searchQuery);
    const discovered = transformTinyFishResultsToHackathons(rawData.results, searchQuery);

    // Merge non-duplicate hackathons into database
    let addedCount = 0;
    discovered.forEach(newHack => {
      const exists = hackathonsDatabase.some(
        h => h.registrationLink === newHack.registrationLink || h.title.toLowerCase() === newHack.title.toLowerCase()
      );
      if (!exists) {
        hackathonsDatabase.unshift(newHack);
        addedCount++;
      }
    });

    res.json({
      success: true,
      query: searchQuery,
      rawResultsCount: rawData.results?.length || 0,
      newHackathonsDiscovered: addedCount,
      hackathons: discovered,
    });
  } catch (error: any) {
    console.error('[TinyFish API Error]', error.message);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to search hackathons with TinyFish API',
    });
  }
});

/**
 * Deep Fetch any URL with TinyFish Fetch API
 */
app.post('/api/tinyfish/fetch-url', async (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url || !url.startsWith('http')) {
    return res.status(400).json({ error: 'Valid HTTP/HTTPS URL is required' });
  }

  try {
    console.log(`[TinyFish Fetch API] Fetching: ${url}`);
    const fetchResult = await fetchUrlWithTinyFish(url);

    // Parse markdown into a structured hackathon
    const text = (fetchResult.text || '').toLowerCase();
    const title = fetchResult.title || 'Extracted Hackathon from TinyFish Fetch';
    const isFree = text.includes('free') && !text.includes('paid');
    const isOffline = text.includes('offline') || text.includes('venue') || text.includes('campus');
    const isHybrid = text.includes('hybrid');

    const mode: 'online' | 'offline' | 'hybrid' = isHybrid ? 'hybrid' : (isOffline ? 'offline' : 'online');
    const entryFeeType: 'free' | 'paid' = isFree ? 'free' : (text.includes('fee') || text.includes('₹') ? 'paid' : 'free');

    const newHack: Hackathon = {
      id: `tinyfish-fetch-${Date.now()}`,
      title: title.slice(0, 70),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50),
      tagline: (fetchResult.description || fetchResult.text.slice(0, 100) + '...').slice(0, 120),
      organizer: fetchResult.author || new URL(url).hostname,
      institutionType: text.includes('iit') ? 'IIT' : (text.includes('nit') ? 'NIT' : (text.includes('iiit') ? 'IIIT' : 'Tech School')),
      institutionName: fetchResult.title,
      entryFeeType,
      entryFeeAmount: entryFeeType === 'paid' ? 250 : 0,
      entryFeeCurrency: '₹',
      mode,
      location: {
        city: mode === 'online' ? 'Online' : 'Bengaluru',
        state: mode === 'online' ? 'Pan-India' : 'Karnataka',
        venue: mode === 'online' ? 'Virtual' : 'Main Auditorium / Campus Lab',
      },
      prizePool: '₹5,00,000',
      prizePoolAmountINR: 500000,
      dates: {
        registrationDeadline: new Date(Date.now() + 20 * 86400000).toISOString(),
        startDate: new Date(Date.now() + 30 * 86400000).toISOString(),
        endDate: new Date(Date.now() + 32 * 86400000).toISOString(),
        durationHours: 36,
      },
      registrationLink: url,
      description: fetchResult.text.slice(0, 450),
      tracks: ['AI/ML', 'Full Stack', 'Web3', 'Open Innovation'],
      eligibility: 'Open to engineering and design students across India',
      teamSize: '1 - 4 Members',
      perks: ['Fetched & Verified via TinyFish Cloud Headless Browser', 'Instant Direct Registration Link'],
      status: 'open',
      source: 'TinyFish AI Live',
    };

    hackathonsDatabase.unshift(newHack);

    res.json({
      success: true,
      hackathon: newHack,
      fetchResult: {
        url: fetchResult.url,
        title: fetchResult.title,
        description: fetchResult.description,
        latencyMs: fetchResult.latency_ms,
        format: fetchResult.format,
      },
    });
  } catch (error: any) {
    console.error('[TinyFish Fetch Error]', error.message);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch URL with TinyFish',
    });
  }
});

// Serve static frontend build if available
const distPath = path.join(process.cwd(), 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req: Request, res: Response) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(distPath, 'index.html'));
    }
  });
}

const server = app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 BharatHack API Server running on http://localhost:${PORT} and http://127.0.0.1:${PORT}`);
  console.log(`🔑 TinyFish API Key loaded: ${process.env.TINYFISH_API_KEY ? 'Yes (configured)' : 'No'}`);
});
