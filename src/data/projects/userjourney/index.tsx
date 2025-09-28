import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { Figure } from "@/components/content/Figure";

import cover from "./userjourney.png";

export const meta: ProjectMeta = {
  slug: "userjourney",
  title: "User Journey",
  year: 2024,
  description: "Placeholder description for User Journey project.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>User Journey case study coming soon.</p>;
}