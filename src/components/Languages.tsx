import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

interface Language {
  nameKey: 'mandarin' | 'english' | 'french';
  levelKey: 'native' | 'professional';
  flag: string;
  code: string;
  proficiency: number;
}

const Languages = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const languages: Language[] = [
    {
      nameKey: 'english',
      levelKey: 'professional',
      flag: '🇬🇧',
      code: 'EN',
      proficiency: 90,
    },
    {
      nameKey: 'french',
      levelKey: 'professional',
      flag: '🇫🇷',
      code: 'FR',
      proficiency: 85,
    },
    {
      nameKey: 'mandarin',
      levelKey: 'native',
      flag: '🇨🇳',
      code: 'ZH',
      proficiency: 100,
    },
  ];

  return (
    <section id="languages" className="bg-surface text-text py-24 relative overflow-hidden">
      {/* Hexagonal pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0l12.5 7.5v15L25 30 12.5 22.5v-15L25 0z' fill='none' stroke='%2300ffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent"></div>
            <div>
              <div className="text-accent/60 text-xs mono-text tracking-widest uppercase mb-1">
                <span className="text-primary">&gt;</span> {language === 'en' ? 'SECTION_05' : language === 'fr' ? 'SECTION_05' : '部分_05'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-neon-glow cyber-title">
                [{t.languagesSection.title}]
              </h2>
            </div>
          </div>
          <p className="mt-6 text-lg text-text/60 mono-text max-w-2xl">
            <span className="text-primary">&gt;</span> {language === 'en'
              ? 'MULTILINGUAL_PROTOCOL_ENABLED'
              : language === 'fr'
              ? 'PROTOCOLE_MULTILINGUE_ACTIVÉ'
              : '多语言协议已启用'}
          </p>
        </div>

        {/* Languages grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="cyber-card p-8 relative group/lang transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Holographic corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary opacity-50 group-hover/lang:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-secondary opacity-50 group-hover/lang:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-accent opacity-50 group-hover/lang:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary opacity-50 group-hover/lang:opacity-100 transition-opacity"></div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover/lang:opacity-100 transition-opacity duration-500"></div>

                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs text-primary/60 mono-text">ACTIVE</span>
                </div>

                <div className="relative flex flex-col items-center text-center space-y-6">
                  {/* Language code */}
                  <div className="mono-text text-xs text-accent/60">
                    // LANG_{lang.code}
                  </div>

                  {/* Flag with holographic effect */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg blur-2xl transform group-hover/lang:scale-150 transition-transform duration-500"></div>
                    <div className="relative text-7xl transform group-hover/lang:scale-110 transition-transform duration-300">
                      {lang.flag}
                    </div>
                  </div>

                  {/* Language name */}
                  <h3 className="text-2xl font-black text-primary cyber-title">
                    {t.languagesSection[lang.nameKey].toUpperCase()}
                  </h3>

                  {/* Proficiency level */}
                  <div className="w-full space-y-2">
                    <div className="flex justify-between items-center text-xs mono-text">
                      <span className="text-text/60">LEVEL:</span>
                      <span className="text-secondary">{t.languagesSection[lang.levelKey].toUpperCase()}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-2 bg-text/10 overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
                        style={{
                          width: `${lang.proficiency}%`,
                          boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                        }}
                      ></div>
                      {/* Animated scan line */}
                      <div className="absolute inset-y-0 w-1 bg-white/50 animate-scan"></div>
                    </div>

                    {/* Percentage */}
                    <div className="text-right">
                      <span className="text-xs font-bold text-primary mono-text">{lang.proficiency}%</span>
                    </div>
                  </div>

                  {/* Data readout */}
                  <div className="w-full pt-4 border-t border-primary/20">
                    <div className="flex justify-between text-xs mono-text">
                      <span className="text-text/40">STATUS:</span>
                      <span className="text-primary">LOADED</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal output */}
        <div className="mt-20 max-w-3xl mx-auto cyber-card p-6">
          <div className="mono-text text-xs space-y-2">
            <div className="text-primary/60">
              <span className="text-secondary">&gt;</span> {language === 'en'
                ? 'system.log: Multi-language interface initialized'
                : language === 'fr'
                ? 'system.log: Interface multilingue initialisée'
                : 'system.log: 多语言界面已初始化'}
            </div>
            <div className="text-accent/60">
              <span className="text-secondary">&gt;</span> {language === 'en'
                ? 'Ready for global communication protocols'
                : language === 'fr'
                ? 'Prêt pour les protocoles de communication globale'
                : '准备全球通信协议'}
            </div>
            <div className="text-text/40 flex items-center gap-2">
              <span className="text-secondary">&gt;</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for scan animation */}
      <style>
        {`
          @keyframes scan {
            0% { left: -10px; }
            100% { left: 100%; }
          }
          .animate-scan {
            animation: scan 2s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Languages;
