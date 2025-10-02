import * as React from "react";
import Image from "next/image";
import type { ProjectMeta } from "@/components/content/ProjectLayout";
import { ProjectGallery } from "@/components/lightbox/ProjectGallery";

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
  links: [{ label: "Figma Prototype", href: "https://www.figma.com/proto/zk8okk3CbdqdK9JOBfz6IS/Boekenzoeker---VID?node-id=0-1&t=XwndegwpkqNBZ8ut-1" }],
};

export default function Body() {
  const galleryImages = [
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

      <h2 className="mt-10 mb-4 text-lg font-semibold">result</h2>
      <ProjectGallery
        splash={{
          src: screenHome,
          alt: "Home feed screen",
          caption: "Primary browsing hub introducing recommendations."
        }}
        images={galleryImages}
      />
    </>
  );
}