---
name: Tangan Mungil Bidan
colors:
  surface: '#fff8f8'
  surface-dim: '#ffcdd9'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f2'
  surface-container: '#ffe8ec'
  surface-container-high: '#ffe1e7'
  surface-container-highest: '#ffd9e1'
  on-surface: '#30121b'
  on-surface-variant: '#5a4044'
  inverse-surface: '#482630'
  inverse-on-surface: '#ffecef'
  outline: '#8e6f74'
  outline-variant: '#e3bdc3'
  surface-tint: '#bc004f'
  primary: '#b0004a'
  on-primary: '#ffffff'
  primary-container: '#d81b60'
  on-primary-container: '#fff2f3'
  inverse-primary: '#ffb2bf'
  secondary: '#645d5e'
  on-secondary: '#ffffff'
  secondary-container: '#e8dddf'
  on-secondary-container: '#686163'
  tertiary: '#12661e'
  on-tertiary: '#ffffff'
  tertiary-container: '#318035'
  on-tertiary-container: '#dfffd6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2bf'
  on-primary-fixed: '#3f0016'
  on-primary-fixed-variant: '#90003b'
  secondary-fixed: '#eae0e2'
  secondary-fixed-dim: '#cec4c6'
  on-secondary-fixed: '#1f1a1c'
  on-secondary-fixed-variant: '#4b4547'
  tertiary-fixed: '#a3f69c'
  tertiary-fixed-dim: '#88d982'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005312'
  background: '#fff8f8'
  on-background: '#30121b'
  surface-variant: '#ffd9e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 58px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system defines an intimate, clinical-luxury maternal homecare experience. It balances the emotional vulnerability of postpartum mothers and newborns with the indisputable clinical rigor of licensed, certified midwives (*Bidan Terverifikasi STR*). 

The visual style blends **Soft Clinical Luxury** with **Organic Tactility**:
- **Warm Reassurance:** Tactile surfaces, delicate rose undertones, and generous breathing room convey gentle care, comfort, and zero cold-hospital intimidation.
- **Hygienic Precision:** Crisp white modular cards, pristine borders, and medical mint accents communicate safety, sterilization, and medical expertise.
- **Maternal Dignity:** Deep charcoal burgundy typography replaces harsh black to offer high legibility without severe contrast shock, fostering a soothing bedtime/nursery reading mood.

## Colors
The color architecture relies on a specialized palette tailored for maternity and infant wellness:

- **Primary Accent (`#D81B60` - Berry Magenta Pink):** Used exclusively for high-intent actions (e.g., "Pesan Bidan Sekarang", "Pilih Jadwal"), active tab highlights, notification badges, and critical interactive nodes. Avoid using as full-screen backgrounds.
- **Soft Accent / Tonal Base (`#FFF4F6` - Blush Rose):** Deployed across page backgrounds, active filter chips, and highlighted service sections to generate a calming, tactile canvas.
- **Neutral Dark (`#33141E` - Deep Charcoal Burgundy):** Replaces default `#000000` across all display headings, body copy, and iconography to eliminate harsh optical glare while retaining strict WCAG AAA contrast ratios.
- **Neutral Light (`#FFFFFF` - Pure White):** Used for elevated cards, floating pill navigation bars, input wells, and active selected elements against `#FFF4F6`.
- **Sub-text & Structural Lines:** Muted Mauve Gray (`#735B64`) for secondary meta information, captions, and empty states; Whisper Rose (`#FCE4EC`) for hairline dividers and component bounding borders.
- **Trust & Verification Status (`#2E7D32` with `#E8F5E9` background - Medical Sage Mint):** Reserved for institutional trust seals, midwife STR (Surat Tanda Registrasi) verifications, hygienic sterilization guarantees, and organic product safety labels.

## Typography
Plus Jakarta Sans is utilized across all typographic roles. Its friendly geometric apertures, open counters, and humanistic stroke transitions reflect empathy and professional warmth.

- **Display & Headlines:** Tightly tracked headings (-0.01em to -0.03em) anchor editorial weight without feeling aggressive. They convey executive assurance in maternal care.
- **Body Text:** Engineered with expansive line-height (1.5x–1.62x) to ensure frictionless readability for sleep-deprived parents glancing at instructions in low light.
- **Labels & Badges:** Slightly wider tracking (+0.01em to +0.03em) in semi-bold and bold weights guarantees instantaneous parsing on micro-pills, certifications, and slot timers.

## Layout & Spacing
The layout model employs a fluid 12-column grid for desktop (max-width `1280px`) and an adaptive fluid column framework across mobile interfaces:

- **Desktop (>= 1024px):** 12-column layout, 24px gutters, 40px margins. Split views emphasize detailed treatments, midwife credentials, and real-time appointment pickers side-by-side.
- **Tablet (768px - 1023px):** 8-column layout, 20px gutters, 28px margins. Sticky horizontal pill filters remain pinned below the top navigation.
- **Mobile (< 768px):** 4-column layout, 16px gutters, 16px canvas margins. Content reflows into single stacked vertical streams with bottom-anchored CTA action bars.
- **Rhythm:** Spacing follows a 4px/8px incremental grid. Elements related to high-focus infant care are partitioned using generous `space-lg` and `space-xl` gaps to reduce visual cognitive fatigue.

## Elevation & Depth
Elevation mimics clean, sunlit nursery and clinical spa environments using diffuse, ambient colored shadows rather than generic charcoal shadows:

- **Base Canvas:** Flat `#FFF4F6` or `#FFFFFF` foundation.
- **Level 1 (Cards, Chips, Service Tiles):** Subtle elevation with a tinted rose ambient wash: `0 4px 20px -2px rgba(216, 27, 96, 0.05), 0 2px 6px -1px rgba(51, 20, 30, 0.03)`. Encapsulated with a hairline border `1px solid #FCE4EC`.
- **Level 2 (Hovered Cards, Dropdowns, Date Modals):** Medium lift: `0 12px 32px -4px rgba(216, 27, 96, 0.08), 0 4px 12px -2px rgba(51, 20, 30, 0.04)`.
- **Level 3 (Floating Pill Navigation, Sticky CTAs, Drawer Sheets):** Prominent floating status: `0 20px 40px -6px rgba(51, 20, 30, 0.12), 0 8px 16px -4px rgba(216, 27, 96, 0.06)`. Often layered over a frosted backdrop filter (`backdrop-filter: blur(16px)` with `rgba(255, 255, 255, 0.88)`).
- **Prohibited:** Harsh black drop shadows, hard bevels, and heavy unblurred borders.

## Shapes
The design uses an ultra-friendly, protective shape system inspired by organic maternal curves and soft nursery geometry:

- **Pill Philosophy (Full Capsule - `9999px`):** Reserved for interactive items: buttons, filter pills, tag badges, search inputs, bottom floating bars, and status icons. The pill structure removes all sharp corners, creating a welcoming, baby-safe visual identity.
- **Container Curvature (`24px` / `rounded-3xl`):** All content cards, midwife profile showcases, clinical service summaries, and testimonial blocks utilize `24px` corner radii, ensuring cards feel soft and non-threatening.
- **Nested Inner Geometry (`16px` / `rounded-2xl`):** Child media, nested map panels, and session summary boxes within `24px` cards scale down proportionally to avoid visual friction.

## Components

### Buttons
- **Primary CTA:** Fully rounded pill (`rounded-full`), solid Berry Magenta (`#D81B60`), text Pure White (`#FFFFFF`, `label-lg`), with subtle pink glow shadow. States: Hover deepens to `#C2185B`, Active scales to `0.98`.
- **Secondary / Soft Button:** Pill-shaped, background `#FFF4F6`, border `1.5px solid #FCE4EC`, text `#D81B60`. Hover background transitions to `#FCE4EC`.
- **Ghost Pill:** Borderless, text `#33141E`, hover text `#D81B60`, background `#FFF4F6` on hover.

### Filter & Booking Pills
- **Filter Chips:** Height `40px`, padding `0 20px`, pill-shaped. Inactive: background `#FFFFFF`, border `1px solid #FCE4EC`, text `#735B64`. Active: background `#D81B60`, border `1px solid #D81B60`, text `#FFFFFF`, subtle shadow lift.
- **Time/Slot Chips:** Compact pill (`height: 36px`), indicating available midwife visit slots with dynamic capacity dots (green for available, muted for booked).

### Cards
- **Service & Midwife Cards:** Pure White (`#FFFFFF`) surface, `24px` border radius, `1px solid #FCE4EC`, Level 1 ambient elevation. Content hierarchy:
  1. Top badge row (e.g., "Homecare Spa", "Postpartum Care").
  2. Thumbnail / Midwife portrait with rounded inner bounds (`16px`).
  3. Midwife name and verified STR badge.
  4. Treatment description, duration, and transparent pricing in Charcoal Burgundy (`#33141E`).
  5. Action pill aligned bottom.
- **Testimonial Cards:** Background `#FFF4F6`, border `1px solid #F8BBD0`, `24px` corners, soft typography, accompanied by verified mother badges and infant age tags (e.g., "Baby Kenzo, 2 Bulan").

### Inputs & Search Bars
- **Search Bar:** Pill-shaped container (`height: 52px`), Pure White background, subtle border `#FCE4EC`, leading search icon in `#D81B60`, trailing clear/filter action. Focused ring: `3px solid rgba(216, 27, 96, 0.15)`.
- **Text & Select Fields:** Rounded `16px` containers, inset padding `16px`, placeholder color `#735B64`, active border `#D81B60`.

### Badges & Trust Accents
- **Verified STR Midwife Badge:** Pill badge with Soft Sage background (`#E8F5E9`), text Forest Mint (`#2E7D32`), prepended with an official medical shield checkmark icon.
- **Organic & Safe Product Badge:** Pill badge in `#FFF4F6` with Berry Magenta icon and text, signifying baby-safe sterilizers and oils.

### Checkbox & Radio Controls
- Circular radio buttons and soft-cornered checkboxes (`rounded-md`), border `2px solid #FCE4EC`. When selected: fill `#D81B60` with Pure White check or inner dot.