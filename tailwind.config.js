/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'background-section': 'var(--color-background-section)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      animation: {
        'text-breathing': 'text-breathing 3s ease-in-out infinite',
        'breathing': 'breathing 2s ease-in-out infinite',
      },
      keyframes: {
        'text-breathing': {
          '0%, 100%': { textShadow: '0 0 15px rgba(192, 132, 252, 0.7), 0 0 30px rgba(192, 132, 252, 0.7)' },
          '50%': { textShadow: '0 0 30px rgba(192, 132, 252, 1), 0 0 60px rgba(192, 132, 252, 1)' },
        },
      },
    },
  },
  plugins: [],
}
