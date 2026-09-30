# Graph Report - 3d-website  (2026-09-30)

## Corpus Check
- 88 files · ~2,518,775 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: .css 8, (none) 3)

## Summary
- 255 nodes · 464 edges · 18 communities (11 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e3e7a483`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ref_fs
- App.jsx
- package.json
- lucide-react
- HomePage.jsx
- ProceduralBuilding.jsx
- react
- hero.js
- devDependencies
- APEX CONSTRUCTIONS - 3D Interactive Engineering Website
- AboutStudio.jsx
- .oxlintrc.json
- ProjectsShowcase.jsx
- FAQ.jsx
- ConstructionProcess.jsx
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `react` - 62 edges
2. `lucide-react` - 39 edges
3. `useRouter()` - 17 edges
4. `attachMagnetic()` - 15 edges
5. `gsap` - 11 edges
6. `@react-three/fiber` - 9 edges
7. `three` - 9 edges
8. `scripts` - 5 edges
9. `APEX CONSTRUCTIONS - 3D Interactive Engineering Website` - 4 edges
10. `Getting Started` - 4 edges

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

## Communities (18 total, 7 thin omitted)

### Community 0 - "ref_fs"
Cohesion: 0.06
Nodes (24): ref_child_process, ref_fs, ref_path, sharp, imagesToDownload, routes, html, images (+16 more)

### Community 1 - "App.jsx"
Cohesion: 0.15
Nodes (17): AppContent(), KPConsultationModal(), KPFloatingBar(), KPFooter(), KPHeader(), src_data_kpprojects, AboutPage(), CompletedProjectsPage() (+9 more)

### Community 2 - "package.json"
Cohesion: 0.06
Nodes (31): dependencies, gsap, lenis, lucide-react, react, react-dom, @react-three/drei, @react-three/fiber (+23 more)

### Community 3 - "lucide-react"
Cohesion: 0.19
Nodes (11): gsap, lucide-react, attachMagnetic(), FinalCTA(), Header(), Header(), ProductDetails(), ProductScene() (+3 more)

### Community 4 - "HomePage.jsx"
Cohesion: 0.12
Nodes (12): KPCTA(), KPFAQ(), KPFounder(), KPHero(), KPMarquee(), KPOngoingProjects(), KPProcess(), KPProjects() (+4 more)

### Community 5 - "ProceduralBuilding.jsx"
Cohesion: 0.20
Nodes (11): @react-three/fiber, three, CameraController(), FacadeGroup(), FoundationGroup(), LandscapeGroup(), ProceduralBuilding(), RoofGroup() (+3 more)

### Community 6 - "react"
Cohesion: 0.10
Nodes (8): react, ConstructionHero(), ConstructionHUD(), TechnicalLabels(), Testimonials, constructionStages, servicesData, BuildingScene()

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

## Knowledge Gaps
- **59 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 87 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.jsx`, `package.json`, `lucide-react`, `HomePage.jsx`, `ProceduralBuilding.jsx`, `AboutStudio.jsx`, `ProjectsShowcase.jsx`, `FAQ.jsx`, `ConstructionProcess.jsx`?**
  _High betweenness centrality (0.430) - this node is a cross-community bridge._
- **Why does `sharp` connect `ref_fs` to `package.json`?**
  _High betweenness centrality (0.204) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `App.jsx`, `package.json`, `HomePage.jsx`, `react`, `AboutStudio.jsx`, `ProjectsShowcase.jsx`, `FAQ.jsx`, `ConstructionProcess.jsx`?**
  _High betweenness centrality (0.150) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ref_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.06386554621848739 - nodes in this community are weakly interconnected._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14623655913978495 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._