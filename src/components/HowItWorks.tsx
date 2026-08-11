import React from 'react';
import { motion } from 'motion/react';
import { Download, FolderKanban, BookOpen, Hammer, Play, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Download the App',
      description: 'Get the official AR-DUINO APK for Android and install it on your device.',
      icon: Download,
      color: '#FC904F',
      gradient: 'from-[#FC904F]/20 to-transparent',
      borderColor: 'border-[#FC904F]/30'
    },
    {
      number: '02',
      title: 'Choose a Project',
      description: 'Browse through a variety of beginner to advanced Arduino circuit simulation projects.',
      icon: FolderKanban,
      color: '#35A2F4',
      gradient: 'from-[#35A2F4]/20 to-transparent',
      borderColor: 'border-[#35A2F4]/30'
    },
    {
      number: '03',
      title: 'Learn the Steps',
      description: 'Read guided step-by-step documentation or watch integrated YouTube video tutorials.',
      icon: BookOpen,
      color: '#9B5FF5',
      gradient: 'from-[#9B5FF5]/20 to-transparent',
      borderColor: 'border-[#9B5FF5]/30'
    },
    {
      number: '04',
      title: 'Build the Project',
      description: 'Assemble components in physical space or scan our Vuforia targets to spawn 3D AR parts.',
      icon: Hammer,
      color: '#49F996',
      gradient: 'from-[#49F996]/20 to-transparent',
      borderColor: 'border-[#49F996]/30'
    },
    {
      number: '05',
      title: 'Run Simulation',
      description: 'Execute your code and witness live, real-time circuit operation in augmented reality.',
      icon: Play,
      color: '#35A2F4',
      gradient: 'from-[#35A2F4]/20 to-transparent',
      borderColor: 'border-[#35A2F4]/30'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FC904F]/10 border border-[#FC904F]/30 text-[#FC904F] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Simple 5-Step Process</span>
          </div>
          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How AR-DUINO Works
          </h2>
          <p className="font-inter text-[#8A9BB5] text-base sm:text-lg mt-4">
            Master microcontrollers without burning physical components. Follow our simple flow to learn, build, and test.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative group flex flex-col h-full ${
                  idx === steps.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Step Card */}
                <div className={`flex-1 rounded-2xl bg-[#1c2b3f]/60 backdrop-blur-md p-6 border ${step.borderColor} group-hover:bg-[#1c2b3f] transition-all duration-300 shadow-xl flex flex-col justify-between`}>
                  <div>
                    {/* Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="font-nunito font-extrabold text-2xl"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-nunito font-bold text-xl text-white mb-3 group-hover:text-[#35A2F4] transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-sm text-[#8A9BB5] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step indicator footer */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8A9BB5]">
                    <span>Step {idx + 1} of 5</span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-white/30 hidden lg:block" />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
