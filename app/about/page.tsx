"use client";
import Image from 'next/image'
import Link from 'next/link'
import useScrollReveal from '../../utils/useScrollReveal';
import ScrollToTop from '../../components/ScrollToTop';
export default function AboutPage() {
  // useScrollReveal();
  // Parallax scroll handled globally
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/about1.webp"
          alt="About FineFit"
          fill
          className="object-cover parallax-scroll"
          data-parallax-speed="0.3"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fadeInUp">
            <p className="section-subtitle scroll-reveal" style={{ color: '#C8A16F' }}>Our Story</p>
            <h1 className="font-serif text-5xl md:text-6xl scroll-reveal">About FineFit</h1>
          </div>
        </div>
      </section>

      {/* Timeline - Our Story */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <p className="section-subtitle scroll-reveal">Our Heritage</p>
              <h2 className="section-title scroll-reveal">A Journey of Excellence</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg scroll-reveal">
                  Founded in 1989 as Chandra Textiles, our brand has evolved into FineFit—a testament 
                  to our commitment to timeless elegance and uncompromising craftsmanship.
                </p>
                <p className="text-lg scroll-reveal">
                  What began as a modest tailoring house has flourished into a luxury atelier serving 
                  discerning clients who understand that true style is measured in precision and quality.
                </p>
                <p className="text-lg scroll-reveal">
                  Every suit we create carries with it the weight of tradition, the precision of technique, 
                  and the promise of a garment that will outlive fleeting trends.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] animate-slideInRight overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                alt="Master Tailor"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="section-subtitle scroll-reveal">What We Stand For</p>
            <h2 className="section-title scroll-reveal">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4 scroll-reveal">
              These principles guide every decision we make and every stitch we place
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Craftsmanship',
                description: 'Every garment is a masterpiece of precision, hand-crafted with meticulous attention to detail by our expert artisans who treat each suit as a personal creation.',
              },
              {
                icon: '✨',
                title: 'Premium Quality',
                description: 'We source only the finest fabrics from renowned mills worldwide, ensuring that each thread meets our exacting standards for luxury and longevity.',
              },
              {
                icon: '📚',
                title: 'Heritage & Innovation',
                description: 'We honor time-tested tailoring techniques while embracing modern design sensibilities, blending tradition with contemporary elegance.',
              },
            ].map((value, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg p-8 bg-white shadow-lg hover-lift animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-start">
                  <div className="text-5xl mb-4">{value.icon}</div>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-gray-900 scroll-reveal">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed scroll-reveal">{value.description}</p>
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'linear-gradient(180deg, #C8A16F 0%, #D9B080 100%)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-4">
          <ScrollToTop />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="section-subtitle scroll-reveal">Meet Our Team</p>
            <h2 className="section-title scroll-reveal">Master Artisans</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4 scroll-reveal">
              Decades of combined experience in luxury bespoke tailoring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Rajesh Kumar', 
                role: 'Master Tailor', 
                bio: '35+ years of tailoring expertise',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' 
              },
              { 
                name: 'Anita Singh', 
                role: 'Design Consultant', 
                bio: 'Fashion visionary and style expert',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400' 
              },
              { 
                name: 'Vikram Patel', 
                role: 'Senior Artisan', 
                bio: '28 years in bespoke craftsmanship',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' 
              },
            ].map((member, idx) => (
              <div key={idx} className="group animate-fadeInUp hover-lift" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative h-96 mb-6 overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-serif text-2xl text-gray-900 mb-1 scroll-reveal">{member.name}</h3>
                <p className="font-semibold mb-2 uppercase tracking-widest text-sm scroll-reveal" style={{ color: '#C8A16F' }}>{member.role}</p>
                <p className="text-gray-600 scroll-reveal">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: 'rgba(200, 161, 111, 0.2)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-1/2 -translate-x-1/2" style={{ backgroundColor: 'rgba(200, 161, 111, 0.2)' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '35+', label: 'Years of Excellence' },
              { number: '5000+', label: 'Happy Clients' },
              { number: '10K+', label: 'Garments Crafted' },
              { number: '100%', label: 'Handmade' },
            ].map((stat, idx) => (
              <div key={idx} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl font-serif mb-2 scroll-reveal" style={{ color: '#C8A16F' }}>{stat.number}</div>
                <p className="text-gray-300 uppercase tracking-widest text-xs scroll-reveal">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="luxury-line mx-auto" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 animate-fadeInUp scroll-reveal">
            Experience Our Craftsmanship
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fadeInUp scroll-reveal" style={{ animationDelay: '0.1s' }}>
            Ready to start your bespoke tailoring journey?
          </p>
          <Link href="/contact" className="btn-primary inline-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
