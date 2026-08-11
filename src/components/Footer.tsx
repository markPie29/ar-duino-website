import React from 'react';
import { Layers, Mail, Smartphone, ArrowUp, Video } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'components' | 'tutorials', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e1724] border-t border-white/10 pt-16 pb-12 text-[#8A9BB5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <button
              onClick={() => onNavigate('home', 'hero')}
              className="flex items-center gap-3 mb-4 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#162133] p-1.5 border border-white/10 group-hover:border-[#35A2F4]/50 transition-colors">
                <img
                  src="/Logo Main.png"
                  alt="AR-DUINO Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_#35A2F4]"
                />
              </div>
              <span className="font-nunito font-extrabold text-2xl text-white group-hover:text-[#35A2F4] transition-colors">
                AR-DUINO
              </span>
            </button>

            <p className="font-inter text-sm text-[#8A9BB5] leading-relaxed max-w-sm">
              Augmented Reality Driven User Interface for Navigation and Operation of Microcontrollers. Learn, simulate, and build circuits without boundaries.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#49F996] bg-[#49F996]/10 px-3 py-1 rounded-full border border-[#49F996]/20">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android Exclusive App</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-nunito font-bold text-white text-base mb-4 uppercase tracking-wider text-xs">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-inter">
              <li>
                <button
                  onClick={() => onNavigate('home', 'hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tutorials')}
                  className="hover:text-[#35A2F4] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Video className="w-3.5 h-3.5 text-[#35A2F4]" />
                  <span>Video Tutorials</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('components')}
                  className="hover:text-[#9B5FF5] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5 text-[#9B5FF5]" />
                  <span>Vuforia Component Library</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'features')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  App Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Feedback & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-nunito font-bold text-white text-base mb-4 uppercase tracking-wider text-xs">
                Contact Us
              </h4>
              <div className="flex items-center gap-2 text-sm text-white font-medium mb-1">
                <Mail className="w-4 h-4 text-[#35A2F4]" />
                <a href="mailto:markyisulat@gmail.com" className="hover:underline">
                  markyisulat@gmail.com
                </a>
              </div>
              <p className="text-xs text-[#8A9BB5] mt-1">
                Reach out for inquiries, feedback, or collaboration.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A9BB5] gap-4">
          <p>© {new Date().getFullYear()} AR-DUINO. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed for Microcontroller & Robotics AR Education
          </p>
        </div>

      </div>
    </footer>
  );
};
