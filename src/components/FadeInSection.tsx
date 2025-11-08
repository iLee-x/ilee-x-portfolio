import React, { ReactNode } from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  duration?: number;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  threshold = 0.3,
  duration = 800,
  delay = 0,
}) => {
  const { ref, visibilityState } = useFadeInOnScroll({ threshold });

  // Determine transform and opacity based on visibility state
  let transform = 'translateX(0)';
  let opacity = 1;

  if (visibilityState === 'below') {
    // Section is below viewport - slide in from right
    transform = 'translateY(50px)';
    opacity = 0;
  } else if (visibilityState === 'above') {
    // Section is above viewport (scrolled past) - keep it visible
    transform = 'translateX(0)';
    opacity = 1;
  }

  return (
    <div
      ref={ref}
      style={{
        overflow: 'visible',
      }}
    >
      <div
        className={className}
        style={{
          opacity,
          transform,
          transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeInSection;
