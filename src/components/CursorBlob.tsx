'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorBlob() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const blobX = useSpring(mouseX, { stiffness: 50, damping: 20, restDelta: 0.001 });
  const blobY = useSpring(mouseY, { stiffness: 50, damping: 20, restDelta: 0.001 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
      style={{ left: blobX, top: blobY }}
    >
      <div className="h-[500px] w-[500px] rounded-full bg-blue-500 opacity-[0.055] blur-[100px] dark:opacity-[0.08]" />
    </motion.div>
  );
}
