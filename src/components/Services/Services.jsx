import React, { useState } from 'react';
import { servicesData } from '../../data/services';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="services-section"
      className="arch-section"
      style={{
        backgroundColor: '#0B0B0C',
      }}
    >
      <div className="arch-container">
        {/* SECTION HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '80px' }}>
          <div>
            <div className="arch-eyebrow" style={{ marginBottom: '16px' }}>
              CAPABILITIES & SECTORS
            </div>
            <h2 className="arch-section-title">
              COMPREHENSIVE <br />
              <span className="accent">CONSTRUCTION SERVICES.</span>
            </h2>
          </div>

          <p className="arch-body" style={{ maxWidth: '440px', margin: 0 }}>
            From deep substructure civil piling to turn-key occupancy handover, our 8 specialized engineering divisions execute high-precision projects with single-point accountability.
          </p>
        </div>

        {/* EDITORIAL ACCORDION / SERVICE PANELS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border-subtle)' }}>
          {servicesData.map((s, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                style={{
                  backgroundColor: isActive ? 'var(--bg-surface)' : 'var(--bg-primary)',
                  padding: '36px 40px',
                  cursor: 'pointer',
                  transition: 'background-color 0.4s ease',
                  borderLeft: isActive ? '3px solid var(--accent-bronze)' : '3px solid transparent',
                }}
              >
                {/* SUMMARY ROW */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: isActive ? 'var(--accent-bronze)' : 'var(--text-muted)' }}>
                      {s.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                        fontWeight: 700,
                        color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                        letterSpacing: '0.01em',
                        margin: 0,
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <span className="desktop-only" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
                      {s.tagline}
                    </span>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isActive ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.4s ease, border-color 0.4s ease',
                        borderColor: isActive ? 'var(--accent-bronze)' : 'var(--border-subtle)',
                      }}
                    >
                      <ArrowUpRight size={16} color={isActive ? 'var(--accent-bronze)' : 'var(--text-secondary)'} />
                    </div>
                  </div>
                </div>

                {/* EXPANDED EDITORIAL DETAIL (When Active) */}
                {isActive && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(12, 1fr)',
                      gap: '40px',
                      marginTop: '36px',
                      paddingTop: '30px',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {/* LEFT TEXT & DELIVERABLES */}
                    <div style={{ gridColumn: '1 / span 7' }}>
                      <p className="arch-body" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
                        {s.description}
                      </p>

                      <div style={{ marginBottom: '28px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent-bronze)', textTransform: 'uppercase' }}>
                          CORE DELIVERABLES
                        </span>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '14px' }}>
                          {s.deliverables.map((d, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <Check size={14} color="var(--accent-bronze)" />
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                {d}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                        <span className="tech-tag">TYPICAL TIMELINE: {s.leadTime}</span>
                        <a
                          href="#contact-cta"
                          className="btn-arch"
                          style={{ padding: '10px 20px', fontSize: '10px' }}
                        >
                          <span>INQUIRE ABOUT THIS SERVICE</span>
                        </a>
                      </div>
                    </div>

                    {/* RIGHT HIGH-RES ARCHITECTURAL IMAGE */}
                    <div
                      style={{
                        gridColumn: '8 / span 5',
                        position: 'relative',
                        height: '280px',
                        overflow: 'hidden',
                        borderRadius: '2px',
                      }}
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.85) contrast(1.1)',
                          transition: 'transform 0.6s ease',
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services-section div[style*="grid-template-columns: repeat(12, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          #services-section div[style*="grid-column: 1 / span 7"],
          #services-section div[style*="grid-column: 8 / span 5"] {
            grid-column: 1 / -1 !important;
          }
          #services-section div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
