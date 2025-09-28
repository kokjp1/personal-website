// Central tool / role / tag badge with shared icon registry
import * as React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';

/* -------------------------------------------------------------------------- */
/*                             Icon / label registry                          */
/*  - Add or adjust entries here.                                             */
/*  - Used automatically if <ToolBadge label="..." /> is rendered without     */
/*    an explicit icon prop.                                                  */
/* -------------------------------------------------------------------------- */
export const ICON_MAP: Record<string, { icon: string; color?: string }> = {
  // Design tools
  Figma: { icon: 'devicon:figma' },
  Flourish: { icon: '/icons/Flourish_Logo_Black_small.png' },
  'After Effects': { icon: 'devicon:aftereffects' },
  Photoshop: { icon: 'devicon:photoshop' },
  Illustrator: { icon: 'devicon:illustrator' },
  'Premiere Pro': { icon: 'devicon:premierepro' },
  Blender: { icon: 'devicon:blender' },

  // Dev stack
  HTML: { icon: 'devicon:html5' },
  CSS: { icon: 'devicon:css3' },
  JavaScript: { icon: 'devicon:javascript' },
  TypeScript: { icon: 'devicon:typescript' },
  React: { icon: 'devicon:react' },
  Tailwind: { icon: 'devicon:tailwindcss' },
  shadcn: { icon: 'vscode-icons:file-type-light-shadcn', color: '#ffffff' },
  'Next.js': { icon: 'devicon:nextjs' },
  'Node.js/npm': { icon: 'devicon:nodejs' },
  Express: { icon: 'devicon:express' },
  Vite: { icon: 'devicon:vite' },

  // Platforms / DB
  GitHub: { icon: 'devicon:github' },
  Vercel: { icon: 'devicon:vercel' },
  Cloudflare: { icon: 'devicon:cloudflare' },
  Firebase: { icon: 'devicon:firebase' },
  Supabase: { icon: 'devicon:supabase' },
  MongoDB: { icon: 'devicon:mongodb' },
};

interface ToolBadgeProps {
  label: string;
  icon?: string;
  color?: string;
  iconSize?: number;
  className?: string;
  hideIconIfMissing?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                ToolBadge                                   */
/* -------------------------------------------------------------------------- */
export function ToolBadge({
  label,
  icon,
  color,
  iconSize = 14,            // bump default if you want larger
  className = '',
  hideIconIfMissing = true,
}: ToolBadgeProps) {
  const entry = ICON_MAP[label];
  const resolvedIcon = icon ?? entry?.icon;
  const resolvedColor = color ?? entry?.color;

  // Build dynamic size classes (Tailwind JIT allows arbitrary values)
  const boxClass = `flex shrink-0 items-center justify-center w-[${iconSize}px] h-[${iconSize}px]`;
  const imgClass = `object-contain opacity-90 w-[${iconSize}px] h-[${iconSize}px]`;

  return (
    <Badge
      variant="secondary"
      className={[
        'border-foreground/10 rounded-md',
        // Adjust padding & text size to feel proportional to bigger icon
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
