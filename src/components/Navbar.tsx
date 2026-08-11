import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Cpu, Layers, Sparkles, Mail, Home } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface NavbarProps {
  currentPage: 'home' | 'components';
  onNavigate: (page: 'home' | 'components', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [isScrolledPastHeroTop, setIsScrolledPastHeroTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastHeroTop(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'components', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: scrollDirection === 'down' && isScrolledPastHeroTop && !mobileMenuOpen ? -90 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-[#162133]/85 border border-white/10 rounded-2xl px-4 py-2.5 sm:px-6 flex items-center justify-between shadow-2xl shadow-black/40">
          
          {/* Logo & Title */}
          <button
            onClick={() => handleNavClick('home', 'hero')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#35A2F4]/20 to-[#9B5FF5]/20 p-1 border border-white/10 group-hover:border-[#35A2F4]/50 transition-colors">
              <img
                src="/Logo Main.png"
                alt="AR-DUINO Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(53,162,244,0.5)]"
              />
            </div>
            <div>
              <span className="font-nunito font-extrabold text-lg sm:text-xl text-white tracking-wide block leading-none group-hover:text-[#35A2F4] transition-colors">
                AR-DUINO
              </span>
              <span className="font-inter text-[10px] text-[#8A9BB5] tracking-wider uppercase block font-semibold">
                Augmented Reality
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('home', 'hero')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'home'
                  ? 'text-[#35A2F4] bg-[#35A2F4]/10 border border-[#35A2F4]/30'
                  : 'text-[#8A9BB5] hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('home', 'how-it-works')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#8A9BB5] hover:text-white hover:bg-white/5 transition-all"
            >
              How It Works
            </button>

            <button
              onClick={() => handleNavClick('home', 'features')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#8A9BB5] hover:text-white hover:bg-white/5 transition-all"
            >
              Features
            </button>

            <button
              onClick={() => handleNavClick('components')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentPage === 'components'
                  ? 'text-[#9B5FF5] bg-[#9B5FF5]/10 border border-[#9B5FF5]/30'
                  : 'text-[#8A9BB5] hover:text-[#9B5FF5] hover:bg-[#9B5FF5]/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              Vuforia Library
            </button>

            <button
              onClick={() => handleNavClick('home', 'contact')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#8A9BB5] hover:text-white hover:bg-white/5 transition-all"
            >
              Contact
            </button>
          </nav>

          {/* Download CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home', 'download')}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FC904F] to-[#FC904F]/90 text-white font-nunito font-bold text-sm shadow-lg shadow-[#FC904F]/25 hover:shadow-[#FC904F]/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">APK</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden mt-2 max-w-7xl mx-auto overflow-hidden"
          >
            <div className="backdrop-blur-2xl bg-[#0e1724]/95 border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('home', 'hero')}
                className="flex items-center gap-3 w-full p-3 rounded-xl text-left text-white font-medium hover:bg-white/5 transition-colors"
              >
                <Home className="w-5 h-5 text-[#35A2F4]" />
                <span>Home</span>
              </button>

              <button
                onClick={() => handleNavClick('home', 'how-it-works')}
                className="flex items-center gap-3 w-full p-3 rounded-xl text-left text-white font-medium hover:bg-white/5 transition-colors"
              >
                <Sparkles className="w-5 h-5 text-[#FC904F]" />
                <span>How It Works</span>
              </button>

              <button
                onClick={() => handleNavClick('home', 'features')}
                className="flex items-center gap-3 w-full p-3 rounded-xl text-left text-white font-medium hover:bg-white/5 transition-colors"
              >
                <Cpu className="w-5 h-5 text-[#49F996]" />
                <span>Features</span>
              </button>

              <button
                onClick={() => handleNavClick('components')}
                className="flex items-center justify-between w-full p-3 rounded-xl text-left text-white font-medium bg-[#9B5FF5]/10 border border-[#9B5FF5]/30 hover:bg-[#9B5FF5]/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-[#9B5FF5]" />
                  <span>Vuforia Component Library</span>
                </div>
                <span className="text-[10px] bg-[#9B5FF5] text-white px-2 py-0.5 rounded-full font-bold">
                  View
                </span>
              </button>

              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="flex items-center gap-3 w-full p-3 rounded-xl text-left text-white font-medium hover:bg-white/5 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#35A2F4]" />
                <span>Contact & Feedback</span>
              </button>

              <div className="pt-2 border-t border-white/10 mt-1">
                <button
                  onClick={() => handleNavClick('home', 'download')}
                  className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-[#FC904F] text-white font-nunito font-bold text-base shadow-lg shadow-[#FC904F]/30"
                >
                  <Download className="w-5 h-5" />
                  <span>Download APK (Android)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
