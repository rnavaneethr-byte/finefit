import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-[center_20%] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 pt-[120px]">
        <p className="italic tracking-widest text-sm mb-2 opacity-80">
          established 2008
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mb-3 drop-shadow-lg">
          FineFit
        </h1>

        <h2 className="text-2xl md:text-4xl font-serif mb-6">
          Winter Tailoring
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-white/90">
          From staple overcoats to expertly tailored suiting,
          discover winter tailoring made for the season’s demands.
        </p>

        <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
