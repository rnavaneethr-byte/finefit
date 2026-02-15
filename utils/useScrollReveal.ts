import { useEffect } from 'react';

/**
 * Adds the 'royal-reveal' class to elements with the 'scroll-reveal' class when they enter the viewport.
 * Usage: Add 'scroll-reveal' to any element you want to animate on scroll.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.scroll-reveal'));
    if (!('IntersectionObserver' in window)) {
      // Fallback: reveal all
      revealElements.forEach(el => el.classList.add('royal-reveal'));
      return;
    }
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('royal-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach(el => {
      el.classList.remove('royal-reveal');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}
