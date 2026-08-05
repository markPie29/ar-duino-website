import React from 'react';
import { motion } from 'motion/react';
import { Download, Sparkles, Smartphone, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigateComponents: () => void;
  onNavigateDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateComponents, onNavigateDownload }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
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
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
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

          {/* Right Column: Interactive Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] animate-float">
              
              {/* Outer Phone Frame */}
              <div className="relative rounded-[3rem] p-3 bg-gradient-to-b from-[#24354d] via-[#1c2b3f] to-[#0e1724] border-4 border-white/15 shadow-2xl shadow-black/80 backdrop-blur-xl">
                
                {/* Phone Speaker Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0e1724] rounded-full flex items-center justify-center gap-2 z-20 border border-white/5">
                  <div className="w-10 h-1 bg-white/20 rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>

                {/* Inner Screen Area */}
                <div className="relative rounded-[2.4rem] overflow-hidden bg-[#0e1724] aspect-[9/18.5] flex flex-col justify-between border border-white/10 p-5">
                  
                  {/* AR Camera Overlay Lines */}
                  <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-10 left-6 w-8 h-8 border-t-2 border-l-2 border-[#35A2F4]" />
                    <div className="absolute top-10 right-6 w-8 h-8 border-t-2 border-r-2 border-[#35A2F4]" />
                    <div className="absolute bottom-10 left-6 w-8 h-8 border-b-2 border-l-2 border-[#35A2F4]" />
                    <div className="absolute bottom-10 right-6 w-8 h-8 border-b-2 border-r-2 border-[#35A2F4]" />
                    
                    {/* Animated Scan Line */}
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#49F996] to-transparent animate-scan-line shadow-[0_0_15px_#49F996]" />
                  </div>

                  {/* Simulated AR View Content */}
                  <div className="pt-8 flex justify-between items-center z-10">
                    <span className="text-[10px] font-mono text-[#49F996] bg-[#49F996]/10 px-2 py-0.5 rounded border border-[#49F996]/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#49F996] animate-ping" />
                      AR CAMERA ACTIVE
                    </span>
                    <span className="text-[10px] font-mono text-[#8A9BB5]">60 FPS</span>
                  </div>

                  {/* Center Holographic AR Model Visualization */}
                  <div className="my-auto flex flex-col items-center justify-center text-center z-10">
                    <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                      {/* Holographic rings */}
                      <div className="absolute inset-0 rounded-full border border-[#35A2F4]/40 animate-spin [animation-duration:12s]" />
                      <div className="absolute inset-2 rounded-full border border-dashed border-[#9B5FF5]/50 animate-spin [animation-duration:8s] [animation-direction:reverse]" />
                      
                      {/* Logo in center */}
                      <div className="w-16 h-16 rounded-xl bg-[#162133] p-2 border border-[#35A2F4]/40 shadow-lg shadow-[#35A2F4]/30 flex items-center justify-center">
                        <img
                          src="/Logo Main.png"
                          alt="AR Target"
                          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#35A2F4]"
                        />
                      </div>
                    </div>

                    <h4 className="font-nunito font-bold text-white text-base">
                      Arduino Circuit Visualizer
                    </h4>
                    <p className="font-inter text-xs text-[#35A2F4] mt-0.5">
                      Vuforia Target Recognized
                    </p>
                  </div>

                  {/* Bottom App Controls */}
                  <div className="z-10 bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
                    <div className="flex items-center justify-between text-[11px] text-[#8A9BB5]">
                      <span>Simulation Mode</span>
                      <span className="text-[#49F996] font-semibold">READY</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#35A2F4] to-[#49F996] h-full w-4/5" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Decorative Floating Badges */}
              <div className="absolute -bottom-4 -left-6 bg-[#1c2b3f] border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-[#49F996]/20 flex items-center justify-center text-[#49F996]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">3D AR Models</div>
                  <div className="text-[10px] text-[#8A9BB5]">Scan & Interact</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
