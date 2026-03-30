import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import { ProjectGallery } from '@/components/lightbox/ProjectGallery';

import cover from './sonora-cover.jpg';
import sessionsImg from './sessions.png';
import recapsImg from './recaps.png';
import treemapsImg from './treemaps.png';
export const meta: ProjectMeta = {
  slug: 'sonora',
  title: 'Sonora',
  year: 2025,
  context: 'TechTrack',
  description: 'A Spotify visualizer that turns your currently playing track into a live, data-driven vinyl record.',
  roles: ['💻 DEV', '🎨 UI', '✨ CREA'],
  tags: ['SvelteKit', 'Vite', 'Spotify API'],
  cover,
  links: [
    {
      label: 'Source Code',
      href: 'https://github.com/kokjp1/TechTrack',
    },
    {
      label: 'Live App',
      href: 'https://www.sonora.stream/',
    },
  ],
};

export default function Body() {
  const galleryImages = [
    { src: recapsImg, alt: 'Sonora Recaps', caption: 'Sonora Recap View' },
    { src: treemapsImg, alt: 'Sonora Treemap', caption: 'Sonora Treemap View' },
  ];

  return (
    <>
      <p>
        Sonora is a web app that visualizes your Spotify listening session as a spinning vinyl record. Every track gets its own &quot;custom vinyl&quot; — shaped and styled by the actual data behind the song.
      </p>

      <h2 className="mt-8 mb-4 text-lg font-semibold">How the vinyl maps to data:</h2>
      <ul className="list-disc pl-5 space-y-2 mb-8">
        <li><strong>Size of the record</strong> → track popularity score</li>
        <li><strong>Rotation speed</strong> → track duration or popularity</li>
        <li><strong>Number of grooves</strong> → release year (older = more grooves)</li>
        <li><strong>Color &amp; glow</strong> → extracted from the album cover via <code>node-vibrant</code></li>
      </ul>

      <p>
        The vinyl only spins when a track is actually playing — it syncs live with your Spotify session via the Spotify API (OAuth). Alongside the vinyl, a treemap visualization shows the distribution of genres and artists across your session, with a short auto-generated textual summary underneath.
      </p>

      <p className="mt-4 font-medium max-w-none prose dark:prose-invert">Built with: SvelteKit, Vite, Spotify Web API, node-vibrant</p>

      <h2 className="mt-8 mb-4 text-lg font-semibold">Planned Improvements</h2>
      <ul className="list-disc pl-5 space-y-2 mb-8 text-sm">
        <li>Add play/pause/next controls to the track info section</li>
        <li>Fix callback in tab title</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">gallery</h2>
      <div className="mt-6">
        <ProjectGallery
          splash={{ src: sessionsImg, alt: 'Sonora Session View', caption: 'Live Session View, Synced with Spotify' }}
          images={galleryImages}
          gridClasses="grid-cols-2"
        />
      </div>
    </>
  );
}
