import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, LanguageCode } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en' as LanguageCode, label: 'English', flag: '🇬🇧' },
    { code: 'fr' as LanguageCode, label: 'Français', flag: '🇫🇷' },
    { code: 'zh' as LanguageCode, label: '中文', flag: '🇨🇳' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center px-2 py-2 sm:px-3 border border-primary/30 hover:border-primary/60 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-200"
        aria-label="Select language"
      >
        <span className="text-lg sm:text-xl">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-surface/95 backdrop-blur-md border-2 border-primary/30 shadow-[0_0_20px_rgba(0,255,255,0.2)] z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-primary/10 transition-all duration-200 border-b border-primary/10 last:border-b-0 ${
                language === lang.code ? 'bg-primary/20' : ''
              }`}
            >
              <span className="text-xl sm:text-2xl">{lang.flag}</span>
              <span className="text-xs sm:text-sm font-medium text-text mono-text">{lang.label}</span>
              {language === lang.code && (
                <span className="ml-auto text-primary text-sm">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
