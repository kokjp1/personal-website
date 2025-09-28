import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { Figure } from "@/components/content/Figure";

import cover from "./minorcover.jpg";

export const meta: ProjectMeta = {
  slug: "minor",
  title: "Minor",
  year: 2024,
  description: "Placeholder description for Minor project.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>Minor case study coming soon.</p>;
}