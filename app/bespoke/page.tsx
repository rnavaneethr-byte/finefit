'use client';

import React from 'react';

export default function BespokePage() {
  return (
    <div className="font-serif text-neutral-800 bg-white">

      {/* Hero Section */}
      <section className="relative h-[70vh] mt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        <img
          src="/images/be.png"
          alt="Bespoke Tailoring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <p className="text-xs tracking-[0.3em] mb-4">SINCE 2008</p>
          <h1 className="text-6xl lg:text-8xl font-light tracking-[0.2em] mb-6 text-center">BESPOKE</h1>
          <h2 className="text-3xl lg:text-5xl font-light italic tracking-wide text-center">Tailoring</h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide mb-8">
            The Pinnacle of <em className="text-neutral-600">Personal Style</em>
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto my-8" />
          <p className="text-lg leading-relaxed text-neutral-700 mb-6">
            Bespoke tailoring represents the highest form of sartorial craftsmanship. Every garment 
            is created exclusively for you, cut and constructed by hand to your exact measurements 
            and specifications.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700">
            With 46 years of master tailoring expertise, we create garments that are not merely 
            clothes, but investments in your personal style and confidence.
          </p>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center gap-8 py-12">
          <div className="h-px bg-gradient-to-r from-transparent to-neutral-300 w-full max-w-xs" />
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="h-px bg-gradient-to-l from-transparent to-neutral-300 w-full max-w-xs" />
        </div>
      </div>

      {/* The Process - Horizontal Scroll with Animation */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-neutral-500 mb-4">OUR PROCESS</p>
            <h2 className="text-5xl font-light tracking-wide mb-6">
              The Art of <em>Creation</em>
            </h2>
            <p className="text-base text-neutral-600">
              Six refined steps from vision to masterpiece
            </p>
          </div>

          {/* Horizontal Scrolling Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            
            {/* Scrollable Container */}
            <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex items-start justify-start lg:justify-center min-w-max lg:min-w-0 space-x-8 lg:space-x-16 px-4">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 w-56">
                  <div className="w-32 h-32 bg-white border border-neutral-300 rounded-full flex flex-col items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:border-neutral-800 group-hover:shadow-xl">
                    <span className="text-5xl font-light text-neutral-800 transition-all duration-500 group-hover:scale-110">01</span>
                  </div>
                  <div className="w-12 h-px bg-neutral-800 mb-4 transition-all duration-500 group-hover:w-16" />
                  <h3 className="text-lg tracking-widest mb-3 font-light transition-all duration-500 group-hover:text-neutral-600">CONSULTATION</h3>
                  <p className="text-sm leading-relaxed text-neutral-500 text-center transition-all duration-500 group-hover:text-neutral-700">
                    Understanding your style, lifestyle, and vision
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 w-56">
                  <div className="w-32 h-32 bg-white border border-neutral-300 rounded-full flex flex-col items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:border-neutral-800 group-hover:shadow-xl">
                    <span className="text-5xl font-light text-neutral-800 transition-all duration-500 group-hover:scale-110">02</span>
                  </div>
                  <div className="w-12 h-px bg-neutral-800 mb-4 transition-all duration-500 group-hover:w-16" />
                  <h3 className="text-lg tracking-widest mb-3 font-light transition-all duration-500 group-hover:text-neutral-600">MEASUREMENT</h3>
                  <p className="text-sm leading-relaxed text-neutral-500 text-center transition-all duration-500 group-hover:text-neutral-700">
                    30+ precise measurements for perfect fit
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 w-56">
                  <div className="w-32 h-32 bg-white border border-neutral-300 rounded-full flex flex-col items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:border-neutral-800 group-hover:shadow-xl">
                    <span className="text-5xl font-light text-neutral-800 transition-all duration-500 group-hover:scale-110">03</span>
                  </div>
                  <div className="w-12 h-px bg-neutral-800 mb-4 transition-all duration-500 group-hover:w-16" />
                  <h3 className="text-lg tracking-widest mb-3 font-light transition-all duration-500 group-hover:text-neutral-600">FABRIC</h3>
                  <p className="text-sm leading-relaxed text-neutral-500 text-center transition-all duration-500 group-hover:text-neutral-700">
                    Curated collection of world's finest materials
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 w-56">
                  <div className="w-32 h-32 bg-white border border-neutral-300 rounded-full flex flex-col items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:border-neutral-800 group-hover:shadow-xl">
                    <span className="text-5xl font-light text-neutral-800 transition-all duration-500 group-hover:scale-110">04</span>
                  </div>
                  <div className="w-12 h-px bg-neutral-800 mb-4 transition-all duration-500 group-hover:w-16" />
                  <h3 className="text-lg tracking-widest mb-3 font-light transition-all duration-500 group-hover:text-neutral-600">CUTTING</h3>
                  <p className="text-sm leading-relaxed text-neutral-500 text-center transition-all duration-500 group-hover:text-neutral-700">
                    Hand-drafted pattern unique to you
                  </p>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 w-56">
                  <div className="w-32 h-32 bg-white border border-neutral-300 rounded-full flex flex-col items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:border-neutral-800 group-hover:shadow-xl">
                    <span className="text-5xl font-light text-neutral-800 transition-all duration-500 group-hover:scale-110">05</span>
                  </div>
                  <div className="w-12 h-px bg-neutral-800 mb-4 transition-all duration-500 group-hover:w-16" />
                  <h3 className="text-lg tracking-widest mb-3 font-light transition-all duration-500 group-hover:text-neutral-600">FITTING</h3>
                  <p className="text-sm leading-relaxed text-neutral-500 text-center transition-all duration-500 group-hover:text-neutral-700">
                    Refinement through basted fittings
                  </p>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 w-56">
                  <div className="w-32 h-32 bg-white border border-neutral-300 rounded-full flex flex-col items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:border-neutral-800 group-hover:shadow-xl">
                    <span className="text-5xl font-light text-neutral-800 transition-all duration-500 group-hover:scale-110">06</span>
                  </div>
                  <div className="w-12 h-px bg-neutral-800 mb-4 transition-all duration-500 group-hover:w-16" />
                  <h3 className="text-lg tracking-widest mb-3 font-light transition-all duration-500 group-hover:text-neutral-600">PERFECTION</h3>
                  <p className="text-sm leading-relaxed text-neutral-500 text-center transition-all duration-500 group-hover:text-neutral-700">
                    Hand-finished masterpiece delivered
                  </p>
                </div>

              </div>
            </div>

            {/* Scroll Indicators - Mobile Only */}
            <div className="lg:hidden flex justify-center mt-8 space-x-2">
              <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
            </div>
          </div>

          {/* Timeline Info */}
          <div className="mt-16 text-center">
            <div className="inline-block border-t border-neutral-200 pt-6">
              <p className="text-sm tracking-wider text-neutral-500 mb-2">TIMELINE</p>
              <p className="text-2xl font-light">
                <span className="text-neutral-800">8-10 Weeks</span>
                <span className="text-neutral-400 mx-3">•</span>
                <span className="text-neutral-600 italic">From First Meeting to Final Fitting</span>
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Two Column - What We Offer */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px]">
            <img
              src="/images/suits.jpeg"
              alt="Bespoke Suits"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] text-neutral-500">BESPOKE OFFERING</p>
            <h2 className="text-5xl font-light tracking-wide leading-tight">
              What We<br /><em className="text-neutral-600">Create</em>
            </h2>
            <div className="w-24 h-px bg-neutral-300 my-8" />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl tracking-wide mb-2 font-light">BUSINESS SUITS</h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Two-piece and three-piece suits tailored for the boardroom and beyond.
                </p>
              </div>
              <div>
                <h3 className="text-xl tracking-wide mb-2 font-light">FORMAL WEAR</h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Dinner jackets, morning coats, and black-tie attire for special occasions.
                </p>
              </div>
              <div>
                <h3 className="text-xl tracking-wide mb-2 font-light">SPORTS JACKETS</h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Blazers and sports coats for sophisticated casual elegance.
                </p>
              </div>
              <div>
                <h3 className="text-xl tracking-wide mb-2 font-light">TROUSERS</h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Dress trousers and casual pants crafted to complement your wardrobe.
                </p>
              </div>
              <div>
                <h3 className="text-xl tracking-wide mb-2 font-light">OVERCOATS</h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Topcoats and overcoats that combine warmth with timeless style.
                </p>
              </div>
              <div>
                <h3 className="text-xl tracking-wide mb-2 font-light">BESPOKE SHIRTS</h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Made-to-measure shirts in premium fabrics with your choice of collar and cuff styles.
                </p>
              </div>
            </div>

            <button className="border border-neutral-800 px-10 py-3 text-sm tracking-[0.2em] hover:bg-neutral-800 hover:text-white transition-all duration-300 mt-8">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Full Width Quote */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl lg:text-4xl font-light leading-relaxed italic">
              "A bespoke garment is not merely clothing—it is an extension of your character, 
              crafted with precision and worn with confidence."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & Timeline */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-wide mb-8">
              Investment & <em>Timeline</em>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Bespoke tailoring is an investment in quality that will serve you for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-neutral-200 p-8">
              <h3 className="text-2xl tracking-wider mb-6 font-light text-center">TIMELINE</h3>
              <div className="space-y-4 text-neutral-700">
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span>Initial Consultation</span>
                  <span className="font-light">Day 1</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span>First Fitting</span>
                  <span className="font-light">3-4 Weeks</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span>Final Fitting</span>
                  <span className="font-light">6-8 Weeks</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="font-medium">Completion</span>
                  <span className="font-medium">8-10 Weeks</span>
                </div>
              </div>
            </div>

            <div className="border border-neutral-200 p-8">
              <h3 className="text-2xl tracking-wider mb-6 font-light text-center">INVESTMENT</h3>
              <div className="space-y-4 text-neutral-700">
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span>Two-Piece Suit</span>
                  <span className="font-light">From BD 450</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span>Three-Piece Suit</span>
                  <span className="font-light">From BD 550</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span>Sports Jacket</span>
                  <span className="font-light">From BD 300</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span>Overcoat</span>
                  <span className="font-light">From BD 400</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Bespoke Shirt</span>
                  <span className="font-light">From BD 80</span>
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-6 text-center">
                *Prices vary based on fabric selection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-100 py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide mb-6">
            Begin Your<br /><em className="text-neutral-600">Bespoke Journey</em>
          </h2>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation with our master tailor to discuss your requirements and 
            experience the art of true bespoke tailoring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-neutral-800 text-white px-12 py-4 text-sm tracking-[0.2em] hover:bg-neutral-700 transition-all duration-300">
              BOOK CONSULTATION
            </button>
            <button className="border border-neutral-800 px-12 py-4 text-sm tracking-[0.2em] hover:bg-neutral-800 hover:text-white transition-all duration-300">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}