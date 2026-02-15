import React from 'react';

const CTASection = () => (
  <section className="bg-neutral-100 py-24">
    <div className="container mx-auto px-6 lg:px-12 text-center">
      <h2 className="text-5xl lg:text-6xl font-light tracking-wide mb-6 scroll-reveal">
        Begin Your
        <br />
        <em className="text-neutral-600">Bespoke Journey</em>
      </h2>
      <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed scroll-reveal">
        Visit our store or contact us to discuss your requirements and experience the 
        luxury of true bespoke tailoring.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/contact" className="bg-neutral-800 text-white px-12 py-4 text-sm tracking-[0.2em] hover:bg-neutral-700 transition-all duration-300 inline-block">
          BOOK CONSULTATION
        </a>
        <a href="/contact" className="border border-neutral-800 px-12 py-4 text-sm tracking-[0.2em] hover:bg-neutral-800 hover:text-white transition-all duration-300 inline-block">
          CONTACT US
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
