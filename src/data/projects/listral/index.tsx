import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
// import { Figure } from "@/components/content/Figure";

import cover from "./listralcover.jpg";

export const meta: ProjectMeta = {
  slug: "listral",
  title: "Listral",
  year: 2024,
  description: "Placeholder description for Listral project.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>Listral case study coming soon.</p>;
}