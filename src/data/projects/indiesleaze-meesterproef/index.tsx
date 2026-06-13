import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import { ScrollableImage } from '@/components/content/ScrollableImage';

import cover from './indiesleaze-revival-cover.png';
import onepager from './indiesleaze-revival.png';

export const meta: ProjectMeta = {
  slug: 'indiesleaze-meesterproef',
  title: 'Indie Sleaze / Returns',
  year: 2026,
  context: 'Minor VID X: Meesterproef',
  description: 'An interactive scrolling essay on the indie sleaze aesthetic revival, covering what it was, why it came back, and whether it is real.',
  roles: ['🎨 UI', '💻 Dev'],
  tags: ['HTML', 'CSS', 'JavaScript'],
  cover,
  links: [
    {
      label: 'Live Site',
      href: 'https://indiesleaze-revival-website.vercel.app/',
    },
  ],
};

export default function Body() {
  return (
    <>
      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        Indie Sleaze / Returns is a scrollable editorial web experience built for the Meesterproef of The Minor VID at the HvA.
        I chose the indie sleaze revival as my case, a subculture that peaked around 2008-2012 and has been quietly
        coming back. Instead of a straightforward article, I built an immersive long-form essay that uses typography,
        ambient sound and interactive elements to pull you into the aesthetic.
      </p>

      <h2 className="mt-8 text-lg font-semibold">design/features</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
        <li>Scrollable editorial essay with cinematic typography and layout</li>
        <li>Ambient SFX layer and music controls</li>
        <li>Interactive iPod widget with a curated playlist of indie sleaze tracks</li>
        <li>Flash photography effect on click for the disposable camera vibe</li>
        <li>Artist photo gallery with hover interactions and Spotify links</li>
        <li>Embedded Snow Strippers live footage I shot at Melkweg 2025</li>
      </ul>

      <h2 className="mt-8 mb-4 text-lg font-semibold">result</h2>
      <p className="mb-4 text-sm leading-6">
        The screenshot gives an idea of the layout and style but the page is heavily animated and I highly recommend experiencing it in action via the
        <a
          href="https://indiesleaze-revival-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm px-1 !text-blue-600 transition-colors duration-200 ease-in-out hover:bg-blue-600 hover:!text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          live site 🔗
        </a>
        .
      </p>
      <ScrollableImage
        src={onepager}
        alt="Indie Sleaze / Returns scrollable essay"
      />
    </>
  );
}
