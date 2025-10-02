import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import type { ProjectMeta } from "@/components/content/ProjectLayout";

import cover from "./gameboxd.png";
import exposition from "./exposition.png";
import screenChats from "./gameboxdchats.jpg";
import screenCollection from "./gameboxdcollectionjames.jpg";
import screenHome from "./gameboxdhome.jpg";
import screenLogin from "./gameboxdlogin.jpg";
import screenProfile from "./gameboxdprofilejames.jpg";
import screenReviews from "./gameboxdreviewsjames.jpg";

export const meta: ProjectMeta = {
  slug: "gameboxd",
  title: "Gameboxd",
  year: 2024,
  context: "CMD",
  description: "A social platform for gamers to share and discover video games.",
  roles: ["🔎 UX", "🎨 UI"],
  tags: ["Figma"],
  cover,
  links: [{ label: "Figma file", href: "https://github.com/yourusername/gameboxd" }],
};

interface GalleryImage {
  src: StaticImageData;
  alt: string;
  caption: string;
}

export default function Body() {
  const images: GalleryImage[] = [
    { src: screenHome, alt: "Home feed screen", caption: "Home feed with activity and recommended games" },
    { src: screenProfile, alt: "Profile screen", caption: "User profile with stats and recent activity" },
    { src: screenCollection, alt: "Collection screen", caption: "User owned / tracked game collection" },
    { src: screenReviews, alt: "Reviews screen", caption: "Game reviews & rating interface" },
    { src: screenChats, alt: "Chats screen", caption: "Direct messages / chat overview" },
    { src: screenLogin, alt: "Login screen", caption: "Authentication entry (login / signup)" },
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
      <div className="mt-4 grid gap-4 grid-cols-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map(img => (
          <figure
            key={img.alt}
            className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-2 sm:p-3 shadow-sm"
          >
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-md cursor-zoom-in">
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

        <figure className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-2 sm:p-3 shadow-sm col-span-2 lg:col-span-3">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-md cursor-zoom-in">
            <Image
              src={exposition}
              alt="Exposition display with NFC profile card"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="100vw"
              placeholder="blur"
            />
          </div>
          <figcaption className="mt-2 text-[10px] sm:text-xs text-muted-foreground leading-snug">
            Exposition setup: physical NFC profile card linking directly into the Gameboxd profile view.
          </figcaption>
        </figure>
      </div>
    </>
  );

}
