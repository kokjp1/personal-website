import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";
import { Figure } from "@/components/content/Figure";

// IMPORTANT: use relative path prefix "./"
import cover from "./boekenzoekercover.jpg";

export const meta: ProjectMeta = {
  slug: "aurora-dashboard",
  title: "Aurora Dashboard",
  year: 2024,
  description: "Modular analytics dashboard with real-time tiles.",
  context: "Client",
  roles: ["🎨 UI", "🔎 UX", "💻 DEV"],
  tags: ["Next.js", "TypeScript"],
  cover,
  // gallery omitted for now (only one asset exists)
  links: [
    { label: "Prototype", href: "https://example.com/proto" },
    { label: "Repo", href: "https://github.com/example/aurora" },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Aurora Dashboard is a modular surface for monitoring streaming product and billing
        metrics. Focus on clarity, composability and real-time awareness.
      </p>
      <h2>Overview</h2>
      <p>
        A token-driven layout grid + schema based tile system allowed teams to compose
        dashboards without custom code.
      </p>
      <Figure src={cover} alt="Aurora dashboard cover" caption="High level tile layout concept." />
    </>
  );
}