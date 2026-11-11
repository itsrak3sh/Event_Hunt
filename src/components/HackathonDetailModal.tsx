import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  MapPin, 
  Trophy, 
  Clock, 
  Users, 
  Building, 
  CheckCircle, 
  Copy, 
  Check, 
  ShieldCheck, 
  Share2, 
  CalendarPlus, 
  Bookmark, 
  DollarSign, 
  Download,
  Search,
  ArrowLeft
} from 'lucide-react';
import { Hackathon } from '../types';
import { getTechDomain } from '../utils/domain';
import { generateGoogleCalendarUrl, downloadIcsFile, shareToWhatsApp } from '../utils/calendar';

interface HackathonDetailModalProps {
  hackathon: Hackathon | null;
  onClose: () => void;
  onToggleSave: (id: string) => void;
  isSaved: boolean;
  isRegistered: boolean;
  onToggleRegistered: (id: string) => void;
  onAttemptRegister?: (hackathon: Hackathon) => void;
  onFindTeammates: (hackathonId: string) => void;
}

export const HackathonDetailModal: React.FC<HackathonDetailModalProps> = ({
  hackathon,
  onClose,
  onToggleSave,
  isSaved,
  isRegistered,
  onToggleRegistered,
  onAttemptRegister,
  onFindTeammates,
}) => {
  const [copied, setCopied] = useState(false);

  if (!hackathon) return null;

  const domain = getTechDomain(hackathon);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(hackathon.registrationLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedDeadline = new Date(hackathon.dates.registrationDeadline).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedStart = new Date(hackathon.dates.startDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const formattedEnd = new Date(hackathon.dates.endDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col w-full h-full min-h-screen overflow-hidden text-gray-900 animate-in fade-in duration-150">
      
      {/* 1. TOP APP BAR: ONLY Back Arrow on Left, Actions on Right */}
      <div className="sticky top-0 z-30 flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 border-b border-gray-200 bg-white shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="p-2 -ml-1 rounded-xl text-gray-900 hover:text-blue-600 hover:bg-gray-100 active:scale-95 transition cursor-pointer"
          aria-label="Back"
          title="Back"
        >
          <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Registered / Applied Status Indicator */}
          {isRegistered ? (
            <button
              type="button"
              onClick={() => onToggleRegistered(hackathon.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-700 text-xs font-bold shadow-2xs hover:bg-emerald-100 transition cursor-pointer"
              title="Applied! Click to undo"
            >
              <CheckCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
              <span>Applied ✅</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onToggleRegistered(hackathon.id)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 text-xs font-semibold transition cursor-pointer"
              title="Click if you have already registered for this hackathon"
            >
              <CheckCircle className="w-4 h-4 text-gray-400" />
              <span>Mark as Registered</span>
            </button>
          )}

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={() => onToggleSave(hackathon.id)}
            className={`p-2 rounded-xl border transition cursor-pointer ${
              isSaved
                ? 'bg-amber-50 border-amber-300 text-amber-600'
                : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-600'
            }`}
            title={isSaved ? 'Saved to Bookmarks' : 'Bookmark Hackathon'}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-amber-500' : ''}`} />
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={() => shareToWhatsApp(hackathon)}
            className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition cursor-pointer"
            title="Share to WhatsApp"
          >
            <Share2 className="w-5 h-5" />
          </button>

          {/* Close X */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. MAIN SCROLLABLE CONTENT (Full Screen View) */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-5 sm:py-8 space-y-6">
          
          {/* Registered Status Banner */}
          {isRegistered && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between text-xs sm:text-sm text-emerald-900 shadow-2xs">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Aapne isme register kar liya hai!</strong> (Marked as Registered / Applied)
                </span>
              </div>
              <button
                type="button"
                onClick={() => onToggleRegistered(hackathon.id)}
                className="text-xs text-emerald-700 hover:text-emerald-900 underline font-semibold cursor-pointer shrink-0 ml-2"
              >
                Undo
              </button>
            </div>
          )}

          {/* Badges + Title + Organizer */}
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {/* Fee Badge */}
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                hackathon.entryFeeType === 'free'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}>
                {hackathon.entryFeeType === 'free' ? '🟢 FREE ENTRY (₹0)' : `💎 PAID ENTRY (${hackathon.entryFeeCurrency}${hackathon.entryFeeAmount})`}
              </span>

              {/* Mode Badge */}
              <span className="px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {hackathon.mode === 'online' ? '🌐 100% Online' : hackathon.mode === 'offline' ? '📍 In-Person Offline' : '⚡ Hybrid'}
              </span>

              {/* Institution */}
              <span className="px-2.5 py-1 rounded text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                {hackathon.institutionType}
              </span>

              {/* Tech Domain Badge */}
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold border ${domain.badgeClass}`}
                title={domain.description}
              >
                {domain.badgeLabel}
              </span>

              {/* Source Platform Badge */}
              <span className={`px-2.5 py-1 rounded text-xs font-semibold border ${
                hackathon.source === 'Unstop' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                hackathon.source === 'Devfolio' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                hackathon.source === 'Devpost' ? 'bg-teal-50 text-teal-700 border-teal-200' :
                hackathon.source === 'HackerEarth' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                hackathon.source === 'MLH' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                'bg-gray-100 text-gray-700 border-gray-200'
              }`}>
                {hackathon.source}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 font-['Plus_Jakarta_Sans'] leading-tight">
              {hackathon.title}
            </h1>

            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-gray-600 flex-wrap">
              <Building className="w-4 h-4 text-gray-400 shrink-0" />
              <span className="font-semibold text-gray-800">{hackathon.organizer}</span>
              <span>•</span>
              <span className="text-blue-600 font-semibold">{hackathon.institutionName}</span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
            <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                <Trophy className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">Prize Pool</span>
              </div>
              <div className="font-black text-base sm:text-lg text-emerald-600 font-mono">
                {hackathon.prizePool}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                <DollarSign className="w-4 h-4 text-amber-600" />
                <span className="font-semibold">Entry Fee</span>
              </div>
              <div className="font-black text-base sm:text-lg text-gray-900 font-mono">
                {hackathon.entryFeeType === 'free' ? '₹0 (Free)' : `₹${hackathon.entryFeeAmount}`}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="font-semibold">Team Size</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-gray-900">
                {hackathon.teamSize}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="font-semibold">Duration</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-gray-900">
                {hackathon.dates.durationHours}h Sprint
              </div>
            </div>
          </div>

          {/* Quick Actions Strip */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 border border-gray-200 flex-wrap gap-2 text-xs">
            <span className="text-gray-500 font-semibold font-mono text-[11px] uppercase tracking-wider">Quick Actions:</span>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => window.open(generateGoogleCalendarUrl(hackathon), '_blank')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 font-semibold border border-gray-200 transition cursor-pointer"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-cyan-600" />
                <span>Add to Google Cal</span>
              </button>

              <button
                type="button"
                onClick={() => downloadIcsFile(hackathon)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 font-semibold border border-gray-200 transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-indigo-600" />
                <span>Export .ics</span>
              </button>

              <button
                type="button"
                onClick={() => shareToWhatsApp(hackathon)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200 transition cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onFindTeammates(hackathon.id);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-semibold border border-purple-200 transition cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-purple-600" />
                <span>Find Teammates</span>
              </button>
            </div>
          </div>

          {/* Overview & Description */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-gray-500 font-mono mb-2">
              Overview & Problem Description
            </h3>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200 text-sm">
              {hackathon.description}
            </p>
          </div>

          {/* Location & Venue */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <h3 className="text-xs uppercase tracking-wider font-bold text-blue-700 font-mono mb-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Venue & Location Details</span>
            </h3>
            <div className="space-y-1">
              <p className="font-bold text-gray-900 text-sm sm:text-base">
                {hackathon.location.city}, {hackathon.location.state}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {hackathon.location.venue}
                {hackathon.location.pincode ? ` - Pincode: ${hackathon.location.pincode}` : ''}
              </p>
              {hackathon.mode === 'online' && (
                <p className="text-xs text-emerald-700 mt-2 font-semibold">
                  ✨ 100% Online: No physical travel needed. Attend remotely from anywhere in India.
                </p>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="text-xs text-gray-500 block font-mono">Registration Deadline:</span>
              <span className="font-bold text-red-600 mt-1 block text-sm sm:text-base">{formattedDeadline}</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="text-xs text-gray-500 block font-mono">Hackathon Dates:</span>
              <span className="font-bold text-gray-900 mt-1 block text-sm sm:text-base">{formattedStart} – {formattedEnd}</span>
            </div>
          </div>

          {/* Tracks / Domains */}
          {hackathon.tracks && hackathon.tracks.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-gray-500 font-mono mb-2">
                Themes & Challenge Tracks
              </h3>
              <div className="flex flex-wrap gap-2">
                {hackathon.tracks.map((track, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200"
                  >
                    ⚡ {track}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Perks & Benefits */}
          {hackathon.perks && hackathon.perks.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-gray-500 font-mono mb-2">
                Participant Perks, Lodging & Rewards
              </h3>
              <ul className="space-y-2">
                {hackathon.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Eligibility */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm">
            <span className="font-bold text-gray-800 block mb-1">Eligibility Criteria:</span>
            <span className="text-gray-600">{hackathon.eligibility}</span>
          </div>

        </div>
      </div>

      {/* 3. STICKY BOTTOM REGISTRATION BAR (Clean, no warning line, mobile friendly) */}
      <div className="sticky bottom-0 z-20 border-t border-gray-200 bg-white p-3 sm:p-4 px-4 sm:px-8 shadow-lg shrink-0">
        <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          <div className="w-full sm:w-auto truncate">
            <div className="text-[11px] text-gray-500 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Official Verified Registration Link</span>
            </div>
            <div className="text-xs text-blue-600 truncate max-w-md mt-0.5 font-mono">
              {hackathon.registrationLink}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Backup Search */}
            <a
              href={hackathon.backupLink || (
                hackathon.source === 'Devfolio' ? 'https://devfolio.co/discover' :
                hackathon.source === 'Devpost' ? 'https://devpost.com/hackathons' :
                hackathon.source === 'HackerEarth' ? 'https://www.hackerearth.com/challenges/' :
                hackathon.source === 'MLH' ? 'https://mlh.io/seasons/2027/events' :
                `https://unstop.com/hackathons?searchTerm=${encodeURIComponent(hackathon.title)}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200 transition cursor-pointer"
              title={`Backup Search on ${hackathon.source}`}
            >
              <Search className="w-4 h-4 text-blue-600" />
            </a>

            {/* Copy Link Button */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="p-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200 transition cursor-pointer"
              title="Copy Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
            </button>

            {/* Primary Action: Direct Registration (Native history preserved so browser Back always works!) */}
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
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold shadow-xs transition active:scale-95 cursor-pointer ${
                isRegistered
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/15'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/15'
              }`}
            >
              {isRegistered ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-100" />
                  <span>Registered · Open Official Link</span>
                </>
              ) : (
                <>
                  <span>Apply & Register Official</span>
                  <ExternalLink className="w-4 h-4" />
                </>
              )}
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};
