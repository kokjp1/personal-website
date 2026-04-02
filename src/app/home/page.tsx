'use client';

/* -------------------------------------------------------------------------- */
/*                            Imports/types/consts                            */
/* -------------------------------------------------------------------------- */
import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';
import { Cursor, CursorFollow, CursorProvider } from '@/components/ui/shadcn-io/animated-cursor';
import { Button } from '@/components/ui/button';
import { TOOLS, GROUP_LABEL, GROUP_COLOR, ToolBadge, type ToolGroup } from '@/components/content/ToolBadge';
import { projectMeta } from "@/data/projects/registry";
import { toast } from 'sonner';
import type { StaticImageData } from 'next/image';

// --- Define which slugs appear in the bento + their layout
const FEATURED_LAYOUT: Record<
  string,
  { colSpan: string; rowSpan: string }
> = {
  // listral: { colSpan: "md:col-span-2", rowSpan: "row-span-2" },
  boekenzoeker: { colSpan: "md:col-span-2", rowSpan: "row-span-1" },
  // "personalprojects": { colSpan: "md:col-span-2", rowSpan: "row-span-1" },
  sonora: { colSpan: "md:col-span-4", rowSpan: "row-span-1" },
  onyx: { colSpan: "md:col-span-4", rowSpan: "row-span-2" },
  minor: { colSpan: "md:col-span-2", rowSpan: "row-span-2" },
};

// --- Order for displays
const FEATURED_ORDER = [
  // "listral",
  "boekenzoeker",
  // "personalprojects",
  "sonora",
  "onyx",
  "minor",
] as const;

// --- Build projects array from registry meta
interface FeaturedProject {
  title: string;
  href: string;
  cover?: StaticImageData;
  alt: string;
  colSpan: string;
  rowSpan: string;
}

// Build first, then narrow (avoid type conflict + bad predicate error)
const rawFeatured: (FeaturedProject | null)[] = FEATURED_ORDER.map(slug => {
  const meta = projectMeta.find(m => m.slug === slug);
  if (!meta) return null;
  const layout = FEATURED_LAYOUT[slug];
  return {
    title: meta.title,
    href: `/projects/${meta.slug}`,
    cover: meta.cover,          // StaticImageData | undefined
    alt: `${meta.title} cover`,
    colSpan: layout.colSpan,
    rowSpan: layout.rowSpan,
  } satisfies FeaturedProject;
});

const featuredProjects: FeaturedProject[] = rawFeatured.filter(
  (p): p is FeaturedProject => p !== null
);

/* -------------------------------------------------------------------------- */
/*                             Animation variants                             */
/* -------------------------------------------------------------------------- */

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const bentoContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const bentoItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  const [activeGroup, setActiveGroup] = useState<ToolGroup | null>(null);
  const [activeMobileProject, setActiveMobileProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const projectRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

  // Contact form state (Web3Forms)
  const [formResult, setFormResult] = React.useState<string>('');
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const setFlag = () => setIsMobile(mq.matches);
    setFlag();
    mq.addEventListener('change', setFlag);
    return () => mq.removeEventListener('change', setFlag);
  }, []);

  React.useEffect(() => {
    if (!isMobile) {
      setActiveMobileProject(null);
      return;
    }

    let ticking = false;

    const calc = () => {
      ticking = false;
      const viewportCenter = window.innerHeight / 2;
      let bestIdx: number | null = null;
      let bestDist = Infinity;

      projectRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Only consider if at least partially in view
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      if (bestIdx !== null && bestIdx !== activeMobileProject) {
        setActiveMobileProject(bestIdx);
      }
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(calc);
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    // Initial run (next frame to ensure layout settled)
    requestAnimationFrame(calc);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [isMobile, activeMobileProject]);

  // Helper for cursor text color (replaces old GROUP_TEXT constant)
  const activeCursorText = activeGroup ? GROUP_COLOR[activeGroup].text : 'text-blue-500';

  // ---------------------------------------------------------------------------
  // Contact form submit logic (Web3Forms + toast feedback)
  // ---------------------------------------------------------------------------
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setFormResult('Sending…');

    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    formData.append('access_key', 'e8fb077c-fe4d-4380-8146-6c1759cc238c');

    // Toast: loading
    const toastId = toast.loading('Sending…', { position: 'bottom-center' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setFormResult('Form submitted successfully.');
        toast.success('Message sent', {
          id: toastId,
          description: 'Thanks! I will get back to you soon.',
          position: 'bottom-center',
        });
        target.reset();
      } else {
        console.log('Error', data);
        setFormResult(data.message || 'Something went wrong.');
        toast.error('Send failed', {
          id: toastId,
          description: data.message || 'Please try again.',
          position: 'bottom-center',
        });
      }
    } catch (err) {
      console.error(err);
      setFormResult('Network error. Please try again.');
      toast.error('Network error', {
        id: toastId,
        description: 'Please check your connection.',
        position: 'bottom-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* -------------------------------------------------------------------------- */
    /*                                   Intro                                    */
    /* -------------------------------------------------------------------------- */

    <main className="flex flex-col gap-12 px-5 md:px-8">
      {/* Hero — staggered entrance on load */}
      <motion.section
        className="flex max-w-screen-md flex-col gap-4"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={heroItem} className="text-xl font-semibold tracking-tight">james kok</motion.h1>
        <motion.h2 variants={heroItem} className="mb-6 text-sm">CMD student · Learning frontend design & development</motion.h2>
        <motion.p variants={heroItem} className="text-sm">
          Welcome to my portfolio. I am a 19 year old Student at the Amsterdam University of Applied Sciences
          (AUAS/HvA). Currently I'm studying Communication & Multimedia Design (CMD).
        </motion.p>
        <motion.p variants={heroItem} className="text-sm">
          I am interested in design, technology, interfaces and programming. What you find here is a mix of school
          projects and personal work. I work across the full design-to-code pipeline — from UX research and UI design to frontend development.
        </motion.p>
      </motion.section>

      {/* --------------------------------------------------------------------------
    /                         Project bento section                              /
     -------------------------------------------------------------------------- */}

      <section aria-label="Featured projects">
        <motion.h2
          className="mb-4 text-lg font-semibold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          featured projects
        </motion.h2>

        {/* Bento grid — staggered scroll entrance */}
        <motion.div
          className="grid auto-rows-[8rem] grid-cols-1 gap-4 md:auto-rows-[10rem] md:grid-cols-6"
          variants={bentoContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProjects.map((p, i) => {
            const isActive = isMobile && i === activeMobileProject;
            return (
              <motion.div
                key={p.href}
                variants={bentoItem}
                className={[p.colSpan ?? 'md:col-span-2', p.rowSpan ?? 'row-span-1'].join(' ')}
              >
                <Link
                  ref={(el) => {
                    projectRefs.current[i] = el;
                  }}
                  href={p.href}
                  className={[
                    'group relative overflow-hidden rounded-2xl block h-full',
                    'border border-black/5 dark:border-white/10',
                    'bg-white dark:bg-neutral-900',
                    'transition-transform duration-300 ease-out hover:scale-98',
                    'shadow-sm transition-shadow hover:shadow-md',
                    isActive ? 'is-active' : '',
                  ].join(' ')}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="size-fit h-full w-full transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105 group-[.is-active]:scale-105">
                      {p.cover && ( // Narrow so cover is not undefined
                        <Image
                          src={p.cover}
                          alt={p.alt}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover"
                          priority
                        />
                      )}
                    </div>
                    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                      <span
                        className={[
                          'translate-y-1 rounded-2xl text-base font-semibold tracking-tight text-white opacity-0',
                          'transition-all duration-300 ease-out',
                          'group-hover:translate-y-0 group-hover:opacity-100',
                          'group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100',
                          'md:text-lg dark:text-white',
                        ].join(' ')}
                      >
                        {p.title}
                      </span>
                    </div>
                    <div
                      className={[
                        'pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 ease-out',
                        'group-hover:bg-black/50',
                        'group-[.is-active]:bg-black/50',
                      ].join(' ')}
                    />
                  </div>
                  <span className="sr-only">{`Open project: ${p.title}`}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-4 flex justify-end">
          <Button asChild variant="outline" className="group text-xs whitespace-nowrap md:min-w-[12.75rem]">
            <Link href="/projects">
              View all projects
              <Icon
                icon="lucide:arrow-right"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden
              />
            </Link>
          </Button>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
    /                           Tools section                                    /
     -------------------------------------------------------------------------- */}

      <motion.section
        aria-label="Tools"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="mb-4 text-lg font-semibold">my toolset</h2>
        <CursorProvider>
          <ul
            id="tools-grid"
            data-active-group={activeGroup ?? ''}
            className="flex flex-wrap gap-2"
          >
            {TOOLS.map(t => (
              <li
                key={t.name}
                data-group={t.group}
                onMouseEnter={() => setActiveGroup(t.group)}
                onMouseLeave={() => setActiveGroup(null)}
                onFocus={() => setActiveGroup(t.group)}
                onBlur={() => setActiveGroup(null)}
                className="transition-opacity"
              >
                <ToolBadge label={t.name} iconSize={16} />
              </li>
            ))}
          </ul>

          {/* Cursor dot animation */}
          <Cursor>
            <svg
              className={['size-6 transition-colors', activeCursorText].join(' ')}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
              />
            </svg>
          </Cursor>
          <CursorFollow>
            {activeGroup ? (
              <div
                className={[
                  'rounded-lg px-2 py-1 text-sm text-white shadow-lg',
                  GROUP_COLOR[activeGroup].bg,
                ].join(' ')}
              >
                {GROUP_LABEL[activeGroup]}
              </div>
            ) : null}
          </CursorFollow>
        </CursorProvider>
      </motion.section>

      {/* --------------------------------------------------------------------------
    /                           Contact section                                  /
     -------------------------------------------------------------------------- */}

      <motion.section
        aria-label="Contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="mb-4 text-lg font-semibold">contact</h2>
        <p className="mb-4 text-sm">
          Or if you prefer contacting me directly:&nbsp;
          <a
            href="mailto:jamespieterkok@outlook.com"
            className="underline decoration-current text-blue-600 dark:text-sky-400"
            style={{ color: 'rgb(37 99 235)' }} // tailwind blue-600
          >
            jamespieterkok@outlook.com
          </a>
        </p>

        <form onSubmit={onSubmit} className="max-w-screen space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm mb-2">(Company) Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:focus:border-white/20"
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:focus:border-white/20"
                placeholder="jane@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full resize-y rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:focus:border-white/20"
              placeholder="What would you like to discuss?"
            />
          </div>

          <div className="flex items-center gap-3">
            <span aria-live="polite" className="text-xs text-muted-foreground">
              {formResult}
            </span>
            <Button
              variant="outline"
              type="submit"
              disabled={isSubmitting}
              className="text-xs ml-auto"
            >
              {isSubmitting ? 'Sending…' : 'Submit form'}
              <Icon
                icon="lucide:arrow-right"
                className="ml-2 h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden
              />
            </Button>
          </div>
        </form>
      </motion.section>
    </main>
  );
}
