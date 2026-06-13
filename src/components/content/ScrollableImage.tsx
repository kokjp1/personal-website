'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';

interface ScrollableImageProps {
  src: StaticImageData;
  alt: string;
}

export function ScrollableImage({ src, alt }: ScrollableImageProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm dark:border-neutral-800">
      {/*
        data-lenis-prevent tells the global Lenis smooth-scroll to ignore wheel
        events over this element, so scrolling here moves the container natively
        instead of the page. Off the container, the page scrolls as usual.
      */}
      <div
        data-lenis-prevent
        className="max-h-[70vh] w-full overflow-y-auto overscroll-contain bg-neutral-100 dark:bg-neutral-900"
      >
        <Image
          src={src}
          alt={alt}
          className="w-full h-auto"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
