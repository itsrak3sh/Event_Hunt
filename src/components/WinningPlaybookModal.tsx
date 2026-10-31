import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Trophy, 
  Award, 
  Lightbulb, 
  FileCheck, 
  Layers
} from 'lucide-react';

interface WinningPlaybookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WinningPlaybookModal: React.FC<WinningPlaybookModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'sih' | 'iit' | 'pitch' | 'sprint'>('sih');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-3xl max-h-[92vh] bg-white dark:bg-[#0c101d] border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                <span>Indian Hackathon Winning Playbook</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700/60 font-mono">
                  IIT • NIT • SIH Guide
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Battle-tested strategies for getting shortlisted, nailing judging rounds, and winning prizes
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

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 overflow-x-auto scrollbar-none">
          {[
            { id: 'sih', label: 'Smart India Hackathon (SIH)' },
            { id: 'iit', label: 'IIT / NIT Campus Sprints' },
            { id: 'pitch', label: '3-Minute Demo Winning Pitch' },
            { id: 'sprint', label: '36-Hour Sprint Schedule' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-amber-500 text-amber-700 dark:text-amber-300 font-bold'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          
          {activeTab === 'sih' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Rule 1: Internal College SPOC & Nomination</span>
                </h4>
                <p>
                  Before registering on sih.gov.in, your college Single Point of Contact (SPOC) must officially nominate your team from your college internal hackathon. Ensure your team has <strong>exactly 6 members</strong> with at least <strong>1 female teammate</strong> (mandatory requirement).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>The 5-Slide SIH Presentation Formula</span>
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Slide 1:</strong> Problem Statement ID, Title, Ministry/Org Name, Team Details.</li>
                  <li><strong>Slide 2:</strong> Proposed Solution Idea with clear visual architecture diagrams.</li>
                  <li><strong>Slide 3:</strong> Technical Stack, AI/Hardware Components, and Feasibility.</li>
                  <li><strong>Slide 4:</strong> Innovation & Uniqueness (How is this better than current existing solutions?).</li>
                  <li><strong>Slide 5:</strong> Scalability, Deployment Cost & Impact on Citizens.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>What Ministry Judges Look For</span>
                </h4>
                <p>
                  Judges prioritize <strong>working prototypes over theoretical slides</strong>. In Round 1 mentoring, listen carefully to ministry evaluator suggestions and pivot within 6 hours.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'iit' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Cracking IIT Bombay Techfest & IIT Delhi Tryst</span>
                </h4>
                <p>
                  IIT techfest hackathons are heavily sponsored by unicorns and frontier AI labs (Google Cloud, Nvidia, Microsoft). Review sponsor tracks early: target <strong>specific sponsor bounties</strong> in addition to the grand prize pool!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>On-Campus Logistics & Checklist</span>
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bring your own multi-plug extension board (power sockets can be crowded in lecture halls).</li>
                  <li>Have offline-first fallbacks or mobile hotspots ready in case campus Wi-Fi throttles git pushes.</li>
                  <li>Download heavyweight Docker containers, PyTorch model weights, and node_modules before arriving at the venue.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'pitch' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  The Winning 180-Second Demo Breakdown
                </h4>
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-amber-600 dark:text-amber-400 w-16">0-30s:</span>
                    <span><strong>The Hook & Real-world Pain:</strong> Start with a relatable real problem in India. Do not show tech yet.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400 w-16">30-120s:</span>
                    <span><strong>Live Demo (No Videos):</strong> Show the live working app. Perform 1 complete user journey without PowerPoint slides.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 w-16">120-150s:</span>
                    <span><strong>System Architecture & Secret Sauce:</strong> What makes your engineering resilient? (Edge models, latency, caching).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-purple-600 dark:text-purple-400 w-16">150-180s:</span>
                    <span><strong>Impact & Roadmap:</strong> Business model or citizen deployment feasibility. Hand over for Q&A.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sprint' && (
            <div className="space-y-3 animate-in fade-in">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Ideal 36-Hour Hackathon Roadmap</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold block mb-1">Hours 0 - 6</span>
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Scope & Repo Scaffold</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Lock architecture, git branch rules, API contracts, and deploy a "Hello World" to Vercel/Render immediately.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Hours 6 - 24</span>
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">The Core Engine</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Build the primary feature. Take turns sleeping (2 hours shifts). Incorporate mentor feedback from round 1.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold block mb-1">Hours 24 - 36</span>
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">UI Polish & Pitch Prep</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Feature freeze at hour 30. Dedicate 6 full hours exclusively to demo polish, pitch rehearsal, and slide deck.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
