import React from 'react';
import { Gift, DollarSign, Globe, MapPin, Zap, Sparkles, Check, RotateCcw } from 'lucide-react';
import { FilterState } from '../types';

interface StatsBarProps {
  stats: {
    total: number;
    totalAll?: number;
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
  const isFilterActive =
    !!filters &&
    (filters.fee !== 'all' ||
      filters.mode !== 'all' ||
      (filters.city && filters.city !== 'All Locations' && filters.city !== 'all') ||
      (filters.institution && filters.institution !== 'all') ||
      !!filters.search);

  const isAllActive = !isFilterActive;
  const isFreeActive = filters?.fee === 'free';
  const isPaidActive = filters?.fee === 'paid';
  const isOnlineActive = filters?.mode === 'online';
  const isOfflineActive = filters?.mode === 'offline';
  const isHybridActive = filters?.mode === 'hybrid';
  const isAnyModeActive = isOnlineActive || isOfflineActive || isHybridActive;

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

  const handleModeToggle = (modeType: 'online' | 'offline' | 'hybrid') => {
    if (!onFilterChange || !filters) return;
    onFilterChange({
      ...filters,
      mode: filters.mode === modeType ? 'all' : modeType,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
      
      {/* 1. All Hackathons / Active Results Card */}
      <button
        type="button"
        onClick={handleAllClick}
        title={isFilterActive ? "Click to clear filters and show all 86 hackathons" : "Viewing all live hackathons"}
        className={`relative p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 group ${
          isAllActive
            ? 'border-2 border-blue-600 bg-blue-50/90 shadow-md shadow-blue-600/10 ring-4 ring-blue-500/15 -translate-y-0.5'
            : 'border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50/30 hover:shadow-xs hover:-translate-y-0.5 active:scale-[0.98]'
        }`}
      >
        {/* Status Pill Badge */}
        {isAllActive ? (
          <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-xs tracking-wide">
            <Check className="w-3 h-3 stroke-[3]" />
            <span>All Active</span>
          </span>
        ) : (
          <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 hover:bg-blue-600 hover:text-white transition shadow-2xs tracking-wide">
            <RotateCcw className="w-2.5 h-2.5" />
            <span>Reset All</span>
          </span>
        )}

        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl transition-all duration-200 ${
            isAllActive 
              ? 'bg-blue-600 text-white shadow-xs scale-105' 
              : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105'
          }`}>
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-500 uppercase font-mono tracking-wider block font-bold">
              {isFilterActive ? 'Matching Results' : 'All Hackathons'}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-xl sm:text-2xl font-black font-mono leading-none ${
                isAllActive ? 'text-blue-900' : 'text-gray-950'
              }`}>
                {stats.total}
              </span>
              {isFilterActive && stats.totalAll && (
                <span className="text-xs text-gray-500 font-mono font-medium">
                  / {stats.totalAll}
                </span>
              )}
            </div>
          </div>
        </div>
      </button>

      {/* 2. Free Entry (₹0) Card */}
      <button
        type="button"
        onClick={() => handleFeeToggle('free')}
        title="Click to toggle 100% free hackathons filter"
        className={`relative p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 group ${
          isFreeActive
            ? 'border-2 border-emerald-600 bg-emerald-50/90 shadow-md shadow-emerald-600/10 ring-4 ring-emerald-500/15 -translate-y-0.5'
            : 'border-gray-200 bg-white hover:border-emerald-400 hover:shadow-xs hover:-translate-y-0.5 active:scale-[0.98]'
        }`}
      >
        {/* Selected Pill Badge */}
        {isFreeActive && (
          <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-xs tracking-wide">
            <Check className="w-3 h-3 stroke-[3]" />
            <span>Applied</span>
          </span>
        )}

        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl transition-all duration-200 ${
            isFreeActive 
              ? 'bg-emerald-600 text-white shadow-xs scale-105' 
              : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
          }`}>
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-500 uppercase font-mono tracking-wider block font-bold">
              Free Entry (₹0)
            </span>
            <span className="text-xl sm:text-2xl font-black text-emerald-600 font-mono leading-none">
              {stats.freeCount}
            </span>
          </div>
        </div>
      </button>

      {/* 3. Paid / Ticketed Card */}
      <button
        type="button"
        onClick={() => handleFeeToggle('paid')}
        title="Click to toggle paid / ticketed hackathons filter"
        className={`relative p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 group ${
          isPaidActive
            ? 'border-2 border-amber-600 bg-amber-50/90 shadow-md shadow-amber-600/10 ring-4 ring-amber-500/15 -translate-y-0.5'
            : 'border-gray-200 bg-white hover:border-amber-400 hover:shadow-xs hover:-translate-y-0.5 active:scale-[0.98]'
        }`}
      >
        {/* Selected Pill Badge */}
        {isPaidActive && (
          <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-600 text-white shadow-xs tracking-wide">
            <Check className="w-3 h-3 stroke-[3]" />
            <span>Applied</span>
          </span>
        )}

        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl transition-all duration-200 ${
            isPaidActive 
              ? 'bg-amber-600 text-white shadow-xs scale-105' 
              : 'bg-amber-50 text-amber-600 group-hover:bg-amber-100 group-hover:scale-105'
          }`}>
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-500 uppercase font-mono tracking-wider block font-bold">
              Paid / Ticketed
            </span>
            <span className="text-xl sm:text-2xl font-black text-amber-600 font-mono leading-none">
              {stats.paidCount}
            </span>
          </div>
        </div>
      </button>

      {/* 4. Format / Mode Card (Online, Offline & Hybrid) */}
      <div className={`p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
        isAnyModeActive
          ? 'border-2 border-blue-600 bg-blue-50/60 shadow-md shadow-blue-600/10 ring-4 ring-blue-500/15'
          : 'border-gray-200 bg-white shadow-2xs hover:border-gray-300'
      }`}>
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[11px] text-gray-500 uppercase font-mono tracking-wider font-bold">
            Format / Mode
          </span>
          {isAnyModeActive && (
            <span className="flex items-center gap-1 text-[10px] font-bold text-blue-700 font-mono">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
              <span>Applied</span>
            </span>
          )}
        </div>

        {/* 3 Interactive Mode Tabs */}
        <div className="grid grid-cols-3 gap-1.5 bg-gray-100 p-1 rounded-xl">
          {/* Online Button */}
          <button
            type="button"
            onClick={() => handleModeToggle('online')}
            title="Toggle Online hackathons filter"
            className={`py-1.5 px-1.5 rounded-lg flex flex-col items-center justify-center transition-all duration-150 cursor-pointer ${
              isOnlineActive
                ? 'bg-blue-600 text-white font-bold shadow-xs scale-[1.03] ring-1 ring-blue-700'
                : 'text-gray-700 hover:bg-white hover:text-gray-950 font-medium'
            }`}
          >
            <div className="flex items-center gap-1 text-[11px] font-bold">
              <Globe className="w-3 h-3" />
              <span>Online</span>
            </div>
            <span className={`text-[11px] font-mono font-bold leading-tight ${isOnlineActive ? 'text-white' : 'text-gray-900'}`}>
              {stats.onlineCount}
            </span>
          </button>

          {/* Offline Button */}
          <button
            type="button"
            onClick={() => handleModeToggle('offline')}
            title="Toggle Offline in-person hackathons filter"
            className={`py-1.5 px-1.5 rounded-lg flex flex-col items-center justify-center transition-all duration-150 cursor-pointer ${
              isOfflineActive
                ? 'bg-blue-600 text-white font-bold shadow-xs scale-[1.03] ring-1 ring-blue-700'
                : 'text-gray-700 hover:bg-white hover:text-gray-950 font-medium'
            }`}
          >
            <div className="flex items-center gap-1 text-[11px] font-bold">
              <MapPin className="w-3 h-3" />
              <span>Offline</span>
            </div>
            <span className={`text-[11px] font-mono font-bold leading-tight ${isOfflineActive ? 'text-white' : 'text-gray-900'}`}>
              {stats.offlineCount}
            </span>
          </button>

          {/* Hybrid Button */}
          <button
            type="button"
            onClick={() => handleModeToggle('hybrid')}
            title="Toggle Hybrid hackathons filter"
            className={`py-1.5 px-1.5 rounded-lg flex flex-col items-center justify-center transition-all duration-150 cursor-pointer ${
              isHybridActive
                ? 'bg-blue-600 text-white font-bold shadow-xs scale-[1.03] ring-1 ring-blue-700'
                : 'text-gray-700 hover:bg-white hover:text-gray-950 font-medium'
            }`}
          >
            <div className="flex items-center gap-1 text-[11px] font-bold">
              <Zap className="w-3 h-3" />
              <span>Hybrid</span>
            </div>
            <span className={`text-[11px] font-mono font-bold leading-tight ${isHybridActive ? 'text-white' : 'text-gray-900'}`}>
              {stats.hybridCount}
            </span>
          </button>
        </div>
      </div>

    </div>
  );
};
