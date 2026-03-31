import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import cover from './chatgpt-extractor-cover.jpg';

// import cover from './extractorcover.png'; // Add this when you have the cover

export const meta: ProjectMeta = {
  slug: 'chatextractor',
  title: 'ChatGPT HTML → JSON Extractor',
  year: 2026,
  context: 'Personal',
  description: 'Browser tool that converts ChatGPT HTML exports to clean JSON, 100% local, no server and no install.',
  roles: ['💻 DEV'],
  tags: ['HTML', 'CSS', 'JavaScript'],
  cover,
  links: [
    {
      label: 'Source Code',
      href: 'https://github.com/kokjp1/chatgpt-extractor',
    },
    {
      label: 'Live App',
      href: 'https://kokjp1.github.io/ChatGPT-Extractor/',
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A browser-based tool that converts large and messy ChatGPT chats via HTML exports into clean, structured JSON. Built to solve a real problem: wanting to feed complete chat histories to other AI models (like Claude or Gemini) without losing context or structure. The current solution is to export your OpenAI data, but it's not very user-friendly. It gives you a huge unstructured JSON file with <em>all of your chats</em>. Not to mention that a data export takes between 24-72hrs to complete. This way you can easily export a specific desired chat and feed it to another AI model.
      </p>

      <h2 className="mt-8 mb-4 text-lg font-semibold">Key Features</h2>
      <ul className="list-disc pl-5 space-y-2 mb-8">
        <li>local & private, everything runs in the browser via JavaScript, nothing is uploaded to any server whatsoever</li>
        <li>Automatically recognizes <code>user</code> and <code>AI assistant</code> roles, preserves paragraphs, strips HTML noise and markup</li>
        <li>No install required just open <u><a href="https://kokjp1.github.io/ChatGPT-Extractor/">the live website</a></u> in any modern browser</li>
      </ul>
    </>
  );
}
