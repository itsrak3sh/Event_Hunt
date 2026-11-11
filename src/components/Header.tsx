import React, { useState } from 'react';
import { 
  Sparkles, 
  Radio, 
  Bookmark, 
  CheckCircle,
  Target, 
  BookOpen, 
  Download, 
  FileSpreadsheet, 
  FileCode,
  ChevronDown,
  Sun,
  Moon,
  Plus
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
  registeredCount: number;
  onToggleRegisteredView: () => void;
  isRegisteredOnly: boolean;
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
  registeredCount,
  onToggleRegisteredView,
  isRegisteredOnly,
  onOpenSkillMatcher,
  onOpenPlaybook,
  hackathons,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [showExportMenu, setShowExportMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg tracking-tight shadow-xs">
              <span>BH</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-950 font-['Plus_Jakarta_Sans']">
                  Bharat<span className="text-blue-600">Hack</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide bg-blue-50 text-blue-700 border border-blue-200">
                  🇮🇳 Verified Live
                </span>
              </div>
              <p className="text-xs text-gray-500 hidden sm:block">
                IITs • NITs • IIITs • Top Tech Hackathons • Pan-India
              </p>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* AI Skill Matcher Button */}
            <button
              onClick={onOpenSkillMatcher}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition"
              title="Match hackathons with your engineering skills"
            >
              <Target className="w-3.5 h-3.5 text-blue-600" />
              <span>Skill Matcher</span>
            </button>

            {/* Winning Playbook */}
            <button
              onClick={onOpenPlaybook}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition"
              title="Indian Hackathon & SIH Winning Playbook"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Playbook</span>
            </button>

            {/* Export Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition"
                title="Export Hackathons for College Clubs / Societies"
              >
                <Download className="w-3.5 h-3.5 text-blue-600" />
                <span>Export</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {showExportMenu && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50 text-xs animate-in fade-in"
                  onClick={() => setShowExportMenu(false)}
                >
                  <button
                    onClick={() => exportHackathonsToCSV(hackathons)}
                    className="w-full text-left px-3.5 py-2 hover:bg-gray-50 text-gray-800 flex items-center gap-2"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    <span>Download Excel / CSV</span>
                  </button>
                  <button
                    onClick={() => exportHackathonsToJSON(hackathons)}
                    className="w-full text-left px-3.5 py-2 hover:bg-gray-50 text-gray-800 flex items-center gap-2"
                  >
                    <FileCode className="w-4 h-4 text-blue-600" />
                    <span>Download JSON</span>
                  </button>
                </div>
              )}
            </div>

            {/* Add Hackathon by Link Button */}
            <button
              onClick={onOpenFetchModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition shadow-xs"
              title="Add any hackathon by pasting its website URL"
            >
              <Plus className="w-3.5 h-3.5 text-blue-600" />
              <span>+ Add by Link</span>
            </button>

            {/* AI Search Assistant Trigger */}
            <button
              onClick={onOpenTinyFishDrawer}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-all active:scale-95"
              title="Search hackathons using AI prompts"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-100" />
              <span>AI Search</span>
            </button>

            {/* Registered / Applied Hackathons */}
            <button
              onClick={onToggleRegisteredView}
              className={`relative p-2 rounded-lg border transition cursor-pointer ${
                isRegisteredOnly
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-2xs'
                  : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-600 hover:text-gray-900'
              }`}
              title={`View Registered / Applied Hackathons (${registeredCount})`}
            >
              <CheckCircle className={`w-4 h-4 ${isRegisteredOnly ? 'text-emerald-600 fill-emerald-100' : ''}`} />
              {registeredCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                  {registeredCount}
                </span>
              )}
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={onToggleBookmarksView}
              className={`relative p-2 rounded-lg border transition ${
                isBookmarksOnly
                  ? 'bg-blue-50 border-blue-300 text-blue-600'
                  : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-600 hover:text-gray-900'
              }`}
              title="View Saved Hackathons"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarksOnly ? 'fill-blue-600' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">
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
