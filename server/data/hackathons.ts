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

export const SEED_HACKATHONS: Hackathon[] = [
  {
    "id": "tinyfish-1793995826577-7-630",
    "title": "Prompts to Profit Hackathon - 2026",
    "slug": "prompts-to-profit-hackathon-2026",
    "tagline": "Prompts to Profits is a three-round game-building hackathon where participants turn their ideas into working g...",
    "organizer": "unstop.com",
    "institutionType": "Tech School",
    "institutionName": "unstop.com Tech Hub",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-21T20:10:26.577+00:00",
      "startDate": "2026-12-01T20:10:26.577+00:00",
      "endDate": "2026-12-03T20:10:26.577+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/prompts-to-profit-hackathon-amalthea-2026-iit-gandhinagar-1774722",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Prompts%20to%20Profit%20Hackathon%20%20%202026",
    "isVerified": true,
    "description": "Prompts to Profits is a three-round game-building hackathon where participants turn their ideas into working games using AI-powered vibe coding.",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794301101641-3-449",
    "title": "Open Source Hackathon - 2026",
    "slug": "open-source-hackathon-2026",
    "tagline": "Open Source Hackathon. Indian Institute of Technology (IIT), Bombay. Team Size Individual Participation. Regis...",
    "organizer": "unstop.com",
    "institutionType": "IIT",
    "institutionName": "IIT Bombay",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "venue": "IIT Bombay Main Campus"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-25T08:58:21.641+00:00",
      "startDate": "2026-12-05T08:58:21.641+00:00",
      "endDate": "2026-12-07T08:58:21.641+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/open-source-hackathon-iit-bombay-1702266",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Open%20Source%20Hackathon%20%20%202026",
    "isVerified": true,
    "description": "Open Source Hackathon. Indian Institute of Technology (IIT), Bombay. Team Size Individual Participation. Registration Deadline 04 Jul 26, 06:30 PM CUT. Software ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794214346966-7-911",
    "title": "INNOVATE - Hackathon 2026",
    "slug": "innovate-hackathon-2026",
    "tagline": "Dates: 3 NOV– 6 DEC 2026 ; Mode: Online ; Team Size: 1 member ; Eligibility: Students and tech enthusiasts ; R...",
    "organizer": "unstop.com",
    "institutionType": "Tech School",
    "institutionName": "unstop.com Tech Hub",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-24T08:52:26.966+00:00",
      "startDate": "2026-12-04T08:52:26.966+00:00",
      "endDate": "2026-12-06T08:52:26.966+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/innovate-hackathon-2026-devharbour-1792025",
    "backupLink": "https://unstop.com/hackathons?searchTerm=INNOVATE%20%20%20Hackathon%202026",
    "isVerified": true,
    "description": "Dates: 3 NOV– 6 DEC 2026 ; Mode: Online ; Team Size: 1 member ; Eligibility: Students and tech enthusiasts ; Registration: FREE.",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794301101641-1-344",
    "title": "Perceptron Hackathon 2026",
    "slug": "perceptron-hackathon-2026",
    "tagline": "Perceptron Hackathon 2026 is presented by the IITB-Optiver AI Innovation Lab and invites builders to tackle te...",
    "organizer": "unstop.com",
    "institutionType": "Tech School",
    "institutionName": "VIT Vellore",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-25T08:58:21.641+00:00",
      "startDate": "2026-12-05T08:58:21.641+00:00",
      "endDate": "2026-12-07T08:58:21.641+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/perceptron-hackathon-2026-iit-bombay-1761822",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Perceptron%20Hackathon%202026",
    "isVerified": true,
    "description": "Perceptron Hackathon 2026 is presented by the IITB-Optiver AI Innovation Lab and invites builders to tackle ten concrete, technically demanding ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1793609107835-1-351",
    "title": "Scratch That Code (8-Hour Hackathon) - 2026",
    "slug": "scratch-that-code-8-hour-hackathon-2026",
    "tagline": "Find out the best Scratch That Code (8-Hour Hackathon ) that match your interests. Prove your mettle and win e...",
    "organizer": "unstop.com",
    "institutionType": "Tech School",
    "institutionName": "unstop.com Tech Hub",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-17T08:45:07.835+00:00",
      "startDate": "2026-11-27T08:45:07.835+00:00",
      "endDate": "2026-11-29T08:45:07.835+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/scratch-that-code-8-hour-hackathon-noesis-vedam-school-of-technology-1635489",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Scratch%20That%20Code%20%208%20Hour%20Hackathon%20%20%20%202026",
    "isVerified": true,
    "description": "Find out the best Scratch That Code (8-Hour Hackathon ) that match your interests. Prove your mettle and win exciting prizes like job opportunities and cash ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1793609107835-5-257",
    "title": "Prompt Coding - 2026",
    "slug": "prompt-coding-2026",
    "tagline": "29 Mar 2026 — This is a 24-hour, offline, high-intensity hackathon focused on problem-solving, system thinking...",
    "organizer": "unstop.com",
    "institutionType": "Tech School",
    "institutionName": "unstop.com Tech Hub",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "venue": "unstop.com Tech Hub Main Campus"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-17T08:45:07.835+00:00",
      "startDate": "2026-11-27T08:45:07.835+00:00",
      "endDate": "2026-11-29T08:45:07.835+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/prompt-coding-technovate-70-international-institute-of-information-technology-iiit-naya-raipur-1635793",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Prompt%20Coding%20%20%202026",
    "isVerified": true,
    "description": "29 Mar 2026 — This is a 24-hour, offline, high-intensity hackathon focused on problem-solving, system thinking, and engineering judgment. The event is ... Read more",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
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
      "registrationDeadline": "2026-12-10T18:29:00+00:00",
      "startDate": "2026-09-08T18:30:00+00:00",
      "endDate": "2026-12-10T18:29:00+00:00",
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
    "source": "Devfolio"
  },
  {
    "id": "tinyfish-1794162938749-6-138",
    "title": "Perceptron Hackathon",
    "slug": "perceptron-hackathon",
    "tagline": "Registration closes - 15th October 2026. Round 1 submission deadline - 31st October 2026. Shortlist announceme...",
    "organizer": "techfest.org",
    "institutionType": "Tech School",
    "institutionName": "techfest.org Tech Hub",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-23T18:35:38.749+00:00",
      "startDate": "2026-12-03T18:35:38.749+00:00",
      "endDate": "2026-12-05T18:35:38.749+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://techfest.org/competitions/perceptron-hackathon",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Perceptron%20Hackathon",
    "isVerified": true,
    "description": "Registration closes - 15th October 2026. Round 1 submission deadline - 31st October 2026. Shortlist announcement - 10th November 2026. Midway Check - 1st ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
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
      "registrationDeadline": "2026-12-15T18:29:00+00:00",
      "startDate": "2026-10-31T18:30:00+00:00",
      "endDate": "2026-12-15T18:29:00+00:00",
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
    "source": "Devfolio"
  },
  {
    "id": "tinyfish-1793912010847-6-950",
    "title": "Innov8 4.0: A Hackathon by Eightfold Ai X Aries IIT Delhi",
    "slug": "innov8-4-0-a-hackathon-by-eightfold-ai-x-aries-iit-delhi",
    "tagline": "Hackathon by Eightfold. The preliminary round is an online 2-hour mini-hackathon on the 19th of September. lis...",
    "organizer": "unstop.com",
    "institutionType": "IIT",
    "institutionName": "IIT Delhi",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "New Delhi",
      "state": "Delhi NCR",
      "venue": "IIT Delhi, New Delhi / NCR"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-20T20:53:30.847+00:00",
      "startDate": "2026-11-30T20:53:30.847+00:00",
      "endDate": "2026-12-02T20:53:30.847+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/innov8-40-a-hackathon-by-eightfold-ai-x-aries-iit-delhi-iit-delhi-1742230",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Innov8%204%200%20%20A%20Hackathon%20by%20Eightfold%20Ai%20X%20Aries%20IIT%20Delhi",
    "isVerified": true,
    "description": "Hackathon by Eightfold. The preliminary round is an online 2-hour mini-hackathon on the 19th of September. listed by Indian Institute of ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794038434574-8-970",
    "title": "National AI/ML Hackathon by Vivriti Capital - 2026",
    "slug": "national-ai-ml-hackathon-by-vivriti-capital-2026",
    "tagline": "Find out the best National AI/ML Hackathon by Vivriti Capital that match your interests. Prove your mettle and...",
    "organizer": "unstop.com",
    "institutionType": "Tech School",
    "institutionName": "unstop.com Tech Hub",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-22T08:00:34.574+00:00",
      "startDate": "2026-12-02T08:00:34.574+00:00",
      "endDate": "2026-12-04T08:00:34.574+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/national-aiml-hackathon-by-vivriti-capital-yuvaan-iit-hyderabad-1644132",
    "backupLink": "https://unstop.com/hackathons?searchTerm=National%20AI%20ML%20Hackathon%20by%20Vivriti%20Capital%20%20%202026",
    "isVerified": true,
    "description": "Find out the best National AI/ML Hackathon by Vivriti Capital that match your interests. Prove your mettle and win exciting prizes like job opportunities ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794214346966-3-474",
    "title": "Road Safety Hackathon 2026 - BIMSTEC International ...",
    "slug": "road-safety-hackathon-2026-bimstec-international-",
    "tagline": "Road Safety Hackathon 2026 - BIMSTEC International Track (Not Open to Indian Participants). Indian Institute o...",
    "organizer": "unstop.com",
    "institutionType": "IIT",
    "institutionName": "IIT Madras",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "venue": "IIT Madras Main Campus"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-24T08:52:26.966+00:00",
      "startDate": "2026-12-04T08:52:26.966+00:00",
      "endDate": "2026-12-06T08:52:26.966+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/road-safety-hackathon-2026-iit-madras-1680515",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Road%20Safety%20Hackathon%202026%20%20%20BIMSTEC%20International",
    "isVerified": true,
    "description": "Road Safety Hackathon 2026 - BIMSTEC International Track (Not Open to Indian Participants). Indian Institute of Technology (IIT), Madras. Team Size 1 - 10 ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794125985793-9-183",
    "title": "CodeTitans India 2026 - National Hackathon",
    "slug": "codetitans-india-2026-national-hackathon",
    "tagline": "Find out the best CodeTitans India 2026 - National Hackathon that match your interests. Prove your mettle and ...",
    "organizer": "unstop.com",
    "institutionType": "Tech School",
    "institutionName": "unstop.com Tech Hub",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-23T08:19:45.793+00:00",
      "startDate": "2026-12-03T08:19:45.793+00:00",
      "endDate": "2026-12-05T08:19:45.793+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/codetitans-india-2026-national-hackathon-wecodecoders-1766190",
    "backupLink": "https://unstop.com/hackathons?searchTerm=CodeTitans%20India%202026%20%20%20National%20Hackathon",
    "isVerified": true,
    "description": "Find out the best CodeTitans India 2026 - National Hackathon that match your interests. Prove your mettle and win exciting prizes like job ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
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
      "registrationDeadline": "2026-11-15T18:29:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-17T18:29:00+00:00",
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
    "source": "Unstop"
  },
  {
    "id": "tinyfish-1793824635432-6-928",
    "title": "HackIIITD - 2026",
    "slug": "hackiiitd-2026",
    "tagline": "HACKIIITD 2026 National Level 24-Hour Hackathon Organised by Tech Council, IIIT Delhi, on 24th and 25th Octobe...",
    "organizer": "unstop.com",
    "institutionType": "IIIT",
    "institutionName": "IIIT Delhi",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "New Delhi",
      "state": "Delhi NCR",
      "venue": "IIT Delhi, New Delhi / NCR"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-19T20:37:15.432+00:00",
      "startDate": "2026-11-29T20:37:15.432+00:00",
      "endDate": "2026-12-01T20:37:15.432+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/hackiiitd-esya26-indraprastha-institute-of-information-technology-iiit-delhi-1761212",
    "backupLink": "https://unstop.com/hackathons?searchTerm=HackIIITD%20%20%202026",
    "isVerified": true,
    "description": "HACKIIITD 2026 National Level 24-Hour Hackathon Organised by Tech Council, IIIT Delhi, on 24th and 25th October. Open Across India No ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794162938749-9-270",
    "title": "India Innovates 2026",
    "slug": "india-innovates-2026",
    "tagline": "India Innovates 2026 is the world's largest civic tech hackathon, organized by HN and the Municipal Corporatio...",
    "organizer": "indiainnovates.org",
    "institutionType": "Tech School",
    "institutionName": "VIT Vellore",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "New Delhi",
      "state": "Delhi NCR",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-23T18:35:38.749+00:00",
      "startDate": "2026-12-03T18:35:38.749+00:00",
      "endDate": "2026-12-05T18:35:38.749+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://indiainnovates.org/",
    "backupLink": "https://unstop.com/hackathons?searchTerm=India%20Innovates%202026",
    "isVerified": true,
    "description": "India Innovates 2026 is the world's largest civic tech hackathon, organized by HN and the Municipal Corporation of Delhi (MCD). It invites India's brightest ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
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
      "registrationDeadline": "2026-11-13T18:30:00+00:00",
      "startDate": "2026-09-18T18:30:00+00:00",
      "endDate": "2026-11-13T18:30:00+00:00",
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
    "source": "Devfolio"
  },
  {
    "id": "tinyfish-1794266009833-2-294",
    "title": "InsightX: Leadership Analytics Challenge",
    "slug": "insightx-leadership-analytics-challenge",
    "tagline": "Indian Institute of Technology (IIT), Registration Deadline 13 Feb 26, 06:29. No coding or dataset access is r...",
    "organizer": "unstop.com",
    "institutionType": "IIT",
    "institutionName": "Indian Institute of Technology (IIT)",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "venue": "Indian Institute of Technology (IIT) Main Campus"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-24T23:13:29.833+00:00",
      "startDate": "2026-12-04T23:13:29.833+00:00",
      "endDate": "2026-12-06T23:13:29.833+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/insightx-leadership-analytics-challenge-techfest-2025-26-iit-bombay-1632209",
    "backupLink": "https://unstop.com/hackathons?searchTerm=InsightX%20%20Leadership%20Analytics%20Challenge",
    "isVerified": true,
    "description": "Indian Institute of Technology (IIT), Registration Deadline 13 Feb 26, 06:29. No coding or dataset access is required at this stage. a premier ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794266009833-6-120",
    "title": "Multimodal AI Hackathon 2026",
    "slug": "multimodal-ai-hackathon-2026",
    "tagline": "Indian Institute of Technology (IIT), This nationwide hackathon invites students to work at the intersection o...",
    "organizer": "unstop.com",
    "institutionType": "IIT",
    "institutionName": "Indian Institute of Technology (IIT)",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "venue": "Indian Institute of Technology (IIT) Main Campus"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-24T23:13:29.833+00:00",
      "startDate": "2026-12-04T23:13:29.833+00:00",
      "endDate": "2026-12-06T23:13:29.833+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/multimodal-ai-hackathon-2026-iit-mandi-1755408",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Multimodal%20AI%20Hackathon%202026",
    "isVerified": true,
    "description": "Indian Institute of Technology (IIT), This nationwide hackathon invites students to work at the intersection of Generative AI, Agentic AI, Oct 12 Oct 26, 06:30 ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794266009833-8-878",
    "title": "Perceptron Hackathon - Techfest",
    "slug": "perceptron-hackathon-techfest",
    "tagline": "Registration closes - 15th October 2026. Round 1 submission deadline - 31st October 2026. Shortlist announceme...",
    "organizer": "techfest.org",
    "institutionType": "IIT",
    "institutionName": "IIT Bombay",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "offline",
    "location": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "venue": "IIT Bombay Main Campus"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-24T23:13:29.833+00:00",
      "startDate": "2026-12-04T23:13:29.833+00:00",
      "endDate": "2026-12-06T23:13:29.833+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://techfest.org/competitions/perceptron-hackathon",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Perceptron%20Hackathon%20%20%20Techfest",
    "isVerified": true,
    "description": "Registration closes - 15th October 2026. Round 1 submission deadline - 31st October 2026. Shortlist announcement - 10th November 2026. Midway Check - 1st ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
  },
  {
    "id": "tinyfish-1794301101641-5-718",
    "title": "Computer Vision AI Hackathon - 2026",
    "slug": "computer-vision-ai-hackathon-2026",
    "tagline": "Registrations open now, close Oct 10; Shortlisted teams get dataset access + kickoff with Everseen engineers; ...",
    "organizer": "unstop.com",
    "institutionType": "Tech School",
    "institutionName": "unstop.com Tech Hub",
    "entryFeeType": "free",
    "entryFeeAmount": 0,
    "entryFeeCurrency": "₹",
    "mode": "online",
    "location": {
      "city": "Online",
      "state": "Pan-India",
      "venue": "Virtual (Unstop / Devfolio / Zoom)"
    },
    "prizePool": "₹5,00,000",
    "prizePoolAmountINR": 500000,
    "dates": {
      "registrationDeadline": "2026-11-25T08:58:21.641+00:00",
      "startDate": "2026-12-05T08:58:21.641+00:00",
      "endDate": "2026-12-07T08:58:21.641+00:00",
      "durationHours": 36
    },
    "registrationLink": "https://unstop.com/hackathons/computer-vision-ai-hackathon-e-cell-iit-bombay-1760776",
    "backupLink": "https://unstop.com/hackathons?searchTerm=Computer%20Vision%20AI%20Hackathon%20%20%202026",
    "isVerified": true,
    "description": "Registrations open now, close Oct 10; Shortlisted teams get dataset access + kickoff with Everseen engineers; 36-hour build weekend with ...",
    "tracks": [
      "Artificial Intelligence",
      "Web3 & Decentralization",
      "Cloud Computing",
      "Open Innovation"
    ],
    "eligibility": "Open to engineering, polytechnic, and university students across India.",
    "teamSize": "1 - 4 Members",
    "perks": [
      "Direct Live Scraped via TinyFish AI Web Search",
      "Fast-track Registration via official platform",
      "Industry Certification and Mentorship"
    ],
    "status": "open",
    "source": "TinyFish AI Live"
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
      "registrationDeadline": "2026-12-15T18:29:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-12-17T18:29:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-17T06:20:48+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-19T06:20:48+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-23T18:29:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-25T18:29:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-18T17:00:00+00:00",
      "startDate": "2026-10-20T10:30:00+00:00",
      "endDate": "2026-11-18T17:00:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-11-20T18:29:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-22T18:29:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-15T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-17T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-12-15T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-12-17T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2027-02-28T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2027-03-02T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-22T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-24T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-12-04T08:00:42+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-12-06T08:00:42+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2027-02-28T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2027-03-02T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-12-03T13:00:48+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-12-05T13:00:48+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2027-03-01T06:20:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2027-03-03T06:20:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-13T18:29:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-15T18:29:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-12-06T18:29:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-12-08T18:29:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-21T05:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-23T05:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-21T15:30:51+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-23T15:30:51+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-24T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-26T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-12-24T18:29:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-12-26T18:29:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-12-14T19:19:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-12-16T19:19:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-20T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-22T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-20T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-22T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-20T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-22T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-17T18:30:00+00:00",
      "startDate": "2026-11-20T18:06:22.189+00:00",
      "endDate": "2026-11-19T18:30:00+00:00",
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
    "source": "Unstop"
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
      "registrationDeadline": "2026-11-15T18:29:00+00:00",
      "startDate": "2026-09-27T04:30:00+00:00",
      "endDate": "2026-11-15T18:29:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-11-18T02:45:00+00:00",
      "startDate": "2026-11-09T18:30:00+00:00",
      "endDate": "2026-11-18T02:45:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-11-24T18:30:00+00:00",
      "startDate": "2026-11-08T18:30:00+00:00",
      "endDate": "2026-11-24T18:30:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-11-30T18:29:00+00:00",
      "startDate": "2026-10-29T18:30:00+00:00",
      "endDate": "2026-11-30T18:29:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-11-30T18:29:00+00:00",
      "startDate": "2026-11-04T18:30:00+00:00",
      "endDate": "2026-11-30T18:29:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-12-10T18:29:00+00:00",
      "startDate": "2026-08-14T18:29:00+00:00",
      "endDate": "2026-12-10T18:29:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-12-28T18:29:00+00:00",
      "startDate": "2026-11-08T02:15:00+00:00",
      "endDate": "2026-12-28T18:29:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-12-30T18:29:00+00:00",
      "startDate": "2026-11-06T18:30:00+00:00",
      "endDate": "2026-12-30T18:29:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-12-31T18:29:00+00:00",
      "startDate": "2026-11-08T03:30:00+00:00",
      "endDate": "2026-12-31T18:29:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-12-31T18:29:00+00:00",
      "startDate": "2026-08-23T18:30:00+00:00",
      "endDate": "2026-12-31T18:29:00+00:00",
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
    "source": "Devfolio"
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
      "registrationDeadline": "2026-12-31T18:29:00+00:00",
      "startDate": "2026-10-29T14:00:00+00:00",
      "endDate": "2026-12-31T18:29:00+00:00",
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
    "source": "Devfolio"
  }
];
