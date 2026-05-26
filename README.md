# rj-ortega.dev

Personal portfolio site built with React and TypeScript. Migrated from a Hugo static site that hadn't been updated since 2019.

## Preview

![rj-ortega.dev](./public/preview.png)

## Why the rebuild

The original site was built with Hugo using a pre-made theme — no real control over the UI and nothing to show for it as a codebase. Rebuilding in React and TypeScript gives full control over the design, makes it maintainable going forward, and is a better reflection of my current stack.

## Tech decisions

- **Vite** over Create React App — faster dev server, faster builds, and CRA is largely deprecated at this point
- **TypeScript** — catches type errors at compile time, makes the codebase more self-documenting
- **React Router** — included for future page-level routing as the site grows
- **Inline styles** — kept intentionally simple for a single-page portfolio; no need for a CSS framework or styled-components at this scale
- **Vercel** — zero-config deployment that auto-deploys on every push to main

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Live site

[rj-ortega.dev](https://rj-ortega.dev)
