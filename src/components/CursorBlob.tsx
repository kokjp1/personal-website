'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorBlob() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [dotVisible, setDotVisible] = useState(true);

  // Blob — drifts lazily behind the cursor
  const blobX = useSpring(mouseX, { stiffness: 50, damping: 20, restDelta: 0.001 });
  const blobY = useSpring(mouseY, { stiffness: 50, damping: 20, restDelta: 0.001 });

  // Dot — exact cursor position, zero lag
  const dotX = mouseX;
  const dotY = mouseY;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  // Hide dot when inside a CursorProvider zone (animated cursor takes over)
  useEffect(() => {
    const getZones = () =>
      document.querySelectorAll<HTMLElement>('[data-slot="cursor-provider"]');

    const hide = () => setDotVisible(false);
    const show = () => setDotVisible(true);

    const attach = () => {
      getZones().forEach(el => {
        el.removeEventListener('mouseenter', hide);
        el.removeEventListener('mouseleave', show);
        el.addEventListener('mouseenter', hide);
        el.addEventListener('mouseleave', show);
      });
    };

    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      getZones().forEach(el => {
        el.removeEventListener('mouseenter', hide);
        el.removeEventListener('mouseleave', show);
      });
    };
  }, []);

  return (
    <>
      {/* Original circular blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
        style={{ left: blobX, top: blobY }}
      >
        <div className="h-[500px] w-[500px] rounded-full bg-[#00ff73] opacity-[0.055] blur-[100px] dark:opacity-[0.08]" />
      </motion.div>

      {/* Custom cursor dot — hidden inside CursorProvider zones */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] hidden -translate-x-1/2 -translate-y-1/2 md:block"
        style={{ left: dotX, top: dotY }}
        animate={{ opacity: dotVisible ? 1 : 0, scale: dotVisible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 11,
            height: 11,
            background: '#00ff73',
            opacity: 0.9,
            boxShadow: '0 0 8px 2px rgba(0,255,115,0.35)',
          }}
        />
      </motion.div>
    </>
  );
}
