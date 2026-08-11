import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Camera,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  BookOpen,
  QrCode,
  Box,
  Wrench
} from 'lucide-react';


interface AppScreen {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  icon: React.ElementType;
}

const SCREENS: AppScreen[] = [
  {
    id: 'ar-camera',
    title: 'Live AR Vuforia Scanner',
    category: 'Augmented Reality',
    description: 'Scans real-world target cards to render interactive 3D Arduino boards and live pin specification cards in physical space.',
    image: '/screenshots/ar-camera-view.png',
    accentColor: '#35A2F4',
    badgeBg: 'bg-[#35A2F4]/10',
    badgeText: 'text-[#35A2F4]',
    badgeBorder: 'border-[#35A2F4]/30',
    icon: Camera
  },
  {
    id: 'ar-workspace-led',
    title: '3D AR Circuit Workspace',
    category: 'Interactive 3D Simulation',
    description: '3D digital twin breadboard environment with step-by-step assembly checklists and full rotation controls.',
    image: '/screenshots/ar-workspace-led.png',
    accentColor: '#49F996',
    badgeBg: 'bg-[#49F996]/10',
    badgeText: 'text-[#49F996]',
    badgeBorder: 'border-[#49F996]/30',
    icon: Cpu
  },
  {
    id: 'ar-workspace-rccar',
    title: 'RC Car Motor Wiring Mode',
    category: 'Advanced Robotics',
    description: 'Complex multi-component simulation showcasing L298N motor driver module, dual-battery connections, and chassis assembly.',
    image: '/screenshots/ar-workspace-rccar.png',
    accentColor: '#FC904F',
    badgeBg: 'bg-[#FC904F]/10',
    badgeText: 'text-[#FC904F]',
    badgeBorder: 'border-[#FC904F]/30',
    icon: Wrench
  },
  {
    id: 'project-list',
    title: 'Curated Project Catalog',
    category: 'App Navigation',
    description: 'Filter through beginner to advanced Arduino learning modules ranked by difficulty: Blinking LED, Potentiometer, RC Car & Sensors.',
    image: '/screenshots/project-list.png',
    accentColor: '#9B5FF5',
    badgeBg: 'bg-[#9B5FF5]/10',
    badgeText: 'text-[#9B5FF5]',
    badgeBorder: 'border-[#9B5FF5]/30',
    icon: Layers
  },
  {
    id: 'project-details',
    title: 'Project Requirements & Specs',
    category: 'Hardware Guide',
    description: 'Pre-flight component checklist detailing required microcontrollers, diodes, resistors, jumper wires, and breadboards.',
    image: '/screenshots/project-details.png',
    accentColor: '#35A2F4',
    badgeBg: 'bg-[#35A2F4]/10',
    badgeText: 'text-[#35A2F4]',
    badgeBorder: 'border-[#35A2F4]/30',
    icon: Box
  },
  {
    id: 'step-instructions',
    title: 'Step-by-Step Circuit Guide',
    category: 'Learning Module',
    description: 'Clear, text-guided explanations detailing breadboard row connectivity, center isolation gaps, and power rail setups.',
    image: '/screenshots/step-instructions.png',
    accentColor: '#49F996',
    badgeBg: 'bg-[#49F996]/10',
    badgeText: 'text-[#49F996]',
    badgeBorder: 'border-[#49F996]/30',
    icon: BookOpen
  },
  {
    id: 'ar-library-qr',
    title: 'Target Image Library QR',
    category: 'Vuforia Target Portal',
    description: 'Quickly access printable component image targets on secondary screens or printables to trigger AR models.',
    image: '/screenshots/ar-library-qr.png',
    accentColor: '#FC904F',
    badgeBg: 'bg-[#FC904F]/10',
    badgeText: 'text-[#FC904F]',
    badgeBorder: 'border-[#FC904F]/30',
    icon: QrCode
  }
];

export const HeroMockupCardDeck: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto slide timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SCREENS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeScreen = SCREENS[activeIndex];

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % SCREENS.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length);
  };

  const handleSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(idx);
  };

  const ActiveIcon = activeScreen.icon;

  return (
    <div
      className="relative w-full max-w-xl lg:max-w-[640px] mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
    >
      {/* 1. Quick Category Navigation Tabs Bar */}
      <div className="w-full mb-4 overflow-x-auto no-scrollbar pb-1">
        <div className="flex items-center gap-1.5 justify-start sm:justify-center min-w-max px-1">
          {SCREENS.map((screen, idx) => {
            const Icon = screen.icon;
            const isActive = idx === activeIndex;
            return (
              <button
                key={screen.id}
                onClick={() => handleSelect(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-nunito font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#35A2F4]/20 border border-[#35A2F4] text-white shadow-lg shadow-[#35A2F4]/20'
                    : 'bg-[#1c2b3f]/70 border border-white/10 text-[#8A9BB5] hover:text-white hover:bg-[#1c2b3f]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#35A2F4]' : 'text-[#8A9BB5]'}`} />
                <span>{screen.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Interactive Smartphone Frame */}
      <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#2a3c54] via-[#1c2b3f] to-[#0e1724] border-2 sm:border-4 border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(53,162,244,0.2)] backdrop-blur-xl flex flex-col justify-between overflow-hidden group">
        
        {/* Landscape Speaker Notch Indicators */}
        <div className="absolute top-1/2 left-1 -translate-y-1/2 w-1.5 sm:w-2 h-10 sm:h-12 bg-white/15 rounded-full z-30 pointer-events-none" />
        <div className="absolute top-1/2 right-1 -translate-y-1/2 w-1.5 sm:w-2 h-10 sm:h-12 bg-white/15 rounded-full z-30 pointer-events-none" />

        {/* Inner Screen Display Canvas */}
        <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a101d] border border-white/10 flex items-center justify-center">
          
          {/* Screenshot Image with smooth animated transition */}
          <motion.img
            key={activeScreen.id}
            src={activeScreen.image}
            alt={activeScreen.title}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center"
          />

          {/* Glass Glare Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

          {/* AR Camera Brackets & Holographic Scanline */}
          {(activeScreen.id.startsWith('ar-') || activeScreen.id === 'ar-camera') && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#35A2F4]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#35A2F4]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#35A2F4]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#35A2F4]" />
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#49F996] to-transparent animate-scan-line shadow-[0_0_12px_#49F996]" />
            </div>
          )}

          {/* AR Status Bar Overlay at top of screen */}
          <div className="absolute top-2.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
            <span className="text-[9px] sm:text-[10px] font-mono text-[#49F996] bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#49F996]/30 flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49F996] animate-ping" />
              AR-DUINO OS v2.4
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-white/90 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 shadow-md">
              60 FPS • Vuforia AR
            </span>
          </div>

          {/* Floating Navigation Controls Inside Phone Display Frame */}
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-30">
            <button
              onClick={handlePrev}
              aria-label="Previous app screen"
              className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-lg hover:bg-[#35A2F4] hover:border-[#35A2F4] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 text-white/80 group-hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next app screen"
              className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-lg hover:bg-[#35A2F4] hover:border-[#35A2F4] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 text-white/80 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Screen Info & Description Caption Card */}
      <motion.div
        key={activeScreen.id + '-caption'}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full mt-4 p-4 sm:p-5 rounded-2xl bg-[#1c2b3f]/80 border border-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between"
      >
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${activeScreen.badgeBg} ${activeScreen.badgeText} ${activeScreen.badgeBorder}`}
            >
              <ActiveIcon className="w-3.5 h-3.5" />
              {activeScreen.category}
            </span>
          </div>

          {/* Screen Counter Badge */}
          <div className="flex items-center gap-1 text-xs font-mono text-[#8A9BB5] bg-black/30 px-2.5 py-1 rounded-full border border-white/10">
            <span className="text-white font-bold">{activeIndex + 1}</span>
            <span>/</span>
            <span>{SCREENS.length}</span>
          </div>
        </div>

        {/* Screen Title */}
        <h3 className="font-nunito font-extrabold text-lg sm:text-xl text-white mb-1">
          {activeScreen.title}
        </h3>

        {/* Screen Description */}
        <p className="font-inter text-xs sm:text-sm text-[#8A9BB5] leading-relaxed">
          {activeScreen.description}
        </p>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3 pt-3 border-t border-white/5">
          {SCREENS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              aria-label={`Go to screen ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'w-6 bg-[#35A2F4]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};


