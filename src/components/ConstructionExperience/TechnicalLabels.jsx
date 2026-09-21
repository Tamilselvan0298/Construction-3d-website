import React from 'react';
import { constructionStages } from '../../data/constructionStages';

export default function TechnicalLabels({ progress = 0 }) {
  // Show labels once initial hero title begins leaving (progress > 0.05)
  if (progress < 0.05) return null;

  const currentStage = constructionStages.find(
    (s) => progress >= s.range[0] && progress <= s.range[1]
  ) || constructionStages[constructionStages.length - 1];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 40,
        padding: '0 6vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* LEFT ARCHITECTURAL ANNOTATION */}
      <div
        style={{
          maxWidth: '360px',
          background: 'rgba(11, 11, 12, 0.7)',
          backdropFilter: 'blur(12px)',
          borderLeft: '2px solid var(--accent-bronze)',
          padding: '20px 24px',
          transform: 'translateY(-20px)',
          transition: 'opacity 0.4s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-bronze)', letterSpacing: '0.2em' }}>
            SEQUENCE {currentStage.number}
          </span>
          <span style={{ width: '16px', height: '1px', backgroundColor: 'var(--border-subtle)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#7AA2F7', letterSpacing: '0.15em' }}>
            {currentStage.elevation}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
            fontWeight: 700,
            letterSpacing: '0.01em',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '10px',
          }}
        >
          {currentStage.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            lineHeight: 1.5,
            color: 'var(--text-secondary)',
          }}
        >
          “{currentStage.quote}”
        </p>
      </div>

      {/* RIGHT TECHNICAL SPECIFICATION CARD (DESKTOP ONLY) */}
      <div
        className="desktop-only"
        style={{
          maxWidth: '320px',
          background: 'rgba(11, 11, 12, 0.7)',
          backdropFilter: 'blur(12px)',
          borderRight: '2px solid var(--accent-bronze)',
          padding: '20px 24px',
          textAlign: 'right',
          transform: 'translateY(-20px)',
          transition: 'opacity 0.4s ease',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-bronze)', letterSpacing: '0.2em' }}>
          ENGINEERING SPECS
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
          {Object.entries(currentStage.specs).map(([key, val], idx) => (
            <div key={idx}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                {key.replace(/([A-Z])/g, ' $1')}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', fontWeight: 500, marginTop: '2px' }}>
                {val}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
