import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { attachMagnetic } from '../animations/magnetic';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bagBtnRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cleanupBag = attachMagnetic(bagBtnRef.current, 0.2);
    const cleanupMenu = attachMagnetic(menuBtnRef.current, 0.2);
    return () => {
      cleanupBag();
      cleanupMenu();
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 90,
          transition: 'background 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.5s ease, padding 0.5s ease',
          backgroundColor: isScrolled ? 'rgba(8, 7, 6, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(201, 149, 61, 0.12)' : '1px solid transparent',
          padding: isScrolled ? '16px 6vw' : '28px 6vw',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1600px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* LEFT: BRAND MONOGRAM & NAME */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 400,
                letterSpacing: '0.22em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
            >
              AURA
            </span>
            <span
              style={{
                display: 'inline-block',
                width: '1px',
                height: '14px',
                backgroundColor: 'var(--accent-gold)',
                opacity: 0.5,
              }}
            />
            <span
              className="desktop-only"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.26em',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
              }}
            >
              Paris
            </span>
          </div>

          {/* CENTER: EDITORIAL NAVIGATION LINKS (DESKTOP) */}
          <nav
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '38px',
            }}
          >
            <button
              onClick={() => scrollToSection('product-scene')}
              className="nav-link-btn"
            >
              The Bottle
            </button>
            <button
              onClick={() => scrollToSection('story-section')}
              className="nav-link-btn"
            >
              Story
            </button>
            <button
              onClick={() => scrollToSection('collection-section')}
              className="nav-link-btn"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('product-details')}
              className="nav-link-btn"
            >
              Notes
            </button>
            <button
              onClick={() => scrollToSection('brand-story')}
              className="nav-link-btn"
            >
              Atelier
            </button>
          </nav>

          {/* RIGHT: SHOP & MENU */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <button
              ref={bagBtnRef}
              onClick={() => scrollToSection('collection-section')}
              className="bag-btn"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 10px',
              }}
            >
              <ShoppingBag size={14} color="#C9953D" />
              <span className="desktop-only">Acquire</span>
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              ref={menuBtnRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="menu-toggle-btn"
              aria-label="Toggle menu"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-gold-subtle)',
                padding: '8px 14px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                transition: 'border-color 0.3s ease',
              }}
            >
              {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
              <span style={{ fontSize: '10px' }}>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE / FULLSCREEN EDITORIAL OVERLAY DRAWER */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#080706',
          zIndex: 85,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          padding: '40px 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'var(--accent-gold)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Haute Parfumerie Paris
          </span>

          {[
            { label: '01 / The Bottle Experience', id: 'product-scene' },
            { label: '02 / Philosophy & Story', id: 'story-section' },
            { label: '03 / Fragrance Collection', id: 'collection-section' },
            { label: '04 / Olfactory Notes', id: 'product-details' },
            { label: '05 / The Grasse Atelier', id: 'brand-story' },
            { label: '06 / Acquire Signature', id: 'final-cta' },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                cursor: 'pointer',
                letterSpacing: '0.04em',
                transition: 'color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F0B44C';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#F4F0E8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.label}
            </button>
          ))}

          <div
            style={{
              marginTop: '36px',
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>
              14 PLACE VENDÔME, PARIS
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          padding: 6px 0;
          transition: color 0.3s ease;
        }
        .nav-link-btn:hover {
          color: var(--text-primary);
        }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-gold);
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link-btn:hover::after {
          width: 100%;
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
