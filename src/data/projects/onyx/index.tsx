import * as React from 'react';
import { ProjectMeta } from '@/components/content/ProjectLayout';
import { InfoIcon } from 'lucide-react';
import { ProjectGallery } from '@/components/lightbox/ProjectGallery';

import cover from './onyxcover.jpg';
import screenHiFi from './notificationhifi.png';
import screenWireframes from './notificationwireframes.png';
import figmaWireframe from './figmawireframe.png';
import uxmap from './uxmap.png';
import figmaFlows from './figmaflows.png';

export const meta: ProjectMeta = {
  slug: 'onyx',
  title: 'Onyx',
  year: 2024,
  context: 'Internship',
  description: 'App for tracking personal growth amongst Work-based learning programs. (MBO)',
  roles: ['🎨 UI', '🔎 UX', '💻 DEV'],
  tags: ['Firebase', 'Flutterflow', 'Figma'],
  cover,
  links: [
    { label: 'Visit Onyx', href: 'https://byonyx.app/' },
  ],
};

export default function Body() {
  const galleryImages = [
    { src: uxmap, alt: 'UX map', caption: 'UX map and flows' },
    { src: figmaFlows, alt: 'Flows & components', caption: 'Component exploration & flows' },
    { src: figmaWireframe, alt: 'Wireframe / error', caption: 'Wireframe / empty state' },
    { src: screenWireframes, alt: 'Notification wireframes', caption: 'Wireframes for the notification centre' },
  ];

  return (
    <>
      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        Onyx is a work‑based learning companion that lets students and coaches set goals, track growth, and reflect on
        progress. I joined after the base for the app was already set up. My main contributions were additions to the
        app.
      </p>

      <h2 className="mt-8 text-lg font-semibold">contributions</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
        <li>UX Mapping / user flows</li>
        <li>Notification logic & designs, as well as the notification centre</li>
        <li>
          Content Management System (CMS) for the app. Ideation, UX, wireframes. Unfortunately my internship ended
          before I could continue developing it.
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">result</h2>
      <p className="mt-3 text-sm leading-6">
        <InfoIcon className="mr-2 inline h-4 w-4" /> Some of my work isn't publicly available, or not presentable yet.
      </p>

      <div className="mt-6">
        <ProjectGallery
          splash={{
            src: screenHiFi,
            alt: 'Notifications in-app',
            caption: 'In-app notifications & summary',
          }}
          images={galleryImages}
          gridClasses="grid-cols-2 md:grid-cols-3"
        />
      </div>
    </>
  );
}
