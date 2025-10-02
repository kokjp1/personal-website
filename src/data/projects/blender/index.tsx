import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { ProjectGallery } from "@/components/lightbox/ProjectGallery";

import cover from "./blendersetup.png";
import burgers1 from "./burgers1.png";
import burgers2 from "./burgers2.png";
import cybercity from "./cybercity.png";
import retroscape from "./retroscape.png";
import pcrender from "./pcrender.png";
import setup1 from "./setup1.png";
import setup2 from "./setup2.png";
import vendingmachine from "./vendingmachine.png";
import wellrender from "./wellrender.png";


export const meta: ProjectMeta = {
  slug: "blender",
  title: "Blender",
  year: "Ongoing",
  description: "Models and scenes I've been creating in Blender.",
  context: "Personal Project",
  roles: ["✨ CREA"],
  tags: ["Blender"],
  cover,
};

export default function Body() {
  const galleryImages = [
    {
      src: retroscape,
      alt: "Retro neon landscape animation",
      caption: (
        <a
          href="https://www.instagram.com/p/DObuM4tDJr_CQWLwzpmVG3u_GXJ0FN3lDv5lh40/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          🔗 Procedurally generated retro neon landscape with Geometry Nodes (animation)
        </a>
      )
    },
    { src: cybercity, alt: "Cyberpunk city scene", caption: (
      <a
        href="https://www.instagram.com/p/DObuiSyjAESDwzP6O9vUA9gpcfcMe5IoilDavo0/?img_index=1"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        🔗 Procedurally generated cyberpunk building/city (animation)
      </a>
    ) },
    { src: vendingmachine, alt: "Stylized vending machine", caption: (
      <a
        href="https://www.instagram.com/p/DOd6PJZjCGWTsl1cB0UjCz7k_P2WMdr0pNeaKQ0/?img_index=2"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        🔗 Stylized vending machine where I experimented with lighting
      </a>
    ) },
    { src: burgers1, alt: "Burger render v1", caption: "Burger Factory - Production line" },
    { src: burgers2, alt: "Burger render v2", caption: "Burger Factory - Entrance view" },
    { src: pcrender, alt: "Custom PC build render", caption: "Close up of the PC I modeled for my setup" },
    { src: setup1, alt: "Blender workspace setup 1", caption: "Frontal View of my setup that I modeled in Blender" },
    { src: setup2, alt: "Blender workspace setup 2", caption: "Other perspective of my setup I modeled in Blender" },
  ];

  return (
    <>
      <p>
        I've always wanted to experiment with 3D modeling software, primarily Blender. In my second year of CMD I finally
        got the incentive to dive in for a school subject related to 3D modeling. Since then I've been exploring Blender
        in my free time, creating various models and scenes.
      </p>

      <h2 className="mt-10 mb-4 text-lg font-semibold">result</h2>
      <ProjectGallery
        splash={{
          src: wellrender,
          alt: "Blender setup overview",
          caption: "Well I modeled to experiment with Cycles vs. Eevee rendering"
        }}
        images={galleryImages}
      />
    </>
  );
}