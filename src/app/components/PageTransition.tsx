'use client';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { ScrollProgress } from './ScrollProgress';
import { ScrollVelocitySkew } from '@/components/ScrollVelocitySkew';

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <ScrollProgress />
      <ScrollVelocitySkew>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </ScrollVelocitySkew>
    </>
  );
}
