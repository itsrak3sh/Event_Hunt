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
  const title = hackathon.title || '';
  const tracks = hackathon.tracks || [];
  const text = [
    title,
    hackathon.tagline || '',
    hackathon.description || '',
    ...tracks,
  ].join(' ').toLowerCase();

  const hwTrackRegex = /hardware|iot|robotic|embedded/i;
  const hwSpecificRegex = /\b(robotics|robot|hardware|embedded|arduino|raspberry pi|mechatronics|vlsi|circuits|microcontroller|ee)\b/i;
  const swTrackRegex = /web|app|software|ai|machine learning|full-stack|cloud|devops|data science|algorithms|coding|blockchain/i;
  const swSpecificRegex = /\b(ai|ml|genai|web|app|software|coding|full-stack|cloud|saas|data science)\b/i;

  const hasHwTrack = tracks.some(t => hwTrackRegex.test(t));
  const hasHwTitle = hwSpecificRegex.test(title);
  const hasHwGeneral = hasHwTrack || hasHwTitle || /\b(hardware|robotics|robot|iot|embedded|drone|arduino|sensors|mechatronics|circuits|microcontroller)\b/i.test(text);

  const hasSwTrack = tracks.some(t => swTrackRegex.test(t));
  const hasSwTitle = swSpecificRegex.test(title);
  const hasSwGeneral = hasSwTrack || hasSwTitle || /\b(software|web|full-stack|machine learning|ai|genai|coding|backend|frontend|algorithms)\b/i.test(text);

  if (hasHwTitle && !hasSwTitle) {
    return {
      type: 'hardware',
      label: 'Only Hardware & Robotics',
      badgeLabel: '🤖 Only Hardware',
      icon: '🤖',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      description: 'Dedicated Robotics, Embedded Systems, IoT & Mechatronics',
    };
  }

  if (hasHwGeneral && hasSwGeneral) {
    return {
      type: 'both',
      label: 'Both (Hardware + Software)',
      badgeLabel: '⚡ Hardware + Software',
      icon: '⚡',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Ideal for Mechatronics + CS / AI collab teams',
    };
  }

  if (hasHwGeneral) {
    return {
      type: 'hardware',
      label: 'Only Hardware & Robotics',
      badgeLabel: '🤖 Only Hardware',
      icon: '🤖',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      description: 'Dedicated Robotics, Embedded Systems, IoT & Mechatronics',
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
