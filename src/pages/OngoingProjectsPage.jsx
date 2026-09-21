import React from 'react';
import kpProjectsData from '../data/kpProjects.json';
import { MapPin, ArrowUpRight, Activity, Calendar, ShieldCheck } from 'lucide-react';
import { useRouter } from '../router/Router';

export default function OngoingProjectsPage({ onOpenConsultation }) {
  const { navigate } = useRouter();
  const ongoing = kpProjectsData.filter((p) => p.status === 'ongoing');

  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* 1. HERO HEADER */}
      <section className="container-x py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
            <span>/ Projects</span>
            <span>·</span>
            <span>Live Sites</span>
          </div>
          <h1 className="mt-5 font-display text-display-1 leading-[1] tracking-[-0.04em] text-ink">
            Currently under <em className="italic gradient-text">construction.</em>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-2 max-w-2xl">
            Real-time execution across our active building sites in South India. Updated weekly with verified structural milestone certifications.
          </p>
        </div>

        {/* METRICS ROW */}
        <div className="mt-12 flex flex-wrap items-center gap-4 text-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-4 py-2 text-green font-medium">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
            <span>3 Active Sites Under Strict QA/QC</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-muted-ink">
            <ShieldCheck className="h-4 w-4 text-blue" />
            <span>Zero Lost-Time Incidents</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-muted-ink">
            <Calendar className="h-4 w-4 text-ink" />
            <span>Weekly Critical-Path CPM Tracking</span>
          </div>
        </div>
      </section>

      {/* 2. ONGOING PROJECTS GRID */}
      <section className="section-y bg-paper-2/60 border-t border-line">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ongoing.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-line bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-[280px] w-full overflow-hidden bg-ink">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-white/50">
                      No photo available
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

                  {/* BADGES */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow backdrop-blur">
                      {item.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
                      Active Site
                    </span>
                  </div>

                  {/* BOTTOM OVERLAY INFO */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-white/80">
                    <MapPin className="h-3.5 w-3.5 text-blue" />
                    <span>{item.location}</span>
                    {item.area && (
                      <>
                        <span>•</span>
                        <span>{item.area}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h2 className="font-display text-2xl font-medium tracking-tight text-ink group-hover:text-blue transition-colors">
                      {item.title}
                    </h2>
                  </div>

                  {/* PROGRESS BAR & MILESTONES */}
                  <div className="mt-6 border-t border-line pt-5">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-muted-ink">Certified Completion</span>
                      <span className="font-mono text-sm font-bold text-blue">
                        {item.progress}%
                      </span>
                    </div>

                    <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-paper-3">
                      <div
                        style={{ width: `${item.progress}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-blue to-green transition-all duration-1000 ease-out"
                      />
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={onOpenConsultation}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink hover:text-blue transition-colors cursor-pointer bg-transparent border-none"
                      >
                        <span>Inquire About Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                      <span className="text-[11px] text-muted-ink font-mono">
                        Stage: Superstructure
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="container-x section-y">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-white md:px-16 md:py-18">
          <div className="absolute inset-0 blueprint-bg opacity-[0.07] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-display-2 leading-[1] tracking-[-0.035em]">
                Want live site inspection notes?
              </h2>
              <p className="mt-3 text-[16px] text-white/75 max-w-xl leading-relaxed">
                We maintain open books and documented inspection records for project sponsors and structural auditors.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-white pl-7 pr-2 text-[15px] font-medium text-ink transition-colors hover:bg-paper-2 cursor-pointer border-none shrink-0"
            >
              <span>Schedule a Briefing</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
