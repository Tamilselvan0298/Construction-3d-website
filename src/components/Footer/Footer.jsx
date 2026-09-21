import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0B0B0C',
        borderTop: '1px solid var(--border-subtle)',
        padding: '80px 6vw 40px 6vw',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div className="arch-container">
        {/* TOP ROW: BRAND & BACK TO TOP */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '30px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '50px',
            marginBottom: '50px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  border: '1.5px solid var(--accent-bronze)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--accent-bronze)',
                }}
              >
                K
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                }}
              >
                KINETIX STRUCTURAL
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', maxWidth: '420px', lineHeight: 1.6 }}>
              Engineering luxury residences, landmark commercial headquarters, and high-tolerance industrial campuses across Southern India.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="arch-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              padding: '12px 20px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} color="var(--accent-bronze)" />
          </button>
        </div>

        {/* MIDDLE ROW: 4 ENGINEERING OFFICE COLUMNS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* CHENNAI HQ */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '14px' }}>
              CHENNAI HEADQUARTERS
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Kinetix Tower, 44 Anna Salai<br />
              Teynampet, Chennai 600018<br />
              Tamil Nadu, India
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', marginTop: '10px' }}>
              +91 44 2836 4900
            </div>
          </div>

          {/* BANGALORE REGIONAL ATELIER */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '14px' }}>
              BANGALORE STUDIO
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Indiranagar 100ft Road<br />
              HAL 2nd Stage, Bangalore 560038<br />
              Karnataka, India
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', marginTop: '10px' }}>
              +91 80 4120 7800
            </div>
          </div>

          {/* DIRECT CONTACT */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '14px' }}>
              INQUIRIES & ESTIMATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="mailto:director@kinetixstructural.com" className="arch-link" style={{ fontSize: '12px' }}>
                director@kinetixstructural.com
              </a>
              <a href="mailto:tenders@kinetixstructural.com" className="arch-link" style={{ fontSize: '12px' }}>
                tenders@kinetixstructural.com
              </a>
              <a href="mailto:careers@kinetixstructural.com" className="arch-link" style={{ fontSize: '12px' }}>
                careers@kinetixstructural.com
              </a>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '14px' }}>
              STANDARDS & ACCREDITATIONS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
              <div>ISO 9001:2015 QUALITY CERTIFIED</div>
              <div>ISO 45001 OCCUPATIONAL HEALTH & SAFETY</div>
              <div>IGBC GREEN BUILDING GOLD ACCREDITED</div>
              <div>BIM LOD 400 COMPLIANT CONTRACTOR</div>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL & COPYRIGHT */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '30px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} KINETIX STRUCTURAL GROUP. ALL RIGHTS RESERVED.
          </span>

          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', cursor: 'pointer' }}>
              PRIVACY POLICY
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', cursor: 'pointer' }}>
              TERMS OF CIVIL CONTRACT
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
              ISO 9001 CERT: #IN-84920
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
