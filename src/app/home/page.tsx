'use client';

/* -------------------------------------------------------------------------- */
/*                            Imports/types/consts                            */
/* -------------------------------------------------------------------------- */
import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';
import { Cursor, CursorFollow, CursorProvider } from '@/components/ui/shadcn-io/animated-cursor';
import { Button } from '@/components/ui/button';
import { TOOLS, GROUP_LABEL, GROUP_COLOR, ToolBadge, type ToolGroup } from '@/components/content/ToolBadge';

type Project = {
  title: string;
  href: string;
  img: string;
  alt: string;
  colSpan?: string;
  rowSpan?: string;
};

const projects: Project[] = [
  {
    title: 'Listral',
    href: '/projects/listral',
    img: '/projects/listral/listralcover.jpg',
    alt: 'Dark UI dashboard with cards',
    colSpan: 'md:col-span-2',
    rowSpan: 'row-span-2',
  },
  {
    title: 'Boekenzoeker',
    href: '/projects/boekenzoeker',
    img: '/projects/boekenzoeker/boekenzoekercover.jpg',
    alt: 'Code editor on a screen',
    colSpan: 'md:col-span-2',
    rowSpan: 'row-span-1',
  },
  {
    title: 'Personal Projects',
    href: '/projects/personal-projects',
    img: '/projects/personalprojects/esotsm.jpg',
    alt: '3D render abstract shapes',
    colSpan: 'md:col-span-2',
    rowSpan: 'row-span-1',
  },
  {
    title: 'Gamescout',
    href: '/projects/gamescout',
    img: '/projects/gamescout/gamescoutcover.jpg',
    alt: 'Controller and neon lights',
    colSpan: 'md:col-span-4',
    rowSpan: 'row-span-1',
  },
  {
    title: 'ONYX',
    href: '/projects/onyx',
    img: '/projects/onyx/onyxcover.jpg',
    alt: '3D render abstract shapes',
    colSpan: 'md:col-span-4',
    rowSpan: 'row-span-2',
  },
  {
    title: 'Minor Datavis',
    href: '/projects/ndff',
    img: '/projects/minor/minorcover.jpg',
    alt: 'Charts and graphs abstract',
    colSpan: 'md:col-span-2',
    rowSpan: 'row-span-2',
  },
];

/* -------------------------------------------------------------------------- */
/*                                   Page                                  */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  const [activeGroup, setActiveGroup] = useState<ToolGroup | null>(null);
  const [activeMobileProject, setActiveMobileProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const projectRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

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

  return (
    /* -------------------------------------------------------------------------- */
    /*                                   Intro                                  */
    /* -------------------------------------------------------------------------- */

    <main className="flex flex-col gap-12 px-5 md:px-8">
      <section className="flex max-w-screen-md flex-col gap-4">
        <h1 className="text-xl font-semibold tracking-tight">james kok</h1>
        <h2 className="mb-6 text-sm">CMD student · Learning frontend design & development</h2>
        <p className="text-sm">
          Welcome to my portfolio. I am a 19 year old Student at the Amsterdam University of Applied Sciences
          (AUAS/HvA). Currently I'm studying Communication & Multimedia Design (CMD).
        </p>
        <p className="text-sm">
          I am interested in design, technology, interfaces and programming. What you find here is a mix of school
          projects and personal work.
        </p>
      </section>

      {/* -------------------------------------------------------------------------- 
    /                         Project bento section                              /                        
     -------------------------------------------------------------------------- */}
      
      <section aria-label="Featured projects">
        <h2 className="mb-4 text-lg font-semibold">featured projects</h2>
        <div className="grid auto-rows-[8rem] grid-cols-1 gap-4 md:auto-rows-[10rem] md:grid-cols-6">
          {projects.map((p, i) => {
            const isActive = isMobile && i === activeMobileProject;
            return (
              <Link
                key={p.href}
                ref={(el) => {
                  projectRefs.current[i] = el;
                }}
                href={p.href}
                className={[
                  'group relative overflow-hidden rounded-2xl',
                  'border border-black/5 dark:border-white/10',
                  'bg-white dark:bg-neutral-900',
                  'transition-transform duration-300 ease-out hover:scale-98',
                  'shadow-sm transition-shadow hover:shadow-md',
                  p.colSpan ?? 'md:col-span-2',
                  p.rowSpan ?? 'row-span-1',
                  isActive ? 'is-active' : '',
                ].join(' ')}
                >
                <div className="absolute inset-0 overflow-hidden">
                  <div className="size-fit h-full w-full transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105 group-[.is-active]:scale-105">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      priority
                    />
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
            );
          })}
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" className="group text-xs whitespace-nowrap md:min-w-[12.75rem]">
            View all projects
            <Icon
              icon="lucide:arrow-right"
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
              aria-hidden
            />
          </Button>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- 
    /                           Tools section                                    /
     -------------------------------------------------------------------------- */}

      <section aria-label="Tools">
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
      </section>
    </main>
  );
}
