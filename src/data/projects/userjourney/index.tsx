import * as React from 'react';
import { ProjectMeta } from '@/components/content/ProjectLayout';
// import { Figure } from "@/components/content/Figure";

import cover from './userjourney.png';

export const meta: ProjectMeta = {
  slug: 'userjourney',
  title: 'User Journey',
  year: 2024,
  context: 'CMD',
  description: 'User Journey about inventing a device to improve sleep quality.',
  roles: ['🔎 UI'],
  tags: ['Figma'],
  cover,
};

export default function Body() {
  return (
    <>
      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        As part of a bigger (group) project, I was tasked to come up with a User Journey (and Persona) to help with the
        research stage of the project, and get a better understanding of the project context. With this User Journey we
        can identify pain points, oppertunies and other insights. These will help us come up with a solution to improve
        Emma's sleep quality."
      </p>

      <h2 className="mt-8 text-lg font-semibold">Goal</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
        <li>
          The goal of this user Journey is to visualize the nighttime routine of "<em>Emma</em>" so that we can gather
          valuable insights.
        </li>
      </ul>

      {/* <h2 className="mt-8 text-lg font-semibold">approach</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Came up with a color palette to keep a consistent & professional style across all research deliverables</li>
        <li>Created a User Journey in Figma, visualizing Emma's nighttime routine</li>
      </ul> */}
    </>
  );
}
