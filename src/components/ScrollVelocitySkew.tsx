'use client';

import { motion, useScroll, useVelocity, useTransform, useSpring } from 'motion/react';
import type { ReactNode } from 'react';

export function ScrollVelocitySkew({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skewRaw = useTransform(velocity, [-2500, 0, 2500], [-2.5, 0, 2.5]);
  const skew = useSpring(skewRaw, { stiffness: 300, damping: 60, restDelta: 0.001 });

  return <motion.div style={{ skewY: skew }}>{children}</motion.div>;
}
