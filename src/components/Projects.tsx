import React from 'react';
import { Github, ExternalLink, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

const projects = [
  {
    title: 'AI Data Analyst Agent',
    description: 'An intelligent LLM-powered API enabling users to analyze datasets and generate visualizations using natural language queries. Features automated code generation, smart visualizations, and stateful conversations.',
    image: 'https://github.com/iLee-x/AI-Data-Analyst-Agent/raw/master/images/demo.gif',
    tags: ['FastAPI', 'LangChain', 'Claude', 'Pandas'],
    github: 'https://github.com/iLee-x/AI-Data-Analyst-Agent',
    featured: true,
    category: 'AI',
    status: 'DEPLOYED',
  },
  {
    title: 'UberEats Clone',
    description: 'A comprehensive food delivery platform backend implementing microservices architecture with eight independent services. Features API Gateway, service discovery, and enterprise-grade patterns.',
    image: 'https://github.com/iLee-x/Ubereats-clone/raw/master/docs/images/Homepage-demo.gif',
    tags: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Docker'],
    github: 'https://github.com/iLee-x/Ubereats-clone',
    category: 'BACKEND',
    status: 'ACTIVE',
  },
  {
    title: 'Research Paper Q&A System',
    description: 'A production-ready Q&A system built over the "Attention Is All You Need" paper using RAG. Enables users to ask questions about the Transformer architecture with intelligent context retrieval.',
    image: 'https://github.com/iLee-x/research-paper-q-a-system/raw/master/demo.gif',
    tags: ['FastAPI', 'Claude', 'ChromaDB', 'RAG'],
    github: 'https://github.com/iLee-x/research-paper-q-a-system',
    category: 'AI',
    status: 'ACTIVE',
  },
];

const Projects = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const featuredProject = projects.find(p => p.featured);
  const aiProjects = projects.filter(p => !p.featured && p.category === 'AI');
  const fullstackProjects = projects.filter(p => !p.featured && (p.category === 'FULLSTACK' || p.category === 'BACKEND'));

  // Debug logging
  console.log('Projects Debug:', {
    totalProjects: projects.length,
    featuredProject: featuredProject?.title,
    aiProjectsCount: aiProjects.length,
    aiProjects: aiProjects.map(p => p.title),
    fullstackProjectsCount: fullstackProjects.length,
    fullstackProjects: fullstackProjects.map(p => p.title)
  });

  return (
    <section id="projects" className="bg-background text-text py-24 relative overflow-hidden">
      {/* Dot matrix background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-secondary to-transparent"></div>
            <div>
              <div className="text-secondary/60 text-xs mono-text tracking-widest uppercase mb-1">
                <span className="text-primary">&gt;</span> {language === 'en' ? 'SECTION_04' : language === 'fr' ? 'SECTION_04' : '部分_04'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-cyber-glow cyber-title">
                [{t.projects.title}]
              </h2>
            </div>
          </div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="text-primary w-6 h-6" />
              <h3 className="text-2xl font-bold text-primary cyber-title mono-text">
                // {language === 'en' ? 'FEATURED_PROJECT' : language === 'fr' ? 'PROJET_VEDETTE' : '精选项目'}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>

            <div className="cyber-card p-0 overflow-hidden relative group/featured">
              {/* Holographic corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-primary z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-secondary z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-accent z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-primary z-10"></div>

              <div className="grid md:grid-cols-2">
                {/* Image side */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 group-hover/featured:opacity-0 transition-opacity duration-500"></div>
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transform group-hover/featured:scale-110 transition-transform duration-700"
                  />
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan-slow"></div>
                </div>

                {/* Content side */}
                <div className="p-8 md:p-12 space-y-6 bg-gradient-to-br from-background/90 to-surface/90 backdrop-blur-sm">
                  {/* Status bar */}
                  <div className="flex items-center justify-between text-xs mono-text">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-primary">{featuredProject.status}</span>
                    </div>
                    <span className="text-text/40">// {featuredProject.category}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-3xl md:text-4xl font-black text-primary cyber-title">
                    {featuredProject.title}
                  </h4>

                  {/* Description */}
                  <p className="text-lg text-text/80 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag, idx) => (
                      <span
                        key={tag}
                        className="cyber-card px-4 py-2 text-xs mono-text text-primary/80 hover:text-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all cursor-default"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold mono-text text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                    >
                      <Github size={18} />
                      {t.projects.viewCode}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Projects */}
        {aiProjects.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="text-secondary w-6 h-6" />
              <h3 className="text-2xl font-bold text-secondary cyber-title mono-text">
                // {t.projects.aiProjects}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-secondary/30 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiProjects.map((project, idx) => (
              <div
                key={project.title}
                className="cyber-card p-0 overflow-hidden relative group/project transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Status indicator */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 cyber-card px-3 py-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs text-primary mono-text">{project.status}</span>
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover/project:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  {/* Glitch bars on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/project:opacity-100 transition-opacity">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-primary animate-pulse"></div>
                    <div className="absolute top-2/4 left-0 w-full h-px bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-accent animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category */}
                  <div className="text-xs text-text/40 mono-text">
                    // {project.category}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-primary cyber-title">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-text/70 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-primary/30 text-primary/60 mono-text hover:border-primary/60 hover:text-primary transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 text-sm mono-text group/link"
                  >
                    <Github size={16} />
                    <span className="group-hover/link:translate-x-1 transition-transform">{t.projects.viewCode}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/project:opacity-100 transition-opacity"></div>
              </div>
              ))}
            </div>
          </div>
        )}

        {/* Full-Stack Projects */}
        {fullstackProjects.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="text-accent w-6 h-6" />
              <h3 className="text-2xl font-bold text-accent cyber-title mono-text">
                // {t.projects.fullstackProjects}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fullstackProjects.map((project, idx) => (
                <div
                  key={project.title}
                  className="cyber-card p-0 overflow-hidden relative group/project transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 cyber-card px-3 py-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary mono-text">{project.status}</span>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover/project:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    {/* Glitch bars on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/project:opacity-100 transition-opacity">
                      <div className="absolute top-1/4 left-0 w-full h-px bg-primary animate-pulse"></div>
                      <div className="absolute top-2/4 left-0 w-full h-px bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute top-3/4 left-0 w-full h-px bg-accent animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Category */}
                    <div className="text-xs text-text/40 mono-text">
                      // {project.category}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-primary cyber-title">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-text/70 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 border border-primary/30 text-primary/60 mono-text hover:border-primary/60 hover:text-primary transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 text-sm mono-text group/link"
                    >
                      <Github size={16} />
                      <span className="group-hover/link:translate-x-1 transition-transform">{t.projects.viewCode}</span>
                      <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/project:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Terminal output */}
        <div className="mt-16 cyber-card p-6 max-w-2xl mx-auto">
          <div className="mono-text text-xs space-y-2">
            <div className="text-primary/60">
              <span className="text-secondary">&gt;</span> {language === 'en'
                ? `system.log: ${projects.length} projects loaded`
                : language === 'fr'
                ? `system.log: ${projects.length} projets chargés`
                : `system.log: ${projects.length}个项目已加载`}
            </div>
            <div className="text-text/40 flex items-center gap-2">
              <span className="text-secondary">&gt;</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for slow scan animation */}
      <style>
        {`
          @keyframes scan-slow {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .animate-scan-slow {
            animation: scan-slow 4s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
