import * as React from 'react';
import { ProjectMeta } from '@/components/content/ProjectLayout';
import { ProjectGallery } from '@/components/lightbox/ProjectGallery';

import cover from './rhythmrain.png';
import home from './home.jpg';
import library from './library.jpg';
import onboarding from './onboarding.jpg';
import registerlogin from './registerlogin.jpg';
import settings from './settings.jpg';
import skeletonstate from './skeletonstate.jpg';

export const meta: ProjectMeta = {
  slug: 'rhythmrain',
  title: 'RhythmRain',
  year: 2024,
  context: 'CMD',
  description: 'Fictional app for adding a deeper level of immersion to playing videogames.',
  roles: ['🎨 UI'],
  tags: ['Figma'],
  cover,
};

export default function Body() {
  const galleryImages = [
    { src: onboarding, alt: 'Onboarding flow', caption: 'Onboarding — quick intro and permissions' },
    { src: registerlogin, alt: 'Register / login', caption: 'Auth — register and login' },
    { src: library, alt: 'Library screen', caption: 'Library — browse tracks and presets' },
    { src: settings, alt: 'Settings screen', caption: 'Settings — audio, visuals, and calibration' },
    { src: skeletonstate, alt: 'Skeleton / empty state', caption: 'Skeleton State' },
  ];

  return (
    <>
      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        RhythmRain was for a CMD course project where we designed a fictional app. I created a concept for an app that
        adds a deeper level of immersion to playing videogames by providing in-game audio-visual effects synced to real
        life weather conditions. E.g. if it’s raining outside, the game weather would change to rain as well. With this
        project I also hoped to explore Figma UI Component Libraries. In this particular case I used{' '}
        <a
          href="https://www.untitledui.com/"
          className="rounded-sm px-1 !text-blue-600 transition-colors duration-200 ease-in-out hover:bg-blue-600 hover:!text-white focus:ring-2 focus:ring-blue-400 focus:outline-none">
          Untitled UI
        </a>.
      </p>
      <h2 className="mt-8 text-lg font-semibold">design/features</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
        <li>Minimal UI with a focus on glassmorphism design.</li>
        <li>Onboarding flow to introduce the app concept and make it clear to users how it works</li>
        <li>Modular background dependent on the real time weather conditions</li>
        <li>Responsive sidebar</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">result</h2>
      <p className="mt-3 text-sm leading-6">
        Screenshots of the app design, the figma project link is at <a href="#">the top of this page</a>.
      </p>

      <div className="mt-6">
        <ProjectGallery
          splash={{ src: home, alt: 'Home screen', caption: 'Home — play, recent, and quick start' }}
          images={galleryImages}
          gridClasses="grid-cols-2 md:grid-cols-3" 
        />
      </div>
    </>
  );
}
