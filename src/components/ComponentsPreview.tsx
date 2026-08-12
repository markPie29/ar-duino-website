import React from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight, Scan } from 'lucide-react';
import { ARDUINO_COMPONENTS } from '../data/componentData';

interface ComponentsPreviewProps {
  onNavigateComponents: () => void;
}

export const ComponentsPreview: React.FC<ComponentsPreviewProps> = ({ onNavigateComponents }) => {
  // Grab 4 featured items across microcontrollers, sensors, inputs, and motors
  const previewItems = ARDUINO_COMPONENTS.slice(0, 4);

  return (
    <section id="components-preview" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9B5FF5]/10 border border-[#9B5FF5]/30 text-[#9B5FF5] text-xs font-semibold uppercase tracking-wider mb-4">
              <Scan className="w-3.5 h-3.5" />
              <span>Vuforia Target Engine</span>
            </div>
            <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Interactive Vuforia Target Library
            </h2>
            <p className="font-inter text-[#8A9BB5] text-base sm:text-lg mt-3 max-w-2xl">
              Open our web component target gallery, scan targets using your mobile phone camera in the <span className="text-white font-semibold">AR-DUINO</span> app, and watch 3D Arduino components instantly spawn in front of you.
            </p>
          </div>

          <button
            onClick={onNavigateComponents}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#9B5FF5] text-white font-nunito font-bold text-base hover:bg-[#9B5FF5]/90 transition-all cursor-pointer shadow-lg shadow-[#9B5FF5]/30 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            <Layers className="w-5 h-5" />
            <span>Explore All 29 Targets</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Preview Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((comp, idx) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={onNavigateComponents}
              className="group rounded-2xl bg-[#1c2b3f]/70 border border-white/10 p-4 hover:border-[#9B5FF5]/40 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-xl flex flex-col justify-between hover:scale-[1.02]"
            >
              <div>
                {/* Real Target Image Box */}
                <div className="relative h-44 rounded-xl bg-[#0F172A] border border-white/10 flex items-center justify-center p-3 overflow-hidden mb-4 shadow-inner group-hover:border-[#9B5FF5]/40 transition-colors">
                  <span className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#35A2F4] border border-[#35A2F4]/30">
                    {comp.category}
                  </span>
                  
                  <img
                    src={comp.image}
                    alt={`${comp.name} Target`}
                    className="w-full h-full object-contain z-0 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-nunito font-bold text-base text-white group-hover:text-[#35A2F4] transition-colors mb-1.5 line-clamp-1">
                  {comp.name}
                </h3>
                <p className="font-inter text-xs text-[#8A9BB5] leading-relaxed line-clamp-2">
                  {comp.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#9B5FF5] font-semibold">
                <span>Click to View Target</span>
                <Scan className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
