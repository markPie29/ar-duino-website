import React from 'react';
import { motion } from 'motion/react';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Features } from './Features';
import { ComponentsPreview } from './ComponentsPreview';
import { DownloadCTA } from './DownloadCTA';
import { Contact } from './Contact';
import { Footer } from './Footer';

interface LandingPageProps {
  onNavigateComponents: () => void;
  onNavigateSection: (page: 'home' | 'components' | 'tutorials', sectionId?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigateComponents,
  onNavigateSection
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col justify-between"
    >
      <main>
        <Hero
          onNavigateComponents={onNavigateComponents}
          onNavigateDownload={() => onNavigateSection('home', 'download')}
        />
        <HowItWorks />
        <Features />
        <ComponentsPreview onNavigateComponents={onNavigateComponents} />
        <DownloadCTA />
        <Contact />
      </main>

      <Footer onNavigate={onNavigateSection} />
    </motion.div>
  );
};
