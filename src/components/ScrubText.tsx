'use client';

/**
 * ScrubText — scroll-driven word-by-word reveal components.
 *
 * Each word animates from dim/offset to full opacity+position as you scroll
 * the element toward the center of the viewport. Uses absolute scroll position
 * measurement so it works correctly for any element on the page, including
 * those already in the initial viewport.
 */

import { useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValue, useTransform, type MotionValue } from 'motion/react';

/* -------------------------------------------------------------------------- */
/*                               Shared internals                             */
/* -------------------------------------------------------------------------- */

function useScrubProgress(ref: React.RefObject<HTMLElement | null>) {
  const { scrollY } = useScroll();
  const progress = useMotionValue(0);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      // Absolute doc-top position (stable regardless of current scroll)
      const elTop = el.getBoundingClientRect().top + scrollY.get();
      const vh = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - vh;
      const start = Math.max(0, elTop - vh * 0.82);
      const end = Math.min(Math.max(start + 1, elTop - vh * 0.28), maxScroll);
      const p = (scrollY.get() - start) / (end - start);
      progress.set(Math.max(0, Math.min(1, p)));
    };
    compute();
    return scrollY.on('change', compute);
  }, [scrollY, progress, ref]);

  return progress;
}

function ScrubWord({
  word,
  scrollYProgress,
  index,
  total,
}: {
  word: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / (total + 1);
  const end = Math.min((index + 1.6) / (total + 1), 1);
  const opacity = useTransform(scrollYProgress, [start, end], [0.08, 1]);
  const y = useTransform(scrollYProgress, [start, end], ['6px', '0px']);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.23em] inline-block will-change-transform">
      {word}
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Public exports                               */
/* -------------------------------------------------------------------------- */

/** h2 whose words scrub in as you scroll toward it. */
export function ScrubHeading({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const progress = useScrubProgress(ref as React.RefObject<HTMLElement | null>);
  const words = text.split(' ');
  return (
    <h2 ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <ScrubWord key={i} word={word} scrollYProgress={progress} index={i} total={words.length} />
      ))}
    </h2>
  );
}

/**
 * <p> whose words scrub in as you scroll toward it.
 * Only use with plain-string children — no JSX mixed in.
 */
export function ScrubParagraph({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const progress = useScrubProgress(ref as React.RefObject<HTMLElement | null>);
  const words = text.split(' ');
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <ScrubWord key={i} word={word} scrollYProgress={progress} index={i} total={words.length} />
      ))}
    </p>
  );
}
