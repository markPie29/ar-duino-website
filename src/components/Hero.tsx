import React from 'react';
import { motion } from 'motion/react';
import { Download, Sparkles, Smartphone, Layers, ArrowRight, ShieldCheck } from 'lucide-react';
import { HeroMockupCardDeck } from './HeroMockupCardDeck';

interface HeroProps {
  onNavigateComponents: () => void;
  onNavigateDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateComponents, onNavigateDownload }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#35A2F4]/20 via-[#9B5FF5]/15 to-[#49F996]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#FC904F]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#35A2F4]/10 border border-[#35A2F4]/30 text-[#35A2F4] text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#49F996]" />
              <span>Augmented Reality Learning Platform</span>
            </div>

            {/* Logo + Brand Heading */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#35A2F4] via-[#9B5FF5] to-[#49F996] blur-lg opacity-70 animate-glow-pulse group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#162133] p-3 border border-white/20 flex items-center justify-center shadow-2xl">
                  <img
                    src="/Logo Main.png"
                    alt="AR-DUINO Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(53,162,244,0.6)]"
                  />
                </div>
              </div>

              <div>
                <h1 className="font-nunito text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-none">
                  AR-DUINO
                </h1>
                <p className="text-[#35A2F4] font-nunito font-bold text-lg sm:text-xl mt-1">
                  Microcontroller AR Experience
                </p>
              </div>
            </div>

            {/* Full Tagline */}
            <p className="font-inter text-lg sm:text-xl text-[#8A9BB5] max-w-2xl leading-relaxed mb-8">
              <span className="text-white font-semibold">A</span>ugmented <span className="text-white font-semibold">R</span>eality <span className="text-white font-semibold">D</span>riven <span className="text-white font-semibold">U</span>ser <span className="text-white font-semibold">I</span>nterface for <span className="text-white font-semibold">N</span>avigation and <span className="text-white font-semibold">O</span>peration of Microcontrollers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onNavigateDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FC904F] to-[#FC904F]/90 text-white font-nunito font-extrabold text-lg shadow-xl shadow-[#FC904F]/30 hover:shadow-[#FC904F]/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download for Android</span>
                <span className="text-xs bg-black/20 px-2 py-0.5 rounded font-mono font-normal">APK</span>
              </button>

              <button
                onClick={onNavigateComponents}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#1c2b3f]/80 border border-white/10 hover:border-[#9B5FF5]/40 text-white font-nunito font-bold text-base hover:bg-[#1c2b3f] transition-all cursor-pointer group backdrop-blur-md"
              >
                <Layers className="w-5 h-5 text-[#9B5FF5]" />
                <span>Vuforia Library</span>
                <ArrowRight className="w-4 h-4 text-[#8A9BB5] group-hover:translate-x-1 group-hover:text-white transition-all" />
              </button>
            </div>

            {/* Platform indicator */}
            <div className="flex items-center gap-6 text-xs text-[#8A9BB5]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#49F996]" />
                <span>Android Exclusive</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#35A2F4]" />
                <span>Vuforia Engine AR</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Stacked Card Deck Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <HeroMockupCardDeck />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

