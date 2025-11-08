# Cyberpunk Portfolio Template 🌃

A stunning, fully-responsive cyberpunk-themed portfolio website built with React, TypeScript, and Tailwind CSS. Features mesmerizing animations, neon glows, matrix rain effects, and a futuristic design that will make your portfolio stand out.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8.svg)

## 📺 Demo

![Cyberpunk Portfolio Demo](./demo.gif)

**Live Demo:** [https://iLee-x.github.io/ilee-x-portfolio](https://iLee-x.github.io/ilee-x-portfolio)

> **Note:** To add your own demo GIF, record your portfolio using a screen recorder and save it as `demo.gif` in the root directory.

## ✨ Features

### 🎨 Cyberpunk Visual Effects
- **Matrix Rain Background** - Cascading code characters creating that iconic cyberpunk atmosphere
- **Circuit Board Patterns** - Animated electronic circuit aesthetics
- **Neon Glow Effects** - Vibrant cyan, magenta, and yellow neon accents throughout
- **Scanline Overlay** - Retro CRT monitor scanline effects
- **Glitch Effects** - Subtle glitch animations on hover and interactions
- **Custom Cyberpunk Cursor** - Interactive custom cursor with glow trail
- **Film Grain Texture** - Adds depth and authentic retro-tech feel
- **Golden Hour Overlay** - Atmospheric lighting effects
- **Vignette Effects** - Professional depth and focus

### 🌍 Multi-Language Support
- **English** - Full English translation
- **French** - Complete French localization
- **Chinese (Mandarin)** - Full Chinese support
- Persistent language selection stored in browser

### 🎭 Theme System
- **Dark Mode** - Sleek dark cyberpunk theme with neon accents
- **Light Mode** - Clean, modern light theme
- Smooth transitions between themes
- System preference detection

### 📱 Fully Responsive
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Adaptive layouts for phones, tablets, and desktops

### 🎯 Sections
1. **Hero** - Eye-catching intro with typing animation and glitch effects
2. **About** - Personal introduction with cyberpunk cards
3. **Skills** - Organized skill categories with hover effects
4. **Projects** - Showcase your work with featured project highlighting
5. **Languages** - Display language proficiencies
6. **Interests** - Share your hobbies and interests
7. **Contact** - Easy-to-reach contact information with social links

### 🚀 Performance Features
- Intersection Observer API for smooth scroll animations
- Optimized bundle size with code splitting
- Lazy loading for better performance
- Custom hooks for efficient re-renders
- TypeScript for type safety and better DX

## 🛠 Tech Stack

### Core Technologies
- **React 19.2** - Latest React with improved performance
- **TypeScript 4.9** - Type-safe development
- **Tailwind CSS 3.0** - Utility-first styling
- **Lucide React** - Beautiful, consistent icons

### Development Tools
- **React Scripts 5.0** - Zero-config build setup
- **PostCSS** - CSS transformations
- **Autoprefixer** - Cross-browser compatibility
- **gh-pages** - Seamless GitHub Pages deployment

## 📁 Project Structure

```
cyberpunk-portfolio/
├── public/
│   ├── index.html
│   ├── Apple_JingAn_Wallpaper_Mac.jpg
│   ├── Hanam_MacBook.png
│   └── TRX_Mac_V2.png
├── src/
│   ├── components/
│   │   ├── About.tsx                  # About section
│   │   ├── AnimatedBackground.tsx     # Background effects
│   │   ├── BokehBackground.tsx        # Bokeh light effects
│   │   ├── CircuitBoard.tsx           # Circuit board pattern
│   │   ├── Contact.tsx                # Contact section
│   │   ├── CustomCursor.tsx           # Custom cursor
│   │   ├── FadeInSection.tsx          # Scroll animations
│   │   ├── FilmGrain.tsx              # Film grain overlay
│   │   ├── FloatingPetals.tsx         # Floating particles
│   │   ├── GlitchOverlay.tsx          # Glitch effects
│   │   ├── GoldenHourOverlay.tsx      # Lighting effects
│   │   ├── Hero.tsx                   # Hero section
│   │   ├── Interests.tsx              # Interests section
│   │   ├── LanguageSelector.tsx       # Language switcher
│   │   ├── Languages.tsx              # Languages section
│   │   ├── MatrixRain.tsx             # Matrix rain effect
│   │   ├── NavigationBar.tsx          # Navigation
│   │   ├── Projects.tsx               # Projects showcase
│   │   ├── Scanlines.tsx              # CRT scanlines
│   │   ├── Skills.tsx                 # Skills section
│   │   ├── ThemeContext.tsx           # Theme management
│   │   ├── ThemeSwitcher.tsx          # Theme toggle
│   │   ├── TiltCard.tsx               # 3D tilt effect cards
│   │   ├── TypingEffect.tsx           # Typing animation
│   │   └── VignetteOverlay.tsx        # Vignette effect
│   ├── contexts/
│   │   └── LanguageContext.tsx        # Language state management
│   ├── hooks/
│   │   └── useFadeInOnScroll.ts       # Scroll detection hook
│   ├── translations/
│   │   └── translations.ts            # Multi-language content
│   ├── App.tsx                        # Main app component
│   ├── App.css                        # Global styles
│   ├── index.tsx                      # Entry point
│   └── index.css                      # Base CSS
├── tailwind.config.js                  # Tailwind configuration
├── postcss.config.js                   # PostCSS config
├── tsconfig.json                       # TypeScript config
└── package.json                        # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iLee-x/ilee-x-portfolio.git
   cd ilee-x-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm build` | Create production build |
| `npm test` | Run tests |
| `npm run deploy` | Deploy to GitHub Pages |

## 🎨 Customization Guide

### 1. Personal Information

**Update About Section**
```typescript
// src/components/About.tsx
// Edit your bio, introduction, and personal details
```

**Update Projects**
```typescript
// src/components/Projects.tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    image: 'project-image.jpg',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/username/repo',
    featured: true,
    category: 'AI', // or 'FULLSTACK', 'BACKEND'
    status: 'DEPLOYED' // or 'ACTIVE', 'BETA'
  }
];
```

**Update Skills**
```typescript
// src/components/Skills.tsx
// Modify your skills by category
```

**Update Contact Info**
```typescript
// src/components/Contact.tsx
// Add your email, phone, location, GitHub, LinkedIn
```

### 2. Theme Colors

Edit `tailwind.config.js` to customize the cyberpunk color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#00ffff',      // Cyan
        secondary: '#ff00ff',    // Magenta
        accent: '#ffff00',       // Yellow
        background: '#0a0a0a',   // Dark background
        surface: '#1a1a1a',      // Surface color
        text: '#ffffff',         // Text color
      }
    }
  }
}
```

### 3. Translations

Add or modify translations in `src/translations/translations.ts`:

```typescript
export const translations: Record<LanguageCode, Translations> = {
  en: {
    nav: { home: 'Home', about: 'About', /* ... */ },
    hero: { /* ... */ },
    // Add more translations
  },
  // Add more languages
};
```

### 4. Visual Effects

Toggle effects in `src/App.tsx`:

```typescript
// Enable/disable effects by commenting out
<MatrixRain />        // Matrix rain background
<CircuitBoard />      // Circuit board pattern
<Scanlines />         // CRT scanlines
<GlitchOverlay />     // Glitch effects
<CustomCursor />      // Custom cursor
```

### 5. Animation Settings

Adjust scroll animation in `src/components/FadeInSection.tsx`:

```typescript
threshold={0.3}     // Visibility threshold (0-1)
duration={800}      // Animation duration (ms)
delay={0}           // Animation delay (ms)
```

## 📦 Deployment

### Deploy to GitHub Pages

1. **Update homepage in `package.json`**
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```

2. **Build and deploy**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to your repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Click Save

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Deploy to Other Platforms

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

## 🎬 Creating a Demo GIF

1. **Install a screen recorder:**
   - [LICEcap](https://www.cockos.com/licecap/) (Free, Windows/Mac)
   - [Kap](https://getkap.co/) (Free, Mac)
   - [ScreenToGif](https://www.screentogif.com/) (Free, Windows)

2. **Record your portfolio:**
   - Start at the top of the page
   - Slowly scroll through all sections
   - Show theme switching
   - Show language switching
   - Interact with some elements

3. **Optimize the GIF:**
   - Keep it under 10MB for GitHub
   - Use 10-15 FPS for smooth playback
   - Resize to 1200px width max

4. **Save as `demo.gif` in the root directory**

## 🌟 Key Features Explained

### Matrix Rain Effect
Cascading characters in the background create that iconic cyberpunk/Matrix aesthetic. Fully customizable speed and density.

### Custom Cursor
Interactive cursor that follows your mouse with a glowing trail effect, enhancing the futuristic feel.

### Circuit Board Background
Animated electronic circuit patterns that pulse and glow, adding technical sophistication.

### Multi-Language System
Complete internationalization support with easy-to-add languages. User preferences are saved in localStorage.

### Project Categorization
Projects are automatically organized by category (AI, Full-Stack, Backend) with featured project highlighting.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💖 Support & Sponsorship

If you find this project helpful and want to support its development:

- ⭐ **Star this repository** - It helps others discover this project
- 🐛 **Report bugs** - Help improve the project
- 💡 **Suggest features** - Share your ideas
- 💰 **Sponsor** - Support ongoing development

### Sponsor Options

If you'd like to sponsor this project:
- **GitHub Sponsors** - [Sponsor on GitHub](https://github.com/sponsors/iLee-x) (Setup required)
- **Buy Me a Coffee** - Support with a one-time donation
- **PayPal** - Direct donations

Your support helps maintain and improve this template for everyone! 🙏

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 iLee-x

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Inspired by cyberpunk aesthetics and futuristic design
- Built with modern web technologies
- Icons from [Lucide Icons](https://lucide.dev/)
- Fonts from Google Fonts

## 📞 Contact

**iLee-x**
- GitHub: [@iLee-x](https://github.com/iLee-x)
- Portfolio: [https://iLee-x.github.io/ilee-x-portfolio](https://iLee-x.github.io/ilee-x-portfolio)

**Project Link:** [https://github.com/iLee-x/ilee-x-portfolio](https://github.com/iLee-x/ilee-x-portfolio)

---

Made with 💙 by iLee-x | Star ⭐ this repo if you found it helpful!
