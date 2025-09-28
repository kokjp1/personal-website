import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
// import { Figure } from "@/components/content/Figure";

import cover from "./gamescoutcover.jpg";

export const meta: ProjectMeta = {
  slug: "gamescout",
  title: "GameScout",
  year: 2024,
  description: "Placeholder description for GameScout project.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>GameScout case study coming soon.</p>;
}