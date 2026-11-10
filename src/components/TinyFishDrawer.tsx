import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Sparkles, 
  Loader2, 
  CheckCircle2,
  AlertCircle
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
  const [discoveredCount, setDiscoveredCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');

  if (!isOpen) return null;

  const quickPrompts = [
    { label: '🎓 IIT & NIT Hackathons', query: 'IIT and NIT hackathons 2026' },
    { label: '💻 Free Online Hackathons', query: 'Free online hackathons India' },
    { label: '📍 Bengaluru & Pune Tech', query: 'Bengaluru Pune engineering hackathons' },
    { label: '🏆 High Cash Prize Challenges', query: 'High prize hackathons India' },
    { label: '🚀 AI & GenAI Hackathons', query: 'Artificial intelligence GenAI hackathons' },
  ];

  const handleRunDiscovery = async (searchPrompt?: string) => {
    const q = searchPrompt || query || 'hackathons in india iit nit devfolio unstop';
    setIsLoading(true);
    setError(null);
    setDiscoveredCount(null);
    setStatusMessage('Searching across Indian university techfests & platforms...');

    try {
      const res = await triggerTinyFishDiscovery({
        query: q,
        mode: activeMode,
        fee: activeFee,
      });

      if (res.success && res.hackathons) {
        onHackathonsDiscovered(res.hackathons);
        setDiscoveredCount(res.hackathons.length);
        setStatusMessage(
          res.hackathons.length > 0
            ? `Found ${res.hackathons.length} active hackathons! They have been added to your list.`
            : 'No new events found for this specific query. Try another search.'
        );
      } else {
        throw new Error(res.error || 'Could not complete search');
      }
    } catch (err: any) {
      setError(err.message || 'Search request failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Sliding Drawer */}
      <div 
        className="w-full max-w-lg h-full bg-white border-l border-gray-200 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-gray-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-950 font-['Plus_Jakarta_Sans']">
                AI Search Assistant
              </h3>
              <p className="text-xs text-gray-500">
                Type what you are looking for to find live hackathons
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          
          {/* Simple Search Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-800 uppercase tracking-wider font-mono">
              What kind of hackathon do you want?
            </label>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRunDiscovery()}
                placeholder="e.g. Free offline hackathon in Bangalore or AI challenge..."
                className="w-full bg-white border border-gray-300 focus:border-blue-600 rounded-xl px-4 py-3 pl-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-xs"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Quick Click Prompts */}
          <div className="space-y-2.5">
            <span className="text-xs text-gray-500 font-medium">Popular quick searches:</span>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setQuery(item.query);
                    handleRunDiscovery(item.query);
                  }}
                  className="text-xs px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200 transition font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <button
            type="button"
            onClick={() => handleRunDiscovery()}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition active:scale-[0.99] disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Searching live hackathons...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Find Hackathons with AI</span>
              </>
            )}
          </button>

          {/* Clean User Status Box (Replaced the ugly dark terminal) */}
          {isLoading && (
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-xs text-blue-800 animate-in fade-in">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600 flex-shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {discoveredCount !== null && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div>
                <span className="font-bold block">Search Completed!</span>
                <span>{statusMessage}</span>
              </div>
            </div>
          )}

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-center text-xs text-gray-500">
          Searches official platforms like Unstop, Devfolio & campus websites
        </div>

      </div>

    </div>
  );
};
