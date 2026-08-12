import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Scan, Layers, Cpu, Info, ArrowLeft, CheckCircle2, Sparkles, Download, ExternalLink, Maximize2 } from 'lucide-react';
import { ARDUINO_COMPONENTS, ArduinoComponent } from '../data/componentData';
import { Footer } from './Footer';

interface ComponentsPageProps {
  onNavigate: (page: 'home' | 'components' | 'tutorials', sectionId?: string) => void;
}

export const ComponentsPage: React.FC<ComponentsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalComponent, setActiveModalComponent] = useState<ArduinoComponent | null>(null);

  const categories = [
    'All',
    'Microcontrollers & Boards',
    'Sensors & Modules',
    'Inputs & Controls',
    'Motors & Drivers',
    'Power & Passives',
    'Displays & Systems'
  ];

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
            Arduino Vuforia Target Library
          </h1>
          <p className="font-inter text-[#8A9BB5] text-base sm:text-lg mt-3 leading-relaxed">
            Click on any component below to view its official high-definition Vuforia image target. Point your mobile phone running the <span className="text-white font-semibold">AR-DUINO</span> app directly at the screen to instantly trigger 3D AR parts!
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col gap-5 mb-8 bg-[#1c2b3f]/60 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-md">
          
          {/* Top Row: Search Box & Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="relative w-full sm:w-80 md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
              <input
                type="text"
                placeholder="Search 29 Vuforia targets by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#162133] border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-[#8A9BB5] focus:outline-none focus:border-[#35A2F4] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9BB5] hover:text-white cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto text-xs text-[#8A9BB5]">
              <span>
                Showing <strong className="text-white">{filteredComponents.length}</strong> of 29 targets
              </span>
              {selectedCategory !== 'All' && (
                <span className="hidden sm:inline">• Category: <strong className="text-[#35A2F4]">{selectedCategory}</strong></span>
              )}
            </div>
          </div>

          {/* Bottom Row: Full-width Wrapping Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-nunito font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#35A2F4] text-white shadow-lg shadow-[#35A2F4]/30 scale-[1.02]'
                    : 'bg-white/5 text-[#8A9BB5] hover:text-white hover:bg-white/10'
                }`}
              >
                {cat === 'All' ? 'All Hardware (29)' : cat}
              </button>
            ))}
          </div>

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
                className="group rounded-2xl bg-[#1c2b3f]/70 border border-white/10 p-4 hover:border-[#35A2F4]/50 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-xl flex flex-col justify-between hover:scale-[1.02]"
              >
                <div>
                  {/* Real Target Image Box */}
                  <div className={`relative h-48 rounded-xl bg-[#0F172A] border border-white/10 flex items-center justify-center p-3 overflow-hidden mb-4 shadow-inner group-hover:border-[#35A2F4]/40 transition-colors`}>
                    
                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#35A2F4]/10 via-transparent to-[#9B5FF5]/10 opacity-50 group-hover:opacity-100 transition-opacity" />

                    {/* Category Tag */}
                    <span className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#35A2F4] border border-[#35A2F4]/30 font-semibold">
                      {comp.category}
                    </span>

                    {/* Actual Vuforia Target Image */}
                    <img
                      src={comp.image}
                      alt={`${comp.name} Vuforia AR Target`}
                      className="w-full h-full object-contain z-0 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Overlay Scan reticles */}
                    <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/50 bg-black/50 px-1.5 py-0.5 rounded z-10">
                      TARGET READY
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-nunito font-bold text-base text-white group-hover:text-[#35A2F4] transition-colors mb-1.5 line-clamp-1">
                    {comp.name}
                  </h3>
                  <p className="font-inter text-xs text-[#8A9BB5] leading-relaxed line-clamp-2">
                    {comp.description}
                  </p>
                </div>

                {/* Bottom Action Label */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#35A2F4] font-semibold">
                  <span className="group-hover:translate-x-0.5 transition-transform">Click to Scan Target</span>
                  <div className="w-6 h-6 rounded-lg bg-[#35A2F4]/10 flex items-center justify-center group-hover:bg-[#35A2F4] group-hover:text-white transition-colors">
                    <Scan className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-[#1c2b3f]/30 rounded-3xl border border-white/10 p-8">
            <Info className="w-12 h-12 text-[#8A9BB5] mx-auto mb-4" />
            <h3 className="font-nunito font-bold text-xl text-white">No targets found</h3>
            <p className="font-inter text-sm text-[#8A9BB5] mt-2">
              Try adjusting your search query or selecting a different hardware category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-6 px-4 py-2 rounded-xl bg-[#35A2F4] text-white font-nunito font-bold text-sm cursor-pointer hover:bg-[#35A2F4]/80 transition-colors"
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
              className="relative w-full max-w-2xl bg-[#162133] border border-white/20 rounded-3xl p-5 sm:p-8 shadow-2xl z-10 overflow-hidden my-auto"
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
                <div className="w-10 h-10 rounded-xl bg-[#35A2F4] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#35A2F4]/30">
                  <Scan className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-nunito font-extrabold text-white text-sm sm:text-base">
                    Point Your AR-DUINO Camera Here!
                  </h4>
                  <p className="font-inter text-xs text-[#8A9BB5]">
                    Displayed on screen at high resolution for precision Vuforia camera tracking and 3D augmentation.
                  </p>
                </div>
              </div>

              {/* Focused Target Image Display Box */}
              <div className="relative rounded-2xl bg-white p-4 sm:p-6 flex flex-col items-center justify-center text-slate-900 border-4 border-[#35A2F4]/50 shadow-2xl mb-6 overflow-hidden">
                
                {/* Target Corners visual reticle */}
                <div className="absolute top-3 left-3 w-7 h-7 border-t-4 border-l-4 border-[#35A2F4] z-10 pointer-events-none" />
                <div className="absolute top-3 right-3 w-7 h-7 border-t-4 border-r-4 border-[#35A2F4] z-10 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-7 h-7 border-b-4 border-l-4 border-[#35A2F4] z-10 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-7 h-7 border-b-4 border-r-4 border-[#35A2F4] z-10 pointer-events-none" />

                {/* Main High-Res Vuforia Target Image */}
                <div className="w-full h-64 sm:h-80 rounded-xl flex items-center justify-center overflow-hidden bg-slate-950 p-2 border border-slate-200">
                  <img
                    src={activeModalComponent.image}
                    alt={`${activeModalComponent.name} Target`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between w-full text-xs font-mono text-slate-600 px-1">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Optimal Lighting Ready
                  </span>

                  <span className="font-bold text-[#35A2F4]">
                    VUFORIA TARGET: {activeModalComponent.id.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Download / Open Full Resolution Target Action Toolbar */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                <a
                  href={activeModalComponent.image}
                  download={`${activeModalComponent.id}-vuforia-target.jpg`}
                  className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-[#35A2F4] hover:bg-[#35A2F4]/90 text-white font-nunito font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#35A2F4]/20 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download High-Res Target</span>
                </a>

                <a
                  href={activeModalComponent.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-nunito font-bold text-sm flex items-center justify-center gap-2 border border-white/10 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-[#8A9BB5]" />
                  <span>Open Full Image in New Tab</span>
                </a>
              </div>

              {/* Component Information Header */}
              <div className="bg-[#1c2b3f] rounded-2xl p-5 border border-white/10 flex items-center justify-between">
                <h3 className="font-nunito font-extrabold text-xl text-white">
                  {activeModalComponent.name}
                </h3>
                <span className="text-xs font-semibold text-[#35A2F4] bg-[#35A2F4]/10 px-3 py-1 rounded-full border border-[#35A2F4]/30">
                  {activeModalComponent.category}
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer onNavigate={onNavigate} />
    </motion.div>
  );
};
