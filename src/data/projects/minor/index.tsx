import * as React from 'react';
import Image from 'next/image';
import { ProjectMeta } from '@/components/content/ProjectLayout';

import cover from './minorcover.jpg';
import fullRender from './full_render_cf.png';

export const meta: ProjectMeta = {
  slug: 'minor',
  title: 'Information Design',
  year: 2024,
  context: 'CMD',
  description: 'Information Design minor at AUAS, a semester-long deep dive into data visualization, visual storytelling, and communicating complex information clearly.',
  roles: ['🎨 UI', '🔎 UX', '✨ CREA'],
  tags: ['Figma', 'Flourish'],
  cover,
  links: [
    {
      label: 'Figma Prototype',
      href: 'https://www.figma.com/proto/w593oy19vDCG5nPsGiJVWV/Final-File-C-F?node-id=1-190&viewport=485%2C751%2C0.11&t=KCGshqE6Y6FuVPaY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A190&page-id=0%3A1',
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        During my Information Design minor at the Amsterdam University of Applied Sciences, I spent a semester exploring how to translate complex data and ideas into clear, compelling visuals. The minor covered data visualization principles, visual hierarchy, typography for information design, and narrative-driven design. I worked with tools including Figma and Flourish to produce data-driven visual outputs. 
      </p>

      <div className="mt-8 relative w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm dark:border-neutral-800">
        <div className="max-h-[70vh] w-full overflow-y-auto bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={fullRender}
            alt="Final Information Design Dashboard Render"
            className="w-full h-auto"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
