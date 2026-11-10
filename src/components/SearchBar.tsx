import React from 'react';
import { Search, ArrowUpDown, X } from 'lucide-react';

interface SearchBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  sortBy: 'deadline' | 'prize' | 'duration';
  onSortByChange: (val: 'deadline' | 'prize' | 'duration') => void;
  totalCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  search,
  onSearchChange,
  sortBy,
  onSortByChange,
  totalCount,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
      
      {/* Keyword Search Input */}
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

      {/* Sort By Dropdown & Count */}
      <div className="flex items-center gap-2 justify-between sm:justify-end">
        <div className="text-xs text-gray-500 font-mono hidden md:block">
          Found <span className="text-blue-600 font-bold">{totalCount}</span> hackathons
        </div>

        <div className="flex items-center gap-1.5 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs shadow-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-500 font-medium hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as any)}
            className="bg-transparent text-gray-800 font-medium focus:outline-none cursor-pointer"
          >
            <option value="deadline">Registration Deadline</option>
            <option value="prize">Highest Prize Pool</option>
            <option value="duration">Shortest Duration</option>
          </select>
        </div>
      </div>

    </div>
  );
};
