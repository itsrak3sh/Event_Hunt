import React from 'react';
import { Search, ArrowUpDown, X, SlidersHorizontal } from 'lucide-react';

export interface ActiveFilterTag {
  id: string;
  label: string;
  onRemove: () => void;
}

interface SearchBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  sortBy: 'deadline' | 'prize' | 'duration';
  onSortByChange: (val: 'deadline' | 'prize' | 'duration') => void;
  totalCount: number;
  activeFilterCount: number;
  onOpenFilterModal: () => void;
  activeTags?: ActiveFilterTag[];
  onResetAllFilters?: () => void;
  domainFilter?: 'all' | 'software' | 'both';
  onDomainFilterChange?: (domain: 'all' | 'software' | 'both') => void;
  domainCounts?: { both: number; software: number; all?: number };
}

export const SearchBar: React.FC<SearchBarProps> = ({
  search,
  onSearchChange,
  sortBy,
  onSortByChange,
  totalCount,
  activeFilterCount,
  onOpenFilterModal,
  activeTags = [],
  onResetAllFilters,
  domainFilter = 'all',
  onDomainFilterChange,
  domainCounts = { both: 29, software: 57, all: 86 },
}) => {
  return (
    <div className="flex flex-col gap-3 mb-6">
      
      {/* Search Input + Filter Button + Sort Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by college (IIT, NIT, IIIT), tech (AI, Web3), or city..."
            className="w-full bg-white border border-gray-300 focus:border-blue-600 rounded-xl px-4 py-2.5 pl-10 pr-9 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-xs transition"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          {search && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Action Controls: Filter Button + Sort By */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          
          {/* Main Unified Filter Button */}
          <button
            type="button"
            onClick={onOpenFilterModal}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition shadow-xs cursor-pointer ${
              activeFilterCount > 0
                ? 'bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100'
                : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-400'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4 text-blue-600" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort By Dropdown */}
          <div className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs shadow-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-gray-500 font-medium hidden md:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value as any)}
              className="bg-transparent text-gray-800 font-medium focus:outline-none cursor-pointer w-full sm:w-auto text-xs"
            >
              <option value="deadline">Deadline</option>
              <option value="prize">Highest Prize</option>
              <option value="duration">Duration</option>
            </select>
          </div>

        </div>

      </div>

      {/* Branch & Tech Domain Quick Switcher (Mechatronics/Robotics vs CS/AI) */}
      {onDomainFilterChange && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-mono text-gray-500 font-semibold uppercase tracking-wider shrink-0 hidden sm:inline">
            Branch Focus:
          </span>

          {/* All Fields */}
          <button
            type="button"
            onClick={() => onDomainFilterChange('all')}
            className={`px-3 py-1.5 rounded-lg font-bold border transition-all shrink-0 cursor-pointer ${
              domainFilter === 'all'
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            All Tech Fields
          </button>

          {/* Both: Hardware + Software (Mechatronics + CS collab) */}
          <button
            type="button"
            onClick={() => onDomainFilterChange(domainFilter === 'both' ? 'all' : 'both')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold border transition-all shrink-0 cursor-pointer ${
              domainFilter === 'both'
                ? 'bg-purple-600 text-white border-purple-600 shadow-xs scale-102'
                : 'bg-purple-50/70 text-purple-700 border-purple-200 hover:bg-purple-100/70'
            }`}
            title="Ideal for Mechatronics & CS/AI collab teams (Robotics, IoT, Embedded + AI/Web)"
          >
            <span>⚡ Both (Hardware + Software)</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
              domainFilter === 'both' ? 'bg-purple-700 text-white' : 'bg-purple-200 text-purple-900'
            }`}>
              {domainCounts.both}
            </span>
          </button>

          {/* Software & AI */}
          <button
            type="button"
            onClick={() => onDomainFilterChange(domainFilter === 'software' ? 'all' : 'software')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold border transition-all shrink-0 cursor-pointer ${
              domainFilter === 'software'
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs scale-102'
                : 'bg-blue-50/70 text-blue-700 border-blue-200 hover:bg-blue-100/70'
            }`}
            title="Pure Software, AI/ML, Web, App & Cloud hackathons"
          >
            <span>💻 Software & AI</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
              domainFilter === 'software' ? 'bg-blue-700 text-white' : 'bg-blue-200 text-blue-900'
            }`}>
              {domainCounts.software}
            </span>
          </button>
        </div>
      )}

      {/* Active Filter Chips Strip (Shows when filters are selected) */}
      {(activeTags.length > 0 || search) && (
        <div className="flex items-center gap-2 flex-wrap text-xs pt-1">
          <span className="text-gray-500 text-[11px] font-mono">Active filters:</span>
          
          {activeTags.map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium"
            >
              <span>{tag.label}</span>
              <button
                type="button"
                onClick={tag.onRemove}
                className="hover:text-blue-900 rounded p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {search && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 border border-gray-200 text-xs font-medium">
              <span>Search: "{search}"</span>
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="hover:text-gray-900 rounded p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {onResetAllFilters && (activeTags.length > 1 || (activeTags.length > 0 && search)) && (
            <button
              type="button"
              onClick={onResetAllFilters}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium hover:underline ml-1"
            >
              Clear all
            </button>
          )}

          <div className="ml-auto text-xs text-gray-500 font-mono hidden sm:block">
            Found <span className="text-blue-600 font-bold">{totalCount}</span> hackathons
          </div>
        </div>
      )}

    </div>
  );
};
