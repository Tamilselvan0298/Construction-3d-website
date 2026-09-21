import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isReduced) return;

      // Slow background parallax
      gsap.to(bgRef.current, {
        y: '25%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

      // Content reveal
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="brand-story"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 6vw',
        backgroundColor: '#080706',
      }}
    >
      {/* SLOW PARALLAX BACKGROUND */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          top: '-25%',
          left: 0,
          width: '100%',
          height: '150%',
          backgroundImage: `url(/images/brand-story-bg.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
          zIndex: 1,
        }}
      />

      {/* DARK LUXURY CINEMATIC OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(8, 7, 6, 0.72) 0%, rgba(8, 7, 6, 0.95) 80%)',
          zIndex: 2,
        }}
      />

      {/* AMBIENT RADIAL LIGHT */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201, 149, 61, 0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* CENTERED EDITORIAL CONTENT */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div className="eyebrow-label" style={{ justifyContent: 'center', marginBottom: '32px' }}>
          L'ATELIER DE CRÉATION
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.2rem, 7.5vw, 6.8rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            marginBottom: '32px',
          }}
        >
          CRAFTED <br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent-gold-bright)' }}>TO BE</span> <br />
          REMEMBERED
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.9rem, 1.1vw, 1.15rem)',
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'var(--text-secondary)',
            maxWidth: '620px',
            margin: '0 auto 40px auto',
            letterSpacing: '0.02em',
          }}
        >
          Born between the centenary flower terraces of Grasse and our private salon at Place Vendôme. Every formula rests in darkened cellar demijohns for six lunar months before being hand-poured into faceted optical crystal.
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
            GRASSE · PARIS
          </span>
          <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--border-gold-subtle)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            N° 001–500 ARCHIVE
          </span>
        </div>
      </div>
    </section>
  );
}
