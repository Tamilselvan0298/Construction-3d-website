# Graph Report - 3d-website  (2026-09-30)

## Corpus Check
- 90 files · ~2,429,634 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: .css 8, (none) 3)

## Summary
- 267 nodes · 485 edges · 20 communities (12 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `28dd75f7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ref_fs
- App.jsx
- package.json
- lucide-react
- HomePage.jsx
- react
- FAQ.jsx
- hero.js
- devDependencies
- APEX CONSTRUCTIONS - 3D Interactive Engineering Website
- AboutStudio.jsx
- .oxlintrc.json
- ProjectsShowcase.jsx
- render_all_pages_ssr.mjs
- ConstructionHero.jsx
- ConstructionProcess.jsx
- rules/graphify.md
- workflows/graphify.md
- Services.jsx

## God Nodes (most connected - your core abstractions)
1. `react` - 63 edges
2. `lucide-react` - 39 edges
3. `useRouter()` - 17 edges
4. `attachMagnetic()` - 15 edges
5. `gsap` - 11 edges
6. `@react-three/fiber` - 9 edges
7. `three` - 9 edges
8. `scripts` - 5 edges
9. `wrapHTML()` - 4 edges
10. `APEX CONSTRUCTIONS - 3D Interactive Engineering Website` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ConstructionHero()` --calls--> `attachMagnetic()`  [EXTRACTED]
  src/components/ConstructionExperience/ConstructionHero.jsx → src/animations/magnetic.js
- `AppContent()` --calls--> `useRouter()`  [EXTRACTED]
  src/App.jsx → src/router/Router.jsx
- `FinalCTA()` --calls--> `attachMagnetic()`  [EXTRACTED]
  src/components/FinalCTA.jsx → src/animations/magnetic.js
- `Header()` --calls--> `attachMagnetic()`  [EXTRACTED]
  src/components/Header/Header.jsx → src/animations/magnetic.js
- `Header()` --calls--> `attachMagnetic()`  [EXTRACTED]
  src/components/Header.jsx → src/animations/magnetic.js

## Import Cycles
- None detected.

## Communities (20 total, 8 thin omitted)

### Community 0 - "ref_fs"
Cohesion: 0.06
Nodes (25): ref_child_process, ref_fs, ref_path, sharp, pageConfigs, imagesToDownload, routes, html (+17 more)

### Community 1 - "App.jsx"
Cohesion: 0.15
Nodes (17): AppContent(), KPConsultationModal(), KPFloatingBar(), KPFooter(), KPHeader(), src_data_kpprojects, AboutPage(), CompletedProjectsPage() (+9 more)

### Community 2 - "package.json"
Cohesion: 0.07
Nodes (27): dependencies, gsap, lenis, lucide-react, react, react-dom, @react-three/drei, @react-three/fiber (+19 more)

### Community 3 - "lucide-react"
Cohesion: 0.13
Nodes (12): gsap, lucide-react, attachMagnetic(), FinalCTA(), Header(), Header(), ProductDetails(), ProductScene() (+4 more)

### Community 4 - "HomePage.jsx"
Cohesion: 0.12
Nodes (12): KPCTA(), KPFAQ(), KPFounder(), KPHero(), KPMarquee(), KPOngoingProjects(), KPProcess(), KPProjects() (+4 more)

### Community 5 - "react"
Cohesion: 0.16
Nodes (12): react, @react-three/fiber, three, CameraController(), FacadeGroup(), FoundationGroup(), LandscapeGroup(), ProceduralBuilding() (+4 more)

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
Cohesion: 0.23
Nodes (10): react-dom, build(), getFooterHTML(), getHeaderHTML(), processContent(), subpages, wrapHTML(), App() (+2 more)

### Community 14 - "ConstructionHero.jsx"
Cohesion: 0.36
Nodes (5): ConstructionHero(), ConstructionHUD(), TechnicalLabels(), constructionStages, BuildingScene()

## Knowledge Gaps
- **61 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+56 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 92 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.jsx`, `package.json`, `lucide-react`, `HomePage.jsx`, `FAQ.jsx`, `AboutStudio.jsx`, `ProjectsShowcase.jsx`, `render_all_pages_ssr.mjs`, `ConstructionHero.jsx`, `ConstructionProcess.jsx`, `Services.jsx`?**
  _High betweenness centrality (0.511) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `App.jsx`, `package.json`, `HomePage.jsx`, `FAQ.jsx`, `AboutStudio.jsx`, `ProjectsShowcase.jsx`, `ConstructionHero.jsx`, `ConstructionProcess.jsx`, `Services.jsx`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _61 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ref_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.058029689608636977 - nodes in this community are weakly interconnected._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14623655913978495 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06653225806451613 - nodes in this community are weakly interconnected._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._