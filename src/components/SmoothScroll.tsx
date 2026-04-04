'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let animFrame: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any;

    const init = async () => {
      const Lenis = (await import('lenis')).default;
      lenis = new Lenis({ duration: 1.2, smoothWheel: true });

      const raf = (time: number) => {
        lenis.raf(time);
        animFrame = requestAnimationFrame(raf);
      };
      animFrame = requestAnimationFrame(raf);
    };

    init();
    return () => {
      cancelAnimationFrame(animFrame);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
