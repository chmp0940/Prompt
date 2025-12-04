# Prompt Engineering Assignment — Reusable Prompts (Tailwind CSS)

## Meta Prompt

Use this meta prompt before any section-specific prompt. It defines global requirements for clean, responsive, professional Tailwind UI.

**Parameters (customize values, keep structure same):**

- `brandName`: default `"PromptStudio"`
- `brandMarkColor`: default `indigo-600`
- `accentColor`: default `indigo`
- `imageHero`: Unsplash URL for hero image
- `imageAbout`: Unsplash URL for about image
- `imageContact`: Pexels/Unsplash URL for contact image
- `footerTileImage`: Unsplash URL for footer tile  

If your AI tool supports variables, set these before running. Otherwise, replace inline URLs/text after generation.

You are an expert front-end generator. Produce clean, accessible HTML with Tailwind CSS classes only (no inline styles, no external frameworks). Follow these rules:

- **Semantics:** Use proper landmarks/tags: `header`, `nav`, `main`, `section`, `footer`, `h1..h5`, `p`, `ul/li`, `form`, `label`, `input`, `textarea`, `button`, `img`.
- **Responsiveness:** Mobile-first with flex/grid. Common patterns:  
  `container max-w-7xl mx-auto px-4`, `grid gap-8 sm:grid-cols-2 lg:grid-cols-3`, `rounded-xl`, `shadow-sm`, `hover:shadow-md`, `ring-1`.
- **Accessibility:** Use helpful `aria-label`s, descriptive `alt`, and visible focus states:  
  `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`.
- **Spacing & Typography:** Use generous spacing (`py-16`, `mt-10`, `space-y-*`) and readable colors: `text-slate-900`, `text-slate-600`.
- **Navbar:** Fixed top navbar: `fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow`. Offset main with `pt-16`.
- **Anchor IDs:** Sections must use IDs and `scroll-mt-24`: `home`, `services`, `about`, `pricing`, `contact`.
- **Images:** Use Unsplash/Pexels URLs. Wrap in responsive ratio containers, e.g.:  
  `relative w-full aspect-[16/9] md:aspect-[4/3]` + `object-cover object-center rounded-xl ring-1`.
- **Icons:** Use inline SVG (Heroicons/Feather) with consistent sizes (`h-4 w-4`, `h-5 w-5`).
- **Forms:** Proper labels, `required` for essentials, no JavaScript (markup only).

Return only the requested section’s HTML for each section prompt (no global `<html>` unless explicitly asked).

---

## Prompt — Navigation Bar

Generate a fixed top navigation bar with branding and links to page sections.

**Requirements:**

- Wrapper: `<nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow">`.
- Inner container: `container max-w-7xl mx-auto px-4`.
- Branding: Small indigo logo mark (inline SVG using `brandMarkColor`) + wordmark text `${brandName}`.
- Links to: `#home`, `#services`, `#about`, `#pricing`, `#contact`.
  - Desktop: `hidden md:flex space-x-6`.
  - Mobile: button toggler (markup only, no JS).
- Link styles:  
  `px-2 py-1 rounded hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`.

**Output:** A single `<nav>` with container, brand, desktop links, and mobile menu markup.

---

## Prompt — Hero Section

Generate a hero with headline, subtext, two CTAs, and a professional image.

**Requirements:**

- Section:  
  `<section id="home" class="relative bg-gradient-to-b from-indigo-50 to-white scroll-mt-24">`.
- Layout: Two-column on `md:` (text left, image right) using grid/flex.
- Typography:
  - `h1` with `text-4xl sm:text-5xl font-extrabold text-slate-900`.
  - Subtext with `text-lg text-slate-600 mt-4`.
- CTAs:
  - Primary button (indigo, solid).
  - Secondary text link/button. Both keyboard accessible.
- Image:
  - `src="${imageHero}"`, descriptive `alt`.
  - Wrapper: `relative w-full aspect-[16/10] md:aspect-[4/3]`.
  - Image classes: `h-full w-full object-cover object-center rounded-xl ring-1 ring-slate-200`.

**Output:** A single `<section>` for the hero.

---

## Prompt — Services / Features

Generate 3–6 feature cards with icons, titles, and short descriptions.

**Requirements:**

- Section: `<section id="services" class="bg-white scroll-mt-24">`.
- Header: Centered title and subtext at top.
- Grid:  
  `mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3`.
- Card:  
  `rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow`.
- Each card:
  - Inline SVG icon: `h-5 w-5 text-indigo-600`.
  - Title: `h3` with medium/bold text.
  - Short descriptive `p`.

**Output:** Clean, accessible HTML for the entire services section.

---

## Prompt — About Section

Generate a brief About section with two-column layout and an illustrative image.

**Requirements:**

- Section: `<section id="about" class="bg-white scroll-mt-24">`.
- Layout: Two columns on `md:` using grid/flex.
- Text column:
  - Section title.
  - Two short paragraphs describing principles and approach.
- Secondary column:
  - Small panel with a principles list (3 bullets).
  - Each bullet with a check icon (inline SVG, `h-4 w-4 text-emerald-600`).
  - Responsive image below or beside list:
    - Wrapper: `relative w-full aspect-[16/9] md:aspect-[4/3]`.
    - `img src="${imageAbout}"` with descriptive `alt`, `rounded-xl ring-1 ring-slate-200 object-cover`.

**Output:** A single `<section>` for About.

---

## Prompt — Pricing Section

Generate 3 pricing tiers with feature lists and CTA buttons.

**Requirements:**

- Section: `<section id="pricing" class="bg-white scroll-mt-24">`.
- Header: Centered title and short subtext.
- Grid:  
  `mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3`.
- Card:  
  `rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md`.
- Each tier:
  - Tier name/title.
  - Price: `<p class="text-2xl font-bold text-indigo-600">`.
  - Short description.
  - Feature list:
    - `<ul class="mt-4 space-y-2">`.
    - 3–5 items.
    - Each list item with check icon: `h-4 w-4 text-emerald-600`.
  - CTA button linking to `#contact`.

**Output:** A single `<section>` for pricing.

---

## Prompt — Contact / Lead Form

Generate a contact section with a form and a contact info card including an image.

**Requirements:**

- Section: `<section id="contact" class="relative scroll-mt-24">`.
- Layout: `container max-w-7xl mx-auto px-4 py-16`, inner `grid gap-8 md:grid-cols-2`.
- Form column:
  - Semantic `<form>` with:
    - Name (required, min length 2).
    - Email (required, type `email`).
    - Phone (optional).
    - Message (required, textarea).
    - Submit button.
  - Each field with `<label>` + `id`/`for`.
  - Required fields set with `required`.
- Info card column:
  - Card with `rounded-lg border border-slate-200 p-6 shadow-sm`.
  - Title and short supporting text.
  - Display email and phone text (not clickable required, but allowed).
  - Image:
    - Wrapper: `relative w-full aspect-[16/9] md:aspect-[4/3] mt-4`.
    - `img src="${imageContact}"` with descriptive `alt`, `rounded-lg ring-1 ring-slate-200 object-cover`.

**Output:** A single `<section>` for contact.

---

## Prompt — Combined Page

Combine all sections into a single, responsive page using Tailwind CDN.

**Requirements:**

- Full HTML skeleton:
  - `<html lang="en">`, `<head>` with proper `<meta>` tags.
  - Include Inter font via Google Fonts (or system stack).
  - Include Tailwind CDN:  
    `<script src="https://cdn.tailwindcss.com"></script>`.
- Body structure:
  - Fixed navbar at top using the Navigation Bar prompt.
  - Wrap main content with `<main>` or `div` that has `pt-16` to offset navbar.
  - Sections in this order:  
    1. Hero (`#home`)  
    2. Services (`#services`)  
    3. About (`#about`)  
    4. Pricing (`#pricing`)  
    5. Contact (`#contact`)  
    6. Footer
- IDs and `scroll-mt-24` must be present on each section.
- Footer:
  - Simple footer with `${brandName}`, copyright text, and an optional background tile using `${footerTileImage}` (if used, in a subtle way).

**Output:** A complete `index.html` file, ready to host.

---

## Prompt — Assets & Documentation

List free image sources and add a short license note in README.

**Requirements:**

- Use Unsplash/Pexels URLs and include direct links for each used image.
- Refer to variables:
  - `${imageHero}`
  - `${imageAbout}`
  - `${imageContact}`
  - `${footerTileImage}`
- Mention that `${brandName}` logo mark is implemented as inline SVG.
- Note:
  - Icons are inline SVG (Heroicons/Feather) with sizes like `h-4 w-4`, `h-5 w-5`.
  - Unsplash/Pexels allow free usage with attribution recommended.

**Output:** A Markdown block for README, with a section titled `## Images and Logos Sources`, listing URLs and a short license note.

---

## Prompt — Hosting

Explain how to host the combined page on Netlify, Vercel, GitHub Pages, or CodeSandbox.

**Requirements:**

- Provide minimal, step-by-step instructions for each platform (one short list per platform).
- Include a placeholder for the final live link, e.g.:  
  `Live demo: https://your-live-url-here.com`
- Mention that this URL should be added to the project summary/README.

**Output:** A concise Markdown section with hosting instructions and a live link placeholder.
