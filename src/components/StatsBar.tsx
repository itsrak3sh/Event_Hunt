import React from 'react';
import { Gift, DollarSign, School, Globe, MapPin, Sparkles } from 'lucide-react';

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
}

export const StatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-6 transition-colors">
      
      {/* 1. Total Hackathons */}
      <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider block">Live Matches</span>
          <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-mono">{stats.total}</span>
        </div>
      </div>

      {/* 2. Free Entry */}
      <div className="p-3 sm:p-4 rounded-2xl bg-emerald-50/50 dark:bg-gradient-to-br dark:from-emerald-950/20 dark:to-slate-900/40 border border-emerald-200 dark:border-emerald-500/20 flex items-center gap-3 shadow-sm">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Gift className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-emerald-700 dark:text-emerald-400 uppercase font-mono tracking-wider block">Free Entry (₹0)</span>
          <span className="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{stats.freeCount}</span>
        </div>
      </div>

      {/* 3. Paid Entry */}
      <div className="p-3 sm:p-4 rounded-2xl bg-amber-50/50 dark:bg-gradient-to-br dark:from-amber-950/20 dark:to-slate-900/40 border border-amber-200 dark:border-amber-500/20 flex items-center gap-3 shadow-sm">
        <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <DollarSign className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-amber-700 dark:text-amber-400 uppercase font-mono tracking-wider block">Paid / Ticketed</span>
          <span className="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 font-mono">{stats.paidCount}</span>
        </div>
      </div>

      {/* 4. IIT / NIT / IIIT */}
      <div className="p-3 sm:p-4 rounded-2xl bg-purple-50/50 dark:bg-gradient-to-br dark:from-purple-950/20 dark:to-slate-900/40 border border-purple-200 dark:border-purple-500/20 flex items-center gap-3 shadow-sm">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <School className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-purple-700 dark:text-purple-400 uppercase font-mono tracking-wider block">IIT / NIT / IIIT</span>
          <span className="text-lg sm:text-xl font-black text-purple-600 dark:text-purple-300 font-mono">
            {stats.iitCount + stats.nitCount + stats.iiitCount}
          </span>
        </div>
      </div>

      {/* 5. Online vs Offline distribution */}
      <div className="col-span-2 sm:col-span-4 lg:col-span-1 p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-around sm:justify-start gap-3 shadow-sm">
        <div className="flex items-center gap-1.5 text-xs">
          <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span className="text-slate-700 dark:text-slate-300 font-mono font-bold">{stats.onlineCount} Online</span>
        </div>
        <span className="text-slate-300 dark:text-slate-600">|</span>
        <div className="flex items-center gap-1.5 text-xs">
          <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span className="text-slate-700 dark:text-slate-300 font-mono font-bold">{stats.offlineCount} Offline</span>
        </div>
      </div>

    </div>
  );
};
