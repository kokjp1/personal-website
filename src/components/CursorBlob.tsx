'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorBlob() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

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

      {/* Custom cursor dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-50 hidden -translate-x-1/2 -translate-y-1/2 md:block"
        style={{ left: dotX, top: dotY }}
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
