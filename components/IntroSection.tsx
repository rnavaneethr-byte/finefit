import React from 'react';

const IntroSection = () => (
  <section className="container mx-auto px-6 lg:px-12 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000"
          alt="Master Tailor at Work"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xs tracking-[0.3em] text-neutral-500 scroll-reveal">OUR LOCATIONS</p>
        <h2 className="text-5xl font-light tracking-wide scroll-reveal">BAHRAIN</h2>
        <h3 className="text-3xl font-light italic tracking-wide scroll-reveal">Bespoke Tailoring</h3>
        <div className="w-24 h-px bg-neutral-300 my-8" />
        <p className="text-base leading-relaxed text-neutral-700 scroll-reveal">
          Since 2008, Finfit has provided bespoke tailoring services to discerning gentlemen 
          throughout Bahrain. Our Director and Master Tailor celebrates his 46th year in bespoke 
          tailoring, having started working in the business since 1970.
        </p>
        <p className="text-base leading-relaxed text-neutral-700 scroll-reveal">
          We have assiduously maintained the exacting standards, the quality, the cut, the style 
          and the fit that has made our name synonymous with exclusive clothing.
        </p>
        <a href="/contact" className="border border-neutral-800 px-10 py-3 text-sm tracking-[0.2em] hover:bg-neutral-800 hover:text-white transition-all duration-300 mt-8 inline-block">
          CONTACT US
        </a>
      </div>
    </div>
  </section>
);

export default IntroSection;
