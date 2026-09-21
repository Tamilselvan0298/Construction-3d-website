import React, { useEffect } from 'react';
import { X, Check, MapPin, Calendar, Maximize2, Clock, FileText } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 11, 12, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#121214',
          border: '1px solid var(--border-bronze)',
          width: '100%',
          maxWidth: '1100px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          borderRadius: '2px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(11, 11, 12, 0.7)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'border-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-bronze)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
        >
          <X size={18} />
        </button>

        {/* HERO IMAGE */}
        <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #121214 0%, transparent 70%)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '40px',
              right: '40px',
            }}
          >
            <span className="tech-tag" style={{ marginBottom: '10px' }}>
              {project.category} · {project.year}
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                margin: '4px 0',
              }}
            >
              {project.title}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
              <MapPin size={14} color="var(--accent-bronze)" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* BODY CONTENT */}
        <div style={{ padding: '40px' }}>
          {/* KEY METRICS BAR */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '30px',
              marginBottom: '36px',
            }}
            className="modal-metrics-grid"
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>BUILT AREA</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                {project.area}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>EXECUTION DURATION</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                {project.duration}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>COMPLETION YEAR</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                {project.year}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>STATUS</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: '#10B981', marginTop: '4px' }}>
                {project.status}
              </div>
            </div>
          </div>

          {/* BLUEPRINT & SPECIFICATION CARD */}
          <div
            style={{
              background: 'rgba(78, 115, 223, 0.06)',
              border: '1px solid var(--border-blue)',
              padding: '20px 24px',
              marginBottom: '36px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7AA2F7', marginBottom: '8px' }}>
              <FileText size={15} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                STRUCTURAL BLUEPRINT DATUM
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>
              {project.blueprint}
            </p>
          </div>

          {/* NARRATIVE & SCOPE */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', marginBottom: '40px' }}>
            <div style={{ gridColumn: '1 / span 7' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                ARCHITECTURAL OVERVIEW
              </h3>
              <p className="arch-body" style={{ lineHeight: 1.8 }}>
                {project.description}
              </p>
            </div>

            <div style={{ gridColumn: '8 / span 5' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                TECHNICAL HIGHLIGHTS
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {project.technicalHighlights.map((t, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check size={14} color="var(--accent-bronze)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GALLERY GRID */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
              PROJECT GALLERY
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {project.gallery.map((imgUrl, i) => (
                <div key={i} style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src={imgUrl}
                    alt={`${project.title} detail ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .modal-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #project-detail-modal div[style*="grid-template-columns: repeat(12, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          #project-detail-modal div[style*="grid-column: 1 / span 7"],
          #project-detail-modal div[style*="grid-column: 8 / span 5"] {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </div>
  );
}
