import React, { useState, useEffect, useMemo } from 'react';
import { 
  fetchHackathons, 
  fetchLocations, 
  getTinyFishHealth 
} from './services/api';
import { 
  Hackathon, 
  FilterState, 
  CityOption, 
  TinyFishStatus, 
  FeeFilter, 
  ModeFilter, 
  InstitutionFilter 
} from './types';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { StatsBar } from './components/StatsBar';
import { FilterModal } from './components/FilterModal';
import { TRACK_OPTIONS } from './components/TrackFilterChips';
import { TeammateFinderModal } from './components/TeammateFinderModal';
import { SkillMatcherModal } from './components/SkillMatcherModal';
import { WinningPlaybookModal } from './components/WinningPlaybookModal';
import { HackathonCard } from './components/HackathonCard';
import { HackathonDetailModal } from './components/HackathonDetailModal';
import { TinyFishDrawer } from './components/TinyFishDrawer';
import { TinyFishInspectorModal } from './components/TinyFishInspectorModal';
import { getTechDomain } from './utils/domain';
import { 
  Sparkles, 
  AlertCircle, 
  RotateCcw, 
  Filter, 
  Users, 
  Target,
  BookOpen
} from 'lucide-react';

export function App() {
  // Theme state: defaults to pure clean white theme, persists in localStorage
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('bharathack_theme');
      return stored === 'dark';
    } catch {
      return false;
    }
  });

  // Sync theme with HTML document class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bharathack_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bharathack_theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Main State
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [cities, setCities] = useState<CityOption[]>([]);
  const [tinyFishHealth, setTinyFishHealth] = useState<TinyFishStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    fee: 'all', // 'all' | 'free' | 'paid'
    mode: 'all',  // 'online' | 'offline' | 'hybrid' | 'all'
    city: 'All Locations',
    institution: 'all',
    search: '',
    sortBy: 'deadline',
  });

  // Track Filter state
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [domainFilter, setDomainFilter] = useState<'all' | 'software' | 'both'>('all');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.fee !== 'all') count++;
    if (filters.mode !== 'all') count++;
    if (filters.city !== 'All Locations' && filters.city !== 'all') count++;
    if (filters.institution !== 'all') count++;
    if (selectedTrack !== 'all') count++;
    if (domainFilter !== 'all') count++;
    return count;
  }, [filters, selectedTrack, domainFilter]);

  // Active filter tags for quick removal
  const activeTags = useMemo(() => {
    const tags: { id: string; label: string; onRemove: () => void }[] = [];
    if (filters.fee !== 'all') {
      tags.push({
        id: 'fee',
        label: filters.fee === 'free' ? '🟢 Free Entry' : '💎 Paid Entry',
        onRemove: () => setFilters((prev) => ({ ...prev, fee: 'all' })),
      });
    }
    if (filters.mode !== 'all') {
      tags.push({
        id: 'mode',
        label: filters.mode === 'online' ? '🌐 Online' : filters.mode === 'offline' ? '📍 Offline' : '⚡ Hybrid',
        onRemove: () => setFilters((prev) => ({ ...prev, mode: 'all' })),
      });
    }
    if (filters.city !== 'All Locations' && filters.city !== 'all') {
      tags.push({
        id: 'city',
        label: `📍 ${filters.city}`,
        onRemove: () => setFilters((prev) => ({ ...prev, city: 'All Locations' })),
      });
    }
    if (filters.institution !== 'all') {
      tags.push({
        id: 'inst',
        label: filters.institution === 'Top Colleges' ? '🏛️ IIT / NIT / IIIT' : `🎓 ${filters.institution}`,
        onRemove: () => setFilters((prev) => ({ ...prev, institution: 'all' })),
      });
    }
    if (selectedTrack !== 'all') {
      const option = TRACK_OPTIONS.find((t) => t.id === selectedTrack);
      tags.push({
        id: 'track',
        label: `⚡ ${option?.label || selectedTrack}`,
        onRemove: () => setSelectedTrack('all'),
      });
    }
    if (domainFilter !== 'all') {
      tags.push({
        id: 'domain',
        label: domainFilter === 'both' ? '⚡ Hardware + Software' : '💻 Software & AI',
        onRemove: () => setDomainFilter('all'),
      });
    }
    return tags;
  }, [filters, selectedTrack, domainFilter]);

  const handleResetFilters = () => {
    setFilters({
      fee: 'all',
      mode: 'all',
      city: 'All Locations',
      institution: 'all',
      search: '',
      sortBy: 'deadline',
    });
    setSelectedTrack('all');
    setDomainFilter('all');
  };

  // User Skills for matching
  const [userSkills, setUserSkills] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('bharathack_user_skills');
      return stored ? JSON.parse(stored) : ['Python', 'React / Next.js'];
    } catch {
      return ['Python', 'React / Next.js'];
    }
  });

  // View toggles
  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon | null>(null);
  const [isTinyFishDrawerOpen, setIsTinyFishDrawerOpen] = useState(false);
  const [isInspectorModalOpen, setIsInspectorModalOpen] = useState(false);
  const [isBookmarksOnly, setIsBookmarksOnly] = useState(false);
  const [isTeammateModalOpen, setIsTeammateModalOpen] = useState(false);
  const [teammateTargetHackathonId, setTeammateTargetHackathonId] = useState<string | undefined>(undefined);
  const [isSkillMatcherOpen, setIsSkillMatcherOpen] = useState(false);
  const [isPlaybookOpen, setIsPlaybookOpen] = useState(false);

  // Bookmarked / Saved Hackathons (Persisted in localStorage)
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('bharathack_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Dynamic statistics
  const [stats, setStats] = useState({
    total: 0,
    freeCount: 0,
    paidCount: 0,
    onlineCount: 0,
    offlineCount: 0,
    hybridCount: 0,
    iitCount: 0,
    nitCount: 0,
    iiitCount: 0,
  });

  // Load Hackathons and TinyFish status on mount or when filters change
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchHackathons(filters);
      setHackathons(data.hackathons);
      setStats(data.stats);
    } catch (err: any) {
      console.error('Failed to fetch hackathons:', err);
      setError('Unable to load hackathons. Please verify backend server is active.');
    } finally {
      setIsLoading(false);
    }
  };

  // Initial loads
  useEffect(() => {
    loadData();
  }, [filters]);

  useEffect(() => {
    // Load locations
    fetchLocations().then(setCities).catch(console.error);
    
    // Check TinyFish Health
    getTinyFishHealth()
      .then((data) => {
        setTinyFishHealth(data.tinyFish);
      })
      .catch((err) => {
        console.error('TinyFish health check failed:', err);
        setTinyFishHealth({ success: false, latencyMs: 0, error: 'Connection failed' });
      });
  }, []);

  // Save bookmark handler
  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('bharathack_saved', JSON.stringify(updated));
      return updated;
    });
  };

  // User skills updater
  const handleUpdateSkills = (skills: string[]) => {
    setUserSkills(skills);
    localStorage.setItem('bharathack_user_skills', JSON.stringify(skills));
  };

  // Handle new hackathons added via TinyFish
  const handleHackathonsDiscovered = (newHacks: Hackathon[]) => {
    setHackathons((prev) => {
      const existingIds = new Set(prev.map((h) => h.id));
      const filteredNew = newHacks.filter((h) => !existingIds.has(h.id));
      return [...filteredNew, ...prev];
    });
    setStats((prev) => ({
      ...prev,
      total: prev.total + newHacks.length,
    }));
  };

  const handleOpenTeammateFinder = (targetId?: string) => {
    setTeammateTargetHackathonId(targetId);
    setIsTeammateModalOpen(true);
  };

  // Dynamic tech domain counts
  const domainCounts = useMemo(() => {
    let both = 0;
    let software = 0;
    hackathons.forEach((h) => {
      const d = getTechDomain(h).type;
      if (d === 'both' || d === 'hardware') both++;
      if (d === 'software') software++;
    });
    return { both, software, all: hackathons.length };
  }, [hackathons]);

  // Filtered hackathons to display (handling bookmark view + track chips + domain filter)
  const displayedHackathons = useMemo(() => {
    let result = hackathons;

    if (isBookmarksOnly) {
      result = result.filter((h) => savedIds.includes(h.id));
    }

    if (selectedTrack !== 'all') {
      const activeOption = TRACK_OPTIONS.find((t) => t.id === selectedTrack);
      const keyword = activeOption?.keyword?.toLowerCase();
      if (keyword) {
        result = result.filter((h) =>
          h.tracks.some((t) => t.toLowerCase().includes(keyword)) ||
          h.title.toLowerCase().includes(keyword) ||
          h.description.toLowerCase().includes(keyword)
        );
      }
    }

    if (domainFilter !== 'all') {
      result = result.filter((h) => {
        const d = getTechDomain(h).type;
        if (domainFilter === 'both') {
          return d === 'both' || d === 'hardware';
        }
        return d === 'software';
      });
    }

    return result;
  }, [hackathons, isBookmarksOnly, savedIds, selectedTrack, domainFilter]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Header with live status and triggers */}
      <Header
        tinyFishStatus={tinyFishHealth}
        onOpenTinyFishDrawer={() => setIsTinyFishDrawerOpen(true)}
        onOpenFetchModal={() => setIsInspectorModalOpen(true)}
        savedCount={savedIds.length}
        onToggleBookmarksView={() => setIsBookmarksOnly(!isBookmarksOnly)}
        isBookmarksOnly={isBookmarksOnly}
        onOpenSkillMatcher={() => setIsSkillMatcherOpen(true)}
        onOpenPlaybook={() => setIsPlaybookOpen(true)}
        hackathons={displayedHackathons}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Stats Bar (Interactive 1-Tap Filter Cards) */}
        <StatsBar
          stats={stats}
          filters={filters}
          onFilterChange={(newFilters) => setFilters(newFilters)}
          onResetFilters={handleResetFilters}
        />

        {/* Unified Search, Tech Domain Chips, Single Filter Trigger Button & Sort Bar */}
        <SearchBar
          search={filters.search}
          onSearchChange={(searchVal) => setFilters((prev) => ({ ...prev, search: searchVal }))}
          sortBy={filters.sortBy}
          onSortByChange={(sortVal) => setFilters((prev) => ({ ...prev, sortBy: sortVal }))}
          totalCount={displayedHackathons.length}
          activeFilterCount={activeFilterCount}
          onOpenFilterModal={() => setIsFilterModalOpen(true)}
          activeTags={activeTags}
          onResetAllFilters={handleResetFilters}
          domainFilter={domainFilter}
          onDomainFilterChange={setDomainFilter}
          domainCounts={domainCounts}
        />

        {/* Bookmarks view notice */}
        {isBookmarksOnly && (
          <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-amber-700 dark:text-amber-300 text-xs sm:text-sm">
            <span>Showing your saved bookmarks ({savedIds.length} hackathons)</span>
            <button
              onClick={() => setIsBookmarksOnly(false)}
              className="px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 font-semibold"
            >
              Show All
            </button>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="relative flex h-12 w-12 mb-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-12 w-12 bg-cyan-500 items-center justify-center text-white">
                <Sparkles className="w-6 h-6 animate-spin" />
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white font-['Plus_Jakarta_Sans']">
              Scanning Hackathons across India...
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Synchronizing with TinyFish AI & campus techfest feeds
            </p>
          </div>
        )}

        {/* Error State */}
        {!isLoading && error && (
          <div className="my-8 p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center max-w-lg mx-auto">
            <AlertCircle className="w-8 h-8 text-rose-500 dark:text-rose-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-rose-700 dark:text-rose-300">Connection Error</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">{error}</p>
            <button
              onClick={loadData}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Search</span>
            </button>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && displayedHackathons.length === 0 && (
          <div className="py-16 text-center max-w-md mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white font-['Plus_Jakarta_Sans']">
              No hackathons match this combination
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
              Try switching between Free/Paid in the top-left, adjusting your mode (Online/Offline), or run TinyFish AI live search.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setFilters({
                    fee: 'free',
                    mode: 'all',
                    city: 'All Locations',
                    institution: 'all',
                    search: '',
                    sortBy: 'deadline',
                  });
                  setSelectedTrack('all');
                }}
                className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-semibold border border-slate-300 dark:border-slate-700 transition"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setIsTinyFishDrawerOpen(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold shadow-md transition"
              >
                Ask TinyFish AI
              </button>
            </div>
          </div>
        )}

        {/* Hackathon Cards Grid */}
        {!isLoading && !error && displayedHackathons.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedHackathons.map((hackathon) => (
              <HackathonCard
                key={hackathon.id}
                hackathon={hackathon}
                isSaved={savedIds.includes(hackathon.id)}
                onToggleSave={handleToggleSave}
                onOpenDetails={(h) => setSelectedHackathon(h)}
                onFindTeammates={handleOpenTeammateFinder}
              />
            ))}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-gray-50 py-8 text-xs text-gray-500 text-center font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-bold">BharatHack</span>
            <span>•</span>
            <span>All-India Hackathon Hunting Engine</span>
          </div>
          <div>
            Official Verified Feeds from <span className="font-semibold text-gray-800">Unstop</span> & <span className="font-semibold text-gray-800">Devfolio</span>
          </div>
          <div>
            IIT • NIT • IIIT • Tech Universities • Pan-India
          </div>
        </div>
      </footer>

      {/* Modal: Full Hackathon Details & Guidelines with Registration Link */}
      <HackathonDetailModal
        hackathon={selectedHackathon}
        onClose={() => setSelectedHackathon(null)}
        onToggleSave={handleToggleSave}
        isSaved={selectedHackathon ? savedIds.includes(selectedHackathon.id) : false}
        onFindTeammates={handleOpenTeammateFinder}
      />

      {/* Modal: Teammate / Squad Finder */}
      <TeammateFinderModal
        isOpen={isTeammateModalOpen}
        onClose={() => setIsTeammateModalOpen(false)}
        hackathons={hackathons}
        selectedHackathonId={teammateTargetHackathonId}
      />

      {/* Modal: AI Skill Matcher */}
      <SkillMatcherModal
        isOpen={isSkillMatcherOpen}
        onClose={() => setIsSkillMatcherOpen(false)}
        hackathons={hackathons}
        onSelectHackathon={(h) => setSelectedHackathon(h)}
        userSkills={userSkills}
        onUpdateUserSkills={handleUpdateSkills}
      />

      {/* Modal: Winning Playbook */}
      <WinningPlaybookModal
        isOpen={isPlaybookOpen}
        onClose={() => setIsPlaybookOpen(false)}
      />

      {/* Drawer: Live TinyFish AI Discoverer */}
      <TinyFishDrawer
        isOpen={isTinyFishDrawerOpen}
        onClose={() => setIsTinyFishDrawerOpen(false)}
        onHackathonsDiscovered={handleHackathonsDiscovered}
        activeFee={filters.fee}
        activeMode={filters.mode}
      />

      {/* Modal: TinyFish Cloud Headless URL Inspector */}
      <TinyFishInspectorModal
        isOpen={isInspectorModalOpen}
        onClose={() => setIsInspectorModalOpen(false)}
        onHackathonAdded={(newHack) => {
          handleHackathonsDiscovered([newHack]);
          setSelectedHackathon(newHack);
        }}
      />

      {/* Modal: Unified All-in-One Filter Options */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
        selectedTrack={selectedTrack}
        onSelectTrack={setSelectedTrack}
        cities={cities}
        totalMatches={displayedHackathons.length}
        onResetFilters={handleResetFilters}
      />

    </div>
  );
}
export default App;
