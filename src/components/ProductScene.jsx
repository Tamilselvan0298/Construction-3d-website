import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroProduct } from '../data/products';
import { attachMagnetic } from '../animations/magnetic';
import { ArrowDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductScene() {
  const containerRef = useRef(null);
  const pinnedStageRef = useRef(null);
  
  // Hero elements
  const eyebrowRef = useRef(null);
  const headlineLinesRef = useRef([]);
  const heroSubtextRef = useRef(null);
  const heroCtaRef = useRef(null);
  const heroMetaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Product imagery & parallax layers
  const bottleWrapRef = useRef(null);
  const bottleImgRef = useRef(null);
  const boxWrapRef = useRef(null);
  const boxImgRef = useRef(null);
  const glowRef = useRef(null);
  const bgTextureRef = useRef(null);

  // Presentation section overlay elements
  const presLeftRef = useRef(null);
  const presRightRef = useRef(null);
  const presTitleRef = useRef(null);
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    // 1. Initial Page-Load Reveal Animation (Cinematic GSAP)
    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isReduced) {
        gsap.set([bottleImgRef.current, headlineLinesRef.current, heroSubtextRef.current, heroCtaRef.current, heroMetaRef.current], {
          opacity: 1,
          y: 0,
          scale: 1
        });
        return;
      }

      // Initial states
      gsap.set(bottleImgRef.current, {
        scale: 0.82,
        opacity: 0,
        y: 50,
      });

      gsap.set(boxWrapRef.current, {
        opacity: 0,
        x: 180,
        y: 40,
        scale: 0.95
      });

      gsap.set(headlineLinesRef.current, {
        y: 90,
        opacity: 0
      });

      gsap.set([heroSubtextRef.current, heroCtaRef.current, heroMetaRef.current, scrollIndicatorRef.current], {
        opacity: 0,
        y: 20
      });

      gsap.set([presLeftRef.current, presRightRef.current, presTitleRef.current], {
        opacity: 0,
        y: 40
      });

      // Master Entrance Timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.2
      });

      // Ambient glow breathes in
      tl.to(glowRef.current, {
        opacity: 0.9,
        scale: 1.1,
        duration: 2.2,
        ease: 'power2.out'
      }, 0);

      // Product bottle enters with slow luxury weight
      tl.to(bottleImgRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: 'power2.out'
      }, 0.2);

      // Headline lines reveal with editorial stagger
      tl.to(headlineLinesRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.3,
        stagger: 0.14,
        ease: 'power4.out'
      }, 0.4);

      // Supporting metadata fades in
      tl.to([heroSubtextRef.current, heroCtaRef.current, heroMetaRef.current, scrollIndicatorRef.current], {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.12
      }, 1.0);

      // 2. SCROLL-DRIVEN HERO & PRODUCT PINNED TIMELINE (1800px scrub distance)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1800',
          pin: pinnedStageRef.current,
          scrub: 1.1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // STEP 1: Hero typography leaves the viewport smoothly
      scrollTl.to(headlineLinesRef.current, {
        y: -100,
        opacity: 0,
        stagger: 0.04,
        duration: 0.35,
        ease: 'power2.in'
      }, 0);

      scrollTl.to([heroSubtextRef.current, heroCtaRef.current, heroMetaRef.current, scrollIndicatorRef.current], {
        y: -40,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in'
      }, 0);

      // Background texture moves slightly (depth parallax)
      scrollTl.to(bgTextureRef.current, {
        y: -60,
        scale: 1.06,
        duration: 1.0,
        ease: 'none'
      }, 0);

      // STEP 2: The Bottle glides into presentation position (asymmetrical center-left)
      const isMobile = window.innerWidth < 768;
      
      scrollTl.to(bottleWrapRef.current, {
        x: isMobile ? '-10vw' : '-14vw',
        y: isMobile ? '-4vh' : '-2vh',
        scale: isMobile ? 0.95 : 1.04,
        rotation: -2,
        duration: 0.7,
        ease: 'power2.inOut'
      }, 0.15);

      // STEP 3: The Luxury Packaging Box enters from the right
      scrollTl.to(boxWrapRef.current, {
        opacity: 1,
        x: isMobile ? '12vw' : '15vw',
        y: isMobile ? '2vh' : '4vh',
        scale: isMobile ? 0.88 : 0.96,
        rotation: 2,
        duration: 0.7,
        ease: 'power2.out'
      }, 0.2);

      // Glow intensifies behind the composition
      scrollTl.to(glowRef.current, {
        opacity: 1,
        scale: 1.3,
        duration: 0.8,
        ease: 'none'
      }, 0.2);

      // STEP 4: Presentation section text reveals as composition locks in
      scrollTl.to([presTitleRef.current, presLeftRef.current, presRightRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.1,
        ease: 'power2.out'
      }, 0.45);

      // STEP 5: Final continuous parallax as user nears end of pin
      scrollTl.to(bottleWrapRef.current, {
        y: '-=50',
        duration: 0.4,
        ease: 'none'
      }, 0.6);

      scrollTl.to(boxWrapRef.current, {
        y: '+=40',
        duration: 0.4,
        ease: 'none'
      }, 0.6);

    }, containerRef);

    // Subtle magnetic effect on Hero CTA button
    const cleanupBtn = attachMagnetic(ctaBtnRef.current, 0.25);

    // Subtle desktop mouse-tilt on product bottle in hero
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024 || !bottleWrapRef.current) return;
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 16;
      const yPercent = (e.clientY / innerHeight - 0.5) * 16;

      gsap.to(bottleWrapRef.current, {
        rotationY: xPercent * 0.8,
        rotationX: -yPercent * 0.8,
        transformPerspective: 900,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      cleanupBtn();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToStory = () => {
    const el = document.getElementById('story-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      id="product-scene"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#080706',
        // Pin duration buffer: 100vh hero + scroll track
      }}
    >
      {/* PINNED STAGE: Stays in viewport during scroll */}
      <div
        ref={pinnedStageRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '680px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* ATMOSPHERIC BACKGROUND TEXTURE */}
        <div
          ref={bgTextureRef}
          style={{
            position: 'absolute',
            inset: '-10%',
            backgroundImage: `url(/images/hero-background.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* AMBIENT RADIAL AMBER GLOW (BEHIND THE BOTTLE) */}
        <div
          ref={glowRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(320px, 45vw, 680px)',
            height: 'clamp(320px, 45vw, 680px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201, 149, 61, 0.28) 0%, rgba(139, 77, 23, 0.08) 50%, transparent 75%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
            zIndex: 2,
            opacity: 0.4,
          }}
        />

        {/* ==============================================================
            HERO LAYER: Typography & Initial Layout
            ============================================================== */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 5,
            padding: '0 6vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'none', // Allow clicks to pass to interactive buttons
          }}
        >
          {/* LEFT: Massive Editorial Headline */}
          <div
            style={{
              flex: '1 1 50%',
              maxWidth: '650px',
              zIndex: 6,
              pointerEvents: 'auto',
            }}
          >
            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="eyebrow-label"
              style={{ marginBottom: '22px' }}
            >
              {heroProduct.eyebrow}
            </div>

            {/* Headline with overflow line masking */}
            <h1 className="editorial-hero-title">
              {heroProduct.headline.map((word, idx) => (
                <span key={idx} className="line">
                  <span
                    ref={(el) => (headlineLinesRef.current[idx] = el)}
                    className="line-inner"
                    style={{
                      fontStyle: idx === 1 ? 'italic' : 'normal',
                      color: idx === 1 ? '#F0B44C' : 'var(--text-primary)',
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Supporting Tagline */}
            <p
              ref={heroSubtextRef}
              style={{
                marginTop: '32px',
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                maxWidth: '420px',
                letterSpacing: '0.02em',
              }}
            >
              {heroProduct.tagline}
            </p>

            {/* CTA Button */}
            <div
              ref={heroCtaRef}
              style={{ marginTop: '36px', display: 'flex', alignItems: 'center', gap: '20px' }}
            >
              <button
                ref={ctaBtnRef}
                onClick={scrollToCollection}
                className="btn-luxury"
              >
                <span>DISCOVER THE COLLECTION</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Metadata & Edition Information */}
          <div
            ref={heroMetaRef}
            className="desktop-only"
            style={{
              flex: '0 0 280px',
              textAlign: 'right',
              zIndex: 6,
              pointerEvents: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'flex-end',
            }}
          >
            <div>
              <span className="metadata-label">EDITION</span>
              <div className="metadata-value" style={{ fontSize: '1rem', marginTop: '4px' }}>
                {heroProduct.edition}
              </div>
            </div>

            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-gold-subtle)' }} />

            <div>
              <span className="metadata-label">CONCENTRATION</span>
              <div className="metadata-value" style={{ fontSize: '1rem', marginTop: '4px' }}>
                {heroProduct.concentration}
              </div>
            </div>

            <div>
              <span className="metadata-label">VOLUME</span>
              <div className="metadata-value" style={{ fontSize: '1rem', marginTop: '4px' }}>
                {heroProduct.volume}
              </div>
            </div>

            <div>
              <span className="metadata-label">ATELIER ORIGIN</span>
              <div className="metadata-value" style={{ fontSize: '1rem', marginTop: '4px', color: 'var(--accent-gold)' }}>
                {heroProduct.origin}
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            CENTRAL PRODUCT COMPOSITION: BOTTLE + PACKAGING BOX
            ============================================================== */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          {/* THE BOTTLE */}
          <div
            ref={bottleWrapRef}
            style={{
              position: 'relative',
              width: 'clamp(280px, 34vw, 560px)',
              height: 'clamp(400px, 58vh, 760px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'transform, opacity',
            }}
          >
            <img
              ref={bottleImgRef}
              src={heroProduct.bottleImage}
              alt="L'Aura Originale Luxury Perfume Flacon"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 45px rgba(201, 149, 61, 0.2))',
                willChange: 'transform, opacity',
              }}
            />
          </div>

          {/* THE PACKAGING BOX (Enters on scroll) */}
          <div
            ref={boxWrapRef}
            style={{
              position: 'absolute',
              width: 'clamp(260px, 30vw, 500px)',
              height: 'clamp(380px, 52vh, 680px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'transform, opacity',
            }}
          >
            <img
              ref={boxImgRef}
              src={heroProduct.boxImage}
              alt="Aura Haute Parfumerie Presentation Box"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.9))',
                willChange: 'transform, opacity',
              }}
            />
          </div>
        </div>

        {/* ==============================================================
            PRESENTATION OVERLAY (Reveals during scroll transition)
            ============================================================== */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 6,
            padding: '0 6vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            pointerEvents: 'none',
          }}
        >
          {/* Top Title bar during presentation */}
          <div
            ref={presTitleRef}
            style={{
              paddingTop: '100px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <div>
              <span className="eyebrow-label">PRODUCT SHOWCASE</span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3.4rem)',
                  fontWeight: 300,
                  marginTop: '8px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                THE ARCHITECTURE OF SCENT
              </h2>
            </div>

            <div className="desktop-only" style={{ textAlign: 'right' }}>
              <span className="metadata-label">OBJECT D'ART</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--accent-gold)', marginTop: '4px' }}>
                Faceted Crystal & Hot-Stamped Gold
              </p>
            </div>
          </div>

          {/* Bottom editorial split notes during presentation */}
          <div
            style={{
              paddingBottom: '50px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            {/* Left Note */}
            <div
              ref={presLeftRef}
              style={{
                maxWidth: '380px',
                pointerEvents: 'auto',
              }}
            >
              <span className="editorial-number">01</span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  margin: '6px 0 12px 0',
                  color: 'var(--text-primary)',
                }}
              >
                {heroProduct.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}
              >
                Each flacon is handcrafted from heavy optical crystal and sealed with a knurled brass cap, protecting the 28% pure perfume extract macerated over six lunar cycles.
              </p>
            </div>

            {/* Right Note */}
            <div
              ref={presRightRef}
              className="desktop-only"
              style={{
                maxWidth: '340px',
                textAlign: 'right',
                pointerEvents: 'auto',
              }}
            >
              <span className="metadata-label">OLFACTORY HARMONY</span>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  lineHeight: 1.5,
                  color: 'var(--text-primary)',
                  margin: '8px 0 14px 0',
                }}
              >
                Calabrian Bergamot · Centifolia Rose · Rare Cambodian Oud
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent-gold)' }}>
                  COMPLIMENTARY COUTURE BOX
                </span>
                <Sparkles size={13} color="#C9953D" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SCROLL INDICATOR */}
        <div
          ref={scrollIndicatorRef}
          onClick={scrollToStory}
          style={{
            position: 'absolute',
            bottom: '28px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
            }}
          >
            SCROLL TO EXPLORE
          </span>
          <ArrowDown size={14} color="#C9953D" style={{ animation: 'bounceSlow 2.5s infinite ease-in-out' }} />
        </div>
      </div>

      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 900px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
