import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, BookOpen, ScanLine, Zap, GraduationCap, WifiOff, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      title: 'AR-Powered Simulation',
      description: 'Build, manipulate, and observe Arduino circuits overlaid directly in physical environment using phone camera.',
      icon: Smartphone,
      color: '#35A2F4',
      bgGradient: 'from-[#35A2F4]/10 to-transparent',
      borderColor: 'group-hover:border-[#35A2F4]/40'
    },
    {
      title: 'Step-by-Step Tutorials',
      description: 'Access guided project walkthroughs with written instructions, pin diagrams, and embedded YouTube video lessons.',
      icon: BookOpen,
      color: '#FC904F',
      bgGradient: 'from-[#FC904F]/10 to-transparent',
      borderColor: 'group-hover:border-[#FC904F]/40'
    },
    {
      title: 'Vuforia Component Library',
      description: 'Scan real component target images on screen or paper to spawn interactive 3D models and explore their specs.',
      icon: ScanLine,
      color: '#9B5FF5',
      bgGradient: 'from-[#9B5FF5]/10 to-transparent',
      borderColor: 'group-hover:border-[#9B5FF5]/40'
    },
    {
      title: 'Real-Time Circuit Testing',
      description: 'Execute code logic instantly to see LEDs light up, motors rotate, and buzzers sound right inside the AR simulator.',
      icon: Zap,
      color: '#49F996',
      bgGradient: 'from-[#49F996]/10 to-transparent',
      borderColor: 'group-hover:border-[#49F996]/40'
    },
    {
      title: 'Beginner-Friendly',
      description: 'No physical hardware, breadboards, or wiring kits needed to start learning robotics and electronic logic.',
      icon: GraduationCap,
      color: '#35A2F4',
      bgGradient: 'from-[#35A2F4]/10 to-transparent',
      borderColor: 'group-hover:border-[#35A2F4]/40'
    },
    {
      title: 'Offline Capable',
      description: 'Practice and simulate Arduino projects anytime, anywhere, even when you have no internet access.',
      icon: WifiOff,
      color: '#FC904F',
      bgGradient: 'from-[#FC904F]/10 to-transparent',
      borderColor: 'group-hover:border-[#FC904F]/40'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#0e1724]/60 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#49F996]/10 border border-[#49F996]/30 text-[#49F996] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Built For Hardware Learners</span>
          </div>
          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Key App Capabilities
          </h2>
          <p className="font-inter text-[#8A9BB5] text-base sm:text-lg mt-4">
            Everything you need to master Arduino microcontrollers through immersive augmented reality interactivity.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group rounded-2xl bg-[#1c2b3f]/70 border border-white/10 ${feat.borderColor} p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Accent top gradient glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feat.bgGradient}`}
                />

                <div>
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-lg"
                    style={{ backgroundColor: `${feat.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: feat.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-nunito font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-[#35A2F4] transition-colors">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm sm:text-base text-[#8A9BB5] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Badge Indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-white/70">
                  <CheckCircle2 className="w-4 h-4" style={{ color: feat.color }} />
                  <span>Included in App</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
