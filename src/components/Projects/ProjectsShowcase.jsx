import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectDetailModal from './ProjectDetailModal';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential Architecture', 'Commercial Infrastructure', 'Industrial Engineering'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects-section"
      className="arch-section"
      style={{
        backgroundColor: '#0B0B0C',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="arch-container">
        {/* SECTION HEADER & FILTER PILLS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '70px' }}>
          <div>
            <div className="arch-eyebrow" style={{ marginBottom: '16px' }}>
              FEATURED PORTFOLIO
            </div>
            <h2 className="arch-section-title">
              SELECTED <br />
              <span className="accent">LANDMARKS.</span>
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? 'rgba(184, 138, 68, 0.15)' : 'transparent',
                  border: activeCategory === cat ? '1px solid var(--accent-bronze)' : '1px solid var(--border-subtle)',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                  padding: '10px 18px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-COLUMN LARGE EDITORIAL PROJECT CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '50px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              style={{
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="project-card"
            >
              {/* IMAGE FRAME WITH HOVER ZOOM */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  marginBottom: '24px',
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.85) contrast(1.1)',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease',
                  }}
                />

                {/* OVERLAY TAGS */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    display: 'flex',
                    gap: '8px',
                  }}
                >
                  <span className="tech-tag">{p.category}</span>
                  <span className="tech-tag tech-tag-blue">{p.area}</span>
                </div>

                {/* ARROW HOVER CIRCLE */}
                <div
                  className="project-arrow-btn"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(11, 11, 12, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <ArrowUpRight size={18} color="#FFFFFF" />
                </div>
              </div>

              {/* CARD METADATA */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '6px' }}>
                    <MapPin size={13} color="var(--accent-bronze)" />
                    <span>{p.location}</span>
                    <span style={{ color: 'var(--text-muted)' }}>· {p.year}</span>
                  </div>

                  <h3
                    className="project-title"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.15,
                      textTransform: 'uppercase',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginTop: '10px',
                      maxWidth: '520px',
                    }}
                  >
                    {p.description.slice(0, 140)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE DETAIL MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .project-card:hover .project-img {
          transform: scale(1.05);
          filter: brightness(0.95) contrast(1.15);
        }
        .project-card:hover .project-title {
          color: var(--accent-bronze-hover) !important;
        }
        .project-card:hover .project-arrow-btn {
          background-color: var(--accent-bronze) !important;
          border-color: var(--accent-bronze) !important;
          transform: translate(-3px, -3px);
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
