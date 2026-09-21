import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BuildingScene from '../../three/BuildingScene';
import ConstructionHUD from './ConstructionHUD';
import TechnicalLabels from './TechnicalLabels';
import { ArrowDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { attachMagnetic } from '../../animations/magnetic';

gsap.registerPlugin(ScrollTrigger);

export default function ConstructionHero() {
  const containerRef = useRef(null);
  const pinnedStageRef = useRef(null);
  const heroTextRef = useRef(null);
  const completionRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const startBtnRef = useRef(null);

  // Scroll progress state (0.00 to 1.00)
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If reduced motion is preferred, show complete building directly
    if (isReduced) {
      setScrollProgress(1.0);
      return;
    }

    const ctx = gsap.context(() => {
      // Pinned GSAP ScrollTrigger timeline across 800vh
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinnedStageRef.current,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Direct scrubbed progress (0.0 to 1.0)
          setScrollProgress(self.progress);
        },
      });

      // Initial hero entrance reveal
      gsap.from(heroTextRef.current.querySelectorAll('.hero-anim-item'), {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });

    }, containerRef);

    const cleanupCta = attachMagnetic(ctaBtnRef.current, 0.25);
    const cleanupStart = attachMagnetic(startBtnRef.current, 0.25);

    return () => {
      ctx.revert();
      cleanupCta();
      cleanupStart();
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Compute opacity of initial hero headline (fades out between 0% and 10% scroll)
  const heroOpacity = Math.max(0, 1 - scrollProgress / 0.08);

  // Compute opacity of completion message (fades in between 92% and 100% scroll)
  const completionOpacity = Math.max(0, (scrollProgress - 0.90) / 0.10);

  return (
    <section
      ref={containerRef}
      id="construction-experience"
      style={{
        position: 'relative',
        width: '100%',
        height: '800vh', // Long pinned scroll track for the 9 architectural stages
        backgroundColor: '#0B0B0C',
      }}
    >
      {/* 100VH PINNED STAGE */}
      <div
        ref={pinnedStageRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '650px',
          overflow: 'hidden',
        }}
      >
        {/* REAL 3D THREE.JS WEBGL CONSTRUCTION SCENE */}
        <BuildingScene progress={scrollProgress} />

        {/* ==============================================================
            INITIAL HERO TYPOGRAPHY OVERLAY (Active at scroll: 0)
            ============================================================== */}
        <div
          ref={heroTextRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 30,
            padding: '0 6vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pointerEvents: heroOpacity > 0.05 ? 'auto' : 'none',
            opacity: heroOpacity,
            transition: 'opacity 0.2s ease-out',
            maxWidth: '900px',
          }}
        >
          <div className="hero-anim-item arch-eyebrow" style={{ marginBottom: '24px' }}>
            ARCHITECTURAL ENGINEERING & CONSTRUCTION
          </div>

          <h1 className="hero-anim-item arch-hero-title" style={{ marginBottom: '24px' }}>
            <span className="line">
              <span className="line-inner">BUILDING</span>
            </span>
            <span className="line">
              <span className="line-inner" style={{ color: 'var(--accent-bronze)' }}>WHAT</span>
            </span>
            <span className="line">
              <span className="line-inner">LASTS.</span>
            </span>
          </h1>

          <p
            className="hero-anim-item arch-body-lead"
            style={{
              maxWidth: '520px',
              marginBottom: '36px',
              color: 'var(--text-secondary)',
            }}
          >
            Engineering architectural spaces designed to endure. Scroll downward to control the real-time structural construction sequence from soil to finished residence.
          </p>

          <div
            className="hero-anim-item"
            style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <button
              ref={ctaBtnRef}
              onClick={() => scrollToSection('contact-cta')}
              className="btn-arch btn-arch-solid"
            >
              <span>START A PROJECT</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => scrollToSection('projects-section')}
              className="btn-arch"
            >
              <span>EXPLORE OUR WORK</span>
            </button>
          </div>
        </div>

        {/* CONTEXTUAL ARCHITECTURAL LABELS (Left & Right specs) */}
        <TechnicalLabels progress={scrollProgress} />

        {/* FLOATING 4D BIM CONSTRUCTION HUD */}
        <ConstructionHUD progress={scrollProgress} />

        {/* ==============================================================
            STAGE 08 COMPLETION CALLOUT (Reveals at 92% - 100% scroll)
            ============================================================== */}
        <div
          ref={completionRef}
          style={{
            position: 'absolute',
            top: '50%',
            right: '6vw',
            transform: 'translateY(-50%)',
            zIndex: 35,
            maxWidth: '460px',
            background: 'rgba(11, 11, 12, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border-bronze)',
            padding: '36px 40px',
            opacity: completionOpacity,
            pointerEvents: completionOpacity > 0.3 ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10B981', marginBottom: '14px' }}>
            <CheckCircle2 size={18} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              HANDOVER READY · 100% COMPLETED
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '14px',
              textTransform: 'uppercase',
            }}
          >
            BUILT TO <span style={{ color: 'var(--accent-bronze)' }}>LAST.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '28px',
            }}
          >
            From the first survey line on raw earth to the final key handover. Experience precision engineering executed with architectural permanence.
          </p>

          <button
            ref={startBtnRef}
            onClick={() => scrollToSection('contact-cta')}
            className="btn-arch btn-arch-solid"
            style={{ width: '100%' }}
          >
            <span>COMMISSION YOUR PROJECT</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* BOTTOM INITIAL SCROLL PROMPT */}
        {scrollProgress < 0.05 && (
          <div
            style={{
              position: 'absolute',
              bottom: '36px',
              right: '6vw',
              zIndex: 30,
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              pointerEvents: 'none',
            }}
          >
            <span>SCROLL TO COMMENCE 4D CONSTRUCTION</span>
            <ArrowDown size={14} color="var(--accent-bronze)" style={{ animation: 'bounceDown 2s infinite ease-in-out' }} />
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
