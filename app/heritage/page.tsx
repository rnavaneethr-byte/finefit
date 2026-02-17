'use client';


import React from 'react';
import useScrollReveal from '../../utils/useScrollReveal';
import ScrollToTop from '../../components/ScrollToTop';

export default function HeritagePage() {
  // useScrollReveal();
  // Parallax scroll handled globally
  return (
    <div className="font-serif text-neutral-800 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh]">
        <img
          src="/images/heritage.webp"
          alt="Heritage"
          className="w-full h-full object-cover parallax-scroll"
          data-parallax-speed="0.3"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-6">
          <p className="text-xs tracking-[0.3em] mb-4 scroll-reveal">SINCE 1970</p>
          <h1 className="text-6xl lg:text-8xl font-light tracking-[0.2em] text-center mb-4 scroll-reveal">
            HERITAGE
          </h1>
          <p className="text-xl lg:text-2xl font-light italic tracking-wide scroll-reveal">
            46 Years of Excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide mb-8 scroll-reveal">
            A Legacy of <em className="text-neutral-600">Craftsmanship</em>
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto my-8" />
          <p className="text-lg leading-relaxed text-neutral-700 mb-6 scroll-reveal">
            The story of Finfit is one of dedication, tradition, and an unwavering commitment to 
            the art of bespoke tailoring. It is a story that spans nearly five decades, beginning 
            in 1970 when our Master Tailor first learned his craft.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 scroll-reveal">
            Today, with 46 years of experience, we continue to honor the great traditions of 
            tailoring while serving the discerning gentlemen of Bahrain.
          </p>
        </div>
      </section>

      {/* Timeline Section - Redesigned */}
      <section className="bg-neutral-900 text-white py-24 relative overflow-hidden">
          <ScrollToTop />
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)',
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] text-neutral-400 mb-4 scroll-reveal">OUR JOURNEY</p>
            <h2 className="text-5xl font-light tracking-wide mb-6 scroll-reveal">
              Five Decades of <em>Mastery</em>
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto scroll-reveal">
              From humble beginnings to recognized excellence
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {/* 1970 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-neutral-800 border-2 border-neutral-600 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-white group-hover:scale-110">
                    <span className="text-2xl font-light">70</span>
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-4 text-neutral-400 group-hover:text-white transition-colors scroll-reveal">1970</h3>
                <h4 className="text-lg tracking-wide mb-3 font-light scroll-reveal">The Beginning</h4>
                <p className="text-sm text-neutral-400 leading-relaxed scroll-reveal">
                  Apprenticeship begins, foundation laid
                </p>
              </div>

              {/* 1980s */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-neutral-800 border-2 border-neutral-600 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-white group-hover:scale-110">
                    <span className="text-2xl font-light">80s</span>
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-4 text-neutral-400 group-hover:text-white transition-colors scroll-reveal">1980s</h3>
                <h4 className="text-lg tracking-wide mb-3 font-light scroll-reveal">Mastery</h4>
                <p className="text-sm text-neutral-400 leading-relaxed scroll-reveal">
                  Excellence achieved, reputation built
                </p>
              </div>

              {/* 1990s */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-neutral-800 border-2 border-neutral-600 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-white group-hover:scale-110">
                    <span className="text-2xl font-light">90s</span>
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-4 text-neutral-400 group-hover:text-white transition-colors scroll-reveal">1990s</h3>
                <h4 className="text-lg tracking-wide mb-3 font-light scroll-reveal">Tradition</h4>
                <p className="text-sm text-neutral-400 leading-relaxed scroll-reveal">
                  Standards set, clients distinguished
                </p>
              </div>

              {/* 2008 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-neutral-800 border-2 border-neutral-600 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-white group-hover:scale-110">
                    <span className="text-2xl font-light">08</span>
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-4 text-neutral-400 group-hover:text-white transition-colors scroll-reveal">2008</h3>
                <h4 className="text-lg tracking-wide mb-3 font-light scroll-reveal">Finfit Born</h4>
                <p className="text-sm text-neutral-400 leading-relaxed scroll-reveal">
                  Bahrain's premier bespoke house
                </p>
              </div>

              {/* Today */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-white border-2 border-white rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <span className="text-2xl font-light text-neutral-900">26</span>
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-4 text-white scroll-reveal">2026</h3>
                <h4 className="text-lg tracking-wide mb-3 font-light scroll-reveal">Today</h4>
                <p className="text-sm text-neutral-400 leading-relaxed scroll-reveal">
                  Legacy continues, future bright
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-light text-neutral-800 mb-2 scroll-reveal">46</div>
              <p className="text-sm tracking-wider text-neutral-600 scroll-reveal">YEARS EXPERTISE</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-light text-neutral-800 mb-2 scroll-reveal">16</div>
                <p className="text-sm tracking-wider text-neutral-600 scroll-reveal">YEARS IN BAHRAIN</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-light text-neutral-800 mb-2 scroll-reveal">∞</div>
                <p className="text-sm tracking-wider text-neutral-600 scroll-reveal">DEDICATION</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-light text-neutral-800 mb-2 scroll-reveal">1</div>
                <p className="text-sm tracking-wider text-neutral-600 scroll-reveal">MASTER TAILOR</p>
            </div>
          </div>
        </div>
      </section>



      {/* Philosophy Section - Redesigned as Cards */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-neutral-500 mb-4 scroll-reveal">OUR BELIEFS</p>
            <h2 className="text-5xl font-light tracking-wide mb-8 scroll-reveal">
              The Philosophy of <em className="text-neutral-600">Finfit</em>
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto scroll-reveal">
              Five principles that guide everything we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-neutral-50 p-8 group hover:bg-neutral-900 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                <svg className="w-8 h-8 text-neutral-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:text-white transition-colors scroll-reveal">Traditional Craftsmanship</h3>
              <p className="text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors scroll-reveal">
                True quality cannot be rushed. Every garment is created using traditional hand-tailoring 
                techniques refined over centuries.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-50 p-8 group hover:bg-neutral-900 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                <svg className="w-8 h-8 text-neutral-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:text-white transition-colors scroll-reveal">Personal Service</h3>
              <p className="text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors scroll-reveal">
                Bespoke tailoring is deeply personal. Our discrete, attentive service ensures individual 
                attention for every client.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-50 p-8 group hover:bg-neutral-900 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                <svg className="w-8 h-8 text-neutral-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:text-white transition-colors scroll-reveal">Finest Materials</h3>
              <p className="text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors scroll-reveal">
                We source only the finest fabrics from around the world. Italian wools, British tweeds, 
                Swiss cottons—the pinnacle of textile craft.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-neutral-50 p-8 group hover:bg-neutral-900 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                <svg className="w-8 h-8 text-neutral-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:text-white transition-colors scroll-reveal">Timeless Elegance</h3>
              <p className="text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors scroll-reveal">
                Fashion changes, but true style is timeless. We create garments that transcend trends, 
                elegant today and decades from now.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-neutral-50 p-8 group hover:bg-neutral-900 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                <svg className="w-8 h-8 text-neutral-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:text-white transition-colors scroll-reveal">Uncompromising Quality</h3>
              <p className="text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors scroll-reveal">
                We maintain exacting standards that have made our name synonymous with exclusive clothing. 
                Every detail executed to perfection.
              </p>
            </div>

            {/* Card 6 - Featured */}
            <div className="bg-neutral-900 p-8 text-white">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 scroll-reveal">Our Promise</h3>
              <p className="text-sm leading-relaxed text-neutral-300 scroll-reveal">
                Every garment carries our 46 years of expertise. We don't just create clothing—we craft 
                confidence, elegance, and lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele - Redesigned */}
      <section className="bg-neutral-100 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] text-neutral-500 mb-4 scroll-reveal">OUR CLIENTS</p>
                <h2 className="text-5xl font-light tracking-wide mb-8 scroll-reveal">
                  Trusted by <em className="text-neutral-600">Distinguished Gentlemen</em>
                </h2>
                <div className="w-24 h-px bg-neutral-300 mb-8" />
                <p className="text-base leading-relaxed text-neutral-700 mb-6 scroll-reveal">
                  Over the years, leading identities from Bahrain and beyond have enjoyed the benefits 
                  of our tailoring skills based on the great traditions.
                </p>
                <p className="text-base leading-relaxed text-neutral-700 scroll-reveal">
                  Our clients include business leaders, diplomats, professionals, and gentlemen who 
                  appreciate the difference that true bespoke tailoring makes.
                </p>
              </div>
              
              <div className="bg-white p-12 shadow-lg">
                <svg className="w-12 h-12 text-neutral-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <blockquote className="text-xl font-light italic text-neutral-800 mb-6 leading-relaxed scroll-reveal">
                  Talk to those who own bespoke clothing made by us. Without doubt they will confirm 
                  that once you have experienced the luxury of our bespoke tailoring, you will never 
                  settle for anything less than the same perfection again.
                </blockquote>
                <div className="text-sm tracking-wider text-neutral-500 scroll-reveal">
                  — FINFIT PROMISE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light tracking-wide mb-8 scroll-reveal">
            Looking <em className="text-neutral-600">Forward</em>
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto my-8" />
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p className="scroll-reveal">
              As we continue into the future, our commitment remains unchanged: to deliver clothes 
              of timeless elegance and unparalleled quality.
            </p>
            <p className="scroll-reveal">
              We honor our heritage while embracing the opportunity to serve new generations of 
              clients who value craftsmanship, quality, and personal service.
            </p>
            <p className="font-medium text-neutral-900 scroll-reveal">
              The traditions that have guided us for 46 years will continue to inspire everything 
              we create, ensuring that Finfit remains synonymous with the very finest in bespoke 
              tailoring.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide mb-6 scroll-reveal">
            Experience Our
            <br />
            <em>Heritage</em>
          </h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed scroll-reveal">
            Visit us to experience firsthand the craftsmanship and tradition that have defined 
            Finfit for over four decades.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-neutral-900 px-12 py-4 text-sm tracking-[0.2em] hover:bg-neutral-100 transition-all duration-300">
              BOOK CONSULTATION
            </button>
            <button className="border border-white px-12 py-4 text-sm tracking-[0.2em] hover:bg-white hover:text-neutral-900 transition-all duration-300">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}