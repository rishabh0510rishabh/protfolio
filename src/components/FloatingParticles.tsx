"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const colors = [
      "79, 156, 249",  // primary blue
      "0, 255, 198",   // secondary cyan
      "167, 139, 250",  // accent purple
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      // Fewer particles on mobile for perf
      const count = window.innerWidth < 768 ? 25 : 50;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.2 - 0.1,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.05,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawConnections = (p: Particle, i: number) => {
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(79, 156, 249, ${0.04 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        // Wrap around
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity * p.z})`;
        ctx.fill();

        // Draw subtle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.z * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity * 0.15 * p.z})`;
        ctx.fill();

        // Draw connections (only on desktop for perf)
        if (window.innerWidth >= 768) {
          drawConnections(p, i);
        }
      });

      animId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
