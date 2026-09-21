import React, { useRef, useState } from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { attachMagnetic } from '../../animations/magnetic';

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', scope: 'Residential Villa' });
  const submitBtnRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact-cta"
      className="arch-section blueprint-grid"
      style={{
        backgroundColor: '#0B0B0C',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="arch-container" style={{ maxWidth: '1200px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '60px',
            alignItems: 'center',
          }}
          className="cta-grid"
        >
          {/* LEFT: CINEMATIC HEADLINE */}
          <div style={{ gridColumn: '1 / span 6' }}>
            <div className="arch-eyebrow" style={{ marginBottom: '20px' }}>
              COMMISSION AN ENDURING STRUCTURE
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.8rem)',
                fontWeight: 800,
                lineHeight: 0.98,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              YOUR SITE. <br />
              OUR EXPERTISE. <br />
              <span style={{ color: 'var(--accent-bronze)' }}>ONE STRUCTURE.</span>
            </h2>

            <p className="arch-body-lead" style={{ marginBottom: '36px', color: 'var(--text-secondary)' }}>
              Let's turn your site survey and blueprints into a physical building engineered to outlast generations.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a
                href="tel:+914428364900"
                className="btn-arch"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Phone size={14} color="var(--accent-bronze)" />
                <span>CALL: +91 44 2836 4900</span>
              </a>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                CONFIDENTIAL ARCHITECTURAL INQUIRY
              </div>
            </div>
          </div>

          {/* RIGHT: INQUIRY FORM */}
          <div
            style={{
              gridColumn: '7 / span 6',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '40px',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  INQUIRY TRANSMITTED
                </h3>
                <p className="arch-body" style={{ fontSize: '13px' }}>
                  Our senior structural engineering director will review your project parameters and contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    CLIENT / PRACTICE NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Mahindra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      backgroundColor: '#0B0B0C',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        backgroundColor: '#0B0B0C',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      SITE LOCATION
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chennai / Bangalore"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        backgroundColor: '#0B0B0C',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    PROJECT TYPOLOGY
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      backgroundColor: '#0B0B0C',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  >
                    <option value="Residential Villa">Bespoke Luxury Villa (10k+ sq.ft)</option>
                    <option value="Commercial Tower">Commercial Headquarters / Retail</option>
                    <option value="Industrial PEB">Industrial / Logistics Facility</option>
                    <option value="Turnkey Execution">Complete Turnkey Civil Execution</option>
                  </select>
                </div>

                <button
                  ref={submitBtnRef}
                  type="submit"
                  className="btn-arch btn-arch-solid"
                  style={{ width: '100%', marginTop: '10px', padding: '18px' }}
                >
                  <span>TRANSMIT PROJECT BRIEF</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
          #contact-cta div[style*="grid-column: 1 / span 6"],
          #contact-cta div[style*="grid-column: 7 / span 6"] {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
