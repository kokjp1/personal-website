import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
// import { Figure } from "@/components/content/Figure";

import cover from "./userjourney.png";

export const meta: ProjectMeta = {
  slug: "userjourney",
  title: "User Journey",
  year: 2024,
  context: "CMD",
  description: "User Journey about inventing a device to improve sleep quality.",
  roles: ["🔎 UI"],
  tags: ["Figma"],
  cover,
};

export default function Body() {
  return <p>User Journey case study coming soon.</p>;
}