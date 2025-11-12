import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Send, Terminal as TerminalIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [terminalText, setTerminalText] = useState('');

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GITHUB',
      url: 'https://github.com/iLee-x',
      color: 'primary',
      command: '> connect --platform=github',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LINKEDIN',
      url: 'https://www.linkedin.com/in/your-linkedin-profile',
      color: 'secondary',
      command: '> connect --platform=linkedin',
    },
    {
      icon: <Twitter size={24} />,
      label: 'TWITTER',
      url: 'https://twitter.com/your-twitter-handle',
      color: 'accent',
      command: '> connect --platform=twitter',
    },
    {
      icon: <Mail size={24} />,
      label: 'EMAIL',
      url: 'mailto:ilee-x@outlook.com',
      color: 'primary',
      command: '> send --type=email',
    },
  ];

  return (
    <section id="contact" className="bg-surface text-text py-24 relative overflow-hidden">
      {/* Binary code background */}
      <div className="absolute inset-0 opacity-5 mono-text text-xs overflow-hidden">
        <div className="absolute inset-0 leading-6">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="text-primary/30">
              {Array.from({ length: 200 }).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent"></div>
            <div>
              <div className="text-accent/60 text-xs mono-text tracking-widest uppercase mb-1">
                <span className="text-primary">&gt;</span> {language === 'en' ? 'SECTION_07' : language === 'fr' ? 'SECTION_07' : '部分_07'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-cyber-glow cyber-title">
                [{t.contact.title}]
              </h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Terminal interface */}
          <div className="space-y-8">
            {/* Main message */}
            <div className="cyber-card p-8 relative">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
                <TerminalIcon className="text-primary w-5 h-5" />
                <span className="mono-text text-sm text-primary">CONTACT_TERMINAL.exe</span>
                <div className="flex-1"></div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>

              {/* Terminal content */}
              <div className="space-y-4 mono-text text-sm">
                <div className="text-primary/60">
                  <span className="text-secondary">&gt;</span> {language === 'en'
                    ? 'system.init("contact_protocol")'
                    : language === 'fr'
                    ? 'système.init("protocole_contact")'
                    : 'system.init("联系协议")'}
                </div>
                <div className="text-text/80 leading-relaxed pl-4">
                  {t.contact.description}
                </div>
                <div className="text-accent/60 pl-4">
                  <span className="text-secondary">&gt;</span> {language === 'en'
                    ? 'STATUS: Ready to connect'
                    : language === 'fr'
                    ? 'STATUT: Prêt à connecter'
                    : '状态: 准备连接'}
                </div>
                <div className="flex items-center gap-2 text-text/40 pl-4">
                  <span className="text-secondary">&gt;</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href="mailto:your-email@example.com"
              className="cyber-button w-full text-black font-bold py-4 px-8 flex items-center justify-center gap-3 cyber-title text-sm"
            >
              <Send size={20} />
              [{language === 'en' ? 'INITIALIZE_CONTACT' : language === 'fr' ? 'INITIALISER_CONTACT' : '初始化联系'}]
            </a>

            {/* Info panel */}
            <div className="cyber-card p-6 border-l-4 border-primary">
              <div className="mono-text text-xs space-y-2">
                <div className="text-primary/60">
                  // {language === 'en' ? 'CONNECTION_INFO' : language === 'fr' ? 'INFO_CONNEXION' : '连接信息'}
                </div>
                <div className="flex justify-between text-text/60">
                  <span>RESPONSE_TIME:</span>
                  <span className="text-primary">&lt;24H</span>
                </div>
                <div className="flex justify-between text-text/60">
                  <span>AVAILABILITY:</span>
                  <span className="text-primary">GLOBAL</span>
                </div>
                <div className="flex justify-between text-text/60">
                  <span>TIMEZONE:</span>
                  <span className="text-primary">UTC+0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Social links grid */}
          <div className="space-y-6">
            <div className="mono-text text-sm text-primary/60 mb-6">
              // {language === 'en' ? 'SOCIAL_NETWORK_PROTOCOLS' : language === 'fr' ? 'PROTOCOLES_RÉSEAUX_SOCIAUX' : '社交网络协议'}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card p-6 relative group/social transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className={`w-2 h-2 bg-${link.color} rounded-full animate-pulse`}></div>
                    <span className="text-xs text-primary/60 mono-text">ONLINE</span>
                  </div>

                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`}
                    style={{
                      boxShadow: `0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.1)`
                    }}
                  ></div>

                  <div className="relative flex items-center gap-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 border-2 border-${link.color} flex items-center justify-center text-${link.color} group-hover/social:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-shadow`}>
                      {link.icon}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold text-${link.color} cyber-title mb-1`}>
                        {link.label}
                      </h4>
                      <div className="mono-text text-xs text-text/40">
                        {link.command}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-primary/40 group-hover/social:text-primary group-hover/social:translate-x-2 transition-all">
                      <span className="text-2xl">→</span>
                    </div>
                  </div>

                  {/* Bottom progress line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 group-hover/social:bg-primary transition-colors duration-500"></div>
                </a>
              ))}
            </div>

            {/* Terminal command output */}
            <div className="cyber-card p-6 mt-8">
              <div className="mono-text text-xs space-y-2">
                <div className="text-primary/60">
                  <span className="text-secondary">&gt;</span> {language === 'en'
                    ? 'system.log: All communication channels active'
                    : language === 'fr'
                    ? 'system.log: Tous les canaux de communication actifs'
                    : 'system.log: 所有通信渠道已激活'}
                </div>
                <div className="text-accent/60">
                  <span className="text-secondary">&gt;</span> {language === 'en'
                    ? 'Awaiting connection request...'
                    : language === 'fr'
                    ? 'En attente de demande de connexion...'
                    : '等待连接请求...'}
                </div>
                <div className="flex items-center gap-2 text-text/40">
                  <span className="text-secondary">&gt;</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer terminal */}
        <div className="mt-20 max-w-4xl mx-auto cyber-card p-8">
          <div className="mono-text text-xs text-center space-y-4">
            <div className="text-primary/60">
              <span className="text-secondary">&gt;</span> {language === 'en'
                ? 'END_OF_TRANSMISSION'
                : language === 'fr'
                ? 'FIN_DE_TRANSMISSION'
                : '传输结束'}
            </div>
            <div className="text-text/40">
              {language === 'en'
                ? '© 2024 iLee-x. All rights reserved. Built with passion in the cybernet.'
                : language === 'fr'
                ? '© 2024 iLee-x. Tous droits réservés. Construit avec passion dans le cybernet.'
                : '© 2024 iLee-x. 保留所有权利。在赛博网络中充满激情地构建。'}
            </div>
            <div className="flex items-center justify-center gap-2 text-accent/60">
              <span className="text-secondary">&gt;</span>
              <span>SYSTEM_STATUS:</span>
              <span className="text-primary animate-pulse">OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
