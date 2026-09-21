import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Building2, CheckCircle2 } from 'lucide-react';

export default function KPTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      quote:
        "APEX CONSTRUCTIONS completed our 5-acre industrial facility ahead of schedule and under budget. Their resident site discipline and weekly telemetry reporting are the best we've experienced across South India.",
      name: 'Mr. Rajan K.',
      role: 'Operations Director, KR Fuels',
      projectScope: '5-Acre Heavy Industrial Campus',
      location: 'Trichy, TN',
    },
    {
      quote:
        'The hospital build is critical infrastructure requiring high clinical precision. We needed a contractor who understood medical gas ducting and vibration-isolated foundations. APEX CONSTRUCTIONS delivered exactly that.',
      name: 'Dr. Vasudevan',
      role: 'Dr. Vasudevan Eye Hospital',
      projectScope: '20,000 sqft Multi-Specialty Hospital',
      location: 'Chidambaram, TN',
    },
    {
      quote:
        'Industrial flooring is completely unforgiving work. Two years after heavy machinery installation, the surface is still flawless — zero dusting, zero joint deflection, zero micro-cracking.',
      name: 'Mr. Suresh M.',
      role: 'Plant Manager, Suriyan Mark Industries',
      projectScope: 'Full Plant Jointless Laser Screed',
      location: 'Trichy, TN',
    },
    {
      quote:
        'From deep piling foundations to structural roof steel erection, their milestone transparency kept our leadership in complete command. Zero surprise billing, zero compounding delays.',
      name: 'Mr. Karthik R.',
      role: 'Managing Director, KR Gases Pvt. Ltd.',
      projectScope: 'Industrial Cylinder Bottling Plant',
      location: 'Tirunelveli, TN',
    },
    {
      quote:
        'We have partnered with APEX CONSTRUCTIONS on three separate commercial developments. The same engineering rigor, resident supervision, and build quality on every single site.',
      name: 'Mr. Senthil P.',
      role: 'Director, SR Craft Engineering',
      projectScope: 'Commercial Office & Workshop Hub',
      location: 'Lalgudi, TN',
    },
  ];

  const current = reviews[activeIdx];

  const prev = () => {
    setActiveIdx((prevIdx) => (prevIdx - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % reviews.length);
  };

  return (
    <section id="testimonials" className="section-y bg-paper-2/50 border-b border-line relative overflow-hidden">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16 items-center">
          {/* LEFT COLUMN: INTRO & CONTROLS */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
              <span>Executive Validation</span>
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              Endorsed by project owners. <em className="italic gradient-text">Proven on site.</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-ink">
              Repeat partnerships represent over 98% of our ongoing capital portfolio. We build structures that protect commercial investments.
            </p>

            {/* CONTROLS & COUNTER */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-ink transition-all hover:border-ink hover:scale-105 cursor-pointer shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="grid h-12 w-12 place-items-center rounded-full border border-ink bg-ink text-white transition-all hover:bg-blue hover:border-blue hover:scale-105 cursor-pointer shadow-sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-ink">
                0{activeIdx + 1} / 0{reviews.length}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: ARCHITECTURAL TESTIMONIAL CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-8 md:p-12 shadow-xl shadow-ink/5">
            <div aria-hidden={true} className="blueprint-bg absolute inset-0 opacity-[0.03] pointer-events-none" />

            {/* TOP SCOPE BADGE */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-line/60">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                  {current.projectScope}
                </span>
              </div>
              <span className="rounded-full bg-blue/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-blue">
                {current.location}
              </span>
            </div>

            {/* QUOTE BODY */}
            <div className="relative z-10 mt-8">
              <Quote className="h-8 w-8 text-blue/30 mb-4" />
              <p className="font-display text-xl md:text-2xl leading-[1.45] tracking-tight text-ink">
                "{current.quote}"
              </p>
            </div>

            {/* AUTHOR FOOTER */}
            <div className="relative z-10 mt-10 pt-6 border-t border-line/60 flex items-center justify-between">
              <div>
                <div className="font-display text-lg font-bold text-ink">
                  {current.name}
                </div>
                <div className="text-[13px] text-muted-ink">
                  {current.role}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-blue text-xs font-mono font-medium">
                <CheckCircle2 className="h-4 w-4" />
                <span>Verified Client</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
