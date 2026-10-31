import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  ExternalLink, 
  Bookmark, 
  Sparkles, 
  Clock, 
  Check, 
  Copy, 
  Building, 
  ChevronRight,
  Share2,
  CalendarPlus
} from 'lucide-react';
import { Hackathon } from '../types';
import { generateGoogleCalendarUrl, shareToWhatsApp } from '../utils/calendar';

interface HackathonCardProps {
  hackathon: Hackathon;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenDetails: (hackathon: Hackathon) => void;
  onFindTeammates: (hackathonId: string) => void;
}

export const HackathonCard: React.FC<HackathonCardProps> = ({
  hackathon,
  isSaved,
  onToggleSave,
  onOpenDetails,
  onFindTeammates,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hackathon.registrationLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    shareToWhatsApp(hackathon);
  };

  const handleCalendar = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(generateGoogleCalendarUrl(hackathon), '_blank');
  };

  // Format deadline and calculate days remaining
  const deadlineDate = new Date(hackathon.dates.registrationDeadline);
  const now = new Date();
  const diffDays = Math.ceil((deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  const isExpired = diffDays < 0;

  // Institution color
  const getInstBadgeStyle = () => {
    switch (hackathon.institutionType) {
      case 'IIT':
        return 'bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30';
      case 'NIT':
        return 'bg-blue-500/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/30';
      case 'IIIT':
        return 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30';
      case 'Tech School':
        return 'bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-500/30';
      default:
        return 'bg-slate-100 dark:bg-slate-700/40 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600/40';
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0f1523] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 overflow-hidden">
      
      {/* Top Banner / Ambient glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        
        {/* Row 1: Badges (Fee, Mode, Institution) + Actions */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Entry Fee Badge */}
            {hackathon.entryFeeType === 'free' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                FREE ENTRY (₹0)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400"></span>
                PAID ENTRY ({hackathon.entryFeeCurrency}{hackathon.entryFeeAmount})
              </span>
            )}

            {/* Mode Badge */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold border ${
              hackathon.mode === 'online'
                ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-500/30'
                : hackathon.mode === 'offline'
                ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/30'
                : 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30'
            }`}>
              {hackathon.mode === 'online' ? '🌐 Online' : hackathon.mode === 'offline' ? '📍 Offline' : '⚡ Hybrid'}
            </span>

            {/* Institution Badge */}
            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold border ${getInstBadgeStyle()}`}>
              {hackathon.institutionType}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Calendar Reminder Button */}
            <button
              onClick={handleCalendar}
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Add to Google Calendar"
            >
              <CalendarPlus className="w-4 h-4" />
            </button>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleWhatsApp}
              className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Share on WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Bookmark Button */}
            <button
              onClick={() => onToggleSave(hackathon.id)}
              className={`p-1.5 rounded-lg transition ${
                isSaved
                  ? 'text-amber-500 bg-amber-400/10'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isSaved ? 'Remove from bookmarks' : 'Bookmark this hackathon'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Row 2: Title and Organizer */}
        <div className="mb-3">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate max-w-[280px]">{hackathon.organizer}</span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[11px]">{hackathon.institutionName}</span>
          </div>

          <h3 
            onClick={() => onOpenDetails(hackathon)}
            className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition cursor-pointer line-clamp-1"
          >
            {hackathon.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {hackathon.tagline}
          </p>
        </div>

        {/* Row 3: Key Hackathon Details Box */}
        <div className="my-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
          
          {/* Prize Pool */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-mono">Prize Pool</span>
              <span className="font-extrabold text-sm text-emerald-600 dark:text-emerald-400 font-mono">
                {hackathon.prizePool}
              </span>
            </div>
          </div>

          {/* Registration Deadline / Countdown */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-mono">Deadline</span>
              <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                {isExpired ? (
                  <span className="text-rose-500 dark:text-rose-400">Closed</span>
                ) : diffDays === 0 ? (
                  <span className="text-amber-500 dark:text-amber-400">Ends Today!</span>
                ) : (
                  <span>{diffDays} days left</span>
                )}
              </span>
            </div>
          </div>

          {/* Location & Venue */}
          <div className="flex items-center gap-2 col-span-2 pt-1 border-t border-slate-200 dark:border-slate-800/60">
            <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {hackathon.location.city}, {hackathon.location.state}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 ml-1.5 truncate">
                • {hackathon.location.venue}
              </span>
            </div>
          </div>

          {/* Team Size & Teammate Finder Link */}
          <div className="flex items-center justify-between col-span-2 text-slate-500 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5 text-[11px]">
              <Users className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span>Team: <strong className="text-slate-700 dark:text-slate-300 font-medium">{hackathon.teamSize}</strong></span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span>{hackathon.dates.durationHours}h Sprint</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onFindTeammates(hackathon.id);
              }}
              className="text-[11px] text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium hover:underline flex items-center gap-1"
            >
              <span>Squad Match</span>
              <Users className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Row 4: Track Chips */}
        <div className="flex items-center gap-1.5 flex-wrap my-1">
          {hackathon.tracks.slice(0, 3).map((track, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
            >
              {track}
            </span>
          ))}
          {hackathon.tracks.length > 3 && (
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
              +{hackathon.tracks.length - 3} more
            </span>
          )}
        </div>

      </div>

      {/* =========================================================================
          REGISTRATION LINK SECTION (BELOW DETAILS AS EXPLICITLY REQUESTED)
          "also give registration link below details of that hackthon"
      ========================================================================= */}
      <div className="px-5 pb-5 pt-3 bg-slate-50/80 dark:bg-gradient-to-t dark:from-slate-900/90 dark:to-transparent border-t border-slate-200 dark:border-slate-800/60 flex flex-col gap-2.5">
        
        {/* Label indicating registration link placement */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span className="font-mono flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-medium">
            <Sparkles className="w-3 h-3" />
            <span>Official Application</span>
          </span>
          <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px]">
            {hackathon.source}
          </span>
        </div>

        {/* Buttons Row: Registration Link CTA + Quick Copy + Modal Trigger */}
        <div className="flex items-center gap-2">
          
          {/* PRIMARY DIRECT REGISTRATION LINK (Opens external registration portal) */}
          <a
            href={hackathon.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-900/20 transition-all active:scale-[0.98] group/btn"
          >
            <span>Register Now</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {/* Quick Copy Registration Link Button */}
          <button
            onClick={handleCopyLink}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition"
            title="Copy Direct Registration URL"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* View Full Details Button */}
          <button
            onClick={() => onOpenDetails(hackathon)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-700 transition"
            title="View Full Hackathon Specs & Guidelines"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};
