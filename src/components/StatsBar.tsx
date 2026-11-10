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
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
      
      {/* 1. Total Hackathons */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 flex items-center gap-3 shadow-xs">
        <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block font-medium">Live Matches</span>
          <span className="text-lg sm:text-xl font-black text-gray-950 font-mono">{stats.total}</span>
        </div>
      </div>

      {/* 2. Free Entry */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 flex items-center gap-3 shadow-xs">
        <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
          <Gift className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block font-medium">Free Entry (₹0)</span>
          <span className="text-lg sm:text-xl font-black text-emerald-600 font-mono">{stats.freeCount}</span>
        </div>
      </div>

      {/* 3. Paid Entry */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 flex items-center gap-3 shadow-xs">
        <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600">
          <DollarSign className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block font-medium">Paid / Ticketed</span>
          <span className="text-lg sm:text-xl font-black text-amber-600 font-mono">{stats.paidCount}</span>
        </div>
      </div>

      {/* 4. IIT / NIT / IIIT */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 flex items-center gap-3 shadow-xs">
        <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
          <School className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block font-medium">IIT / NIT / IIIT</span>
          <span className="text-lg sm:text-xl font-black text-purple-600 font-mono">
            {stats.iitCount + stats.nitCount + stats.iiitCount}
          </span>
        </div>
      </div>

      {/* 5. Online vs Offline distribution */}
      <div className="col-span-2 sm:col-span-4 lg:col-span-1 p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-around sm:justify-start gap-3 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-gray-900 font-mono font-bold">{stats.onlineCount} Online</span>
        </div>
        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-1.5 text-xs">
          <MapPin className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-gray-900 font-mono font-bold">{stats.offlineCount} Offline</span>
        </div>
      </div>

    </div>
  );
};
