import * as React from "react";
import type { ProjectMeta } from "@/components/content/ProjectLayout";
import { ProjectGallery } from "@/components/lightbox/ProjectGallery";

import cover from "./gamescoutcover.jpg";
import screenBookmarks from "./gamescoutbookmarks.png";
import screenDetail from "./gamescoutdetail.png";
import screenHome from "./gamescouthome.png";
import screenRegister from "./gamescoutregister.png";
import screenResults from "./gamescoutresults.png";
import screenSignin from "./gamescoutsignin.png";
import screenSplash from "./gamescoutsplash.png";

export const meta: ProjectMeta = {
  slug: "gamescout",
  title: "GameScout",
  year: 2024,
  context: "CMD",
  description: "A social platform for gamers to share and discover video games.",
  roles: ["🔎 UX", "🎨 UI"],
  tags: ["Figma"],
  cover,
  links: [{ label: "Source code", href: "https://github.com/kokjp1/Gamescout" }],
};

export default function Body() {
  const galleryImages = [
    { src: screenHome, alt: "Home feed screen", caption: "Home feed with activity and recommended games" },
    { src: screenDetail, alt: "Game detail screen", caption: "Detailed game view with metadata & actions" },
    { src: screenResults, alt: "Search results screen", caption: "Search results listing filtered games" },
    { src: screenBookmarks, alt: "Bookmarks screen", caption: "Saved / bookmarked games collection" },
    { src: screenRegister, alt: "Register screen", caption: "Account creation interface" },
    { src: screenSignin, alt: "Sign in screen", caption: "Authentication entry" },
  ];

  return (
    <>
      <p>
        This design was for a project about UI design. The goal was connecting a physical element with a digital
        interface. I designed a mobile app acting as a social layer for gaming: news, profiles, friends, messaging and
        curated collections. The physical counterpart was an NFC business card linking directly to a user profile.
      </p>

      <h2 className="mt-10 text-lg font-semibold">goal</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Create a cohesive mobile interface in Figma.</li>
        <li>Bridge a physical NFC card with a digital profile experience.</li>
        <li>Demonstrate the concept at an exposition.</li>
      </ul>

      <h2 className="mt-10 text-lg font-semibold">result</h2>

      <ProjectGallery
        splash={{
          src: screenSplash,
          alt: "Splash / onboarding screen",
          caption: "Splash / onboarding experience introducing GameScout.",
        }}
        images={galleryImages}
      />
    </>
  );
}