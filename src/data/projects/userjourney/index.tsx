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
  return (
    <>

      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        A user‑journey mapping exercise that turns interviews and observations into a shared, visual narrative.
        The artifact highlights emotions, pain points, and opportunities across stages.
      </p>

      <h2 className="mt-8 text-lg font-semibold">approach</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Synthesized quotes and moments into a stage‑based journey with <span className="font-medium">swimlanes</span> for user actions, frontstage UI, and backstage processes.</li>
        <li>Annotated <span className="font-medium">moments‑that‑matter</span> and translated them into opportunity statements.</li>
        <li>Delivered a tidy visual system so teammates can update the map as research grows.</li>
      </ul>
    </>
  );
}