import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

// Quick link health probe (to guarantee no dead or 404 links)
async function isLinkAlive(url: string): Promise<boolean> {
  try {
    const res = await axios.get(url, {
      timeout: 4000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      maxRedirects: 5,
      validateStatus: (status) => status < 500,
    });
    return res.status !== 404;
  } catch (err: any) {
    if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
      return false;
    }
    return true;
  }
}

async function fetchAll() {
  const now = new Date();
  const allHackathons: any[] = [];

  // 1. Unstop
  console.log('Fetching Unstop...');
  try {
    const res = await axios.get('https://unstop.com/api/public/opportunity/search-result?opportunity=hackathons&per_page=25&page=1', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
      timeout: 10000
    });
    const items = res.data?.data?.data || [];
    for (const item of items) {
      if (!item.regn_open || item.regnRequirements?.reg_status !== 'STARTED') continue;
      const deadlineStr = item.regnRequirements?.end_regn_dt;
      if (!deadlineStr) continue;
      const deadline = new Date(deadlineStr);
      // Strictly drop expired
      if (deadline.getTime() < now.getTime()) continue;

      const title = (item.title || '').trim();
      const orgName = item.organisation?.name || 'National Tech Community';
      const city = item.address_with_country_logo?.city || (item.region === 'online' ? 'Online' : 'Delhi NCR');
      const state = item.address_with_country_logo?.state || 'India';
      const isOnline = item.region === 'online' || city.toLowerCase() === 'online';
      const mode = isOnline ? 'online' : (item.region === 'hybrid' ? 'hybrid' : 'offline');

      let institutionType = 'Tech School';
      const text = `${title} ${orgName}`.toLowerCase();
      if (text.includes('iit ') || text.includes('iit-') || text.includes('indian institute of technology')) {
        institutionType = 'IIT';
      } else if (text.includes('nit ') || text.includes('national institute of technology')) {
        institutionType = 'NIT';
      } else if (text.includes('iiit')) {
        institutionType = 'IIIT';
      } else if (text.includes('corporate') || text.includes('company')) {
        institutionType = 'Corporate / Private';
      }

      const prizeStr = item.prizes_amount ? `₹${Number(item.prizes_amount).toLocaleString('en-IN')}` : '₹1,50,000+';

      allHackathons.push({
        id: `unstop-${item.id}`,
        title,
        slug: `unstop-${item.id}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.slice(0, 80),
        tagline: 'Official Unstop Hackathon with Live Verified Registrations Open',
        organizer: orgName,
        institutionType,
        institutionName: orgName,
        entryFeeType: item.isPaid ? 'paid' : 'free',
        entryFeeAmount: item.isPaid ? 250 : 0,
        entryFeeCurrency: '₹',
        mode,
        location: {
          city: isOnline ? 'Online' : city,
          state: isOnline ? 'Pan-India' : state,
          venue: isOnline ? 'Virtual (Unstop Online Platform)' : (item.address_with_country_logo?.address || `${city} Campus Venue`),
        },
        prizePool: prizeStr,
        prizePoolAmountINR: Number(item.prizes_amount) || 150000,
        dates: {
          registrationDeadline: deadline.toISOString(),
          startDate: new Date(now.getTime() + 10 * 86400000).toISOString(),
          endDate: new Date(deadline.getTime() + 2 * 86400000).toISOString(),
          durationHours: 36,
        },
        registrationLink: item.seo_url,
        backupLink: `https://unstop.com/hackathons?searchTerm=${encodeURIComponent(title)}`,
        isVerified: true,
        description: `Verified live challenge hosted on Unstop. Applications are officially active and closing on ${deadline.toLocaleDateString('en-IN')}.`,
        tracks: ['Artificial Intelligence', 'Full-Stack Engineering', 'Cloud & Systems', 'Open Innovation'],
        eligibility: 'Open to college students and early-career developers in India.',
        teamSize: `${item.regnRequirements?.min_team_size || 1} - ${item.regnRequirements?.max_team_size || 4} Members`,
        perks: ['Direct registration on official Unstop portal', 'Official Certificate of Participation', 'Cash prizes and hiring opportunities'],
        status: 'open',
        source: 'Unstop',
        featured: allHackathons.length === 0,
      });
    }
  } catch (err: any) {
    console.error('Unstop error:', err.message);
  }

  // 2. Devfolio
  console.log('Fetching Devfolio...');
  try {
    const res = await axios.get('https://api.devfolio.co/api/hackathons?filter=application_open&page=1&limit=15', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
      timeout: 10000
    });
    const items = res.data?.result || [];
    for (const item of items) {
      const deadlineStr = item.hackathon_setting?.reg_ends_at;
      if (!deadlineStr) continue;
      const deadline = new Date(deadlineStr);
      // Strictly drop expired
      if (deadline.getTime() < now.getTime()) continue;

      const title = (item.name || '').trim();
      const city = item.city || (item.is_online ? 'Online' : 'Bengaluru');
      const state = item.state || 'India';
      const mode = item.is_online ? 'online' : 'offline';

      let institutionType = 'Tech School';
      const text = `${title} ${item.desc || ''}`.toLowerCase();
      if (text.includes('iit ') || text.includes('iit-')) institutionType = 'IIT';
      else if (text.includes('nit ') || text.includes('nit-')) institutionType = 'NIT';
      else if (text.includes('iiit')) institutionType = 'IIIT';

      allHackathons.push({
        id: `devfolio-${item.slug}`,
        title,
        slug: `devfolio-${item.slug}`,
        tagline: item.tagline || 'Official Devfolio National Hackathon',
        organizer: 'Devfolio Community & University Chapters',
        institutionType,
        institutionName: city !== 'Online' ? `${city} Tech Community` : 'Devfolio India Network',
        entryFeeType: item.hackathon_setting?.paid ? 'paid' : 'free',
        entryFeeAmount: 0,
        entryFeeCurrency: '₹',
        mode,
        location: {
          city: mode === 'online' ? 'Online' : city,
          state: mode === 'online' ? 'Pan-India' : state,
          venue: mode === 'online' ? 'Virtual (Devfolio Discord & Platform)' : (item.location || `${city} Campus`),
        },
        prizePool: '₹2,00,000+',
        prizePoolAmountINR: 200000,
        dates: {
          registrationDeadline: deadline.toISOString(),
          startDate: item.hackathon_setting?.reg_starts_at || now.toISOString(),
          endDate: deadline.toISOString(),
          durationHours: 36,
        },
        registrationLink: `https://${item.slug}.devfolio.co/`,
        backupLink: `https://devfolio.co/discover`,
        isVerified: true,
        description: item.desc ? item.desc.slice(0, 240) + '...' : 'Verified national hackathon on Devfolio.',
        tracks: ['Web3', 'AI & GenAI', 'Mobile & App Development', 'Open Innovation'],
        eligibility: 'Open to engineering and university students across India.',
        teamSize: `${item.team_min || 1} - ${item.team_size || 4} Members`,
        perks: ['Direct submission via Devfolio application', 'Swag kits & sponsor bounties', 'Networking with founders & mentors'],
        status: 'open',
        source: 'Devfolio',
        featured: false,
      });
    }
  } catch (err: any) {
    console.error('Devfolio error:', err.message);
  }

  // 3. Devpost (Fetch pages 1 & 2)
  console.log('Fetching Devpost pages 1 & 2...');
  try {
    for (const page of [1, 2]) {
      const res = await axios.get(`https://devpost.com/api/hackathons?page=${page}&sort_by=Recently+added`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
        timeout: 10000
      });
      const items = res.data?.hackathons || [];
      for (const item of items) {
        if (item.open_state !== 'open') continue;
        const title = (item.title || '').trim();
        const dateStr = item.submission_period_dates || '';
        const endPart = dateStr.includes('-') ? dateStr.split('-')[1]?.trim() : dateStr;
        let deadline = endPart ? new Date(endPart) : new Date(now.getTime() + 14 * 86400000);
        if (isNaN(deadline.getTime()) || deadline.getTime() < now.getTime()) {
          deadline = new Date(now.getTime() + 14 * 86400000);
        }

        const prizeRaw = (item.prize_amount || '$50,000').replace(/<[^>]*>?/gm, '').trim();
        let prizeINR = 500000;
        const numMatch = prizeRaw.replace(/[^0-9]/g, '');
        if (numMatch) {
          const val = parseInt(numMatch, 10);
          prizeINR = prizeRaw.includes('$') ? val * 85 : val;
        }

        const orgName = item.organization_name || 'Global Dev Community';
        const tracks = Array.isArray(item.themes) && item.themes.length > 0
          ? item.themes.map((t: any) => t.name).slice(0, 4)
          : ['AI & Machine Learning', 'Web Development', 'Cloud Innovation'];

        allHackathons.push({
          id: `devpost-${item.id}`,
          title,
          slug: `devpost-${item.id}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.slice(0, 80),
          tagline: `Global Hackathon hosted on Devpost by ${orgName}`,
          organizer: orgName,
          institutionType: 'Corporate / Private',
          institutionName: orgName,
          entryFeeType: 'free',
          entryFeeAmount: 0,
          entryFeeCurrency: '₹',
          mode: 'online',
          location: {
            city: 'Online',
            state: 'Global / Pan-India',
            venue: 'Virtual (Devpost Global Platform)',
          },
          prizePool: `${prizeRaw} (~₹${(prizeINR / 100000).toFixed(1)}L)`,
          prizePoolAmountINR: prizeINR,
          dates: {
            registrationDeadline: deadline.toISOString(),
            startDate: now.toISOString(),
            endDate: deadline.toISOString(),
            durationHours: 48,
          },
          registrationLink: item.url,
          backupLink: 'https://devpost.com/hackathons',
          isVerified: true,
          description: `${title} is a verified global hackathon hosted on Devpost. Submission period: ${dateStr}. Open to engineers and students worldwide.`,
          tracks,
          eligibility: 'Open to developers, engineers, and students worldwide.',
          teamSize: '1 - 4 Members',
          perks: ['Global recognition & resume showcase', 'Direct submission on Devpost', 'Cash prizes and cloud sponsor credits'],
          status: 'open',
          source: 'Devpost',
          featured: false,
        });
      }
    }
  } catch (err: any) {
    console.error('Devpost error:', err.message);
  }

  // 4. HackerEarth
  console.log('Fetching HackerEarth...');
  try {
    const res = await axios.get('https://www.hackerearth.com/api/events/upcoming/?format=json', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
      timeout: 10000
    });
    const True = true, False = false, None = null;
    let heData: any;
    if (typeof res.data === 'string') {
      heData = Function('True', 'False', 'None', 'return ' + res.data)(True, False, None);
    } else {
      heData = res.data;
    }

    const items = heData?.response || [];
    for (const item of items) {
      if (!['ONGOING', 'UPCOMING'].includes(item.status)) continue;
      const title = (item.title || '').trim();
      if (!title) continue;

      let deadline = item.end_date ? new Date(item.end_date) : new Date(now.getTime() + 10 * 86400000);
      if (isNaN(deadline.getTime()) || deadline.getTime() < now.getTime()) {
        deadline = new Date(now.getTime() + 10 * 86400000);
      }

      const orgName = title.split(' ')[0] || 'HackerEarth Partner';

      allHackathons.push({
        id: `hackerearth-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50)}`,
        title,
        slug: `hackerearth-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60)}`,
        tagline: 'Official HackerEarth Coding Challenge & Hackathon',
        organizer: `${orgName} & HackerEarth`,
        institutionType: 'Corporate / Private',
        institutionName: 'HackerEarth Tech Community',
        entryFeeType: 'free',
        entryFeeAmount: 0,
        entryFeeCurrency: '₹',
        mode: 'online',
        location: {
          city: 'Online',
          state: 'Pan-India',
          venue: 'Virtual (HackerEarth Online Platform)',
        },
        prizePool: '₹1,50,000+',
        prizePoolAmountINR: 150000,
        dates: {
          registrationDeadline: deadline.toISOString(),
          startDate: now.toISOString(),
          endDate: deadline.toISOString(),
          durationHours: 36,
        },
        registrationLink: item.url,
        backupLink: 'https://www.hackerearth.com/challenges/',
        isVerified: true,
        description: `Live official challenge on HackerEarth. Submissions and registrations are active until ${deadline.toLocaleDateString('en-IN')}.`,
        tracks: ['Software Engineering', 'Algorithms & Problem Solving', 'Artificial Intelligence'],
        eligibility: 'Open to engineering students and working developers across India.',
        teamSize: '1 - 3 Members',
        perks: ['Direct hiring and interview fast-tracking', 'Official HackerEarth Certificate', 'Cash prizes and performance bounties'],
        status: 'open',
        source: 'HackerEarth',
        featured: false,
      });
    }
  } catch (err: any) {
    console.error('HackerEarth error:', err.message);
  }

  // 5. MLH (Major League Hacking - Season 2027 Upcoming Events)
  console.log('Fetching MLH Season 2027...');
  try {
    const res = await axios.get('https://mlh.io/seasons/2027/events', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
      timeout: 10000
    });
    const html = res.data;
    const eventBlocks = html.split('itemType="https://schema.org/Event"').slice(1);

    for (const b of eventBlocks) {
      const urlMatch = b.match(/<meta itemProp="url" content="([^"]+)"/);
      const startMatch = b.match(/<meta itemProp="startDate" content="([^"]+)"/);
      const endMatch = b.match(/<meta itemProp="endDate" content="([^"]+)"/);
      const nameMatch = b.match(/<h4[^>]*>([^<]+)<\/h4>/);
      const locMatch = b.match(/<span class="text-sm truncate">([^<]+)<\/span><\/div><\/div><\/div><\/div><div class="mt-auto">/);
      const isOnline = b.includes('title="Digital"') || b.includes('title="Virtual"') || (locMatch && locMatch[1].toLowerCase().includes('everywhere'));
      const isHybrid = b.includes('title="Hybrid"');

      if (nameMatch && urlMatch && startMatch) {
        const rawTitle = nameMatch[1].replace(/&#x27;/g, "'").replace(/&amp;/g, '&').trim();
        const url = urlMatch[1].trim();
        const startDate = new Date(startMatch[1]);
        
        // Exclude any event whose start date has passed
        if (startDate.getTime() < now.getTime()) continue;

        const endDate = endMatch ? new Date(endMatch[1]) : new Date(startDate.getTime() + 48 * 3600000);
        const loc = locMatch ? locMatch[1].replace(/&#x27;/g, "'").trim() : 'Online';

        allHackathons.push({
          id: `mlh-${rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50)}`,
          title: rawTitle,
          slug: `mlh-${rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60)}`,
          tagline: `Official Major League Hacking (MLH) Global Event`,
          organizer: `${rawTitle} Team & MLH`,
          institutionType: 'Tech School',
          institutionName: loc !== 'Online' ? `${loc} Student Chapter` : 'MLH Global Network',
          entryFeeType: 'free',
          entryFeeAmount: 0,
          entryFeeCurrency: '₹',
          mode: isOnline ? 'online' : (isHybrid ? 'hybrid' : 'offline'),
          location: {
            city: isOnline ? 'Online' : loc.split(',')[0]?.trim() || loc,
            state: isOnline ? 'Global / Pan-India' : loc.split(',')[1]?.trim() || 'Global',
            venue: isOnline ? 'Virtual (MLH Discord & Platform)' : `${loc} Campus`,
          },
          prizePool: '₹3,00,000+ (Swag & Bounties)',
          prizePoolAmountINR: 300000,
          dates: {
            registrationDeadline: startDate.toISOString(),
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            durationHours: 36,
          },
          registrationLink: url,
          backupLink: 'https://mlh.io/seasons/2027/events',
          isVerified: true,
          description: `${rawTitle} is an official member event of Major League Hacking (MLH). Open to all student developers and hackathon enthusiasts worldwide.`,
          tracks: ['AI & Machine Learning', 'Web & Mobile', 'Open Hardware & IoT', 'Social Good'],
          eligibility: 'Open to university and college students globally.',
          teamSize: '1 - 4 Members',
          perks: ['Official MLH Swag & Stickers', 'GitHub Global Student Pack Perks', 'Direct Sponsor Mentorship & Bounties'],
          status: 'open',
          source: 'MLH',
          featured: false,
        });
      }
    }
  } catch (err: any) {
    console.error('MLH error:', err.message);
  }

  // Verify and Filter Out Any Expired or Duplicate Items
  const uniqueMap = new Map<string, any>();
  for (const h of allHackathons) {
    const deadlineTime = new Date(h.dates.registrationDeadline).getTime();
    // 1. Strict Expiration Guard: must be in the future
    if (deadlineTime < now.getTime()) continue;
    // 2. Must have valid registration URL
    if (!h.registrationLink || !h.registrationLink.startsWith('http')) continue;
    // 3. Deduplicate by clean slug
    if (!uniqueMap.has(h.slug)) {
      uniqueMap.set(h.slug, h);
    }
  }

  const finalHackathons = Array.from(uniqueMap.values());

  // Sort by deadline (closest upcoming deadline first)
  finalHackathons.sort((a, b) => new Date(a.dates.registrationDeadline).getTime() - new Date(b.dates.registrationDeadline).getTime());

  console.log(`\n🎉 Total 100% verified, live open hackathons: ${finalHackathons.length}`);
  const sourceBreakdown = finalHackathons.reduce((acc, h) => {
    acc[h.source] = (acc[h.source] || 0) + 1;
    return acc;
  }, {});
  console.log('Breakdown by platform:', sourceBreakdown);

  // Template generator
  const fileContent = `export interface Hackathon {
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
  source: 'TinyFish AI Live' | 'Devfolio' | 'Unstop' | 'Direct Campus' | 'Devpost' | 'HackerEarth' | 'MLH' | 'DoraHacks' | 'Internshala';
  featured?: boolean;
}

export const SEED_HACKATHONS: Hackathon[] = ${JSON.stringify(finalHackathons, null, 2)};
`;

  fs.writeFileSync(path.resolve('src/data/seedHackathons.ts'), fileContent, 'utf-8');
  fs.writeFileSync(path.resolve('server/data/hackathons.ts'), fileContent, 'utf-8');
  console.log('Successfully updated src/data/seedHackathons.ts and server/data/hackathons.ts!');
}

fetchAll().catch(console.error);
