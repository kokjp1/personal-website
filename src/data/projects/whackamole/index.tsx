import { ProjectMeta } from "@/components/content/ProjectLayout";
import cover from "./whackamole.png";

export const meta: ProjectMeta = {
  slug: "whackamole",
  title: "Whack-A-Mole",
  year: 2024,
  context: "CMD",
  description: "Project to learn more about Javascript",
  roles: ["💻 DEV"],
  tags: ["HTML", "CSS", "JavaScript"],
  cover,
};

export default function Body() {
  return <p>Whack-A-Mole case study coming soon.</p>;
}