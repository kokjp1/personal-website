import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import cover from './writedown-cover.jpg';

export const meta: ProjectMeta = {
  slug: 'writedown',
  title: 'writedown',
  year: 2025,
  context: 'Personal',
  description: 'A distraction-free note-taking app. Just write — save as .md, .txt, or keep it local.',
  roles: ['💻 DEV', '🎨 UI'],
  tags: [],
  cover,
  links: [
    {
      label: 'Source Code',
      href: 'https://github.com/kokjp1/writedown',
    },
    {
      label: 'Live App',
      href: 'https://writedown-five.vercel.app/',
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        writedown is a note-taking app built around one idea: just write. Dump your thoughts, clear your head, save what sticks — as .md, .txt, or locally. No formatting rules, no timers, no pressure. Just you and a blank page.
      </p>
    </>
  );
}
