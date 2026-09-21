import React, { useState } from 'react';
import kpProjectsData from '../data/kpProjects.json';
import { MapPin, ArrowUpRight, CheckCircle, Calendar, Filter } from 'lucide-react';
import { useRouter } from '../router/Router';

export default function CompletedProjectsPage({ onOpenConsultation }) {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');

  const completed = kpProjectsData.filter((p) => p.status === 'completed');
  const categories = ['All', 'Industrial', 'Infrastructure', 'Residential', 'Specialty'];

  const filteredProjects = activeCategory === 'All'
    ? completed
    : completed.filter((p) => p.type === activeCategory);

  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* 1. HERO HEADER */}
      <section className="container-x py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
            <span>/ Projects</span>
            <span>·</span>
            <span>Portfolio</span>
          </div>
          <h1 className="mt-5 font-display text-display-1 leading-[1] tracking-[-0.04em] text-ink">
            Delivered with <em className="italic gradient-text">precision.</em>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-2 max-w-2xl">
            Explore our finished projects across South India — completed on time, within budget, and built to rigorous engineering specifications.
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`h-10 rounded-full px-5 text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'border-ink bg-ink text-white shadow-sm'
                  : 'border border-line bg-paper text-ink hover:border-ink/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. COMPLETED PROJECTS GRID */}
      <section className="section-y bg-paper-2/60 border-t border-line">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-line bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-[300px] w-full overflow-hidden bg-ink">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-white/50">
                      Completed Project
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />

                  {/* TOP BADGES */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow backdrop-blur">
                      {item.type}
                    </span>
                    {item.year && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-ink/80 px-3 py-1 text-xs font-mono text-white backdrop-blur">
                        <Calendar className="h-3 w-3 text-blue" />
                        {item.year}
                      </span>
                    )}
                  </div>

                  {/* LOCATION & SCOPE */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-white/80">
                    <MapPin className="h-3.5 w-3.5 text-blue shrink-0" />
                    <span className="truncate">{item.location}</span>
                    {item.area && (
                      <>
                        <span>•</span>
                        <span className="shrink-0">{item.area}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h2 className="font-display text-2xl font-medium tracking-tight text-ink group-hover:text-blue transition-colors">
                      {item.title}
                    </h2>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-green font-medium">
                      <CheckCircle className="h-4 w-4" />
                      Successfully Handed Over
                    </span>
                    <button
                      type="button"
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1 text-ink hover:text-blue transition-colors font-medium cursor-pointer bg-transparent border-none"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
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
            <div className="max-w-xl">
              <h2 className="font-display text-display-2 leading-[1] tracking-[-0.035em]">
                Ready to begin your next build?
              </h2>
              <p className="mt-3 text-[16px] text-white/75 leading-relaxed">
                Send us your site coordinates and project requirements. A chartered project manager responds with a scoped plan within 24 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-white pl-7 pr-2 text-[15px] font-medium text-ink transition-colors hover:bg-paper-2 cursor-pointer border-none shrink-0"
            >
              <span>Request Consultation</span>
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
