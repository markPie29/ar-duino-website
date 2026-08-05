import React from 'react';
import { motion } from 'motion/react';
import { Download, Smartphone, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export const DownloadCTA: React.FC = () => {
  const handleDownload = () => {
    // Placeholder trigger for APK download. When user uploads AR-DUINO.apk to /public, this link downloads it directly.
    const link = document.createElement('a');
    link.href = '/AR-DUINO.apk';
    link.download = 'AR-DUINO.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#35A2F4]/20 via-[#9B5FF5]/20 to-[#FC904F]/20 p-8 sm:p-12 md:p-16 border border-white/15 overflow-hidden shadow-2xl backdrop-blur-xl text-center"
        >
          {/* Decorative background glow circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#35A2F4]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FC904F]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Logo Badge */}
            <div className="w-16 h-16 rounded-2xl bg-[#162133] p-2 border border-white/20 shadow-xl mb-6 flex items-center justify-center">
              <img
                src="/Logo Main.png"
                alt="AR-DUINO Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#35A2F4]"
              />
            </div>

            {/* Headline */}
            <h2 className="font-nunito text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Start Building in AR?
            </h2>

            {/* Subtitle */}
            <p className="font-inter text-[#8A9BB5] text-base sm:text-xl mt-4 max-w-2xl leading-relaxed">
              Download the AR-DUINO Android app today and experience the future of microcontrollers, circuit design, and augmented reality learning.
            </p>

            {/* Download Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#FC904F] to-[#FC904F]/90 text-white font-nunito font-extrabold text-xl shadow-2xl shadow-[#FC904F]/40 hover:shadow-[#FC904F]/60 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
                <span>Download APK File</span>
                <span className="text-xs bg-black/25 px-2.5 py-1 rounded font-mono font-bold">
                  Android
                </span>
              </button>
            </div>

            {/* Guarantee / Compatibility Badges */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-[#8A9BB5]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#49F996]" />
                <span>Android 8.0+ Compatible</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#35A2F4]" />
                <span>Safe Direct Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#9B5FF5]" />
                <span>Free & No Hardware Required</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
