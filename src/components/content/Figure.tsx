import * as React from "react";
import Image, { StaticImageData } from "next/image";

export function Figure({
  src,
  alt,
  caption,
  priority,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-6 flex flex-col gap-3">
      <div className="relative w-full overflow-hidden rounded-md border bg-muted/30">
        <Image
          src={src}
          alt={alt}
          className="object-cover w-full h-auto"
          placeholder="blur"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-muted-foreground leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}