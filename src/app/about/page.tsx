'use client';

{
  /* -------------------------------------------------------------------------- 
    /                          Imports/types/consts                              /
     -------------------------------------------------------------------------- */
}

import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import * as React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import FsLightbox from 'fslightbox-react';

const traits = [
  '🎨 Creative',
  '📐 Detail Oriented',
  '🎯 Precise',
  '🗃️ Organized',
  '⚓ Persistent',
  '⚖️ Realistic',
  '🎓 Competent',
  '⚡ Enthusiastic',
  '🧩 Problem Solving',
];

const carouselImages = [
  { src: '/images/frd1.jpg', alt: 'Friends 1' },
  { src: '/images/frd2.jpg', alt: 'Friends 2' },
  { src: '/images/frd3.jpg', alt: 'Friends 3' },
  { src: '/images/frd4.jpg', alt: 'Friends 4' },
  { src: '/images/frd5.jpg', alt: 'Friends 5' },
];

// NEW: outside‑of‑work gallery sources
const outsideWorkImages = [
  { src: '/images/left-pc-setup.jpg', alt: 'Left angle of PC setup' },
  { src: '/images/frontal-pc-setup.jpg', alt: 'Frontal PC setup' },
  { src: '/images/right-pc-setup.jpg', alt: 'Right angle of PC setup' },
  { src: '/images/pc.jpg', alt: 'PC close-up' },
  { src: '/images/posters.jpg', alt: 'Posters wall' },
];

// NEW: award images (for lightbox indexing)
const awardImages = [
  { src: '/images/cambridge.jpg', alt: 'Cambridge certificate' },
  { src: '/images/propedeuse.jpg', alt: 'Propedeutic diploma' },
  { src: '/images/PWSprijs.jpg', alt: 'PWS prize' },
];

{
  /* -------------------------------------------------------------------------- 
  /                                   Page                                    /
  -------------------------------------------------------------------------- */
}

export default function AboutPage() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [value, setValue] = useState<string>('item-2');
  const [galleryHover, setGalleryHover] = useState<number | null>(null);

  const [lightboxController, setLightboxController] = useState<{ toggler: boolean; slide: number }>({
    toggler: false,
    slide: 1,
  });

  const openLightboxAt = (idx: number) => setLightboxController((c) => ({ toggler: !c.toggler, slide: idx + 1 }));

  // All lightbox sources (carousel + outside-of-work + awards)
  const allLightboxSources = React.useMemo(
    () => [
      ...carouselImages.map((i) => i.src),
      ...outsideWorkImages.map((i) => i.src),
      ...awardImages.map((i) => i.src),
    ],
    []
  );

  const awardsOffset = carouselImages.length + outsideWorkImages.length;

  return (
    <main className="text-foreground flex flex-col gap-12 px-5 md:px-8">
      {/* ------------------------------------------------------------------------- 
        /                              About me                                     /
        -------------------------------------------------------------------------- */}

      <section className="flex max-w-screen-md flex-col gap-4">
        <h1 className="text-xl font-semibold tracking-tight">about me</h1>
        <h2 className="text-foreground/70 text-sm">Based in 📍 Amsterdam · CMD student</h2>
        <p className="text-foreground/80 text-sm">
          People describe me as humorous, present, sympathetic, easy-going and energetic. People around me notice that I
          am almost always ‘on’ verbally and communicatively.
        </p>
      </section>

      {/* -------------------------------------------------------------------------- 
        /                                   Traits                                 /
        -------------------------------------------------------------------------- */}

      <section aria-label="Traits" className="max-w-screen-md">
        <ul className="flex flex-wrap gap-2">
          {traits.map((t) => (
            <li key={t}>
              <Badge variant="secondary" className="rounded-md px-3 py-1 text-xs">
                {t}
              </Badge>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------------------- 
        /                                   Info                                    /
        -------------------------------------------------------------------------- */}

      <section aria-label="Info" className="max-w-screen-md">
        <h2 className="mb-4 text-lg font-semibold">my story</h2>
        <p className="text-sm">
          I’m a Communication & Multimedia Design (<b>CMD</b>) student based in Amsterdam with a strong interest in how
          design and technology come together. Ever since I've been young I've used computers a lot. Wether it was for
          gaming, or experimenting in Photoshop, I've always been interested in computers & digital environments. I
          believe this is one of the main reason I decided to go for CMD. The study allows you to choose "between" a
          multitude of directions, namely: UX, UI and Development. However I've never really made a choice between those
          three, seeing as I just really like all three of the directions. My goal is specializing in all 3 directions.
        </p>

        <h2 className="my-4 text-lg font-semibold">designer's ethos</h2>
        <p className="text-sm">
          I like to work in a structured way, but I don't mind deviating from how I usually go about a project from time
          to time. I tend to come up with fully fleshed-out, high-fidelity ideas very quickly, often before I’ve thought
          through how to actually bring them to life. Because of that, I’ve learned to slow down, break those ideas into
          smaller, manageable steps. This leads to a better end result where I also have lots of room for user/client
          feedback, which is invaluable.
        </p>
        <p className="mt-4 text-sm">
          In group settings, I usually take on a flexible role, adapting to what the project or team needs. I’m highly
          organized in the way I plan and track my work, and I've been told I adjust quickly to new workflows or
          environments. While I enjoy collaborating, I also thrive when working independently. I tend to get absorbed in
          my work and can make massive progress in a short time when I’m fully focused sometimes, sometimes completing a
          week’s worth of work in a single day That kind of momentum is something I try to utilize as best as I can.
        </p>
      </section>

      {/* -------------------------------------------------------------------------- 
        /                             Image carousel                                /
        -------------------------------------------------------------------------- */}

      <div className="relative w-full max-w-screen-md">
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: 'start', loop: true }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {carouselImages.map((img, i) => (
              <CarouselItem key={img.src} className="basis-1/2 pl-4 md:basis-[42%]">
                <button
                  type="button"
                  aria-label={`Open image ${i + 1} in lightbox`}
                  onClick={() => openLightboxAt(i)}
                  className="focus:ring-foreground/40 relative aspect-[4/4] w-full cursor-zoom-in overflow-hidden rounded-lg focus:ring-2 focus:outline-none"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width:768px) 42vw, 50vw"
                    className="object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-background/55 border-foreground/10 text-foreground/60 hover:text-foreground hover:bg-background/80 focus-visible:ring-foreground/30 top-1/2 left-2 h-8 w-8 -translate-y-1/2 rounded-md border shadow-sm backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none" />
          <CarouselNext className="bg-background/55 border-foreground/10 text-foreground/60 hover:text-foreground hover:bg-background/80 focus-visible:ring-foreground/30 top-1/2 right-2 h-8 w-8 -translate-y-1/2 rounded-md border shadow-sm backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none" />
        </Carousel>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r to-transparent sm:hidden" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l to-transparent sm:hidden" />
      </div>

      {/* FsLightbox component (carousel + outside-of-work images) */}
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={allLightboxSources}
        types={allLightboxSources.map(() => 'image')}
      />

      {/* -------------------------------------------------------------------------- 
      /                              Outside of work                               /
      -------------------------------------------------------------------------- */}
      <section aria-label="Setup gallery" className="max-w-screen-md">
        <h2 className="mb-4 text-lg font-semibold">outside of work</h2>
        <p className="mb-4 text-sm">
          To give you a better idea of who I am outside of work, here’s a bit about what I do in my free time. I spend a
          lot of time on games, media, and music. They’re things I’ve always enjoyed and still get a lot out of.
          Whether that’s playing something new, watching a show, or discovering new songs to listen to, it’s a
          big part of my day-to-day life. I also like being creative just for fun; making posters, editing animations
          in After Effects, or building 3D scenes/models in Blender. On top of that, I’m really into tech and hardware. I built
          my own PC and enjoy working on my desk setup. I’ve added a few photos of my desk setup below. They tie into all of this, but it also doubles as my workspace for CMD and my job.
        </p>
        <div className="grid grid-cols-6 gap-4">
          {outsideWorkImages.map((img, idx) => {
            const globalIndex = carouselImages.length + idx; // offset after carousel images
            const baseCols =
              idx < 3
                ? 'relative col-span-6 aspect-[4/3] overflow-hidden rounded-md sm:col-span-2'
                : 'relative col-span-6 aspect-[4/3] overflow-hidden rounded-md sm:col-span-3';
            return (
              <figure
                key={img.src}
                role="button"
                tabIndex={0}
                aria-label={`Open ${img.alt} in lightbox`}
                onClick={() => openLightboxAt(globalIndex)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightboxAt(globalIndex)}
                className={[
                  baseCols,
                  'cursor-zoom-in transition duration-300',
                  galleryHover !== null && galleryHover !== idx ? 'scale-[0.985] blur-[1px] brightness-[0.72]' : '',
                  'hover:blur-0 focus:ring-foreground/40 hover:scale-100 hover:brightness-100 focus:ring-2 focus:outline-none',
                ].join(' ')}
                onMouseEnter={() => setGalleryHover(idx)}
                onMouseLeave={() => setGalleryHover(null)}
              >
                <div className="relative aspect-[1/1] overflow-hidden rounded">
                  <Image src={img.src} alt={img.alt} fill sizes="800px" className="object-cover" />
                </div>
              </figure>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------------------- 
        /                               Awards Accordion                            /
        -------------------------------------------------------------------------- */}

      <section aria-label="Achievements" className="flex max-w-screen-md flex-col gap-4">
        <h2 className="mb-4 text-lg font-semibold">recognition & awards</h2>
        <TooltipProvider delayDuration={150}>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => setValue('item-1')}>
              Cambridge
            </Button>
            <Button variant="outline" size="sm" onClick={() => setValue('item-2')}>
              Propedeutic Diploma
            </Button>

            <Tooltip>
              <Button variant="outline" size="sm" onClick={() => setValue('item-3')}>
                PWS Prize
              </Button>
            </Tooltip>

            <Button variant="outline" size="sm" onClick={() => setValue('')}>
              Close All
            </Button>
          </div>

          <Accordion type="single" collapsible value={value} onValueChange={setValue} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Cambridge Certificate</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <p className="text-foreground/80 flex-1 text-sm leading-relaxed">
                    Cambridge English Certificate. My result <b className="text-foreground">C1.</b> To know what my
                    Cambridge Certificate can mean for you, you can view the official video/website from the Cambridge
                    Institute.
                  </p>
                  <div className="shrink-0 self-start rounded-md border border-white/10 bg-black/5 p-1 dark:bg-white/5">
                    <button
                      type="button"
                      aria-label="Open Cambridge certificate image"
                      onClick={() => openLightboxAt(awardsOffset + 0)}
                      className="focus:ring-foreground/40 relative aspect-[3/4] w-20 cursor-zoom-in overflow-hidden rounded focus:ring-2 focus:outline-none"
                    >
                      <Image
                        src="/images/cambridge.jpg"
                        alt="Cambridge certificate"
                        fill
                        sizes="400px"
                        className="object-cover"
                        priority={false}
                      />
                    </button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Propedeutic Diploma</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <p className="text-foreground/80 flex-1 text-sm leading-relaxed">
                    My Propadeutic Diploma. (Cum Laude) This diploma is awarded who succesfully complete their first
                    year of secondary education
                  </p>
                  <div className="shrink-0 self-start rounded-md border border-white/10 bg-black/5 p-1 dark:bg-white/5">
                    <button
                      type="button"
                      aria-label="Open Propedeutic diploma image"
                      onClick={() => openLightboxAt(awardsOffset + 1)}
                      className="focus:ring-foreground/40 relative aspect-[3/4] w-20 cursor-zoom-in overflow-hidden rounded focus:ring-2 focus:outline-none"
                    >
                      <Image
                        src="/images/propedeuse.jpg"
                        alt="Propedeutic diploma"
                        fill
                        sizes="400px"
                        className="object-cover"
                        priority={false}
                      />
                    </button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>PWS Prize</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <p className="text-foreground/80 flex-1 text-sm leading-relaxed">
                    This certificate was awarded to the best{' '}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-foreground cursor-help underline decoration-dotted">PWS</span>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="start"
                        className="text-foreground bg-background/90 border-foreground/15 border text-xs shadow-md backdrop-blur-sm"
                      >
                        <p className="leading-snug">Profielwerkstuk (final Dutch high‑school research project)</p>
                      </TooltipContent>
                    </Tooltip>{' '}
                    of the (HAVO) graduation class 2023. The PWS was about how games are produced. We conducted
                    extensive research into the entire process of game development, including speaking with the CEO of a
                    game company. The PWS is available
                    <a
                      href="/Profielwerkstuk Luka en James 22-23 definitief.pdf"
                      className="rounded-sm px-1 !text-blue-600 transition-colors duration-200 ease-in-out hover:bg-blue-600 hover:!text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </p>
                  <div className="shrink-0 self-start rounded-md border border-white/10 bg-black/5 p-1 dark:bg-white/5">
                    <button
                      type="button"
                      aria-label="Open PWS prize image"
                      onClick={() => openLightboxAt(awardsOffset + 2)}
                      className="focus:ring-foreground/40 relative aspect-[3/4] w-20 cursor-zoom-in overflow-hidden rounded focus:ring-2 focus:outline-none"
                    >
                      <Image
                        src="/images/PWSprijs.jpg"
                        alt="PWS prize"
                        fill
                        sizes="400px"
                        className="object-cover"
                        priority={false}
                      />
                    </button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TooltipProvider>
      </section>
    </main>
  );
}
