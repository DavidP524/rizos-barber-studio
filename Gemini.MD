# Rizos Barber Studio - Blueprint & Style Guide

This document serves as a blueprint for recreating, scaling, or building similar high-end web applications based on the aesthetic and functional preferences established during the Rizos Barber Studio project.

## 🎨 Aesthetic Preferences (The "Gold Standard")

### The Look & Feel
- **Vibe:** High-end, masculine, luxurious, editorial, cinematic, "Gold Standard".
- **Color Palette:**
  - **Background:** Strictly Matte Black (`#000000` to `#121212`) or dark Zinc/Graphite hues for components. No bright white backgrounds.
  - **Accents:** "Victory Gold" or metallic gold variations. Essential for branding, buttons, and highlights.
  - **Text:** Primarily clean white or slightly dimmed grey/white for body text to reduce eye strain, reserving Gold for headings and emphasis.
- **Lighting & Contrast:** High contrast. Photography should be moody, slightly desaturated, or grayscale, with lighting focused on the subject or action (like the barber cutting hair). Backgrounds in hero sections must be dark enough so text pops effortlessly.

### What is Liked
- **Clean Structure:** Sharp grids, uniform cards, structured layouts.
- **Custom Details:** Elements like a custom pointer/cursor crafted specifically for the brand.
- **Micro-interactions:** Buttons that have hover effects, borders that highlight on hover.
- **Professionalism:** Straightforward pricing, clean "services" lists, authoritative copy ("Client Reviews" instead of "Wall of Love").

### What is Disliked
- **Feminine Aesthetics:** Avoid overly soft imagery, words like "Wall of Love," or flowery/bubbly fonts.
- **Aggressive/Hard-to-Read Fonts:** "Old English" is good for branding accents, but it **must** remain tasteful and highly legible. (Avoid overly ornate fonts like `UnifrakturMaguntia`; opt for cleaner Gothic styles like `Pirata One` or standard serif).
- **Distracting Visuals:** Avoid giant glowing blurs behind text or grids. Keep backgrounds clean and solid to maintain a premium feel.
- **Janky Animations:** Animations must be perfectly synchronized (like the mobile menu drop-down) and smooth.
- **Unoptimized Mobile UX:** Cursors getting stuck on mobile screens, unreadable stacked text lists, or broken navigation.

## ✍️ Typography Structure

1. **Brand Font (Accents & Logos):** Gothic/Old English but *clean* (e.g., `Pirata One`). Use sparingly for the logo text or main Hero titles ("Rizo's").
2. **Heading Font (Serif):** Elegant, high-fashion editorial serif (e.g., `Playfair Display`). Use for section headers ("The Rizo Experience," "Client Reviews").
3. **Body Font (Sans-Serif):** Crisp, perfectly legible, modern sans-serif (e.g., `Inter`). Use for descriptions, prices, and small utility text.

## 🛠️ Technical Stack & Architecture

- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS.
- **Animations:** Framer Motion (Crucial for the "luxurious" feel).
- **Icons:** Lucide React.

## ✨ Key Motion & Animation Rules

- **Pacing:** Luxury moves slowly. Animation durations should generally be `1.0s` to `1.2s` for reveals, rather than fast `0.3s` snaps.
- **Scroll Triggers:** Elements should fade in (`opacity: 0 -> 1`) and glide up slightly (`y: 30 -> 0`) as the user scrolls them into view.
- **Syncing:** Component transitions (like mobile menus opening while backgrounds fade) must happen perfectly in sync. 

## 📦 Core Reusable Components

If scaffolding a new site in this style, build these first:

### 1. The Curtain Loader
A completely black screen with the brand's logo centered, and a simple professional subtext below it. It should remain for ~2.5 seconds before smoothly fading out to reveal the site.

### 2. The Custom Pointer (Desktop Only)
A customized interaction (like the Gold Dot). **Critically important:** It must contain logic to completely disable itself on touch devices (mobile/tablets) so it doesn't get stuck on the screen when users tap.

### 3. Synchronized Nav Bar
- **Desktop:** Floating, transparent at the top, blurring (`backdrop-blur`) and adding a subtle border as it scrolls.
- **Mobile:** Hamburger menu must open perfectly in sync with the background changing color, using `AnimatePresence`. Clicking the logo must auto-scroll back to the top.

### 4. Uniform Grid Layouts
For Services, Products, or Gallery items. Elements should be uniform in dimension (`aspect-square` or strict heights) with subtle hover effects (like the image zooming slightly within its container or a thin gold border appearing).

## 🚀 Deployment Checklist

- Assure mobile formatting flexes properly (especially complex lists like "Hours of Operation").
- Confirm custom cursor logic is disabled for `(pointer: coarse)`.
- Connect GitHub repository to Vercel for automated deployments.
- Ensure all static images/logos are high-resolution and maintain proportions (`object-contain` or `object-cover` where appropriate).
