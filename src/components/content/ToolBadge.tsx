// Unified ToolBadge + tool registry (single source of truth)

import * as React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */
export type ToolGroup = 'design' | 'development' | 'platforms/db';

export interface ToolDef {
  name: string;
  icon: string;          // Iconify id OR /public path
  group: ToolGroup;
  color?: string;        // Optional explicit color override for icon
}

/* -------------------------------------------------------------------------- */
/* Tool data (ONLY place you define tools + their icons)                      */
/* -------------------------------------------------------------------------- */
export const TOOLS: ToolDef[] = [
  // Design
  { name: 'Figma', icon: 'devicon:figma', group: 'design' },
  { name: 'Flourish', icon: '/icons/Flourish_Logo_Black_small.png', group: 'design' },
  { name: 'After Effects', icon: 'devicon:aftereffects', group: 'design' },
  { name: 'Photoshop', icon: 'devicon:photoshop', group: 'design' },
  { name: 'Illustrator', icon: 'devicon:illustrator', group: 'design' },
  { name: 'Premiere Pro', icon: 'devicon:premierepro', group: 'design' },
  { name: 'Blender', icon: 'devicon:blender', group: 'design' },

  // Development
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
  { name: 'Flutterflow', icon: '/icons/flutterflow.png', group: 'development' },

  // Platforms / DB
  { name: 'GitHub', icon: 'devicon:github', group: 'platforms/db' },
  { name: 'Vercel', icon: 'devicon:vercel', group: 'platforms/db' },
  { name: 'Cloudflare', icon: 'devicon:cloudflare', group: 'platforms/db' },
  { name: 'Firebase', icon: 'devicon:firebase', group: 'platforms/db' },
  { name: 'Supabase', icon: 'devicon:supabase', group: 'platforms/db' },
  { name: 'MongoDB', icon: 'devicon:mongodb', group: 'platforms/db' },
];

/* -------------------------------------------------------------------------- */
/* Group meta (labels / colors)                                               */
/* -------------------------------------------------------------------------- */
export const GROUP_LABEL: Record<ToolGroup, string> = {
  design: 'Design',
  development: 'Development',
  'platforms/db': 'Platforms/DB',
};

export const GROUP_COLOR: Record<ToolGroup, { bg: string; dot: string; text: string }> = {
  design: { bg: 'bg-fuchsia-500', dot: 'bg-fuchsia-500', text: 'text-fuchsia-500' },
  development: { bg: 'bg-sky-500', dot: 'bg-sky-500', text: 'text-sky-500' },
  'platforms/db': { bg: 'bg-amber-500', dot: 'bg-amber-500', text: 'text-amber-500' },
};

/* -------------------------------------------------------------------------- */
/* Derived icon map (auto-built from TOOLS; extend manually for tags/roles)   */
/* -------------------------------------------------------------------------- */
export const ICON_MAP: Record<string, { icon: string; color?: string }> = TOOLS.reduce(
  (acc, t) => {
    acc[t.name] = { icon: t.icon, color: t.color };
    return acc;
  },
  {} as Record<string, { icon: string; color?: string }>
);

/* Optionally add extra non-tool labels here (tags, roles, etc.) */
// ICON_MAP['Design System'] = { icon: 'ph:shapes-duotone' };

/* -------------------------------------------------------------------------- */
/* ToolBadge component                                                        */
/* -------------------------------------------------------------------------- */
interface ToolBadgeProps {
  label: string;
  icon?: string;          // override
  color?: string;
  iconSize?: number;
  className?: string;
  hideIconIfMissing?: boolean;
}

export function ToolBadge({
  label,
  icon,
  color,
  iconSize = 14,
  className = '',
  hideIconIfMissing = true,
}: ToolBadgeProps) {
  const entry = ICON_MAP[label];
  const resolvedIcon = icon ?? entry?.icon;
  const resolvedColor = color ?? entry?.color;

  const boxClass = `flex shrink-0 items-center justify-center w-[${iconSize}px] h-[${iconSize}px]`;
  const imgClass = `object-contain opacity-90 w-[${iconSize}px] h-[${iconSize}px]`;

  return (
    <Badge
      variant="secondary"
      className={[
        'border-foreground/10 rounded-md',
        'px-2 py-1 text-[11px] leading-none font-medium tracking-wide',
        'flex items-center gap-1',
        className,
      ].join(' ')}
    >
      {resolvedIcon ? (
        <span className={boxClass}>
          {resolvedIcon.includes(':') ? (
            <Icon
              icon={resolvedIcon}
              width={iconSize}
              height={iconSize}
              color={resolvedColor}
              aria-hidden
            />
          ) : (
            <Image
              src={resolvedIcon}
              alt=""
              width={iconSize}
              height={iconSize}
              className={imgClass}
              aria-hidden
            />
          )}
        </span>
      ) : !hideIconIfMissing ? (
        <span className={boxClass} />
      ) : null}
      <span>{label}</span>
    </Badge>
  );
}
