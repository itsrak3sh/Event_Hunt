export interface Hackathon {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  organizer: string;
  institutionType: 'IIT' | 'NIT' | 'IIIT' | 'Tech School' | 'Private / Corporate' | 'Corporate / Private';
  institutionName: string;
  entryFeeType: 'free' | 'paid';
  entryFeeAmount: number; // in INR
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
  // ==================== FREE ENTRY HACKATHONS ====================
  // 1. IIT Bombay - Free, Offline
  {
    id: "hack-iitb-techfest-2026",
    title: "Techfest National Hackathon 2026",
    slug: "techfest-national-hackathon-iit-bombay",
    tagline: "Asia's Largest Science & Tech Festival's Flagship 36-Hour Hackathon",
    organizer: "IIT Bombay Techfest",
    institutionType: "IIT",
    institutionName: "Indian Institute of Technology Bombay",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      venue: "Student Activity Centre (SAC), IIT Bombay Campus, Powai",
      pincode: "400076"
    },
    prizePool: "₹7,50,000",
    prizePoolAmountINR: 750000,
    dates: {
      registrationDeadline: "2026-11-20T23:59:59+05:30",
      startDate: "2026-12-05T09:00:00+05:30",
      endDate: "2026-12-06T21:00:00+05:30",
      durationHours: 36
    },
    registrationLink: "https://techfest.org/competitions",
    description: "IIT Bombay Techfest invites innovators, developers, and designers across India to solve critical national and industrial challenges. Free lodging and food inside IIT Bombay campus provided for shortlisted teams.",
    tracks: ["Generative AI & LLMs", "Smart Mobility & EV", "Autonomous Robotics", "FinTech & Open Banking", "Green Energy"],
    eligibility: "Open to all enrolled undergraduate, postgraduate, and PhD students in India. Valid college ID required.",
    teamSize: "2 - 4 Members",
    perks: [
      "Free 2-day on-campus accommodation at IIT Bombay hostels",
      "All meals & midnight snacks covered",
      "Direct interview fast-tracks with sponsoring tech unicorns",
      "Official IIT Bombay Techfest certificate & swags"
    ],
    status: "open",
    source: "Direct Campus",
    featured: true
  },

  // 2. Smart India Hackathon (SIH) 2026 - Free, Hybrid/Offline
  {
    id: "hack-sih-2026",
    title: "Smart India Hackathon (SIH) 2026 - Hardware & Software",
    slug: "smart-india-hackathon-2026",
    tagline: "World's biggest open innovation model for nation-building problems",
    organizer: "Ministry of Education Innovation Cell & AICTE",
    institutionType: "IIT",
    institutionName: "Multiple Nodal Centers (IIT Delhi, IIT Roorkee, NIT Trichy)",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "hybrid",
    location: {
      city: "New Delhi",
      state: "Delhi NCR",
      venue: "Nodal Centers across IIT Delhi, IIT Roorkee, NIT Calicut & AICTE Auditorium",
      pincode: "110016"
    },
    prizePool: "₹1,00,00,000",
    prizePoolAmountINR: 10000000,
    dates: {
      registrationDeadline: "2026-11-15T18:00:00+05:30",
      startDate: "2026-12-18T08:00:00+05:30",
      endDate: "2026-12-20T20:00:00+05:30",
      durationHours: 48
    },
    registrationLink: "https://www.sih.gov.in/",
    description: "Smart India Hackathon 2026 is an initiative by MoE's Innovation Cell. Tackle complex problem statements released by central ministries, state departments, and top industries across India.",
    tracks: ["Agriculture & Rural Development", "Disaster Management", "Heritage & Culture", "MedTech & Biotech", "Smart Automation", "Defense & Space Tech"],
    eligibility: "Regular students of HEI's recognized by UGC/AICTE. Each team must have 6 members with at least 1 female teammate.",
    teamSize: "6 Members (Mandatory 1+ Female)",
    perks: [
      "₹1,00,000 cash prize per winning problem statement",
      "Travel allowance (AC 3-Tier train fare) reimbursed by AICTE",
      "Free boarding & lodging at prestigious host IITs/NITs",
      "Direct incubation funding and angel investor demos"
    ],
    status: "closing_soon",
    source: "Direct Campus",
    featured: true
  },

  // 3. IIT Delhi - Free, Offline
  {
    id: "hack-iitd-tryst-2026",
    title: "Tryst Hacks 2026 - IIT Delhi",
    slug: "tryst-hacks-iit-delhi-2026",
    tagline: "North India's premier 24-hour campus hackathon at IIT Delhi",
    organizer: "IIT Delhi Tryst & CAIC",
    institutionType: "IIT",
    institutionName: "Indian Institute of Technology Delhi",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "New Delhi",
      state: "Delhi NCR",
      venue: "Bharti School of Telecommunication & Dogra Hall, IIT Delhi, Hauz Khas",
      pincode: "110016"
    },
    prizePool: "₹5,00,000",
    prizePoolAmountINR: 500000,
    dates: {
      registrationDeadline: "2026-11-25T23:59:00+05:30",
      startDate: "2026-12-12T10:00:00+05:30",
      endDate: "2026-12-13T16:00:00+05:30",
      durationHours: 30
    },
    registrationLink: "https://www.tryst-iitd.org/",
    description: "Compete with the sharpest minds at IIT Delhi campus in an intense overnight sprint. Mentors from top venture capital firms and leading tech labs will guide finalist teams.",
    tracks: ["AI Systems & Agents", "Web3 Infrastructures", "Health Informatics", "Cyber Defense"],
    eligibility: "College students from all disciplines with a valid student identification card.",
    teamSize: "2 - 4 Members",
    perks: [
      "No registration fees",
      "Hostel stay during hackathon hours",
      "Custom IIT Delhi Tryst swags and mechanical keyboards for track winners",
      "Cloud credits from AWS and Google Cloud"
    ],
    status: "open",
    source: "Direct Campus"
  },

  // 4. IIIT Bangalore - Free, Offline
  {
    id: "hack-iiitb-innovatex",
    title: "InnovateX '26 - IIIT Bangalore",
    slug: "innovatex-iiit-bangalore-2026",
    tagline: "Silicon Valley of India's DeepTech & AI Innovation Sprint",
    organizer: "IIIT Bangalore ACM Student Chapter",
    institutionType: "IIIT",
    institutionName: "International Institute of Information Technology Bangalore",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      venue: "IIITB Main Auditorium, Electronic City Phase 1",
      pincode: "560100"
    },
    prizePool: "₹6,00,000",
    prizePoolAmountINR: 600000,
    dates: {
      registrationDeadline: "2026-11-18T23:59:00+05:30",
      startDate: "2026-12-02T09:00:00+05:30",
      endDate: "2026-12-03T18:00:00+05:30",
      durationHours: 32
    },
    registrationLink: "https://www.iiitb.ac.in/",
    description: "Located right in the heart of Electronic City Bangalore, InnovateX brings together 400+ top hackers. Judges include engineering directors from Bengaluru's leading tech headquarters.",
    tracks: ["Large Multimodal Models", "Zero Knowledge & Blockchain", "Edge Computing & IoT", "B2B SaaS"],
    eligibility: "Open to students across India. Round 1 online pitch followed by offline hackathon at IIIT Bangalore campus.",
    teamSize: "3 - 4 Members",
    perks: [
      "Access to high-compute GPU clusters during the hackathon",
      "Direct incubation interview with IIITB Innovation Centre",
      "Dinner and midnight energy drinks included",
      "Official certificate and partner bounties"
    ],
    status: "open",
    source: "Devfolio"
  },

  // 5. NIT Trichy Pragyan - Free, Offline
  {
    id: "hack-nitt-pragyan",
    title: "Pragyan Hackathon 2026 - NIT Trichy",
    slug: "pragyan-hackathon-nit-trichy-2026",
    tagline: "South India's premier ISO certified techno-managerial fest hackathon",
    organizer: "NIT Tiruchirappalli Pragyan",
    institutionType: "NIT",
    institutionName: "National Institute of Technology Tiruchirappalli",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      venue: "Orion Lecture Hall Complex, NIT Trichy Campus",
      pincode: "620015"
    },
    prizePool: "₹4,50,000",
    prizePoolAmountINR: 450000,
    dates: {
      registrationDeadline: "2026-11-28T23:59:59+05:30",
      startDate: "2026-12-19T08:00:00+05:30",
      endDate: "2026-12-20T17:00:00+05:30",
      durationHours: 36
    },
    registrationLink: "https://pragyan.org/",
    description: "Pragyan Hackathon is NIT Trichy's signature flagship coding challenge. Teams develop real-world tech prototypes evaluated by industry veterans and academia.",
    tracks: ["Smart City & Traffic AI", "FinTech Inclusion", "Healthcare Assistive Tech", "Open Innovation"],
    eligibility: "Undergraduate and postgraduate students from recognized technical colleges across India.",
    teamSize: "2 - 4 Members",
    perks: [
      "Campus stay in NIT Trichy hostels for shortlisted teams",
      "Exclusive Pragyan merch, backpacks, and certificates",
      "Total prize pool of 4.5 Lakhs INR with separate freshers track",
      "Free gourmet food throughout the 36 hours"
    ],
    status: "open",
    source: "Direct Campus"
  },

  // 6. Flipkart GRiD 6.0 - Free, Online
  {
    id: "hack-flipkart-grid",
    title: "Flipkart GRiD 6.0 - All India Engineering Challenge",
    slug: "flipkart-grid-engineering-hackathon-2026",
    tagline: "India's biggest e-commerce tech hackathon with full-time PPI opportunities",
    organizer: "Flipkart",
    institutionType: "Corporate / Private",
    institutionName: "Pan-India Online (Open to IITs, NITs, IIITs & all Engineering Colleges)",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "online",
    location: {
      city: "Online",
      state: "Pan-India",
      venue: "Virtual via Unstop & Flipkart Tech Platform"
    },
    prizePool: "₹15,00,000",
    prizePoolAmountINR: 1500000,
    dates: {
      registrationDeadline: "2026-11-12T23:59:59+05:30",
      startDate: "2026-11-20T10:00:00+05:30",
      endDate: "2026-11-24T23:59:00+05:30",
      durationHours: 96
    },
    registrationLink: "https://unstop.com/hackathons/flipkart-grid-engineering-challenge",
    description: "Flipkart GRiD provides students the opportunity to solve real-world problems in e-commerce, logistics, and next-gen retail. Top performers receive Pre-Placement Interviews (PPI) for SDE-1 roles with packages up to 32 LPA.",
    tracks: ["GenAI for Personalized E-Commerce", "Supply Chain & Route Optimization", "Smart Robotics in Warehouses", "Information Security & Fraud Detection"],
    eligibility: "B.Tech/B.E./M.Tech students graduating in 2026, 2027, or 2028 across any recognized university in India.",
    teamSize: "2 - 3 Members",
    perks: [
      "Pre-Placement Interviews (PPIs) for high-paying Software Development roles at Flipkart",
      "₹15,00,000 total prize pool with cash awards for top 10 finalists",
      "Digital certificates signed by Flipkart CTO",
      "Mentorship from Flipkart Principal Engineers"
    ],
    status: "open",
    source: "Unstop",
    featured: true
  },

  // 7. Devfolio BuildWithAI National Sprint - Free, Online
  {
    id: "hack-devfolio-buildwithai",
    title: "BuildWithAI India National Sprint 2026",
    slug: "buildwithai-india-national-sprint-2026",
    tagline: "India's largest community-driven open-source AI sprint",
    organizer: "Devfolio & Google Cloud Community India",
    institutionType: "Tech School",
    institutionName: "All India Virtual Campus Network",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "online",
    location: {
      city: "Online",
      state: "Pan-India",
      venue: "Devfolio Discord & Web Platform"
    },
    prizePool: "₹8,00,000",
    prizePoolAmountINR: 800000,
    dates: {
      registrationDeadline: "2026-11-14T23:59:59+05:30",
      startDate: "2026-11-17T18:00:00+05:30",
      endDate: "2026-11-19T21:00:00+05:30",
      durationHours: 48
    },
    registrationLink: "https://devfolio.co/hackathons",
    description: "Build cutting-edge AI agents, multi-modal applications, and developer tooling. Free Gemini and Google Cloud API credits provided to all accepted participants.",
    tracks: ["Autonomous AI Agents", "Voice & Indic Language Tech", "AI for Education & Healthcare", "Developer Productivity"],
    eligibility: "Open to any student or self-taught developer residing in India.",
    teamSize: "1 - 4 Members",
    perks: [
      "$500 Google Cloud & Gemini credits per approved team",
      "Exclusive Devfolio swag pack delivered to winners' doorsteps",
      "₹8 Lakhs total pool split across track winners",
      "Job board access to 100+ hiring tech startups"
    ],
    status: "open",
    source: "Devfolio"
  },

  // 8. T-Hub GenAI Innovators Challenge - Free, Offline
  {
    id: "hack-thub-hyderabad",
    title: "T-Hub GenAI Innovation Challenge 2026",
    slug: "thub-genai-innovation-challenge-hyderabad",
    tagline: "T-Hub Hyderabad's premier hackathon for next-generation generative AI products",
    organizer: "T-Hub Hyderabad & Telangana AI Mission (T-AIM)",
    institutionType: "Private / Corporate",
    institutionName: "T-Hub Incubation Center",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Hyderabad",
      state: "Telangana",
      venue: "T-Hub Phase 2, Raidurg, Knowledge City, Hyderabad",
      pincode: "500081"
    },
    prizePool: "₹12,00,000",
    prizePoolAmountINR: 1200000,
    dates: {
      registrationDeadline: "2026-11-22T23:59:00+05:30",
      startDate: "2026-12-08T09:00:00+05:30",
      endDate: "2026-12-09T18:00:00+05:30",
      durationHours: 34
    },
    registrationLink: "https://www.t-hub.co/",
    description: "Experience building inside India's largest startup innovation ecosystem at T-Hub Phase 2. Hackers get 24/7 access to state-of-the-art facilities, mentoring by seasoned founders, and direct equity-free grant opportunities.",
    tracks: ["Enterprise AI Agents", "Sovereign AI for Indian Languages", "Fintech Fraud Defense", "AI Hardware Acceleration"],
    eligibility: "College students, researchers, early-stage founders, and engineers across India.",
    teamSize: "2 - 4 Members",
    perks: [
      "Direct fast-track entry into T-Hub incubator programs",
      "3 months free co-working space pass for winning teams",
      "₹12,00,000 in equity-free cash grants",
      "Gourmet food and beverage stations throughout the event"
    ],
    status: "open",
    source: "Direct Campus",
    featured: true
  },

  // 9. ETHIndia New Delhi Regional - Free, Offline
  {
    id: "hack-ethindia-delhi",
    title: "ETHIndia Regional Sprint New Delhi",
    slug: "ethindia-delhi-2026",
    tagline: "Asia's largest Ethereum community regional builder hackathon",
    organizer: "ETHIndia & Devfolio",
    institutionType: "Private / Corporate",
    institutionName: "Devfolio Community Hub",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "New Delhi",
      state: "Delhi NCR",
      venue: "Aerocity Tech Convention Hall, New Delhi",
      pincode: "110037"
    },
    prizePool: "₹18,00,000",
    prizePoolAmountINR: 1800000,
    dates: {
      registrationDeadline: "2026-11-16T23:59:59+05:30",
      startDate: "2026-12-01T10:00:00+05:30",
      endDate: "2026-12-03T16:00:00+05:30",
      durationHours: 36
    },
    registrationLink: "https://ethindia.co/",
    description: "Join 1,000+ passionate developers, researchers, and builders for an exhilarating 36-hour weekend sprint pushing the boundaries of decentralization, zero-knowledge proofs, and cryptographic tech.",
    tracks: ["Account Abstraction & UX", "Zero Knowledge Proofs (ZK)", "DeFi Protocols", "Decentralized Social & Identity"],
    eligibility: "Open to all developers worldwide, no prior Web3 experience required.",
    teamSize: "2 - 5 Members",
    perks: [
      "Completely free entry, lodging recommendations, and meals",
      "Massive sponsor bounties from Polygon, Ethereum Foundation, Arbitrum",
      "Legendary ETHIndia hoodies and collectible hardware swags",
      "Direct VC connections for grant funding"
    ],
    status: "open",
    source: "Devfolio"
  },

  // 10. IIT Roorkee Cognizance - Free, Hybrid
  {
    id: "hack-iitr-cognizance",
    title: "Cognizance AI Hack - IIT Roorkee",
    slug: "cognizance-ai-hack-iit-roorkee-2026",
    tagline: "IIT Roorkee's Annual Technical Festival flagship AI/Robotics Challenge",
    organizer: "IIT Roorkee Cognizance",
    institutionType: "IIT",
    institutionName: "Indian Institute of Technology Roorkee",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "hybrid",
    location: {
      city: "Roorkee",
      state: "Uttarakhand",
      venue: "Multi Activity Centre (MAC), IIT Roorkee Campus (Online option available for Prelims)",
      pincode: "247667"
    },
    prizePool: "₹4,00,000",
    prizePoolAmountINR: 400000,
    dates: {
      registrationDeadline: "2026-11-24T20:00:00+05:30",
      startDate: "2026-12-11T10:00:00+05:30",
      endDate: "2026-12-13T18:00:00+05:30",
      durationHours: 36
    },
    registrationLink: "https://unstop.com/college-fests/cognizance-2024-indian-institute-of-technology-iit-roorkee-190629",
    description: "Solve high-impact problems at the foothills of the Himalayas. Cognizance AI Hack features challenging problem statements created in partnership with DRDO and top deep tech research labs.",
    tracks: ["Computer Vision & Edge AI", "Robotics & Swarm Drones", "Clean River Tech & Hydrology", "Quantum Computing Algorithms"],
    eligibility: "All undergraduate and postgraduate college students from recognized institutes.",
    teamSize: "2 - 4 Members",
    perks: [
      "Zero registration fee",
      "Stay provided on IIT Roorkee campus for offline finalists",
      "Certificates accredited by IIT Roorkee",
      "Opportunity to pitch to DRDO and corporate partners"
    ],
    status: "open",
    source: "Direct Campus"
  },

  // 11. Microsoft Azure India Student Hack - Free, Online
  {
    id: "hack-msft-azure-india",
    title: "Microsoft Azure India National Hackathon",
    slug: "microsoft-azure-india-national-hackathon-2026",
    tagline: "Build Scalable Cloud & AI Apps on Microsoft Azure",
    organizer: "Microsoft & Reskilll",
    institutionType: "Corporate / Private",
    institutionName: "Microsoft India Virtual Community",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "online",
    location: {
      city: "Online",
      state: "Pan-India",
      venue: "Microsoft Reactor Virtual & Teams"
    },
    prizePool: "₹10,00,000",
    prizePoolAmountINR: 1000000,
    dates: {
      registrationDeadline: "2026-11-19T23:59:00+05:30",
      startDate: "2026-11-28T09:00:00+05:30",
      endDate: "2026-11-30T22:00:00+05:30",
      durationHours: 48
    },
    registrationLink: "https://reskilll.com/",
    description: "Harness the power of Azure OpenAI, Cosmos DB, and GitHub Copilot to architect resilient modern applications. Top 3 winning teams receive direct interview consideration for Microsoft Imagine Cup and India internships.",
    tracks: ["Azure OpenAI & Semantic Kernel", "Serverless Microservices", "Cloud Security", "Accessibility & Inclusion"],
    eligibility: "Any college student enrolled in India or self-paced learner under 26 years.",
    teamSize: "1 - 4 Members",
    perks: [
      "$200 Azure cloud credits for every registered team",
      "Free Microsoft Certified: Azure Fundamentals (AZ-900) exam voucher",
      "Official Microsoft trophy and swag kits shipped to home",
      "₹10,00,000 prize pool"
    ],
    status: "open",
    source: "Unstop"
  },

  // 12. NIT Warangal - Free, Hybrid
  {
    id: "hack-nitw-technozion",
    title: "CodeSprint '26 - NIT Warangal",
    slug: "codesprint-nit-warangal-2026",
    tagline: "NIT Warangal's Technozion National Technical Festival Coding Odyssey",
    organizer: "NIT Warangal CSEA",
    institutionType: "NIT",
    institutionName: "National Institute of Technology Warangal",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "hybrid",
    location: {
      city: "Warangal",
      state: "Telangana",
      venue: "Dr. B.R. Ambedkar Learning Resource Centre, NIT Warangal Campus",
      pincode: "506004"
    },
    prizePool: "₹3,50,000",
    prizePoolAmountINR: 350000,
    dates: {
      registrationDeadline: "2026-11-27T18:00:00+05:30",
      startDate: "2026-12-15T09:00:00+05:30",
      endDate: "2026-12-16T18:00:00+05:30",
      durationHours: 32
    },
    registrationLink: "https://technozion.nitw.ac.in/",
    description: "A hybrid 32-hour marathon testing algorithmic problem solving, full-stack design, and distributed architectures. Join either physically at NIT Warangal's modern labs or virtually.",
    tracks: ["Full-Stack Distributed Systems", "AI for Public Sector", "Cyber Threat Detection", "Web3 Open Challenge"],
    eligibility: "College students pursuing technical degrees across India.",
    teamSize: "2 - 4 Members",
    perks: [
      "Zero registration charges",
      "Hostel accommodation provided for physical attendees",
      "Cash prizes with spot goodies",
      "Certificate of excellence"
    ],
    status: "open",
    source: "Direct Campus"
  },


  // ==================== PAID ENTRY HACKATHONS ====================
  // 13. IIIT Hyderabad Megathon '26 - Paid, Offline
  {
    id: "hack-iiith-megathon-2026",
    title: "Megathon '26 - IIIT Hyderabad",
    slug: "megathon-iiit-hyderabad-2026",
    tagline: "Hyderabad's Largest Student-Run 24-Hour Hackathon at IIIT Hyderabad",
    organizer: "IIIT Hyderabad E-Cell & Felicity",
    institutionType: "IIIT",
    institutionName: "International Institute of Information Technology Hyderabad",
    entryFeeType: "paid",
    entryFeeAmount: 250,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Hyderabad",
      state: "Telangana",
      venue: "Himalaya Block & KRB Seminar Hall, IIIT Hyderabad, Gachibowli",
      pincode: "500032"
    },
    prizePool: "₹8,50,000",
    prizePoolAmountINR: 850000,
    dates: {
      registrationDeadline: "2026-11-21T23:59:59+05:30",
      startDate: "2026-12-06T10:00:00+05:30",
      endDate: "2026-12-07T14:00:00+05:30",
      durationHours: 24
    },
    registrationLink: "https://felicity.iiit.ac.in/infinium/",
    description: "Megathon is IIIT Hyderabad's flagship hackathon with 1,200+ participants. The nominal entry fee covers overnight access to high-speed fiber internet, continuous catering, Midnight Pizza Fest, and official premium swag kits.",
    tracks: ["Generative AI & Agentic Workflows", "Fintech & UPI Infrastructure", "Hardware / IoT Embedded Systems", "GovTech & Citizen Services"],
    eligibility: "College students, fresh graduates, and startup developers. Team fee is ₹250 per participant.",
    teamSize: "2 - 4 Members",
    perks: [
      "Unlimited Midnight Pizza, Red Bull, energy snacks, and breakfast",
      "Exclusive Megathon '26 tech hoodie, stickers, and lanyard",
      "Direct incubation review by CIE (Center for Innovation and Entrepreneurship) IIITH",
      "Cash awards totaling ₹8.5 Lakhs with instant prize distribution"
    ],
    status: "open",
    source: "Direct Campus",
    featured: true
  },

  // 14. IIT Madras Shaastra Hack - Paid, Offline
  {
    id: "hack-iitm-shaastra-2026",
    title: "Shaastra Tech Hackathon 2026 - IIT Madras",
    slug: "shaastra-tech-hackathon-iit-madras-2026",
    tagline: "India's only ISO 9001 certified student-run annual tech fest hackathon",
    organizer: "IIT Madras Shaastra",
    institutionType: "IIT",
    institutionName: "Indian Institute of Technology Madras",
    entryFeeType: "paid",
    entryFeeAmount: 300,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      venue: "IC&SR Building & Central Lecture Theatre, IIT Madras Campus, Adyar",
      pincode: "600036"
    },
    prizePool: "₹6,00,000",
    prizePoolAmountINR: 600000,
    dates: {
      registrationDeadline: "2026-11-23T20:00:00+05:30",
      startDate: "2026-12-14T09:00:00+05:30",
      endDate: "2026-12-15T18:00:00+05:30",
      durationHours: 32
    },
    registrationLink: "https://shaastra.org/",
    description: "Shaastra Hackathon brings forward cutting-edge problem statements sponsored by leading multinational corporations and defense labs. Registration fee covers IIT Madras fest access pass and hospitality.",
    tracks: ["Autonomous Vehicles & LiDAR", "Healthcare AI & Diagnostics", "Defense & Cybersecurity", "Sustainable Infrastructure"],
    eligibility: "Open to engineering, science, and design students across India. Registration pass is ₹300 per participant.",
    teamSize: "2 - 4 Members",
    perks: [
      "Includes full 4-day pass to Shaastra IIT Madras festival & pro-shows",
      "Hostel accommodation assistance inside IIT Madras lush green deer campus",
      "Shaastra official certificates verified on blockchain",
      "Direct mentor access to professors from IITM Robert Bosch Centre for Data Science & AI"
    ],
    status: "open",
    source: "Direct Campus",
    featured: true
  },

  // 15. BITS Pilani Conquest & APOGEE - Paid, Offline
  {
    id: "hack-bits-apogee-2026",
    title: "APOGEE HackSprint 2026 - BITS Pilani",
    slug: "apogee-hacksprint-bits-pilani-2026",
    tagline: "Birla Institute of Technology and Science Flagship 36-Hour Hackathon",
    organizer: "BITS Pilani APOGEE & Center for Software Development",
    institutionType: "Tech School",
    institutionName: "BITS Pilani, Pilani Campus",
    entryFeeType: "paid",
    entryFeeAmount: 400,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Pilani",
      state: "Rajasthan",
      venue: "Computer Centre (IPC) & NAB, BITS Pilani Campus, Vidya Vihar",
      pincode: "333031"
    },
    prizePool: "₹5,50,000",
    prizePoolAmountINR: 550000,
    dates: {
      registrationDeadline: "2026-11-26T22:00:00+05:30",
      startDate: "2026-12-10T10:00:00+05:30",
      endDate: "2026-12-11T22:00:00+05:30",
      durationHours: 36
    },
    registrationLink: "https://bits-apogee.org/",
    description: "APOGEE is BITS Pilani's legendary international technical fest. The nominal registration fee covers hostel stay inside BITS Pilani campus, food passes, and access to all celebrity tech keynotes.",
    tracks: ["Decentralized Finance (DeFi)", "Computer Vision in AgriTech", "Autonomous Systems", "SaaS & Cloud Platforms"],
    eligibility: "Undergraduate and master's students with valid college ID. ₹400 registration fee per team member.",
    teamSize: "2 - 4 Members",
    perks: [
      "Hostel room accommodation inside BITS Pilani campus for all 36 hours",
      "Free access to APOGEE 2026 tech speaker sessions and star nights",
      "High-speed gigabit Wi-Fi and unlimited beverages",
      "BITS Pilani incubation center (Pilani Innovation & Technology Hub) fast-track"
    ],
    status: "open",
    source: "Direct Campus"
  },

  // 16. Bengaluru Tech Summit DeepTech Hack - Paid, Offline
  {
    id: "hack-bts-bengaluru-deeptech",
    title: "Bengaluru Tech Summit DeepTech Hackathon",
    slug: "bengaluru-tech-summit-deeptech-hack-2026",
    tagline: "Karnataka Innovation Technology Society (KITS) flagship 36-hour hack",
    organizer: "Government of Karnataka & BTS Tech Conclave",
    institutionType: "Private / Corporate",
    institutionName: "Bangalore Palace & KITS Tech Hub",
    entryFeeType: "paid",
    entryFeeAmount: 500,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      venue: "Bengaluru Palace Grounds, Tripuravasini, Bellary Rd",
      pincode: "560006"
    },
    prizePool: "₹20,00,000",
    prizePoolAmountINR: 2000000,
    dates: {
      registrationDeadline: "2026-11-17T23:59:00+05:30",
      startDate: "2026-12-04T09:00:00+05:30",
      endDate: "2026-12-05T19:00:00+05:30",
      durationHours: 34
    },
    registrationLink: "https://bengalurutechsummit.com/",
    description: "India's premier tech event brings corporate giants, global venture funds, and brilliant engineering minds together. Paid delegate pass grants access to Bengaluru Tech Summit exhibitions and VIP lounge.",
    tracks: ["Generative AI & Foundation Models", "Aerospace & Satellite Data", "Quantum Security", "CleanTech & Smart Urbanism"],
    eligibility: "Open to professional software engineers, university students, and startup founders. Ticket: ₹500.",
    teamSize: "2 - 4 Members",
    perks: [
      "Access to full 3-day Bengaluru Tech Summit conference & exhibition worth ₹5,000+",
      "Direct pitching in front of Karnataka IT Minister & Tier-1 VCs (Sequoia, Accel)",
      "₹20,00,000 cash prize pool with government grant incentives",
      "Catered 5-star buffet meals at Bangalore Palace"
    ],
    status: "closing_soon",
    source: "Unstop",
    featured: true
  },

  // 17. VIT Vellore graVITas - Paid, Offline
  {
    id: "hack-vit-gravitas-2026",
    title: "graVITas Hackathon '26 - VIT Vellore",
    slug: "gravitas-hackathon-vit-vellore-2026",
    tagline: "VIT Vellore's International Knowledge and Tech Carnival Hackathon",
    organizer: "VIT Vellore Technology Tower & IEEE CS",
    institutionType: "Tech School",
    institutionName: "Vellore Institute of Technology",
    entryFeeType: "paid",
    entryFeeAmount: 350,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Vellore",
      state: "Tamil Nadu",
      venue: "Anna Auditorium & Technology Tower, VIT Vellore Campus",
      pincode: "632014"
    },
    prizePool: "₹5,00,000",
    prizePoolAmountINR: 500000,
    dates: {
      registrationDeadline: "2026-11-20T23:00:00+05:30",
      startDate: "2026-12-03T10:00:00+05:30",
      endDate: "2026-12-04T18:00:00+05:30",
      durationHours: 32
    },
    registrationLink: "https://vit.ac.in/",
    description: "VIT Vellore graVITas Hackathon attracts 1,500+ builders across the nation. The ₹350 registration fee includes campus entry, breakfast, lunch, dinner, and 24/7 computer center facilities.",
    tracks: ["Edge AI & Computer Vision", "Blockchain & Decentralized Identity", "FinTech & UPI 2.0", "Assistive Health Devices"],
    eligibility: "Any bona fide student of an accredited university or college.",
    teamSize: "2 - 4 Members",
    perks: [
      "All meals & high-protein midnight refreshments provided",
      "VIT Technology Business Incubator (VITTBI) funding recommendation",
      "Exclusive graVITas hoodie & kit",
      "Total cash prizes of ₹5,00,000"
    ],
    status: "open",
    source: "Direct Campus"
  },

  // 18. CyberCity Gurugram FinTech Hack - Paid, Offline
  {
    id: "hack-cybercity-fintech",
    title: "CyberCity FinTech & NeoBanking Hackathon",
    slug: "cybercity-fintech-hackathon-gurugram-2026",
    tagline: "North India's largest FinTech builder sprint in DLF CyberCity",
    organizer: "Gurugram Tech Alliance & FinTech Council",
    institutionType: "Private / Corporate",
    institutionName: "WeWork DLF Cyber City Hub",
    entryFeeType: "paid",
    entryFeeAmount: 600,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Gurugram",
      state: "Delhi NCR",
      venue: "DLF CyberCity, Phase II, Gurugram, Haryana",
      pincode: "122002"
    },
    prizePool: "₹10,00,000",
    prizePoolAmountINR: 1000000,
    dates: {
      registrationDeadline: "2026-11-22T20:00:00+05:30",
      startDate: "2026-12-05T09:30:00+05:30",
      endDate: "2026-12-06T19:30:00+05:30",
      durationHours: 34
    },
    registrationLink: "https://unstop.com/hackathons",
    description: "Build the future of payments, algorithmic trading, fraud mitigation, and account aggregation. Entry ticket covers WeWork luxury workspace pass, barista coffee, dinner buffet, and hackathon infrastructure.",
    tracks: ["Real-time UPI Fraud Prevention", "Algorithmic Market Intelligence", "Account Aggregator Ecosystem", "RegTech & Compliance AI"],
    eligibility: "Tech developers, fintech enthusiasts, university students. Fee: ₹600.",
    teamSize: "2 - 4 Members",
    perks: [
      "Unlimited specialty coffee and catered lunch/dinner in WeWork DLF CyberCity",
      "Mentorship from Chief Risk Officers and FinTech VP of Engineering",
      "₹10,00,000 in cash prizes",
      "Direct interviews for roles at top FinTech unicorns"
    ],
    status: "open",
    source: "Unstop"
  },

  // 19. Maker Village Kochi Hardware & IoT Hack - Paid, Offline
  {
    id: "hack-maker-village-kochi",
    title: "Maker Village IoT & Embedded Systems Hackathon",
    slug: "maker-village-iot-hackathon-kochi-2026",
    tagline: "India's largest electronic hardware incubator 30-hour sprint",
    organizer: "Maker Village & Kerala Startup Mission",
    institutionType: "Private / Corporate",
    institutionName: "Maker Village Electronics Incubator",
    entryFeeType: "paid",
    entryFeeAmount: 200,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Kochi",
      state: "Kerala",
      venue: "Technology Innovation Zone, Kinfra Hi-Tech Park, Kalamassery, Kochi",
      pincode: "683503"
    },
    prizePool: "₹4,00,000",
    prizePoolAmountINR: 400000,
    dates: {
      registrationDeadline: "2026-11-25T18:00:00+05:30",
      startDate: "2026-12-09T09:00:00+05:30",
      endDate: "2026-12-10T15:00:00+05:30",
      durationHours: 30
    },
    registrationLink: "https://startupmission.kerala.gov.in/",
    description: "Full access to Maker Village PCB fabrication units, 3D printers, laser cutters, oscilloscope benches, and microcontrollers. Registration fee of ₹200 includes hardware test kits and meals.",
    tracks: ["Drone Avionics & Surveillance", "Industrial IoT & Smart Sensors", "Wearable Medical Tech", "Smart Agriculture Hardware"],
    eligibility: "Open to hardware engineers, firmware developers, and robotics students.",
    teamSize: "2 - 3 Members",
    perks: [
      "Free hardware development kits (ESP32, STM32, sensor arrays) to keep",
      "Hands-on access to multimillion-dollar testing labs and clean rooms",
      "₹4 Lakhs cash awards plus incubation grants up to ₹10 Lakhs",
      "Accommodation support and all meals"
    ],
    status: "open",
    source: "Direct Campus"
  },

  // 20. Pune Tech Conclave Hack - Paid, Offline
  {
    id: "hack-pune-tech-conclave",
    title: "Pune AI & Cloud Summit Hackathon",
    slug: "pune-ai-cloud-summit-hackathon-2026",
    tagline: "Automotive & IT Hub Pune's premier enterprise hackathon",
    organizer: "Pune Open Source Tech Community & COEP Tech",
    institutionType: "Tech School",
    institutionName: "COEP Technological University Campus",
    entryFeeType: "paid",
    entryFeeAmount: 300,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Pune",
      state: "Maharashtra",
      venue: "COEP Technological University Main Auditorium, Shivajinagar, Pune",
      pincode: "411005"
    },
    prizePool: "₹5,00,000",
    prizePoolAmountINR: 500000,
    dates: {
      registrationDeadline: "2026-11-24T23:59:00+05:30",
      startDate: "2026-12-07T08:30:00+05:30",
      endDate: "2026-12-08T18:00:00+05:30",
      durationHours: 34
    },
    registrationLink: "https://www.mind-spark.org/",
    description: "Experience 34 hours of intense coding at the historic COEP campus in Pune. Focus on enterprise cloud architecture, connected mobility, and LLM orchestration.",
    tracks: ["Connected Vehicles & Telematics", "Enterprise LLM Workflows", "DevOps & Cloud Reliability", "Civic Tech Pune"],
    eligibility: "Engineering students, BCA/MCA students, and IT professionals. ₹300 fee covers food and kits.",
    teamSize: "2 - 4 Members",
    perks: [
      "Catered breakfast, lunch, and late night biryani box",
      "Mentorship from Pune IT hub engineering managers (Barclays, Veritas, Nvidia)",
      "Special Pune Tech Hackathon trophy and ₹5,00,000 cash prizes",
      "Participation certificates and stickers"
    ],
    status: "open",
    source: "Unstop"
  },

  // 21. Solana India All-Star Fellowship - Paid (Nominal Registration / Refundable Deposit), Hybrid
  {
    id: "hack-solana-india-allstar",
    title: "Solana Superteam India Fellowship & Hackathon",
    slug: "solana-superteam-india-fellowship-2026",
    tagline: "India's highest bounty Web3 hackathon with regional hubs in Bengaluru & Delhi",
    organizer: "Superteam India & Solana Foundation",
    institutionType: "Private / Corporate",
    institutionName: "Superteam Hub Bengaluru & Online Stream",
    entryFeeType: "paid",
    entryFeeAmount: 350,
    entryFeeCurrency: "₹",
    mode: "hybrid",
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      venue: "Superteam House, Indiranagar, Bengaluru (or participate 100% online)",
      pincode: "560038"
    },
    prizePool: "₹25,00,000",
    prizePoolAmountINR: 2500000,
    dates: {
      registrationDeadline: "2026-11-19T23:59:59+05:30",
      startDate: "2026-12-01T10:00:00+05:30",
      endDate: "2026-12-05T20:00:00+05:30",
      durationHours: 96
    },
    registrationLink: "https://superteam.fun/",
    description: "Build high-speed decentralized apps, consumer crypto, and DePIN projects. The ₹350 commitment fee is fully refunded upon qualifying project submission and unlocks full physical house access.",
    tracks: ["Consumer Crypto & Social", "DePIN & Physical Infrastructure", "DeFi & Trading Systems", "AI x Crypto Agents"],
    eligibility: "Open to all developers across India. Online submissions welcome, physical demo day in Bengaluru.",
    teamSize: "1 - 4 Members",
    perks: [
      "Access to Superteam Hacker House in Indiranagar Bengaluru with free food & red bull",
      "Instant grant allocations up to $10,000 for standout prototypes",
      "Total prize pool of ₹25 Lakhs ($30,000+)",
      "Global demo day stream to top Silicon Valley crypto VCs"
    ],
    status: "open",
    source: "Devfolio",
    featured: true
  },

  // 22. National CodeSprint Online - Paid, Online
  {
    id: "hack-national-codesprint-online",
    title: "CodeCon India 2026 - Master's Online Hackathon",
    slug: "codecon-india-masters-online-2026",
    tagline: "Pan-India Competitive Coding & System Design Championship",
    organizer: "CodeNation & TechGig",
    institutionType: "Corporate / Private",
    institutionName: "Online Virtual Arena",
    entryFeeType: "paid",
    entryFeeAmount: 199,
    entryFeeCurrency: "₹",
    mode: "online",
    location: {
      city: "Online",
      state: "Pan-India",
      venue: "Online Proctored Platform"
    },
    prizePool: "₹6,00,000",
    prizePoolAmountINR: 600000,
    dates: {
      registrationDeadline: "2026-11-20T23:59:59+05:30",
      startDate: "2026-11-29T10:00:00+05:30",
      endDate: "2026-11-30T18:00:00+05:30",
      durationHours: 32
    },
    registrationLink: "https://www.techgig.com/hackathons",
    description: "Test your system architecture, concurrency, and algorithm skills in a proctored 32-hour live build. Nominal registration fee of ₹199 ensures serious competitors.",
    tracks: ["High-Throughput Microservices", "Real-Time Collaborative Systems", "Autonomous Database Optimizers"],
    eligibility: "Open to students and software engineers across India.",
    teamSize: "1 - 3 Members",
    perks: [
      "Direct interview referrals to high-frequency trading (HFT) firms",
      "₹6,00,000 cash prizes",
      "Ranked leaderboard profile badges",
      "Comprehensive performance review report"
    ],
    status: "open",
    source: "Unstop"
  },

  // 23. NIT Surathkal Incident - Paid, Offline
  {
    id: "hack-nits-incident",
    title: "Incident Hackathon '26 - NIT Surathkal",
    slug: "incident-hackathon-nit-surathkal-2026",
    tagline: "Beachside Hackathon at India's scenic coastal engineering campus",
    organizer: "NITK Surathkal Incident & Web Club",
    institutionType: "NIT",
    institutionName: "National Institute of Technology Karnataka, Surathkal",
    entryFeeType: "paid",
    entryFeeAmount: 150,
    entryFeeCurrency: "₹",
    mode: "offline",
    location: {
      city: "Mangaluru",
      state: "Karnataka",
      venue: "Main Seminar Hall & Central Computing Center, NITK Surathkal Campus",
      pincode: "575025"
    },
    prizePool: "₹3,50,000",
    prizePoolAmountINR: 350000,
    dates: {
      registrationDeadline: "2026-11-26T23:59:00+05:30",
      startDate: "2026-12-16T09:00:00+05:30",
      endDate: "2026-12-17T18:00:00+05:30",
      durationHours: 33
    },
    registrationLink: "https://incident.nitk.ac.in/events/hackathon",
    description: "Experience the unique vibe of building at NITK's private beach campus. A nominal registration fee of ₹150 covers festival entry, campus stay, and all hackathon sessions.",
    tracks: ["Marine Tech & Ocean Sensing", "FinTech Solutions", "Generative AI for Media", "Open Innovation"],
    eligibility: "College students with valid university identity cards. Team fee is ₹150 per person.",
    teamSize: "2 - 4 Members",
    perks: [
      "Hostel accommodation inside NITK Surathkal campus right next to the beach",
      "Access to Incident 2026 pro-nights and cultural events",
      "₹3.5 Lakhs prize pool with dedicated freshers category",
      "Free snacks and midnight meal rations"
    ],
    status: "open",
    source: "Direct Campus"
  },

  // 24. Kolkata DevHack - Free, Hybrid
  {
    id: "hack-kolkata-devhack",
    title: "Kolkata DevHack 2026",
    slug: "kolkata-devhack-2026",
    tagline: "Eastern India's flagship community hackathon at Salt Lake Sector V",
    organizer: "GDG Kolkata & IEM Tech Club",
    institutionType: "Tech School",
    institutionName: "Salt Lake Sector V Tech Hub",
    entryFeeType: "free",
    entryFeeAmount: 0,
    entryFeeCurrency: "₹",
    mode: "hybrid",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      venue: "Biswa Bangla Convention Centre & IEM Campus, Salt Lake Sector V",
      pincode: "700091"
    },
    prizePool: "₹4,50,000",
    prizePoolAmountINR: 450000,
    dates: {
      registrationDeadline: "2026-11-27T23:59:59+05:30",
      startDate: "2026-12-13T10:00:00+05:30",
      endDate: "2026-12-14T18:00:00+05:30",
      durationHours: 32
    },
    registrationLink: "https://devfolio.co/hackathons",
    description: "East India's largest collaborative hackathon bringing together students and professionals. Join physically in Salt Lake or participate online via Devfolio.",
    tracks: ["AI for Bengali & Regional Languages", "Civic Tech & Urban Planning", "Web3 Decentralized Systems", "Green Tech"],
    eligibility: "Open to all students and budding engineers.",
    teamSize: "2 - 4 Members",
    perks: [
      "Zero registration fee",
      "Exclusive Kolkata DevHack commemorative swags and stickers",
      "High speed gigabit connectivity and meals provided",
      "Fast-track incubation support"
    ],
    status: "open",
    source: "Devfolio"
  }
];
