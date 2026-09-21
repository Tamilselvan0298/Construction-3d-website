import React from 'react';
import { processSteps } from '../../data/process';
import { ChevronRight } from 'lucide-react';

export default function ConstructionProcess() {
  return (
    <section
      id="process-section"
      className="arch-section"
      style={{
        backgroundColor: '#0B0B0C',
      }}
    >
      <div className="arch-container">
        {/* HEADER */}
        <div style={{ marginBottom: '80px' }}>
          <div className="arch-eyebrow" style={{ marginBottom: '16px' }}>
            WORKFLOW PROTOCOL
          </div>
          <h2 className="arch-section-title">
            THE 8-STAGE <br />
            <span className="accent">CONSTRUCTION ROADMAP.</span>
          </h2>
          <p className="arch-body" style={{ maxWidth: '520px', marginTop: '16px' }}>
            A sequential, de-risked methodology ensuring structural precision, material validation, and total transparency from raw plot to final occupancy.
          </p>
        </div>

        {/* 8-STAGE TIMELINE GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="process-grid"
        >
          {processSteps.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '32px 26px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-bronze)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-bronze)' }}>
                    PHASE {p.step}
                  </span>
                  <div style={{ width: '8px', height: '8px', border: '1px solid var(--border-bronze)' }} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '0.02em',
                    lineHeight: 1.25,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.phase}
                </h3>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#7AA2F7', marginBottom: '14px' }}>
                  {p.tagline}
                </div>

                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {p.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                OUTPUT: {p.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
