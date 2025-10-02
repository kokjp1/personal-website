import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
// import { Figure } from "@/components/content/Figure";

import cover from "./onyxcover.jpg";

export const meta: ProjectMeta = {
  slug: "onyx",
  title: "Onyx",
  year: 2024,
  context: "Internship",
  description: "App for tracking personal growth amongst Work-based learning programs.",
  roles: ["🎨 UI", "🔎 UX", "💻 DEV"],
  tags: ["Firebase", "Flutterflow", "Figma"],
  cover,
};

export default function Body() {
  return <p>Onyx case study coming soon.</p>;
}