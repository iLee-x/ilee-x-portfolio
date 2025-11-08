import React from 'react';

const VignetteOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(74, 44, 42, 0.3) 100%)',
        mixBlendMode: 'multiply'
      }}
    />
  );
};

export default VignetteOverlay;
