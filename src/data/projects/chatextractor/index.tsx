import * as React from 'react';
import type { ProjectMeta } from '@/components/content/ProjectLayout';
import cover from './chatgpt-extractor-cover.jpg';

// import cover from './extractorcover.png'; // Add this when you have the cover

export const meta: ProjectMeta = {
  slug: 'chatextractor',
  title: 'ChatGPT HTML → JSON Extractor',
  year: 2025,
  context: 'Personal',
  description: 'Browser tool that converts ChatGPT HTML exports to clean JSON — 100% local, no server, no install.',
  roles: ['💻 DEV'],
  tags: [],
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
        A fast, browser-based tool that converts large and messy ChatGPT HTML exports into clean, structured JSON. Built to solve a real personal problem: wanting to feed complete chat histories to other AI models (like Claude or Gemini) without losing context or structure.
      </p>

      <h2 className="mt-8 mb-4 text-lg font-semibold">Key Features</h2>
      <ul className="list-disc pl-5 space-y-2 mb-8">
        <li>100% local &amp; private — everything runs in the browser via JavaScript, nothing is uploaded to any server</li>
        <li>Automatically recognizes <code>user</code> and <code>assistant</code> roles, preserves paragraphs, strips HTML noise</li>
        <li>Multimodal ready — supports extracting screenshots and images (via Base64) when saved with SingleFile</li>
        <li>No install required — just open <code>index.html</code> in any modern browser</li>
      </ul>
    </>
  );
}
