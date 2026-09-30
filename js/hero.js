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
  const viewH = 600; // Fixed canvas display height to 600px
  let scrollRatio = 0;
  let isTicking = false;

  let lastDrawnIdx = -1;

  function drawFrame(frameIdx) {
    frameIdx = Math.max(0, Math.min(total - 1, frameIdx));

    let img = images[frameIdx];

    // If requested frame is not loaded yet, find the nearest loaded frame (search backwards first, then forwards)
    if (!img || !img.complete || !img.naturalWidth) {
      for (let k = frameIdx - 1; k >= 0; k--) {
        if (images[k] && images[k].complete && images[k].naturalWidth) {
          img = images[k];
          break;
        }
      }
    }
    if (!img || !img.complete || !img.naturalWidth) {
      for (let k = frameIdx + 1; k < total; k++) {
        if (images[k] && images[k].complete && images[k].naturalWidth) {
          img = images[k];
          break;
        }
      }
    }
    if (!img || !img.complete || !img.naturalWidth) return;

    lastDrawnIdx = frameIdx;

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
    viewW = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    canvas.width = viewW * dpr;
    canvas.height = viewH * dpr;
    canvas.style.width = `${viewW}px`;
    canvas.style.height = `${viewH}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    const frameIdx = Math.min(total - 1, Math.floor(scrollRatio * total));
    drawFrame(frameIdx);
  }

  function handleScroll() {
    if (isTicking) return;
    isTicking = true;
    requestAnimationFrame(() => {
      const rect = container.getBoundingClientRect();
      const stickyH = 600;
      const scrollableDist = Math.max(1, container.offsetHeight - stickyH);
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
        const showWatermark = frameIdx >= 105;
        watermarkRef.style.opacity = showWatermark ? '1' : '0';
      }

      isTicking = false;
    });
  }

  function getCurrentTargetFrameIdx() {
    return Math.min(total - 1, Math.max(0, Math.floor(scrollRatio * total)));
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
    const targetIdx = getCurrentTargetFrameIdx();
    drawFrame(targetIdx);
  };
  firstImg.onerror = () => {
    loadedCount++;
    updateProgress();
    handleResize();
  };
  images.push(firstImg);

  // Preload remaining frames with automatic canvas update
  for (let i = 2; i <= total; i++) {
    const frameIndex = i - 1;
    const img = new Image();
    const frameNum = String(i).padStart(3, '0');
    img.src = `${folder}/ezgif-frame-${frameNum}.jpg`;
    img.onload = () => {
      loadedCount++;
      updateProgress();
      // If the current scroll position wants this frame (or near it), redraw immediately!
      const currentTarget = getCurrentTargetFrameIdx();
      if (Math.abs(currentTarget - frameIndex) <= Math.abs(currentTarget - lastDrawnIdx)) {
        drawFrame(currentTarget);
      }
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
