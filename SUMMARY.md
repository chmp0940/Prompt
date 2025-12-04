# Prompt Engineering Assignment — Summary

## Approach & Rationale

## Tools Used

## Prompts

## Iteration & Refinement

## Challenges

## Hosting

## Image & Icon Sources

## What to Submit

# Summary Document (Prompt Engineering)

- **Your Prompt:**

  - Two reusable prompt sets:
  - `PROMPTS.md` (HTML + Tailwind CDN): Meta-prompt plus section prompts for Navbar, Hero, Features/Services, About, Pricing, Contact, Footer, and a Combined Page prompt to generate a single `index.html`.
  - `PROMPTS-React.md` (React + Tailwind): Component-level prompts to generate React files for each section, setup prompts for Vite + Tailwind, and dev/build/hosting guidance.
  - Both include a Parameters block (`brandName`, image URLs) so outputs remain generic, consistent, and easy to re-run.

- **Why You Wrote Them This Way:**

  - Parameterization enables brand-agnostic reuse across assignments.
  - Section-by-section prompts make regeneration and targeted edits simple.
  - Tailwind patterns (fixed navbar + `pt-16`, `scroll-mt-24`, aspect-ratio wrappers) ensure navigation doesn’t overlap and visuals stay balanced.
  - Separate HTML vs React tracks serve both single-file deliverables and componentized workflows.

- **Tools Used:**

  - ChatGPT (primary authoring and code assistance; compatible with Claude/Gemini).
  - Vite (React tooling), Tailwind CSS v4, PostCSS `@tailwindcss/postcss`, Autoprefixer.
  - Free images from Unsplash/Pexels; inline SVG icons (Heroicons/Feather style).

- **How You Refined Prompts:**

  - Adopted Tailwind v4 CSS `@import` and the PostCSS plugin to fix parsing issues.
  - Added Parameters for brand and images to keep outputs generic.
  - Standardized IDs and anchor offsets (`scroll-mt-24`) with a fixed navbar and main `pt-16`.
  - Clarified layout rules: grids, spacing (`py-16`), accessible focus states, consistent indigo-neutral palette.
  - Provided a Combined Page prompt for fast single-file generation alongside modular section prompts.

- **Challenges Faced:**
  - PostCSS/Tailwind error where JS was parsed as CSS; resolved with correct v4 setup.
  - Navbar overlap on in-page links; fixed by coordinating fixed header + content offsets.
  - JSX corruption in Hero/Pricing components during iteration; reconstructed and validated.
  - Balancing generic prompts with consistent visual quality across different AI tools.

This one-page summary captures the prompt design, rationale, tools, refinement steps, and key challenges addressed in the assignment.
