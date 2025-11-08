import React from 'react';

const GoldenHourOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        background: 'linear-gradient(to bottom, rgba(255, 215, 0, 0.1) 0%, rgba(255, 182, 193, 0.15) 50%, rgba(255, 140, 105, 0.1) 100%)',
        mixBlendMode: 'overlay'
      }}
    />
  );
};

export default GoldenHourOverlay;
