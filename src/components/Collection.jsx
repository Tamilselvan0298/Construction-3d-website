import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { collectionProducts } from '../data/products';
import { attachMagnetic } from '../animations/magnetic';
import { Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Collection({ onSelectProduct }) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isReduced) return;

      itemsRef.current.forEach((el) => {
        if (!el) return;
        const img = el.querySelector('.collection-img');
        const text = el.querySelector('.collection-text');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        });

        tl.from(img, {
          y: 70,
          scale: 0.94,
          opacity: 0,
          duration: 1.4,
          ease: 'power3.out',
        });

        tl.from(text, {
          y: 40,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
        }, '-=0.9');

        // Continuous parallax
        gsap.to(img, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="collection-section"
      className="section-wrapper"
      style={{
        backgroundColor: '#080706',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* SECTION HEADER */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '100px',
        }}
      >
        <span className="eyebrow-label">HAUTE COLLECTION</span>
        <h2 className="editorial-section-title" style={{ marginTop: '16px' }}>
          LES EDITIONS <em>RARES</em>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.04em',
            marginTop: '16px',
            maxWidth: '460px',
          }}
        >
          Three singular extraits de parfum, each composed with raw botanicals and botanical resins aged in vintage French oak.
        </p>
      </div>

      {/* ASYMMETRICAL EDITORIAL PRODUCTS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
        {collectionProducts.map((prod, index) => {
          const isLeft = index === 0;
          const isRight = index === 1;
          const isCenter = index === 2;

          return (
            <div
              key={prod.id}
              ref={(el) => (itemsRef.current[index] = el)}
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: isCenter ? '1fr' : 'repeat(12, 1fr)',
                gap: '40px',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
              }}
            >
              {/* ASYMMETRY CASE 1: PRODUCT 01 - IMAGE ON LEFT (cols 1-7), TEXT ON RIGHT (cols 8-12) */}
              {isLeft && (
                <>
                  <div
                    className="collection-img-wrap"
                    style={{
                      gridColumn: '1 / span 7',
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
                        width: '400px',
                        height: '400px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="collection-img"
                      style={{
                        width: 'clamp(280px, 32vw, 480px)',
                        height: 'auto',
                        maxHeight: '620px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 35px rgba(201, 149, 61, 0.18))',
                        willChange: 'transform',
                      }}
                    />
                  </div>

                  <div
                    className="collection-text"
                    style={{
                      gridColumn: '8 / span 5',
                      paddingLeft: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                      <span className="editorial-number">{prod.num}</span>
                      <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--border-gold-subtle)' }} />
                      <span className="metadata-label">{prod.category}</span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                        fontWeight: 300,
                        letterSpacing: '0.02em',
                        color: 'var(--text-primary)',
                        marginBottom: '8px',
                      }}
                    >
                      {prod.name}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '1.2rem',
                        color: 'var(--accent-gold-bright)',
                        marginBottom: '20px',
                      }}
                    >
                      {prod.mood}
                    </p>

                    <p className="editorial-body" style={{ marginBottom: '28px' }}>
                      {prod.description}
                    </p>

                    <div
                      style={{
                        borderTop: '1px solid var(--border-gold-faint)',
                        borderBottom: '1px solid var(--border-gold-faint)',
                        padding: '16px 0',
                        marginBottom: '32px',
                      }}
                    >
                      <span className="metadata-label" style={{ display: 'block', marginBottom: '6px' }}>KEY NOTES</span>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                        {prod.notes.top}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                      <div>
                        <span className="metadata-label">PRICE</span>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)' }}>
                          {prod.price}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectProduct && onSelectProduct(prod)}
                        className="btn-luxury btn-luxury-solid"
                      >
                        <span>EXPLORE BOTTLE</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* ASYMMETRY CASE 2: PRODUCT 02 - TEXT ON LEFT (cols 1-5), IMAGE ON RIGHT (cols 6-12) */}
              {isRight && (
                <>
                  <div
                    className="collection-text"
                    style={{
                      gridColumn: '1 / span 5',
                      paddingRight: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                      <span className="editorial-number">{prod.num}</span>
                      <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--border-gold-subtle)' }} />
                      <span className="metadata-label">{prod.category}</span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                        fontWeight: 300,
                        letterSpacing: '0.02em',
                        color: 'var(--text-primary)',
                        marginBottom: '8px',
                      }}
                    >
                      {prod.name}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '1.2rem',
                        color: 'var(--accent-gold-bright)',
                        marginBottom: '20px',
                      }}
                    >
                      {prod.mood}
                    </p>

                    <p className="editorial-body" style={{ marginBottom: '28px' }}>
                      {prod.description}
                    </p>

                    <div
                      style={{
                        borderTop: '1px solid var(--border-gold-faint)',
                        borderBottom: '1px solid var(--border-gold-faint)',
                        padding: '16px 0',
                        marginBottom: '32px',
                      }}
                    >
                      <span className="metadata-label" style={{ display: 'block', marginBottom: '6px' }}>KEY NOTES</span>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                        {prod.notes.top}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                      <div>
                        <span className="metadata-label">PRICE</span>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)' }}>
                          {prod.price}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectProduct && onSelectProduct(prod)}
                        className="btn-luxury btn-luxury-solid"
                      >
                        <span>EXPLORE BOTTLE</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>

                  <div
                    className="collection-img-wrap"
                    style={{
                      gridColumn: '6 / span 7',
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: '520px',
                    }}
                  >
                    <div
                      className="ambient-glow-warm"
                      style={{
                        width: '420px',
                        height: '420px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="collection-img"
                      style={{
                        width: 'clamp(280px, 32vw, 480px)',
                        height: 'auto',
                        maxHeight: '620px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 35px rgba(240, 180, 76, 0.15))',
                        willChange: 'transform',
                      }}
                    />
                  </div>
                </>
              )}

              {/* ASYMMETRY CASE 3: PRODUCT 03 - DRAMATIC CENTERED MAGAZINE COMPOSITION */}
              {isCenter && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    padding: '40px 0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <span className="editorial-number">{prod.num}</span>
                    <span style={{ width: '30px', height: '1px', backgroundColor: 'var(--border-gold-subtle)' }} />
                    <span className="metadata-label">{prod.category}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(3rem, 5.5vw, 5rem)',
                      fontWeight: 300,
                      letterSpacing: '0.04em',
                      color: 'var(--text-primary)',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {prod.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '1.35rem',
                      color: 'var(--accent-gold-bright)',
                      marginBottom: '36px',
                    }}
                  >
                    {prod.mood}
                  </p>

                  {/* Centered Image with ambient aura */}
                  <div
                    className="collection-img-wrap"
                    style={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '20px 0 40px 0',
                    }}
                  >
                    <div
                      className="ambient-glow-amber"
                      style={{
                        width: '500px',
                        height: '500px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="collection-img"
                      style={{
                        width: 'clamp(300px, 35vw, 500px)',
                        height: 'auto',
                        maxHeight: '640px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 45px rgba(201, 149, 61, 0.25))',
                        willChange: 'transform',
                      }}
                    />
                  </div>

                  <div className="collection-text" style={{ maxWidth: '640px' }}>
                    <p className="editorial-body" style={{ marginBottom: '32px' }}>
                      {prod.description}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '40px',
                        alignItems: 'center',
                        marginBottom: '36px',
                      }}
                    >
                      <div>
                        <span className="metadata-label">CONCENTRATION</span>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: '4px' }}>
                          {prod.specs.concentration}
                        </div>
                      </div>
                      <div style={{ width: '1px', height: '30px', backgroundColor: 'var(--border-gold-subtle)' }} />
                      <div>
                        <span className="metadata-label">PRICE</span>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '4px' }}>
                          {prod.price}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectProduct && onSelectProduct(prod)}
                      className="btn-luxury btn-luxury-solid"
                    >
                      <span>DISCOVER L'OR SIGNATURE</span>
                      <Sparkles size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #collection-section div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .collection-img-wrap {
            grid-column: 1 / -1 !important;
            min-height: 380px !important;
          }
          .collection-text {
            grid-column: 1 / -1 !important;
            padding: 0 !important;
            text-align: center;
          }
          .collection-text div[style*="justify-content: space-between"] {
            justify-content: center !important;
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
