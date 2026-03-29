import * as React from 'react';
import { ProjectMeta } from '@/components/content/ProjectLayout';

import cover from './minorcover.jpg';

export const meta: ProjectMeta = {
  slug: 'minor',
  title: 'Minor',
  year: 2024,
  context: 'CMD',
  description: 'Information Design minor at AUAS — a semester-long deep dive into data visualization, visual storytelling, and communicating complex information clearly.',
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

      <h2 className="mt-10 mb-4 text-lg font-semibold">Featured Projects</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="font-medium">Information Design - Project 1</h3>
          <p className="text-sm mb-4">A brief description of this project and what data visualization methods were used.</p>
          <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 text-sm">
            [Placeholder: Flourish Chart / Figma Screenshot]
          </div>
        </div>

        <div>
          <h3 className="font-medium">Information Design - Project 2</h3>
          <p className="text-sm mb-4">A brief description of this second project and the specific visual storytelling challenge it addressed.</p>
          <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 text-sm">
            [Placeholder: Final Deliverable Screenshot]
          </div>
        </div>
      </div>

      <h2 className="mt-10 mb-2 text-lg font-semibold">Takeaways</h2>
      <p>
        A brief note on the most notable outcome, insight gathered, or thing learned from this minor.
      </p>
    </>
  );
}
