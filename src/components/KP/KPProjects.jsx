import React, { useState, useMemo } from 'react';
import kpProjectsData from '../../data/kpProjects.json';
import { ArrowUpRight, MapPin, Calendar, Layers } from 'lucide-react';

export default function KPProjects() {
  const [activeType, setActiveType] = useState('All');

  const categories = useMemo(() => {
    const types = new Set(kpProjectsData.map((p) => p.type).filter(Boolean));
    return ['All', ...Array.from(types)];
  }, []);

  const completed = useMemo(() => {
    const list = kpProjectsData.filter((p) => p.status === 'completed');
    return activeType === 'All'
      ? list
      : list.filter((p) => p.type === activeType);
  }, [activeType]);

  return (
    <section id="projects" className="section-y bg-paper border-b border-line relative overflow-hidden">
      <div className="container-x">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-line">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
              <span>Delivered Engineering Archive</span>
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              Structures that stand the test of time. <em className="italic gradient-text">Built to endure.</em>
            </h2>
          </div>

          {/* CATEGORY FILTER CHIPS */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveType(cat)}
                className={`h-10 rounded-full px-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                  activeType === cat
                    ? 'border-ink bg-ink text-white shadow-md'
                    : 'border-line bg-paper hover:border-blue/50 text-ink-2'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-COLUMN ARCHITECTURAL PORTFOLIO GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {completed.map((proj, idx) => (
            <div
              key={proj.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-2/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue/40 hover:bg-white hover:shadow-xl hover:shadow-blue/5"
            >
              {/* IMAGE HOLDER */}
              <div className="relative h-64 w-full overflow-hidden bg-ink">
                {proj.image_url ? (
                  <img
                    src={proj.image_url}
                    alt={`${proj.title} in ${proj.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-paper-2 flex items-center justify-center text-muted-ink text-sm">
                    No image available
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />

                {/* TYPE BADGE & INDEX */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/30">
                    {proj.type}
                  </span>
                  <span className="font-mono text-xs font-bold text-white/60">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* BOTTOM TITLE ON IMAGE */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white leading-tight drop-shadow">
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5 text-xs text-muted-ink">
                  <div className="flex items-center gap-2 text-ink-2 font-medium">
                    <MapPin className="h-4 w-4 text-blue shrink-0" />
                    <span>Location: {proj.location}</span>
                  </div>
                  {proj.area && (
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-blue shrink-0" />
                      <span>Built-Up Scope: {proj.area}</span>
                    </div>
                  )}
                  {proj.year && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue shrink-0" />
                      <span>Handover Year: {proj.year}</span>
                    </div>
                  )}
                </div>

                {/* ACTION ROW */}
                <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue">
                    Commissioned & Verified
                  </span>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:bg-blue group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
