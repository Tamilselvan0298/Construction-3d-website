import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { attachMagnetic } from '../animations/magnetic';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const containerRef = useRef(null);
  const bottleRef = useRef(null);
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isReduced) return;

      // The product slowly moves upward as the section enters viewport
      gsap.fromTo(
        bottleRef.current,
        { y: 120, opacity: 0.25 },
        {
          y: -40,
          opacity: 0.65,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          }
        }
      );
    }, containerRef);

    const cleanupBtn = attachMagnetic(ctaBtnRef.current, 0.3);

    return () => {
      ctx.revert();
      cleanupBtn();
    };
  }, []);

  const scrollToCollection = () => {
    const el = document.getElementById('collection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="final-cta"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#080706',
        padding: '100px 6vw',
      }}
    >
      {/* AMBIENT WARM GLOW */}
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(350px, 60vw, 750px)',
          height: 'clamp(350px, 60vw, 750px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 149, 61, 0.16) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* RISING PRODUCT SILHOUETTE BEHIND TYPOGRAPHY */}
      <div
        ref={bottleRef}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(280px, 35vw, 540px)',
          pointerEvents: 'none',
          zIndex: 2,
          willChange: 'transform, opacity',
        }}
      >
        <img
          src="/images/product-bottle.webp"
          alt="Aura Perfume Silhouette"
          style={{
            width: '100%',
            height: 'auto',
            filter: 'drop-shadow(0 -20px 50px rgba(201, 149, 61, 0.25)) brightness(0.85)',
          }}
        />
      </div>

      {/* FOREGROUND EDITORIAL CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div className="eyebrow-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>
          THE PRIVILEGE OF SCENT
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.4rem, 8vw, 7.8rem)',
            fontWeight: 300,
            lineHeight: 0.96,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            marginBottom: '32px',
          }}
        >
          DISCOVER <br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent-gold-bright)' }}>YOUR</span> <br />
          SIGNATURE
        </h2>

        {/* GOLD LINE */}
        <div
          style={{
            width: '80px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
            margin: '0 auto 40px auto',
          }}
        />

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.85rem, 1vw, 1.05rem)',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto 40px auto',
            letterSpacing: '0.02em',
          }}
        >
          Receive our curated Discovery Coffret accompanied by complimentary white-glove courier delivery worldwide.
        </p>

        {/* CTA BUTTON */}
        <button
          ref={ctaBtnRef}
          onClick={scrollToCollection}
          className="btn-luxury btn-luxury-solid"
          style={{ padding: '18px 44px', fontSize: '11px' }}
        >
          <span>EXPLORE THE COLLECTION</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
