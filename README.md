https://www.shadcn.io/background/beams-with-collision
https://www.shadcn.io/
https://www.shadcn.io/text
https://beta.vimfn.in/

JSX comment

    {/* -------------------------------------------------------------------------- 
    /                                   comment                                 /
     -------------------------------------------------------------------------- */}

JS comment

    /* -------------------------------------------------------------------------- */
    /*                                   comment                                  */
    /* -------------------------------------------------------------------------- */

ammend: more padding / extension on the footer for mobile (round curvature not filled)
ammend: overflow-x-hidden (end up freedragging the website on mobile)
ammend: make the filter tags on the projects page a bit smaller so they fit side by side on each phone (probably based on viewport?)
ammend: dark mode default
ammend: recheck layout. crea/ux/ui/dev tag position on project detail page, weird if only 1 tag + 1 tool right below each other
ammend: back button on project detailpage
ammend: maybe back to top button
ammend: add office to toolset

```
portfolio
├─ .prettierrc
├─ components.json
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ favicon.svg
│  ├─ icons
│  │  ├─ Flourish_Logo_Black_small.png
│  │  └─ profilepicture.jpg
│  ├─ images
│  │  ├─ cambridge.jpg
│  │  ├─ frd1.jpg
│  │  ├─ frd2.jpg
│  │  ├─ frd3.jpg
│  │  ├─ frd4.jpg
│  │  ├─ frd5.jpg
│  │  ├─ frontal-pc-setup.jpg
│  │  ├─ left-pc-setup.jpg
│  │  ├─ pc.jpg
│  │  ├─ posters.jpg
│  │  ├─ propedeuse.jpg
│  │  ├─ PWSprijs.jpg
│  │  └─ right-pc-setup.jpg
│  └─ projects
│     ├─ blender
│     │  └─ blendersetup.png
│     ├─ boekenzoeker
│     │  ├─ boekenzoeker.png
│     │  ├─ boekenzoekercover.jpg
│     │  ├─ boekenzoeker_error.png
│     │  ├─ boekenzoeker_form.png
│     │  ├─ boekenzoeker_home.jpg
│     │  └─ boekenzoeker_wishlist.png
│     ├─ gameboxd
│     │  ├─ gameboxd.png
│     │  ├─ gameboxdchats.jpg
│     │  ├─ gameboxdcollectionjames.jpg
│     │  ├─ gameboxdhome.jpg
│     │  ├─ gameboxdlogin.jpg
│     │  ├─ gameboxdprofilejames.jpg
│     │  └─ gameboxdreviewsjames.jpg
│     ├─ gamescout
│     │  ├─ gamescout.png
│     │  └─ gamescoutcover.jpg
│     ├─ listral
│     │  └─ listralcover.jpg
│     ├─ minor
│     │  └─ minorcover.jpg
│     ├─ onyx
│     │  └─ onyxcover.jpg
│     ├─ personalprojects
│     │  └─ esotsm.jpg
│     ├─ portfolio1
│     │  └─ portfolio1.png
│     ├─ portfolio2
│     │  └─ Portfolio2.png
│     ├─ rhythmrain
│     │  └─ rhythmrain.png
│     ├─ userjourney
│     │  └─ userjourney.png
│     └─ whackamole
│        └─ whackamole.png
├─ README.md
├─ src
│  ├─ app
│  │  ├─ about
│  │  │  ├─ components
│  │  │  └─ page.tsx
│  │  ├─ components
│  │  │  ├─ footer.tsx
│  │  │  ├─ header.tsx
│  │  │  ├─ theme-provider.tsx
│  │  │  └─ theme-switcher.tsx
│  │  ├─ globals.css
│  │  ├─ home
│  │  │  ├─ components
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ projects
│  │     ├─ components
│  │     └─ page.tsx
│  ├─ components
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ badge.tsx
│  │     ├─ button.tsx
│  │     ├─ carousel.tsx
│  │     ├─ shadcn-io
│  │     │  ├─ 3d-marquee
│  │     │  │  └─ index.tsx
│  │     │  ├─ animated-cursor
│  │     │  │  └─ index.tsx
│  │     │  ├─ image-zoom
│  │     │  │  └─ index.tsx
│  │     │  └─ interactive-grid-pattern
│  │     │     └─ index.tsx
│  │     └─ tooltip.tsx
│  └─ lib
│     └─ utils.ts
└─ tsconfig.json

```