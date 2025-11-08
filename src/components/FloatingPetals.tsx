import React, { useEffect, useRef } from 'react';

const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      color: string;
    }

    const petals: Petal[] = [];
    const petalColors = [
      'rgba(255, 182, 193, ',  // Light pink
      'rgba(255, 192, 203, ',  // Pink
      'rgba(255, 218, 224, ',  // Misty rose
      'rgba(255, 160, 180, ',  // Rose pink
      'rgba(255, 200, 210, ',  // Light rose
    ];

    // Create petals
    for (let i = 0; i < 20; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 15 + 8,
        speedY: Math.random() * 0.5 + 0.3,
        speedX: Math.random() * 0.5 - 0.25,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.02 - 0.01,
        opacity: Math.random() * 0.4 + 0.3,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
      });
    }

    let animationFrameId: number;

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      // Draw heart-shaped petal
      ctx.beginPath();
      ctx.moveTo(0, petal.size / 4);

      // Left curve
      ctx.bezierCurveTo(
        -petal.size / 2, -petal.size / 4,
        -petal.size / 2, petal.size / 2,
        0, petal.size
      );

      // Right curve
      ctx.bezierCurveTo(
        petal.size / 2, petal.size / 2,
        petal.size / 2, -petal.size / 4,
        0, petal.size / 4
      );

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, petal.size);
      gradient.addColorStop(0, `${petal.color}${petal.opacity})`);
      gradient.addColorStop(1, `${petal.color}${petal.opacity * 0.3})`);

      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((petal) => {
        // Update position
        petal.y += petal.speedY;
        petal.x += petal.speedX + Math.sin(petal.y * 0.01) * 0.5;
        petal.rotation += petal.rotationSpeed;

        // Reset if out of bounds
        if (petal.y > canvas.height + petal.size) {
          petal.y = -petal.size;
          petal.x = Math.random() * canvas.width;
        }

        if (petal.x > canvas.width + petal.size) {
          petal.x = -petal.size;
        } else if (petal.x < -petal.size) {
          petal.x = canvas.width + petal.size;
        }

        drawPetal(petal);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.7 }}
    />
  );
};

export default FloatingPetals;
