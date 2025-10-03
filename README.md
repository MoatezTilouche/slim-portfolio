<div align="center">

# 🌟 DOP — Developer Portfolio

Modern portfolio built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**.

[![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff)](#)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-0EA5E9?logo=tailwindcss&logoColor=fff)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff)](#)
[![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff)](#)

</div>

---

## ✨ Features

- ⚡ Next.js App Router (`app/`)
- 🎨 Tailwind utility-first styling
- 🔷 Strict TypeScript setup
- 🧩 Reusable Components & Hooks
- 🚀 Ready for Vercel deployment

---

## 📂 Project Structure (exact)

```text
.
├── app/                  # Next.js routes, layouts, pages (App Router)
├── components/           # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and shared logic
├── public/               # Static assets (images, icons, fonts)
├── styles/               # Global styles (e.g., globals.css)
├── .gitignore
├── components.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- pnpm ≥ 9 (or use npm/yarn)

### Install & Run

```bash
pnpm install
pnpm dev   # http://localhost:3000
```

### Build & Serve

```bash
pnpm build
pnpm start
```

---

## 🧪 Helpful Scripts

```jsonc
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

---

## ⚙️ Environment (optional)

Create a `.env.local` if needed:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 📄 License

MIT — see `LICENSE`

---

<div align="center">Made with ❤️ using Next.js & Tailwind</div>
