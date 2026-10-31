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
          placeholder="Search by college (IIT, NIT, IIIT), tech (GenAI, Web3), or city..."
          className="w-full bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 pl-10 pr-9 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 shadow-sm transition"
        />
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
        {search && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Sort By Dropdown & Count */}
      <div className="flex items-center gap-2 justify-between sm:justify-end">
        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden md:block">
          Found <span className="text-cyan-600 dark:text-cyan-400 font-bold">{totalCount}</span> hackathons
        </div>

        <div className="flex items-center gap-1.5 bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs shadow-sm">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as any)}
            className="bg-transparent text-slate-700 dark:text-slate-200 font-medium focus:outline-none cursor-pointer"
          >
            <option value="deadline" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Registration Deadline</option>
            <option value="prize" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Highest Prize Pool</option>
            <option value="duration" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Shortest Duration</option>
          </select>
        </div>
      </div>

    </div>
  );
};
