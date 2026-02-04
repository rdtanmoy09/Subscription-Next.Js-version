# Subscription Plan UI – Next.js Practice Project

## Overview

This project is a **subscription pricing page UI** built using **Next.js (App Router)** as a hands-on learning exercise. The goal was not to build a full SaaS backend, but to understand how modern Next.js projects are structured, how components are composed, and how responsive, theme-aware UIs are implemented.

The application showcases a clean **SaaS-style pricing layout** with three plans (Starter, Pro, Enterprise), supports **light and dark themes**, and follows common industry UI patterns used in real production dashboards.

Live Demo: [Link](https://subscription-next-js-version.vercel.app)

---

## Tech Stack

* **Next.js 14+** (App Router)
* **React**
* **TypeScript**
* **CSS**
* **Vercel** for deployment

---

## Features

* Three pricing tiers:

  * Starter
  * Pro (highlighted as the recommended plan)
  * Enterprise
* Responsive layout (works across screen sizes)
* Light & Dark theme support
* Reusable UI components
* Clean typography and spacing
* Production-like SaaS landing section

---

## Project Structure

```
subscription-plan-next-js/
│
├── app/                  # App Router pages and layouts
│   ├── favicon.ico
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout (Navbar, Footer, Providers)
│   └── page.tsx          # Main pricing page route (/)
│
├── components/           # Reusable UI components
│   ├── button.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   └── Navbar.tsx
│
├── public/               # Static assets (SVGs, images)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## How to Run Locally

1. Clone the repository

   ```bash
   git clone https://github.com/rdtamoy09/Subscription-Next-Js-version.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and visit:

   ```
   http://localhost:3000
   ```

---

## What This Project Is NOT

To be very clear:

* ❌ No authentication
* ❌ No payment integration (Stripe, Razorpay, etc.)
* ❌ No backend or database
* ❌ No API routes

This is **purely a frontend learning project**.

---

## Why This Project Exists

This project exists to:

* Practice real-world UI layouts used in SaaS products
* Understand how Next.js structures apps at scale
* Learn component separation instead of dumping everything into one page
* Build confidence working with App Router + deployment

It is a **learning milestone**, not a commercial product.

---

## Author

Built by **Friday**
