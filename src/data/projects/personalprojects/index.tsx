import { ProjectMeta } from '@/components/content/ProjectLayout';
import cover from './esotsm.jpg';
import { ProjectGallery } from '@/components/lightbox/ProjectGallery';

export const meta: ProjectMeta = {
  slug: 'personalprojects',
  title: 'Personal Projects',
  year: 2025,
  context: 'Personal Project',
  description: "Personal projects I've worked on in my free time.",
  roles: ['✨ CREA'],
  tags: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'],
  cover,
};

import esotsmPoster from './esotsm poster.jpg';
import nierAutomataPoster from './Nier automata poster.jpg';
import rukiaPoster from './Rukia Kuchiki poster.jpg';
import snowstrippersPoster from './snowstrippersposter.jpg';
import spiderFlower from './spiderflower.jpg';
import eightBallGirl from './8ballgirl.jpg';
import ivePoster from './iveposter.jpg';
import miraPoster from './miraposter.jpg';
import macDemarcoPoster from './mac demarco poster.jpg';
import cyberpunkPoster from './Cyberpunk poster.jpg';
import rdr2Poster from './Red dead redemption II poster.jpg';
import girlWithBun from './girlwithbun.jpg';
import tripleEyes from './triple-eyes.jpg';

export default function Body() {
  const galleryImages = [
    { src: macDemarcoPoster, alt: 'Mac DeMarco poster', caption: 'Mac DeMarco — tour/poster concept' },
    { src: rukiaPoster, alt: 'Rukia Kuchiki poster', caption: 'Bleach — Rukia Kuchiki fan poster' },
    { src: nierAutomataPoster, alt: 'NieR: Automata poster', caption: 'Poster study — NieR: Automata' },
    { src: cyberpunkPoster, alt: 'Cyberpunk 2077 poster', caption: 'Cyberpunk 2077 — neon poster' },
    { src: rdr2Poster, alt: 'Red Dead Redemption II poster', caption: 'Red Dead Redemption II — western poster' },
    { src: spiderFlower, alt: 'Spider flower artwork', caption: 'Spider Flower — experimental composition' },
    { src: girlWithBun, alt: 'Girl with bun illustration', caption: 'Portrait study — girl with bun' },
    { src: tripleEyes, alt: 'Triple eyes artwork', caption: 'Abstract — triple eyes' },
    { src: ivePoster, alt: 'IVE poster', caption: 'IVE — music poster study' },
    { src: miraPoster, alt: 'Mira poster', caption: 'Mira — graphic poster' },
    { src: eightBallGirl, alt: '8 Ball Girl artwork', caption: '8 Ball Girl — character poster' },
    { src: snowstrippersPoster, alt: 'Snow Strippers poster', caption: 'Snow Strippers — gig poster concept' },
  ];

  return (
    <>
      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        This page represents a collection of design/creative work I've created in my free time. These works mostly
        consist of poster designs and experiments in Adobe Tools (PS/AE/PR/AI)
      </p>

      <h2 className="mt-8 text-lg font-semibold">themes</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
        <li>Experiments in Photoshop with effects such as glow, pattern overlays, blending modes and more.</li>
        <li>
          Poster Designs, made in Photoshop to learn more about composition, typography, color and other visual effects.
        </li>
      </ul>

      <h2 className="mt-10 mb-4 text-lg font-semibold">results</h2>
      <ProjectGallery
        splash={{
          src: esotsmPoster,
          alt: 'Blender setup overview',
          caption: 'Well I modeled to experiment with Cycles vs. Eevee rendering',
        }}
        images={galleryImages}
      />
    </>
  );
}
