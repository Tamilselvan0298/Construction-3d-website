import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { collectionProducts } from '../data/products';
import { attachMagnetic } from '../animations/magnetic';
import { Check, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetails({ selectedProduct: initialProduct }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [reserved, setReserved] = useState(false);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const reserveBtnRef = useRef(null);

  const product = collectionProducts[activeIdx];

  // Sync if parent passes selectedProduct
  useEffect(() => {
    if (initialProduct) {
      const idx = collectionProducts.findIndex((p) => p.id === initialProduct.id);
      if (idx !== -1) setActiveIdx(idx);
    }
  }, [initialProduct]);

  useEffect(() => {
    const cleanupBtn = attachMagnetic(reserveBtnRef.current, 0.25);
    return () => cleanupBtn();
  }, []);

  // Smooth crossfade animation when active perfume changes
  const switchProduct = (newIdx) => {
    if (newIdx === activeIdx) return;
    
    gsap.to([imgRef.current, contentRef.current], {
      opacity: 0,
      y: 15,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        setActiveIdx(newIdx);
        setReserved(false);
        gsap.to([imgRef.current, contentRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        });
      },
    });
  };

  const handleReserve = () => {
    setReserved(true);
    setTimeout(() => setReserved(false), 4000);
  };

  return (
    <section
      ref={containerRef}
      id="product-details"
      className="section-wrapper"
      style={{
        backgroundColor: '#0B0908',
        position: 'relative',
        borderTop: '1px solid var(--border-gold-faint)',
        borderBottom: '1px solid var(--border-gold-faint)',
      }}
    >
      {/* SECTION HEADER & SELECTOR */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '70px',
        }}
      >
        <div>
          <span className="eyebrow-label">OLFACTORY ARCHITECTURE</span>
          <h2 className="editorial-section-title" style={{ marginTop: '12px' }}>
            PYRAMIDE <em>OLFACTIVE</em>
          </h2>
        </div>

        {/* FRAGRANCE TABS */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {collectionProducts.map((p, i) => (
            <button
              key={p.id}
              onClick={() => switchProduct(i)}
              style={{
                background: activeIdx === i ? 'rgba(201, 149, 61, 0.15)' : 'transparent',
                border: activeIdx === i ? '1px solid var(--accent-gold)' : '1px solid var(--border-dark-subtle)',
                color: activeIdx === i ? '#FFFFFF' : 'var(--text-secondary)',
                padding: '10px 18px',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {p.num} · {p.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* SPLIT GRID: LEFT IMAGE / RIGHT SPECIFICATIONS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '60px',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* LEFT: LARGE PRODUCT IMAGE */}
        <div
          style={{
            gridColumn: '1 / span 6',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '520px',
          }}
        >
          <div
            className="ambient-glow-amber"
            style={{
              width: '450px',
              height: '450px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <img
            ref={imgRef}
            src={product.image}
            alt={product.name}
            style={{
              width: 'clamp(280px, 32vw, 460px)',
              height: 'auto',
              maxHeight: '600px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 40px rgba(201, 149, 61, 0.2))',
              willChange: 'transform, opacity',
            }}
          />
        </div>

        {/* RIGHT: OLFACTORY PYRAMID & METADATA */}
        <div
          ref={contentRef}
          style={{
            gridColumn: '7 / span 6',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
            <span className="editorial-number">EDITION {product.num}</span>
            <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--border-gold-subtle)' }} />
            <span className="metadata-label">{product.category}</span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '0.02em',
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}
          >
            {product.name}
          </h3>

          <p className="editorial-body" style={{ marginBottom: '32px' }}>
            {product.description}
          </p>

          {/* OLFACTORY PYRAMID BREAKDOWN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
            {/* TOP NOTES */}
            <div style={{ borderTop: '1px solid var(--border-gold-faint)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <span className="metadata-label" style={{ color: 'var(--accent-gold)' }}>01 / TOP NOTES</span>
                <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>IMMEDIATE EVOCATION</span>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>
                {product.notes.top}
              </p>
            </div>

            {/* HEART NOTES */}
            <div style={{ borderTop: '1px solid var(--border-gold-faint)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <span className="metadata-label" style={{ color: 'var(--accent-gold)' }}>02 / HEART NOTES</span>
                <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>CORE HARMONY (2–6 HOURS)</span>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>
                {product.notes.heart}
              </p>
            </div>

            {/* BASE NOTES */}
            <div style={{ borderTop: '1px solid var(--border-gold-faint)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <span className="metadata-label" style={{ color: 'var(--accent-gold)' }}>03 / BASE NOTES</span>
                <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>RESIDUAL SILLAGE (12+ HOURS)</span>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>
                {product.notes.base}
              </p>
            </div>
          </div>

          {/* PRICE & RESERVE ACTIONS */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-gold-subtle)',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <span className="metadata-label">100 ML FLACON</span>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginTop: '4px',
                }}
              >
                {product.price}
              </div>
            </div>

            <button
              ref={reserveBtnRef}
              onClick={handleReserve}
              className="btn-luxury btn-luxury-solid"
              style={{ minWidth: '220px' }}
            >
              {reserved ? (
                <>
                  <Check size={14} />
                  <span>FLACON RESERVED</span>
                </>
              ) : (
                <>
                  <Sparkles size={14} />
                  <span>RESERVE BOTTLE</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #product-details div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #product-details div[style*="grid-column: 1 / span 6"],
          #product-details div[style*="grid-column: 7 / span 6"] {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
