import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const cursorSize = isHovering ? 48 : 32;
  const offset = cursorSize / 2;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200"
      style={{
        transform: `translate(${position.x - offset}px, ${position.y - offset}px)`,
      }}
    >
      {/* Center dot */}
      <div
        className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full transition-all duration-200 ${
          isClicking ? 'bg-secondary' : 'bg-primary'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 10px ${isClicking ? '#ff00ff' : '#00ffff'}, 0 0 20px ${isClicking ? '#ff00ff' : '#00ffff'}`,
        }}
      />

      {/* Crosshair lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Horizontal line */}
        <div
          className={`absolute h-px ${isClicking ? 'bg-secondary' : 'bg-primary'} transition-all duration-200`}
          style={{
            width: `${cursorSize}px`,
            left: `-${cursorSize / 2}px`,
            top: '0',
            boxShadow: `0 0 5px ${isClicking ? '#ff00ff' : '#00ffff'}`,
          }}
        />
        {/* Vertical line */}
        <div
          className={`absolute w-px ${isClicking ? 'bg-secondary' : 'bg-primary'} transition-all duration-200`}
          style={{
            height: `${cursorSize}px`,
            top: `-${cursorSize / 2}px`,
            left: '0',
            boxShadow: `0 0 5px ${isClicking ? '#ff00ff' : '#00ffff'}`,
          }}
        />
      </div>

      {/* Corner brackets - Top Left */}
      <div
        className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-all duration-200 ${
          isClicking ? 'border-secondary' : 'border-primary'
        }`}
        style={{
          boxShadow: `0 0 5px ${isClicking ? '#ff00ff' : '#00ffff'}`,
        }}
      />

      {/* Corner brackets - Top Right */}
      <div
        className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 transition-all duration-200 ${
          isClicking ? 'border-secondary' : 'border-primary'
        }`}
        style={{
          boxShadow: `0 0 5px ${isClicking ? '#ff00ff' : '#00ffff'}`,
        }}
      />

      {/* Corner brackets - Bottom Left */}
      <div
        className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 transition-all duration-200 ${
          isClicking ? 'border-secondary' : 'border-primary'
        }`}
        style={{
          boxShadow: `0 0 5px ${isClicking ? '#ff00ff' : '#00ffff'}`,
        }}
      />

      {/* Corner brackets - Bottom Right */}
      <div
        className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-all duration-200 ${
          isClicking ? 'border-secondary' : 'border-primary'
        }`}
        style={{
          boxShadow: `0 0 5px ${isClicking ? '#ff00ff' : '#00ffff'}`,
        }}
      />

      {/* Outer ring */}
      <div
        className={`absolute inset-0 rounded-full border transition-all duration-200 ${
          isHovering ? 'opacity-100 scale-110' : 'opacity-60'
        } ${isClicking ? 'border-secondary' : 'border-primary'}`}
        style={{
          boxShadow: `0 0 10px ${isClicking ? '#ff00ff' : '#00ffff'}, inset 0 0 10px ${isClicking ? '#ff00ff' : '#00ffff'}`,
        }}
      />

      {/* Pulse ring when hovering */}
      {isHovering && (
        <div
          className={`absolute inset-0 rounded-full border-2 animate-ping ${
            isClicking ? 'border-secondary' : 'border-primary'
          }`}
          style={{
            opacity: 0.3,
          }}
        />
      )}

      {/* Scanning line */}
      <div
        className={`absolute left-0 right-0 h-px ${isClicking ? 'bg-secondary' : 'bg-primary'} animate-scan-cursor`}
        style={{
          opacity: 0.3,
          boxShadow: `0 0 5px ${isClicking ? '#ff00ff' : '#00ffff'}`,
        }}
      />

      {/* CSS for cursor scan animation */}
      <style>
        {`
          @keyframes scan-cursor {
            0% { top: 0; }
            50% { top: 100%; }
            100% { top: 0; }
          }
          .animate-scan-cursor {
            animation: scan-cursor 2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CustomCursor;
