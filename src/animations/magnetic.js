import gsap from 'gsap';

/**
 * Attaches a subtle magnetic movement to an element on mousemove.
 * Resets cleanly on mouseleave.
 */
export function attachMagnetic(element, strength = 0.3) {
  if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const onMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.6,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };

  const onMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto'
    });
  };

  element.addEventListener('mousemove', onMouseMove);
  element.addEventListener('mouseleave', onMouseLeave);

  return () => {
    element.removeEventListener('mousemove', onMouseMove);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
}
