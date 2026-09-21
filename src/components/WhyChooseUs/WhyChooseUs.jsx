import React from 'react';
import { trustHighlights } from '../../data/metrics';
import { Shield, Clock, Ruler, Eye, HardHat, FileCheck2 } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Clock size={20} color="var(--accent-bronze)" />,
      num: "01",
      title: "100% On-Time Track Record",
      desc: "Critical Path Method (CPM) scheduling and weekly digital milestone audits ensure zero project handover delays."
    },
    {
      icon: <HardHat size={20} color="var(--accent-bronze)" />,
      num: "02",
      title: "Zero Lost-Time Injury (LTI)",
      desc: "Full OSHA and NBC safety compliance with dedicated site safety marshals and mandatory PPE gear enforcement."
    },
    {
      icon: <Ruler size={20} color="var(--accent-bronze)" />,
      num: "03",
      title: "Batch-Tested Traceability",
      desc: "Every metric ton of steel and RMC concrete batch is backed by 7-day and 28-day NABL certified lab compression reports."
    },
    {
      icon: <Eye size={20} color="var(--accent-bronze)" />,
      num: "04",
      title: "Transparent Fixed-Cost BOQ",
      desc: "Granular, itemized Bills of Quantities with no concealed clauses or unexpected mid-construction escalations."
    },
    {
      icon: <FileCheck2 size={20} color="var(--accent-bronze)" />,
      num: "05",
      title: "LOD 400 BIM Clash Detection",
      desc: "Resolving 100% of structural and MEP pipework clashes digitally before ground-truth concrete casting begins."
    },
    {
      icon: <Shield size={20} color="var(--accent-bronze)" />,
      num: "06",
      title: "10-Year Structural Guarantee",
      desc: "Legally backed warranty covering the foundation, load-bearing RCC frame, and primary envelope waterproofing."
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="arch-section blueprint-grid"
      style={{
        backgroundColor: '#0E0E10',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="arch-container">
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 80px auto' }}>
          <div className="arch-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            ENGINEERING PRINCIPLES
          </div>
          <h2 className="arch-section-title">
            DISCIPLINED EXECUTION. <br />
            <span className="accent">MEASURABLE PRECISION.</span>
          </h2>
          <p className="arch-body" style={{ marginTop: '16px' }}>
            In high-end construction, promises mean nothing without physical compliance data. Here is how our engineering protocols protect your capital investment.
          </p>
        </div>

        {/* 6 ENGINEERING PILLARS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }}
          className="pillars-grid"
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '40px 32px',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-bronze)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(184, 138, 68, 0.08)',
                    border: '1px solid var(--border-bronze)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {p.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
                  {p.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}
              >
                {p.title}
              </h3>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 990px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
