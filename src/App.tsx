import React from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FadeInSection from './components/FadeInSection';
import CustomCursor from './components/CustomCursor';
import MatrixRain from './components/MatrixRain';
import Scanlines from './components/Scanlines';
import CircuitBoard from './components/CircuitBoard';
import GlitchOverlay from './components/GlitchOverlay';

function App() {
  return (
    <div className="App bg-background text-text relative overflow-hidden">
      {/* Cyberpunk atmosphere layers */}
      <CustomCursor />
      <CircuitBoard />
      <MatrixRain />
      <Scanlines />
      <GlitchOverlay />

      {/* Content */}
      <div className="relative z-10">
        <NavigationBar />
        <Hero />
        <main>
          <FadeInSection>
            <About />
          </FadeInSection>
          <FadeInSection>
            <Skills />
          </FadeInSection>
          <Projects />
          <FadeInSection>
            <Languages />
          </FadeInSection>
          <FadeInSection>
            <Interests />
          </FadeInSection>
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </main>
      </div>
    </div>
  );
}

export default App;
