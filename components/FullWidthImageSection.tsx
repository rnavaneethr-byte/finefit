import React from 'react';

const FullWidthImageSection = () => (
  <section className="relative h-[600px]">
    <img
      src="images/about1.png"
      alt="Bespoke Process"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
      <div className="text-center text-white max-w-4xl">
        <h2 className="text-5xl lg:text-7xl font-light tracking-wide mb-8">
          The Art of Bespoke
        </h2>
        <p className="text-lg leading-relaxed mb-10 tracking-wide">
          Our passion for discrete, personal service, old world hand craftsmanship, and 
          sourcing of the very finest materials from around the world, continues to deliver 
          clothes of timeless elegance and unparalleled quality.
        </p>
        <button className="border-2 border-white px-12 py-4 text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
          OUR PROCESS
        </button>
      </div>
    </div>
  </section>
);

export default FullWidthImageSection;
