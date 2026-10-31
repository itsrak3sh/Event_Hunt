import React, { useState } from 'react';
import { 
  Sparkles, 
  Radio, 
  Bookmark, 
  Target, 
  BookOpen, 
  Download, 
  FileSpreadsheet, 
  FileCode,
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { TinyFishStatus, Hackathon } from '../types';
import { exportHackathonsToCSV, exportHackathonsToJSON } from '../utils/export';

interface HeaderProps {
  tinyFishStatus: TinyFishStatus | null;
  onOpenTinyFishDrawer: () => void;
  onOpenFetchModal: () => void;
  savedCount: number;
  onToggleBookmarksView: () => void;
  isBookmarksOnly: boolean;
  onOpenSkillMatcher: () => void;
  onOpenPlaybook: () => void;
  hackathons: Hackathon[];
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  tinyFishStatus,
  onOpenTinyFishDrawer,
  onOpenFetchModal,
  savedCount,
  onToggleBookmarksView,
  isBookmarksOnly,
  onOpenSkillMatcher,
  onOpenPlaybook,
  hackathons,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [showExportMenu, setShowExportMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#0a0e1a]/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 shadow-lg shadow-cyan-500/20 text-white font-black text-xl tracking-tight">
              <span className="relative z-10">BH</span>
              <div className="absolute -inset-0.5 rounded-xl bg-cyan-400 blur-sm opacity-40 animate-pulse"></div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Bharat<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400">Hack</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-slate-100 dark:bg-gradient-to-r dark:from-orange-500/20 dark:via-white/10 dark:to-green-500/20 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                  🇮🇳 All-India Radar
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                IITs • NITs • IIITs • Tech Universities • Private Hubs
              </p>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* AI Skill Matcher Button */}
            <button
              onClick={onOpenSkillMatcher}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition"
              title="Match hackathons with your engineering skills"
            >
              <Target className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Skill Matcher</span>
            </button>

            {/* Winning Playbook */}
            <button
              onClick={onOpenPlaybook}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition"
              title="Indian Hackathon & SIH Winning Playbook"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Playbook</span>
            </button>

            {/* Export Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition"
                title="Export Hackathons for College Clubs / Societies"
              >
                <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Export</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showExportMenu && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl py-1 z-50 text-xs animate-in fade-in"
                  onClick={() => setShowExportMenu(false)}
                >
                  <button
                    onClick={() => exportHackathonsToCSV(hackathons)}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-2"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Download Excel / CSV</span>
                  </button>
                  <button
                    onClick={() => exportHackathonsToJSON(hackathons)}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-2"
                  >
                    <FileCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Download JSON</span>
                  </button>
                </div>
              )}
            </div>

            {/* TinyFish Active Badge */}
            <div 
              onClick={onOpenTinyFishDrawer}
              className="cursor-pointer group flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-sm"
              title="Powered by TinyFish AI Web Search & Headless Engine"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${tinyFishStatus?.success !== false ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${tinyFishStatus?.success !== false ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-amber-500'}`}></span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs">
                <span className="font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  🐟 TinyFish AI
                </span>
                {tinyFishStatus?.latencyMs ? (
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400/90 hidden sm:inline">
                    {tinyFishStatus.latencyMs}ms
                  </span>
                ) : null}
              </div>
            </div>

            {/* Inspect URL Button */}
            <button
              onClick={onOpenFetchModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition"
              title="Scrape and inspect any hackathon URL via TinyFish Fetch API"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>Inspect URL</span>
            </button>

            {/* Live Hunter Trigger */}
            <button
              onClick={onOpenTinyFishDrawer}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all active:scale-95"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-200" />
              <span className="hidden sm:inline">TinyFish AI</span> Hunter
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={onToggleBookmarksView}
              className={`relative p-2 rounded-lg border transition ${
                isBookmarksOnly
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-500 dark:text-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="View Saved Hackathons"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-900 font-bold text-[10px] flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
