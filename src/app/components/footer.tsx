"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent">
      <div className="mx-auto w-full max-w-3xl px-5 md:px-12 mt-10 mb-6">
        <div className="flex h-14 gap-8 items-center justify-between">
          <p className="text-xs text-foreground/70">
            Copyright © 2025 James Kok - All rights reserved
          </p>

          <nav className="flex items-center gap-4">
            {/* GitHub */}
            <div className="relative group">
              <Link
                href="https://github.com/kokjp1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                <Icon
                  icon="mdi:github"
                  className="size-5 text-foreground/70 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  aria-hidden
                />
              </Link>
              <span
                role="tooltip"
                className="pointer-events-none absolute left-1/2 -top-7 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow transition-all duration-200 group-hover:-top-8 group-hover:opacity-100 group-focus-within:-top-8 group-focus-within:opacity-100"
              >
                GitHub
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <Link
                href="https://www.linkedin.com/in/jpk1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="size-5 text-foreground/70 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  aria-hidden
                />
              </Link>
              <span
                role="tooltip"
                className="pointer-events-none absolute left-1/2 -top-7 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow transition-all duration-200 group-hover:-top-8 group-hover:opacity-100 group-focus-within:-top-8 group-focus-within:opacity-100"
              >
                LinkedIn
              </span>
            </div>
            
            {/* Behance */}
            <div className="relative group">
              <Link
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                <Icon
                  icon="mdi:behance"
                  className="size-5 text-foreground/70 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  aria-hidden
                />
              </Link>
              <span
                role="tooltip"
                className="pointer-events-none absolute left-1/2 -top-7 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow transition-all duration-200 group-hover:-top-8 group-hover:opacity-100 group-focus-within:-top-8 group-focus-within:opacity-100"
              >
                Behance
              </span>
            </div>

            {/* Dribbble */}
            <div className="relative group">
              <Link
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                <Icon
                  icon="mdi:dribbble"
                  className="size-5 text-foreground/70 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  aria-hidden
                />
              </Link>
              <span
                role="tooltip"
                className="pointer-events-none absolute left-1/2 -top-7 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow transition-all duration-200 group-hover:-top-8 group-hover:opacity-100 group-focus-within:-top-8 group-focus-within:opacity-100"
              >
                Dribbble
              </span>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
