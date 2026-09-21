import React, { useState, useEffect } from 'react';

export default function TechnicalLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fast, responsive 0 to 100% progression over ~1.2s
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }
        const jump = Math.floor(Math.random() * 14) + 6;
        return Math.min(100, prev + jump);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0B0B0C',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '420px', width: '90%' }}>
        {/* MONOGRAM */}
        <div
          style={{
            width: '46px',
            height: '46px',
            border: '2px solid var(--accent-bronze)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            fontWeight: 800,
            color: 'var(--accent-bronze)',
            margin: '0 auto 20px auto',
            backgroundColor: 'rgba(184, 138, 68, 0.1)',
          }}
        >
          K
        </div>

        {/* LOGO */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: 800,
            letterSpacing: '0.15em',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            marginBottom: '6px',
          }}
        >
          KINETIX STRUCTURAL
        </div>

        {/* SUBTITLE */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'var(--accent-bronze)',
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}
        >
          ARCHITECTURE · ENGINEERING · CONSTRUCTION
        </div>

        {/* PROGRESS BAR */}
        <div
          style={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '14px',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: 'var(--accent-bronze)',
              transition: 'width 0.08s linear',
            }}
          />
        </div>

        {/* BOTTOM METRIC */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>
          <span>CALIBRATING 4D BIM WEBGL</span>
          <span style={{ color: 'var(--accent-bronze)', fontWeight: 600 }}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
