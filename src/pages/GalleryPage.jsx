import React, { useState } from 'react';
import kpProjectsData from '../data/kpProjects.json';
import { X, ZoomIn, MapPin, ArrowUpRight, Camera } from 'lucide-react';
import { useRouter } from '../router/Router';

export default function GalleryPage({ onOpenConsultation }) {
  const { navigate } = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    {
      id: 'g1',
      title: 'High-Tolerance Industrial Plant',
      location: 'Siruganur, Trichy',
      category: 'Industrial',
      image: '/projects/project_ca8dd0ea-d137-40b0-bc00-68201d10960f.jpg',
    },
    {
      id: 'g2',
      title: 'Dr. Vasudevan Eye Hospital',
      location: 'Chidambaram',
      category: 'Commercial',
      image: '/projects/project_16b4b64f-44e5-4540-832c-08d7b623e623.jpg',
    },
    {
      id: 'g3',
      title: 'KR Fuels Petroleum Dispensing Site',
      location: 'Trichy',
      category: 'Infrastructure',
      image: '/projects/project_4fd5a8ae-0530-4282-9480-0f9d09dbf7d3.jpg',
    },
    {
      id: 'g4',
      title: 'Apex Prime Multi-Storey RCC Frame',
      location: 'Trichy',
      category: 'Residential',
      image: '/projects/project_7c01225a-142a-43a4-aff8-e7e97f7331fb.jpg',
    },
    {
      id: 'g5',
      title: 'KR Gases Production Plant',
      location: 'Tirunelveli',
      category: 'Industrial',
      image: '/projects/project_4b547b12-37a4-4b08-ba7f-8d19a88cc08e.jpg',
    },
    {
      id: 'g6',
      title: 'Creepers Engineering Facility',
      location: 'Lalgudi',
      category: 'Residential',
      image: '/projects/project_e4bcd98a-6e1f-4bb5-9a68-bc407466d007.jpg',
    },
    {
      id: 'g7',
      title: 'Structural Steel Factory Bay',
      location: 'Thuvakudi, Trichy',
      category: 'Steel Structures',
      image: '/projects/project_0b584692-0524-4116-9e0f-0797b1b70ed9.jpg',
    },
    {
      id: 'g8',
      title: 'Laser-Screed Specialty Flooring',
      location: 'Venugopal Factory, Trichy',
      category: 'Industrial',
      image: '/projects/project_a25659c3-c52e-41f3-8941-185e9fc60570.jpg',
    },
    {
      id: 'g9',
      title: 'Lasan Healthcare Manufacturing Facility',
      location: 'Karur Road, Trichy',
      category: 'Industrial',
      image: '/projects/project_0a72ba79-ce78-46ea-a03a-3c76fccacb5d.jpg',
    },
  ];

  const categories = ['All', 'Industrial', 'Commercial', 'Residential', 'Steel Structures', 'Infrastructure'];

  const filtered = filter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* 1. HERO HEADER */}
      <section className="container-x py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
            / Project Gallery
          </div>
          <h1 className="mt-5 font-display text-display-1 leading-[1] tracking-[-0.04em] text-ink">
            Visual record of <em className="italic gradient-text">precision.</em>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-2 max-w-2xl">
            High-resolution on-site photography documenting our ongoing and completed projects across Tamil Nadu and South India.
          </p>
        </div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`h-10 rounded-full px-5 text-xs font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'border-ink bg-ink text-white shadow-sm'
                  : 'border border-line bg-paper text-ink hover:border-ink/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="section-y bg-paper-2/60 border-t border-line">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-[340px] cursor-pointer overflow-hidden rounded-[24px] border border-line bg-ink shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

                {/* CATEGORY BADGE */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow backdrop-blur">
                    {item.category}
                  </span>
                </div>

                {/* ZOOM ICON */}
                <div className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition-transform group-hover:scale-110">
                  <ZoomIn className="h-4 w-4" />
                </div>

                {/* BOTTOM INFO */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-xl font-medium text-white transition-colors group-hover:text-blue">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-white/75">
                    <MapPin className="h-3.5 w-3.5 text-blue" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-md p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full overflow-hidden rounded-[28px] border border-white/20 bg-ink shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white hover:text-ink cursor-pointer border-none"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-full object-contain bg-black"
            />

            <div className="p-6 text-white border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-mono text-blue-soft">
                  {selectedImage.category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-white/70 mt-1 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-blue" />
                  {selectedImage.location}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedImage(null);
                  onOpenConsultation();
                }}
                className="hidden sm:inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-paper-2 cursor-pointer border-none"
              >
                <span>Inquire About Similar Build</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA */}
      <section className="container-x section-y">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-white md:px-16 md:py-18">
          <div className="absolute inset-0 blueprint-bg opacity-[0.07] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-display-2 leading-[1] tracking-[-0.035em]">
                Want high-resolution site archives?
              </h2>
              <p className="mt-3 text-[16px] text-white/75 max-w-xl leading-relaxed">
                Contact our engineering office to review comprehensive progress photo documentation and quality inspection logs.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-white pl-7 pr-2 text-[15px] font-medium text-ink transition-colors hover:bg-paper-2 cursor-pointer border-none shrink-0"
            >
              <span>Get in Touch</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
