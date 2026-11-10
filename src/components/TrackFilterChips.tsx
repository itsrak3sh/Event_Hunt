import React from 'react';
import { Cpu, Terminal, Shield, HeartPulse, Boxes, Sparkles, Wifi, Landmark } from 'lucide-react';

interface TrackFilterChipsProps {
  selectedTrack: string;
  onSelectTrack: (track: string) => void;
}

export const TRACK_OPTIONS = [
  { id: 'all', label: 'All Tracks', icon: Sparkles },
  { id: 'ai', label: 'AI & GenAI', keyword: 'AI', icon: Cpu },
  { id: 'web3', label: 'Web3 & Crypto', keyword: 'Web3', icon: Boxes },
  { id: 'fintech', label: 'FinTech & Banking', keyword: 'FinTech', icon: Landmark },
  { id: 'iot', label: 'Robotics & IoT', keyword: 'IoT', icon: Wifi },
  { id: 'cloud', label: 'Cloud & Systems', keyword: 'Cloud', icon: Terminal },
  { id: 'security', label: 'Cyber Security', keyword: 'Security', icon: Shield },
  { id: 'health', label: 'HealthTech', keyword: 'Health', icon: HeartPulse },
];

export const TrackFilterChips: React.FC<TrackFilterChipsProps> = ({
  selectedTrack,
  onSelectTrack,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
      <span className="text-xs text-gray-500 font-mono flex-shrink-0">Tracks:</span>
      {TRACK_OPTIONS.map((track) => {
        const Icon = track.icon;
        const isActive = selectedTrack === track.id;
        return (
          <button
            key={track.id}
            type="button"
            onClick={() => onSelectTrack(track.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              isActive
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 border border-gray-200 shadow-xs'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
            <span>{track.label}</span>
          </button>
        );
      })}
    </div>
  );
};
