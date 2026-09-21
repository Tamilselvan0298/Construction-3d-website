import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brandDetails } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const quoteRef = useRef(null);
  const lineRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isReduced) return;

      // Scrubbed editorial typography transition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: 1.2,
        }
      });

      tl.from(headlineRef.current, {
        y: 80,
        opacity: 0.15,
        letterSpacing: '-0.04em',
        ease: 'power2.out',
      });

      tl.to(lineRef.current, {
        scaleY: 1,
        duration: 0.8,
        ease: 'power1.inOut',
      }, '<0.2');

      tl.from(quoteRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.3');

      tl.from(subtextRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.2');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story-section"
      className="section-wrapper"
      style={{
        backgroundColor: '#0B0908',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* AMBIENT SOFT WARM LIGHT */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(300px, 50vw, 800px)',
          height: 'clamp(300px, 50vw, 800px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 149, 61, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      {/* TOP EYEBROW */}
      <div
        className="eyebrow-label"
        style={{
          marginBottom: '40px',
          justifyContent: 'center',
        }}
      >
        THE STORY & PHILOSOPHY
      </div>

      {/* LARGE CENTERED EDITORIAL OVERLAPPING TYPOGRAPHY */}
      <div
        ref={headlineRef}
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.5rem, 8.5vw, 8rem)',
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
          }}
        >
          <span style={{ display: 'block', opacity: 0.9 }}>EVERY DROP</span>
          <span
            style={{
              display: 'block',
              fontStyle: 'italic',
              color: 'var(--accent-gold-bright)',
              transform: 'translateY(-0.15em)',
              fontWeight: 300,
            }}
          >
            TELLS
          </span>
          <span
            style={{
              display: 'block',
              transform: 'translateY(-0.28em)',
              opacity: 0.95,
            }}
          >
            A STORY
          </span>
        </h2>
      </div>

      {/* THIN GOLD CONNECTING THREAD */}
      <div
        ref={lineRef}
        style={{
          width: '1px',
          height: '80px',
          background: 'linear-gradient(180deg, var(--accent-gold) 0%, transparent 100%)',
          margin: '20px auto 40px auto',
          transformOrigin: 'top',
        }}
      />

      {/* SECONDARY EDITORIAL QUOTE */}
      <div
        ref={quoteRef}
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <p
          className="editorial-quote"
          style={{
            fontStyle: 'italic',
            marginBottom: '28px',
          }}
        >
          “{brandDetails.quote}”
        </p>

        <p
          ref={subtextRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.85rem, 1vw, 1.05rem)',
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            margin: '0 auto',
            letterSpacing: '0.03em',
          }}
        >
          {brandDetails.philosophy}
        </p>
      </div>

      {/* METADATA ACCENT */}
      <div
        style={{
          marginTop: '60px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
          {brandDetails.foundingYear}
        </span>
        <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--border-gold-subtle)' }} />
        <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          GRASSE ATELIER RESERVES
        </span>
      </div>
    </section>
  );
}
