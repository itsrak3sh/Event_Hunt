import React from 'react';
import { Gift, DollarSign, School, Globe, MapPin, Sparkles } from 'lucide-react';
import { FilterState } from '../types';

interface StatsBarProps {
  stats: {
    total: number;
    freeCount: number;
    paidCount: number;
    onlineCount: number;
    offlineCount: number;
    hybridCount: number;
    iitCount: number;
    nitCount: number;
    iiitCount: number;
  };
  filters?: FilterState;
  onFilterChange?: (newFilters: FilterState) => void;
  onResetFilters?: () => void;
}

export const StatsBar: React.FC<StatsBarProps> = ({
  stats,
  filters,
  onFilterChange,
  onResetFilters,
}) => {
  const isAllActive =
    !filters ||
    (filters.fee === 'all' &&
      filters.mode === 'all' &&
      filters.institution === 'all' &&
      (filters.city === 'All Locations' || filters.city === 'all') &&
      !filters.search);

  const isFreeActive = filters?.fee === 'free';
  const isPaidActive = filters?.fee === 'paid';
  const isTopCollegesActive = filters?.institution === 'Top Colleges' || filters?.institution === 'IIT';
  const isOnlineActive = filters?.mode === 'online';
  const isOfflineActive = filters?.mode === 'offline';

  const handleAllClick = () => {
    if (onResetFilters) {
      onResetFilters();
    } else if (onFilterChange && filters) {
      onFilterChange({
        ...filters,
        fee: 'all',
        mode: 'all',
        institution: 'all',
        city: 'All Locations',
        search: '',
      });
    }
  };

  const handleFeeToggle = (feeType: 'free' | 'paid') => {
    if (!onFilterChange || !filters) return;
    onFilterChange({
      ...filters,
      fee: filters.fee === feeType ? 'all' : feeType,
    });
  };

  const handleTopCollegesToggle = () => {
    if (!onFilterChange || !filters) return;
    onFilterChange({
      ...filters,
      institution: isTopCollegesActive ? 'all' : 'Top Colleges',
    });
  };

  const handleModeToggle = (modeType: 'online' | 'offline') => {
    if (!onFilterChange || !filters) return;
    onFilterChange({
      ...filters,
      mode: filters.mode === modeType ? 'all' : modeType,
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
      
      {/* 1. All Hackathons (Renamed from 'Live Matches') */}
      <button
        type="button"
        onClick={handleAllClick}
        title="Click to view all live hackathons"
        className={`p-3.5 sm:p-4 rounded-xl border flex items-center gap-3 transition-all text-left cursor-pointer group shadow-2xs ${
          isAllActive
            ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
            : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/20'
        }`}
      >
        <div className={`p-2.5 rounded-lg transition-colors ${
          isAllActive ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
        }`}>
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block font-bold">
            All Hackathons
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-black text-gray-950 font-mono">
              {stats.total}
            </span>
            {isAllActive && (
              <span className="text-[10px] font-bold text-blue-600 font-mono">Active</span>
            )}
          </div>
        </div>
      </button>

      {/* 2. Free Entry */}
      <button
        type="button"
        onClick={() => handleFeeToggle('free')}
        title="Click to filter free entry (₹0) hackathons"
        className={`p-3.5 sm:p-4 rounded-xl border flex items-center gap-3 transition-all text-left cursor-pointer group shadow-2xs ${
          isFreeActive
            ? 'bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
            : 'bg-white border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/20'
        }`}
      >
        <div className={`p-2.5 rounded-lg transition-colors ${
          isFreeActive ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100'
        }`}>
          <Gift className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block font-bold">
            Free Entry (₹0)
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-black text-emerald-600 font-mono">
              {stats.freeCount}
            </span>
            {isFreeActive && (
              <span className="text-[10px] font-bold text-emerald-700 font-mono">Applied</span>
            )}
          </div>
        </div>
      </button>

      {/* 3. Paid Entry */}
      <button
        type="button"
        onClick={() => handleFeeToggle('paid')}
        title="Click to filter paid / ticketed hackathons"
        className={`p-3.5 sm:p-4 rounded-xl border flex items-center gap-3 transition-all text-left cursor-pointer group shadow-2xs ${
          isPaidActive
            ? 'bg-amber-50/70 border-amber-500 ring-2 ring-amber-500/20 shadow-xs'
            : 'bg-white border-gray-200 hover:border-amber-300 hover:bg-amber-50/20'
        }`}
      >
        <div className={`p-2.5 rounded-lg transition-colors ${
          isPaidActive ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-600 group-hover:bg-amber-100'
        }`}>
          <DollarSign className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block font-bold">
            Paid / Ticketed
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-black text-amber-600 font-mono">
              {stats.paidCount}
            </span>
            {isPaidActive && (
              <span className="text-[10px] font-bold text-amber-700 font-mono">Applied</span>
            )}
          </div>
        </div>
      </button>

      {/* 4. IIT / NIT / IIIT */}
      <button
        type="button"
        onClick={handleTopCollegesToggle}
        title="Click to filter IIT, NIT & IIIT hackathons"
        className={`p-3.5 sm:p-4 rounded-xl border flex items-center gap-3 transition-all text-left cursor-pointer group shadow-2xs ${
          isTopCollegesActive
            ? 'bg-purple-50/70 border-purple-500 ring-2 ring-purple-500/20 shadow-xs'
            : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50/20'
        }`}
      >
        <div className={`p-2.5 rounded-lg transition-colors ${
          isTopCollegesActive ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600 group-hover:bg-purple-100'
        }`}>
          <School className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block font-bold">
            IIT / NIT / IIIT
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-black text-purple-600 font-mono">
              {stats.iitCount + stats.nitCount + stats.iiitCount}
            </span>
            {isTopCollegesActive && (
              <span className="text-[10px] font-bold text-purple-700 font-mono">Applied</span>
            )}
          </div>
        </div>
      </button>

      {/* 5. Online vs Offline Quick Mode Selectors */}
      <div className="col-span-2 sm:col-span-4 lg:col-span-1 p-2 rounded-xl bg-white border border-gray-200 flex items-center gap-1.5 shadow-2xs">
        {/* Online Button */}
        <button
          type="button"
          onClick={() => handleModeToggle('online')}
          title="Click to filter online hackathons"
          className={`flex-1 py-2.5 px-2 rounded-lg flex items-center justify-center gap-1 text-xs font-bold transition-all cursor-pointer ${
            isOnlineActive
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{stats.onlineCount} Online</span>
        </button>

        <span className="text-gray-200">|</span>

        {/* Offline Button */}
        <button
          type="button"
          onClick={() => handleModeToggle('offline')}
          title="Click to filter offline in-person hackathons"
          className={`flex-1 py-2.5 px-2 rounded-lg flex items-center justify-center gap-1 text-xs font-bold transition-all cursor-pointer ${
            isOfflineActive
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>{stats.offlineCount} Offline</span>
        </button>
      </div>

    </div>
  );
};
