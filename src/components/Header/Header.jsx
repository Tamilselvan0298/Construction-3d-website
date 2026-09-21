import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { attachMagnetic } from '../../animations/magnetic';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cleanup = attachMagnetic(ctaBtnRef.current, 0.2);
    return () => cleanup();
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 80,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(11, 11, 12, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          padding: isScrolled ? '16px 6vw' : '26px 6vw',
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
          {/* BRAND LOGO & ENGINEERING INSIGNIA */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                border: '1.5px solid var(--accent-bronze)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--accent-bronze)',
                backgroundColor: 'rgba(184, 138, 68, 0.1)',
              }}
            >
              K
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                }}
              >
                KINETIX
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.24em',
                  color: 'var(--accent-bronze)',
                  textTransform: 'uppercase',
                }}
              >
                STRUCTURAL GROUP
              </div>
            </div>
          </div>

          {/* DESKTOP EDITORIAL NAVIGATION */}
          <nav
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
            }}
          >
            <button onClick={() => scrollTo('construction-experience')} className="arch-link">
              4D Experience
            </button>
            <button onClick={() => scrollTo('about-section')} className="arch-link">
              Studio
            </button>
            <button onClick={() => scrollTo('services-section')} className="arch-link">
              Services
            </button>
            <button onClick={() => scrollTo('process-section')} className="arch-link">
              Process
            </button>
            <button onClick={() => scrollTo('projects-section')} className="arch-link">
              Projects
            </button>
            <button onClick={() => scrollTo('faq-section')} className="arch-link">
              FAQ
            </button>
          </nav>

          {/* RIGHT CONTACT & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a
              href="tel:+914428364900"
              className="desktop-only arch-link"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}
            >
              <Phone size={13} color="var(--accent-bronze)" />
              <span>+91 44 2836 4900</span>
            </a>

            <button
              ref={ctaBtnRef}
              onClick={() => scrollTo('contact-cta')}
              className="btn-arch btn-arch-solid desktop-only"
              style={{ padding: '12px 24px', fontSize: '10px' }}
            >
              <span>INITIATE PROJECT</span>
              <ArrowUpRight size={14} />
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
              }}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              <span>{mobileOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN DRAWER */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#0B0B0C',
          zIndex: 75,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
          padding: '40px 20px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent-bronze)' }}>
            ENGINEERING & CIVIL CONTRACTING
          </span>

          {[
            { label: '01 / 4D Construction Experience', id: 'construction-experience' },
            { label: '02 / Studio & Philosophy', id: 'about-section' },
            { label: '03 / Core Services', id: 'services-section' },
            { label: '04 / Construction Process', id: 'process-section' },
            { label: '05 / Project Portfolio', id: 'projects-section' },
            { label: '06 / Client Inquiries', id: 'contact-cta' },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                cursor: 'pointer',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
        }
        @media (min-width: 1025px) {
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
