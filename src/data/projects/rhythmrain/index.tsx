import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { ProjectGallery } from "@/components/lightbox/ProjectGallery";

import cover from "./rhythmrain.png";
import home from "./home.jpg";
import library from "./library.jpg";
import onboarding from "./onboarding.jpg";
import registerlogin from "./registerlogin.jpg";
import settings from "./settings.jpg";
import skeletonstate from "./skeletonstate.jpg";

export const meta: ProjectMeta = {
  slug: "rhythmrain",
  title: "RhythmRain",
  year: 2024,
  context: "CMD",
  description: "Fictional app for adding a deeper level of immersion to playing videogames.",
  roles: ["🎨 UI"],
  tags: ["Figma"],
  cover,
};

export default function Body() {
  const galleryImages = [
    { src: onboarding, alt: "Onboarding flow", caption: "Onboarding — quick intro and permissions" },
    { src: registerlogin, alt: "Register / login", caption: "Auth — register and login" },
    { src: library, alt: "Library screen", caption: "Library — browse tracks and presets" },
    { src: settings, alt: "Settings screen", caption: "Settings — audio, visuals, and calibration" },
    { src: skeletonstate, alt: "Skeleton / empty state", caption: "Skeleton State" },
  ];

  return (
    <>
      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        RhythmRain is a tiny rhythm toy: raindrops fall to the beat and you tap to catch them.
        It explores timing, feedback, and “feel” rather than content volume.
      </p>

      <h2 className="mt-8 text-lg font-semibold">design</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Minimal UI—focus on clear <span className="font-medium">audio/visual sync</span> and satisfying micro‑interactions.</li>
        <li>Difficulty curves built from tempo + spawn density rather than arbitrary levels.</li>
        <li>Simple score loop with streaks and soft fail states to encourage flow.</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">result</h2>
      <p className="mt-3 text-sm leading-6">
        A compact prototype that’s fun for short bursts and a foundation for future tracks and input calibration.
      </p>

      <div className="mt-6">
        <ProjectGallery
          splash={{ src: home, alt: "Home screen", caption: "Home — play, recent, and quick start" }}
          images={galleryImages}
          gridClasses="grid-cols-2 md:grid-cols-3" // 2 on mobile, 3 on desktop
        />
      </div>
    </>
  );
}