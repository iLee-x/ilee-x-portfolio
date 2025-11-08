import React from 'react';
import TypingEffect from './TypingEffect';
import ParticleBackground from './ParticleBackground';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Flowing light borders */}
      <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent shadow-neon-cyan animate-flow-right"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent shadow-neon-magenta opacity-80 animate-flow-right-delayed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm opacity-50 animate-flow-right"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent shadow-neon-magenta animate-flow-left"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent shadow-neon-cyan opacity-80 animate-flow-left-delayed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm opacity-50 animate-flow-left"></div>
      </div>

      <ParticleBackground />

      {/* Neon grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Full height layout */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-16 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Terminal-style header */}
          <div className="mb-8 font-mono text-sm text-primary/60 mono-text">
            <span className="text-secondary">&gt;</span> <span className="text-accent">SYSTEM</span>:<span className="text-primary">PORTFOLIO</span>
            <span className="ml-4 text-primary/40">[{language === 'en' ? 'CONNECTED' : language === 'fr' ? 'CONNECTÉ' : '已连接'}]</span>
          </div>

          {/* Main content grid */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="md:col-span-7 space-y-8">
              {/* ASCII art bracket */}
              <div className="text-primary/30 font-mono text-xs mono-text hidden md:block">
                ╔═══════════════════════════════════╗
              </div>

              {/* Greeting with glitch effect */}
              <div className="text-lg md:text-xl text-primary mono-text glitch-text font-bold">
                {language === 'en' ? '// INITIALIZE' : language === 'fr' ? '// INITIALISER' : '// 初始化'}
              </div>

              {/* Large name with neon glow */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-neon-glow cyber-title leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-rotate">
                  {t.hero.name}
                </span>
              </h1>

              {/* Typing tagline with terminal style */}
              <div className="min-h-[120px] flex items-start">
                <div className="text-xl md:text-2xl text-text font-medium leading-relaxed">
                  <span className="text-secondary mono-text">&gt;_</span>{' '}
                  <span className="text-primary/90">
                    <TypingEffect text={t.hero.tagline} speed={70} />
                  </span>
                </div>
              </div>

              {/* Stats display with flowing lights */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="cyber-card p-4 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-flow-right"></div>
                  </div>
                  <div className="text-2xl font-bold text-primary cyber-title">3+</div>
                  <div className="text-xs text-text/60 mono-text">
                    {language === 'en' ? 'YEARS' : language === 'fr' ? 'ANNÉES' : '年'}
                  </div>
                </div>
                <div className="cyber-card p-4 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent animate-flow-right"></div>
                  </div>
                  <div className="text-2xl font-bold text-secondary cyber-title">20+</div>
                  <div className="text-xs text-text/60 mono-text">
                    {language === 'en' ? 'PROJECTS' : language === 'fr' ? 'PROJETS' : '项目'}
                  </div>
                </div>
                <div className="cyber-card p-4 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-flow-right"></div>
                  </div>
                  <div className="text-2xl font-bold text-accent cyber-title">∞</div>
                  <div className="text-xs text-text/60 mono-text">
                    {language === 'en' ? 'IDEAS' : language === 'fr' ? 'IDÉES' : '想法'}
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="cyber-button text-black font-bold py-4 px-8 cursor-pointer cyber-title text-sm"
                >
                  [{t.hero.cta}]
                </a>
                <a
                  href="#contact"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-4 px-8 cursor-pointer transition-all duration-300 cyber-title text-sm hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                >
                  [{language === 'en' ? 'CONTACT' : language === 'fr' ? 'CONTACT' : '联系'}]
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-6 pt-8 mono-text">
                <a href="https://github.com/iLee-x" className="text-primary/60 hover:text-primary transition-colors duration-300 cursor-pointer hover:text-neon-glow">
                  <span className="text-secondary">&gt;</span> GITHUB
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-primary/60 hover:text-primary transition-colors duration-300 cursor-pointer hover:text-neon-glow">
                  <span className="text-secondary">&gt;</span> LINKEDIN
                </a>
              </div>
            </div>

            {/* Right side - Holographic visual element */}
            <div className="md:col-span-5 hidden md:flex items-center justify-center relative">
              <div className="relative w-full max-w-md aspect-square">
                {/* Rotating hexagon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Outer hexagon */}
                    <div className="absolute inset-0 border-2 border-primary/30 animate-spin" style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      animationDuration: '20s'
                    }}></div>

                    {/* Middle hexagon */}
                    <div className="absolute inset-8 border-2 border-secondary/30 animate-spin" style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      animationDuration: '15s',
                      animationDirection: 'reverse'
                    }}></div>

                    {/* Inner hexagon */}
                    <div className="absolute inset-16 border-2 border-accent/30 animate-spin" style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      animationDuration: '10s'
                    }}></div>

                    {/* Center core */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-primary bg-primary/10 animate-pulse" style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        boxShadow: '0 0 40px rgba(0, 255, 255, 0.5)'
                      }}></div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-secondary"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-accent"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary"></div>
                  </div>
                </div>

                {/* Orbiting particles */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,255,1)]"></div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_rgba(255,0,255,1)]"></div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '35s' }}>
                  <div className="absolute top-1/2 right-0 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(157,0,255,1)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-primary/60">
          <span className="text-xs mono-text tracking-widest">
            [{language === 'en' ? 'SCROLL' : language === 'fr' ? 'DÉFILER' : '滚动'}]
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;