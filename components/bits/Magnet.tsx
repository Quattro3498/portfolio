'use client';

import React, { useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  magnetStrength?: number;
  className?: string;
}

/**
 * Adattamento di React Bits "Magnet": stessa idea, ma la posizione vive in
 * gsap.quickTo invece che in useState, quindi nessun re-render per ogni
 * movimento del mouse. Attivo solo con puntatore fine e motion consentito.
 */
const Magnet: React.FC<MagnetProps> = ({ children, padding = 80, magnetStrength = 3, className = '' }) => {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
        const el = wrap.current;
        const target = inner.current;
        if (!el || !target) return;
        const toX = gsap.quickTo(target, 'x', { duration: 0.5, ease: 'power3.out' });
        const toY = gsap.quickTo(target, 'y', { duration: 0.5, ease: 'power3.out' });

        const onMove = (e: MouseEvent) => {
          const { left, top, width, height } = el.getBoundingClientRect();
          const cx = left + width / 2;
          const cy = top + height / 2;
          const near = Math.abs(cx - e.clientX) < width / 2 + padding && Math.abs(cy - e.clientY) < height / 2 + padding;
          toX(near ? (e.clientX - cx) / magnetStrength : 0);
          toY(near ? (e.clientY - cy) / magnetStrength : 0);
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => {
          window.removeEventListener('mousemove', onMove);
          gsap.set(target, { x: 0, y: 0 });
        };
      });
    },
    { scope: wrap, dependencies: [padding, magnetStrength] }
  );

  return (
    <div ref={wrap} className={`relative inline-block ${className}`}>
      <div ref={inner} className="will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default Magnet;
