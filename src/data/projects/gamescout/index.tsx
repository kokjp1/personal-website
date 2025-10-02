import * as React from "react";
import Image from "next/image";
import type { ProjectMeta } from "@/components/content/ProjectLayout";

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
  links: [{ label: "Figma file", href: "https://example.com/gamescout" }],
};

export default function Body() {
  const images: { src: any; alt: string; caption: string }[] = [
    { src: screenHome, alt: "Home feed screen", caption: "Home feed with activity and recommended games" },
    { src: screenDetail, alt: "Game detail screen", caption: "Detailed game view with metadata & actions" },
    { src: screenResults, alt: "Search results screen", caption: "Search results listing filtered games" },
    { src: screenBookmarks, alt: "Bookmarks screen", caption: "Saved / bookmarked games collection" },
    { src: screenRegister, alt: "Register screen", caption: "Account creation interface" },
    { src: screenSignin, alt: "Sign in screen", caption: "Authentication entry (sign in)" },
    // Extra full-width splash below
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
              {/* Full-width splash / showcase (2 cols mobile / 2 cols sm / 3 cols lg) */}
        <figure className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-2 sm:p-3 shadow-sm col-span-2 lg:col-span-3">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-md cursor-zoom-in">
              <Image
                src={screenSplash}
                alt="Splash / onboarding screen"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(min-width:1024px) 45vw, 100vw"
                placeholder="blur"
              />
            </div>
          <figcaption className="mt-2 text-[10px] sm:text-xs text-muted-foreground leading-snug">
            Splash / onboarding experience introducing GameScout.
          </figcaption>
        </figure>
      <div className="mt-4 grid gap-4 grid-cols-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map(img => (
          <figure
            key={img.alt}
            className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-2 sm:p-3 shadow-sm"
          >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md cursor-zoom-in">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 50vw"
                  placeholder="blur"
                />
              </div>
            <figcaption className="mt-2 text-[10px] sm:text-xs text-muted-foreground leading-snug">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}