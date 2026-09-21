import React from 'react';
import { ShieldCheck, HardHat, Compass, Layers, Cpu, HeartHandshake, ArrowUpRight } from 'lucide-react';

export default function KPReasons() {
  const pillars = [
    {
      code: 'SPEC-01',
      metric: '±2mm',
      metricLabel: 'Surface Tolerance',
      title: 'Precision Laser-Screed Leveling',
      body: 'Zero-dusting, high-tolerance industrial flooring built to support 40-tonne machinery loads without deflection or micro-cracking.',
      icon: Layers,
    },
    {
      code: 'SPEC-02',
      metric: '100%',
      metricLabel: 'Lab Crush Tested',
      title: 'IS-Code Concrete & Steel Validation',
      body: '7-day and 28-day concrete cube crush tests with documented batch plant certifications for every single cubic meter poured.',
      icon: ShieldCheck,
    },
    {
      code: 'SPEC-03',
      metric: '1:1',
      metricLabel: 'Site-to-Engineer Ratio',
      title: 'Resident Civil Engineers on Site',
      body: 'No proxy contractors. Every job site has licensed resident engineers continuously overseeing formwork, rebar layout, and concrete placement.',
      icon: HardHat,
    },
    {
      code: 'SPEC-04',
      metric: '0-Lag',
      metricLabel: 'Critical Path Method',
      title: 'CPM Schedule & Milestone Telemetry',
      body: 'Real-time timeline tracking prevents compounding contractor delays, accompanied by weekly drone progress photogrammetry.',
      icon: Compass,
    },
    {
      code: 'SPEC-05',
      metric: '3D BIM',
      metricLabel: 'Clash Detection',
      title: 'Digital Modeling & Drone Topography',
      body: 'Structural, MEP, and architectural systems coordinated in digital space before the first shovel touches soil, eliminating costly on-site rework.',
      icon: Cpu,
    },
    {
      code: 'SPEC-06',
      metric: '0 LTI',
      metricLabel: 'Lost Time Incident Rate',
      title: 'IS 45001 Rigorous EHS Safety Regime',
      body: 'Full-time safety officers, mandatory toolbox talks, engineered scaffolding, and personal protective equipment protocols on every deck.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="benchmarks" className="section-y bg-paper border-b border-line relative overflow-hidden">
      <div className="container-x">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
              <span>The APEX Engineering Benchmark</span>
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              Six structural standards that <em className="italic gradient-text">protect your capital.</em>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-ink">
            Every metric below is backed by field logs, laboratory reports, and digital handovers. We invite owners to inspect any active project site.
          </p>
        </div>

        {/* 6-CARD ARCHITECTURAL SPEC GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-paper-2/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue/40 hover:bg-white hover:shadow-xl hover:shadow-blue/5"
              >
                {/* TOP SPEC BAR */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-line/60">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-ink">
                      {pillar.code}
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue/10 text-blue group-hover:bg-blue group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* METRIC CALLOUT */}
                  <div className="mt-6">
                    <div className="font-display text-4xl font-bold tracking-tight text-ink group-hover:text-blue transition-colors">
                      {pillar.metric}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-ink mt-0.5">
                      {pillar.metricLabel}
                    </div>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted-ink">
                    {pillar.body}
                  </p>
                </div>

                {/* BOTTOM ACCENT LINE */}
                <div className="mt-8 pt-4 border-t border-line/50 flex items-center justify-between text-[12px] font-semibold uppercase tracking-wider text-muted-ink group-hover:text-blue transition-colors">
                  <span>Verified Standard</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
