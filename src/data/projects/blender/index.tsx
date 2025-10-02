import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { Figure } from "@/components/content/Figure";

import cover from "./blendersetup.png";

export const meta: ProjectMeta = {
  slug: "blender",
  title: "Blender",
  year: "Ongoing",
  description: "Models and scenes I've been creating in Blender.",
  context: "Personal Project",
  roles: ["✨ CREA"],
  tags: ["Blender"],
  cover,
  // links: [{ label: "Source", href: "https://github.com/example/portfolio" }],
};

export default function Body() {
  return (
    <>
      <p>
        I've always wanted to experiment with 3D modeling software, primarily Blender. In my second year of CMD I finally got the incentive to dive in for a school subject related to 3D modeling. Since then I've been exploring Blender in my free time, creating various models and scenes.
      </p>
      <p className="text-2xl mt-16">MORE 3D RENDERS COMING SOON</p>
      {/* <Figure src={cover} alt="Portfolio hero" caption="Refreshed visual system." /> */}
    </>
  );
} 