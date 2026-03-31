import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import { ProjectGallery } from '@/components/lightbox/ProjectGallery';

import cover from './gamescoutcover.jpg';
import screenBookmarks from './gamescoutbookmarks.png';
import screenDetail from './gamescoutdetail.png';
import screenHome from './gamescouthome.png';
import screenRegister from './gamescoutregister.png';
import screenResults from './gamescoutresults.png';
import screenSignin from './gamescoutsignin.png';
import screenSplash from './gamescoutsplash.png';

export const meta: ProjectMeta = {
  slug: 'gamescout',
  title: 'GameScout',
  year: 2024,
  context: 'CMD',
  description: 'A game discovery platform where players can scout, rate, and track video games.',
  roles: ['DEV 💻', '🎨 UI'],
  tags: ['Express', 'EJS', 'CSS', 'MongoDB', 'Node.js/npm'],
  cover,
  links: [{ label: 'Source code', href: 'https://github.com/kokjp1/Gamescout' }],
};

export default function Body() {
  const galleryImages = [
    { src: screenHome, alt: 'Home feed screen', caption: 'Home feed with activity and recommended games' },
    { src: screenDetail, alt: 'Game detail screen', caption: 'Detailed game view with metadata & actions' },
    { src: screenResults, alt: 'Search results screen', caption: 'Search results listing filtered games' },
    { src: screenBookmarks, alt: 'Bookmarks screen', caption: 'Saved / bookmarked games collection' },
    { src: screenRegister, alt: 'Register screen', caption: 'Account creation interface' },
    { src: screenSignin, alt: 'Sign in screen', caption: 'Authentication entry' },
  ];

  return (
    <>
      <p>
        GameScout is a full-stack web application built to help gamers discover their next favorite game. Using the RAWG API, users can search and filter through a large game catalog based on their preferences — whether that's fast-paced shooters, deep RPGs, or relaxing indie titles. Beyond discovery, the app includes user accounts, bookmarks, and a personal game collection, all stored in a MongoDB database.
      </p>
      <p className="mt-4">
        This was a group project built with four people. My initial role was focused on the Frontend with EJS but later on my role grew to be a fullstack role in the team. Eventually I ended up working on all facets of the project, including the API, Database, backend and frontend.
      </p>

      <h2 className="mt-10 text-lg font-semibold">goal</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
        <li>Build a functional full-stack web app with Node.js, Express, and MongoDB.</li>
        <li>Implement user authentication (bcrypt) and persistent data storage.</li>
        <li>Integrate an external API (RAWG) for real-time game data.</li>
        <li>Work collaboratively in a team using GitHub.</li>
      </ul>

      <h2 className="mt-10 text-lg font-semibold">result</h2>

      <ProjectGallery
        splash={{
          src: screenSplash,
          alt: 'Splash / onboarding screen',
          caption: 'Splash / onboarding experience introducing GameScout.',
        }}
        images={galleryImages}
      />
    </>
  );
}

