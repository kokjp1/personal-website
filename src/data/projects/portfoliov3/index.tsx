import * as React from "react";
import { ProjectMeta } from "@/components/content/ProjectLayout";

import cover from "./portfoliocover.jpg";

export const meta: ProjectMeta = {
  slug: "portfoliov3",
  title: "portfolio (v3)",
  year: 2025,
  context: "Personal",
  description: "My third iteration portfolio website.",
  roles: ["🔎 UI", "💻 DEV"],
  tags: ["Figma", "React", "TypeScript", "Tailwind", "Next.js", "shadcn", "Vercel"],
  cover,
};

export default function Body() {
  return (
    <>

      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        This is the third version of my portfolio website, developed to show who I am, what I've made and what I'm good at. It's built using (modern) web technologies like React, TypeScript, Tailwind, Next.js and shadcn, ensuring a fast and responsive experience. 
      </p>

      <h2 className="mt-8 text-lg font-semibold">Result</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Take a look around :)</li>
      </ul> 
    </>
  );
}