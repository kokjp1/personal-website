import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
// import { Figure } from "@/components/content/Figure";

import cover from "./listralcover.jpg";

export const meta: ProjectMeta = {
  slug: "listral",
  title: "Listral",
  year: 2024,
  context: "Personal Project",
  description: "A media tracker app for keeping up with your favorite shows/movies/games",
  roles: ["💻 DEV", "🎨 UI"],
  tags: ["Figma", "React", "Tailwind", "TypeScript", "Supabase"],
  cover,
};

export default function Body() {
  return <p>Listral case study coming soon.</p>;
}