import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
// import { Figure } from "@/components/content/Figure";

import cover from "./boekenzoekercover.jpg";

export const meta: ProjectMeta = {
  slug: "boekenzoeker",
  title: "Boekenzoeker",
  year: 2024,
  description: "Placeholder description for Boekenzoeker project.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>Boekenzoeker case study coming soon.</p>;
}