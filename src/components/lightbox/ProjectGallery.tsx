'use client';

import * as React from 'react';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';

// Update the types so captions can be a link (ReactNode)
export interface GalleryImage {
  src: any;              // StaticImageData or string
  alt: string;
  caption?: React.ReactNode; // was: string
  aspect?: string;       // tailwind aspect ratio class (default 16/9)
}

interface Props {
  splash?: GalleryImage; // optional large first image
  images: GalleryImage[];
}

export function ProjectGallery({ splash, images }: Props) {
  const [ctl, setCtl] = React.useState<{ toggler: boolean; slide: number }>({ toggler: false, slide: 1 });
  const openAt = (i: number) => setCtl(c => ({ toggler: !c.toggler, slide: i + 1 }));

  const sources = React.useMemo(
    () => [
      ...(splash ? [(splash.src as any).src ?? (splash.src as any)] : []),
      ...images.map(im => (im.src?.src ? im.src.src : im.src)),
    ],
    [splash, images]
  );

  let slideOffset = 0;
  if (splash) slideOffset = 1;

  return (
    <>
      {splash && (
        <figure
          className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-2 sm:p-3 shadow-sm cursor-zoom-in"
          role="button"
          tabIndex={0}
          aria-label={`Open ${splash.alt} in lightbox`}
          onClick={() => openAt(0)}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openAt(0)}
        >
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-md">
            <Image
              src={splash.src}
              alt={splash.alt}
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(min-width:1024px) 45vw, 100vw"
              placeholder="blur"
              priority
            />
          </div>
          {splash.caption && (
            <figcaption className="mt-2 text-[10px] sm:text-xs text-muted-foreground leading-snug">
              {splash.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mt-4 grid gap-4 grid-cols-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => {
          const slideIndex = slideOffset + i;
            return (
              <figure
                key={img.alt}
                className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-2 sm:p-3 shadow-sm cursor-zoom-in"
                role="button"
                tabIndex={0}
                aria-label={`Open ${img.alt} in lightbox`}
                onClick={() => openAt(slideIndex)}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openAt(slideIndex)}
              >
                <div className={`relative w-full overflow-hidden rounded-md aspect-[${img.aspect || '16/9'}]`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 50vw"
                    placeholder="blur"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-2 text-xs text-neutral-500">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            );
        })}
      </div>

      <FsLightbox
        toggler={ctl.toggler}
        slide={ctl.slide}
        sources={sources}
        types={sources.map(() => 'image')}
      />
    </>
  );
}