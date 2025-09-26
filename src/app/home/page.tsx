'use client';

// app/page.tsx
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';
import { Cursor, CursorFollow, CursorProvider } from '@/components/ui/shadcn-io/animated-cursor';
import { Button } from '@/components/ui/button';
import { InteractiveGridPattern } from '@/components/ui/shadcn-io/interactive-grid-pattern';

type Project = {
  title: string;
  href: string;
  img: string;
  alt: string;
  colSpan?: string;
  rowSpan?: string;
};

type Group = 'design' | 'development' | 'platforms/db';

type Tool = {
  name: string;
  icon: string;
  href?: string;
  color?: string;
  group: Group;
};

// Universal icon size (change once)
const TOOL_ICON_PX = 16;
const TOOL_ICON_TW = 'w-4 h-4';

// Labels + colors per group
const GROUP_LABEL: Record<Group, string> = {
  design: 'Design',
  development: 'Development',
  'platforms/db': 'Platforms/DB',
};
const GROUP_COLOR: Record<Group, { bg: string; dot: string }> = {
  design: { bg: 'bg-fuchsia-500', dot: 'bg-fuchsia-500' },
  development: { bg: 'bg-sky-500', dot: 'bg-sky-500' },
  'platforms/db': { bg: 'bg-amber-500', dot: 'bg-amber-500' },
};

// Text color per group (for the SVG cursor)
const GROUP_TEXT: Record<Group, string> = {
  design: 'text-fuchsia-500',
  development: 'text-sky-500',
  'platforms/db': 'text-amber-500',
};

const tools: Tool[] = [
  // Design
  { name: 'Figma', icon: 'devicon:figma', group: 'design' },
  { name: 'Flourish', icon: '/icons/Flourish_Logo_Black_small.png', group: 'design' },
  { name: 'After Effects', icon: 'devicon:aftereffects', group: 'design' },
  { name: 'Photoshop', icon: 'devicon:photoshop', group: 'design' },
  { name: 'Illustrator', icon: 'devicon:illustrator', group: 'design' },
  { name: 'Premiere Pro', icon: 'devicon:premierepro', group: 'design' },
  { name: 'Blender', icon: 'devicon:blender', group: 'design' },

  { name: 'HTML', icon: 'devicon:html5', group: 'development' },
  { name: 'CSS', icon: 'devicon:css3', group: 'development' },
  { name: 'JavaScript', icon: 'devicon:javascript', group: 'development' },
  { name: 'TypeScript', icon: 'devicon:typescript', group: 'development' },
  { name: 'React', icon: 'devicon:react', group: 'development' },
  { name: 'Tailwind', icon: 'devicon:tailwindcss', group: 'development' },
  { name: 'shadcn', icon: 'vscode-icons:file-type-light-shadcn', color: '#ffffff', group: 'development' },
  { name: 'Next.js', icon: 'devicon:nextjs', group: 'development' },
  { name: 'Node.js/npm', icon: 'devicon:nodejs', group: 'development' },
  { name: 'Express', icon: 'devicon:express', group: 'development' },
  { name: 'Vite', icon: 'devicon:vite', group: 'development' },

  { name: 'GitHub', icon: 'devicon:github', group: 'platforms/db' },
  { name: 'Vercel', icon: 'devicon:vercel', group: 'platforms/db' },
  { name: 'Cloudflare', icon: 'devicon:cloudflare', group: 'platforms/db' },
  { name: 'Firebase', icon: 'devicon:firebase', group: 'platforms/db' },
  { name: 'Supabase', icon: 'devicon:supabase', group: 'platforms/db' },
  { name: 'MongoDB', icon: 'devicon:mongodb', group: 'platforms/db' },
];

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

export default function HomePage() {
  const [activeGroup, setActiveGroup] = useState<Group | null>(null);

  return (
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

      <section aria-label="Featured projects">
        <div className="grid auto-rows-[8rem] grid-cols-1 gap-4 md:auto-rows-[10rem] md:grid-cols-6">
          {projects.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={[
                'group relative overflow-hidden rounded-2xl',
                'border border-black/5 dark:border-white/10',
                'bg-white dark:bg-neutral-900',
                'transition-transform duration-300 ease-out hover:scale-98',
                'shadow-sm transition-shadow hover:shadow-md',
                p.colSpan ?? 'md:col-span-2',
                p.rowSpan ?? 'row-span-1',
              ].join(' ')}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="size-fit h-full w-full transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105">
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
                  <span className="translate-y-1 rounded-2xl text-base font-semibold tracking-tight text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:text-lg dark:text-white">
                    {p.title}
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/50" />
              </div>
              <span className="sr-only">{`Open project: ${p.title}`}</span>
            </Link>
          ))}
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
      <section aria-label="Tools">
        <CursorProvider>
          <ul id="tools-grid" data-active-group={activeGroup ?? ''} className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <li
                key={t.name}
                data-group={t.group}
                onMouseEnter={() => setActiveGroup(t.group)}
                onMouseLeave={() => setActiveGroup(null)}
                onFocus={() => setActiveGroup(t.group)}
                onBlur={() => setActiveGroup(null)}
                className="transition-opacity"
              >
                <Badge variant="secondary" className="border-foreground/10 rounded-md px-2 py-1">
                  <span className={`${TOOL_ICON_TW} flex shrink-0 items-center justify-center`}>
                    {t.icon.includes(':') ? (
                      <Icon icon={t.icon} color={t.color} className={`${TOOL_ICON_TW} opacity-90`} aria-hidden />
                    ) : (
                      <Image
                        src={t.icon}
                        alt={t.name}
                        width={TOOL_ICON_PX}
                        height={TOOL_ICON_PX}
                        aria-hidden
                        className={`${TOOL_ICON_TW} object-contain opacity-90`}
                      />
                    )}
                  </span>
                  <span className="leading-none">{t.name}</span>
                </Badge>
              </li>
            ))}
          </ul>

          {/* Cursor dot color per group */}
          <Cursor>
            <svg
              className={['size-6 transition-colors', activeGroup ? GROUP_TEXT[activeGroup] : 'text-blue-500'].join(
                ' '
              )}
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
                className={['rounded-lg px-2 py-1 text-sm text-white shadow-lg', GROUP_COLOR[activeGroup].bg].join(' ')}
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
