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
  CheckCircle,
  Copy, 
  Building, 
  ChevronRight,
  Share2,
  CalendarPlus,
  ShieldCheck,
  Search
} from 'lucide-react';
import { Hackathon } from '../types';
import { getTechDomain } from '../utils/domain';
import { generateGoogleCalendarUrl, shareToWhatsApp } from '../utils/calendar';

interface HackathonCardProps {
  hackathon: Hackathon;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  isRegistered: boolean;
  onToggleRegistered: (id: string) => void;
  onAttemptRegister?: (hackathon: Hackathon) => void;
  onOpenDetails: (hackathon: Hackathon) => void;
  onFindTeammates: (hackathonId: string) => void;
}

export const HackathonCard: React.FC<HackathonCardProps> = ({
  hackathon,
  isSaved,
  onToggleSave,
  isRegistered,
  onToggleRegistered,
  onAttemptRegister,
  onOpenDetails,
  onFindTeammates,
}) => {
  const [copied, setCopied] = useState(false);
  const domain = getTechDomain(hackathon);

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
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'NIT':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'IIIT':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Tech School':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div 
      onClick={() => onOpenDetails(hackathon)}
      className={`group relative flex flex-col justify-between rounded-2xl transition-all duration-200 overflow-hidden cursor-pointer ${
        isRegistered
          ? 'bg-emerald-50/15 border-2 border-emerald-400 shadow-sm'
          : 'bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md'
      }`}
    >
      
      {/* Top Banner accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-opacity ${
        isRegistered ? 'bg-emerald-500 opacity-100' : 'bg-blue-600 opacity-0 group-hover:opacity-100'
      }`} />

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        
        {/* Row 1: Badges (Fee, Mode, Institution) + Actions */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Registered / Applied Badge */}
            {isRegistered && (
              <span 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleRegistered(hackathon.id);
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs hover:bg-emerald-200 transition cursor-pointer"
                title="Applied! Click if you wish to undo"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>APPLIED</span>
              </span>
            )}

            {/* Entry Fee Badge */}
            {hackathon.entryFeeType === 'free' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                FREE ENTRY (₹0)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                PAID ENTRY ({hackathon.entryFeeCurrency}{hackathon.entryFeeAmount})
              </span>
            )}

            {/* Mode Badge */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold border ${
              hackathon.mode === 'online'
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : hackathon.mode === 'offline'
                ? 'bg-gray-100 text-gray-800 border-gray-200'
                : 'bg-purple-50 text-purple-700 border-purple-200'
            }`}>
              {hackathon.mode === 'online' ? '🌐 Online' : hackathon.mode === 'offline' ? '📍 Offline' : '⚡ Hybrid'}
            </span>

            {/* Institution Badge */}
            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold border ${getInstBadgeStyle()}`}>
              {hackathon.institutionType}
            </span>

            {/* Tech Domain Badge (Hardware vs Software vs Both) */}
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold border ${domain.badgeClass}`}
              title={domain.description}
            >
              <span>{domain.badgeLabel}</span>
            </span>
          </div>

          <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
            {/* 1-Tap Manual Tick Button (Mark as Registered / Untick) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleRegistered(hackathon.id);
              }}
              className={`p-1.5 rounded-lg transition cursor-pointer flex items-center justify-center ${
                isRegistered
                  ? 'bg-emerald-100 text-emerald-700 border border-emerald-300 hover:bg-red-50 hover:text-red-600 hover:border-red-300'
                  : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-200'
              }`}
              title={isRegistered ? 'Registered! Click to un-tick / remove' : 'Manual Tick: Mark as Registered'}
              aria-label={isRegistered ? 'Remove registration tick' : 'Manually tick as registered'}
            >
              {isRegistered ? (
                <CheckCircle className="w-4 h-4 fill-emerald-100 text-emerald-700" />
              ) : (
                <Check className="w-4 h-4" />
              )}
            </button>

            {/* Calendar Reminder Button */}
            <button
              onClick={handleCalendar}
              className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-gray-100 transition cursor-pointer"
              title="Add to Google Calendar"
            >
              <CalendarPlus className="w-4 h-4" />
            </button>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleWhatsApp}
              className="p-1.5 rounded-lg text-gray-400 hover:text-emerald-600 hover:bg-gray-100 transition cursor-pointer"
              title="Share on WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Bookmark Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(hackathon.id);
              }}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                isSaved
                  ? 'text-amber-500 bg-amber-50'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
              }`}
              title={isSaved ? 'Remove from bookmarks' : 'Bookmark this hackathon'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Row 2: Title and Organizer */}
        <div className="mb-3">
          <div className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-gray-400" />
            <span className="truncate max-w-[280px]">{hackathon.organizer}</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-mono text-[11px] font-semibold">{hackathon.institutionName}</span>
          </div>

          <h3 
            onClick={() => onOpenDetails(hackathon)}
            className="text-lg sm:text-xl font-bold text-gray-950 hover:text-blue-600 transition cursor-pointer line-clamp-1"
          >
            {hackathon.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2 leading-relaxed">
            {hackathon.tagline}
          </p>
        </div>

        {/* Row 3: Key Hackathon Details Box (Light Gray Background) */}
        <div className="my-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 grid grid-cols-2 gap-3 text-xs">
          
          {/* Prize Pool */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block uppercase font-mono font-medium">Prize Pool</span>
              <span className="font-extrabold text-sm text-emerald-700 font-mono">
                {hackathon.prizePool}
              </span>
            </div>
          </div>

          {/* Registration Deadline / Countdown with Red Highlights */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 block uppercase font-mono font-medium">Deadline</span>
              <span className="font-bold text-xs">
                {isExpired ? (
                  <span className="text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">Closed</span>
                ) : diffDays === 0 ? (
                  <span className="text-red-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
                    Ends Today!
                  </span>
                ) : diffDays <= 3 ? (
                  <span className="text-red-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    {diffDays} days left
                  </span>
                ) : (
                  <span className="text-gray-900">{diffDays} days left</span>
                )}
              </span>
            </div>
          </div>

          {/* Location & Venue */}
          <div className="flex items-center gap-2 col-span-2 pt-1 border-t border-gray-200">
            <div className="p-1.5 rounded-md bg-blue-50 text-blue-600 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="font-medium text-gray-900">
                {hackathon.location.city}, {hackathon.location.state}
              </span>
              <span className="text-[11px] text-gray-500 ml-1.5 truncate">
                • {hackathon.location.venue}
              </span>
            </div>
          </div>

          {/* Team Size & Teammate Finder Link */}
          <div className="flex items-center justify-between col-span-2 text-gray-500 pt-1">
            <div className="flex items-center gap-1.5 text-[11px]">
              <Users className="w-3.5 h-3.5 text-gray-400" />
              <span>Team: <strong className="text-gray-800 font-medium">{hackathon.teamSize}</strong></span>
              <span className="text-gray-300">•</span>
              <span>{hackathon.dates.durationHours}h Sprint</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onFindTeammates(hackathon.id);
              }}
              className="text-[11px] text-blue-600 hover:text-blue-800 font-medium hover:underline flex items-center gap-1"
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
              className="text-[11px] px-2 py-0.5 rounded bg-white text-gray-700 border border-gray-200 shadow-2xs"
            >
              {track}
            </span>
          ))}
          {hackathon.tracks.length > 3 && (
            <span className="text-[10px] text-gray-400 font-mono">
              +{hackathon.tracks.length - 3} more
            </span>
          )}
        </div>

      </div>

      {/* =========================================================================
          REGISTRATION LINK SECTION (BELOW DETAILS AS EXPLICITLY REQUESTED)
      ========================================================================= */}
      <div className="px-5 pb-5 pt-3.5 bg-gray-50 border-t border-gray-100 flex flex-col gap-2.5">
        
        {/* Label indicating registration link placement with Verification Shield */}
        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <span className="font-mono flex items-center gap-1.5 text-emerald-700 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Official Link</span>
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide border ${
            hackathon.source === 'Unstop' ? 'bg-blue-50 text-blue-700 border-blue-200' :
            hackathon.source === 'Devfolio' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
            hackathon.source === 'Devpost' ? 'bg-teal-50 text-teal-700 border-teal-200' :
            hackathon.source === 'HackerEarth' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
            hackathon.source === 'MLH' ? 'bg-rose-50 text-rose-700 border-rose-200' :
            hackathon.source === 'DoraHacks' ? 'bg-orange-50 text-orange-700 border-orange-200' :
            hackathon.source === 'Internshala' ? 'bg-sky-50 text-sky-700 border-sky-200' :
            'bg-gray-100 text-gray-700 border-gray-200'
          }`}>
            {hackathon.source}
          </span>
        </div>

        {/* Buttons Row: Registration Link CTA + Backup Search + Quick Copy + Modal Trigger */}
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          
          {/* PRIMARY DIRECT REGISTRATION LINK (Same Tab Navigation with History State) */}
          <a
            href={hackathon.registrationLink}
            onClick={(e) => {
              e.stopPropagation();
              if (onAttemptRegister) {
                onAttemptRegister(hackathon);
              }
              const url = new URL(window.location.href);
              url.searchParams.set('hackathon', hackathon.id);
              window.history.replaceState({ modal: 'hackathon', hackathonId: hackathon.id }, '', url.toString());
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-xs transition-all active:scale-[0.98] group/btn cursor-pointer ${
              isRegistered
                ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/15'
                : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/15'
            }`}
          >
            {isRegistered ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-100" />
                <span>Registered · Open</span>
              </>
            ) : (
              <span>Register Now</span>
            )}
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {/* BACKUP SEARCH LINK */}
          <a
            href={hackathon.backupLink || (
              hackathon.source === 'Devfolio' ? 'https://devfolio.co/discover' :
              hackathon.source === 'Devpost' ? 'https://devpost.com/hackathons' :
              hackathon.source === 'HackerEarth' ? 'https://www.hackerearth.com/challenges/' :
              hackathon.source === 'MLH' ? 'https://mlh.io/seasons/2027/events' :
              hackathon.source === 'DoraHacks' ? 'https://dorahacks.io/hackathon' :
              hackathon.source === 'Internshala' ? 'https://internshala.com/competitions/' :
              `https://unstop.com/hackathons?searchTerm=${encodeURIComponent(hackathon.title)}`
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 transition flex items-center gap-1 text-xs font-semibold shadow-2xs"
            title="Backup Search Link (If direct link is slow or down)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Backup</span>
          </a>

          {/* Quick Copy Registration Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="p-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 transition shadow-2xs cursor-pointer"
            title="Copy Direct Registration URL"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {/* View Full Details Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(hackathon);
            }}
            className="px-2.5 sm:px-3 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition shadow-2xs cursor-pointer flex items-center gap-1 text-xs font-bold shrink-0"
            title="View Full Hackathon Specs & Guidelines"
          >
            <span className="hidden xs:inline">Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};
