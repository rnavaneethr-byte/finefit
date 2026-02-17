import React from "react";
import useScrollReveal from "../utils/useScrollReveal";

const HeroSection = () => {
  useScrollReveal();
  return (
    <section
      className="relative w-full h-screen bg-cover bg-[center_20%] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 pt-[120px]">
        <p className="italic tracking-widest text-sm mb-2 opacity-80 scroll-reveal" style={{ animationDelay: '0.1s' }}>
          established 2008
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mb-3 drop-shadow-lg scroll-reveal" style={{ animationDelay: '0.2s' }}>
          FineFit
        </h1>


        <h2 className="text-2xl md:text-4xl font-serif mb-6 scroll-reveal" style={{ animationDelay: '0.3s' }}>
          Bespoke Luxury Tailoring
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-white/90 scroll-reveal" style={{ animationDelay: '0.4s' }}>
          Experience the art of custom craftsmanship, where tradition meets modern elegance. Perfect fit, timeless style—tailored just for you.
        </p>

        <a href="/contact" className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition inline-block scroll-reveal" style={{ animationDelay: '0.5s' }}>
          CONTACT US
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
