import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2 } from 'lucide-react';
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
      {/* Top accent line with flowing light - Enhanced */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent overflow-hidden">
        {/* Flowing light effect - More visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent shadow-neon-cyan animate-flow-right"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent shadow-neon-magenta opacity-80 animate-flow-right-delayed"></div>
        {/* Glow layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm opacity-50 animate-flow-right"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo - Simplified */}
          <a href="#home" className="flex items-center gap-2 md:gap-3 cursor-pointer group relative">
            {/* Logo icon */}
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              {/* Corner decorations - simplified */}
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-l-2 border-t-2 border-primary group-hover:border-secondary transition-colors duration-300"></div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-r-2 border-t-2 border-secondary group-hover:border-accent transition-colors duration-300"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l-2 border-b-2 border-accent group-hover:border-primary transition-colors duration-300"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r-2 border-b-2 border-primary group-hover:border-secondary transition-colors duration-300"></div>

              {/* Icon container */}
              <div className="w-full h-full bg-surface/50 flex items-center justify-center border border-primary/50 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300">
                <Terminal className="text-primary w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Name */}
            <div className="text-lg md:text-xl font-black text-primary cyber-title group-hover:text-shadow-glow transition-all duration-300">
              iLee-x
            </div>
          </a>

          {/* Desktop Navigation - Compact */}
          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-2.5 xl:px-3 py-2 mono-text text-xs xl:text-sm whitespace-nowrap cursor-pointer group/link transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-text/70 hover:text-primary'
                  }`}
                >
                  {/* Background on hover/active */}
                  <div className={`absolute inset-0 bg-primary/5 transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'
                  }`}></div>

                  {/* Content */}
                  <span className="relative z-10">{link.name}</span>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                  }`}></div>
                </a>
              );
            })}
          </div>

          {/* Right side controls - Compact */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSelector />
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

      {/* Bottom scanline effect - Enhanced with flowing light */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-1">
        <div className="h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        {/* Flowing light on bottom border - More visible */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent shadow-neon-cyan animate-flow-left"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent shadow-neon-magenta opacity-80 animate-flow-left-delayed"></div>
          {/* Glow layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm opacity-50 animate-flow-left"></div>
        </div>
      </div>

    </nav>
  );
};

export default NavigationBar;
