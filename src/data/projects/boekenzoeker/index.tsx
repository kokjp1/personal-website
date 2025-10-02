import * as React from "react";
import Image from "next/image";
import type { ProjectMeta } from "@/components/content/ProjectLayout";

import cover from "./boekenzoekercover.jpg";
import screenHome from "./boekenzoeker_home.jpg";
import screenForm from "./boekenzoeker_form.png";
import screenWishlist from "./boekenzoeker_wishlist.png";
import screenError from "./boekenzoeker_error.png";
import screenGeneric from "./boekenzoeker.png";

export const meta: ProjectMeta = {
  slug: "boekenzoeker",
  title: "Boekenzoeker",
  year: 2023,
  context: "CMD",
  description: "Interface design for a (fictional) book discovery & wishlist application.",
  roles: ["🔎 UX", "🎨 UI"],
  tags: ["Figma"],
  cover,
  links: [{ label: "Figma file", href: "https://www.figma.com/file/3mX4bX4pX4pX4pX4pX4pX4/Boekenzoeker?type=design&node-id=0-1&t=example" }],
};

export default function Body() {
  const images: { src: any; alt: string; caption: string }[] = [
    { src: screenHome, alt: "Home feed screen", caption: "Home feed with recommended & trending books" },
    { src: screenForm, alt: "Add book form", caption: "Form to add or edit a book entry" },
    { src: screenWishlist, alt: "Wishlist screen", caption: "User wishlist with priority indicators" },
    { src: screenError, alt: "Error state", caption: "Graceful empty / error state styling" },
    { src: screenGeneric, alt: "Generic library view", caption: "Library browsing interface" },
  ];

  return (
    <>
      <p>
        The Boekenzoeker (book finder) project was a school assignment focused on UI design. The goal was to create an intuitive and visually appealing interface for a book discovery and wishlist application. It was designed to be used on an ipad terminal in the OBA (Public Library Amsterdam), aimed at encouraging high school students to read more by reducing the friction of finding and choosing books.
      </p>

      <h2 className="mt-10 text-lg font-semibold">goal</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Design an interface in Figma for the Public Library of Amsterdam</li>
        <li>Encourage high school students to read more by simplifying book discovery</li>
        <li>Keep the context (an ipad terminal in the library) in mind while designing</li>
      </ul>

      <h2 className="mt-10 text-lg font-semibold">result</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <figure
            key={img.alt}
            className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-3 shadow-sm"
          >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md cursor-zoom-in">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                  placeholder="blur"
                />
              </div>
            <figcaption className="mt-2 text-xs text-muted-foreground leading-snug">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}