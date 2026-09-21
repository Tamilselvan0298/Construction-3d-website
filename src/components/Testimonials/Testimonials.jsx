import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Kinetix engineered our ocean-facing villa with 4-meter post-tensioned cantilevers that other contractors deemed impossible. Their daily BIM clash reports and transparent procurement gave us absolute peace of mind.",
    author: "Arjun Sundaram",
    role: "Managing Director, Apex Ventures",
    project: "The Kinetix Pavilions, ECR Chennai"
  },
  {
    quote: "Delivering our 185,000 sq.ft commercial corporate headquarters two months ahead of schedule allowed our operations to commence early. Their structural execution and MEP coordination are world-class.",
    author: "Sunita Krishnamurthy",
    role: "VP Infrastructure, Zenith Technologies",
    project: "Zenith Corporate Campus, Electronic City Bangalore"
  },
  {
    quote: "The laser-screeded FM2 flooring in our logistics park exceeded all flatness tolerances required by our European automated handling systems. Highly disciplined civil engineering group.",
    author: "R. Balachandran",
    role: "Director of Supply Chain Logistics",
    project: "Apex Advanced Logistics Park, Sriperumbudur"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section
      id="testimonials-section"
      className="arch-section blueprint-grid"
      style={{
        backgroundColor: '#0E0E10',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="arch-container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="arch-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            CLIENT COMMENDATIONS
          </div>
          <h2 className="arch-section-title">
            TESTIMONIALS OF <br />
            <span className="accent">STRUCTURAL TRUST.</span>
          </h2>
        </div>

        {/* TESTIMONIAL CARD */}
        <div
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            padding: '50px 60px',
            position: 'relative',
          }}
          className="testimonial-box"
        >
          <Quote size={40} color="var(--accent-bronze)" style={{ opacity: 0.3, marginBottom: '20px' }} />

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: 'var(--text-primary)',
              marginBottom: '36px',
            }}
          >
            “{t.quote}”
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {t.author}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--accent-bronze)', marginTop: '2px' }}>
                {t.role}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                {t.project}
              </div>
            </div>

            {/* NAVIGATION BUTTONS */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  border: '1px solid var(--border-subtle)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-bronze)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                aria-label="Next testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  border: '1px solid var(--border-subtle)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-bronze)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .testimonial-box {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
