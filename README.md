# Taimoor Mateen — Creative Portfolio

Astro static site with an interactive React hero, Tailwind CSS v4, GSAP/ScrollTrigger and Lenis.

## Develop and deploy

Use Node 22+. Run `npm install`, `npm run dev`, and `npm run build`. Build output is `dist/`.
Vercel: import this repository, choose Astro, build with `npm run build`, output `dist`.
Change `site` in `astro.config.mjs` to your final public domain before deploying elsewhere.

## Content

Five project detail routes live under `/projects/`. Edit `src/data/projects.ts` to update project content.
Project imagery is downloaded from images referenced by the supplied live demos. These are editorial compositions, not screenshots. LeadPilot uses a CSS illustration. No unverified client results or testimonials are included.

## Contact configuration still needed

No owner email address was supplied. The form validates and copies a project brief locally for pasting into Upwork; it does not send messages or store data. The live Upwork and GitHub links work without configuration. Supply an owner email and form delivery endpoint to enable delivery. No LinkedIn profile was supplied for this build.

## Motion and performance

Animation respects reduced-motion preferences. WebGL pixel ratio is capped; rendering pauses while the scene is offscreen or the tab is hidden. Touch devices skip custom cursor, magnetic pointer behavior and tilt. Content remains readable if JavaScript is unavailable; a WebGL failure shows CSS fallback artwork. Three.js geometry and listeners are cleaned up during Astro page transitions.

## Validation

Production build generates six routes. Browser QA may be unavailable in the execution environment; see delivery notes.

## Current creative direction

Reference-led dark navy and sky-blue system with a bold sans-serif hero, interactive website-type previews, large bordered project panels and FAQ accordions. The hero uses CSS perspective and original editorial interface studies; the imagery comes from the selected demo projects. It is labelled as an illustration, not an actual screenshot. No client results are inferred from the reference.
