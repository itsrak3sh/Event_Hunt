import React from 'react';
import { 
  X, 
  SlidersHorizontal, 
  Check, 
  RotateCcw,
  Sparkles,
  Globe, 
  MapPin, 
  Layers, 
  School, 
  DollarSign, 
  Gift, 
  ChevronDown,
  Cpu
} from 'lucide-react';
import { FilterState, FeeFilter, ModeFilter, InstitutionFilter, CityOption } from '../types';
import { TechDomain } from '../utils/domain';
import { TRACK_OPTIONS } from './TrackFilterChips';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFiltersChange: (newFilters: FilterState) => void;
  selectedTrack: string;
  onSelectTrack: (track: string) => void;
  cities: CityOption[];
  totalMatches: number;
  onResetFilters: () => void;
  domainFilter: TechDomain;
  onDomainFilterChange: (domain: TechDomain) => void;
  domainCounts: { all: number; software: number; hardware: number; both: number };
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
  selectedTrack,
  onSelectTrack,
  cities,
  totalMatches,
  onResetFilters,
  domainFilter,
  onDomainFilterChange,
  domainCounts,
}) => {
  if (!isOpen) return null;

  // Count active filters
  const activeCount = [
    filters.fee !== 'all',
    filters.mode !== 'all',
    filters.city !== 'All Locations' && filters.city !== 'all',
    filters.institution !== 'all',
    selectedTrack !== 'all',
    domainFilter !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-xl flex flex-col rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden text-gray-900 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-950">
                  Filter Hackathons
                </h3>
                {activeCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                    {activeCount} active
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">Refine by branch, entry fee, mode, college & track</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Filters Body */}
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-6 text-xs sm:text-sm">
          
          {/* 1. Branch / Engineering Field (Mechatronics vs CS vs Both) */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 font-mono mb-2.5">
              <Cpu className="w-3.5 h-3.5 text-purple-600" />
              <span>1. Branch & Engineering Field</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              
              {/* All Tech Fields */}
              <button
                type="button"
                onClick={() => onDomainFilterChange('all')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-between cursor-pointer ${
                  domainFilter === 'all'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                <span>All Tech Fields</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  domainFilter === 'all' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'
                }`}>
                  {domainCounts.all}
                </span>
              </button>

              {/* Only Hardware & Robotics (Specifically for Mechatronics & Hardware students) */}
              <button
                type="button"
                onClick={() => onDomainFilterChange('hardware')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-between cursor-pointer ${
                  domainFilter === 'hardware'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs ring-2 ring-amber-500/20'
                    : 'bg-amber-50/60 hover:bg-amber-100/70 text-amber-800 border-amber-200'
                }`}
                title="Only Hardware, Robotics, IoT & Mechatronics hackathons"
              >
                <span className="flex items-center gap-1">🤖 Only Hardware</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                  domainFilter === 'hardware' ? 'bg-amber-700 text-white' : 'bg-amber-200 text-amber-900'
                }`}>
                  {domainCounts.hardware}
                </span>
              </button>

              {/* Both: Hardware + Software (Collab teams) */}
              <button
                type="button"
                onClick={() => onDomainFilterChange('both')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-between cursor-pointer ${
                  domainFilter === 'both'
                    ? 'bg-purple-600 text-white border-purple-600 shadow-xs ring-2 ring-purple-500/20'
                    : 'bg-purple-50/60 hover:bg-purple-100/70 text-purple-800 border-purple-200'
                }`}
                title="Both Hardware + Software (Mechatronics + CS / AI collab teams)"
              >
                <span className="flex items-center gap-1">⚡ Both (HW + SW)</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                  domainFilter === 'both' ? 'bg-purple-700 text-white' : 'bg-purple-200 text-purple-900'
                }`}>
                  {domainCounts.both}
                </span>
              </button>

              {/* Software & AI (CS/IT branch) */}
              <button
                type="button"
                onClick={() => onDomainFilterChange('software')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-between cursor-pointer ${
                  domainFilter === 'software'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs ring-2 ring-blue-500/20'
                    : 'bg-blue-50/60 hover:bg-blue-100/70 text-blue-800 border-blue-200'
                }`}
                title="Pure Software, AI/ML, Web, App & Cloud hackathons"
              >
                <span className="flex items-center gap-1">💻 Software & AI</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                  domainFilter === 'software' ? 'bg-blue-700 text-white' : 'bg-blue-200 text-blue-900'
                }`}>
                  {domainCounts.software}
                </span>
              </button>

            </div>
          </div>

          {/* 2. Entry Fee Filter */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 font-mono mb-2.5">
              <Gift className="w-3.5 h-3.5 text-emerald-600" />
              <span>2. Entry Fee</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => onFiltersChange({ ...filters, fee: 'all' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  filters.fee === 'all'
                    ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                All Fees
              </button>
              <button
                type="button"
                onClick={() => onFiltersChange({ ...filters, fee: 'free' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  filters.fee === 'free'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                <span>🟢 Free (₹0)</span>
              </button>
              <button
                type="button"
                onClick={() => onFiltersChange({ ...filters, fee: 'paid' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  filters.fee === 'paid'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                <span>💎 Paid Entry</span>
              </button>
            </div>
          </div>

          {/* 3. Participation Mode Filter */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 font-mono mb-2.5">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>3. Mode</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => onFiltersChange({ ...filters, mode: 'all' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  filters.mode === 'all'
                    ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                All Modes
              </button>
              <button
                type="button"
                onClick={() => onFiltersChange({ ...filters, mode: 'online' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1 cursor-pointer ${
                  filters.mode === 'online'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                <span>🌐 Online</span>
              </button>
              <button
                type="button"
                onClick={() => onFiltersChange({ ...filters, mode: 'offline' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1 cursor-pointer ${
                  filters.mode === 'offline'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                <span>📍 Offline</span>
              </button>
              <button
                type="button"
                onClick={() => onFiltersChange({ ...filters, mode: 'hybrid' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1 cursor-pointer ${
                  filters.mode === 'hybrid'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                <span>⚡ Hybrid</span>
              </button>
            </div>
          </div>

          {/* 4. Location / City Selector (Useful for Offline & All) */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 font-mono mb-2.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>4. Location / Campus City</span>
            </label>
            <div className="relative">
              <select
                value={filters.city}
                onChange={(e) => onFiltersChange({ ...filters, city: e.target.value })}
                className="w-full appearance-none bg-white border border-gray-300 hover:border-gray-400 rounded-xl px-4 py-2.5 pr-10 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition shadow-xs cursor-pointer"
              >
                <option value="All Locations">🇮🇳 All Cities & Pan-India</option>
                <option value="Online">Online / Virtual</option>
                {cities.map((c) => (
                  <option key={c.city} value={c.city}>
                    {c.city} ({c.state})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* 5. College / Institution Type */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 font-mono mb-2.5">
              <School className="w-3.5 h-3.5 text-purple-600" />
              <span>5. College / Host Tier</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'all', label: 'All Colleges' },
                { id: 'IIT', label: 'IITs' },
                { id: 'NIT', label: 'NITs' },
                { id: 'IIIT', label: 'IIITs' },
              ].map((inst) => (
                <button
                  key={inst.id}
                  type="button"
                  onClick={() => onFiltersChange({ ...filters, institution: inst.id as InstitutionFilter })}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                    filters.institution === inst.id
                      ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  {inst.label}
                </button>
              ))}
            </div>
          </div>

          {/* 6. Tracks / Domains */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 font-mono mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>6. Tech Track</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {TRACK_OPTIONS.map((track) => {
                const isActive = selectedTrack === track.id;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => onSelectTrack(track.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                    }`}
                  >
                    {track.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-gray-200 bg-gray-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onResetFilters}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-200/60 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs transition active:scale-95 cursor-pointer"
          >
            Show {totalMatches} Hackathons
          </button>
        </div>

      </div>

    </div>
  );
};
