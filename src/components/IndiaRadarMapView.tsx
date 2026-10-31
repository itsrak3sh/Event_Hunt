import React from 'react';
import { Navigation } from 'lucide-react';
import { Hackathon } from '../types';

interface IndiaRadarMapViewProps {
  hackathons: Hackathon[];
  onSelectCity: (city: string) => void;
  activeCity: string;
}

export const IndiaRadarMapView: React.FC<IndiaRadarMapViewProps> = ({
  hackathons,
  onSelectCity,
  activeCity,
}) => {
  const regions = [
    {
      id: 'north',
      name: 'North Region (Delhi NCR, Roorkee, Pilani)',
      cities: ['New Delhi', 'Gurugram', 'Roorkee', 'Pilani'],
      gradient: 'from-amber-500/15 via-orange-500/10 to-transparent',
      borderColor: 'border-orange-300 dark:border-orange-500/30',
      badgeColor: 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/40 border-orange-300 dark:border-orange-500/40',
      icon: '🏛️',
    },
    {
      id: 'south',
      name: 'South Region (Bengaluru, Hyderabad, Chennai, Trichy, Kochi)',
      cities: ['Bengaluru', 'Hyderabad', 'Chennai', 'Tiruchirappalli', 'Vellore', 'Kochi', 'Mangaluru'],
      gradient: 'from-cyan-500/15 via-blue-500/10 to-transparent',
      borderColor: 'border-cyan-300 dark:border-cyan-500/30',
      badgeColor: 'text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/40 border-cyan-300 dark:border-cyan-500/40',
      icon: '🌴',
    },
    {
      id: 'west',
      name: 'West Region (Mumbai & Pune)',
      cities: ['Mumbai', 'Pune'],
      gradient: 'from-purple-500/15 via-indigo-500/10 to-transparent',
      borderColor: 'border-purple-300 dark:border-purple-500/30',
      badgeColor: 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/40 border-purple-300 dark:border-purple-500/40',
      icon: '🌊',
    },
    {
      id: 'east',
      name: 'East Region (Kolkata & Northeast)',
      cities: ['Kolkata'],
      gradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
      borderColor: 'border-emerald-300 dark:border-emerald-500/30',
      badgeColor: 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-500/40',
      icon: '🌉',
    },
  ];

  return (
    <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-lg transition-colors">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
            <Navigation className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 font-['Plus_Jakarta_Sans']">
              <span>All-India Regional Radar</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                Interactive Campus Map
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any campus hub or city to filter offline and hybrid hackathons across India
            </p>
          </div>
        </div>

        {activeCity !== 'All Locations' && (
          <button
            onClick={() => onSelectCity('All Locations')}
            className="self-start sm:self-auto text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-cyan-700 dark:text-cyan-300 font-medium border border-slate-200 dark:border-slate-700 transition"
          >
            ← Reset to All Locations
          </button>
        )}
      </div>

      {/* Regional Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {regions.map((region) => {
          // Count hackathons in this region
          const regionalHacks = hackathons.filter((h) =>
            region.cities.some((c) => h.location.city.toLowerCase().includes(c.toLowerCase()))
          );

          return (
            <div
              key={region.id}
              className={`p-4 rounded-xl bg-gradient-to-b ${region.gradient} to-white dark:to-slate-900/80 border ${region.borderColor} flex flex-col justify-between shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg">{region.icon}</span>
                  <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border ${region.badgeColor}`}>
                    {regionalHacks.length} Hackathons
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {region.name}
                </h4>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {region.cities.map((city) => {
                    const count = hackathons.filter((h) =>
                      h.location.city.toLowerCase().includes(city.toLowerCase())
                    ).length;
                    const isSelected = activeCity === city;

                    return (
                      <button
                        key={city}
                        onClick={() => onSelectCity(isSelected ? 'All Locations' : city)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
                          isSelected
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                            : 'bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <span>{city}</span>
                        {count > 0 && (
                          <span className={`ml-1 text-[10px] ${isSelected ? 'text-slate-950' : 'text-slate-400 dark:text-slate-500'}`}>
                            ({count})
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sample Campus Tags in Region */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                {region.id === 'north' && '🏛️ IIT Delhi • IIT Roorkee • BITS Pilani'}
                {region.id === 'south' && '🚀 IIIT-H • IIIT-B • IIT Madras • NIT-T'}
                {region.id === 'west' && '💡 IIT Bombay Techfest • COEP Pune'}
                {region.id === 'east' && '⚡ Salt Lake Sector V • IEM Kolkata'}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
