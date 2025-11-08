import { useEffect, useRef, useState } from 'react';

interface UseFadeInOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

type VisibilityState = 'above' | 'visible' | 'below';

export const useFadeInOnScroll = (options?: UseFadeInOnScrollOptions) => {
  const [visibilityState, setVisibilityState] = useState<VisibilityState>('below');
  const ref = useRef<HTMLDivElement>(null);

      useEffect(() => {
        // Check initial position with a small delay to ensure DOM is ready
        const checkInitialPosition = () => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const threshold = options?.threshold || 0.1;

            // More lenient initial check - show if any part is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              setVisibilityState('visible');
            } else if (rect.top < 0) {
              setVisibilityState('above');
            } else {
              setVisibilityState('below');
            }
          }
        };

        // Check immediately and after a short delay
        checkInitialPosition();
        const timeoutId = setTimeout(checkInitialPosition, 100);
  
        const observer = new IntersectionObserver(
          ([entry]) => {
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;
  
            if (entry.isIntersecting) {
              setVisibilityState('visible');
            } else {
              // Determine if element is above or below viewport
              if (rect.top < 0) {
                setVisibilityState('above');
              } else if (rect.top > windowHeight) {
                setVisibilityState('below');
              }
            }
          },
          {
            threshold: options?.threshold || 0.1,
            rootMargin: options?.rootMargin || '0px',
          }
        );
  
        const currentRef = ref.current; // Capture ref.current here
  
        if (currentRef) {
          observer.observe(currentRef);
        }
  
        return () => {
          clearTimeout(timeoutId);
          if (currentRef) { // Use the captured variable in cleanup
            observer.unobserve(currentRef);
          }
        };
      }, [options?.threshold, options?.rootMargin]);
  return { ref, visibilityState };
};
