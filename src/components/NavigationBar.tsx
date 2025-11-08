import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = getTranslations(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.nav.home, href: '#home', code: '01' },
    { name: t.nav.about, href: '#about', code: '02' },
    { name: t.nav.skills, href: '#skills', code: '03' },
    { name: t.nav.projects, href: '#projects', code: '04' },
    { name: t.nav.languages, href: '#languages', code: '05' },
    { name: language === 'en' ? 'Interests' : language === 'fr' ? 'Intérêts' : '兴趣', href: '#interests', code: '06' },
    { name: t.nav.contact, href: '#contact', code: '07' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-background/95 backdrop-blur-lg border-b-2 border-primary/30 shadow-[0_4px_20px_rgba(0,255,255,0.1)]'
        : 'bg-background/80 backdrop-blur-md border-b border-primary/10'
    }`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 md:gap-3 cursor-pointer group">
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-primary flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-shadow">
              <Terminal className="text-primary w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-black text-primary cyber-title glitch-text">
                iLee-x
              </div>
              <div className="text-xs text-primary/40 mono-text hidden sm:block">
                &gt; PORTFOLIO_v2.0
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-text/80 hover:text-primary transition-all duration-300 cursor-pointer group/link mono-text text-sm whitespace-nowrap"
              >
                <span className="text-primary/40 text-xs mr-1">{link.code}</span>
                {link.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <LanguageSelector />

            {/* Status indicator */}
            <div className="flex items-center gap-2 px-2 xl:px-3 py-1 border border-primary/30 mono-text text-xs whitespace-nowrap">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary">ONLINE</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="scale-90 sm:scale-100">
              <LanguageSelector />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary transition-colors p-1.5 sm:p-2 border border-primary/30 hover:border-primary/60"
            >
              {isOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-primary/20 py-4 space-y-2 animate-fadeIn">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-text/80 hover:text-primary hover:bg-primary/10 cursor-pointer transition-all border-l-2 border-transparent hover:border-primary mono-text text-sm"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary/40 text-xs mr-2">{link.code}</span>
                {link.name}
              </a>
            ))}

            {/* Mobile status */}
            <div className="px-4 pt-4 border-t border-primary/20 mt-4">
              <div className="flex items-center gap-2 text-xs mono-text">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary">SYSTEM ONLINE</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scanline effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </nav>
  );
};

export default NavigationBar;
