import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Phone, ChevronDown } from 'lucide-react';

const DESKTOP_FRAMES = 120;
const MOBILE_FRAMES = 120;

export default function KPHero({ onStartProject }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const gradientRef = useRef(null);
  const watermarkRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef([]);
  const isTicking = useRef(false);
  const totalFramesRef = useRef(DESKTOP_FRAMES);

  // Preload frames based on viewport size
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth <= 768;
    const total = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
    const folder = isMobile ? '/frames-mobile' : '/frames';
    totalFramesRef.current = total;

    let loadedCount = 0;
    const imgs = [];

    for (let i = 1; i <= total; i++) {
      const img = new Image();
      img.src = `${folder}/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
      img.onload = () => {
        loadedCount++;
        setProgress(loadedCount / total);
        if (loadedCount === total) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setProgress(loadedCount / total);
        if (loadedCount === total) {
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;

    const handleResize = () => {
      const currentIsMobile = window.innerWidth <= 768;
      if (isMobile !== currentIsMobile) {
        window.location.reload();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Canvas drawing and scroll-driven frame scrubbing
  useEffect(() => {
    if (!isLoaded) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let viewW = 0;
    let viewH = 0;
    let scrollRatio = 0;

    const drawFrame = (frameIdx) => {
      const img = imagesRef.current[frameIdx];
      if (!img || !img.complete) return;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = viewW / viewH;
      let drawW, drawH, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawW = viewW;
        drawH = viewW / imgRatio;
      } else {
        drawH = viewH;
        drawW = viewH * imgRatio;
      }
      offsetX = (viewW - drawW) / 2;
      offsetY = (viewH - drawH) / 2;

      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, viewW, viewH);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      viewW = window.innerWidth;
      viewH = window.innerHeight;
      canvas.width = viewW * dpr;
      canvas.height = viewH * dpr;
      canvas.style.width = `${viewW}px`;
      canvas.style.height = `${viewH}px`;
      ctx.scale(dpr, dpr);
      const total = totalFramesRef.current;
      drawFrame(Math.min(total - 1, Math.floor(scrollRatio * total)));
    };

    const handleScroll = () => {
      if (isTicking.current) return;
      isTicking.current = true;
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const scrollableDist = container.offsetHeight - window.innerHeight;
        const currentScrollRatio = Math.min(1, Math.max(0, -rect.top / scrollableDist));
        scrollRatio = currentScrollRatio;

        const total = totalFramesRef.current;
        const frameIdx = Math.min(total - 1, Math.floor(currentScrollRatio * total));
        drawFrame(frameIdx);

        // Heading & CTA text fade + upward translation
        if (textRef.current) {
          const textOpacity = Math.max(0, 1 - currentScrollRatio / 0.15);
          textRef.current.style.opacity = String(textOpacity);
          textRef.current.style.transform = `translateY(${currentScrollRatio * 100}px)`;
        }

        // Ambient dark bottom gradient fade
        if (gradientRef.current) {
          const gradOpacity = Math.max(0, 1 - currentScrollRatio / 0.1);
          gradientRef.current.style.opacity = String(gradOpacity);
        }

        // APEX CONSTRUCTIONS watermark reveal overlay
        if (watermarkRef.current) {
          const showWatermark = frameIdx >= 105 && frameIdx < 119;
          watermarkRef.current.style.opacity = showWatermark ? '1' : '0';
        }

        isTicking.current = false;
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoaded]);

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: '400vh' }}>
      {/* LOADING EXPERIENCE PROGRESS SCREEN */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper">
          <div className="mb-4 font-display text-xl text-ink">Loading Experience...</div>
          <div className="h-1 w-48 overflow-hidden rounded-full bg-line">
            <div
              className="h-full bg-blue transition-all duration-200 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* STICKY FULLSCREEN BANNER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        {/* 2D HIGH-PERFORMANCE CANVAS FOR FRAME SCRUBBING */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full object-cover" />

        {/* BOTTOM GRADIENT VIGNETTE */}
        <div
          ref={gradientRef}
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-ink/40 lg:hidden" />

        {/* EDITORIAL CONTENT OVERLAY */}
        <div
          ref={textRef}
          className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center"
        >
          <div className="container-x mt-20 md:mt-32">
            <h1 className="mt-7 font-display text-display-1 leading-[0.95] tracking-[-0.04em] text-white">
              Building tomorrow's
              <br />
              infrastructure, <em className="font-display italic gradient-text">today.</em>
            </h1>
            <p className="mt-7 max-w-[520px] text-[17px] leading-[1.65] text-paper-2/80">
              From 5-acre industrial campuses to multi-specialty hospitals, APEX CONSTRUCTIONS delivers engineering-grade buildings with discipline, safety and pride — across South India.
            </p>
            <div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onStartProject}
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-white pl-7 pr-2 text-[15px] font-medium text-ink transition-colors hover:bg-paper-2"
              >
                Start a project
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </button>
              <a
                href="tel:+918610836498"
                className="inline-flex h-14 items-center gap-3 rounded-full border border-white/20 bg-ink-2/40 px-6 text-[15px] font-medium text-white backdrop-blur transition-colors hover:border-white/40"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                Call us directly
              </a>
            </div>
          </div>
        </div>

        {/* SCROLL TO EXPLORE PULSING PILL */}
        <div className="pointer-events-none absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 lg:bottom-8">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/70">
            Scroll to explore
          </span>
          <span className="flex h-9 w-9 animate-bounce items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur">
            <ChevronDown className="h-4 w-4 text-white" />
          </span>
        </div>

        {/* REVEAL WATERMARK ON COMPLETED FRAME */}
        <div
          ref={watermarkRef}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300"
        >
          <h2 className="font-display text-center px-4 text-5xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter uppercase mix-blend-overlay">
            APEX CONSTRUCTIONS
          </h2>
        </div>
      </div>
    </section>
  );
}
