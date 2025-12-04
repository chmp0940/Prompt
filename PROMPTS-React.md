# Prompt Engineering — Reusable React + Tailwind Prompts (Vite)

These prompts generate React components (JSX) styled with Tailwind CSS for a Vite React app. They mirror the HTML prompts but return component files instead of a single HTML page.

## Parameters (Customize Without Changing Structure)

- `brandName`: default `"PromptStudio"`
- `brandMarkColor`: default `indigo-600`
- `accentColor`: default `indigo`
- `imageHero`: Unsplash URL for hero image
- `imageAbout`: Unsplash URL for about image
- `imageContact`: Pexels/Unsplash URL for contact image
- `footerTileImage`: Unsplash URL for footer tile

If your AI tool supports variables, set these before running each component prompt. Otherwise, replace inline URLs/text after generation.

---

## Meta Prompt (React + Tailwind)

You are an expert front-end generator. Produce clean, accessible React components (JSX) with Tailwind classes only.

Follow these rules:

- **Project context:** Vite + React 18, Tailwind v4 (via PostCSS). Files under `src/`.
- **Component pattern:** Default export functional components. No external state unless specified.
- **Semantics & accessibility:** Proper tags, labels, `alt`, `aria-*`, `focus-visible` rings.
- **Responsiveness & spacing:** Mobile-first; use `py-16`, `gap-8`, `space-y-*`, `md:grid-cols-2`, `lg:grid-cols-3`.
- **Navbar:** Fixed top; main content wrapper in `App.jsx` uses `pt-16`.
- **IDs:** Sections use `id` + `scroll-mt-24`: `home`, `services`, `about`, `pricing`, `contact`.
- **Images:** Unsplash/Pexels URLs in aspect ratio wrappers, e.g.  
  `relative w-full aspect-[16/10] md:aspect-[4/3]` and `object-cover object-center rounded-xl ring-1`.
- **Icons:** Inline SVG (Heroicons/Feather-like) with consistent sizes.

Return only the requested component file’s full content (no extra commentary). Use the exact file paths given.

---

## Prompt — `src/components/Navbar.jsx`

Generate a fixed top Navbar component with brand mark + wordmark, desktop links, and mobile menu.

**Requirements:**

- Links: `#home`, `#services`, `#about`, `#pricing`, `#contact`.
- Fixed bar: `className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow"`.
- Container: use `<Container>` from `src/components/Container.jsx` (wrapper has `max-w-7xl mx-auto px-4`).
- Desktop menu: `hidden md:flex space-x-6`.
- Mobile menu: toggler button with accessible attributes; show a simple `ul` of links when “open” (static markup/state only, no routing).
- Props: optional `activeId` prop to highlight current section link.

**Output:** Full content for `src/components/Navbar.jsx`.

---

## Prompt — `src/components/Hero.jsx`

Generate a Hero component with headline, subtext, two CTAs, and a responsive image.

**Requirements:**

- Section root:  
  `<section id="home" className="relative bg-gradient-to-b from-indigo-50 to-white scroll-mt-24">`.
- Layout: two-column grid on `md:`; text left, image right.
- CTAs:
  - Primary button linking to `#services`.
  - Secondary link to `#contact`.
- Image:
  - Wrapper: `className="relative w-full aspect-[16/10] md:aspect-[4/3]"`.
  - `img` with `className="absolute inset-0 h-full w-full object-cover object-center rounded-xl ring-1 ring-slate-200"`.
  - `src={imageHero}` or literal `${imageHero}` placeholder.

**Output:** Full content for `src/components/Hero.jsx`, including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Features.jsx`

Generate a Services/Features component with 3–6 feature cards.

**Requirements:**

- Section id: `services` with `scroll-mt-24`.
- Header: centered title + subtext.
- Grid: `className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"`.
- Card: `className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"`.
- Icons: inline SVG, `className="h-5 w-5 text-indigo-600"`.

**Output:** Full content for `src/components/Features.jsx`, including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/About.jsx`

Generate a two-column About component with copy, principles list, and image.

**Requirements:**

- Section: `id="about"` with `className="scroll-mt-24"`.
- Layout: two-column on `md:` using grid/flex.
- One column: title + 2 short paragraphs.
- Other column:
  - Three bullet principles with check icons (`h-4 w-4 text-emerald-600`).
  - Below that, responsive image:
    - Wrapper: `relative w-full aspect-[16/9] md:aspect-[4/3]`.
    - `img src={imageAbout}` (or `${imageAbout}` placeholder) with `object-cover object-center rounded-xl ring-1 ring-slate-200`.

**Output:** Full content for `src/components/About.jsx`, including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Pricing.jsx`

Generate a Pricing component with three tiers and CTA buttons linking to `#contact`.

**Requirements:**

- Section: `id="pricing"` with `scroll-mt-24`.
- Header: centered title + subtext.
- Grid: `className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"`.
- Each tier:
  - Card styling similar to features: rounded, bordered, shadow.
  - Tier name, price, short description.
  - Feature list with check icons.
  - CTA button styled in indigo, `href="#contact"`.

**Output:** Full content for `src/components/Pricing.jsx`, including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Contact.jsx`

Generate a Contact component with form and contact info card + image.

**Requirements:**

- Section: `id="contact"` with `scroll-mt-24`.
- Layout: container with `py-16`, inner `grid gap-8 md:grid-cols-2`.
- Left side: `<form>` with:
  - Name (required, min length 2).
  - Email (required, type `email`).
  - Phone (optional).
  - Message (required textarea).
  - Submit button.
  Each field has proper `label` and `id`/`htmlFor`.
- Right side: info card with:
  - Title, short text.
  - Email and phone text.
  - Responsive image:
    - Wrapper: `relative w-full aspect-[16/9] md:aspect-[4/3] mt-4`.
    - `img src={imageContact}` (or placeholder) with `rounded-lg ring-1 ring-slate-200 object-cover`.

**Output:** Full content for `src/components/Contact.jsx`, including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Footer.jsx`

Generate a Footer component with branding, link columns, social icons, and contact email.

**Requirements:**

- Root: `<footer className="bg-slate-900 text-slate-200">`.
- Use `<Container>` inside.
- Layout: grid with `md:grid-cols-4` for columns (brand, links, resources, contact/social).
- Include:
  - `${brandName}` logo/wordmark.
  - Simple navigation links.
  - Social icons as inline SVG.
  - Contact email.
  - Small branded illustrative image tile in aspect box (can use `${footerTileImage}`) with `rounded-lg` and subtle ring.

**Output:** Full content for `src/components/Footer.jsx`, including `import Container from "./Container.jsx"`.

---

## Prompt — `src/components/Container.jsx`

Generate a reusable layout container component.

**Requirements:**

- Functional component accepting `className` and `children`.
- Wrapper merges base and incoming classes, e.g.:  
  `className={\`container max-w-7xl mx-auto px-4 \${className || ""}\`}`.

**Output:** Full content for `src/components/Container.jsx`.

---

## Prompt — `src/App.jsx`

Generate `App.jsx` composing all sections, offset for fixed navbar, and optional active nav highlighting.

**Requirements:**

- Import: `Navbar`, `Hero`, `Features`, `About`, `Pricing`, `Contact`, `Footer`.
- Render:
  - `<Navbar activeId={activeId} />` (if active section tracking used).
  - Wrap sections in `<div className="pt-16">`.
- Optional:
  - Use `useState` + `useEffect` with `IntersectionObserver` to set `activeId` based on sections with IDs `home`, `services`, `about`, `pricing`, `contact`.

**Output:** Full content for `src/App.jsx`.

---

## Prompt — Vite + Tailwind Setup

Generate minimal files to run Tailwind in a Vite React app.

**Requirements:**

- `index.html`:
  - Loads Inter font (or system font stack).
  - Contains `<div id="root"></div>`.
- `src/main.jsx`:
  - Creates React root with `ReactDOM.createRoot`.
  - Renders `<App />`.
  - Imports `./index.css`.
- `src/index.css`:
  - Uses Tailwind v4 entry: `@import "tailwindcss";`.
  - Optional minimal base reset.
- `postcss.config.js`:
  - Uses `@tailwindcss/postcss` and `autoprefixer`.
- `tailwind.config.js`:
  - Content globs include `index.html` and `src/**/*.{js,jsx}`.

**Output:** File contents for all the above.

---

## Prompt — Assets & README

Generate a README section listing image/icon sources and licensing notes.

**Requirements:**

- List all Unsplash/Pexels URLs used:
  - `${imageHero}`, `${imageAbout}`, `${imageContact}`, `${footerTileImage}`.
- Note:
  - Icons are inline SVG (Heroicons/Feather-like) and can be used freely.
  - Unsplash/Pexels images are free to use with their respective licenses; attribution recommended.
  - `${brandName}` logo mark is implemented as inline SVG in the components.

**Output:** Markdown block for README.

---

## Prompt — Dev & Hosting

Provide commands and steps to run and host the app.

**Requirements:**

- Dev:
  - `npm install`
  - `npm run dev`
- Build:
  - `npm run build`
  - Preview: `npm run preview`
- Hosting:
  - Short deployment steps for Netlify, Vercel, GitHub Pages, CodeSandbox.

**Output:** Concise instructions (Markdown) ready to paste.
