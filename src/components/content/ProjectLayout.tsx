'use client';
import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ToolBadge } from "./ToolBadge";
import { ExternalLink, ArrowLeft } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                            Project meta (shared)                            */
/* -------------------------------------------------------------------------- */
export type ProjectMeta = {
  slug: string;
  title: string;
  year: number | string;
  description?: string;
  context?: string;
  roles?: string[];
  tags?: string[];
  cover?: StaticImageData;
  gallery?: StaticImageData[];
  links?: { label: string; href: string }[];
  layout?: "custom";
};

interface ProjectLayoutProps {
  meta: ProjectMeta;
  children: React.ReactNode;
}

/* Animation variants */
const headerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/* -------------------------------------------------------------------------- */
/*                             Project layout shell                            */
/* -------------------------------------------------------------------------- */
export function ProjectLayout({ meta, children }: ProjectLayoutProps) {
  const {
    title,
    year,
    context,
    roles = [],
    tags = [],
    links = [],
    cover,
    gallery,
    description,
  } = meta;

  return (
    <div className="px-5 md:px-8 py-10 flex flex-col gap-10">
      {/* Back button */}
      <motion.nav
        aria-label="Breadcrumb"
        className="-mt-2 mb-2 relative z-20 pointer-events-auto"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium
                     text-muted-foreground hover:text-foreground hover:bg-muted/40
                     transition-colors focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-offset-2 focus-visible:ring-muted-foreground/30
                     dark:focus-visible:ring-offset-background"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          <span>Back to projects</span>
        </Link>
      </motion.nav>

      {/* ----------------------------- Header / Hero ------------------------------ */}
      <motion.header
        className="flex flex-col gap-6"
        variants={headerContainer}
        initial="hidden"
        animate="show"
      >
        {/* ---------------- Title / year / context / description ---------------- */}
        <motion.div variants={headerItem} className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">{year}</span>
            {context && (
              <>
                <span className="opacity-30">/</span>
                <span>{context}</span>
              </>
            )}
          </div>
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>

        {/* -------------------------- Roles & tags (pills) ------------------------- */}
        {(roles.length > 0 || tags.length > 0) && (
          <motion.div variants={headerItem} className="flex flex-col gap-3">
            {roles.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {roles.map((r) => (
                  <ToolBadge key={r} label={r} />
                ))}
              </div>
            )}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <ToolBadge key={t} label={t} />
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* ------------------------------ External links ------------------------------ */}
        {links.length > 0 && (
          <motion.div variants={headerItem} className="flex flex-wrap gap-3 pt-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium underline underline-offset-4 hover:text-foreground/80 transition-colors"
              >
                {l.label} <ExternalLink className="inline-block mb-0.5 h-3 w-3" aria-hidden />
              </a>
            ))}
          </motion.div>
        )}

        {/* -------------------------------- Cover image -------------------------------- */}
        {cover && (
          <motion.div
            variants={headerItem}
            className="relative w-full aspect-[16/9] max-h-[520px] overflow-hidden rounded-lg border bg-muted/30"
          >
            <Image
              src={cover}
              alt={`${title} cover`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        )}
      </motion.header>

      {/* ----------------------------- Gallery (optional) ---------------------------- */}
      {gallery && gallery.length > 0 && (
        <section className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              className="relative aspect-[16/10] overflow-hidden rounded-md border bg-muted/30"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={img}
                alt={`${title} gallery ${i + 1}`}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </section>
      )}

      {/* --------------------------- Narrative / Body content --------------------------- */}
      <motion.article
        className="prose prose-sm dark:prose-invert max-w-none"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: gallery && gallery.length > 0 ? 0.55 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.article>
    </div>
  );
}
