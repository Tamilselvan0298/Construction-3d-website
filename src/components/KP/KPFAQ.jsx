import React, { useState } from 'react';
import { Plus, HelpCircle, PhoneCall } from 'lucide-react';

export default function KPFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is APEX CONSTRUCTIONS’ typical project scale and geographic scope?',
      a: 'We engineer and execute industrial manufacturing plants, commercial hospitals, PEB warehouses, and multi-story residential projects ranging from 10,000 sqft to 10+ acre campuses across South India (Trichy, Chennai, Madurai, Coimbatore, Tirunelveli, and adjacent regions).',
    },
    {
      q: 'How does APEX ensure zero project delays on the critical path?',
      a: 'We implement formal Critical Path Method (CPM) scheduling. Material procurement (TMT steel, cement, precast components) is sequenced 60 days ahead of schedule, with resident civil engineers tracking milestones through weekly owner photogrammetry reports.',
    },
    {
      q: 'What quality testing protocols are conducted on live concrete and steel?',
      a: 'We perform 100% batch-certified testing. For concrete: slump tests on every ready-mix truck, followed by 7-day and 28-day compression cube crush tests in NABL-accredited laboratories. For steel: chemical analysis and tensile yield mill test certificates for every consignment.',
    },
    {
      q: 'Can APEX deliver turnkey EPC contracts from design to occupancy?',
      a: 'Yes. Our turnkey EPC track covers architectural planning, 3D structural analysis, MEP detailing, statutory municipal approvals (DTCP, CMDA, Fire, Pollution), construction execution, and full commissioning under a single point of responsibility.',
    },
    {
      q: 'What structural warranty and defect liability coverage do you provide?',
      a: 'All completed structures come with formal warranty terms including up to a 30-year structural integrity guarantee and a comprehensive 12-month defect-liability period during which resident teams attend to any punch-list items free of charge.',
    },
  ];

  return (
    <section id="faq" className="section-y bg-paper border-b border-line relative overflow-hidden">
      <div className="container-x grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16 items-start">
        {/* LEFT INTRO */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
            <span>Engineering Clarifications</span>
          </div>
          <h2 className="mt-4 font-display text-display-2 leading-[1.05] tracking-[-0.035em] text-ink">
            Frequently asked <em className="italic gradient-text">technical questions.</em>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-ink">
            Have specific structural, soil, or tendering queries? Our principal engineers respond within one business day.
          </p>

          <a
            href="tel:+918610836498"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-white shadow-sm"
          >
            <PhoneCall className="h-4 w-4 text-blue" />
            <span>Speak with a Resident Engineer</span>
          </a>
        </div>

        {/* RIGHT ACCORDION LIST */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-blue/40 bg-paper-2/60 shadow-sm'
                    : 'border-line bg-white hover:border-line-strong'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left cursor-pointer border-none bg-transparent"
                >
                  <span className="font-display text-lg md:text-xl font-bold tracking-tight text-ink leading-snug">
                    {item.q}
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-45 border-blue bg-blue text-white'
                        : 'border-line text-ink bg-paper'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-line/60">
                    <p className="text-[14.5px] leading-relaxed text-muted-ink">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
