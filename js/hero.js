// js/hero.js - 3D High-Performance Canvas Frame Scrubber
(function () {
  const canvas = document.getElementById('heroCanvas');
  const container = document.getElementById('heroContainer');
  const textRef = document.getElementById('heroText');
  const gradientRef = document.getElementById('heroGradient');
  const watermarkRef = document.getElementById('heroWatermark');
  const progressBar = document.getElementById('heroProgressBar');
  const progressBarContainer = document.getElementById('heroProgressContainer');

  if (!canvas || !container) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const DESKTOP_FRAMES = 120;
  const MOBILE_FRAMES = 120;

  const isMobile = window.innerWidth <= 768;
  const total = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
  const folder = isMobile ? 'frames-mobile' : 'frames';

  const images = [];
  let loadedCount = 0;
  let viewW = 0;
  let viewH = 0;
  let scrollRatio = 0;
  let isTicking = false;

  function drawFrame(frameIdx) {
    let img = images[frameIdx];
    if (!img || !img.complete || !img.naturalWidth) {
      img = images[0]; // Fallback to first loaded frame
    }
    if (!img || !img.complete || !img.naturalWidth) return;

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
  }

  function handleResize() {
    const dpr = window.devicePixelRatio || 1;
    viewW = window.innerWidth;
    viewH = window.innerHeight;
    canvas.width = viewW * dpr;
    canvas.height = viewH * dpr;
    canvas.style.width = `${viewW}px`;
    canvas.style.height = `${viewH}px`;
    ctx.scale(dpr, dpr);
    const frameIdx = Math.min(total - 1, Math.floor(scrollRatio * total));
    drawFrame(frameIdx);
  }

  function handleScroll() {
    if (isTicking) return;
    isTicking = true;
    requestAnimationFrame(() => {
      const rect = container.getBoundingClientRect();
      const scrollableDist = container.offsetHeight - window.innerHeight;
      const currentScrollRatio = Math.min(1, Math.max(0, -rect.top / scrollableDist));
      scrollRatio = currentScrollRatio;

      const frameIdx = Math.min(total - 1, Math.floor(currentScrollRatio * total));
      drawFrame(frameIdx);

      // Heading & CTA text fade + upward translation
      if (textRef) {
        const textOpacity = Math.max(0, 1 - currentScrollRatio / 0.15);
        textRef.style.opacity = String(textOpacity);
        textRef.style.transform = `translateY(${currentScrollRatio * 100}px)`;
      }

      // Ambient dark bottom gradient fade
      if (gradientRef) {
        const gradOpacity = Math.max(0, 1 - currentScrollRatio / 0.1);
        gradientRef.style.opacity = String(gradOpacity);
      }

      // APEX CONSTRUCTIONS watermark reveal overlay
      if (watermarkRef) {
        const showWatermark = frameIdx >= 105 && frameIdx < 119;
        watermarkRef.style.opacity = showWatermark ? '1' : '0';
      }

      isTicking = false;
    });
  }

  function updateProgress() {
    const pct = Math.round((loadedCount / total) * 100);
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (loadedCount >= total && progressBarContainer) {
      setTimeout(() => {
        progressBarContainer.style.opacity = '0';
        setTimeout(() => { progressBarContainer.style.display = 'none'; }, 300);
      }, 400);
    }
  }

  // Preload first frame immediately to render right away
  const firstImg = new Image();
  firstImg.src = `${folder}/ezgif-frame-001.jpg`;
  firstImg.onload = () => {
    loadedCount++;
    updateProgress();
    handleResize();
    drawFrame(0);
  };
  firstImg.onerror = () => {
    loadedCount++;
    updateProgress();
    handleResize();
  };
  images.push(firstImg);

  // Preload remaining frames
  for (let i = 2; i <= total; i++) {
    const img = new Image();
    const frameNum = String(i).padStart(3, '0');
    img.src = `${folder}/ezgif-frame-${frameNum}.jpg`;
    img.onload = () => {
      loadedCount++;
      updateProgress();
    };
    img.onerror = () => {
      loadedCount++;
      updateProgress();
    };
    images.push(img);
  }

  window.addEventListener('resize', () => {
    handleResize();
  });
  window.addEventListener('scroll', handleScroll, { passive: true });

  handleResize();
  handleScroll();
})();
