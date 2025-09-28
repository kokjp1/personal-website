import { ProjectMeta } from "@/components/content/ProjectLayout";
import cover from "./whackamole.png";

export const meta: ProjectMeta = {
  slug: "whackamole",
  title: "Whack-A-Mole",
  year: 2024,
  description: "Placeholder description for Whack-A-Mole project.",
  roles: [],
  tags: [],
  cover,
};

export default function Body() {
  return <p>Whack-A-Mole case study coming soon.</p>;
}