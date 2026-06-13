import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import { ScrollableImage } from '@/components/content/ScrollableImage';

import cover from './goldenroast_cover.png';
import onepager from './goldenroast-home.png';

export const meta: ProjectMeta = {
  slug: 'goldenroast',
  title: 'Golden Roast',
  year: 2026,
  context: 'Minor VID: Kleur en Compositie',
  description: 'UI design for a coffee webshop, exploring color, composition and visual hierarchy across three design iterations.',
  roles: ['🎨 UI'],
  tags: ['Figma'],
  cover,
  links: [
    {
      label: 'Figma Prototype',
      href: 'https://www.figma.com/proto/gwVyWjTxlwcrHw0DwPliy6/Kleur-and-Compositie-Koffie?node-id=138-379&viewport=4061%2C-2163%2C0.97&t=Hf5HtwaUW1A4OBkC-0&scaling=contain&content-scaling=fixed&starting-point-node-id=138%3A379',
    },
  ],
};

export default function Body() {
  return (
    <>
      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        Golden Roast was a UI design project for the Minor VID course{' '}
        <em>Kleur en Compositie</em>. The assignment was to design a coffee webshop with
        a strong focus on how color and composition influence the feel and readability of
        a design with a specific aesthetic in mind. I went through three iterations, each one with feedback from the previous round.
      </p>

      <h2 className="mt-8 text-lg font-semibold">design/features</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
        <li>Landing page, product overview and taste-explorer</li>
        <li>Beige & Brown color palette targeting a "scandi minimal" aesthetic, as per the assignment guidelines.</li>
        <li>Personal dashboard with user-specific content and settings</li>
      </ul>

      <h2 className="mt-8 mb-4 text-lg font-semibold">result</h2>
      <ScrollableImage
        src={onepager}
        alt="Golden Roast coffee webshop design"
      />
    </>
  );
}
