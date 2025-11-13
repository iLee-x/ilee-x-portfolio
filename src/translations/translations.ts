import { LanguageCode } from '../contexts/LanguageContext';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    languages: string;
    projects: string;
    visitors: string;
    contact: string;
  };
  hero: {
    name: string;
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
    softSkills: string;
  };
  languagesSection: {
    title: string;
    native: string;
    professional: string;
    intermediate: string;
    mandarin: string;
    english: string;
    french: string;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
    aiProjects: string;
    fullstackProjects: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  visitorsMap?: {
    title: string;
    subtitle: string;
    totalVisitors: string;
    uniqueLocations: string;
    totalVisits: string;
    countries: string;
    visitors: string;
  };
}

export const translations: Record<LanguageCode, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      languages: 'Languages',
      projects: 'Projects',
      visitors: 'Visitors',
      contact: 'Contact',
    },
    hero: {
      name: 'iLee-x',
      tagline: 'A Passionate Software Developer Crafting Modern Web Experiences.',
      cta: 'View My Work',
    },
    about: {
      title: 'About Me',
      paragraph1: "Hello! I'm a passionate software developer with a knack for creating elegant solutions in the least amount of time. I have experience in full-stack development, with a strong focus on backend technologies. I'm a quick learner and I'm always looking to expand my skillset.",
      paragraph2: "When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects. I'm currently looking for a challenging role where I can make a significant impact.",
    },
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools',
      softSkills: 'Soft Skills',
    },
    languagesSection: {
      title: 'Languages',
      native: 'Native',
      professional: 'Professional',
      intermediate: 'Intermediate',
      mandarin: 'Mandarin',
      english: 'English',
      french: 'French',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
      aiProjects: 'AI Projects',
      fullstackProjects: 'Full-Stack Projects',
    },
    contact: {
      title: 'Get In Touch',
      description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    visitorsMap: {
      title: 'Visitor Map',
      subtitle: 'See where my portfolio visitors are from around the world',
      totalVisitors: 'Total Visitors',
      uniqueLocations: 'Unique Locations',
      totalVisits: 'Total Visits',
      countries: 'Countries',
      visitors: 'visitors',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      skills: 'Compétences',
      languages: 'Langues',
      projects: 'Projets',
      visitors: 'Visiteurs',
      contact: 'Contact',
    },
    hero: {
      name: 'iLee-x',
      tagline: 'Un Développeur Passionné Créant des Expériences Web Modernes.',
      cta: 'Voir Mes Travaux',
    },
    about: {
      title: 'À Propos de Moi',
      paragraph1: "Bonjour ! Je suis un développeur passionné avec un talent pour créer des solutions élégantes dans les plus brefs délais. J'ai de l'expérience en développement full-stack, avec un accent particulier sur les technologies backend. J'apprends rapidement et je cherche toujours à élargir mes compétences.",
      paragraph2: "Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies, de lire des blogs techniques ou de contribuer à des projets open-source. Je recherche actuellement un poste stimulant où je peux avoir un impact significatif.",
    },
    skills: {
      title: 'Compétences',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Outils',
      softSkills: 'Compétences Interpersonnelles',
    },
    languagesSection: {
      title: 'Langues',
      native: 'Langue Maternelle',
      professional: 'Professionnel',
      intermediate: 'Intermédiaire',
      mandarin: 'Mandarin',
      english: 'Anglais',
      french: 'Français',
    },
    projects: {
      title: 'Projets',
      viewProject: 'Voir le Projet',
      viewCode: 'Voir le Code',
      aiProjects: 'Projets IA',
      fullstackProjects: 'Projets Full-Stack',
    },
    contact: {
      title: 'Contactez-Moi',
      description: "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de faire partie de votre vision.",
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    visitorsMap: {
      title: 'Carte des Visiteurs',
      subtitle: 'Découvrez d\'où viennent les visiteurs de mon portfolio dans le monde',
      totalVisitors: 'Total des Visiteurs',
      uniqueLocations: 'Emplacements Uniques',
      totalVisits: 'Visites Totales',
      countries: 'Pays',
      visitors: 'visiteurs',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      skills: '技能',
      languages: '语言',
      projects: '项目',
      visitors: '访客',
      contact: '联系',
    },
    hero: {
      name: 'iLee-x',
      tagline: '热衷于打造现代网络体验的软件开发者。',
      cta: '查看作品',
    },
    about: {
      title: '关于我',
      paragraph1: '你好！我是一名充满热情的软件开发者，擅长在最短时间内创建优雅的解决方案。我在全栈开发方面有丰富的经验，特别专注于后端技术。我学习能力强，总是在寻求扩展我的技能。',
      paragraph2: '当我不在编码时，你可以看到我在探索新技术、阅读技术博客或为开源项目做贡献。我目前正在寻找一个具有挑战性的职位，在那里我可以产生重大影响。',
    },
    skills: {
      title: '技能',
      frontend: '前端',
      backend: '后端',
      tools: '工具',
      softSkills: '软技能',
    },
    languagesSection: {
      title: '语言能力',
      native: '母语',
      professional: '专业水平',
      intermediate: '中级',
      mandarin: '普通话',
      english: '英语',
      french: '法语',
    },
    projects: {
      title: '项目',
      viewProject: '查看项目',
      viewCode: '查看代码',
      aiProjects: 'AI 项目',
      fullstackProjects: '全栈项目',
    },
    contact: {
      title: '联系我',
      description: '我随时欢迎讨论新项目、创意想法或成为您愿景的一部分的机会。',
      email: '邮箱',
      phone: '电话',
      location: '位置',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    visitorsMap: {
      title: '访客地图',
      subtitle: '查看我的作品集访客来自世界各地',
      totalVisitors: '总访客数',
      uniqueLocations: '独特位置',
      totalVisits: '总访问量',
      countries: '国家',
      visitors: '访客',
    },
  },
};

export const getTranslations = (language: LanguageCode): Translations => {
  return translations[language];
};
