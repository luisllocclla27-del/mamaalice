# Design Specification: Reporte Anual 2024 (Interactive Scrollytelling)

## Overview
A new dynamic page (`reporte-2024.html`) will be created to summarize the 60-page Canva Annual Report. The design uses "Scrollytelling" to present key metrics and stories emotionally and interactively, ending with a call-to-action (CTA) to view the full Canva document or donate.

## Architecture & Components

### 1. Hero Section (Full Viewport)
- **Class**: `.page-hero` (reusing our updated 88vh/100vh hero design).
- **Background**: Cover image of the report (girl with flower crown).
- **Content**: Title ("Impacto 2024"), Subtitle, and an animated scroll-down indicator (bouncing arrow).

### 2. Animated Impact Counters
- **Layout**: A 4-column CSS Grid (`.impact-stats-grid`).
- **Interaction**: JavaScript `IntersectionObserver` will detect when the counters enter the viewport and trigger a counting animation from 0 to the target number.
- **Data (Placeholders)**: 
  - Metric 1: e.g. 850 (Niños atendidos)
  - Metric 2: e.g. 24 (Comunidades)
  - Metric 3: e.g. 120 (Familias)
  - Metric 4: e.g. 5 (Proyectos activos)

### 3. Narrative Blocks (Scroll Fade-ins)
- **Layout**: Alternating 50/50 split (`.story-block`, `.story-block.reverse`). One side image, one side text.
- **Interaction**: CSS transitions triggered by an `.is-visible` class toggled via `IntersectionObserver`. Elements slide slightly up and fade in.
- **Content (Placeholders)**: 3 blocks representing Education, Mental Health, and Hospitality.

### 4. Success Story Spotlight
- **Layout**: Full-width visually distinct section (`.testimonial-spotlight`).
- **Content (Placeholder)**: A prominent quote, student name, and portrait image.

### 5. Transparency & CTA (Footer of Report)
- **Layout**: Centered container with a CSS-based visual breakdown (e.g. simple CSS flexbox progress bar representing budget allocation).
- **CTA Buttons**: 
  - Primary: "Ver Reporte Completo" (Links to the Canva URL: `https://canva.link/k1m0kehb46982n9`)
  - Secondary: "Hacer un Donativo" (Links to `donar.html`).

## Technical Implementation Notes
- **Files to Modify/Create**: 
  - `reporte-2024.html` (New File)
  - `css/styles.css` (Add classes for `.story-block`, `.impact-stats-grid`, counting JS logic)
  - `js/reporte.js` (New script file for `IntersectionObserver` and counting logic to keep `components.js` clean).
- **Responsive**: The 50/50 blocks stack to 100% width on screens `< 768px`. The 4-column counter drops to 2x2 on tablet and 1x4 on mobile.

## Ambiguity & Missing Assets
- **Content Needed**: Actual text, metrics, and images from the Canva report. Until provided by the user, **Lorem Ipsum and placeholder images** from the `assets/images/` directory will be used. The user must supply the data later.
