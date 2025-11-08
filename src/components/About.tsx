import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

const About = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="about" className="bg-surface text-text py-24 relative overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 255, 255, 0.1) 10px, rgba(0, 255, 255, 0.1) 11px)',
        }}></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent"></div>
            <div>
              <div className="text-primary/60 text-xs mono-text tracking-widest uppercase mb-1">
                <span className="text-secondary">&gt;</span> {language === 'en' ? 'SECTION_02' : language === 'fr' ? 'SECTION_02' : '部分_02'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-neon-glow cyber-title">
                [{t.about.title}]
              </h2>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left side - Data panels */}
          <div className="md:col-span-4 space-y-6">
            {/* Profile data card */}
            <div className="cyber-card p-6 relative">
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,1)]"></div>
              <div className="mono-text text-xs text-primary/60 mb-4">
                // PROFILE_DATA
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-primary/20 pb-2">
                  <span className="text-text/60 mono-text">STATUS:</span>
                  <span className="text-primary mono-text">ACTIVE</span>
                </div>
                <div className="flex justify-between border-b border-primary/20 pb-2">
                  <span className="text-text/60 mono-text">ROLE:</span>
                  <span className="text-primary mono-text">SDE</span>
                </div>
                <div className="flex justify-between border-b border-primary/20 pb-2">
                  <span className="text-text/60 mono-text">LOCATION:</span>
                  <span className="text-primary mono-text">GLOBAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/60 mono-text">MODE:</span>
                  <span className="text-secondary mono-text">REMOTE</span>
                </div>
              </div>
            </div>

            {/* Stats panels */}
            <div className="grid grid-cols-2 gap-4">
              <div className="cyber-card p-6 text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-4xl font-black text-primary cyber-title relative">3+</div>
                <div className="text-xs text-text/60 mono-text mt-2 relative">
                  {language === 'en' ? 'YEARS' : language === 'fr' ? 'ANNÉES' : '年'}
                </div>
                <div className="absolute bottom-2 left-2 right-2 h-1 bg-primary/20">
                  <div className="h-full bg-primary w-3/4"></div>
                </div>
              </div>
              <div className="cyber-card p-6 text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-4xl font-black text-secondary cyber-title relative">20+</div>
                <div className="text-xs text-text/60 mono-text mt-2 relative">
                  {language === 'en' ? 'PROJECTS' : language === 'fr' ? 'PROJETS' : '项目'}
                </div>
                <div className="absolute bottom-2 left-2 right-2 h-1 bg-secondary/20">
                  <div className="h-full bg-secondary w-full"></div>
                </div>
              </div>
            </div>

            {/* Mission statement */}
            <div className="cyber-card p-6 border-l-4 border-primary">
              <div className="mono-text text-xs text-primary/60 mb-3">
                // MISSION
              </div>
              <p className="text-sm text-text/80 leading-relaxed">
                {language === 'en'
                  ? 'Building the future, one line of code at a time. Pushing boundaries in tech innovation.'
                  : language === 'fr'
                  ? 'Construire l\'avenir, une ligne de code à la fois. Repousser les limites de l\'innovation.'
                  : '一次一行代码构建未来。突破技术创新的界限。'}
              </p>
            </div>
          </div>

          {/* Right side - Story and attributes */}
          <div className="md:col-span-8 space-y-6">
            {/* Main story panel */}
            <div className="cyber-card p-8 relative">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-secondary"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary"></div>

              <div className="mono-text text-xs text-primary/60 mb-6">
                // ABOUT_ME.txt
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-text/90">
                  {t.about.paragraph1}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-primary via-secondary to-transparent"></div>
                  <div className="w-2 h-2 bg-primary rotate-45"></div>
                </div>
                <p className="text-lg leading-relaxed text-text/90">
                  {t.about.paragraph2}
                </p>
              </div>
            </div>

            {/* Attributes grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="cyber-card p-6 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-shadow">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="font-bold mb-2 text-primary cyber-title text-sm">
                    {language === 'en' ? '[CREATIVE]' : language === 'fr' ? '[CRÉATIF]' : '[创造性]'}
                  </h4>
                  <p className="text-xs text-text/60 mono-text">
                    {language === 'en'
                      ? 'Innovative problem solver'
                      : language === 'fr'
                      ? 'Résolution innovante'
                      : '创新问题解决者'}
                  </p>
                  <div className="mt-4 h-1 bg-primary/20">
                    <div className="h-full bg-primary w-4/5 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-6 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-secondary flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] transition-shadow">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-bold mb-2 text-secondary cyber-title text-sm">
                    {language === 'en' ? '[FAST]' : language === 'fr' ? '[RAPIDE]' : '[快速]'}
                  </h4>
                  <p className="text-xs text-text/60 mono-text">
                    {language === 'en'
                      ? 'Always expanding skills'
                      : language === 'fr'
                      ? 'Toujours en expansion'
                      : '不断扩展技能'}
                  </p>
                  <div className="mt-4 h-1 bg-secondary/20">
                    <div className="h-full bg-secondary w-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-6 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(157,0,255,0.5)] transition-shadow">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-bold mb-2 text-accent cyber-title text-sm">
                    {language === 'en' ? '[PRECISE]' : language === 'fr' ? '[PRÉCIS]' : '[精确]'}
                  </h4>
                  <p className="text-xs text-text/60 mono-text">
                    {language === 'en'
                      ? 'Precision in every line'
                      : language === 'fr'
                      ? 'Précision dans chaque ligne'
                      : '每一行都精确'}
                  </p>
                  <div className="mt-4 h-1 bg-accent/20">
                    <div className="h-full bg-accent w-11/12 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
