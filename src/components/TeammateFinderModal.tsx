import React, { useState } from 'react';
import { 
  X, 
  Users, 
  Plus, 
  Sparkles
} from 'lucide-react';
import { Hackathon } from '../types';

export interface TeammatePost {
  id: string;
  hackathonId: string;
  hackathonTitle: string;
  authorName: string;
  college: string;
  roleNeeded: string;
  teamSizeCurrent: number;
  teamSizeMax: number;
  description: string;
  contactMethod: 'Discord' | 'WhatsApp' | 'Telegram' | 'Email';
  contactHandle: string;
  createdAt: string;
}

interface TeammateFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  hackathons: Hackathon[];
  selectedHackathonId?: string;
}

export const TeammateFinderModal: React.FC<TeammateFinderModalProps> = ({
  isOpen,
  onClose,
  hackathons,
  selectedHackathonId,
}) => {
  const [posts, setPosts] = useState<TeammatePost[]>(() => {
    try {
      const stored = localStorage.getItem('bharathack_teammate_posts');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Exclude legacy dummy demo posts
        return Array.isArray(parsed) 
          ? parsed.filter((p: TeammatePost) => !['post-1', 'post-2', 'post-3'].includes(p.id))
          : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  const [isCreating, setIsCreating] = useState(false);
  const [filterHackathonId, setFilterHackathonId] = useState<string>(selectedHackathonId || 'all');

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [college, setCollege] = useState('');
  const [roleNeeded, setRoleNeeded] = useState('');
  const [hackathonId, setHackathonId] = useState(hackathons[0]?.id || '');
  const [description, setDescription] = useState('');
  const [contactMethod, setContactMethod] = useState<'Discord' | 'WhatsApp' | 'Telegram' | 'Email'>('WhatsApp');
  const [contactHandle, setContactHandle] = useState('');

  if (!isOpen) return null;

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !roleNeeded || !contactHandle) return;

    const chosenHack = hackathons.find((h) => h.id === hackathonId);
    const newPost: TeammatePost = {
      id: `post-${Date.now()}`,
      hackathonId,
      hackathonTitle: chosenHack?.title || 'National Hackathon',
      authorName,
      college: college || 'Engineering College',
      roleNeeded,
      teamSizeCurrent: 2,
      teamSizeMax: 4,
      description,
      contactMethod,
      contactHandle,
      createdAt: 'Just now',
    };

    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem('bharathack_teammate_posts', JSON.stringify(updated));
    setIsCreating(false);

    // Reset
    setAuthorName('');
    setRoleNeeded('');
    setDescription('');
    setContactHandle('');
  };

  const displayedPosts = posts.filter((p) =>
    filterHackathonId === 'all' ? true : p.hackathonId === filterHackathonId
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0c101d] border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                <span>Hackathon Squad & Teammate Finder</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700/60 font-mono">
                  Community
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Connect with passionate builders across IITs, NITs, and tech universities
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action & Filter Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Filter by Hackathon */}
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex-shrink-0">Event:</span>
            <select
              value={filterHackathonId}
              onChange={(e) => setFilterHackathonId(e.target.value)}
              className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-purple-500 w-full sm:w-auto"
            >
              <option value="all">All Hackathons ({posts.length})</option>
              {hackathons.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.title}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setIsCreating(!isCreating)}
            className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>{isCreating ? 'View Squad Listings' : 'Post Looking For Teammate'}</span>
          </button>

        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Post Creation Form */}
          {isCreating ? (
            <form onSubmit={handleCreatePost} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-purple-300 dark:border-purple-500/30 space-y-4 animate-in fade-in">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Create a Teammate Request</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Target Hackathon</label>
                  <select
                    value={hackathonId}
                    onChange={(e) => setHackathonId(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white"
                  >
                    {hackathons.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Role Needed</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Frontend Dev (React), ML Engineer, Designer"
                    value={roleNeeded}
                    onChange={(e) => setRoleNeeded(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Your College / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. IIT Bombay, BITS Pilani, VIT"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Preferred Contact Platform</label>
                  <select
                    value={contactMethod}
                    onChange={(e) => setContactMethod(e.target.value as any)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Discord">Discord</option>
                    <option value="Telegram">Telegram</option>
                    <option value="Email">Email</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Handle / Number</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 9876543210 or username#1234"
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-700 dark:text-slate-300 font-medium mb-1">Project Idea / Note for Teammate</label>
                <textarea
                  rows={3}
                  placeholder="Share a quick pitch or what problem statement your squad is targeting..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-md"
                >
                  Publish Listing
                </button>
              </div>
            </form>
          ) : null}

          {/* Posts List */}
          {displayedPosts.length === 0 ? (
            <div className="text-center py-16 px-4 flex flex-col items-center justify-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-500/20">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                No teammate requests found yet
              </h4>
              <p className="text-xs text-slate-500 max-w-sm">
                Looking for teammates for this hackathon? Create the first request to connect with developers across campuses!
              </p>
              {!isCreating && (
                <button
                  onClick={() => setIsCreating(true)}
                  className="mt-2 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Post Looking For Teammate</span>
                </button>
              )}
            </div>
          ) : (
            displayedPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/40 transition-all flex flex-col gap-3 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-purple-600 dark:text-purple-400 font-mono block">
                      {post.hackathonTitle}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      Need: <span className="text-purple-700 dark:text-purple-300">{post.roleNeeded}</span>
                    </h4>
                  </div>

                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono self-start sm:self-auto">
                    {post.createdAt}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80">
                  {post.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/60 text-xs">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{post.authorName}</span>
                    <span>•</span>
                    <span>{post.college}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {post.contactMethod}:
                    </span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800/40 text-[11px]">
                      {post.contactHandle}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};
