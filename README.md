# HaloKYC documentation

Product documentation for setting up HaloKYC and integrating its hosted
identity-verification flow. Built with Next.js and Fumadocs.

## Local development

Fumadocs requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run types:check
npm run lint
npm run build
```

## Content

Documentation lives under `content/docs`. Navigation is defined by the
`meta.json` file in each section.

Set `NEXT_PUBLIC_SITE_URL` to the public documentation origin during
deployment so metadata and generated social images use the correct absolute
URL.
