import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { Figure } from "@/components/content/Figure";

import cover from "./boekenzoekercover.jpg";

export const meta: ProjectMeta = {
  slug: "immersive-visualizer",
  title: "Immersive Audio Visualizer",
  year: 2023,
  description: "WebGL + reactive audio pipeline translating frequency bands into motion.",
  context: "Personal",
  roles: ["✨ CREA", "💻 DEV"],
  tags: ["HTML", "CSS", "After Effects", "Photoshop"],
  cover,
  links: [{ label: "Live Demo", href: "https://example.com/visualizer" }],
};

export default function Body() {
  return (
    <>
      <p>
        Exploration into mapping live FFT data into layered procedural geometry with
        temporal persistence and subtle material response.
      </p>
      <h2>Technique</h2>
      <p>
        Audio bands drive displacement and color uniforms; a persistence buffer accumulates
        luminance to create motion echo without heavy particle counts.
      </p>
      <Figure src={cover} alt="Visualizer frame" caption="Captured frame of displacement and color diffusion." />
    </>
  );
}