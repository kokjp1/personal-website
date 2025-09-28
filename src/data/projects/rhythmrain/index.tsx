import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
// import { Figure } from "@/components/content/Figure";

import cover from "./rhythmrain.png";

export const meta: ProjectMeta = {
  slug: "rhythmrain",
  title: "RhythmRain",
  year: 2024,
  description: "Placeholder description for RhythmRain project.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>RhythmRain case study coming soon.</p>;
}