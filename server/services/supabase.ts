import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import dotenv from 'dotenv';
import { Hackathon } from '../data/hackathons';
import { searchHackathonsWithTinyFish, transformTinyFishResultsToHackathons } from './tinyfish';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://wudzzpcnxkbmjnxqefjy.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_GJlbiFTwL12jbKNsDK3mUg_boLStn7R';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * Generates a guaranteed fallback backup link (e.g. Unstop search portal)
 */
export function generateBackupLink(title: string, organizer: string): string {
  const cleanTitle = title.replace(/[^\w\s]/gi, ' ').trim();
  return `https://unstop.com/hackathons?searchTerm=${encodeURIComponent(cleanTitle)}`;
}

/**
 * Fast Link Health Checker
 * Probes the registration URL with a realistic User-Agent to check if it's live
 */
export async function checkLinkHealth(url: string): Promise<{ isAlive: boolean; statusCode?: number; error?: string }> {
  try {
    const res = await axios.get(url, {
      timeout: 4000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      maxRedirects: 5,
      validateStatus: (status) => status < 500, // consider 2xx, 3xx, 401/403 as accessible server
    });

    // 404 means the page definitely does not exist
    if (res.status === 404) {
      return { isAlive: false, statusCode: 404, error: 'Page not found (404)' };
    }

    return { isAlive: true, statusCode: res.status };
  } catch (err: any) {
    return { isAlive: false, error: err.message || 'Connection failed' };
  }
}

/**
 * Map Supabase database row to frontend Hackathon model
 */
export function mapRowToHackathon(row: any): Hackathon & { backupLink?: string; isVerified?: boolean } {
  return {
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
    backupLink: row.backup_link || generateBackupLink(row.title, row.organizer),
    isVerified: row.is_verified ?? true,
    description: row.description || '',
    tracks: Array.isArray(row.tracks) ? row.tracks : [],
    eligibility: row.eligibility || 'Open to all students and developers',
    teamSize: row.team_size || '1 - 4 Members',
    perks: Array.isArray(row.perks) ? row.perks : [],
    status: row.status || 'open',
    source: row.source || 'Direct Campus',
  };
}

/**
 * Fetch hackathons from Supabase with dynamic filtering
 */
export async function getHackathonsFromSupabase(filters: {
  fee?: string;
  mode?: string;
  city?: string;
  institution?: string;
  search?: string;
  sortBy?: string;
}) {
  let query = supabase.from('hackathons').select('*');

  if (filters.fee && filters.fee !== 'all') {
    query = query.eq('entry_fee_type', filters.fee);
  }

  if (filters.mode && filters.mode !== 'all') {
    query = query.eq('mode', filters.mode);
  }

  if (filters.institution && filters.institution !== 'all' && filters.institution !== 'All Institutions') {
    query = query.ilike('institution_type', `%${filters.institution}%`);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Supabase query failed: ${error.message}`);
  }

  let results = (data || []).map(mapRowToHackathon);

  // Apply City filter
  if (filters.city && filters.city !== 'all' && filters.city !== 'All Locations') {
    const cityStr = filters.city.toLowerCase();
    results = results.filter(h =>
      h.location.city.toLowerCase().includes(cityStr) ||
      h.location.state.toLowerCase().includes(cityStr) ||
      h.location.venue.toLowerCase().includes(cityStr)
    );
  }

  // Apply Search filter
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

  // Sorting
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

/**
 * 12-Hour Sync Worker:
 * Uses TinyFish AI to discover new Indian hackathons, validates their registration links,
 * creates backup search fallbacks, and upserts them into Supabase.
 */
export async function run12HourSyncWorker(): Promise<{
  success: boolean;
  discovered: number;
  inserted: number;
  totalInDb: number;
  logs: string[];
}> {
  const logs: string[] = [];
  logs.push(`[${new Date().toISOString()}] 🕒 Starting 12-Hour Hackathon Auto-Sync...`);

  try {
    // 1. Query TinyFish Search API for live Indian hackathons
    const query = 'hackathons India registrations open 2026 IIT NIT Techfest Devfolio Unstop';
    logs.push(`🔍 Searching TinyFish for: "${query}"`);

    const searchResponse = await searchHackathonsWithTinyFish(query);
    logs.push(`📡 TinyFish returned ${searchResponse.results.length} raw search items`);

    if (searchResponse.results.length === 0) {
      logs.push(`⚠️ No new search results from TinyFish.`);
      return { success: true, discovered: 0, inserted: 0, totalInDb: 0, logs };
    }

    // 2. Transform into structured Hackathon models
    const parsedHackathons = transformTinyFishResultsToHackathons(searchResponse.results, query);
    logs.push(`✨ Formatted ${parsedHackathons.length} hackathon candidate records.`);

    // 3. Link Health Check & Auto-Healing on each discovered item
    const recordsToInsert = [];
    for (const h of parsedHackathons) {
      const health = await checkLinkHealth(h.registrationLink);
      const isAlive = health.isAlive;
      const backupLink = generateBackupLink(h.title, h.organizer);

      logs.push(`🔗 Checked ${h.title.slice(0, 30)}... -> Status: ${isAlive ? 'ALIVE (200)' : 'UNRELIABLE'} | Backup Attached`);

      recordsToInsert.push({
        id: h.id,
        title: h.title,
        slug: h.slug,
        tagline: h.tagline,
        organizer: h.organizer,
        institution_type: h.institutionType,
        institution_name: h.institutionName,
        entry_fee_type: h.entryFeeType,
        entry_fee_amount: h.entryFeeAmount,
        entry_fee_currency: h.entryFeeCurrency,
        mode: h.mode,
        city: h.location.city,
        state: h.location.state,
        venue: h.location.venue,
        pincode: h.location.pincode || null,
        prize_pool: h.prizePool,
        prize_pool_amount_inr: h.prizePoolAmountINR,
        registration_deadline: h.dates.registrationDeadline,
        start_date: h.dates.startDate,
        end_date: h.dates.endDate,
        duration_hours: h.dates.durationHours,
        registration_link: h.registrationLink,
        backup_link: backupLink,
        is_verified: isAlive,
        description: h.description,
        tracks: h.tracks,
        eligibility: h.eligibility,
        team_size: h.teamSize,
        perks: h.perks,
        status: h.status,
        source: 'TinyFish AI Live',
        updated_at: new Date().toISOString(),
      });
    }

    // 4. Upsert into Supabase
    if (recordsToInsert.length > 0) {
      const { error: upsertErr } = await supabase
        .from('hackathons')
        .upsert(recordsToInsert, { onConflict: 'slug' });

      if (upsertErr) {
        logs.push(`❌ Supabase Upsert Error: ${upsertErr.message}`);
      } else {
        logs.push(`✅ Successfully upserted ${recordsToInsert.length} records into Supabase.`);
      }
    }

    // 5. Total count
    const { count } = await supabase.from('hackathons').select('*', { count: 'exact', head: true });
    logs.push(`🎉 Sync Complete. Total hackathons in Supabase: ${count}`);

    return {
      success: true,
      discovered: parsedHackathons.length,
      inserted: recordsToInsert.length,
      totalInDb: count || 0,
      logs,
    };
  } catch (err: any) {
    logs.push(`❌ Auto-Sync Failed: ${err.message}`);
    return {
      success: false,
      discovered: 0,
      inserted: 0,
      totalInDb: 0,
      logs,
    };
  }
}
