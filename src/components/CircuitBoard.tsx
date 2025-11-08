import React, { useEffect, useRef } from 'react';

const CircuitBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawCircuit = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;

      const gridSize = 50;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Circuit paths
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.15)';
      ctx.lineWidth = 2;

      const drawPath = (startX: number, startY: number, segments: number) => {
        ctx.beginPath();
        ctx.moveTo(startX, startY);

        let currentX = startX;
        let currentY = startY;

        for (let i = 0; i < segments; i++) {
          const horizontal = Math.random() > 0.5;
          const length = gridSize * (Math.floor(Math.random() * 4) + 1);

          if (horizontal) {
            currentX += Math.random() > 0.5 ? length : -length;
          } else {
            currentY += Math.random() > 0.5 ? length : -length;
          }

          ctx.lineTo(currentX, currentY);

          // Draw connection nodes
          ctx.fillStyle = 'rgba(255, 0, 255, 0.3)';
          ctx.fillRect(currentX - 2, currentY - 2, 4, 4);
        }

        ctx.stroke();
      };

      // Draw multiple circuit paths
      for (let i = 0; i < 15; i++) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        drawPath(startX, startY, 5);
      }
    };

    drawCircuit();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawCircuit();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-30"
    />
  );
};

export default CircuitBoard;
