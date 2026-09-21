import React, { useState } from 'react';
import { faqData } from '../../data/faq';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq-section"
      className="arch-section"
      style={{
        backgroundColor: '#0B0B0C',
      }}
    >
      <div className="arch-container" style={{ maxWidth: '1000px' }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div className="arch-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            STATUTORY & CONTRACTUAL CLARITY
          </div>
          <h2 className="arch-section-title">
            FREQUENTLY ASKED <br />
            <span className="accent">QUESTIONS.</span>
          </h2>
          <p className="arch-body" style={{ marginTop: '16px' }}>
            Detailed answers regarding our civil contracting scope, BOQ frameworks, statutory approvals, and quality testing standards.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqData.map((f, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-surface)',
                  border: isOpen ? '1px solid var(--accent-bronze)' : '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  transition: 'border-color 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--text-bronze)' : 'var(--text-primary)',
                      paddingRight: '20px',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {f.question}
                  </span>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isOpen ? 'var(--accent-bronze)' : 'var(--text-secondary)',
                    }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 28px 28px 28px',
                      borderTop: '1px solid var(--border-subtle)',
                      marginTop: '4px',
                      paddingTop: '20px',
                    }}
                  >
                    <p className="arch-body" style={{ margin: 0, lineHeight: 1.8 }}>
                      {f.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
