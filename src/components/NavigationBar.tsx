import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2, Zap } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language } = useLanguage();
  const t = getTranslations(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'languages', 'interests', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.nav.home, href: '#home', code: '01', id: 'home' },
    { name: t.nav.about, href: '#about', code: '02', id: 'about' },
    { name: t.nav.skills, href: '#skills', code: '03', id: 'skills' },
    { name: t.nav.projects, href: '#projects', code: '04', id: 'projects' },
    { name: t.nav.languages, href: '#languages', code: '05', id: 'languages' },
    { name: language === 'en' ? 'Interests' : language === 'fr' ? 'Intérêts' : '兴趣', href: '#interests', code: '06', id: 'interests' },
    { name: t.nav.contact, href: '#contact', code: '07', id: 'contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-background/98 backdrop-blur-xl border-b-2 border-primary/40 shadow-[0_8px_32px_rgba(0,255,255,0.15)]'
        : 'bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-lg border-b border-primary/20'
    }`}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo - Enhanced Design */}
          <a href="#home" className="flex items-center gap-3 md:gap-4 cursor-pointer group relative">
            {/* Animated background glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

            {/* Logo icon with animated border */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary group-hover:border-secondary transition-colors duration-300"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-secondary group-hover:border-accent transition-colors duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-accent group-hover:border-primary transition-colors duration-300"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary group-hover:border-secondary transition-colors duration-300"></div>

              {/* Icon container */}
              <div className="w-full h-full bg-surface/50 backdrop-blur-sm flex items-center justify-center border border-primary/50 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300 relative overflow-hidden">
                <Terminal className="text-primary w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Name with glitch effect */}
            <div className="relative">
              <div className="text-xl md:text-2xl font-black text-primary cyber-title relative z-10">
                <span className="inline-block group-hover:animate-pulse">iLee-x</span>
              </div>
              {/* Glitch layers */}
              <div className="absolute inset-0 text-xl md:text-2xl font-black text-secondary cyber-title opacity-0 group-hover:opacity-70 -translate-x-0.5 translate-y-0.5 pointer-events-none">
                iLee-x
              </div>
              <div className="absolute inset-0 text-xl md:text-2xl font-black text-accent cyber-title opacity-0 group-hover:opacity-70 translate-x-0.5 -translate-y-0.5 pointer-events-none">
                iLee-x
              </div>
              {/* Underline animation */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Status indicator */}
            <div className="hidden xl:flex items-center gap-1.5 ml-2 px-2 py-1 border border-primary/30 bg-primary/5 mono-text text-xs">
              <Zap className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-primary/80">ACTIVE</span>
            </div>
          </a>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2.5 mono-text text-sm whitespace-nowrap cursor-pointer group/link overflow-hidden transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-text/70 hover:text-primary'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Background effects */}
                  <div className={`absolute inset-0 bg-primary/5 border-y border-primary/20 transform origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'
                  }`}></div>

                  {/* Hover beam effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover/link:translate-x-[200%] transition-transform duration-700"></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`text-xs transition-all duration-300 ${
                      isActive
                        ? 'text-primary opacity-100'
                        : 'text-primary/30 group-hover/link:text-primary/60'
                    }`}>
                      [{link.code}]
                    </span>
                    <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">
                      {link.name}
                    </span>
                  </span>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-300 ${
                    isActive
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0 group-hover/link:w-full group-hover/link:opacity-100'
                  }`}></div>

                  {/* Corner accent - active indicator */}
                  {isActive && (
                    <>
                      <div className="absolute top-0 left-0 w-1 h-1 bg-primary animate-pulse"></div>
                      <div className="absolute top-0 right-0 w-1 h-1 bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </>
                  )}
                </a>
              );
            })}
          </div>

          {/* Right side controls - Enhanced */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector />

            {/* Divider */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

            {/* Status indicator - Enhanced */}
            <div className="relative group/status">
              <div className="flex items-center gap-2 px-3 py-2 border border-primary/30 bg-surface/30 backdrop-blur-sm mono-text text-xs whitespace-nowrap group-hover/status:border-primary/60 transition-all duration-300 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover/status:translate-x-[100%] transition-transform duration-1000"></div>

                {/* Pulse dot */}
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>

                <span className="text-primary relative z-10">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button - Enhanced */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="scale-90 sm:scale-100">
              <LanguageSelector />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 sm:p-2.5 border border-primary/30 hover:border-primary/60 bg-surface/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group/menu overflow-hidden"
              aria-label="Toggle menu"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover/menu:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon */}
              <div className="relative z-10">
                {isOpen ? (
                  <X size={18} className="sm:w-5 sm:h-5 text-primary group-hover/menu:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={18} className="sm:w-5 sm:h-5 text-primary group-hover/menu:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-primary/30 py-4 bg-surface/20 backdrop-blur-md animate-fadeIn">
            <div className="space-y-1">
              {links.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative block px-4 py-3 cursor-pointer transition-all border-l-4 mono-text text-sm group/mobile overflow-hidden ${
                      isActive
                        ? 'border-primary bg-primary/15 text-primary'
                        : 'border-transparent hover:border-primary/50 text-text/80 hover:text-primary hover:bg-primary/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Hover beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover/mobile:translate-x-[100%] transition-transform duration-700"></div>

                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <span className={`text-xs mr-2 ${isActive ? 'text-primary' : 'text-primary/40'}`}>
                          [{link.code}]
                        </span>
                        <span>{link.name}</span>
                      </div>
                      {isActive && (
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                          <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Mobile status - Enhanced */}
            <div className="px-4 pt-4 mt-4 border-t border-primary/30">
              <div className="flex items-center justify-between p-3 border border-primary/30 bg-surface/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs mono-text">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-primary">SYSTEM ONLINE</span>
                </div>
                <Code2 className="w-4 h-4 text-primary/40" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom scanline effect - Enhanced */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
        <div className="h-px bg-gradient-to-r from-primary/0 via-secondary/40 to-accent/0 blur-sm"></div>
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-8 h-0.5 bg-gradient-to-l from-secondary to-transparent"></div>
        <div className="absolute top-0 right-0 w-0.5 h-8 bg-gradient-to-b from-secondary to-transparent"></div>
      </div>
    </nav>
  );
};

export default NavigationBar;
