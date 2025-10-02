'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';

export interface GalleryImage {
  src: StaticImageData; // add | string if you later pass external URLs
  alt: string;
  caption?: React.ReactNode;
}

export interface ProjectGalleryProps {
  splash: GalleryImage;
  images: GalleryImage[];
}

export function ProjectGallery({ splash, images }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const allImages = React.useMemo(() => [splash, ...images], [splash, images]);

  const open  = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);
  const next  = () => setOpenIndex(i => (i === null ? null : (i + 1) % allImages.length));
  const prev  = () => setOpenIndex(i => (i === null ? null : (i - 1 + allImages.length) % allImages.length));

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[splash, ...images].map((img, i) => (
          <figure
            key={i === 0 ? "splash" : img.alt + i}
            className="cursor-zoom-in"
            onClick={() => open(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              className="rounded-md border"
              placeholder="blur"
            />
            {img.caption && (
              <figcaption className="mt-2 text-xs text-neutral-500">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 rounded bg-black/60 px-3 py-1 text-xs text-white hover:bg-black"
          >
            ✕
          </button>
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded bg-black/50 px-2 py-1 text-white hover:bg-black"
          >
            ‹
          </button>
          <figure className="max-h-[90vh] max-w-[90vw]">
            <Image
              src={allImages[openIndex].src}
              alt={allImages[openIndex].alt}
              className="h-auto w-auto max-h-[75vh] max-w-[85vw] object-contain"
              placeholder="blur"
              priority
            />
            {allImages[openIndex].caption && (
              <figcaption className="mt-2 text-center text-xs text-neutral-300">
                {allImages[openIndex].caption}
              </figcaption>
            )}
          </figure>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-black/50 px-2 py-1 text-white hover:bg-black"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}