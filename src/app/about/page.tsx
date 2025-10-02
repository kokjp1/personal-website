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


  
  {/* -------------------------------------------------------------------------- 
  /                                   Page                                    /
  -------------------------------------------------------------------------- */}

export default function AboutPage() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [value, setValue] = useState<string>('item-2');
  const [galleryHover, setGalleryHover] = useState<number | null>(null);

  const [lightboxController, setLightboxController] = useState<{ toggler: boolean; slide: number }>({
    toggler: false,
    slide: 1,
  });

  const openLightboxAt = (idx: number) =>
    setLightboxController((c) => ({ toggler: !c.toggler, slide: idx + 1 }));

  // All lightbox sources (carousel first, then outside-of-work)
  const allLightboxSources = React.useMemo(
    () => [...carouselImages.map(i => i.src), ...outsideWorkImages.map(i => i.src)],
    []
  );

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
        <h2 className="mb-4 text-lg font-semibold">My story</h2>
        <p className="text-sm">
          I’m a Communication & Multimedia Design student based in Amsterdam with a strong interest in how design and
          technology come together. What excites me most is taking an idea from a rough concept and shaping it into
          something that feels clear, functional, and engaging. I like to work in a way that balances creativity with
          structure. I usually start by sketching or mapping out ideas on paper, before moving into Figma to explore
          visual directions and interaction design. From there, I refine prototypes and often translate them into code,
          making sure the result not only looks good but also works smoothly in practice. Collaboration is an important
          part of my process — whether that’s bouncing ideas in workshops, iterating on feedback, or presenting concepts
          in a way that everyone can understand. I enjoy making complex things feel simple and creating work that’s both
          visually strong and technically sound.
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
                  className="relative aspect-[4/4] w-full cursor-zoom-in overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/40"
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
        <p className="text-sm mb-4">
          When I’m not working on design or coding projects, I spend a lot of time exploring other creative and
          technical hobbies. I enjoy gaming and the culture around it, whether that’s diving into expansive worlds like
          Cyberpunk 2077 or Warframe, or building out my own survival projects in Minecraft. Music is another big part
          of my daily life — I’m always discovering new artists and shaping playlists, often listening while I work or
          travel. I also like experimenting with different creative tools outside of a strict “work” context: editing in
          After Effects, modeling in Blender, or playing around with photography. On the side, I’m slowly learning
          Japanese, which connects both to my interest in language and my plans to spend time in Japan. These hobbies
          keep me curious and give me fresh perspectives that often feed back into my design and development work.
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
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openLightboxAt(globalIndex)}
                className={[
                  baseCols,
                  'cursor-zoom-in transition duration-300',
                  galleryHover !== null && galleryHover !== idx
                    ? 'scale-[0.985] blur-[1px] brightness-[0.72]'
                    : '',
                  'hover:blur-0 hover:scale-100 hover:brightness-100 focus:outline-none focus:ring-2 focus:ring-foreground/40'
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
                      <div className="relative aspect-[3/4] w-20 cursor-zoom-in overflow-hidden rounded">
                        <Image
                          src="/images/cambridge.jpg"
                          alt="Cambridge certificate"
                          fill
                          sizes="400px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Propedeutic Diploma</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <p className="text-foreground/80 flex-1 text-sm leading-relaxed">
                    Controlled accordions are useful when you need to synchronize the accordion state with other parts
                    of your application, or when you want to open specific sections based on user actions elsewhere.
                  </p>
                  <div className="shrink-0 self-start rounded-md border border-white/10 bg-black/5 p-1 dark:bg-white/5">
                      <div className="relative aspect-[3/4] w-20 cursor-zoom-in overflow-hidden rounded">
                        <Image
                          src="/images/propedeuse.jpg"
                          alt="Propedeutic diploma"
                          fill
                          sizes="400px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
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
                    game company.
                  </p>
                  <div className="shrink-0 self-start rounded-md border border-white/10 bg-black/5 p-1 dark:bg-white/5">
                      <div className="relative aspect-[3/4] w-20 cursor-zoom-in overflow-hidden rounded">
                        <Image
                          src="/images/PWSprijs.jpg"
                          alt="PWS prize"
                          fill
                          sizes="400px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
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
