import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { theme, toggleTheme } = context;

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-background-section text-text cursor-pointer">
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;
