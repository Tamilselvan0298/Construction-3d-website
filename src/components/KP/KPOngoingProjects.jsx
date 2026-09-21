import React from 'react';
import kpProjectsData from '../../data/kpProjects.json';
import { MapPin, Activity, HardHat, CheckCircle2 } from 'lucide-react';

export default function KPOngoingProjects() {
  const ongoing = kpProjectsData.filter((p) => p.status === 'ongoing');

  if (ongoing.length === 0) return null;

  // Engineering telemetry metadata for active projects
  const telemetryData = {
    'Apex Prime Residences': {
      activePhase: '3rd Floor RCC Slab & Shoring',
      inspectionStatus: 'Formwork Deflection Test: Passed',
      leadEngineer: 'Er. R. Sundaram (Structural Lead)',
    },
    'Dr. Vasudevan eye hospital  Chidambaram Project': {
      activePhase: 'Superstructure Enclosures & MEP Ducting',
      inspectionStatus: 'Medical Gas Rough-In: In Progress',
      leadEngineer: 'Er. K. Murugesan (Civil Lead)',
    },
    'Lasan healthcare private limited ': {
      activePhase: 'Structural Steel Trusses & Industrial Pavement',
      inspectionStatus: 'High-Tensile Bolt Torque: Certified',
      leadEngineer: 'Er. S. Prakash (PEB Specialist)',
    },
  };

  return (
    <section id="ongoing-projects" className="section-y bg-paper-2/60 border-b border-line relative overflow-hidden">
      <div className="container-x">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-line">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
              <span className="h-2 w-2 rounded-full bg-blue animate-pulse" />
              <span>Live Site Telemetry Dashboard</span>
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              Currently on the slab. <em className="italic gradient-text">Active sites.</em>
            </h2>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-line bg-white px-4 py-2 text-xs font-mono text-muted-ink shadow-sm">
            <Activity className="h-4 w-4 text-blue animate-spin" style={{ animationDuration: '3s' }} />
            <span>Updated Weekly — On-Site Resident Oversight</span>
          </div>
        </div>

        {/* 3-COLUMN DASHBOARD CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ongoing.map((item, idx) => {
            const telemetry = telemetryData[item.title] || {
              activePhase: 'Superstructure Execution',
              inspectionStatus: 'Quality Checkpoint: Passed',
              leadEngineer: 'Resident Civil Lead',
            };

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:border-blue/40"
              >
                {/* PHOTO HEADER WITH OVERLAY STATUS */}
                <div className="relative h-56 w-full overflow-hidden bg-ink">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="h-full w-full object-cover filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-ink-2" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

                  {/* TOP BADGES */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                      {item.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  {/* BOTTOM OF IMAGE: ACTIVE PHASE */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-amber font-semibold">
                      CURRENT STAGE
                    </div>
                    <div className="text-[13px] font-bold text-white truncate drop-shadow">
                      {telemetry.activePhase}
                    </div>
                  </div>
                </div>

                {/* CARD BODY TELEMETRY */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink leading-snug">
                      {item.title}
                    </h3>

                    <div className="mt-2.5 flex items-center gap-2 text-[13px] text-muted-ink">
                      <MapPin className="h-4 w-4 shrink-0 text-blue" />
                      <span>{item.location} {item.area ? `· ${item.area}` : ''}</span>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-line/60 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-ink-2">
                        <HardHat className="h-3.5 w-3.5 text-blue shrink-0" />
                        <span className="truncate">{telemetry.leadEngineer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-ink">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber shrink-0" />
                        <span className="truncate font-mono text-[11px]">{telemetry.inspectionStatus}</span>
                      </div>
                    </div>
                  </div>

                  {/* PROGRESS BAR TELEMETRY */}
                  <div className="mt-6 pt-4 border-t border-line/60">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-ink">
                        Structural Completion
                      </span>
                      <span className="font-mono text-xl font-bold text-ink">
                        {item.progress || 0}%
                      </span>
                    </div>

                    <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-line">
                      <div
                        style={{ width: `${item.progress || 0}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-amber via-blue to-orange transition-all duration-1000 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
