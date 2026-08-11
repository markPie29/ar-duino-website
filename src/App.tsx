import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { ComponentsPage } from './components/ComponentsPage';
import { TutorialsPage } from './components/TutorialsPage';
import './App.css';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'components' | 'tutorials'>('home');

  const handleNavigate = (page: 'home' | 'components' | 'tutorials', sectionId?: string) => {
    setCurrentPage(page);

    if (page === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#162133] text-[#F0F4F8] font-inter selection:bg-[#35A2F4]/30 selection:text-[#35A2F4] relative">
      {/* Floating Global Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Routing Container */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <LandingPage
            key="home-page"
            onNavigateComponents={() => handleNavigate('components')}
            onNavigateSection={handleNavigate}
          />
        ) : currentPage === 'components' ? (
          <ComponentsPage
            key="components-page"
            onNavigate={handleNavigate}
          />
        ) : (
          <TutorialsPage
            key="tutorials-page"
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

