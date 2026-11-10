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
  source: 'TinyFish AI Live' | 'Devfolio' | 'Unstop' | 'Direct Campus' | 'Devpost' | 'HackerEarth';
  featured?: boolean;
}

export const SEED_HACKATHONS: Hackathon[] = [
  {
    "id": "devpost-31302",
    "title": "PayPal AI Hackathon",
    "slug": "devpost-31302-paypal-ai-hackathon",
    "tagline": "Global Hackathon hosted on Devpost by PayPal",
    "organizer": "PayPal",
    "institutionType": "Corporate / Private",
    "institutionName": "PayPal",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$67,500 (~₹57.4L)",
    "prizePoolAmountINR": 5737500,
    "dates": {
      "registrationDeadline": "2026-11-11T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-11-11T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://paypalaihackathon.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "PayPal AI Hackathon is a verified global hackathon hosted on Devpost. Submission period: Oct 01 - Nov 12, 2026. Open to engineers and students worldwide.",
    "tracks": [
      "Low/No Code",
      "Machine Learning/AI",
      "Web"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "unstop-1789431",
    "title": "AI Vibeathon 2026: 24-Hour AI Hackathon",
    "slug": "unstop-1789431-ai-vibeathon-2026-24-hour-ai-hackathon",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "DotRepo",
    "institutionType": "Tech School",
    "institutionName": "DotRepo",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-13T18:29:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-15T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/ai-vibeathon-2026-24-hour-ai-hackathon-dotrepo-1789431",
    "backupLink": "https://unstop.com/hackathons?searchTerm=AI%20Vibeathon%202026%3A%2024-Hour%20AI%20Hackathon",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 13/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devfolio-devnexus2",
    "title": "DevNexus 2.0",
    "slug": "devfolio-devnexus2",
    "tagline": "Code Through the Night. Build Beyond the Fear.",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Kolkata Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Kolkata",
      "state": "West Bengal",
      "venue": "Government College of Engineering and Leather Technology, Eastern Metropolitan Bypass, LB Block, Sector 3, Bidhannagar, Kolkata, West Bengal, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-11-13T18:30:00.000Z",
      "startDate": "2026-09-18T18:30:00.000Z",
      "endDate": "2026-11-13T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://devnexus2.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "**DEV NEXUS 2.0** is a **36-hour hackathon** where developers, innovators, and problem-solvers come together to build, create, collaborate, and turn ideas into impactful solutions.\n\n📅 **28th–29th November 2026**  \n📍 **Government College o...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devpost-30500",
    "title": "DSH Hacks V2 ($100k+ in prizes!)",
    "slug": "devpost-30500-dsh-hacks-v2-100k-in-prizes-",
    "tagline": "Global Hackathon hosted on Devpost by STEMise",
    "organizer": "STEMise",
    "institutionType": "Corporate / Private",
    "institutionName": "STEMise",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$0 (~₹0.0L)",
    "prizePoolAmountINR": 0,
    "dates": {
      "registrationDeadline": "2026-11-14T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-11-14T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://dsh-hacks-v2.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "DSH Hacks V2 ($100k+ in prizes!) is a verified global hackathon hosted on Devpost. Submission period: Jun 24 - Nov 15, 2026. Open to engineers and students worldwide.",
    "tracks": [
      "Beginner Friendly",
      "Low/No Code",
      "Open Ended"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "hackerearth-mks-ai-ml-hackathon",
    "title": "MKS AI/ML Hackathon",
    "slug": "hackerearth-mks-ai-ml-hackathon",
    "tagline": "Official HackerEarth Coding Challenge & Hackathon",
    "organizer": "MKS & HackerEarth",
    "institutionType": "Corporate / Private",
    "institutionName": "HackerEarth Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (HackerEarth Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-14T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-11-14T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://www.hackerearth.com/challenges/competitive/mks-inc-hackathon/",
    "backupLink": "https://www.hackerearth.com/challenges/",
    "isVerified": true,
    "description": "Live official challenge on HackerEarth. Submissions and registrations are active until 15/11/2026.",
    "tracks": [
      "Software Engineering",
      "Algorithms & Problem Solving",
      "Artificial Intelligence"
    ],
    "eligibility": "Open to engineering students and working developers across India.",
    "teamSize": "1 - 3 Members",
    "perks": [
      "Direct hiring and interview fast-tracking",
      "Official HackerEarth Certificate",
      "Cash prizes and performance bounties"
    ],
    "status": "open",
    "source": "HackerEarth",
    "featured": false
  },
  {
    "id": "unstop-1801814",
    "title": "Inter-College Coding Competition 2026 | Java & Python | ₹10,000 in Cash Prizes+ Free Lunch",
    "slug": "unstop-1801814-inter-college-coding-competition-2026-java-python-10-000-in-cash-",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "College Of Engineering And Management,Kolaghat",
    "institutionType": "Tech School",
    "institutionName": "College Of Engineering And Management,Kolaghat",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Purba Medinipur district",
      "state": "West Bengal",
      "venue": "College of Engineering and Management , Kolaghat "
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-15T18:29:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-17T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/inter-college-coding-competition-2026-college-of-engineering-and-managementkolaghat-1801814",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Inter-College%20Coding%20Competition%202026%20%7C%20Java%20%26%20Python%20%7C%20%E2%82%B910%2C000%20in%20Cash%20Prizes%2B%20Free%20Lunch",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 15/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devfolio-genarrative-clash",
    "title": "GeNarrative Clash",
    "slug": "devfolio-genarrative-clash",
    "tagline": "Where Generative AI Meets Human Creativity: Kolkata's Ultimate Prompt Engineering Challenge",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Kolkata Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Kolkata",
      "state": "West Bengal",
      "venue": "Techno India University, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-11-15T18:29:00.000Z",
      "startDate": "2026-09-27T04:30:00.000Z",
      "endDate": "2026-11-15T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://genarrative-clash.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "# GeNarrative Clash 2026\n*Where Generative AI Meets Human Creativity*\n\nAre you ready to redefine how stories are told, music is composed, and digital art is created? **GeNarrative Clash** is Kolkata's premier Prompt Engineering & AI Buildin...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "unstop-1802400",
    "title": "Rewired (Tech Hackathon)",
    "slug": "unstop-1802400-rewired-tech-hackathon-",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Masters Union School of Business",
    "institutionType": "Tech School",
    "institutionName": "Masters Union School of Business",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "hybrid",
    "location": {
      "city": "Bangalore",
      "state": "Karnataka",
      "venue": "TBD (To Be Disclosed)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-15T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-17T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/rewired-tech-hackathon-road-to-milky-way-bangalore-masters-union-school-of-business-1802400",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Rewired%20(Tech%20Hackathon)",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 16/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devpost-31552",
    "title": "UGREEN Hackathon 2026 on AI NAS",
    "slug": "devpost-31552-ugreen-hackathon-2026-on-ai-nas",
    "tagline": "Global Hackathon hosted on Devpost by UGREEN",
    "organizer": "UGREEN",
    "institutionType": "Corporate / Private",
    "institutionName": "UGREEN",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$46,000 (~₹39.1L)",
    "prizePoolAmountINR": 3910000,
    "dates": {
      "registrationDeadline": "2026-11-15T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-11-15T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://ugreenhackathon.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "UGREEN Hackathon 2026 on AI NAS is a verified global hackathon hosted on Devpost. Submission period: Oct 22 - Nov 16, 2026. Open to engineers and students worldwide.",
    "tracks": [
      "Lifehacks",
      "Machine Learning/AI",
      "Productivity"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "unstop-1794884",
    "title": "BuildSprint",
    "slug": "unstop-1794884-buildsprint",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Workelate",
    "institutionType": "Tech School",
    "institutionName": "Workelate",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "hybrid",
    "location": {
      "city": "Hyderabad",
      "state": "Telangana",
      "venue": "Ground Floor, Kondapur Main Road, Kondapur, Laxmi Cyber City, Whitefields, Kondapur, Hyderabad, Telangana 500084"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-17T06:20:48.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-19T06:20:48.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/buildsprint-workelate-1794884",
    "backupLink": "https://unstop.com/hackathons?searchTerm=BuildSprint",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 17/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1795134",
    "title": "Remote Robotics Hackathon",
    "slug": "unstop-1795134-remote-robotics-hackathon",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "PES University (PESU), Bengaluru",
    "institutionType": "Tech School",
    "institutionName": "PES University (PESU), Bengaluru",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-17T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-19T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/remote-robotics-hackathon-pes-university-pesu-bengaluru-1795134",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Remote%20Robotics%20Hackathon",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 18/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 3 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devpost-31024",
    "title": "Meta VR Start Developer Competition 2026",
    "slug": "devpost-31024-meta-vr-start-developer-competition-2026",
    "tagline": "Global Hackathon hosted on Devpost by Meta",
    "organizer": "Meta",
    "institutionType": "Corporate / Private",
    "institutionName": "Meta",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$1,000,000 (~₹850.0L)",
    "prizePoolAmountINR": 85000000,
    "dates": {
      "registrationDeadline": "2026-11-17T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-11-17T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://start-developer-competition-26.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "Meta VR Start Developer Competition 2026 is a verified global hackathon hosted on Devpost. Submission period: Sep 24 - Nov 18, 2026. Open to engineers and students worldwide.",
    "tracks": [
      "AR/VR",
      "Machine Learning/AI",
      "Web"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "hackerearth-ibm-z-day",
    "title": "IBM Z Day",
    "slug": "hackerearth-ibm-z-day",
    "tagline": "Official HackerEarth Coding Challenge & Hackathon",
    "organizer": "IBM & HackerEarth",
    "institutionType": "Corporate / Private",
    "institutionName": "HackerEarth Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (HackerEarth Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-17T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-11-17T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://www.hackerearth.com/challenges/hackathon/ibm-z-day/",
    "backupLink": "https://www.hackerearth.com/challenges/",
    "isVerified": true,
    "description": "Live official challenge on HackerEarth. Submissions and registrations are active until 18/11/2026.",
    "tracks": [
      "Software Engineering",
      "Algorithms & Problem Solving",
      "Artificial Intelligence"
    ],
    "eligibility": "Open to engineering students and working developers across India.",
    "teamSize": "1 - 3 Members",
    "perks": [
      "Direct hiring and interview fast-tracking",
      "Official HackerEarth Certificate",
      "Cash prizes and performance bounties"
    ],
    "status": "open",
    "source": "HackerEarth",
    "featured": false
  },
  {
    "id": "devfolio-codenmod",
    "title": "Code N Mod",
    "slug": "devfolio-codenmod",
    "tagline": "Learn the craft. Build the game. Play your creation.",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Tumakur Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Tumakur",
      "state": "Karnataka",
      "venue": "Siddaganga Institute Of Technology, Chandana Complex, Tumakur, Karnataka, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-11-18T02:45:00.000Z",
      "startDate": "2026-11-09T18:30:00.000Z",
      "endDate": "2026-11-18T02:45:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://codenmod.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "## About the Event\n\nOrganized by **32BIT — Game Development Club of Siddaganga Institute of Technology (SIT), Tumakuru**, this one-day, offline event brings together students interested in gaming, programming, game design, and interactive e...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "1 - 6 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devfolio-lean-in-hacks-8",
    "title": "Lean In Hacks 8.0",
    "slug": "devfolio-lean-in-hacks-8",
    "tagline": "Lean In IGDTUW's Flagship Hackathon",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Bengaluru Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "India",
      "venue": "Bengaluru Campus"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-11-18T17:00:00.000Z",
      "startDate": "2026-10-20T10:30:00.000Z",
      "endDate": "2026-11-18T17:00:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://lean-in-hacks-8.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "> Lean In Hacks is an **annual flagship hackathon of Lean In IGDTUW** - the first chapter of Lean In India. \n\n\nLean In Hacks is a **beginner-friendly hackathon** and has a place for everyone wanting to learn, build, share, and grow in their...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "unstop-1800629",
    "title": "HackKumbh 2026 : Tech For Humanity",
    "slug": "unstop-1800629-hackkumbh-2026-tech-for-humanity",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur",
    "institutionType": "Tech School",
    "institutionName": "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur",
    "entryFeeType": "paid",
    "entryFeeAmount": 250,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Nagpur",
      "state": "Maharashtra",
      "venue": "Yeshwantrao Chavan College Of Engineering"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-20T18:29:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-22T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/hackkumbh-2026-tech-for-humanity-yeshwantrao-chavan-college-of-engineering-ycce-nagpur-1800629",
    "backupLink": "https://unstop.com/hackathons?searchTerm=HackKumbh%202026%20%3A%20Tech%20For%20Humanity",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 20/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "2 - 5 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1799780",
    "title": "Expanding Horizons 8.0  EE",
    "slug": "unstop-1799780-expanding-horizons-8-0-ee",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Motilal Nehru National Institute of Technology",
    "institutionType": "NIT",
    "institutionName": "Motilal Nehru National Institute of Technology",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-20T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-22T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/expanding-horizons-80-ee-expanding-horizon-80-motilal-nehru-national-institute-of-technology-1799780",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Expanding%20Horizons%208.0%20%20EE",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 21/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1799791",
    "title": "Expanding Horizons 8.0 Chemical",
    "slug": "unstop-1799791-expanding-horizons-8-0-chemical",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Motilal Nehru National Institute of Technology",
    "institutionType": "NIT",
    "institutionName": "Motilal Nehru National Institute of Technology",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-20T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-22T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/expanding-horizons-80-chemical-expanding-horizon-80-motilal-nehru-national-institute-of-technology-1799791",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Expanding%20Horizons%208.0%20Chemical",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 21/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1799790",
    "title": "Expanding Horizons 8.0   BIOTECH",
    "slug": "unstop-1799790-expanding-horizons-8-0-biotech",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Motilal Nehru National Institute of Technology",
    "institutionType": "NIT",
    "institutionName": "Motilal Nehru National Institute of Technology",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-20T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-22T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/expanding-horizons-80-biotech-expanding-horizon-80-motilal-nehru-national-institute-of-technology-1799790",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Expanding%20Horizons%208.0%20%20%20BIOTECH",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 21/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1800891",
    "title": "NextGen AI Hackathon",
    "slug": "unstop-1800891-nextgen-ai-hackathon",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Product Space",
    "institutionType": "Tech School",
    "institutionName": "Product Space",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-21T05:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-23T05:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/nextgen-ai-hackathon-product-space-1800891",
    "backupLink": "https://unstop.com/hackathons?searchTerm=NextGen%20AI%20Hackathon",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 21/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 2 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1800924",
    "title": "ELUCode - 8",
    "slug": "unstop-1800924-elucode-8",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "EduLinkUp",
    "institutionType": "Tech School",
    "institutionName": "EduLinkUp",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-21T15:30:51.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-23T15:30:51.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/elucode-8-edulinkup-1800924",
    "backupLink": "https://unstop.com/hackathons?searchTerm=ELUCode%20-%208",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 21/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1802169",
    "title": "Housing Fintech Challenge",
    "slug": "unstop-1802169-housing-fintech-challenge",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Indian Institute of Technology (IIT), Bombay",
    "institutionType": "IIT",
    "institutionName": "Indian Institute of Technology (IIT), Bombay",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-22T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-24T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/hero-housing-fintech-challenge-iit-bombay-1802169",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Housing%20Fintech%20Challenge",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 23/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1803912",
    "title": "Code to Cart: AI x E-commerce Hackathon | KartAI X CodeXcelerate",
    "slug": "unstop-1803912-code-to-cart-ai-x-e-commerce-hackathon-kartai-x-codexcelerate",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "KartAI",
    "institutionType": "Tech School",
    "institutionName": "KartAI",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-23T18:29:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-25T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/code-to-cart-ai-x-e-commerce-hackathon-kartai-x-codexcelerate-kartai-1803912",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Code%20to%20Cart%3A%20AI%20x%20E-commerce%20Hackathon%20%7C%20KartAI%20X%20CodeXcelerate",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 23/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1800857",
    "title": "Agentic AI in BFSI Hackathon",
    "slug": "unstop-1800857-agentic-ai-in-bfsi-hackathon",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Indian Institute of Technology (IIT), Bombay",
    "institutionType": "IIT",
    "institutionName": "Indian Institute of Technology (IIT), Bombay",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Powai",
      "state": "Maharashtra",
      "venue": "IIT Bombay"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-24T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-26T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/agentic-ai-in-bfsi-hackathon-iit-bombay-1800857",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Agentic%20AI%20in%20BFSI%20Hackathon",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 25/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devfolio-founders-house-kolkata",
    "title": "Founders' House Kolkata",
    "slug": "devfolio-founders-house-kolkata",
    "tagline": "Build. Validate. Launch.",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Bengaluru Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "India",
      "venue": "Bengaluru Campus"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-11-24T18:30:00.000Z",
      "startDate": "2026-11-08T18:30:00.000Z",
      "endDate": "2026-11-24T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://founders-house-kolkata.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "Kolkata's most relentless 72 hour startup sprint. 10 elite squads live on site at AIC Techno (Offbeat CCU), crack raw mentor problems, build real products, and pitch live to venture syndicates.\n\nOrganized by Hult Prize at TIU and hosted at ...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "3 - 5 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "unstop-1787722",
    "title": "The Forge",
    "slug": "unstop-1787722-the-forge",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Hoollow",
    "institutionType": "Tech School",
    "institutionName": "Hoollow",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Delhi",
      "state": "Delhi",
      "venue": "New Delhi"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-11-27T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-11-29T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/the-forge-hoollow-1787722",
    "backupLink": "https://unstop.com/hackathons?searchTerm=The%20Forge",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 28/11/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 5 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": true
  },
  {
    "id": "devfolio-health-hackathon",
    "title": "Health Hackathon 3.0",
    "slug": "devfolio-health-hackathon",
    "tagline": "Global Health Access Innovation Challenge",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Kothri Kalan Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Kothri Kalan",
      "state": "Madhya Pradesh",
      "venue": "VIT Bhopal University, Indore - Bhopal Road, Kothri Kalan, Sehore, Madhya Pradesh, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-11-30T18:29:00.000Z",
      "startDate": "2026-10-29T18:30:00.000Z",
      "endDate": "2026-11-30T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://health-hackathon.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "VIT Bhopal University to Host Health Hackathon 3.0 in January 2027\n\nEvent invites new ideas to make healthcare better and cost less\n\nVIT Bhopal University will host Health Hackathon 3.0 on 28 and 29 January 2027. A pre-event workshop will t...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "1 - 6 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devfolio-clash-of-commits",
    "title": "Clash of Commits",
    "slug": "devfolio-clash-of-commits",
    "tagline": "Every commit is a battle!",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Chennai Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Chennai",
      "state": "Tamil Nadu",
      "venue": "VIT Chennai, Kelambakkam - Vandalur Road, Chennai, Tamil Nadu, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-11-30T18:29:00.000Z",
      "startDate": "2026-11-04T18:30:00.000Z",
      "endDate": "2026-11-30T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://clash-of-commits.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "# CLASH OF COMMITS\n### Build Your Clan. Prepare for War. Claim the Crown.\n\nThe kingdom is calling. The battlefield is open. Is your clan ready?\n\n**Clash of Commits** is not your usual hackathon. It's a clan-based coding battlefield where id...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "3 - 5 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "unstop-1794522",
    "title": "CodeElitePune - Hack With Pune",
    "slug": "unstop-1794522-codeelitepune-hack-with-pune",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "HackWithPune",
    "institutionType": "Tech School",
    "institutionName": "HackWithPune",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-12-03T13:00:48.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-12-05T13:00:48.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/codeelitepune-hack-with-pune-hackwithpune-1794522",
    "backupLink": "https://unstop.com/hackathons?searchTerm=CodeElitePune%20-%20Hack%20With%20Pune",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 3/12/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devpost-31667",
    "title": "Kiroween 2026",
    "slug": "devpost-31667-kiroween-2026",
    "tagline": "Global Hackathon hosted on Devpost by Kiro",
    "organizer": "Kiro",
    "institutionType": "Corporate / Private",
    "institutionName": "Kiro",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$100,000 (~₹85.0L)",
    "prizePoolAmountINR": 8500000,
    "dates": {
      "registrationDeadline": "2026-12-03T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-12-03T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://kiroween.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "Kiroween 2026 is a verified global hackathon hosted on Devpost. Submission period: Oct 30 - Dec 04, 2026. Open to engineers and students worldwide.",
    "tracks": [
      "Beginner Friendly",
      "Machine Learning/AI",
      "Open Ended"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "unstop-1790028",
    "title": "Zenith'26",
    "slug": "unstop-1790028-zenith-26",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "MLR Institute Of Technology (MLRIT), Hyderabad",
    "institutionType": "Tech School",
    "institutionName": "MLR Institute Of Technology (MLRIT), Hyderabad",
    "entryFeeType": "paid",
    "entryFeeAmount": 250,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Hyderabad",
      "state": "Telangana",
      "venue": "Mlr institute of technology,Dundigal Police Station Road, Hyderabad, Telangana ,500043"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-12-04T08:00:42.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-12-06T08:00:42.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/zenith26-mlr-institute-of-technology-mlrit-hyderabad-1790028",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Zenith'26",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 4/12/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "3 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "hackerearth-cepheid-intern-hiring-challenge-2026",
    "title": "Cepheid Intern Hiring Challenge 2026",
    "slug": "hackerearth-cepheid-intern-hiring-challenge-2026",
    "tagline": "Official HackerEarth Coding Challenge & Hackathon",
    "organizer": "Cepheid & HackerEarth",
    "institutionType": "Corporate / Private",
    "institutionName": "HackerEarth Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (HackerEarth Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-12-05T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-12-05T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://www.hackerearth.com/challenges/competitive/cepheid-hiring-challenge-2026-4/",
    "backupLink": "https://www.hackerearth.com/challenges/",
    "isVerified": true,
    "description": "Live official challenge on HackerEarth. Submissions and registrations are active until 6/12/2026.",
    "tracks": [
      "Software Engineering",
      "Algorithms & Problem Solving",
      "Artificial Intelligence"
    ],
    "eligibility": "Open to engineering students and working developers across India.",
    "teamSize": "1 - 3 Members",
    "perks": [
      "Direct hiring and interview fast-tracking",
      "Official HackerEarth Certificate",
      "Cash prizes and performance bounties"
    ],
    "status": "open",
    "source": "HackerEarth",
    "featured": false
  },
  {
    "id": "unstop-1799281",
    "title": "Adaption Dataset Challenge",
    "slug": "unstop-1799281-adaption-dataset-challenge",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Hackyard Technologies Pvt limited",
    "institutionType": "Tech School",
    "institutionName": "Hackyard Technologies Pvt limited",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-12-06T18:29:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-12-08T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/adaption-dataset-challenge-hackyard-technologies-pvt-limited-1799281",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Adaption%20Dataset%20Challenge",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 6/12/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devfolio-haxfinity",
    "title": "haxfinity",
    "slug": "devfolio-haxfinity",
    "tagline": "Official Devfolio National Hackathon",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Myladi Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Myladi",
      "state": "Kerala",
      "venue": "Amal College of Advanced Studies, Nilambur, Myladi, Eranhimangad, Kerala, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-12-10T18:29:00.000Z",
      "startDate": "2026-08-14T18:29:00.000Z",
      "endDate": "2026-12-10T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://haxfinity.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "HAXFINITY — Hack the Infinite\n\nThe 24-hour hackathon of XTHRON ’27\n\n3–4 JANUARY 2027\n10:30 AM, 3 December – 10:30 AM, 4 December  \nAmal College of Advanced Studies (Autonomous), Nilambur, Kerala\n\nPrizes:Exciting prizes — details to be annou...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devfolio-hackodisha-6a",
    "title": "hackodisha-6.0",
    "slug": "devfolio-hackodisha-6a",
    "tagline": "Eastern India's one of the largest hackathon organized by Webwiz, NIT Rourkela.",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "NIT",
    "institutionName": "Devfolio India Network",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Devfolio Discord & Platform)"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-12-10T18:29:00.000Z",
      "startDate": "2026-09-08T18:30:00.000Z",
      "endDate": "2026-12-10T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://hackodisha-6a.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "Welcome to HackOdisha 6.0\nA 36-hour online hackathon organized by Webwiz, the official tech club of NIT Rourkela\n\nAfter five successful seasons, HackOdisha returns bigger and better uniting developers and creatives from across the globe to ...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "1 - 5 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devpost-31083",
    "title": "QNX Global Hackathon",
    "slug": "devpost-31083-qnx-global-hackathon",
    "tagline": "Global Hackathon hosted on Devpost by QNX",
    "organizer": "QNX",
    "institutionType": "Corporate / Private",
    "institutionName": "QNX",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$50,000 (~₹42.5L)",
    "prizePoolAmountINR": 4250000,
    "dates": {
      "registrationDeadline": "2026-12-14T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-12-14T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://qnx.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "QNX Global Hackathon is a verified global hackathon hosted on Devpost. Submission period: Nov 02 - Dec 15, 2026. Open to engineers and students worldwide.",
    "tracks": [
      "IoT",
      "Machine Learning/AI",
      "Open Ended"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "unstop-1798677",
    "title": "Overclock",
    "slug": "unstop-1798677-overclock",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Agnel Charities Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai",
    "institutionType": "Tech School",
    "institutionName": "Agnel Charities Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai",
    "entryFeeType": "paid",
    "entryFeeAmount": 250,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "venue": "AGNEL CHARITIES  Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-12-14T19:19:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-12-16T19:19:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/overclock-agnel-charities-fr-c-rodrigues-institute-of-technology-vashi-navi-mumbai-1798677",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Overclock",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 15/12/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1799091",
    "title": "Hacksmart 2.0",
    "slug": "unstop-1799091-hacksmart-2-0",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Geek Room",
    "institutionType": "Tech School",
    "institutionName": "Geek Room",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "hybrid",
    "location": {
      "city": "Gurgaon",
      "state": "Haryana",
      "venue": "6th Floor, Tower C, Pioneer Urban Square, Sector 62, Gurugram, Ghata, Haryana 122098"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-12-15T18:29:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-12-17T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/hacksmart-20-geek-room-1799091",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Hacksmart%202.0",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 15/12/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devfolio-hack-nexus",
    "title": "Hack Nexus 2027",
    "slug": "devfolio-hack-nexus",
    "tagline": "Official Devfolio National Hackathon",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Nagpur Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Nagpur",
      "state": "Maharashtra",
      "venue": "Nagpur, Maharashtra, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-12-15T18:29:00.000Z",
      "startDate": "2026-10-31T18:30:00.000Z",
      "endDate": "2026-12-15T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://hack-nexus.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "Hack Nexus 2027 is a 36-hour student hackathon bringing together 300+ students, developers, and innovators from across Nagpur and beyond. Join us to build innovative projects, learn from mentors, explore emerging technologies, and connect w...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "unstop-1803074",
    "title": "IDEATHON- FutureX: Innovating for Global Challenges",
    "slug": "unstop-1803074-ideathon-futurex-innovating-for-global-challenges",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Skill2Career",
    "institutionType": "Tech School",
    "institutionName": "Skill2Career",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-12-15T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-12-17T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/ideathon-futurex-innovating-for-global-challenges-skill2career-1803074",
    "backupLink": "https://unstop.com/hackathons?searchTerm=IDEATHON-%20FutureX%3A%20Innovating%20for%20Global%20Challenges",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 16/12/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devpost-30789",
    "title": "Arbiter Hacks V1",
    "slug": "devpost-30789-arbiter-hacks-v1",
    "tagline": "Global Hackathon hosted on Devpost by Arbiter ",
    "organizer": "Arbiter ",
    "institutionType": "Corporate / Private",
    "institutionName": "Arbiter ",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$7,800 (~₹6.6L)",
    "prizePoolAmountINR": 663000,
    "dates": {
      "registrationDeadline": "2026-12-20T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-12-20T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://arbiter-hacks-v1.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "Arbiter Hacks V1 is a verified global hackathon hosted on Devpost. Submission period: Oct 20 - Dec 21, 2026. Open to engineers and students worldwide.",
    "tracks": [
      "Beginner Friendly",
      "Machine Learning/AI",
      "Open Ended"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "devpost-31572",
    "title": "Codegeist 2026: Build with context. Ship with confidence.",
    "slug": "devpost-31572-codegeist-2026-build-with-context-ship-with-confidence-",
    "tagline": "Global Hackathon hosted on Devpost by Atlassian",
    "organizer": "Atlassian",
    "institutionType": "Corporate / Private",
    "institutionName": "Atlassian",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$120,000 (~₹102.0L)",
    "prizePoolAmountINR": 10200000,
    "dates": {
      "registrationDeadline": "2026-12-21T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2026-12-21T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://codegeist2026.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "Codegeist 2026: Build with context. Ship with confidence. is a verified global hackathon hosted on Devpost. Submission period: Oct 27 - Dec 22, 2026. Open to engineers and students worldwide.",
    "tracks": [
      "Machine Learning/AI",
      "Enterprise",
      "Productivity"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "unstop-1794479",
    "title": "Inceptrix 3.0",
    "slug": "unstop-1794479-inceptrix-3-0",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Faculty of Engineering and Technology, Jain Deemed to be University",
    "institutionType": "Tech School",
    "institutionName": "Faculty of Engineering and Technology, Jain Deemed to be University",
    "entryFeeType": "paid",
    "entryFeeAmount": 250,
    "entryFeeCurrency": "₹",
    "mode": "hybrid",
    "location": {
      "city": "Bangalore",
      "state": "Karnataka",
      "venue": "5th km, NH - 209,Jakkasandra Post, Bengaluru - Kanakapura Rd, Bengaluru, Karnataka, 562112"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2026-12-24T18:29:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2026-12-26T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/incpetrix-30-faculty-of-engineering-and-technology-jain-deemed-to-be-university-1794479",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Inceptrix%203.0",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 24/12/2026.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "4 - 5 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "devfolio-hacksprint-3",
    "title": "Hacksprint 3.0",
    "slug": "devfolio-hacksprint-3",
    "tagline": "Build Bold. Ride Beyond.",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Bengaluru Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "India",
      "venue": "Bengaluru Campus"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-12-28T18:29:00.000Z",
      "startDate": "2026-11-08T02:15:00.000Z",
      "endDate": "2026-12-28T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://hacksprint-3.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "💬 **WHATSAPP COMMUNITY — JOIN NOW:** https://chat.whatsapp.com/C9gawXXKFtr76gk6YoUe3K\n\n# HackSprint 3.0 — Build Bold. Ride Beyond.\n\n# 🚀 About the Event\n\n**HackSprint 3.0** is a National-Level, 36-Hour Hackathon organized by the Department...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "2 - 5 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devfolio-innerve-11",
    "title": "Innerve 11.0",
    "slug": "devfolio-innerve-11",
    "tagline": "Nerve to Innovate",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Pune Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Pune",
      "state": "Maharashtra",
      "venue": "Army Institute of Technology, Alandi Road, Dighi, Pune, Maharashtra, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-12-30T18:29:00.000Z",
      "startDate": "2026-11-06T18:30:00.000Z",
      "endDate": "2026-12-30T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://innerve-11.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "**Innerve 11** stands as **India’s Largest Student-Driven Hackathon**, proudly organized by the AIT Open Source Software Club at the prestigious **Army Institute of Technology (AIT), Pune**. This flagship innovation festival is dedicated to...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devfolio-techacks05",
    "title": "Techacks 5.0",
    "slug": "devfolio-techacks05",
    "tagline": "24 hours, in person Hackathon. From Bharat to World 🇮🇳→🌍",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Rajpura Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Rajpura",
      "state": "Punjab",
      "venue": "Chitkara University, Rajpura, Punjab, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-12-31T18:29:00.000Z",
      "startDate": "2026-11-08T03:30:00.000Z",
      "endDate": "2026-12-31T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://techacks05.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "## 🚀 Season 5 is cleared for launch.\n\n**TecHacks 5.0** is Season 05 of TecHacks: one **24-hour hackathon, fully in person**, on one stage at Chitkara University, Punjab. Form a crew, pick a track and turn an idea into a working solution in...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devfolio-hack-with-gdg-s4",
    "title": "HACK WITH GDG S4",
    "slug": "devfolio-hack-with-gdg-s4",
    "tagline": "Challenge Reality. Build What's Next.",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "KSR Kalvi Nagar Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "KSR Kalvi Nagar",
      "state": "Tamil Nadu",
      "venue": "K S R College of Engineering, KSR Kalvi Nagar, Tamil Nadu, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-12-31T18:29:00.000Z",
      "startDate": "2026-08-23T18:30:00.000Z",
      "endDate": "2026-12-31T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://hack-with-gdg-s4.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "# Hack With GDG S4\n\n### 36 Hours of Innovation, Building, and Impact\n\n**Hack With GDG S4** is the fourth season of the flagship hackathon organized by **Google Developer Groups – KSR College of Engineering (GDG KSRCE)**. The event brings to...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devfolio-goa-buildathon",
    "title": "GOA BUILDATHON 27",
    "slug": "devfolio-goa-buildathon",
    "tagline": "36 hours. Goa, India.",
    "organizer": "Devfolio Community & University Chapters",
    "institutionType": "Tech School",
    "institutionName": "Bengaluru Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "Goa",
      "venue": "Goa, India"
    },
    "prizePool": "₹2,00,000+",
    "prizePoolAmountINR": 200000,
    "dates": {
      "registrationDeadline": "2026-12-31T18:29:00.000Z",
      "startDate": "2026-10-29T14:00:00.000Z",
      "endDate": "2026-12-31T18:29:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://goa-buildathon.devfolio.co/",
    "backupLink": "https://devfolio.co/discover",
    "isVerified": true,
    "description": "# All That You Need to Know About GOA BUILDATHON ’27\n\nWelcome to **GOA BUILDATHON ’27!**\n\n> Where ambition meets execution.\n\nEvery great innovation starts with an idea. What makes it great is the courage to build it, the curiosity to experi...",
    "tracks": [
      "Web3",
      "AI & GenAI",
      "Mobile & App Development",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering and university students across India.",
    "teamSize": "2 - 4 Members",
    "perks": [
      "Direct submission via Devfolio application",
      "Swag kits & sponsor bounties",
      "Networking with founders & mentors"
    ],
    "status": "open",
    "source": "Devfolio",
    "featured": false
  },
  {
    "id": "devpost-30740",
    "title": "Code for Humanity",
    "slug": "devpost-30740-code-for-humanity",
    "tagline": "Global Hackathon hosted on Devpost by nill",
    "organizer": "nill",
    "institutionType": "Corporate / Private",
    "institutionName": "nill",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Global / Pan-India",
      "venue": "Virtual (Devpost Global Platform)"
    },
    "prizePool": "$0 (~₹0.0L)",
    "prizePoolAmountINR": 0,
    "dates": {
      "registrationDeadline": "2027-01-14T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2027-01-14T18:30:00.000Z",
      "durationHours": 48
    },
    "registrationLink": "https://code-for-humanity.devpost.com/",
    "backupLink": "https://devpost.com/hackathons",
    "isVerified": true,
    "description": "Code for Humanity is a verified global hackathon hosted on Devpost. Submission period: Jul 16, 2026 - Jan 15, 2027. Open to engineers and students worldwide.",
    "tracks": [
      "Education",
      "Machine Learning/AI",
      "Web"
    ],
    "eligibility": "Open to developers, engineers, and students worldwide.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Global recognition & resume showcase",
      "Direct submission on Devpost",
      "Cash prizes and cloud sponsor credits"
    ],
    "status": "open",
    "source": "Devpost",
    "featured": false
  },
  {
    "id": "hackerearth-contextcon-remember-everything",
    "title": "ContextCon: Remember Everything",
    "slug": "hackerearth-contextcon-remember-everything",
    "tagline": "Official HackerEarth Coding Challenge & Hackathon",
    "organizer": "ContextCon: & HackerEarth",
    "institutionType": "Corporate / Private",
    "institutionName": "HackerEarth Tech Community",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (HackerEarth Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2027-01-16T18:30:00.000Z",
      "startDate": "2026-11-10T19:20:58.578Z",
      "endDate": "2027-01-16T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://www.hackerearth.com/challenges/hackathon/contextcon-remember-everything/",
    "backupLink": "https://www.hackerearth.com/challenges/",
    "isVerified": true,
    "description": "Live official challenge on HackerEarth. Submissions and registrations are active until 17/1/2027.",
    "tracks": [
      "Software Engineering",
      "Algorithms & Problem Solving",
      "Artificial Intelligence"
    ],
    "eligibility": "Open to engineering students and working developers across India.",
    "teamSize": "1 - 3 Members",
    "perks": [
      "Direct hiring and interview fast-tracking",
      "Official HackerEarth Certificate",
      "Cash prizes and performance bounties"
    ],
    "status": "open",
    "source": "HackerEarth",
    "featured": false
  },
  {
    "id": "unstop-1802090",
    "title": "CSS Battle",
    "slug": "unstop-1802090-css-battle",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Army Institute of Technology (AIT), Pune",
    "institutionType": "Tech School",
    "institutionName": "Army Institute of Technology (AIT), Pune",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop Online Platform)"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2027-02-28T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2027-03-02T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/css-battle-solutions-2k27-army-institute-of-technology-ait-pune-1802090",
    "backupLink": "https://unstop.com/hackathons?searchTerm=CSS%20Battle",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 1/3/2027.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1802089",
    "title": "SHE CODE",
    "slug": "unstop-1802089-she-code",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Army Institute of technology, Pune",
    "institutionType": "Tech School",
    "institutionName": "Army Institute of technology, Pune",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "hybrid",
    "location": {
      "city": "Pune",
      "state": "Maharashtra",
      "venue": "AIT PUNE "
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2027-02-28T18:30:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2027-03-02T18:30:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/she-code-solutions-2k27-army-institute-of-technology-pune-1802089",
    "backupLink": "https://unstop.com/hackathons?searchTerm=SHE%20CODE",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 1/3/2027.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  },
  {
    "id": "unstop-1801200",
    "title": "Code Red",
    "slug": "unstop-1801200-code-red",
    "tagline": "Official Unstop Hackathon with Live Verified Registrations Open",
    "organizer": "Army Institute of Technology (AIT), Pune",
    "institutionType": "Tech School",
    "institutionName": "Army Institute of Technology (AIT), Pune",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "hybrid",
    "location": {
      "city": "Pune",
      "state": "Maharashtra",
      "venue": "AIT pune"
    },
    "prizePool": "₹1,50,000+",
    "prizePoolAmountINR": 150000,
    "dates": {
      "registrationDeadline": "2027-03-01T06:20:00.000Z",
      "startDate": "2026-11-20T19:20:58.578Z",
      "endDate": "2027-03-03T06:20:00.000Z",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/code-red-solutions-2k27-army-institute-of-technology-ait-pune-1801200",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Code%20Red",
    "isVerified": true,
    "description": "Verified live challenge hosted on Unstop. Applications are officially active and closing on 1/3/2027.",
    "tracks": [
      "Artificial Intelligence",
      "Full-Stack Engineering",
      "Cloud & Systems",
      "Open Innovation"
    ],
    "eligibility": "Open to college students and early-career developers in India.",
    "teamSize": "1 - 1 Members",
    "perks": [
      "Direct registration on official Unstop portal",
      "Official Certificate of Participation",
      "Cash prizes and hiring opportunities"
    ],
    "status": "open",
    "source": "Unstop",
    "featured": false
  }
];
