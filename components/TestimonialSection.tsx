import React from 'react';

const TestimonialSection = () => (
  <section className="bg-neutral-900 text-white py-24">
    <div className="container mx-auto px-6 lg:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <svg
          className="w-12 h-12 mx-auto mb-8 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic">
          Once you have experienced the luxury of our bespoke tailoring and shirt making, 
          you will never settle for anything less than the same perfection again.
        </p>
        <div className="w-16 h-px bg-white mx-auto opacity-50" />
      </div>
    </div>
  </section>
);

export default TestimonialSection;
