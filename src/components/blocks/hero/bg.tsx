'use client';

import { useEffect, useRef } from 'react';

function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle with Silksong color
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = '#D76A2C'; // Silksong primary color
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  );
}

export default function Bg() {
  return (
    <>
      {/* Dark atmospheric background */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Subtle gradient overlay for depth */}
      <div className="fixed inset-0 -z-40 bg-gradient-to-t from-amber-900/10 via-transparent to-slate-900/20" />
      
      {/* Particle system */}
      <ParticleSystem />
      
      {/* Ornamental patterns inspired by Hollow Knight */}
      <div className="fixed inset-0 -z-30 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, rgba(215, 106, 44, 0.3) 0%, transparent 2%),
                 radial-gradient(circle at 75% 75%, rgba(215, 106, 44, 0.2) 0%, transparent 1%)
               `,
               backgroundSize: '100px 100px'
             }} />
      </div>
      
      {/* Subtle vignette effect */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
    </>
  );
}