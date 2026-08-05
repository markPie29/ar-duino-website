import React from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight, Scan, Sparkles, Cpu } from 'lucide-react';
import { ARDUINO_COMPONENTS } from '../data/componentData';

interface ComponentsPreviewProps {
  onNavigateComponents: () => void;
}

export const ComponentsPreview: React.FC<ComponentsPreviewProps> = ({ onNavigateComponents }) => {
  // Grab 4 featured items
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
              Interactive Component Library
            </h2>
            <p className="font-inter text-[#8A9BB5] text-base sm:text-lg mt-3 max-w-2xl">
              Open our web component targets, scan them with the AR-DUINO mobile app, and watch 3D Arduino parts instantly spawn in front of you.
            </p>
          </div>

          <button
            onClick={onNavigateComponents}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#9B5FF5] text-white font-nunito font-bold text-base hover:bg-[#9B5FF5]/90 transition-all cursor-pointer shadow-lg shadow-[#9B5FF5]/30 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            <Layers className="w-5 h-5" />
            <span>Explore Full Library</span>
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
              className="group rounded-2xl bg-[#1c2b3f]/70 border border-white/10 p-5 hover:border-[#9B5FF5]/40 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image / Gradient Box */}
                <div className={`relative h-40 rounded-xl bg-gradient-to-br ${comp.gradient} border border-white/10 flex flex-col items-center justify-center p-4 overflow-hidden group-hover:scale-[1.03] transition-transform duration-300 mb-4`}>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-white/80 border border-white/10">
                    {comp.category}
                  </div>
                  
                  {/* Icon Silhouette */}
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md mb-2 shadow-inner">
                    <Cpu className="w-7 h-7 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  </div>
                  
                  <span className="text-xs font-nunito font-bold text-white text-center line-clamp-1">
                    {comp.name}
                  </span>
                </div>

                <h3 className="font-nunito font-bold text-lg text-white group-hover:text-[#35A2F4] transition-colors mb-2">
                  {comp.name}
                </h3>
                <p className="font-inter text-xs text-[#8A9BB5] line-clamp-2">
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
