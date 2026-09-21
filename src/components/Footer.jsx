import React from 'react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#080706',
        borderTop: '1px solid var(--border-gold-faint)',
        padding: '60px 6vw',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* TOP ROW: BRAND & NAVIGATION */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* BRAND */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                letterSpacing: '0.24em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
            >
              AURA
            </span>
            <span style={{ width: '1px', height: '14px', backgroundColor: 'var(--accent-gold)', opacity: 0.4 }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                letterSpacing: '0.24em',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
              }}
            >
              Haute Parfumerie Paris
            </span>
          </div>

          {/* MINIMAL LINKS */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => scrollTo('collection-section')}
              className="luxury-link"
              style={{ background: 'none', border: 'none', font: 'inherit', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Shop
            </button>
            <button
              onClick={() => scrollTo('story-section')}
              className="luxury-link"
              style={{ background: 'none', border: 'none', font: 'inherit', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              About
            </button>
            <button
              onClick={() => scrollTo('brand-story')}
              className="luxury-link"
              style={{ background: 'none', border: 'none', font: 'inherit', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Atelier
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="luxury-link"
              style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Instagram
            </a>
            <a
              href="mailto:concierge@auraparfums.com"
              className="luxury-link"
              style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* BOTTOM ROW: COPYRIGHT & LEGAL */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: '1px solid rgba(244, 240, 232, 0.04)',
            paddingTop: '30px',
          }}
        >
          <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} AURA HAUTE PARFUMERIE PARIS. ALL RIGHTS RESERVED.
          </span>

          <span style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            14 PLACE VENDÔME · 75001 PARIS
          </span>
        </div>
      </div>
    </footer>
  );
}
