import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Scan, Layers, Cpu, Info, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { ARDUINO_COMPONENTS, ArduinoComponent } from '../data/componentData';
import { Footer } from './Footer';

interface ComponentsPageProps {
  onNavigate: (page: 'home' | 'components', sectionId?: string) => void;
}

export const ComponentsPage: React.FC<ComponentsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalComponent, setActiveModalComponent] = useState<ArduinoComponent | null>(null);

  const categories = ['All', 'Core', 'Input', 'Output', 'Sensors'];

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModalComponent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalComponent]);

  // Filter logic
  const filteredComponents = ARDUINO_COMPONENTS.filter((comp) => {
    const matchesCategory =
      selectedCategory === 'All' || comp.category === selectedCategory;
    const matchesSearch =
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-12 flex flex-col justify-between"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        
        {/* Back Link */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#35A2F4] hover:text-white mb-6 group cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Landing Page</span>
        </button>

        {/* Page Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9B5FF5]/10 border border-[#9B5FF5]/30 text-[#9B5FF5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Scan className="w-3.5 h-3.5" />
            <span>Vuforia AR Target Scanner</span>
          </div>
          <h1 className="font-nunito text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Arduino Component Targets
          </h1>
          <p className="font-inter text-[#8A9BB5] text-base sm:text-lg mt-3 leading-relaxed">
            Click on any component below to expand its dedicated target image. Point your mobile phone camera running the <span className="text-white font-semibold">AR-DUINO</span> app directly at the screen to view the 3D model!
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#1c2b3f]/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-nunito font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#35A2F4] text-white shadow-lg shadow-[#35A2F4]/30'
                    : 'bg-white/5 text-[#8A9BB5] hover:text-white hover:bg-white/10'
                }`}
              >
                {cat === 'All' ? 'All Components' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
            <input
              type="text"
              placeholder="Search component name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#162133] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-[#8A9BB5] focus:outline-none focus:border-[#35A2F4] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9BB5] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#8A9BB5] mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredComponents.length}</strong> components
          </span>
          {selectedCategory !== 'All' && (
            <span>Category: <strong className="text-[#35A2F4]">{selectedCategory}</strong></span>
          )}
        </div>

        {/* Component Cards Grid */}
        {filteredComponents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredComponents.map((comp) => (
              <motion.div
                key={comp.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveModalComponent(comp)}
                className="group rounded-2xl bg-[#1c2b3f]/70 border border-white/10 p-5 hover:border-[#35A2F4]/50 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-xl flex flex-col justify-between hover:scale-[1.02]"
              >
                <div>
                  {/* Card Placeholder Image Box */}
                  <div className={`relative h-44 rounded-xl bg-gradient-to-br ${comp.gradient} border border-white/10 flex flex-col items-center justify-center p-4 overflow-hidden mb-4 shadow-inner`}>
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-white/90 border border-white/10 font-semibold">
                      {comp.category}
                    </span>

                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md mb-2 shadow-lg group-hover:scale-110 transition-transform">
                      <Cpu className="w-7 h-7 text-white" />
                    </div>

                    <span className="text-xs font-nunito font-bold text-white text-center line-clamp-1">
                      {comp.name}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-nunito font-bold text-lg text-white group-hover:text-[#35A2F4] transition-colors mb-2">
                    {comp.name}
                  </h3>
                  <p className="font-inter text-xs text-[#8A9BB5] leading-relaxed line-clamp-2">
                    {comp.description}
                  </p>
                </div>

                {/* Bottom Action Label */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#35A2F4] font-semibold">
                  <span>Click to Scan Target</span>
                  <Scan className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-[#1c2b3f]/30 rounded-3xl border border-white/10 p-8">
            <Info className="w-12 h-12 text-[#8A9BB5] mx-auto mb-4" />
            <h3 className="font-nunito font-bold text-xl text-white">No components found</h3>
            <p className="font-inter text-sm text-[#8A9BB5] mt-2">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-6 px-4 py-2 rounded-xl bg-[#35A2F4] text-white font-nunito font-bold text-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Target Viewing Modal Overlay (Isolated Image to avoid AR camera hallucinations) */}
      <AnimatePresence>
        {activeModalComponent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto custom-scrollbar">
            
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalComponent(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#162133] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden my-auto"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalComponent(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* AR Instruction Banner */}
              <div className="mb-6 bg-gradient-to-r from-[#35A2F4]/20 via-[#9B5FF5]/20 to-[#49F996]/20 border border-[#35A2F4]/40 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#35A2F4] text-white flex items-center justify-center shrink-0">
                  <Scan className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-nunito font-extrabold text-white text-sm sm:text-base">
                    Point Your AR-DUINO Camera Here!
                  </h4>
                  <p className="font-inter text-xs text-[#8A9BB5]">
                    Only this single target is displayed on screen to ensure accurate Vuforia camera tracking.
                  </p>
                </div>
              </div>

              {/* Focused Target Image Display Box */}
              <div className="relative rounded-2xl bg-white p-6 sm:p-10 flex flex-col items-center justify-center text-slate-900 border-4 border-[#35A2F4]/50 shadow-2xl mb-6">
                
                {/* Target Corners visual overlay */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-4 border-l-4 border-[#35A2F4]" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-4 border-r-4 border-[#35A2F4]" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-4 border-l-4 border-[#35A2F4]" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-4 border-r-4 border-[#35A2F4]" />

                {/* Main Image Target (Placeholder graphic until user updates with real component images) */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-200 border border-slate-300 flex flex-col items-center justify-center p-6 text-center shadow-inner relative">
                  <div className="w-20 h-20 rounded-2xl bg-[#162133] text-[#35A2F4] flex items-center justify-center mb-3 shadow-md">
                    <Cpu className="w-10 h-10" />
                  </div>
                  <span className="font-nunito font-extrabold text-base text-slate-800">
                    {activeModalComponent.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                    VUFORIA TARGET
                  </span>
                </div>

                <div className="mt-4 text-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Optimal Scan Lighting Ready
                  </span>
                </div>
              </div>

              {/* Component Information & Details */}
              <div className="bg-[#1c2b3f] rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-nunito font-extrabold text-xl text-white">
                    {activeModalComponent.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#35A2F4] bg-[#35A2F4]/10 px-3 py-1 rounded-full border border-[#35A2F4]/30">
                    {activeModalComponent.category}
                  </span>
                </div>

                <p className="font-inter text-sm text-[#8A9BB5] leading-relaxed mb-4">
                  {activeModalComponent.description}
                </p>

                <div className="pt-3 border-t border-white/10">
                  <h5 className="font-nunito font-bold text-xs uppercase tracking-wider text-white mb-1">
                    Functionality & App Usage:
                  </h5>
                  <p className="font-inter text-xs text-[#8A9BB5] leading-relaxed">
                    {activeModalComponent.functionality}
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer onNavigate={onNavigate} />
    </motion.div>
  );
};
