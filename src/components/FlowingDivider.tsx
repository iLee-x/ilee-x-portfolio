import React from 'react';

interface FlowingDividerProps {
  direction?: 'right' | 'left';
  color?: 'primary' | 'secondary' | 'accent';
}

const FlowingDivider: React.FC<FlowingDividerProps> = ({
  direction = 'right',
  color = 'primary'
}) => {
  const animationClass = direction === 'right' ? 'animate-flow-right' : 'animate-flow-left';
  const delayedClass = direction === 'right' ? 'animate-flow-right-delayed' : 'animate-flow-left-delayed';

  const colorClasses = {
    primary: 'via-primary shadow-neon-cyan',
    secondary: 'via-secondary shadow-neon-magenta',
    accent: 'via-accent shadow-neon-magenta',
  };

  const secondaryColors = {
    primary: 'via-secondary shadow-neon-magenta',
    secondary: 'via-accent shadow-neon-magenta',
    accent: 'via-primary shadow-neon-cyan',
  };

  return (
    <div className="relative w-full h-1 overflow-hidden my-8">
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${colorClasses[color]} to-transparent opacity-40`}></div>

      {/* Flowing lights */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${colorClasses[color]} to-transparent ${animationClass}`}></div>
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${secondaryColors[color]} to-transparent opacity-80 ${delayedClass}`}></div>

      {/* Glow layer */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm opacity-50 ${animationClass}`}></div>
    </div>
  );
};

export default FlowingDivider;
