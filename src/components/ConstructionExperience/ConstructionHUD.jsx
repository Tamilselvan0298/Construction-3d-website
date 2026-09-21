import React from 'react';
import { constructionStages } from '../../data/constructionStages';
import { Activity, Layers, Compass } from 'lucide-react';

export default function ConstructionHUD({ progress = 0 }) {
  // Find the active stage from the progress value
  const currentStage = constructionStages.find(
    (s) => progress >= s.range[0] && progress <= s.range[1]
  ) || constructionStages[constructionStages.length - 1];

  const percentage = Math.min(100, Math.round(progress * 100));

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '6vw',
        zIndex: 50,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {/* MINIMAL BIM TECHNICAL HUD CONTAINER */}
      <div
        style={{
          background: 'rgba(11, 11, 12, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-bronze)',
          padding: '16px 22px',
          borderRadius: '2px',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
          minWidth: '280px',
          maxWidth: '380px',
        }}
      >
        {/* TOP ROW: PROJECT CODE & LIVE PULSE */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: percentage === 100 ? '#10B981' : 'var(--accent-bronze)',
                boxShadow: '0 0 10px var(--accent-bronze)',
                animation: 'pulse 2s infinite ease-in-out',
              }}
            />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-secondary)' }}>
              BIM 4D SIMULATION
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--text-bronze)',
            }}
          >
            {percentage}%
          </span>
        </div>

        {/* CURRENT ACTIVE PHASE */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.18em', color: 'var(--text-muted)' }}>
            CURRENT PHASE [{currentStage.number} / 09]
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
              marginTop: '3px',
              textTransform: 'uppercase',
            }}
          >
            {currentStage.phase}
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '1px',
            overflow: 'hidden',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              width: `${percentage}%`,
              height: '100%',
              backgroundColor: 'var(--accent-bronze)',
              transition: 'width 0.1s linear',
            }}
          />
        </div>

        {/* BOTTOM METRICS: ELEVATION & DISCIPLINE */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '10px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7AA2F7' }}>
            <Layers size={11} />
            <span>{currentStage.elevation}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
            <Compass size={11} />
            <span>{currentStage.discipline}</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.9); }
        }
      `}</style>
    </div>
  );
}
