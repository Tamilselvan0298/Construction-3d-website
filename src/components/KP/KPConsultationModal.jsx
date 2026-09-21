import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function KPConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', projectType: 'Industrial Construction', notes: '' });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '560px',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--muted-ink)',
            cursor: 'pointer',
            padding: '4px',
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle2 size={52} color="var(--green)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--ink)', marginBottom: '8px' }}>
              Consultation Request Received
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--muted-ink)', lineHeight: 1.6 }}>
              A senior engineer from APEX CONSTRUCTIONS will review your project requirements and call you back within one business day.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Engineering Consultation
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  marginTop: '4px',
                }}
              >
                Get Free Consultation
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', color: 'var(--muted-ink)', marginTop: '6px' }}>
                Tell us about your site, scope, and timeline. No obligation.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--ink-2)', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Krishnan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--line-strong)',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--ink-2)', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 86108 36498"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--line-strong)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--ink-2)', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--line-strong)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--ink-2)', marginBottom: '6px' }}>
                  Project Discipline
                </label>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--line-strong)',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <option value="Industrial Construction">Industrial Construction (Plant / Warehouse)</option>
                  <option value="Commercial Construction">Commercial Building / Office</option>
                  <option value="Residential Construction">Residential Villa / Apartment</option>
                  <option value="Steel Structure Works">Steel Structure Works (PEB)</option>
                  <option value="Turnkey Construction">Turnkey Infrastructure Delivery</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--ink-2)', marginBottom: '6px' }}>
                  Project Notes / Location
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about site location, plot size, or expected start date..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--line-strong)',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '8px', padding: '14px' }}
              >
                Submit Consultation Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
