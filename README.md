- Images and Logos Sources

- Hero image: https://unsplash.com/photos/1498050108023-c5249f4df085 (Unsplash)
- About image: https://unsplash.com/photos/1556157382-97eda2d62296 (Unsplash)
- Contact image: https://www.pexels.com/photo/person-using-a-macbook-pro-3861964/ (Pexels)
- Navbar logo: custom inline SVG mark (no external asset)

All images are used via their CDN URLs and are free to use under Unsplash and Pexels licensing. Replace with your own brand assets as needed.

# React + Vite

## Prompts Files

- HTML prompts (Tailwind CDN): `PROMPTS.md` — includes Parameters for branding and images.
- React prompts (Vite + Tailwind): `PROMPTS-React.md` — component-level prompts with Parameters.

Set the parameters (brandName, images, colors) in your AI tool or replace URLs/text post-generation to reproduce this site consistently.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
