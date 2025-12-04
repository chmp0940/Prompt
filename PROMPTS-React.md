# Prompt Engineering — Reusable React + Tailwind Prompts (Vite)

These prompts generate React components (JSX) styled with Tailwind CSS, targeting a Vite React app. They mirror the HTML prompts but return component files instead of a single HTML page.

## Parameters (Customize Without Changing Structure)

- brandName: default "PromptStudio"
- brandMarkColor: default indigo-600
- accentColor: default indigo
- imageHero: Unsplash URL for hero image
- imageAbout: Unsplash URL for about image
- imageContact: Pexels/Unsplash URL for contact image
- footerTileImage: Unsplash URL for footer tile

If your AI tool supports variables, set these before running each component prompt. Otherwise, replace inline URLs/text after generation.

## Meta Prompt (React + Tailwind)

You are an expert front-end generator. Produce clean, accessible React components (JSX) with Tailwind classes only. Follow these rules:

- Project context: Vite + React 18, Tailwind v4 (via PostCSS). Files live under `src/`.
- Component pattern: Default export functional components. No external state unless specified.
- Semantics & accessibility: Proper tags, labels, `alt`, `aria-*`, focus-visible rings.
- Responsiveness & spacing: Mobile-first, consistent paddings (`py-16`), grids (`md:grid-cols-2`, `lg:grid-cols-3`), `gap-8`, `space-y-*`.
- Navbar: Fixed top; content wrapper needs `pt-16` in `App.jsx`.
- IDs: `home`, `services`, `about`, `pricing`, `contact` with `scroll-mt-24` on sections.
- Images: Unsplash/Pexels URLs in responsive aspect ratio containers (see examples). Use `object-cover object-center` and `rounded-xl` with subtle `ring-1`.
- Icons: Inline SVG (Heroicons/Feather-like) sized consistently.
  Return only the requested component file’s full content. Do not include commentary. Use the exact file paths specified in each prompt.

---

## Prompt — `src/components/Navbar.jsx`

Generate a fixed top Navbar component with brand mark + wordmark (PromptStudio), desktop links, and mobile menu markup.

Requirements:

- Links: `#home`, `#services`, `#about`, `#pricing`, `#contact`.
- Fixed bar: `fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow`.
- Container: a reusable `Container` component (`src/components/Container.jsx`) with `max-w-7xl mx-auto px-4` wrapper.
- Desktop menu: `hidden md:flex space-x-6`.
- Mobile menu: toggler button with accessible attributes; show a simple `ul` menu when “open” (static markup; no routing).
- Props: Optional `activeId` prop to highlight the active section link.
  Output: Full content for `src/components/Navbar.jsx`.

---

## Prompt — `src/components/Hero.jsx`

Generate a Hero component with headline, subtext, two CTAs, and a responsive image.

Requirements:

- Section: `<section id="home" className="relative bg-gradient-to-b from-indigo-50 to-white scroll-mt-24">`.
- Layout: two-column grid on `md:`; text left, image right.
- CTAs: Primary button link to `#services`; secondary link to `#contact`.
- Image: Unsplash URL inside aspect ratio container: `relative w-full aspect-[16/10] md:aspect-[4/3]`, image set as `absolute inset-0 h-full w-full object-cover object-center`, with `rounded-xl ring-1 ring-slate-200`.
  Output: Full content for `src/components/Hero.jsx` including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Features.jsx`

Generate a Services/Features component with 3–6 cards.

Requirements:

- Section id: `services`; header centered; grid: `mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3`.
- Card styling: `rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow`.
- Icons: inline SVG `h-5 w-5 text-indigo-600`.
  Output: Full content for `src/components/Features.jsx` including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/About.jsx`

Generate a two-column About component with copy + principles list and an illustrative image.

Requirements:

- Section id: `about` with `scroll-mt-24`.
- Right column: three bullet principles with check icons; below that, an image in responsive aspect box.
  Output: Full content for `src/components/About.jsx` including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Pricing.jsx`

Generate a Pricing component with three tiers and CTA buttons linking to `#contact`.

Requirements:

- Section id: `pricing` with `scroll-mt-24`.
- Grid for tiers: `mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3`.
- Feature list with check icons; button styled indigo.
  Output: Full content for `src/components/Pricing.jsx` including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Contact.jsx`

Generate a Contact component with a form and a contact info card including a responsive image.

Requirements:

- Section id: `contact` with `scroll-mt-24`.
- Left: form with Name, Email, Phone (optional), Message; labels and `required` where appropriate.
- Right: info card (email, phone) and Pexels image in aspect box with `rounded-lg` and subtle ring.
  Output: Full content for `src/components/Contact.jsx` including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Footer.jsx`

Generate a Footer component with branding, links columns, social icons, contact email, and copyright.

Requirements:

- Footer background: `bg-slate-900 text-slate-200`.
- Grid: `md:grid-cols-4`.
- Include a small branded illustrative image tile in an aspect box.
  Output: Full content for `src/components/Footer.jsx` including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Container.jsx`

Generate a simple container component to unify layout width.

Requirements:

- Accept `className` and `children` props.
- Wrapper: `className="container max-w-7xl mx-auto px-4"` merged with incoming className.
  Output: Full content for `src/components/Container.jsx`.

---

## Prompt — `src/App.jsx`

Generate `App.jsx` that composes all sections in order, offsets for the fixed navbar, and optionally highlights active nav link.

Requirements:

- Import all components, render `<Navbar />` then wrap sections in `<div className="pt-16">`.
- Optional: include an IntersectionObserver to set `activeId` and pass to `<Navbar activeId={activeId} />`.
  Output: Full content for `src/App.jsx`.

---

## Prompt — Vite + Tailwind Setup

Generate minimal files to run Tailwind in Vite React.

Requirements:

- `index.html` with Inter font and `div#root`.
- `src/main.jsx` creates React root and imports `App.jsx` + `src/index.css`.
- `src/index.css` uses Tailwind v4 entry: `@import "tailwindcss";` and optional base resets.
- `postcss.config.js` uses `@tailwindcss/postcss` and `autoprefixer`.
- `tailwind.config.js` content globs include `index.html` and `src/**/*.{js,jsx}`.
  Output: The above files’ contents.

---

## Prompt — Assets & README

Generate a README section listing image/icon sources and licensing notes.

Requirements:

- List Unsplash/Pexels URLs used across components.
- Note that icons are inline SVG (Heroicons/Feather-like) and free.
  Output: Markdown block for README.

---

## Prompt — Dev & Hosting

Provide commands and steps to run and host.

Requirements:

- Dev: `npm install` then `npm run dev` (ensure scripts exist in `package.json`).
- Build: `npm run build`, preview: `npm run preview`.
- Hosting: Netlify/Vercel/GitHub Pages/CodeSandbox quick steps.
  Output: Concise instructions ready to paste.
