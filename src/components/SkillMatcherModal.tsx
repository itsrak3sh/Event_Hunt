import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Target, 
  ArrowRight
} from 'lucide-react';
import { Hackathon } from '../types';

interface SkillMatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  hackathons: Hackathon[];
  onSelectHackathon: (hackathon: Hackathon) => void;
  userSkills: string[];
  onUpdateUserSkills: (skills: string[]) => void;
}

const POPULAR_SKILLS = [
  'Python',
  'React / Next.js',
  'PyTorch / AI / ML',
  'FastAPI / Node.js',
  'Solidity / Web3',
  'Rust',
  'Flutter / React Native',
  'ROS / Arduino / IoT',
  'Docker / Cloud / AWS',
  'UI/UX Design / Figma',
  'Cybersecurity',
  'LangChain / LLMs',
];

export const SkillMatcherModal: React.FC<SkillMatcherModalProps> = ({
  isOpen,
  onClose,
  hackathons,
  onSelectHackathon,
  userSkills,
  onUpdateUserSkills,
}) => {
  const [customInput, setCustomInput] = useState('');

  if (!isOpen) return null;

  const toggleSkill = (skill: string) => {
    if (userSkills.includes(skill)) {
      onUpdateUserSkills(userSkills.filter((s) => s !== skill));
    } else {
      onUpdateUserSkills([...userSkills, skill]);
    }
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    if (!userSkills.includes(customInput.trim())) {
      onUpdateUserSkills([...userSkills, customInput.trim()]);
    }
    setCustomInput('');
  };

  // Calculate score for each hackathon based on skills
  const scoredHackathons = hackathons.map((h) => {
    let score = 0;
    const matchedKeywords: string[] = [];

    const searchableText = `${h.title} ${h.tagline} ${h.description} ${h.tracks.join(' ')}`.toLowerCase();

    userSkills.forEach((skill) => {
      const s = skill.toLowerCase();
      const words = s.split(/[\s/]+/);
      const isMatched = words.some((w) => w.length > 2 && searchableText.includes(w));
      if (isMatched) {
        score += 25;
        matchedKeywords.push(skill);
      }
    });

    const matchPercent = Math.min(Math.round((score / Math.max(userSkills.length * 20, 20)) * 100), 100);

    return {
      hackathon: h,
      matchPercent: matchPercent > 0 ? matchPercent : 20,
      matchedKeywords,
    };
  });

  // Sort by matchPercent descending
  scoredHackathons.sort((a, b) => b.matchPercent - a.matchPercent);
  const topRecommendations = scoredHackathons.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-3xl max-h-[92vh] bg-white dark:bg-[#0c101d] border border-slate-200 dark:border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                <span>AI Skill & Track Matcher</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700/60 font-mono">
                  Smart Recommendation
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Select your engineering skills to see which Indian hackathons & tracks fit your profile best
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

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Skill Selector Chips */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-mono">
                Select Your Tech Stack ({userSkills.length} selected)
              </label>
              {userSkills.length > 0 && (
                <button
                  onClick={() => onUpdateUserSkills([])}
                  className="text-xs text-slate-500 hover:text-rose-500"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {POPULAR_SKILLS.map((skill) => {
                const isSelected = userSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {skill}
                  </button>
                );
              })}
            </div>

            {/* Custom Skill Input */}
            <form onSubmit={handleAddCustom} className="mt-3 flex items-center gap-2">
              <input
                type="text"
                placeholder="Add custom skill (e.g. OpenCV, Solidity, Go)..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 flex-1"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white text-xs font-semibold border border-slate-300 dark:border-slate-700"
              >
                Add
              </button>
            </form>
          </div>

          {/* Results List */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-400 font-mono mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Hackathons For Your Stack</span>
            </h4>

            {userSkills.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                👉 Select 1 or more skills above to calculate your match score with all IIT, NIT & national hackathons.
              </div>
            ) : (
              <div className="space-y-3">
                {topRecommendations.map(({ hackathon, matchPercent, matchedKeywords }) => (
                  <div
                    key={hackathon.id}
                    onClick={() => {
                      onClose();
                      onSelectHackathon(hackathon);
                    }}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group shadow-sm"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                          hackathon.entryFeeType === 'free' ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300'
                        }`}>
                          {hackathon.entryFeeType.toUpperCase()}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
                          {hackathon.institutionType} • {hackathon.location.city}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition">
                        {hackathon.title}
                      </h5>

                      <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                        <span className="text-[10px] text-slate-400 font-mono">Matched:</span>
                        {matchedKeywords.map((kw, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/40"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end sm:self-center">
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Match Score</span>
                        <span className="text-base font-black text-cyan-600 dark:text-cyan-400 font-mono">
                          {matchPercent}%
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-400 transition">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
