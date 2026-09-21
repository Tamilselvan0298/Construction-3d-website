import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Ruler, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function KPServices({ onContact }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const disciplines = [
    {
      code: 'DISC-01',
      title: 'Industrial Manufacturing & Warehousing',
      tagline: 'Heavy load-bearing plants, processing units, and logistics complexes',
      description: 'Specialized industrial construction designed around process flows, material handling cranes, high-bay storage, and chemical-resistant laser-screed flooring.',
      specs: [
        { label: 'Clear Span Capacity', val: 'Up to 60m column-free', icon: Ruler },
        { label: 'Floor Load Rating', val: '8 – 12 MT / sq.m', icon: Zap },
        { label: 'Compliance Standard', val: 'IS 800:2007 & NBC 2016', icon: ShieldCheck },
        { label: 'Turnaround Target', val: 'Fast-Track 5–8 Mo', icon: Clock },
      ],
      highlights: [
        'Laser-guided FM2 / DM2 tolerance jointless flooring',
        'Overhead EOT crane runway beam alignment & rigging',
        'Substation, storm drainage, and heavy utility trenches',
      ],
      image: '/projects/project_ca8dd0ea-d137-40b0-bc00-68201d10960f.jpg',
    },
    {
      code: 'DISC-02',
      title: 'Commercial & Multi-Specialty Healthcare',
      tagline: 'Hospitals, corporate headquarters, and institutional campuses',
      description: 'Engineered commercial spaces built for high footfall, clinical hygiene standards, complex MEP ducting, fire safety compartmentalization, and high-efficiency building envelopes.',
      specs: [
        { label: 'HVAC & MEP Integration', val: 'BMS-Ready Ducting', icon: Zap },
        { label: 'Acoustic Rating', val: 'STC 50+ Partitions', icon: Ruler },
        { label: 'Safety Code', val: 'NABH & IS 1642:1989', icon: ShieldCheck },
        { label: 'Floor-to-Floor Height', val: 'Up to 4.5m Clear', icon: Clock },
      ],
      highlights: [
        'Cleanroom & operating theater airtight drywall finishes',
        'Vibration-isolated foundations for diagnostic MRI/CT gear',
        'Multi-story facade glass and aluminum composite paneling',
      ],
      image: '/projects/project_16b4b64f-44e5-4540-832c-08d7b623e623.jpg',
    },
    {
      code: 'DISC-03',
      title: 'Structural Steel & Pre-Engineered Buildings (PEB)',
      tagline: 'High-tensile structural steel fabrication, erection, and roofing',
      description: 'Fabricated in certified workshops using high-grade structural steel (E350/E250), hot-rolled sections, and standing seam leak-proof roofing systems for rapid, high-durability enclosures.',
      specs: [
        { label: 'Steel Grade', val: 'Fe 350 / 410 MPa', icon: Zap },
        { label: 'Coating Protection', val: 'Hot-Dip Galvanized', icon: Ruler },
        { label: 'Wind Load Resistance', val: 'Up to 50 m/s (IS 875)', icon: ShieldCheck },
        { label: 'Erection Speed', val: '40% Faster Than RCC', icon: Clock },
      ],
      highlights: [
        'Tekla 3D structural connection modeling & clash check',
        'Standing seam Galvalume roofing with 15-yr leak warranty',
        'Certified torque-tightened high-strength friction bolts',
      ],
      image: '/projects/project_4b547b12-37a4-4b08-ba7f-8d19a88cc08e.jpg',
    },
    {
      code: 'DISC-04',
      title: 'Premium Multi-Family Residential',
      tagline: 'G+3 to high-rise gated communities and executive apartments',
      description: 'Structural RCC framing with anti-efflorescence brickwork, premium waterproofing membranes, aesthetic cantilever balconies, and long-term 30-year foundation warranties.',
      specs: [
        { label: 'Concrete Strength', val: 'M25 / M30 Ready-Mix', icon: Zap },
        { label: 'Waterproofing', val: '5-Layer Polyurethane', icon: Ruler },
        { label: 'Seismic Zone Design', val: 'Zone III Compliant', icon: ShieldCheck },
        { label: 'Warranty Period', val: '30-Year Structural', icon: Clock },
      ],
      highlights: [
        'Acoustically dampened floor slabs and drainage runs',
        'Vaastu-compliant layout optimization for every unit',
        'Solar rooftop and rainwater harvesting integration',
      ],
      image: '/projects/project_7c01225a-142a-43a4-aff8-e7e97f7331fb.jpg',
    },
    {
      code: 'DISC-05',
      title: 'Heavy Civil Infrastructure & Site Grading',
      tagline: 'Earthwork, retaining walls, multi-acre pavements, and utilities',
      description: 'Master civil site works including precision cut-and-fill grading, heavy-duty rigid concrete pavements, box culverts, and high-capacity stormwater networks.',
      specs: [
        { label: 'Subgrade Compaction', val: '98% Modified Proctor', icon: Zap },
        { label: 'Pavement Type', val: 'PQC M40 Grade Concrete', icon: Ruler },
        { label: 'Environmental EHS', val: 'Zero Runoff Siltation', icon: ShieldCheck },
        { label: 'Survey Tech', val: 'RTK GPS & Drone LiDAR', icon: Clock },
      ],
      highlights: [
        'Heavy vibratory soil compaction testing on every lift',
        'Deep storm drainage channels with geotextile lining',
        'Reinforced earth (RE) retaining structures for steep sites',
      ],
      image: '/projects/project_4fd5a8ae-0530-4282-9480-0f9d09dbf7d3.jpg',
    },
    {
      code: 'DISC-06',
      title: 'Turnkey EPC Construction & Commissioning',
      tagline: 'Single-point accountability from architectural conception to keys',
      description: 'End-to-end Engineering, Procurement, and Construction (EPC). A single contract guarantees fixed cost schedules, unified warranty, and zero contractor friction.',
      specs: [
        { label: 'Contract Format', val: 'Lump Sum EPC / Turnkey', icon: Zap },
        { label: 'Risk Transfer', val: 'Zero Price Creep', icon: Ruler },
        { label: 'Quality Handover', val: 'Full BIM As-Built Dossier', icon: ShieldCheck },
        { label: 'Defect Liability', val: '12 Months Free Cover', icon: Clock },
      ],
      highlights: [
        'Single resident project director responsible for entire site',
        'Integrated statutory liaison (DTCP, CMDA, Fire, Pollution)',
        'Comprehensive digital O&M manuals and equipment test certs',
      ],
      image: '/projects/project_0a72ba79-ce78-46ea-a03a-3c76fccacb5d.jpg',
    },
  ];

  const active = disciplines[activeIdx];

  return (
    <section id="services" className="section-y bg-ink text-white relative overflow-hidden border-b border-white/10">
      <div aria-hidden={true} className="blueprint-bg absolute inset-0 opacity-[0.05] pointer-events-none" />

      <div className="container-x relative">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-amber">
              <span>Engineering Disciplines Dossier</span>
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em]">
              Master construction disciplines. <em className="italic gradient-text">Zero compromises.</em>
            </h2>
          </div>

          <button
            type="button"
            onClick={onContact}
            className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur hover:border-amber hover:bg-amber hover:text-ink transition-all duration-300 cursor-pointer shrink-0"
          >
            <span>Consult an Engineering Lead</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* DUAL-PANE DOSSIER INTERACTIVE SHOWCASE */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr] items-start">
          {/* LEFT SELECTOR LIST */}
          <div className="flex flex-col gap-2.5">
            {disciplines.map((d, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={d.code}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative flex flex-col p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'border-amber bg-white/10 shadow-lg shadow-black/40'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[11px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-amber' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {d.code}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isSelected
                          ? 'text-amber translate-x-0.5 -translate-y-0.5'
                          : 'text-white/30 group-hover:text-white/70'
                      }`}
                    />
                  </div>

                  <div className="mt-2 font-display text-lg font-bold text-white tracking-tight leading-snug">
                    {d.title}
                  </div>

                  <p className="mt-1 text-[13px] text-white/60 line-clamp-1">
                    {d.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT ARCHITECTURAL DOSSIER CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-6 lg:p-8 backdrop-blur-md">
            {/* HERO IMAGE BANNER */}
            <div className="relative h-[260px] md:h-[320px] w-full overflow-hidden rounded-2xl border border-white/10">
              <img
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber">
                    {active.code} // ACTIVE SCOPE
                  </span>
                  <div className="font-display text-2xl md:text-3xl font-bold text-white mt-1">
                    {active.title}
                  </div>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[15px] leading-relaxed text-white/80">
              {active.description}
            </p>

            {/* 4 SPEC BOXES */}
            <div className="mt-6 grid grid-cols-2 gap-3.5 md:grid-cols-4">
              {active.specs.map((spec, i) => {
                const SpecIcon = spec.icon;
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left"
                  >
                    <div className="flex items-center gap-2 text-amber text-xs">
                      <SpecIcon className="h-4 w-4 shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                        {spec.label}
                      </span>
                    </div>
                    <div className="mt-2 font-display text-sm font-bold text-white leading-tight">
                      {spec.val}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ENGINEERING HIGHLIGHTS */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-3">
                Key Engineering Deliverables
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2 list-none p-0">
                {active.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-white/85">
                    <CheckCircle2 className="h-4 w-4 text-amber shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
