import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";

export type ProjectMeta = {
  slug: string;
  title: string;
  year: number;
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
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
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
        </div>

        {(roles.length > 0 || tags.length > 0) && (
          <div className="flex flex-col gap-3">
            {roles.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {roles.map((r) => (
                  <Badge
                    key={r}
                    variant="secondary"
                    className="text-[10px] font-medium tracking-wide"
                  >
                    {r}
                  </Badge>
                ))}
              </div>
            )}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="text-[10px] font-medium tracking-wide"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium underline underline-offset-4 hover:text-foreground/80 transition-colors"
              >
                {l.label} →
              </a>
            ))}
          </div>
        )}

        {cover && (
          <div className="relative w-full aspect-[16/9] max-h-[520px] overflow-hidden rounded-lg border bg-muted/30">
            <Image
              src={cover}
              alt={`${title} cover`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {gallery && gallery.length > 0 && (
        <section className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[16/10] overflow-hidden rounded-md border bg-muted/30"
            >
              <Image
                src={img}
                alt={`${title} gallery ${i + 1}`}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>
      )}

      <article className="prose prose-sm dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  );
}