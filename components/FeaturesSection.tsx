import React from 'react';

const FeaturesSection = () => (
  <section className="container mx-auto px-6 lg:px-12 py-24">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto border border-neutral-300 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-neutral-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl tracking-wider mb-4 font-light">FINEST MATERIALS</h3>
        <p className="text-sm leading-relaxed text-neutral-600">
          We source only the very finest materials from around the world to ensure 
          exceptional quality in every garment.
        </p>
      </div>
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto border border-neutral-300 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-neutral-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl tracking-wider mb-4 font-light">HANDCRAFTED</h3>
        <p className="text-sm leading-relaxed text-neutral-600">
          Old world hand craftsmanship meets modern precision, creating garments of 
          unparalleled quality and attention to detail.
        </p>
      </div>
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto border border-neutral-300 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-neutral-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl tracking-wider mb-4 font-light">PERSONAL SERVICE</h3>
        <p className="text-sm leading-relaxed text-neutral-600">
          Discrete, personal service ensuring every client receives individual attention 
          and a truly bespoke experience.
        </p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
