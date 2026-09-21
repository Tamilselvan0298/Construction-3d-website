import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function initSmoothScroll() {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  // Prevent multiple instances
  if (lenisInstance) {
    return lenisInstance;
  }

  const lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.5,
    infinite: false,
  });

  lenisInstance = lenis;

  // Synchronize Lenis scroll updates with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Use GSAP's ticker to drive Lenis's requestAnimationFrame
  const tickerCallback = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy: () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisInstance = null;
    }
  };
}

export function getLenis() {
  return lenisInstance;
}
