import React, { useState } from 'react';

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import SplashScreen from './components/SplashScreen';
import './i18n';
import './utils/debugOverflow';

/**
 * Main application component
 * Orchestrates the portfolio sections and manages splash screen visibility
 */
function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Display splash screen on initial load
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 bg-neutral-900 dark:bg-neutral-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-400">TJson Portfolio • 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
