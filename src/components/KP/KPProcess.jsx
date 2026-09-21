import React from 'react';
import { Compass, Cpu, Layers, HardHat, ShieldCheck, KeyRound } from 'lucide-react';

export default function KPProcess() {
  const phases = [
    {
      phase: '01',
      title: 'Geotechnical Soil & Topography',
      deliverable: 'Borehole analysis, soil bearing capacity (SBC), and RTK drone boundary topography.',
      icon: Compass,
      stageTag: 'PRE-CONSTRUCTION',
    },
    {
      phase: '02',
      title: 'Structural CAD & BIM Simulation',
      deliverable: 'Tekla 3D steel modeling, rebar schedules (BBS), and clash detection before procurement.',
      icon: Cpu,
      stageTag: 'ENGINEERING',
    },
    {
      phase: '03',
      title: 'Substructure & Foundation Pours',
      deliverable: 'Piling, raft casting, water-stopping membranes, and 7-day cube crush verification.',
      icon: Layers,
      stageTag: 'SUBSTRUCTURE',
    },
    {
      phase: '04',
      title: 'Superstructure & Structural Steel',
      deliverable: 'RCC frame casting, PEB truss alignment, laser-screed jointless slab pouring.',
      icon: HardHat,
      stageTag: 'ERECTION',
    },
    {
      phase: '05',
      title: 'MEP Integration & Envelope Cladding',
      deliverable: 'Pressure-tested fire plumbing, HVAC ducting, facade glazing, and industrial insulation.',
      icon: ShieldCheck,
      stageTag: 'SERVICES',
    },
    {
      phase: '06',
      title: 'Statutory Commissioning & Handover',
      deliverable: '100-point snag clearing, fire/municipal occupancy certs, and complete digital O&M dossier.',
      icon: KeyRound,
      stageTag: 'HANDOVER',
    },
  ];

  return (
    <section id="process" className="section-y bg-paper border-b border-line relative overflow-hidden">
      <div className="container-x">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-line">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
              <span>Execution Blueprint</span>
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              The 6-stage Work Breakdown Structure. <em className="italic gradient-text">Paced for precision.</em>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-ink">
            Every phase has designated gate inspections. Construction proceeds only when resident engineering leads sign off on quality checkpoints.
          </p>
        </div>

        {/* 6 ARCHITECTURAL PHASE CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {phases.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.phase}
                className="group relative rounded-2xl border border-line bg-paper-2/40 p-7 transition-all duration-300 hover:border-blue/40 hover:bg-white hover:shadow-lg hover:shadow-blue/5 flex flex-col justify-between"
              >
                <div>
                  {/* TOP PHASE & TAG */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-bold tracking-tighter text-ink group-hover:text-blue transition-colors">
                      {item.phase}
                    </span>
                    <span className="rounded-md border border-line bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-ink">
                      {item.stageTag}
                    </span>
                  </div>

                  {/* ICON & TITLE */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue group-hover:bg-blue group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                      {item.title}
                    </h3>
                  </div>

                  {/* DELIVERABLE */}
                  <p className="mt-4 text-[13.5px] leading-relaxed text-muted-ink">
                    {item.deliverable}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-ink">
                  <span>Sign-Off Gate Passed</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
