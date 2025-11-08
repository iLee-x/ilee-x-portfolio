import React, { ReactNode } from 'react';

interface GradientBorderCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

const GradientBorderCard: React.FC<GradientBorderCardProps> = ({
  children,
  className = '',
  gradient = 'from-primary to-secondary'
}) => {
  return (
    <div className={`relative ${className} group`}>
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500 animate-gradient-rotate"></div>
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default GradientBorderCard;
