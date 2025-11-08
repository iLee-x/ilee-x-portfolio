import React, { useEffect, useRef } from 'react';

const BokehBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface BokehCircle {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      pulsePhase: number;
    }

    const bokehCircles: BokehCircle[] = [];
    // Romantic golden hour colors
    const colors = [
      'rgba(255, 215, 0, ',    // Gold
      'rgba(255, 182, 193, ',  // Light pink
      'rgba(255, 192, 203, ',  // Pink
      'rgba(255, 218, 185, ',  // Peach
      'rgba(245, 222, 179, ',  // Wheat/cream
      'rgba(255, 239, 213, ',  // Papaya whip
      'rgba(255, 228, 181, ',  // Moccasin
    ];

    // Create bokeh circles
    for (let i = 0; i < 30; i++) {
      bokehCircles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.015 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      bokehCircles.forEach((circle) => {
        // Update position
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        // Wrap around screen
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius;
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius;
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius;
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius;

        // Pulsing opacity
        const pulsingOpacity = circle.opacity + Math.sin(time * circle.pulseSpeed + circle.pulsePhase) * 0.15;

        // Create romantic bokeh effect with soft gradient
        const gradient = ctx.createRadialGradient(
          circle.x,
          circle.y,
          0,
          circle.x,
          circle.y,
          circle.radius
        );

        gradient.addColorStop(0, `${circle.color}${pulsingOpacity})`);
        gradient.addColorStop(0.4, `${circle.color}${pulsingOpacity * 0.7})`);
        gradient.addColorStop(0.7, `${circle.color}${pulsingOpacity * 0.3})`);
        gradient.addColorStop(1, `${circle.color}0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
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
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: 0.5,
        filter: 'blur(30px)',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default BokehBackground;
