'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export function SmoothScroll({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    let animFrame: number;

    const init = async () => {
      const Lenis = (await import('lenis')).default;
      lenisRef.current = new Lenis({ duration: 1.2, smoothWheel: true });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        animFrame = requestAnimationFrame(raf);
      };
      animFrame = requestAnimationFrame(raf);
    };

    init();
    return () => {
      cancelAnimationFrame(animFrame);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll momentum on route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
