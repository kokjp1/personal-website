import { ProjectMeta } from "@/components/content/ProjectLayout";
import cover from "./esotsm.jpg";

export const meta: ProjectMeta = {
  slug: "personalprojects",
  title: "Personal Projects",
  year: 2024,
  context: "Personal Project",
  description: "Personal projects I've worked on in my free time.",
  roles: ["✨ CREA"],
  tags: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
  cover,
};

export default function Body() {
  return <p>Personal projects overview coming soon.</p>;
}