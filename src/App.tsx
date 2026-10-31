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
import { UpperLeftControlBar } from './components/UpperLeftControlBar';
import { SearchBar } from './components/SearchBar';
import { StatsBar } from './components/StatsBar';
import { TrackFilterChips, TRACK_OPTIONS } from './components/TrackFilterChips';
import { IndiaRadarMapView } from './components/IndiaRadarMapView';
import { TeammateFinderModal } from './components/TeammateFinderModal';
import { SkillMatcherModal } from './components/SkillMatcherModal';
import { WinningPlaybookModal } from './components/WinningPlaybookModal';
import { HackathonCard } from './components/HackathonCard';
import { HackathonDetailModal } from './components/HackathonDetailModal';
import { TinyFishDrawer } from './components/TinyFishDrawer';
import { TinyFishInspectorModal } from './components/TinyFishInspectorModal';
import { 
  Sparkles, 
  AlertCircle, 
  RotateCcw, 
  Filter, 
  Map, 
  Users, 
  Target,
  BookOpen
} from 'lucide-react';

export function App() {
  // Theme state: default dark, persists in localStorage
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('bharathack_theme');
      return stored ? stored === 'dark' : true;
    } catch {
      return true;
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

  // Filters State: Defaults to Free Entry (as prominently requested in upper-left corner)
  const [filters, setFilters] = useState<FilterState>({
    fee: 'free', // 'free' | 'paid' | 'all'
    mode: 'all',  // 'online' | 'offline' | 'hybrid' | 'all'
    city: 'All Locations',
    institution: 'all',
    search: '',
    sortBy: 'deadline',
  });

  // Track Filter state
  const [selectedTrack, setSelectedTrack] = useState<string>('all');

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
  const [showRadarMap, setShowRadarMap] = useState<boolean>(true);
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

  // Filtered hackathons to display (handling bookmark view + track chips)
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

    return result;
  }, [hackathons, isBookmarksOnly, savedIds, selectedTrack]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-200">
      
      {/* 1. Header with TinyFish status and live triggers */}
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

      {/* 2. UPPER LEFT CORNER CONTROLS:
             - Fee: Free vs Paid
             - Dependent Mode: Online vs Offline vs Hybrid
             - Conditional Location Selector: When Offline is selected
      */}
      <UpperLeftControlBar
        fee={filters.fee}
        onFeeChange={(newFee: FeeFilter) => setFilters((prev) => ({ ...prev, fee: newFee }))}
        mode={filters.mode}
        onModeChange={(newMode: ModeFilter) => setFilters((prev) => ({ ...prev, mode: newMode }))}
        city={filters.city}
        onCityChange={(newCity: string) => setFilters((prev) => ({ ...prev, city: newCity }))}
        institution={filters.institution}
        onInstitutionChange={(newInst: InstitutionFilter) => setFilters((prev) => ({ ...prev, institution: newInst }))}
        cities={cities}
        freeCount={stats.freeCount}
        paidCount={stats.paidCount}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Stats Summary Bar */}
        <StatsBar stats={stats} />

        {/* View Switcher / Sub-Nav Strip */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          
          {/* Track Filter Chips */}
          <div className="flex-1 min-w-[280px]">
            <TrackFilterChips
              selectedTrack={selectedTrack}
              onSelectTrack={setSelectedTrack}
            />
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <button
              onClick={() => setIsSkillMatcherOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800/40 hover:bg-cyan-200 dark:hover:bg-cyan-900/60 transition"
            >
              <Target className="w-3.5 h-3.5" />
              <span>Skill Match</span>
            </button>

            <button
              onClick={() => setIsPlaybookOpen(true)}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800/40 hover:bg-amber-200 dark:hover:bg-amber-900/60 transition"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Playbook</span>
            </button>

            <button
              onClick={() => setShowRadarMap(!showRadarMap)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                showRadarMap
                  ? 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-500/40'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>{showRadarMap ? 'Hide Radar' : 'Show Radar'}</span>
            </button>

            <button
              onClick={() => handleOpenTeammateFinder()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800/40 hover:bg-purple-200 dark:hover:bg-purple-900/60 transition"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Squad Match</span>
            </button>
          </div>

        </div>

        {/* Interactive India Regional Radar Map */}
        {showRadarMap && (
          <IndiaRadarMapView
            hackathons={hackathons}
            onSelectCity={(cityName) => setFilters((prev) => ({ ...prev, city: cityName }))}
            activeCity={filters.city}
          />
        )}

        {/* Search & Sort Bar */}
        <SearchBar
          search={filters.search}
          onSearchChange={(searchVal) => setFilters((prev) => ({ ...prev, search: searchVal }))}
          sortBy={filters.sortBy}
          onSortByChange={(sortVal) => setFilters((prev) => ({ ...prev, sortBy: sortVal }))}
          totalCount={displayedHackathons.length}
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
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#0a0e18] py-8 text-xs text-slate-500 text-center font-mono transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-800 dark:text-white font-bold">BharatHack</span>
            <span>•</span>
            <span>All-India Hackathon Hunting Engine</span>
          </div>
          <div>
            Powered by <a href="https://tinyfish.ai" target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">TinyFish.ai</a> Agent Web Infrastructure
          </div>
          <div>
            IIT • NIT • IIIT • BITS • VIT • Tech Universities
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

    </div>
  );
}
export default App;
