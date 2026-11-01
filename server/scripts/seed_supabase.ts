import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { SEED_HACKATHONS } from '../data/hackathons';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_ANON_KEY || '';

if (!SUPABASE_URL || !SUPABASE_SECRET_KEY) {
  console.error('Please configure SUPABASE_URL and SUPABASE_SECRET_KEY in your environment variables.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY);

function generateBackupLink(title: string, organizer: string): string {
  return `https://unstop.com/hackathons?searchTerm=${encodeURIComponent(title)}`;
}

async function seed() {
  console.log(`🚀 Starting upload of ${SEED_HACKATHONS.length} hackathons to Supabase...`);

  const records = SEED_HACKATHONS.map(h => ({
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
    backup_link: generateBackupLink(h.title, h.organizer),
    is_verified: true,
    description: h.description,
    tracks: h.tracks,
    eligibility: h.eligibility,
    team_size: h.teamSize,
    perks: h.perks,
    status: h.status,
    source: h.source,
  }));

  const { data, error } = await supabase
    .from('hackathons')
    .upsert(records, { onConflict: 'id' });

  if (error) {
    console.error('❌ Failed to seed Supabase:', error.message);
    process.exit(1);
  }

  const { count } = await supabase
    .from('hackathons')
    .select('*', { count: 'exact', head: true });

  console.log(`✅ Successfully seeded Supabase! Total rows in database: ${count}`);
}

seed();
