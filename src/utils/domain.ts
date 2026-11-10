export type TechDomain = 'all' | 'software' | 'hardware' | 'both';

export interface DomainMeta {
  type: 'software' | 'hardware' | 'both';
  label: string;
  badgeLabel: string;
  icon: string;
  badgeClass: string;
  description: string;
}

export function getTechDomain(hackathon: {
  title: string;
  tagline?: string;
  description?: string;
  tracks?: string[];
}): DomainMeta {
  const text = [
    hackathon.title,
    hackathon.tagline || '',
    hackathon.description || '',
    ...(hackathon.tracks || []),
  ].join(' ').toLowerCase();

  const hwKeywords = [
    'hardware', 'robotics', 'robot', 'iot', 'internet of things', 'embedded',
    'drone', 'arduino', 'raspberry', 'cad', 'mechatronics', 'vlsi', 'sensors',
    'circuits', 'ar/vr', 'vr', 'wearables', 'devices', 'space', 'aerospace',
    'autonomous', 'ev', '3d printing', 'microcontroller', 'electric vehicle'
  ];

  const swKeywords = [
    'software', 'web', 'app', 'cloud', 'cyber', 'full-stack', 'fullstack',
    'machine learning', 'ai', 'genai', 'data science', 'algorithms', 'devops',
    'saas', 'coding', 'web3', 'blockchain', 'backend', 'frontend', 'mobile'
  ];

  const hasHw = hwKeywords.some(k => text.includes(k));
  const hasSw = swKeywords.some(k => text.includes(k));

  if (hasHw && hasSw) {
    return {
      type: 'both',
      label: 'Both (Hardware + Software)',
      badgeLabel: '⚡ Hardware + Software',
      icon: '⚡',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Ideal for Mechatronics + CS / AI collab teams',
    };
  }

  if (hasHw) {
    return {
      type: 'hardware',
      label: 'Hardware & Robotics',
      badgeLabel: '🤖 Hardware & Robotics',
      icon: '🤖',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      description: 'Robotics, IoT, Embedded Systems & Mechatronics',
    };
  }

  return {
    type: 'software',
    label: 'Software & AI',
    badgeLabel: '💻 Software & AI',
    icon: '💻',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'AI/ML, Web, App Development & Cloud Systems',
  };
}
