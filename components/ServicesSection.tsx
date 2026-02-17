import React from 'react';

const ServicesSection = () => (
  <section className="bg-neutral-50 py-24">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="relative group cursor-pointer overflow-hidden">
          <div className="relative h-[500px]">
            <img
              src="/images/suit.webp"
              alt="Suits"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl font-light tracking-wider mb-3 scroll-reveal">Suits</h3>
            
          </div>
        </div>
        {/* Service 2 */}
        <div className="relative group cursor-pointer overflow-hidden">
          <div className="relative h-[500px]">
            <img
              src="/images/about3.webp"
              alt="Shirts"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl font-light tracking-wider mb-3 scroll-reveal">Shirts</h3>
            
          </div>
        </div>
        {/* Service 3 */}
        <div className="relative group cursor-pointer overflow-hidden">
          <div className="relative h-[500px]">
            <img
              src="/images/overcoat.webp"
              alt="Overcoats"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl font-light tracking-wider mb-3 scroll-reveal">Overcoats</h3>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
