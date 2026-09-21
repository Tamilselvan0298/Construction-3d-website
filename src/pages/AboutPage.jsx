import React from 'react';
import { Shield, Award, Users, CheckCircle2, ArrowUpRight, Clock, Building2, MapPin } from 'lucide-react';
import { useRouter } from '../router/Router';

export default function AboutPage({ onOpenConsultation }) {
  const { navigate } = useRouter();

  const milestones = [
    {
      year: '2021',
      title: 'Founded in Trichy',
      desc: 'Three engineers, one workshop, and a single industrial brief that set our foundational standard for discipline.',
    },
    {
      year: '2022',
      title: 'First Specialty Floor',
      desc: 'Delivered high-tolerance industrial flooring for Suriyan Mark — flawlessly maintained to this day.',
    },
    {
      year: '2023',
      title: 'Two Industrial Campuses',
      desc: 'Executed Thuvakudi and Gangaikontan plants — five acres of disciplined structural steel and heavy engineering.',
    },
    {
      year: '2024',
      title: 'Healthcare Division',
      desc: 'Expanded into specialized institutional infrastructure with our first multi-specialty hospital build in Trichy.',
    },
    {
      year: '2025+',
      title: '20+ Deliveries & 1.7M+ Sq.Ft.',
      desc: 'Crossed 1.7M sq.ft. of built spaces across South India with a 98% repeat-client engagement rate.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Measured, Safe, Signed',
      desc: 'Build structures that outlast their builders. Every weld and pour undergoes three-stage quality verification.',
    },
    {
      icon: Award,
      title: 'Engineering Rigor',
      desc: 'Site teams led by licensed structural engineers with decades of field tenure, not outsourced contractors.',
    },
    {
      icon: Users,
      title: 'Client Satisfaction',
      desc: 'Critical-path scheduling and transparent weekly reporting keep clients in control with zero surprises.',
    },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* 1. HERO HEADER */}
      <section className="container-x py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
            / About APEX CONSTRUCTIONS
          </div>
          <h1 className="mt-5 font-display text-display-1 leading-[1] tracking-[-0.04em] text-ink">
            Engineering with discipline, safety <em className="italic gradient-text">and pride.</em>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-2 max-w-2xl">
            Established in June 2021, APEX CONSTRUCTIONS delivers engineering-grade residential, commercial, industrial, and infrastructure developments across South India.
          </p>
        </div>

        {/* STATS METRIC GRID */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <div className="rounded-[20px] border border-line bg-paper p-6 shadow-sm">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-ink">Established</div>
            <div className="mt-2 font-display text-3xl font-medium text-ink">June 2021</div>
            <div className="mt-1 text-[13px] text-muted-ink">4+ years of precision</div>
          </div>
          <div className="rounded-[20px] border border-line bg-paper p-6 shadow-sm">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-ink">Headquarters</div>
            <div className="mt-2 font-display text-3xl font-medium text-ink">Trichy</div>
            <div className="mt-1 text-[13px] text-muted-ink">Tamil Nadu, India</div>
          </div>
          <div className="rounded-[20px] border border-line bg-paper p-6 shadow-sm">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-ink">Delivered Space</div>
            <div className="mt-2 font-display text-3xl font-medium text-blue">1.7M+ sqft</div>
            <div className="mt-1 text-[13px] text-muted-ink">Industrial & commercial</div>
          </div>
          <div className="rounded-[20px] border border-line bg-paper p-6 shadow-sm">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-ink">Client Retention</div>
            <div className="mt-2 font-display text-3xl font-medium text-green">98%</div>
            <div className="mt-1 text-[13px] text-muted-ink">Repeat client engagements</div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER PROFILE & EDITORIAL */}
      <section className="section-y bg-paper-2/60 border-y border-line">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-center">
            {/* PORTRAIT */}
            <div className="relative overflow-hidden rounded-[28px] shadow-sm lg:rounded-[36px]">
              <img
                src="/profile.webp"
                alt="Arun Prakash, Founder & Managing Director"
                className="h-[420px] w-full object-cover object-top lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[13px] uppercase tracking-[0.18em] text-white/80">Managing Director</div>
                <div className="font-display text-2xl font-medium">Arun Prakash</div>
              </div>
            </div>

            {/* NARRATIVE */}
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
                / Founder's Perspective
              </div>
              <h2 className="mt-5 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
                “We measure twice, pour once, and <em className="italic gradient-text">sign every page.</em>”
              </h2>

              <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-ink-2">
                <p>
                  APEX CONSTRUCTIONS was founded on a simple commitment: that true engineering value is proved on the construction site, not in marketing brochures. Every site we operate is directly managed by licensed civil and structural engineers.
                </p>
                <p>
                  Our teams don't run subcontracted, unsupervised job sites. From foundation soil compaction to structural steel erection, three-stage quality control is documented and verified at each milestone. That site discipline is the reason our clients trust us with their largest capital projects.
                </p>
                <p>
                  Whether it is a 5-acre industrial plant or a multi-specialty healthcare facility, our standards never waver: IS-code compliance, zero-compromise safety, and uncompromising delivery schedules.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-line flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-medium text-ink">Arun Prakash</div>
                  <div className="text-sm text-muted-ink">Founder & Managing Director</div>
                </div>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-ink-2 cursor-pointer border-none"
                >
                  Consult Directly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHRONOLOGICAL MILESTONES */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-ink font-semibold">
              / Our Journey
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              Building standard upon <em className="italic gradient-text">standard.</em>
            </h2>
          </div>

          <div className="mt-14 space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-[24px] border border-line bg-paper p-7 md:p-9 transition-all hover:border-blue/30 hover:shadow-sm"
              >
                <div className="flex items-center gap-6 md:w-1/3">
                  <span className="font-mono text-xl md:text-2xl font-bold text-blue">
                    {m.year}
                  </span>
                  <div className="h-8 w-px bg-line" />
                  <h3 className="font-display text-xl font-medium text-ink">
                    {m.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-[1.65] text-muted-ink md:w-1/2">
                  {m.desc}
                </p>
                <span className="text-xs uppercase tracking-wider text-muted-ink font-mono">
                  Phase 0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="section-y bg-paper-2/60 border-t border-line">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-ink font-semibold">
              / Core Principles
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              What guides every <em className="italic gradient-text">pour and weld.</em>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-[28px] border border-line bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/10 text-blue ring-1 ring-blue/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-muted-ink">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ARRANGE A SITE VISIT CTA */}
      <section className="container-x section-y">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-white md:px-16 md:py-18">
          <div className="absolute inset-0 blueprint-bg opacity-[0.07] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              / Transparent Operations
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1] tracking-[-0.035em]">
              Want to see our site discipline firsthand?
            </h2>
            <p className="mt-4 text-[16px] text-white/75 leading-relaxed">
              We arrange guided walkthroughs on active construction sites for prospective project owners. Experience our QA/QC protocols, EHS adherence, and engineering standards in person.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-white pl-7 pr-2 text-[15px] font-medium text-ink transition-colors hover:bg-paper-2 cursor-pointer border-none"
              >
                <span>Arrange a Site Walkthrough</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex h-14 items-center rounded-full border border-white/30 px-8 text-[15px] font-medium text-white transition-colors hover:border-white cursor-pointer bg-transparent"
              >
                Contact Site Office
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
