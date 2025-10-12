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
  return (
  <>
  <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        Onyx is a work‑based learning companion that lets students and coaches set goals, track growth, and reflect on progress.
        I joined during the early product definition and shaped the experience end‑to‑end: information architecture, UI system,
        data model, and an interactive prototype in Flutterflow backed by Firebase.
      </p>

      <h2 className="mt-8 text-lg font-semibold">my role</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Mapped the program structure into a <span className="font-medium">goal → evidence → feedback</span> data model.</li>
        <li>Designed a compact, scalable <span className="font-medium">component library</span> for cards, progress chips, and trackers.</li>
        <li>Built a working prototype in <span className="font-medium">Flutterflow</span> with Firebase Auth + Firestore collections.</li>
        <li>Ran lightweight <span className="font-medium">usability tests</span> with students and mentors; iterated on onboarding and the review flow.</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">process</h2>
      <p className="mt-3 text-sm leading-6">
        We started from interviews to understand what “progress” means per stakeholder. I then sketched flows for creating learning goals,
        attaching evidence (notes, uploads, links), and requesting feedback. In Flutterflow I implemented role‑based navigation (student / coach),
        collection security rules, and list/detail patterns that scale to many goals without becoming noisy.
      </p>

      <h2 className="mt-8 text-lg font-semibold">result</h2>
      <p className="mt-3 text-sm leading-6">
        The prototype demonstrates the full loop: set a goal → add evidence → request/receive feedback → reflect.
        It’s ready to be extended into a pilot with real cohorts. Below is a snapshot from an internal build.
      </p>
    </>
  );
}