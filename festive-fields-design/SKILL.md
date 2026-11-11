---
name: festive-fields-design
description: Design system skill for festive-fields. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# festive-fields Design System

You are building UI for **festive-fields**. Light-themed, cool palette, sans-serif typography (__DM_Sans_Fallback_d9d98a), compact density on a 4px grid, expressive motion.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![festive-fields Homepage](screenshots/homepage.png)

> Read `references/DESIGN.md` for full token details.

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — __DM_Sans_Fallback_d9d98a for body/UI text, __DM_Sans_d9d98a for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **cool palette** — the color temperature runs cool, matching the sans-serif typography.
- **Restrained accent** — `#030a22` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Text Primary | `--text-primary` | `#e5e7eb` | Headings, body text |
| Text Muted | `--text-muted` | `#6b6b6b` | Captions, placeholders |
| Accent | `--accent` | `#030a22` | CTAs, links, focus rings |
| Border | `--border` | `#5f5f5a` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Warning | `#f4f1e0` | Caution states, pending items |
| Danger | `#4f1c25` | Errors, destructive actions |

### Extended Palette

- `#a98b4a`
- `#826b3a`
- `#dddddd`
- `#9ca3af`
- **tw-ring-color:** `#3b82f6`

### CSS Variable Tokens

```css
--prose-accent: var(--gold);
--prose-accent: var(--r-gold);
--r-muted: #6b6b6b;
--o-room-card-bg: hsla(0,0%,100%,.03);
--o-dark-accent: var(--o-accent);
--o-dark-on-accent: var(--o-on-accent);
--o-dark-ghost-border: var(--o-ghost-border);
--o-accent: #ff002b;
--o-on-accent: #fff;
--o-ghost-border: rgba(255,0,43,.22);
--o-chip-border: rgba(255,0,43,.35);
--o-card-bg: #fff;
--o-accent: #d49653;
--o-on-accent: #1b1e13;
--o-ghost-border: #f4f1e0;
--o-chip-border: #d49653;
--o-card-bg: #f4f1e0;
--o-accent: #38bdf8;
--o-on-accent: #060d17;
--o-ghost-border: rgba(56,189,248,.2);
```

## Typography

### Font Stack

- **__DM_Sans_Fallback_d9d98a** — Heading 1, Heading 2, Heading 3
- **__DM_Sans_d9d98a** — Body, Caption
- **SFMono-Regular** — Code

### Font Sources

```css
@font-face {
  font-family: "__DM_Sans_d9d98a";
  src: url("fonts/__DM_Sans_d9d98a-Regular.woff2") format("woff2");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | __DM_Sans_Fallback_d9d98a | clamp(4rem,7vw,6.5rem) | 700 |
| Heading 2 | __DM_Sans_Fallback_d9d98a | 3.75rem | 700 |
| Heading 3 | __DM_Sans_Fallback_d9d98a | 56px | 700 |
| Body | __DM_Sans_d9d98a | .9375rem | 400 |
| Caption | __DM_Sans_d9d98a | 13px | 400 |
| Code | SFMono-Regular | 14px | 400 |

### Typography Rules

- Body/UI: **__DM_Sans_Fallback_d9d98a**, Headings: **__DM_Sans_d9d98a** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `.25rem, .375rem, .5rem, .75rem, 1.5rem, 4px, 6px, 10px, 14px, 16px, 20px, 22px, 24px, 28px, 999px`
Default: `10px`

### Container

Max-width: `992px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| sm | 640px |
| md | 767px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #ffffff;
  border: 1px solid #5f5f5a;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 0 0 3px color-mix(in srgb,var(--gold) 22%,transparent);
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #030a22;
  color: #e5e7eb;
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #5f5f5a;
  color: #e5e7eb;
  border-radius: 10px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #5f5f5a;
  border-radius: 10px;
  padding: 8px 12px;
  color: #e5e7eb;
  font-size: 14px;
}
.input:focus { border-color: #030a22; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #ffffff;
  color: #6b6b6b;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #ffffff;
  border: 1px solid #5f5f5a;
  border-radius: 999px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
  box-shadow: 0 18px 40px rgba(0,0,0,.08);
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #6b6b6b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #5f5f5a;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #5f5f5a;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #5f5f5a;
}
.nav-link {
  color: #6b6b6b;
  padding: 8px 12px;
  border-radius: 10px;
  transition: color 150ms;
}
.nav-link:hover { color: #e5e7eb; }
.nav-link.active { color: #030a22; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Button** (`html`)

**Card** (`html`)
- Variants: `img`

**Navigation** (`html`)

**Badge** (`html`)

**Footer** (`html`)

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (15 items)
- **Hero** — Hero/banner section with headline and CTAs
- **Footer** — Page footer with links and info (1 items)
- **Testimonials** — Testimonials/reviews section
- **Cards** — Grid of 9 card elements (9 items)

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `bounce`
- `spin`
- `ff-fade-down`
- `ff-fade-up`
- `r-marquee`

### Motion Tokens

- **Duration scale:** `0ms`, `.15s`, `.2s`, `.3s`, `.5s`, `.7s`, `1.2s`, `150ms`, `180ms`, `200ms`, `220ms`, `250ms`, `280ms`, `300ms`, `350ms`, `700ms`, `800ms`
- **Easing functions:** `ease`, `cubic-bezier(.4,0,.2,1)`, `cubic-bezier(.8,0,1,1)`, `cubic-bezier(0,0,.2,1)`, `cubic-bezier(.22,1,.36,1)`
- **Animated properties:** `background`, `color`, `border-color`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (0ms) for micro-interactions, long (800ms) for page transitions
- **Easing:** Use `ease` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Raised (cards, buttons): `0 0 0 3px color-mix(in srgb,var(--gold) 22%,transparent)`
- Raised (cards, buttons): `0 0 0 3px color-mix(in srgb,var(--gold) 35%,transparent)`
- Overlay (modals, dialogs): `0 18px 40px rgba(0,0,0,.08)`
- Overlay (modals, dialogs): `0 18px 50px rgba(3,10,34,.16)`
- Overlay (modals, dialogs): `0 30px 80px rgba(3,10,34,.35)`
- Overlay (modals, dialogs): `0 30px 80px rgba(0,0,0,.4)`

### Z-Index Scale

`1, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only __DM_Sans_Fallback_d9d98a and __DM_Sans_d9d98a and SFMono-Regular are allowed
- **No arbitrary border-radius** — use the scale: .25rem, .375rem, .5rem, .75rem, 1.5rem, 4px, 6px, 10px, 14px, 16px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — __DM_Sans_Fallback_d9d98a, __DM_Sans_d9d98a, SFMono-Regular only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `/images/revamp/meta/favicon.png`
- **Site URL:** `https://www.festive-fields.com/outlets/fyne-jakarta`
- **Brand color:** `#030a22`
- **Brand typeface:** __DM_Sans_Fallback_d9d98a

## Quick Reference

```
Background:     #ffffff
Surface:        (not extracted)
Text:           #e5e7eb / #6b6b6b
Accent:         #030a22
Border:         #5f5f5a
Font:           __DM_Sans_Fallback_d9d98a
Spacing:        4px grid
Radius:         10px
Components:     8 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for festive-fields
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "festive-fields" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# festive-fields DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 8
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![festive-fields Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a cool, approachable feel. The light background emphasizes content clarity. Typography pairs **__DM_Sans_d9d98a** for display/headings with **__DM_Sans_Fallback_d9d98a** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#030a22** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tw-ring-offset-color | `#ffffff` | background | Page background, darkest surface |
| text-primary | `#e5e7eb` | text-primary | Headings and body text |
| text-primary | `#374151` | text-primary | Headings and body text |
| r-muted | `#6b6b6b` | text-muted | Captions, placeholders, secondary info |
| border | `#5f5f5a` | border | Dividers, card borders, outlines |
| o-on-accent | `#030a22` | accent | CTAs, links, focus rings, active states |
| o-on-accent | `#030a0f` | accent | CTAs, links, focus rings, active states |
| o-on-accent | `#000000` | accent | CTAs, links, focus rings, active states |
| o-accent | `#ff002b` | accent | CTAs, links, focus rings, active states |
| o-accent | `#b32b3b` | accent | CTAs, links, focus rings, active states |
| o-accent | `#38bdf8` | accent | CTAs, links, focus rings, active states |
| o-accent | `#a82b29` | accent | CTAs, links, focus rings, active states |
| o-accent | `#c59b51` | accent | CTAs, links, focus rings, active states |
| o-chip-color | `#4f1c25` | danger | Error states, destructive actions |
| o-ghost-border | `#f4f1e0` | warning | Warning states, caution indicators |
| tw-ring-color | `#3b82f6` | info | Informational highlights |
| unknown | `#a98b4a` | unknown | Palette color |
| unknown | `#826b3a` | unknown | Palette color |
| unknown | `#dddddd` | unknown | Palette color |
| unknown | `#9ca3af` | unknown | Palette color |

### CSS Variable Tokens

```css
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--prose-accent: var(--gold);
--prose-accent: var(--r-gold);
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--r-muted: #6b6b6b;
--o-room-card-bg: hsla(0,0%,100%,.03);
--o-dark-accent: var(--o-accent);
--o-dark-on-accent: var(--o-on-accent);
--o-dark-ghost-border: var(--o-ghost-border);
```


---

## 3. Typography Rules

**Font Stack:**
- **__DM_Sans_Fallback_d9d98a** — Heading 1, Heading 2, Heading 3
- **__DM_Sans_d9d98a** — Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "__DM_Sans_d9d98a";
  src: url("fonts/__DM_Sans_d9d98a-Regular.woff2") format("woff2");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | __DM_Sans_Fallback_d9d98a | clamp(4rem,7vw,6.5rem) | 700 |
| Heading 2 | __DM_Sans_Fallback_d9d98a | 3.75rem | 700 |
| Heading 3 | __DM_Sans_Fallback_d9d98a | 56px | 700 |
| Body | __DM_Sans_d9d98a | .9375rem | 400 |
| Caption | __DM_Sans_d9d98a | 13px | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **__DM_Sans_Fallback_d9d98a** for body/UI text, **__DM_Sans_d9d98a** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (2)

**Card** — `html`
- Variants: `img`

**Badge** — `html`

### Data Input (1)

**Button** — `html`
- Animation: 

### Overlay (1)

**Modal** — `html`

### Media (2)

**Image** — `html`

**Icon** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** .25rem, .375rem, .5rem, .75rem, 1.5rem, 4px, 6px, 10px, 14px, 16px, 20px, 22px, 24px, 28px, 999px
- **Max content width:** 992px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised — cards, buttons, interactive elements

- `0 0 0 3px color-mix(in srgb,var(--gold) 22%,transparent)`
- `0 0 0 3px color-mix(in srgb,var(--gold) 35%,transparent)`

### Overlay — full-screen overlays, top-level dialogs

- `0 18px 40px rgba(0,0,0,.08)`
- `0 18px 50px rgba(3,10,34,.16)`
- `0 30px 80px rgba(3,10,34,.35)`

### Z-Index Scale

`1, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes bounce`
- `@keyframes spin`
- `@keyframes ff-fade-down`
- `@keyframes ff-fade-up`
- `@keyframes r-marquee`
- `@keyframes r-fade`
- `@keyframes r-rise`
- `@keyframes r-kenburns`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#030a22` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **__DM_Sans_Fallback_d9d98a** (body) with **__DM_Sans_d9d98a** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .25rem, .375rem, .5rem, .75rem, 1.5rem
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond __DM_Sans_Fallback_d9d98a and __DM_Sans_d9d98a and SFMono-Regular
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 640px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 1024px | css |
| xl | 1280px | css |
| 2xl | 1536px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #ffffff
Border: 1px solid #5f5f5a
Radius: 10px
Padding: 16px
Font: __DM_Sans_Fallback_d9d98a
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #030a22, text white
Ghost: bg transparent, border #5f5f5a
Padding: 8px 16px
Radius: 10px
Hover: opacity 0.9 or lighter shade
Focus: ring with #030a22
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 992px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #ffffff
Label: #6b6b6b (muted, 12px, uppercase)
Value: #e5e7eb (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #5f5f5a
Focus: border-color #030a22
Label: #6b6b6b 12px
Spacing: 16px between fields
Radius: 10px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: __DM_Sans_Fallback_d9d98a, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/__DM_Sans_d9d98a-Regular.woff2`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

