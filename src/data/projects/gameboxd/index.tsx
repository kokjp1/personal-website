import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import { ProjectGallery } from '@/components/lightbox/ProjectGallery';

import cover from './gameboxd.png';
import exposition from './exposition.png';
import screenChats from './gameboxdchats.jpg';
import screenCollection from './gameboxdcollectionjames.jpg';
import screenHome from './gameboxdhome.jpg';
import screenLogin from './gameboxdlogin.jpg';
import screenProfile from './gameboxdprofilejames.jpg';
import screenReviews from './gameboxdreviewsjames.jpg';

export const meta: ProjectMeta = {
  slug: 'gameboxd',
  title: 'Gameboxd',
  year: 2024,
  context: 'CMD',
  description: 'A social platform for gamers to share and discover video games.',
  roles: ['🔎 UX', '🎨 UI'],
  tags: ['Figma'],
  cover,
  links: [{ label: 'Figma file', href: 'https://github.com/yourusername/gameboxd' }],
};

export default function Body() {
  const galleryImages = [
    { src: screenProfile, alt: 'Profile screen', caption: 'User profile with stats and recent activity' },
    { src: screenCollection, alt: 'Collection screen', caption: 'User owned / tracked game collection' },
    { src: screenReviews, alt: 'Reviews screen', caption: 'Game reviews & rating interface' },
    { src: screenChats, alt: 'Chats screen', caption: 'Direct messages / chat overview' },
    { src: screenLogin, alt: 'Login screen', caption: 'Authentication entry (login / signup)' },
    {
      src: exposition,
      alt: 'Exposition display with NFC profile card',
      caption: 'Exposition setup: NFC profile card linking straight to the app profile.',
    },
  ];

  return (
    <>
      <p>
        This design was for a project about UI design. The goal was connecting a physical element with a digital
        interface. I designed a mobile app acting as a social layer for gaming: news, profiles, friends, messaging and
        curated collections. The physical counterpart was an NFC business card linking directly to a user profile.
      </p>

      <h2 className="mt-10 text-lg font-semibold">goal</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
        <li>Create a cohesive mobile interface in Figma.</li>
        <li>Bridge a physical NFC card with a digital profile experience.</li>
        <li>Demonstrate the concept at an exposition.</li>
      </ul>

      <h2 className="mt-10 text-lg font-semibold">result</h2>
      <ProjectGallery
        splash={{
          src: screenHome,
          alt: 'Home feed screen',
          caption: 'Home feed with activity and recommended games',
        }}
        images={galleryImages}
        gridClasses="grid-cols-2 md:grid-cols-3" // 2 on mobile, 3 on desktop
        spanIndices={[galleryImages.length]} // last image (exposition) spans full row
      />
    </>
  );
}
