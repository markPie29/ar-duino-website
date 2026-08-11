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

  // Helper to compute 3D stack styles based on distance from active index
  const getCardStyle = (index: number) => {
    const total = SCREENS.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total; // Normalized distance [-3, 3]

    if (diff === 0) {
      // Active Front Card
      return {
        zIndex: 30,
        scale: 1,
        x: '0%',
        y: '0%',
        rotateY: '0deg',
        rotateX: '0deg',
        opacity: 1,
        filter: 'brightness(1) contrast(1)',
        shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 30px rgba(53, 162, 244, 0.25)'
      };
    } else if (diff === 1 || diff === -(total - 1)) {
      // Immediate right card behind
      return {
        zIndex: 20,
        scale: 0.9,
        x: '14%',
        y: '4%',
        rotateY: '-12deg',
        rotateX: '2deg',
        opacity: 0.7,
        filter: 'brightness(0.75) blur(0.3px)',
        shadow: '0 20px 30px -10px rgba(0, 0, 0, 0.6)'
      };
    } else if (diff === -1 || diff === total - 1) {
      // Immediate left card behind
      return {
        zIndex: 20,
        scale: 0.9,
        x: '-14%',
        y: '4%',
        rotateY: '12deg',
        rotateX: '2deg',
        opacity: 0.7,
        filter: 'brightness(0.75) blur(0.3px)',
        shadow: '0 20px 30px -10px rgba(0, 0, 0, 0.6)'
      };
    } else if (diff === 2 || diff === -(total - 2)) {
      // Second right card behind
      return {
        zIndex: 10,
        scale: 0.8,
        x: '24%',
        y: '8%',
        rotateY: '-20deg',
        rotateX: '4deg',
        opacity: 0.4,
        filter: 'brightness(0.5) blur(1px)',
        shadow: '0 15px 25px -10px rgba(0, 0, 0, 0.5)'
      };
    } else {
      // Other background cards
      return {
        zIndex: 5,
        scale: 0.75,
        x: diff > 0 ? '30%' : '-30%',
        y: '10%',
        rotateY: diff > 0 ? '-25deg' : '25deg',
        rotateX: '5deg',
        opacity: 0.2,
        filter: 'brightness(0.3) blur(2px)',
        shadow: 'none'
      };
    }
  };

  return (
    <div
      className="relative w-full max-w-[560px] lg:max-w-[620px] mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
    >
      {/* Dynamic Screen Header Badge */}
      <motion.div
        key={activeScreen.id + '-header'}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full mb-4 flex items-center justify-between px-2"
      >
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${activeScreen.badgeBg} ${activeScreen.badgeText} ${activeScreen.badgeBorder}`}
          >
            <activeScreen.icon className="w-3.5 h-3.5" />
            {activeScreen.category}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs font-mono text-[#8A9BB5]">
          <span className="text-white font-bold">{activeIndex + 1}</span>
          <span>/</span>
          <span>{SCREENS.length}</span>
        </div>
      </motion.div>

      {/* 3D Stack Container with Perspective */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] perspective-[1200px] flex items-center justify-center">
        
        {/* Navigation Arrows on sides */}
        <button
          onClick={handlePrev}
          aria-label="Previous screenshot"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#162133]/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl hover:bg-[#35A2F4] hover:border-[#35A2F4] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        >
          <ChevronLeft className="w-6 h-6 text-[#8A9BB5] group-hover:text-white transition-colors" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next screenshot"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#162133]/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl hover:bg-[#35A2F4] hover:border-[#35A2F4] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        >
          <ChevronRight className="w-6 h-6 text-[#8A9BB5] group-hover:text-white transition-colors" />
        </button>

        {/* Render 7 Cards in 3D Stack */}
        {SCREENS.map((screen, idx) => {
          const style = getCardStyle(idx);
          const isActive = idx === activeIndex;

          return (
            <motion.div
              key={screen.id}
              onClick={() => handleSelect(idx)}
              animate={{
                zIndex: style.zIndex,
                scale: style.scale,
                x: style.x,
                y: style.y,
                rotateY: style.rotateY,
                rotateX: style.rotateX,
                opacity: style.opacity,
                filter: style.filter
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1]
              }}
              style={{
                boxShadow: style.shadow,
                transformStyle: 'preserve-3d'
              }}
              className={`absolute w-[92%] sm:w-[94%] aspect-[16/9.2] cursor-pointer rounded-2xl sm:rounded-3xl transition-shadow ${
                isActive ? 'pointer-events-auto' : 'pointer-events-auto hover:opacity-90'
              }`}
            >
              {/* Sleek Metallic Landscape Smartphone Frame */}
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#2a3c54] via-[#1c2b3f] to-[#0e1724] border-2 sm:border-4 border-white/20 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden group">
                
                {/* Phone Speaker Notch / Side Bar (Landscape Orientation) */}
                <div className="absolute top-1/2 left-1 -translate-y-1/2 w-1.5 sm:w-2 h-10 sm:h-12 bg-white/10 rounded-full z-30" />
                <div className="absolute top-1/2 right-1 -translate-y-1/2 w-1.5 sm:w-2 h-10 sm:h-12 bg-white/10 rounded-full z-30" />

                {/* Inner Screen Canvas */}
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a101d] border border-white/10 flex items-center justify-center">
                  
                  {/* Screenshot Image */}
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Glass Glare Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                  {/* AR Camera Overlay Lines & Scanline (if AR-related screen) */}
                  {isActive && (screen.id.startsWith('ar-') || screen.id === 'ar-camera') && (
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Corner Viewport Brackets */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#35A2F4]" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#35A2F4]" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#35A2F4]" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#35A2F4]" />

                      {/* Moving Holographic Scan Line */}
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#49F996] to-transparent animate-scan-line shadow-[0_0_12px_#49F996]" />
                    </div>
                  )}

                  {/* AR Status Bar Overlay at top of screen */}
                  <div className="absolute top-2 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#49F996] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#49F996]/30 flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#49F996] animate-ping" />
                      AR-DUINO OS v2.4
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-white/80 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 shadow-md hidden sm:inline-block">
                      60 FPS • Vuforia AR
                    </span>
                  </div>

                  {/* Click to Front Hint overlay on background cards */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px] opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-semibold text-white bg-black/70 px-3 py-1.5 rounded-full border border-white/30 backdrop-blur-md flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#35A2F4]" />
                        Click to view
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

