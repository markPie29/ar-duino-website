import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Clock,
  Cpu,
  Code2,
  CheckCircle2,
  Copy,
  Check,
  X,
  Search,
  Video,
  Sparkles,
  ChevronRight,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import { TUTORIAL_PROJECTS, TutorialProject } from '../data/tutorialData';
import { Footer } from './Footer';

interface TutorialsPageProps {
  onNavigate: (page: 'home' | 'components' | 'tutorials', sectionId?: string) => void;
}

export const TutorialsPage: React.FC<TutorialsPageProps> = ({ onNavigate }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<TutorialProject | null>(null);
  const [modalTab, setModalTab] = useState<'video' | 'hardware' | 'steps' | 'code'>('video');
  const [copiedCode, setCopiedCode] = useState(false);

  // Filter projects based on search query and difficulty selection
  const filteredProjects = TUTORIAL_PROJECTS.filter((project) => {
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.hardware.some((hw) => hw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDifficulty && matchesSearch;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getDifficultyBadgeClasses = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-[#35A2F4]/15 text-[#35A2F4] border-[#35A2F4]/40 shadow-[0_0_12px_rgba(53,162,244,0.25)]';
      case 'Medium':
        return 'bg-[#9B5FF5]/15 text-[#9B5FF5] border-[#9B5FF5]/40 shadow-[0_0_12px_rgba(155,95,245,0.25)]';
      case 'Hard':
        return 'bg-[#FC904F]/15 text-[#FC904F] border-[#FC904F]/40 shadow-[0_0_12px_rgba(252,144,79,0.25)]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#162133] text-[#F0F4F8] flex flex-col justify-between pt-24"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-sm text-[#8A9BB5] mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#35A2F4] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </button>
          <ChevronRight className="w-4 h-4 text-white/20" />
          <span className="text-white font-medium">Video Tutorials</span>
        </div>

        {/* Hero Section Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2942] via-[#162133] to-[#0e1724] border border-white/10 p-6 sm:p-10 mb-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-gradient-to-br from-[#35A2F4]/20 via-[#9B5FF5]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-gradient-to-tr from-[#FC904F]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#35A2F4]/10 border border-[#35A2F4]/30 text-[#35A2F4] text-xs font-semibold uppercase tracking-widest mb-4">
              <Video className="w-3.5 h-3.5" /> Project Video Guides
            </div>

            <h1 className="font-nunito font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              Learn Electronics with <span className="text-[#35A2F4]">Video Tutorials</span>
            </h1>

            <p className="text-[#8A9BB5] text-base sm:text-lg leading-relaxed mb-6">
              Step-by-step video guides, circuit schematics, hardware components, and ready-to-upload Arduino C++ code for our 4 core interactive projects.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-white/10">
              <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                <span className="text-[#35A2F4] text-xs font-semibold block uppercase tracking-wider">Total Projects</span>
                <span className="font-nunito font-extrabold text-2xl text-white">4 Tutorials</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                <span className="text-[#35A2F4] text-xs font-semibold block uppercase tracking-wider">Easy (Blue)</span>
                <span className="font-nunito font-extrabold text-2xl text-[#35A2F4]">1 Project</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                <span className="text-[#9B5FF5] text-xs font-semibold block uppercase tracking-wider">Medium (Purple)</span>
                <span className="font-nunito font-extrabold text-2xl text-[#9B5FF5]">2 Projects</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                <span className="text-[#FC904F] text-xs font-semibold block uppercase tracking-wider">Hard (Orange)</span>
                <span className="font-nunito font-extrabold text-2xl text-[#FC904F]">1 Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Difficulty Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {(['All', 'Easy', 'Medium', 'Hard'] as const).map((diff) => {
              const isActive = selectedDifficulty === diff;
              let activeColorClasses = 'bg-[#35A2F4] text-white shadow-lg shadow-[#35A2F4]/30';
              if (diff === 'Easy') activeColorClasses = 'bg-[#35A2F4] text-white shadow-lg shadow-[#35A2F4]/30';
              if (diff === 'Medium') activeColorClasses = 'bg-[#9B5FF5] text-white shadow-lg shadow-[#9B5FF5]/30';
              if (diff === 'Hard') activeColorClasses = 'bg-[#FC904F] text-white shadow-lg shadow-[#FC904F]/30';

              return (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? activeColorClasses
                      : 'bg-[#1a2942]/70 text-[#8A9BB5] border border-white/10 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {diff === 'All' ? 'All Difficulties' : diff}
                  {diff === 'Easy' && <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300">Blue</span>}
                  {diff === 'Medium' && <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300">Purple</span>}
                  {diff === 'Hard' && <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] bg-orange-500/20 text-orange-300">Orange</span>}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9BB5]" />
            <input
              type="text"
              placeholder="Search tutorials or hardware..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a2942]/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-[#8A9BB5] focus:outline-none focus:border-[#35A2F4] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9BB5] hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Video Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#1a2942]/40 rounded-2xl border border-white/10">
            <Video className="w-12 h-12 text-[#8A9BB5] mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-white mb-1">No video tutorials found</h3>
            <p className="text-[#8A9BB5] text-sm mb-4">Try relaxing your search terms or filter selection.</p>
            <button
              onClick={() => {
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#35A2F4]/20 border border-[#35A2F4]/40 text-[#35A2F4] text-sm font-semibold hover:bg-[#35A2F4]/30 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="group relative bg-[#1a2942]/60 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Card Top / Video Thumbnail Area */}
                <div className="relative aspect-video w-full bg-[#0e1724] overflow-hidden group-hover:cursor-pointer" onClick={() => {
                  setActiveProjectModal(project);
                  setModalTab('video');
                }}>
                  {/* Embedded YouTube Thumbnail or Interactive Player Preview */}
                  <img
                    src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162133] via-black/30 to-transparent" />

                  {/* Difficulty Tag Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border ${getDifficultyBadgeClasses(project.difficulty)}`}>
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      {project.difficulty}
                    </span>
                  </div>

                  {/* Video Duration Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-[#35A2F4]" />
                      {project.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#35A2F4] to-[#9B5FF5] text-white flex items-center justify-center shadow-2xl shadow-[#35A2F4]/50 border border-white/30 group-hover:border-white transition-all"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </motion.div>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#35A2F4]" /> Project #{idx + 1}
                      </span>
                      <span className="text-xs text-[#8A9BB5]">
                        {project.hardware.length} Components
                      </span>
                    </div>

                    <h3 className="font-nunito font-extrabold text-xl text-white group-hover:text-[#35A2F4] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-[#8A9BB5] text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Hardware Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.hardware.slice(0, 3).map((item, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[#8A9BB5]">
                          {item}
                        </span>
                      ))}
                      {project.hardware.length > 3 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[#35A2F4] font-medium">
                          +{project.hardware.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                      <button
                        onClick={() => {
                          setActiveProjectModal(project);
                          setModalTab('video');
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#35A2F4] to-[#35A2F4]/80 text-white font-nunito font-bold text-sm shadow-lg shadow-[#35A2F4]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Watch Video</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveProjectModal(project);
                          setModalTab('code');
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-sm transition-all cursor-pointer"
                      >
                        <Code2 className="w-4 h-4 text-[#9B5FF5]" />
                        <span>View Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Interactive Project Video & Schematic Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#162133] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#1a2942]/90">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${getDifficultyBadgeClasses(activeProjectModal.difficulty)}`}>
                    {activeProjectModal.difficulty}
                  </span>
                  <div>
                    <h2 className="font-nunito font-extrabold text-xl sm:text-2xl text-white leading-none">
                      {activeProjectModal.title}
                    </h2>
                    <span className="text-xs text-[#8A9BB5] font-mono mt-0.5 block">
                      Video Guide & Project Details
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8A9BB5] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Tab Switcher */}
              <div className="flex border-b border-white/10 bg-[#0e1724]/80 px-4 sm:px-6 gap-2 overflow-x-auto">
                <button
                  onClick={() => setModalTab('video')}
                  className={`py-3 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    modalTab === 'video'
                      ? 'border-[#35A2F4] text-[#35A2F4]'
                      : 'border-transparent text-[#8A9BB5] hover:text-white'
                  }`}
                >
                  <Video className="w-4 h-4" /> Video Tutorial
                </button>
                <button
                  onClick={() => setModalTab('hardware')}
                  className={`py-3 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    modalTab === 'hardware'
                      ? 'border-[#35A2F4] text-[#35A2F4]'
                      : 'border-transparent text-[#8A9BB5] hover:text-white'
                  }`}
                >
                  <Cpu className="w-4 h-4" /> Hardware Checklist ({activeProjectModal.hardware.length})
                </button>
                <button
                  onClick={() => setModalTab('steps')}
                  className={`py-3 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    modalTab === 'steps'
                      ? 'border-[#35A2F4] text-[#35A2F4]'
                      : 'border-transparent text-[#8A9BB5] hover:text-white'
                  }`}
                >
                  <BookOpen className="w-4 h-4" /> Circuit Steps
                </button>
                <button
                  onClick={() => setModalTab('code')}
                  className={`py-3 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    modalTab === 'code'
                      ? 'border-[#9B5FF5] text-[#9B5FF5]'
                      : 'border-transparent text-[#8A9BB5] hover:text-white'
                  }`}
                >
                  <Code2 className="w-4 h-4 text-[#9B5FF5]" /> Arduino C++ Code
                </button>
              </div>

              {/* Modal Body View */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
                {modalTab === 'video' && (
                  <div className="space-y-4">
                    {/* Embedded Responsive YouTube Player */}
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${activeProjectModal.youtubeId}?autoplay=1&rel=0`}
                        title={activeProjectModal.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <h4 className="font-bold text-white text-base mb-1">About this Tutorial</h4>
                      <p className="text-[#8A9BB5] text-sm leading-relaxed">
                        {activeProjectModal.fullDescription}
                      </p>
                    </div>
                  </div>
                )}

                {modalTab === 'hardware' && (
                  <div>
                    <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-[#35A2F4]" /> Required Electronics & Components
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeProjectModal.hardware.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-white"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#49F996] flex-shrink-0" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {modalTab === 'steps' && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#35A2F4]" /> Assembly & Wiring Instructions
                    </h4>
                    {activeProjectModal.steps.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#35A2F4]/20 border border-[#35A2F4]/40 text-[#35A2F4] font-extrabold flex items-center justify-center flex-shrink-0">
                          {step.stepNumber}
                        </div>
                        <div>
                          <h5 className="font-bold text-white text-sm mb-1">{step.title}</h5>
                          <p className="text-[#8A9BB5] text-xs leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {modalTab === 'code' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#8A9BB5] flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-[#9B5FF5]" /> C++ Code (Arduino IDE)
                      </span>
                      <button
                        onClick={() => handleCopyCode(activeProjectModal.cppCode)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#9B5FF5]/20 border border-[#9B5FF5]/40 text-[#9B5FF5] hover:bg-[#9B5FF5]/30 text-xs font-bold transition-all cursor-pointer"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f18] p-4">
                      <pre className="font-mono text-xs text-blue-300 leading-relaxed overflow-x-auto whitespace-pre">
                        <code>{activeProjectModal.cppCode}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer onNavigate={onNavigate} />
    </motion.div>
  );
};
