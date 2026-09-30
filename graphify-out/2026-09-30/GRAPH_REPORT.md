# Graph Report - 3d-website  (2026-09-30)

## Corpus Check
- 35 files · ~1,189,883 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: .css 8, (none) 2)

## Summary
- 136 nodes · 237 edges · 12 communities (8 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `77544e42`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ref_child_process
- App.jsx
- package.json
- dependencies
- react
- hero.js
- devDependencies
- APEX CONSTRUCTIONS - 3D Interactive Engineering Website
- render_all_pages_ssr.mjs
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `react` - 29 edges
2. `lucide-react` - 21 edges
3. `useRouter()` - 17 edges
4. `scripts` - 6 edges
5. `wrapHTML()` - 4 edges
6. `APEX CONSTRUCTIONS - 3D Interactive Engineering Website` - 4 edges
7. `Getting Started` - 4 edges
8. `drawFrame()` - 3 edges
9. `react-dom` - 3 edges
10. `build()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `AppContent()` --calls--> `useRouter()`  [EXTRACTED]
  src/App.jsx → src/router/Router.jsx
- `KPFooter()` --calls--> `useRouter()`  [EXTRACTED]
  src/components/KP/KPFooter.jsx → src/router/Router.jsx
- `KPHeader()` --calls--> `useRouter()`  [EXTRACTED]
  src/components/KP/KPHeader.jsx → src/router/Router.jsx
- `AboutPage()` --calls--> `useRouter()`  [EXTRACTED]
  src/pages/AboutPage.jsx → src/router/Router.jsx
- `CompletedProjectsPage()` --calls--> `useRouter()`  [EXTRACTED]
  src/pages/CompletedProjectsPage.jsx → src/router/Router.jsx

## Import Cycles
- None detected.

## Communities (12 total, 4 thin omitted)

### Community 1 - "App.jsx"
Cohesion: 0.17
Nodes (17): lucide-react, AppContent(), KPConsultationModal(), KPFooter(), KPHeader(), src_data_kpprojects, AboutPage(), CompletedProjectsPage() (+9 more)

### Community 2 - "package.json"
Cohesion: 0.09
Nodes (22): name, private, scripts, build, build:html, dev, lint, preview (+14 more)

### Community 3 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, gsap, lenis, lucide-react, react, react-dom, @react-three/drei, @react-three/fiber (+1 more)

### Community 4 - "react"
Cohesion: 0.14
Nodes (14): react, KPCTA(), KPFAQ(), KPFloatingBar(), KPFounder(), KPHero(), KPMarquee(), KPOngoingProjects() (+6 more)

### Community 7 - "hero.js"
Cohesion: 0.47
Nodes (3): drawFrame(), handleResize(), handleScroll()

### Community 8 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, oxlint, sharp, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom, vite (+1 more)

### Community 9 - "APEX CONSTRUCTIONS - 3D Interactive Engineering Website"
Cohesion: 0.25
Nodes (7): 1. Install Dependencies, 2. Run Development Server, 3. Build for Production, APEX CONSTRUCTIONS - 3D Interactive Engineering Website, Getting Started, Key Features, Tech Stack

### Community 13 - "render_all_pages_ssr.mjs"
Cohesion: 0.17
Nodes (13): ref_fs, ref_path, react-dom, vite, build(), getFooterHTML(), getHeaderHTML(), processContent() (+5 more)

## Knowledge Gaps
- **46 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 59 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.jsx`, `package.json`, `render_all_pages_ssr.mjs`?**
  _High betweenness centrality (0.307) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `App.jsx` to `package.json`, `react`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.13675213675213677 - nodes in this community are weakly interconnected._