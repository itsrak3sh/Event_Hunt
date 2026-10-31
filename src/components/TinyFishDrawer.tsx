import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Radio, 
  Sparkles, 
  Loader2, 
  Cpu
} from 'lucide-react';
import { triggerTinyFishDiscovery } from '../services/api';
import { Hackathon } from '../types';

interface TinyFishDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onHackathonsDiscovered: (newHacks: Hackathon[]) => void;
  activeFee: string;
  activeMode: string;
}

export const TinyFishDrawer: React.FC<TinyFishDrawerProps> = ({
  isOpen,
  onClose,
  onHackathonsDiscovered,
  activeFee,
  activeMode,
}) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [discoveredCount, setDiscoveredCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const quickPrompts = [
    'IIT and NIT offline hackathons 2026',
    'Free online student hackathons India Devfolio',
    'Bengaluru AI & Web3 hackathons Unstop',
    'High prize paid engineering challenges India',
    'Smart India Hackathon and campus techfests',
  ];

  const handleRunDiscovery = async (searchPrompt?: string) => {
    const q = searchPrompt || query || 'hackathons in india iit nit iiit devfolio unstop';
    setIsLoading(true);
    setError(null);
    setDiscoveredCount(null);
    setLogs([
      `[TinyFish API] Connecting to https://api.search.tinyfish.ai...`,
      `[TinyFish Auth] Authenticating with sk-tinyfish-LTb7...`,
      `[Query Engine] Executing: "${q}" in region: IN`,
    ]);

    try {
      const res = await triggerTinyFishDiscovery({
        query: q,
        mode: activeMode,
        fee: activeFee,
      });

      if (res.success) {
        setLogs((prev) => [
          ...prev,
          `[TinyFish Response] Received ${res.rawResultsCount} clean search nodes`,
          `[Parser] Extracted and verified ${res.hackathons.length} hackathon opportunities`,
          `[Sync] Integrated ${res.newHackathonsDiscovered} new listings into BharatHack database`,
        ]);
        setDiscoveredCount(res.newHackathonsDiscovered);
        if (res.hackathons.length > 0) {
          onHackathonsDiscovered(res.hackathons);
        }
      } else {
        throw new Error(res.error || 'Failed to complete TinyFish search');
      }
    } catch (err: any) {
      setError(err.message || 'Error executing TinyFish AI agent search');
      setLogs((prev) => [...prev, `[Error] ${err.message}`]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in">
      
      {/* Sliding Drawer */}
      <div 
        className="w-full max-w-xl h-full bg-white dark:bg-[#0b0f1a] border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 text-slate-800 dark:text-slate-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
                <span>TinyFish AI Live Radar</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700/60 font-mono">
                  v1.0 API
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Live web agent discovering hackathons across India
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-5">
          
          {/* Active TinyFish Credentials Banner */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-cyan-300 dark:border-cyan-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">TinyFish Endpoint Online</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  Key: sk-tinyfish-LTb7Ekp...
                </span>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold border border-emerald-300 dark:border-emerald-500/30">
              READY
            </span>
          </div>

          {/* Search Box */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider font-mono">
              Live Indian Hackathon Discovery Query
            </label>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRunDiscovery()}
                placeholder="e.g. Free offline hackathon in IIT or NIT..."
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 pl-10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Preset 1-Click Prompt Chips */}
          <div className="space-y-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Quick Discovery Targets:</span>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQuery(prompt);
                    handleRunDiscovery(prompt);
                  }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/40 transition text-left"
                >
                  ⚡ {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Execute CTA */}
          <button
            onClick={() => handleRunDiscovery()}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-900/20 transition disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-cyan-200" />
                <span>Running TinyFish Agent...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>Hunt Hackathons with TinyFish AI</span>
              </>
            )}
          </button>

          {/* Live Activity & Log Terminal */}
          <div className="rounded-xl bg-slate-950 dark:bg-black/90 border border-slate-800 p-4 font-mono text-xs space-y-1.5 min-h-[140px] text-cyan-300">
            <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1 mb-2">
              <span>TINYFISH LIVE CONSOLE</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE
              </span>
            </div>

            {logs.length === 0 ? (
              <p className="text-slate-500 italic">
                Press "Hunt Hackathons with TinyFish AI" to trigger live API querying across IIT/NIT tech fests and platforms.
              </p>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="text-cyan-300/90 leading-tight">
                  {log}
                </div>
              ))
            )}

            {error && (
              <div className="text-rose-400 font-bold mt-2">
                [Error] {error}
              </div>
            )}

            {discoveredCount !== null && (
              <div className="text-emerald-400 font-bold pt-2 border-t border-slate-800">
                ✨ Successfully discovered & loaded {discoveredCount} new hackathons!
              </div>
            )}
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
          Powered by TinyFish.ai Cloud Browser & Search Engine
        </div>

      </div>

    </div>
  );
};
