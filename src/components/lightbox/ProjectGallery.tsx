'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';

export interface GalleryImage {
  src: StaticImageData;
  alt: string;
  caption?: React.ReactNode;
}

export interface ProjectGalleryProps {
  splash: GalleryImage;
  images: GalleryImage[];
  gridClasses?: string;      // e.g. "grid-cols-2 md:grid-cols-3"
  spanIndices?: number[];    // indices in [splash, ...images] to span full width
}

export function ProjectGallery({
  splash,
  images,
  gridClasses = 'grid-cols-2 md:grid-cols-3',
  spanIndices = []
}: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const allImages = React.useMemo(() => [splash, ...images], [splash, images]);

  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);
  const next = () => setOpenIndex(i => (i === null ? null : (i + 1) % allImages.length));
  const prev = () => setOpenIndex(i => (i === null ? null : (i - 1 + allImages.length) % allImages.length));

  return (
    <div>
      <div className={`grid gap-4 sm:gap-6 ${gridClasses}`}>
        {allImages.map((img, i) => {
          const span = spanIndices.includes(i) ? 'col-span-2 md:col-span-3' : '';
          return (
            <figure
              key={`${img.alt}-${i}`}
              className={`cursor-zoom-in ${span}`}
              onClick={() => open(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="h-auto w-full rounded-md border object-cover"
                placeholder="blur"
              />
              {img.caption && (
                <figcaption className="mt-2 text-xs text-neutral-500">{img.caption}</figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {openIndex !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur">
          <button aria-label="Close" onClick={close} className="absolute top-4 right-4 rounded bg-black/60 px-3 py-1 text-xs text-white hover:bg-black">✕</button>
          <button aria-label="Previous" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded bg-black/50 px-2 py-1 text-white hover:bg-black">‹</button>

          <figure className="max-h-[94vh] max-w-[98vw] p-2">
            <div className="relative h-[85vh] w-[95vw] max-w-[1400px]">
              <Image src={allImages[openIndex].src} alt={allImages[openIndex].alt} fill className="object-contain" priority />
            </div>
            {allImages[openIndex].caption && (
              <figcaption className="mt-2 text-center text-xs text-neutral-300">{allImages[openIndex].caption}</figcaption>
            )}
          </figure>

          <button aria-label="Next" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-black/50 px-2 py-1 text-white hover:bg-black">›</button>
        </div>
      )}
    </div>
  );
}