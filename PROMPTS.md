# Prompt Engineering Assignment — Reusable Prompts (Tailwind CSS)

## Meta Prompt

Use this meta prompt before any section-specific prompt. It defines global requirements for clean, responsive, professional Tailwind UI.

Parameters (Customize Without Changing Structure)

- brandName: default "PromptStudio"
- brandMarkColor: default indigo-600
- accentColor: default indigo
- imageHero: Unsplash URL for hero image
- imageAbout: Unsplash URL for about image
- imageContact: Pexels/Unsplash URL for contact image
- footerTileImage: Unsplash URL for footer tile
  If your AI tool supports variables, set these before running. Otherwise, replace inline URLs/text after generation.

You are an expert front-end generator. Produce clean, accessible HTML with Tailwind CSS classes only (no inline styles, no external frameworks). Follow these rules:

- Semantics: Use proper landmarks and tags: `header`, `nav`, `main`, `section`, `footer`, `h1..h5`, `p`, `ul/li`, `form`, `label`, `input`, `textarea`, `button`, `img`.
- Responsiveness: Mobile-first; use grid/flex. Common patterns: `container max-w-7xl mx-auto px-4`, `grid gap-8 sm:grid-cols-2 lg:grid-cols-3`, `rounded-xl`, `shadow-sm`, `hover:shadow-md`, `ring-1`.
- Accessibility: Provide `aria-label` where helpful, descriptive `alt` text for images, and visible focus states (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`).
- Spacing & Typography: Generous vertical rhythm (`py-16`, `mt-10`, `space-y-*`), readable type (`text-slate-900`, `text-slate-600`), consistent sizes.
- Navbar behavior: Fixed top navbar (`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow`). Add `pt-16` to main content to offset.
- Anchor IDs: Sections must use these IDs and `scroll-mt-24` to prevent overlap by the fixed navbar: `home`, `services`, `about`, `pricing`, `contact`.
- Images: Use Unsplash/Pexels URLs; wrap with responsive aspect-ratio containers: `relative w-full aspect-[16/9] md:aspect-[4/3]`, and `object-cover object-center` with `rounded-xl` and a subtle `ring-1`.
- Icons: Inline SVG (Heroicons/Feather), consistent sizes (`h-4 w-4`, `h-5 w-5`).
- Forms: Correct labels and `required` on essential fields; no JavaScript—pure markup.
  Return only the requested section’s HTML. Do not include scripts or styles outside Tailwind classes.

---

## Prompt — Navigation Bar

Generate a fixed top navigation bar with branding and links to page sections.

Requirements:

- Fixed top bar: `fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow`.
- Container: `container max-w-7xl mx-auto px-4`.
- Branding: Small indigo logo mark (inline SVG) + wordmark text (e.g., `${brandName}`).
- Links: `#home`, `#services`, `#about`, `#pricing`, `#contact`. Desktop menu: `hidden md:flex space-x-6`. Mobile menu: a button toggler (markup only; no JS).
- Link styling: `px-2 py-1 rounded hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500`.
  Output: A single `<nav>` element with container, brand, desktop links, and mobile menu markup.

---

## Prompt — Hero Section

Generate a hero with headline, subtext, two CTAs, and a professional image.

Requirements:

- Section: `<section id="home" class="relative bg-gradient-to-b from-indigo-50 to-white scroll-mt-24">`.
- Layout: Two-column grid on `md:`; text left, image right.
- Typography: `h1` with `text-4xl sm:text-5xl font-extrabold`, subtext with `text-lg text-slate-600`.
- CTAs: Primary button (indigo) and secondary link; both accessible.
- Image: Unsplash URL (e.g., `${imageHero}`); wrap in aspect box `aspect-[16/10] md:aspect-[4/3]` with `object-cover object-center`, `rounded-xl`, `ring-1 ring-slate-200`.
  Output: A single `<section>` matching these rules.

---

## Prompt — Services / Features

Generate 3–6 feature cards with icons, titles, and short descriptions.

Requirements:

- Section: `<section id="services" class="bg-white scroll-mt-24">`.
- Header: Centered title and subtext.
- Grid: `mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3`.
- Card: `rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow`.
- Icon: Inline SVG `h-5 w-5 text-indigo-600`.
  Output: Clean, accessible HTML for the section.

---

## Prompt — About Section

Generate a brief About section with two-column layout and an illustrative image.

Requirements:

- Section: `<section id="about" class="bg-white scroll-mt-24">`.
- Copy: Two short paragraphs describing principles and approach.
- Secondary column: Panel with a principles list (3 bullets, check icons) and a responsive image (`aspect-[16/9] md:aspect-[4/3]`, e.g., `${imageAbout}`).
  Output: A single `<section>`.

---

## Prompt — Pricing Section

Generate 3 pricing tiers with feature lists and CTA buttons.

Requirements:

- Section: `<section id="pricing" class="bg-white scroll-mt-24">`.
- Header: Title/subtext centered.
- Grid: `mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3`.
- Card: `rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md`.
- Price: `text-2xl font-bold text-indigo-600`.
- Features: `ul` with check icon (`h-4 w-4 text-emerald-600`), 3–5 items.
- CTA: Button linking to `#contact`.
  Output: A single `<section>`.

---

## Prompt — Contact / Lead Form

Generate a contact section with form and a contact info card including an image.

Requirements:

- Section: `<section id="contact" class="relative scroll-mt-24">`.
- Layout: `grid gap-8 md:grid-cols-2`.
- Form: Name (required, min length 2), Email (required), Phone (optional), Message (required), button. Labels + accessible structure.
- Info card: Title, email/phone text, responsive image in aspect box (`aspect-[16/9] md:aspect-[4/3]`, e.g., `${imageContact}`), `rounded-lg`, subtle ring.
  Output: A single `<section>`.

---

## Prompt — Combined Page

Combine the above sections into a single, responsive page using Tailwind CDN.

Requirements:

- HTML skeleton with Inter font and Tailwind CDN `<script src="https://cdn.tailwindcss.com"></script>`.
- Fixed navbar at top; wrap main content in a `div` with `pt-16` to offset.
- Include sections in order: Navbar, Hero, Services, About, Pricing, Contact, Footer.
- Ensure IDs and `scroll-mt-24` are present.
  Output: A full `index.html` ready to host.

---

## Prompt — Assets & Documentation

List free image sources and add a short license note in README.

Requirements:

- Use Unsplash/Pexels URLs; include direct links for each used image.
- Icons via inline SVG (Heroicons/Feather) with sizes specified.
- Add a "Images and Logos Sources" section in README with links and note that Unsplash/Pexels allow free usage. Include variables: `${imageHero}`, `${imageAbout}`, `${imageContact}`, `${footerTileImage}`, and mention `${brandName}` logo mark is inline SVG.
  Output: A simple Markdown block suitable to paste into README.

---

## Prompt — Hosting

Host the combined page on Netlify/Vercel/GitHub Pages/CodeSandbox.

Requirements:

- Provide minimal steps for each platform.
- Return a public URL.
- Include the URL in the summary document.
  Output: Hosting instructions and a live link placeholder.
