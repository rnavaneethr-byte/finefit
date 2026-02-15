
'use client';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Try to find the first <section> or .hero-section on the page
    let hero = document.querySelector('section, .hero-section');
    if (!hero) {
      setVisible(false);
      return;
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      className={`fixed bottom-7 right-7 z-50 p-3 rounded-full bg-gradient-to-tr from-[#bfa14a] to-[#e7d3a1] shadow-xl border-2 border-[#e7d3a1] text-[#bfa14a] transition-all duration-300 hover:scale-110 hover:shadow-2xl ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ boxShadow: '0 8px 32px 0 #bfa14a33' }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" stroke="#bfa14a" strokeWidth="2" fill="white" />
        <path d="M16 22V10" stroke="#bfa14a" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M10 16L16 10L22 16" stroke="#bfa14a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
