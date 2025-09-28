import { ProjectMeta } from "@/components/content/ProjectLayout";
import cover from "./esotsm.jpg";

export const meta: ProjectMeta = {
  slug: "personalprojects",
  title: "Personal Projects",
  year: 2024,
  description: "Placeholder description for personal side projects.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>Personal projects overview coming soon.</p>;
}