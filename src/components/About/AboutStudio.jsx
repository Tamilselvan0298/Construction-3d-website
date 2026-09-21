import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { metricsData } from '../../data/metrics';
import { ShieldCheck, Compass, Ruler, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutStudio() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Counter animation on scroll trigger
      countersRef.current.forEach((el, idx) => {
        if (!el) return;
        const targetVal = metricsData[idx].value;

        if (isReduced) {
          el.innerText = targetVal;
          return;
        }

        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetVal,
          duration: 2.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          onUpdate: () => {
            if (targetVal % 1 !== 0) {
              el.innerText = obj.val.toFixed(1);
            } else {
              el.innerText = Math.round(obj.val);
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="arch-section blueprint-grid"
      style={{
        backgroundColor: '#0E0E10',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="arch-container">
        {/* TOP ROW: EYEBROW & SPLIT STATEMENT */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', marginBottom: '90px' }}>
          <div style={{ gridColumn: '1 / span 5' }}>
            <div className="arch-eyebrow" style={{ marginBottom: '20px' }}>
              ABOUT KINETIX GROUP
            </div>
            <h2 className="arch-section-title">
              WE BUILD WITH <br />
              <span className="accent">PURPOSE.</span>
            </h2>
          </div>

          <div style={{ gridColumn: '6 / span 7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="arch-body-lead" style={{ marginBottom: '24px' }}>
              A specialized architectural engineering and civil contracting group focused on uncompromising structural integrity, disciplined schedule adherence, and enduring architectural value.
            </p>
            <p className="arch-body">
              We bridge the traditional divide between visionary design and ground-truth structural execution. By integrating full 4D BIM modeling, batch-tested material traceability, and dedicated on-site engineering crews, we construct high-consequence structures that outlast generations.
            </p>
          </div>
        </div>

        {/* PILLARS & STATISTICAL METRICS ROW */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '60px',
          }}
          className="metrics-grid"
        >
          {metricsData.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '36px 30px',
                position: 'relative',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-bronze)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span
                  ref={(el) => (countersRef.current[idx] = el)}
                  className="tech-stat-number"
                >
                  0
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-bronze)' }}>
                  {m.suffix}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                }}
              >
                {m.label}
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #about-section div[style*="grid-template-columns: repeat(12, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          #about-section div[style*="grid-column: 1 / span 5"],
          #about-section div[style*="grid-column: 6 / span 7"] {
            grid-column: 1 / -1 !important;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
