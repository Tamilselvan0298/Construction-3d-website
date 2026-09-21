# APEX CONSTRUCTIONS - 3D Interactive Engineering Website

A high-performance modern web application for **APEX CONSTRUCTIONS** (Engineering & Infrastructure), featuring a 400vh scroll-scrubbed 3D canvas hero banner, complete responsive architectural subpages, and a bespoke heavy civil & structural engineering design system.

---

## Key Features

- **400vh Scroll-Scrubbed 3D Canvas Hero**: 60fps / 120fps hardware-accelerated 2D canvas frame scrubbing with high-resolution 3D camera animations and responsive aspect-ratio fitting.
- **Architectural Color & Design Tokens**: Safety Gold (`#D97706`), Safety Orange (`#EA580C`), Carbon Steel Slate (`#0B0F19`), and Concrete Paper (`#FFFFFF`).
- **Live Site Telemetry Dashboard**: Real-time project tracking with milestone meters, active execution stages, and resident engineering leads.
- **Engineering Disciplines Dossier**: Dual-pane master showcase detailing load ratings, clear spans, and technical specifications.
- **The APEX Engineering Benchmark**: 6 measurable structural specification standards.
- **Complete Page Suite**:
  - `/` (Home)
  - `/about` (About Us & Leadership)
  - `/strengths-services` (Disciplines & Technical Specs)
  - `/projects/ongoing` (Live Site Telemetry)
  - `/projects/completed` (Delivered Works Portfolio)
  - `/gallery` (High-Res Masonry Lightbox Gallery)
  - `/contact` (RFQ Consultation & Site Intake Form)
  - `/privacy` & `/terms` (Construction Policies)
- **Zero-Dependency SPA Routing**: Native History API router with popstate support and smooth scroll restoration.

---

## Tech Stack

- **React 19**
- **Vite 6**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide Icons**

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The compiled assets will be in the `dist/` directory, ready for static hosting.
