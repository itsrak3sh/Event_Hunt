import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Globe
} from 'lucide-react';
import { triggerTinyFishFetchUrl } from '../services/api';
import { Hackathon } from '../types';

interface TinyFishInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHackathonAdded: (hackathon: Hackathon) => void;
}

export const TinyFishInspectorModal: React.FC<TinyFishInspectorModalProps> = ({
  isOpen,
  onClose,
  onHackathonAdded,
}) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    hackathon: Hackathon;
    fetchResult: {
      url: string;
      title: string;
      description: string;
      latencyMs: number;
    };
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFetchUrl = async () => {
    if (!url || !url.startsWith('http')) {
      setError('Please provide a valid http or https URL.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await triggerTinyFishFetchUrl(url);
      if (data.success) {
        setResult(data);
        onHackathonAdded(data.hackathon);
      } else {
        throw new Error('Failed to extract data using TinyFish Fetch API');
      }
    } catch (err: any) {
      setError(err.message || 'Error extracting URL via TinyFish cloud browser');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                TinyFish Headless URL Inspector
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Render and parse any Indian hackathon page via TinyFish Fetch API
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider font-mono">
              Paste Hackathon Website URL
            </label>
            <div className="relative">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://devfolio.co/hackathons/xyz or college techfest URL..."
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 pl-10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>Try sample:</span>
            <button
              onClick={() => setUrl('https://reskilll.com')}
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              reskilll.com
            </button>
            <span>•</span>
            <button
              onClick={() => setUrl('https://devfolio.co/hackathons')}
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              devfolio.co/hackathons
            </button>
          </div>

          <button
            onClick={handleFetchUrl}
            disabled={isLoading || !url}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-md transition disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-cyan-200" />
                <span>TinyFish Headless Browser Rendering...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Inspect & Add with TinyFish</span>
              </>
            )}
          </button>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {result && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-emerald-300 dark:border-emerald-500/30 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  Successfully Fetched by TinyFish
                </span>
                <span className="font-mono text-slate-500 dark:text-slate-400">
                  {result.fetchResult.latencyMs ? `${Math.round(result.fetchResult.latencyMs)}ms` : ''}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {result.hackathon.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-2">
                  {result.hackathon.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono">
                  {result.hackathon.entryFeeType.toUpperCase()}
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 font-mono">
                  {result.hackathon.mode.toUpperCase()}
                </span>
                <span className="text-slate-500 dark:text-slate-400 font-mono ml-auto">
                  {result.hackathon.prizePool}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                ✅ Added to your radar with official registration link.
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
