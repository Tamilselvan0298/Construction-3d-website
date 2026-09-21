import React, { useState } from 'react';
import {
  ShieldCheck,
  HardHat,
  Clock,
  Factory,
  Cpu,
  Lock,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Building,
  Home,
  Layers,
  Fuel,
  KeyRound,
} from 'lucide-react';
import { useRouter } from '../router/Router';

export default function StrengthsServicesPage({ onOpenConsultation }) {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState('all');

  const strengths = [
    {
      num: '01',
      icon: ShieldCheck,
      title: 'Quality Assurance',
      summary: 'Three-stage QC on every pour, weld and finish — documented and signed.',
      details: 'We implement rigorous on-site batch testing, slump testing, cube compression reports, and non-destructive ultrasonic testing for structural steel welds.',
    },
    {
      num: '02',
      icon: HardHat,
      title: 'Experienced Engineers',
      summary: 'Site teams led by civil and structural engineers with decades of field tenure.',
      details: 'Every project has a dedicated resident engineer and chartered structural consultant directly supervising formwork, rebar tying, and concrete curing.',
    },
    {
      num: '03',
      icon: Clock,
      title: 'On-Time Delivery',
      summary: 'Critical-path scheduling and weekly client reporting keep every milestone visible.',
      details: 'Using Primavera and MS Project CPM models, weather delays and supply lead times are mitigated ahead of time to guarantee scheduled handover dates.',
    },
    {
      num: '04',
      icon: Factory,
      title: 'Industrial Expertise',
      summary: 'From 5-acre plants to specialty industrial flooring — heavy industry is in our DNA.',
      details: 'Experienced in laser-screed FM2 high-tolerance flooring, heavy gantry crane foundations, vibratory equipment pads, and chemical-resistant coatings.',
    },
    {
      num: '05',
      icon: Cpu,
      title: 'Latest Technology',
      summary: 'BIM coordination, drone surveys and digital handovers as standard, not extras.',
      details: 'Clash detection across MEP and structural models before site work begins saves weeks in costly re-work and avoids site disputes.',
    },
    {
      num: '06',
      icon: Lock,
      title: 'Safety First',
      summary: 'Zero-harm culture with on-site EHS officers and IS 45001-aligned protocols.',
      details: 'Daily toolbox talks, certified PPE enforcement, scaffolding safety tagging, and mandatory safety inductions ensure zero reportable lost-time incidents.',
    },
    {
      num: '07',
      icon: Sparkles,
      title: 'Client Satisfaction',
      summary: '98% of clients return for their next build. Relationships are our real foundation.',
      details: 'Transparent progress billing, no hidden variation costs, and dedicated 12-month defect-liability support create lifetime partnerships.',
    },
  ];

  const disciplines = [
    {
      id: 'industrial',
      icon: Factory,
      title: 'Industrial Construction',
      tag: 'Heavy Engineering',
      image: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1784034843651-f8jo5panfa.jpg',
      desc: 'Heavy industrial facilities engineered for process flow, machine loads, and strict statutory compliance.',
      features: [
        'High-tolerance laser-screed FM2/FM3 industrial flooring',
        'Overhead crane gantry girders up to 30-ton capacity',
        'Pollution control and statutory industrial licensing compliance',
        'Transformer yards, DG plinths, and effluent treatment sumps',
      ],
    },
    {
      id: 'commercial',
      icon: Building,
      title: 'Commercial Construction',
      tag: 'Corporate & Institutional',
      image: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1783929479130-sbgent0o9dh.webp',
      desc: 'Architectural corporate headquarters, healthcare facilities, and retail complexes with high aesthetic appeal.',
      features: [
        'Post-tensioned slabs for large column-free spaces',
        'High-performance glazed facade engineering',
        'Centralized HVAC, fire suppression, and building automation',
        'Multi-level basement parking and traffic management design',
      ],
    },
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Construction',
      tag: 'Apartments & Villas',
      image: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1783929416141-qdzzuab0sxd.webp',
      desc: 'Bespoke residences and modern multi-storey apartments executed with premium finishes.',
      features: [
        'Earthquake-resistant RCC framed structures (IS 1893)',
        'Waterproofing warranty on terrace and wet areas',
        'Premium acoustic and thermal insulation',
        'Modern smart-home electrical provisioning and solar conduit runs',
      ],
    },
    {
      id: 'steel',
      icon: Layers,
      title: 'Steel Structure Works',
      tag: 'PEB & Fabrication',
      image: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1784032973907-hdbsxg7kf3u.jpeg',
      desc: 'Rapid-assembly pre-engineered buildings and heavy structural steel framing with high corrosion resistance.',
      features: [
        'High-tensile steel grade 345/355 MPa fabrication',
        'Zero-leakage standing seam roof systems',
        'Anchor bolt precision alignment and grouting',
        'Blast-cleaned and multi-coat epoxy primer treatment',
      ],
    },
    {
      id: 'infrastructure',
      icon: Fuel,
      title: 'Infrastructure Projects',
      tag: 'Utilities & Civil',
      image: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1784033346193-189vquvawfb.jpg',
      desc: 'Critical utility infrastructure including fuel dispensing stations, concrete roads, and stormwater drainage networks.',
      features: [
        'PESO-compliant petroleum retail dispensing stations',
        'Rigid pavement PQC concrete road construction',
        'Heavy stormwater culverts and retaining structures',
        'Underground tank anchoring and leak containment systems',
      ],
    },
    {
      id: 'turnkey',
      icon: KeyRound,
      title: 'Turnkey Construction',
      tag: 'Concept to Handover',
      image: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1783967899071-wgvx3018v1g.jpg',
      desc: 'End-to-end delivery from architectural design, approvals, and structural engineering to finished interior fit-outs.',
      features: [
        'Single-point contractual and financial accountability',
        'All government liaison and statutory clearances managed',
        'Comprehensive MEP, HVAC, and fire fighting integration',
        'Digital twin handover with detailed as-built documentation',
      ],
    },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* 1. HERO HEADER */}
      <section className="container-x py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
            / Strengths & Services
          </div>
          <h1 className="mt-5 font-display text-display-1 leading-[1] tracking-[-0.04em] text-ink">
            Six disciplines. One standard of <em className="italic gradient-text">engineering.</em>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-2 max-w-2xl">
            From 5-acre manufacturing plants to multi-specialty healthcare facilities, we execute complex civil engineering works with uncompromising quality and site safety.
          </p>
        </div>
      </section>

      {/* 2. SEVEN CORE STRENGTHS */}
      <section className="section-y bg-paper-2/60 border-y border-line">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-ink font-semibold">
              / Proven Strengths
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              Seven reasons project owners <em className="italic gradient-text">trust APEX CONSTRUCTIONS.</em>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="rounded-[24px] border border-line bg-paper p-8 shadow-sm transition-all hover:border-blue/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-blue">
                      {item.num}
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue/10 text-blue ring-1 ring-blue/20">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] font-medium leading-snug text-ink-2">
                    {item.summary}
                  </p>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-muted-ink border-t border-line/60 pt-4">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SIX DISCIPLINES DEEP-DIVE */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-ink font-semibold">
              / Engineering Disciplines
            </div>
            <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
              Comprehensive capabilities, <em className="italic gradient-text">flawless execution.</em>
            </h2>
          </div>

          <div className="mt-16 space-y-16">
            {disciplines.map((disc, idx) => {
              const Icon = disc.icon;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={disc.id}
                  id={disc.id}
                  className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                    isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* IMAGE */}
                  <div
                    className={`relative overflow-hidden rounded-[28px] border border-line bg-ink shadow-sm h-[380px] md:h-[440px] ${
                      isEven ? 'lg:col-start-2' : ''
                    }`}
                  >
                    <img
                      src={disc.image}
                      alt={disc.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-mono font-medium text-white backdrop-blur">
                        {disc.tag}
                      </span>
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className={isEven ? 'lg:col-start-1' : ''}>
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue/10 text-blue ring-1 ring-blue/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-ink">
                        Discipline 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-3xl font-medium text-ink md:text-4xl">
                      {disc.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
                      {disc.desc}
                    </p>

                    <div className="mt-8 space-y-3">
                      {disc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-[14.5px] text-ink-2">
                          <CheckCircle2 className="h-5 w-5 text-green shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10">
                      <button
                        type="button"
                        onClick={onOpenConsultation}
                        className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-white transition-colors hover:bg-ink-2 cursor-pointer border-none"
                      >
                        <span>Request Scope & Quote</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="container-x section-y">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-white md:px-16 md:py-18">
          <div className="absolute inset-0 blueprint-bg opacity-[0.07] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-display-2 leading-[1] tracking-[-0.035em]">
                Have a specialized engineering requirement?
              </h2>
              <p className="mt-3 text-[16px] text-white/75 leading-relaxed">
                Our senior structural consultants review architectural layouts, soil reports, and bill of quantities within one business day.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-white pl-7 pr-2 text-[15px] font-medium text-ink transition-colors hover:bg-paper-2 cursor-pointer border-none shrink-0"
            >
              <span>Get Free Consultation</span>
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
