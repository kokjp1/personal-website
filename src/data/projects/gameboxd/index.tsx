import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { Figure } from "@/components/content/Figure";

import cover from "./gameboxd.png";

export const meta: ProjectMeta = {
  slug: "gameboxd",
  title: "Gameboxd",
  year: 2024,
  description: "Placeholder description for Gameboxd project.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>Gameboxd case study coming soon.</p>;
}