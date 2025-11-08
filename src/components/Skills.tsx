import React from 'react';
import {
  Code, Database, Server, Cloud, Wind, Braces, Bot, Coffee, Ship, Leaf, Webhook, FlaskConical
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const categories = [
    {
      name: language === 'en' ? 'PROGRAMMING_LANGUAGES' : language === 'fr' ? 'LANGAGES_DE_PROGRAMMATION' : '编程语言',
      color: 'primary',
      glowColor: 'rgba(0, 255, 255, 0.5)',
      skills: [
        { name: 'JavaScript', icon: <Braces /> },
        { name: 'TypeScript', icon: <Braces /> },
        { name: 'Python', icon: <Bot /> },
        { name: 'Java', icon: <Coffee /> },
        { name: 'C++', icon: <Code /> },
        { name: 'HTML5', icon: <Code /> },
        { name: 'CSS3', icon: <Code /> },
      ],
    },
    {
      name: language === 'en' ? 'FRAMEWORKS' : language === 'fr' ? 'FRAMEWORKS' : '框架',
      color: 'secondary',
      glowColor: 'rgba(255, 0, 255, 0.5)',
      skills: [
        { name: 'React', icon: <Code /> },
        { name: 'Node.js', icon: <Server /> },
        { name: 'Spring Boot', icon: <Leaf /> },
        { name: 'Django', icon: <Webhook /> },
        { name: 'Flask', icon: <FlaskConical /> },
        { name: 'Tailwind CSS', icon: <Wind /> },
      ],
    },
    {
      name: language === 'en' ? 'DATABASES' : language === 'fr' ? 'BASES_DE_DONNÉES' : '数据库',
      color: 'accent',
      glowColor: 'rgba(157, 0, 255, 0.5)',
      skills: [
        { name: 'MongoDB', icon: <Database /> },
        { name: 'PostgreSQL', icon: <Database /> },
      ],
    },
    {
      name: language === 'en' ? 'OTHER' : language === 'fr' ? 'AUTRES' : '其他',
      color: 'primary',
      glowColor: 'rgba(0, 255, 255, 0.5)',
      skills: [
        { name: 'Docker', icon: <Ship /> },
        { name: 'AWS', icon: <Cloud /> },
        { name: 'AI', icon: <Bot /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-background text-text py-24 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-secondary to-transparent"></div>
            <div>
              <div className="text-secondary/60 text-xs mono-text tracking-widest uppercase mb-1">
                <span className="text-accent">&gt;</span> {language === 'en' ? 'SECTION_03' : language === 'fr' ? 'SECTION_03' : '部分_03'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-cyber-glow cyber-title">
                [{t.skills.title}]
              </h2>
            </div>
          </div>
        </div>

        {/* Skills categories */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={category.name} className="group/category">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-3 h-3 bg-${category.color} rounded-sm rotate-45`}></div>
                <h3 className={`text-2xl font-bold text-${category.color} cyber-title mono-text`}>
                  // {category.name}
                </h3>
                <div className={`flex-1 h-px bg-gradient-to-r from-${category.color}/30 to-transparent`}></div>
                <div className="cyber-card px-4 py-1">
                  <span className={`text-${category.color}/60 text-xs mono-text`}>
                    [{category.skills.length}]
                  </span>
                </div>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="cyber-card p-6 relative group/skill transition-all duration-300 hover:scale-110"
                    style={{
                      animationDelay: `${skillIndex * 0.1}s`,
                      transitionDelay: `${skillIndex * 0.05}s`
                    }}
                  >
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 rounded-lg"
                      style={{
                        boxShadow: `0 0 30px ${category.glowColor}, inset 0 0 20px ${category.glowColor}`
                      }}
                    ></div>

                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-2 h-2 bg-${category.color}/0 group-hover/skill:bg-${category.color} transition-colors duration-300`}></div>

                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center gap-4">
                      <div className={`text-4xl text-${category.color} transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:rotate-12`}>
                        {skill.icon}
                      </div>
                      <div className="text-center">
                        <h4 className="text-sm font-bold text-text/90 mono-text">
                          {skill.name}
                        </h4>
                      </div>

                      {/* Bottom progress indicator */}
                      <div className="absolute bottom-2 left-2 right-2 h-1 bg-text/10">
                        <div className={`h-full bg-${category.color} transition-all duration-500 w-0 group-hover/skill:w-full`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Separator */}
              {catIndex < categories.length - 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-24 flex justify-center">
          <div className="cyber-card px-8 py-4 mono-text text-xs text-primary/60">
            <span className="text-secondary">&gt;</span> {language === 'en' ? 'SKILLS_LOADED' : language === 'fr' ? 'COMPÉTENCES_CHARGÉES' : '技能已加载'} <span className="text-primary animate-pulse">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
