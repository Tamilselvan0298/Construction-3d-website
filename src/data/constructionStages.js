/**
 * Architectural Construction Stages & BIM Technical Metadata
 * Controls the 9 stages of the scroll-driven 3D construction visualization
 */

export const constructionStages = [
  {
    id: "stage-00",
    number: "01",
    phase: "THE SITE & SURVEY",
    range: [0.00, 0.10],
    title: "SITE ANALYSIS & SURVEY",
    quote: "Every enduring structure begins with the ground beneath it.",
    elevation: "REF ±0.000 M",
    discipline: "CIVIL & GEOTECHNICAL",
    specs: {
      plotArea: "12,400 SQ.FT",
      soilType: "Hard Red Gravelly Soil",
      bearingCapacity: "240 kN/m²",
      gridSpan: "6.0m × 6.0m Grid"
    },
    system: "Grid A1–B3 Stakeout"
  },
  {
    id: "stage-01",
    number: "02",
    phase: "EARTHWORKS & FOUNDATION",
    range: [0.10, 0.22],
    title: "EXCAVATION & ISOLATED FOOTINGS",
    quote: "Strength begins in the darkness below the surface.",
    elevation: "BOS -2.400 M",
    discipline: "SUB-STRUCTURE",
    specs: {
      depth: "2.4m Below Natural Ground",
      concreteGrade: "M30 High-Durability RCC",
      reinforcement: "Fe 550D TMT Steel",
      antiTermite: "Chemical Barrier Treated"
    },
    system: "Isolated RCC Pad Footings"
  },
  {
    id: "stage-02",
    number: "03",
    phase: "GROUND FLOOR STRUCTURE",
    range: [0.22, 0.35],
    title: "PLINTH BEAMS & COLUMNS",
    quote: "The skeletal spine rises to transfer axial structural loads.",
    elevation: "FFL +0.450 M",
    discipline: "SUPERSTRUCTURE / FRAME",
    specs: {
      columnSize: "400mm × 400mm RCC",
      plinthBeam: "300mm × 450mm Tie Beams",
      curingPeriod: "21 Days Ponding",
      slabThickness: "150mm Grade Slab"
    },
    system: "Moment-Resisting RCC Frame"
  },
  {
    id: "stage-03",
    number: "04",
    phase: "GROUND FLOOR ENVELOPE",
    range: [0.35, 0.48],
    title: "MASONRY & INTERNAL CORE",
    quote: "Mass and void define the spatial rhythm of human experience.",
    elevation: "LVL +3.200 M",
    discipline: "ARCHITECTURAL MASONRY",
    specs: {
      wallType: "AAC Thermal Blocks (200mm)",
      lintels: "Cast-in-situ RCC Lintels",
      mortar: "Polymer-Modified Thin Bed",
      acousticRating: "Rw 48 dB Isolation"
    },
    system: "Thermal & Acoustic Partitioning"
  },
  {
    id: "stage-04",
    number: "05",
    phase: "FIRST FLOOR STRUCTURE",
    range: [0.48, 0.60],
    title: "FIRST FLOOR SLAB & COLUMNS",
    quote: "Cantilevered planes float with engineered structural equilibrium.",
    elevation: "FFL +3.600 M",
    discipline: "STRUCTURAL SUSPENSION",
    specs: {
      slabType: "Post-Tensioned Flat Plate",
      cantileverSpan: "2.4m Architectural Overhang",
      clearHeight: "3.2m Floor-to-Ceiling",
      deflectionLimit: "Span / 350 Engineered"
    },
    system: "Suspended Post-Tensioned Plate"
  },
  {
    id: "stage-05",
    number: "06",
    phase: "SECOND FLOOR & BIM VIEW",
    range: [0.60, 0.72],
    title: "UPPER LEVEL & MEP INTEGRATION",
    quote: "An engineered convergence of structure, service conduits, and architecture.",
    elevation: "FFL +7.200 M",
    discipline: "BIM COORDINATION",
    specs: {
      mepStatus: "Fully Clashed 3D Conduits",
      columns: "Reinforced Slender Sections",
      balconyPlates: "Integrated Thermal Breaks",
      facadeAnchors: "Embedded Steel Plates"
    },
    system: "Multi-Disciplinary Coordination"
  },
  {
    id: "stage-06",
    number: "07",
    phase: "ROOF STRUCTURE",
    range: [0.72, 0.82],
    title: "ROOF SLAB & PARAPETS",
    quote: "A clean horizontal horizon shielding the volume beneath.",
    elevation: "TOP +10.800 M",
    discipline: "WATERPROOFING & ROOFING",
    specs: {
      slope: "1:80 Towards Rainwater Hoppers",
      membrane: "Dual-Layer APP Bitumen",
      insulation: "XPS Extruded Polystyrene 50mm",
      parapetHeight: "1.1m Architectural Coping"
    },
    system: "Monolithic Insulated Flat Roof"
  },
  {
    id: "stage-07",
    number: "08",
    phase: "FACADE & FENESTRATION",
    range: [0.82, 0.92],
    title: "HIGH-PERFORMANCE ENVELOPE",
    quote: "Solar-control glazing and bronze louvers frame natural illumination.",
    elevation: "FACADE ENVELOPE",
    discipline: "ARCHITECTURAL CLADDING",
    specs: {
      glazing: "DGU Double Glazed Low-E Units",
      mullions: "Thermally-Broken Dark Bronze",
      louvers: "Architectural Aluminum Blades",
      airTightness: "Class 4 Standard Tested"
    },
    system: "Ventilated Rainscreen & Curtain Wall"
  },
  {
    id: "stage-08",
    number: "09",
    phase: "LANDSCAPE & OCCUPANCY",
    range: [0.92, 1.00],
    title: "COMPLETED RESIDENCE & SURROUNDS",
    quote: "From the first line on paper to the final handover.",
    elevation: "COMPLETED HANDOVER",
    discipline: "LANDSCAPE & CIVIL WORKS",
    specs: {
      hardscape: "Basalt Flamed Stone Pavers",
      lighting: "3000K Warm Architectural LEDs",
      perimeter: "Monolithic Boundary Wall",
      occupancy: "Ready For Commissioning"
    },
    system: "Integrated Landscape & Hardscape"
  }
];
