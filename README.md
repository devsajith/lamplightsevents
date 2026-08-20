# Lamplights Events & Lighting - Architectural Guide

Welcome to the **Lamplights Events** codebase. This Next.js 15 application is designed as a minimalist, highly premium, single-page website for a luxury Wedding Stage Decoration & Event Lighting service based in **Adimali, Idukki, Kerala**.

---

## 1. Project Niche & Visual Identity
- **Niche**: Traditional and modern wedding stage decoration (floral backdrops, mandaps) & professional ambient/architectural lighting.
- **Design System**: Luxury minimalist. Features dark and light gold accents (`#C9A45C`), warm off-white surfaces (`#FAF9F6`), and crisp serif typography.
- **Audience Clarity**: Plain English copywriting optimized for easy comprehension by all user profiles.

---

## 2. Architecture & File Structure

```text
├── public/
│   ├── images/
│   │   ├── stages/         # Local stage catalog WebP photos
│   │   └── lights/         # Local lighting catalog WebP photos
│   ├── logo.jpg            # Brand logo emblem
│   └── favicon.ico         # Custom favicon asset
├── src/
│   ├── app/
│   │   ├── layout.tsx      # App configuration, custom fonts & metadata
│   │   ├── globals.css     # Global styles & custom scroll animation definitions
│   │   ├── page.tsx        # Main single-page entry hosting all sections
│   │   └── [subroutes]/    # Redirect routes to return page anchors back to /
│   ├── components/
│   │   ├── layout/         # Header and Footer layout elements
│   │   ├── sections/       # Section components (HeroSection, StageCard, etc.)
│   │   └── ui/             # Reusable UI controls (Modal, WhatsAppButton, etc.)
│   └── data/
│       ├── company.ts      # Main company metadata (address, contact, stats)
│       ├── stages.ts       # Stage catalog data items
│       └── lights.ts       # Lighting catalog data items
```

---

## 3. Key Concepts & Conventions

### Single Page Application (SPA) Flow
The entire application behaves as a smooth-scroll single-page application.
- Scroll anchors are defined on section elements (e.g. `#home`, `#services`, `#stages`, `#lights`, `#about`, `#contact`).
- Smooth scrolling is managed directly by anchor navigation handlers in [`Header.tsx`](src/components/layout/Header.tsx) and CSS configuration.
- Client sub-routes (e.g., `/stages`, `/lights`, `/about`, `/contact`) contain client-side redirects returning user scroll focus back to the home page anchors (e.g. `/#stages`).

### Simplified Catalog Cards
To keep the design clean and photo-centric, the item cards ([`StageCard.tsx`](src/components/sections/StageCard.tsx) and [`LightCard.tsx`](src/components/sections/LightCard.tsx)) are stripped of descriptive text lists or pricing tables in their main grid display:
- **Card UI**: Renders **strictly the image** and a hover action overlay.
- **Interaction**: Clicking anywhere on the card launches a detail-view **Lightbox Modal** loaded with specifications, detailed description highlights, and a WhatsApp booking action.

### Zero-Dependency Scroll Animations
Scroll reveal animations are implemented natively using modern browser APIs to ensure high performance on mobile devices:
1. **Intersection Observer**: Inside [`page.tsx`](src/app/page.tsx), a lightweight React `useEffect` registers an intersection observer watching elements with the `.reveal` class.
2. **Animation Trigger**: When a element enters viewport, the `.reveal-visible` class is appended.
3. **CSS Layering**: Animation transitions, movement vectors (20px slide up), and staggered delay helpers (e.g. `.delay-100` to `.delay-400`) are defined in [`globals.css`](src/app/globals.css).

### WhatsApp Direct Booking
- The site does not use backend databases or heavy form processors.
- The contact form accepts name, phone, date, venue city, and target service.
- On submit, it constructs an URI-encoded query string matching a clean template and navigates directly to WhatsApp Web / App (`wa.me/919656939589`) targeting the primary booking contact number.

---

## 4. Development Commands

Run the local development server:
```bash
npm run dev
```

Build the production package:
```bash
npm run build
```
