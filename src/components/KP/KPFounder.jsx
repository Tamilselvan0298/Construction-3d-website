import React from 'react';
import { ShieldCheck, HardHat, Compass, FileCheck2 } from 'lucide-react';

export default function KPFounder() {
  const leadershipPoints = [
    {
      title: 'Direct Resident Site Command',
      desc: 'No subcontracted, unsupervised jobsites. Every foundation pour and beam erection is directly managed by licensed resident civil engineers.',
      icon: HardHat,
    },
    {
      title: 'Stringent IS-Code Quality Rigor',
      desc: 'Mandatory 3-stage QA: subgrade compaction testing, concrete cube compressive crush tests, and steel mill batch certificates on every delivery.',
      icon: FileCheck2,
    },
    {
      title: 'Critical Path Schedule Pacing',
      desc: 'Structured CPM timeline planning ensures zero compounding delays with weekly milestone telemetry delivered directly to project owners.',
      icon: Compass,
    },
  ];

  return (
    <section id="founder-section" className="section-y bg-paper-2/40 border-b border-line relative overflow-hidden">
      {/* ARCHITECTURAL AMBIENT GRID */}
      <div aria-hidden={true} className="blueprint-bg absolute inset-0 opacity-[0.04] pointer-events-none" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[480px_1fr] xl:grid-cols-[520px_1fr] lg:gap-16 items-center">
          {/* 1. ARCHITECTURAL FRAMED PORTRAIT */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-[24px] border border-ink/10 bg-paper p-3 shadow-lg shadow-ink/5">
              <div className="relative overflow-hidden rounded-[18px]">
                <img
                  src="/profile.webp"
                  alt="Arun Prakash, Founder & Managing Director"
                  className="h-[460px] md:h-[560px] w-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />

                {/* OVERLAY BADGE */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl border border-white/20 bg-ink/75 p-4 backdrop-blur-md text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-display text-xl font-bold tracking-tight text-white">
                          Arun Prakash
                        </div>
                        <div className="text-[12px] uppercase tracking-[0.14em] text-blue font-medium mt-0.5">
                          Founder & Managing Director
                        </div>
                      </div>
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue/20 text-blue border border-blue/40">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                      <span>Trichy, Tamil Nadu</span>
                      <span className="font-mono text-amber">EST. JUNE 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TECHNICAL CAD DECORATION CORNERS */}
            <div className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-blue" />
            <div className="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-blue" />
            <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-blue" />
            <div className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-blue" />
          </div>

          {/* 2. ENGINEERING PHILOSOPHY & MANIFESTO */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
              <span>Executive Field Leadership</span>
            </div>

            <h2 className="mt-5 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              "True engineering value is proved on the slab, <em className="italic gradient-text">not in sales pitches."</em>
            </h2>

            <p className="mt-6 text-[16px] leading-[1.75] text-ink-2">
              APEX CONSTRUCTIONS was established in June 2021 on a singular principle: commercial, industrial, and residential projects deserve unwavering structural integrity, transparent milestone pacing, and meticulous engineering supervision at every stage of execution.
            </p>

            {/* 3 PILLARS */}
            <div className="mt-8 space-y-4">
              {leadershipPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4.5 shadow-sm transition hover:border-blue/30 hover:shadow-md"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue/15 to-orange/15 text-blue border border-blue/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-base font-bold text-ink tracking-tight">
                        {item.title}
                      </div>
                      <div className="mt-1 text-[13.5px] leading-relaxed text-muted-ink">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
