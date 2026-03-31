import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import cover from './writedown-cover.jpg';

export const meta: ProjectMeta = {
  slug: 'writedown',
  title: 'writedown',
  year: 2026,
  context: 'Personal',
  description: 'A distraction-free note-taking app. Just write abd save as .md, .txt, or keep it local. Inspiration: Freewrite by Farza',
  roles: ['💻 DEV'],
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
        writedown is a note-taking app built around a core idea: just write. Dump your thoughts, clear your head, save what sticks, as .md, .txt, or locally. Heavily inspired by "Freewrite by Farza."
      </p>
    </>
  );
}
