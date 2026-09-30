# Graph Report - 3d-website  (2026-09-30)

## Corpus Check
- 37 files · ~2,316,178 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: .css 8, (none) 3)

## Summary
- 143 nodes · 245 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ee4d6bf5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ref_child_process
- App.jsx
- package.json
- dependencies
- HomePage.jsx
- scripts
- hero.js
- devDependencies
- APEX CONSTRUCTIONS - 3D Interactive Engineering Website
- .oxlintrc.json
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
8. `rules` - 3 edges
9. `drawFrame()` - 3 edges
10. `react-dom` - 3 edges

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

## Communities (14 total, 4 thin omitted)

### Community 1 - "App.jsx"
Cohesion: 0.18
Nodes (17): react, AppContent(), KPFloatingBar(), KPFooter(), KPHeader(), src_data_kpprojects, AboutPage(), CompletedProjectsPage() (+9 more)

### Community 2 - "package.json"
Cohesion: 0.12
Nodes (17): name, private, type, version, gsap, lenis, oxlint, @react-three/drei (+9 more)

### Community 3 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, gsap, lenis, lucide-react, react, react-dom, @react-three/drei, @react-three/fiber (+1 more)

### Community 4 - "HomePage.jsx"
Cohesion: 0.13
Nodes (14): lucide-react, KPConsultationModal(), KPCTA(), KPFAQ(), KPFounder(), KPHero(), KPMarquee(), KPOngoingProjects() (+6 more)

### Community 5 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, build:html, dev, lint, preview

### Community 7 - "hero.js"
Cohesion: 0.47
Nodes (3): drawFrame(), handleResize(), handleScroll()

### Community 8 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, oxlint, sharp, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom, vite (+1 more)

### Community 9 - "APEX CONSTRUCTIONS - 3D Interactive Engineering Website"
Cohesion: 0.25
Nodes (7): 1. Install Dependencies, 2. Run Development Server, 3. Build for Production, APEX CONSTRUCTIONS - 3D Interactive Engineering Website, Getting Started, Key Features, Tech Stack

### Community 11 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 13 - "render_all_pages_ssr.mjs"
Cohesion: 0.19
Nodes (12): ref_fs, ref_path, react-dom, build(), getFooterHTML(), getHeaderHTML(), processContent(), subpages (+4 more)

## Knowledge Gaps
- **48 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+43 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 61 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `package.json`, `HomePage.jsx`, `render_all_pages_ssr.mjs`?**
  _High betweenness centrality (0.282) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `HomePage.jsx` to `App.jsx`, `package.json`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _48 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.11695906432748537 - nodes in this community are weakly interconnected._
- **Should `HomePage.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1339031339031339 - nodes in this community are weakly interconnected._