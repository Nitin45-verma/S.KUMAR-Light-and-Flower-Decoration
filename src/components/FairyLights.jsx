import React, { useEffect, useRef } from 'react';

const FairyLights = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate 60 warm golden fairy lights
    const particleCount = 65;
    const particles = [];

    const colors = [
      'rgba(255, 243, 161, ',
      'rgba(245, 196, 81, ',
      'rgba(212, 175, 55, ',
      'rgba(255, 223, 120, '
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1.2,
        baseAlpha: Math.random() * 0.6 + 0.3,
        alpha: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move slightly
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Twinkle effect (fading in and out)
        p.alpha += p.twinkleSpeed * p.twinkleDirection;
        if (p.alpha >= 0.95) {
          p.alpha = 0.95;
          p.twinkleDirection = -1;
        } else if (p.alpha <= 0.15) {
          p.alpha = 0.15;
          p.twinkleDirection = 1;
        }

        // Draw glowing golden dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.colorPrefix + p.alpha + ')';
        ctx.shadowBlur = p.radius * 6;
        ctx.shadowColor = '#f5c451';
        ctx.fill();

        // Extra halo glow around bigger particles
        if (p.radius > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.colorPrefix + (p.alpha * 0.2) + ')';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full opacity-85"
    />
  );
};

export default FairyLights;
