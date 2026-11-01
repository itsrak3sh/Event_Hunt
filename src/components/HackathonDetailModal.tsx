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
  Search 
} from 'lucide-react';
import { Hackathon } from '../types';
import { generateGoogleCalendarUrl, downloadIcsFile, shareToWhatsApp } from '../utils/calendar';

interface HackathonDetailModalProps {
  hackathon: Hackathon | null;
  onClose: () => void;
  onToggleSave: (id: string) => void;
  isSaved: boolean;
  onFindTeammates: (hackathonId: string) => void;
}

export const HackathonDetailModal: React.FC<HackathonDetailModalProps> = ({
  hackathon,
  onClose,
  onToggleSave,
  isSaved,
  onFindTeammates,
}) => {
  const [copied, setCopied] = useState(false);

  if (!hackathon) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {/* Fee Badge */}
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                hackathon.entryFeeType === 'free'
                  ? 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30'
                  : 'bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-500/30'
              }`}>
                {hackathon.entryFeeType === 'free' ? '🟢 FREE ENTRY (₹0)' : `💎 PAID ENTRY (${hackathon.entryFeeCurrency}${hackathon.entryFeeAmount})`}
              </span>

              {/* Mode Badge */}
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                {hackathon.mode === 'online' ? '🌐 100% Online' : hackathon.mode === 'offline' ? '📍 In-Person Offline' : '⚡ Hybrid'}
              </span>

              {/* Institution */}
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/30">
                {hackathon.institutionType}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] leading-tight">
              {hackathon.title}
            </h2>

            <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Building className="w-3.5 h-3.5 text-slate-400" />
              <span>{hackathon.organizer}</span>
              <span>•</span>
              <span className="text-cyan-600 dark:text-cyan-400">{hackathon.institutionName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(hackathon.id)}
              className={`p-2 rounded-xl border transition ${
                isSaved
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-600 dark:text-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={isSaved ? 'Saved to Bookmarks' : 'Bookmark Hackathon'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Trophy className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Prize Pool</span>
              </div>
              <div className="font-extrabold text-base text-emerald-600 dark:text-emerald-400 font-mono">
                {hackathon.prizePool}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <DollarSign className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Entry Fee</span>
              </div>
              <div className="font-bold text-sm text-slate-800 dark:text-slate-200">
                {hackathon.entryFeeType === 'free' ? '₹0 (Free for all)' : `₹${hackathon.entryFeeAmount}`}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Team Size</span>
              </div>
              <div className="font-bold text-sm text-slate-800 dark:text-slate-200">
                {hackathon.teamSize}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Duration</span>
              </div>
              <div className="font-bold text-sm text-slate-800 dark:text-slate-200">
                {hackathon.dates.durationHours} Hours Sprint
              </div>
            </div>

          </div>

          {/* Share & Calendar Quick Action Strip */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex-wrap gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium">Quick Actions:</span>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => window.open(generateGoogleCalendarUrl(hackathon), '_blank')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700 transition"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Add to Google Cal</span>
              </button>

              <button
                onClick={() => downloadIcsFile(hackathon)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700 transition"
              >
                <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Export .ics</span>
              </button>

              <button
                onClick={() => shareToWhatsApp(hackathon)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-medium border border-emerald-300 dark:border-emerald-800/40 transition"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onFindTeammates(hackathon.id);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-medium border border-purple-300 dark:border-purple-800/40 transition"
              >
                <Users className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Find Teammates</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 font-mono mb-2">
              Overview & Problem Description
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80">
              {hackathon.description}
            </p>
          </div>

          {/* Location & Venue Details (Especially important for Offline) */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-400 font-mono mb-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Venue & Location Details</span>
            </h4>
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                {hackathon.location.city}, {hackathon.location.state}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {hackathon.location.venue}
                {hackathon.location.pincode ? ` - Pincode: ${hackathon.location.pincode}` : ''}
              </p>
              {hackathon.mode === 'online' && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                  ✨ No physical travel needed. Can be attended remotely from anywhere in India.
                </p>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Registration Deadline:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">{formattedDeadline}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Hackathon Dates:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">{formattedStart} – {formattedEnd}</span>
            </div>
          </div>

          {/* Tracks / Domains */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 font-mono mb-2">
              Themes & Challenge Tracks
            </h4>
            <div className="flex flex-wrap gap-2">
              {hackathon.tracks.map((track, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  ⚡ {track}
                </span>
              ))}
            </div>
          </div>

          {/* Perks & Benefits */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 font-mono mb-2">
              Participant Perks, Lodging & Rewards
            </h4>
            <ul className="space-y-2">
              {hackathon.perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Eligibility Criteria:</span>
            <span className="text-slate-500 dark:text-slate-400">{hackathon.eligibility}</span>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM REGISTRATION LINK BAR (CLEARLY POSITIONED BELOW DETAILS)
        ========================================================================= */}
        <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0a0e18] flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="w-full sm:w-auto">
            <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Official Registration Link Verified</span>
            </div>
            <div className="text-xs text-cyan-600 dark:text-cyan-300 truncate max-w-sm mt-0.5 underline">
              {hackathon.registrationLink}
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* Backup Unstop Search Link */}
            <a
              href={hackathon.backupLink || `https://unstop.com/hackathons?searchTerm=${encodeURIComponent(hackathon.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition"
              title="Search on Unstop (Backup if official portal is temporarily down)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Backup Search</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Link' : 'Copy Link'}</span>
            </button>

            <a
              href={hackathon.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-600/30 transition active:scale-95"
            >
              <span>Apply & Register Official</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
