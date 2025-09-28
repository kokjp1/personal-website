import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { Figure } from "@/components/content/Figure";

import cover from "./blendersetup.png";

export const meta: ProjectMeta = {
  slug: "blender",
  title: "Blender",
  year: 2025,
  description: "Models and scenes I've been creating in Blender.",
  context: "Personal",
  roles: ["✨ CREA"],
  tags: ["Blender"],
  cover,
  links: [{ label: "Source", href: "https://github.com/example/portfolio" }],
};

export default function Body() {
  return (
    <>
      <p>
        Shift from static case studies to composable TSX modules exporting metadata and
        body for faster iteration without MDX parsing.
      </p>
      <h2>Approach</h2>
      <p>
        Single import surface (meta) for the list view; full module only loads on detail
        navigation, reducing initial bundle.
      </p>
      <Figure src={cover} alt="Portfolio hero" caption="Refreshed visual system." />
    </>
  );
}