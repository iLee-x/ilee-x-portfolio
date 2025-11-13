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
import FlowingDivider from './components/FlowingDivider';

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
          <FlowingDivider direction="right" color="primary" />
          <FadeInSection>
            <About />
          </FadeInSection>
          <FlowingDivider direction="left" color="secondary" />
          <FadeInSection>
            <Skills />
          </FadeInSection>
          <FlowingDivider direction="right" color="accent" />
          <Projects />
          <FlowingDivider direction="left" color="primary" />
          <FadeInSection>
            <Languages />
          </FadeInSection>
          <FlowingDivider direction="right" color="secondary" />
          <FadeInSection>
            <Interests />
          </FadeInSection>
          <FlowingDivider direction="left" color="accent" />
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </main>
      </div>
    </div>
  );
}

export default App;
