'use client';

import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ImageZoom } from '@/components/ui/shadcn-io/image-zoom';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

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

export default function AboutPage() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const [value, setValue] = useState<string>('item-2');

  return (
    <main className="flex flex-col gap-12 px-5 md:px-8 text-foreground">
      {/* Intro */}
      <section className="flex max-w-screen-md flex-col gap-4">
        <h1 className="text-xl font-semibold tracking-tight">about me</h1>
        <h2 className="text-sm text-foreground/70">Based in 📍 Amsterdam · CMD student</h2>
        <p className="text-sm text-foreground/80">
          People describe me as humorous, present, sympathetic, easy-going and energetic. People around me notice that I
          am almost always ‘on’ verbally and communicatively. I&apos;m situated in Amsterdam.
        </p>
      </section>

      {/* Traits */}
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

      <div className="w-full max-w-screen-md relative">
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: 'start', loop: true }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {carouselImages.map(img => (
              <CarouselItem key={img.src} className="pl-4 basis-1/2 md:basis-[42%]">
                <ImageZoom backdropClassName={cn('[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80')}>
                  <div className="relative w-full aspect-[4/4] overflow-hidden rounded-lg cursor-zoom-in">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width:768px) 42vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </ImageZoom>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="left-2 top-1/2 -translate-y-1/2 w-8 h-8
              bg-background/55 backdrop-blur-sm border border-foreground/10
              text-foreground/60 hover:text-foreground hover:bg-background/80
              shadow-sm transition-colors rounded-md
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
          />
          <CarouselNext
            className="right-2 top-1/2 -translate-y-1/2 w-8 h-8
              bg-background/55 backdrop-blur-sm border border-foreground/10
              text-foreground/60 hover:text-foreground hover:bg-background/80
              shadow-sm transition-colors rounded-md
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
          />
        </Carousel>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent sm:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent sm:hidden" />
      </div>

      <section aria-label="Achievements" className="flex max-w-screen-md flex-col gap-4">
        {/* Wrap EVERYTHING (buttons + accordion) so later tooltips also work */}
        <TooltipProvider delayDuration={150}>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => setValue('item-1')}>
              Cambridge
            </Button>
            <Button variant="outline" size="sm" onClick={() => setValue('item-2')}>
              Propedeutic Diploma
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" onClick={() => setValue('item-3')}>
                  PWS Prize
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs text-foreground bg-background/90 backdrop-blur-sm border border-foreground/15 shadow-md">
                <p>PWS = Profielwerkstuk (final Dutch high‑school research project)</p>
              </TooltipContent>
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
                  <p className="text-sm leading-relaxed flex-1 text-foreground/80">
                    Cambridge English Certificate. My result <b className="text-foreground">C1.</b> To know what my Cambridge Certificate can mean for you, you can view the official
                    video/website from the Cambridge Institute.
                  </p>
                  <div className="shrink-0 self-start rounded-md border border-white/10 bg-black/5 p-1 dark:bg-white/5">
                    <ImageZoom backdropClassName={cn('[&_[data-rmiz-modal-overlay="visible"]]:bg-black/50')}>
                      <div className="relative w-20 aspect-[3/4] overflow-hidden rounded cursor-zoom-in">
                        <Image
                          src="/images/cambridge.jpg"
                          alt="Cambridge certificate"
                          fill
                          sizes="80px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </ImageZoom>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Propedeutic Diploma</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <p className="text-sm leading-relaxed flex-1 text-foreground/80">
                    Controlled accordions are useful when you need to synchronize the accordion state with other parts of
                    your application, or when you want to open specific sections based on user actions elsewhere.
                  </p>
                  <div className="shrink-0 self-start rounded-md border border-white/10 bg-black/5 p-1 dark:bg-white/5">
                    <ImageZoom backdropClassName={cn('[&_[data-rmiz-modal-overlay="visible"]]:bg-black/50')}>
                      <div className="relative w-20 aspect-[3/4] overflow-hidden rounded cursor-zoom-in">
                        <Image
                          src="/images/propedeuse.jpg"
                          alt="Propedeutic diploma"
                          fill
                          sizes="80px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </ImageZoom>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>PWS Prize</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <p className="text-sm leading-relaxed flex-1 text-foreground/80">
                    This certificate was awarded to the best{' '}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="underline decoration-dotted cursor-help text-foreground">
                          PWS
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="top" align="start" className="text-xs text-foreground bg-background/90 backdrop-blur-sm border border-foreground/15 shadow-md">
                        <p className="leading-snug">Profielwerkstuk (final Dutch high‑school research project)</p>
                      </TooltipContent>
                    </Tooltip>{' '}
                    of the (HAVO) graduation class 2023. The PWS was about how games are produced. We conducted extensive
                    research into the entire process of game development, including speaking with the CEO of a game company.
                  </p>
                  <div className="shrink-0 self-start rounded-md border border-white/10 bg-black/5 p-1 dark:bg-white/5">
                    <ImageZoom backdropClassName={cn('[&_[data-rmiz-modal-overlay="visible"]]:bg-black/50')}>
                      <div className="relative w-20 aspect-[3/4] overflow-hidden rounded cursor-zoom-in">
                        <Image
                          src="/images/PWSprijs.jpg"
                          alt="PWS prize"
                          fill
                          sizes="80px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </ImageZoom>
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
