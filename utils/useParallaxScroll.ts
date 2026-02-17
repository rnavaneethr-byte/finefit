import { useEffect } from 'react';

export default function useParallaxScroll() {
  useEffect(() => {
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('.parallax-scroll'));
    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxElements.forEach((el, idx) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.5');
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
