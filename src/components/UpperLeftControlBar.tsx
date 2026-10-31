import React from 'react';
import { 
  MapPin, 
  Globe, 
  Layers, 
  Building2, 
  ChevronDown,
  X
} from 'lucide-react';
import { FeeFilter, ModeFilter, InstitutionFilter, CityOption } from '../types';

interface UpperLeftControlBarProps {
  fee: FeeFilter;
  onFeeChange: (fee: FeeFilter) => void;
  mode: ModeFilter;
  onModeChange: (mode: ModeFilter) => void;
  city: string;
  onCityChange: (city: string) => void;
  institution: InstitutionFilter;
  onInstitutionChange: (inst: InstitutionFilter) => void;
  cities: CityOption[];
  freeCount: number;
  paidCount: number;
}

export const UpperLeftControlBar: React.FC<UpperLeftControlBarProps> = ({
  fee,
  onFeeChange,
  mode,
  onModeChange,
  city,
  onCityChange,
  institution,
  onInstitutionChange,
  cities,
  freeCount,
  paidCount,
}) => {
  return (
    <div className="w-full bg-slate-100/90 dark:bg-[#0d121f]/95 border-b border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 shadow-inner transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        
        {/* Top Control Level: Upper Left Primary Fee Toggle & Dependent Mode Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* ================= UPPER LEFT CORNER: FREE vs PAID ================= */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-600 dark:text-slate-400 uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>1. Entry Type:</span>
            </div>

            {/* Segmented Button for Upper Left */}
            <div className="inline-flex p-1 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              
              {/* Free Entry Button */}
              <button
                type="button"
                onClick={() => onFeeChange('free')}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  fee === 'free'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 ring-1 ring-emerald-400/50'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-300"></span>
                <span>🟢 Free Entry</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                  fee === 'free' ? 'bg-emerald-700/60 text-emerald-100' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                }`}>
                  {freeCount}
                </span>
              </button>

              {/* Paid Entry Button */}
              <button
                type="button"
                onClick={() => onFeeChange('paid')}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  fee === 'paid'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25 ring-1 ring-amber-400/50'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="flex h-2 w-2 rounded-full bg-amber-300"></span>
                <span>💎 Paid Entry</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                  fee === 'paid' ? 'bg-amber-700/60 text-amber-100' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                }`}>
                  {paidCount}
                </span>
              </button>

              {/* All Option */}
              <button
                type="button"
                onClick={() => onFeeChange('all')}
                className={`flex items-center px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  fee === 'all'
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                title="View Both Free and Paid"
              >
                Show Both
              </button>
            </div>
          </div>

          {/* ================= 2. AFTER SELECTING FREE OR PAID: MODE (ONLINE / OFFLINE / HYBRID) ================= */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-600 dark:text-slate-400 uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span>2. Mode:</span>
            </div>

            <div className="inline-flex p-1 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex-wrap">
              
              {/* Online Option */}
              <button
                type="button"
                onClick={() => onModeChange('online')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  mode === 'online'
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-200" />
                <span>🌐 Online</span>
              </button>

              {/* Offline Option */}
              <button
                type="button"
                onClick={() => onModeChange('offline')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  mode === 'offline'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-blue-200" />
                <span>📍 Offline</span>
                <span className="text-[10px] bg-blue-700/60 text-blue-100 px-1.5 py-0.2 rounded-full ml-1">
                  Campuses
                </span>
              </button>

              {/* Hybrid Option */}
              <button
                type="button"
                onClick={() => onModeChange('hybrid')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  mode === 'hybrid'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-purple-200" />
                <span>⚡ Hybrid</span>
              </button>

              {/* All Modes Option */}
              <button
                type="button"
                onClick={() => onModeChange('all')}
                className={`px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-all ${
                  mode === 'all'
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                All Modes
              </button>
            </div>
          </div>

        </div>

        {/* ================= 3. CONDITIONAL LOCATION SELECTOR (IF OFFLINE OR HYBRID IS SELECTED) ================= */}
        {(mode === 'offline' || mode === 'hybrid') && (
          <div className="mt-1 pt-3 border-t border-slate-200 dark:border-slate-800/60 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span>3. Choose Offline Location & City:</span>
                    <span className="text-[10px] font-normal text-cyan-600 dark:text-cyan-400 font-mono bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-800/50">
                      Required for Offline Hunt
                    </span>
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Filter across IIT/NIT campuses, metro tech hubs, or select specific city:
                  </p>
                </div>
              </div>

              {/* City Dropdown & Quick Selection */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="relative min-w-[200px]">
                  <select
                    value={city}
                    onChange={(e) => onCityChange(e.target.value)}
                    className="w-full appearance-none bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 rounded-xl px-3.5 py-2 pr-9 text-xs sm:text-sm font-medium text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition shadow-inner"
                  >
                    <option value="All Locations">🇮🇳 All Cities & States</option>
                    {cities.map((c) => (
                      <option key={c.city} value={c.city}>
                        {c.city} ({c.state})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>

                {city !== 'All Locations' && (
                  <button
                    onClick={() => onCityChange('All Locations')}
                    className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-200 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 transition"
                    title="Clear location filter"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Clear</span>
                  </button>
                )}
              </div>

            </div>

            {/* Popular City & Hub Chips */}
            <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] text-slate-500 font-mono flex-shrink-0">Quick Cities:</span>
              {['Bengaluru', 'New Delhi', 'Mumbai', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Pilani', 'Roorkee'].map((cityName) => (
                <button
                  key={cityName}
                  type="button"
                  onClick={() => onCityChange(city === cityName ? 'All Locations' : cityName)}
                  className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-all font-medium ${
                    city === cityName
                      ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40'
                      : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {cityName}
                </button>
              ))}
            </div>

          </div>
        )}

        {/* ================= 4. INSTITUTION TYPE SELECTOR (IIT, NIT, IIIT, TECH SCHOOL, PRIVATE) ================= */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1 font-mono text-[11px]">
              <Building2 className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
              <span>Campus Type:</span>
            </span>

            {(['all', 'IIT', 'NIT', 'IIIT', 'Tech School', 'Private / Corporate'] as InstitutionFilter[]).map((inst) => (
              <button
                key={inst}
                onClick={() => onInstitutionChange(inst)}
                className={`px-2.5 py-1 rounded-md transition font-medium whitespace-nowrap ${
                  institution === inst
                    ? 'bg-indigo-500/20 dark:bg-indigo-600/30 text-indigo-700 dark:text-indigo-300 border border-indigo-500/40 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {inst === 'all' ? 'All Campuses' : inst}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-500 font-mono hidden md:block">
            {fee === 'free' ? '✅ Showing 100% Free Entry' : fee === 'paid' ? '💎 Showing Paid Entry' : '⚡ Showing All Entry Options'}
          </div>

        </div>

      </div>
    </div>
  );
};
