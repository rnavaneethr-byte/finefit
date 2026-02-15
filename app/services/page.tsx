'use client';


import Image from 'next/image'
import Link from 'next/link'
import useScrollReveal from '../../utils/useScrollReveal';
import ScrollToTop from '../../components/ScrollToTop';

export default function ServicesPage() {
  useScrollReveal();
  const services = [
    {
      title: 'Bespoke Suits',
      description: 'Experience the ultimate in personalized tailoring with our fully bespoke suits. Every detail is crafted to your exact specifications, from fabric selection to button choice.',
      features: [
        'Individual pattern creation',
        'Minimum 3 fittings',
        'Hand-stitched details',
        'Premium fabric selection',
        'Personalized styling consultation',
      ],
      image: '/images/services2.jpg',
      duration: '6-8 weeks',
    },
    {
      title: 'Made-to-Measure',
      description: 'Perfect for those who want a superior fit without the wait of full bespoke. We adjust our proven patterns to your measurements for an excellent fit.',
      features: [
        'Adjusted master patterns',
        '2 fittings included',
        'Wide fabric range',
        'Style customization',
        'Quality construction',
      ],
      image: '/images/services3.jpg',
      duration: '4-6 weeks',
    },
    {
      title: 'Shirt Tailoring',
      description: 'Custom shirts tailored to perfection. Choose from our collection of premium fabrics and customize every detail from collar to cuff.',
      features: [
        'Custom measurements',
        'Collar & cuff options',
        'Monogram service',
        'Fine fabric selection',
        'Perfect fit guarantee',
      ],
      image: '/images/services4.jpeg',
      duration: '3-4 weeks',
    },
    {
      title: 'Alterations & Repairs',
      description: 'Expert alterations to ensure your existing garments fit perfectly. From simple hemming to complex restructuring.',
      features: [
        'Same-day service available',
        'Professional pressing',
        'Invisible mending',
        'Resizing & reshaping',
        'Damage repair',
      ],
      image: '/images/services5.png',
      duration: '1-2 weeks',
    },
    {
      title: 'Wedding Attire',
      description: 'Look your best on your special day with our wedding tailoring service. Complete bridal party coordination available.',
      features: [
        'Groom & groomsmen packages',
        'Traditional & contemporary styles',
        'Rush service available',
        'Complimentary fittings',
        'Preservation service',
      ],
      image: '/images/services6.png',
      duration: '8-10 weeks',
    },
    {
      title: 'Formalwear',
      description: 'From tuxedos to evening wear, we create sophisticated formal attire for any occasion.',
      features: [
        'Classic & modern styles',
        'Premium formal fabrics',
        'Accessory coordination',
        'Expert styling advice',
        'Rental service available',
      ],
      image: '/images/services7.jpg',
      duration: '5-7 weeks',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/service.png"
          alt="Our Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-xs tracking-[0.3em] mb-4 text-neutral-300 scroll-reveal">WHAT WE OFFER</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide scroll-reveal">Our Services</h1>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
          <ScrollToTop />
        <div className="space-y-32">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border border-neutral-300 pointer-events-none" />
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="mb-6">
                  <span className="text-xs tracking-[0.3em] text-neutral-500">SERVICE {String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-6 text-neutral-900 scroll-reveal">
                  {service.title}
                </h2>
                <div className="w-16 h-px bg-neutral-300 mb-6" />
                <p className="text-neutral-600 mb-8 leading-relaxed text-base scroll-reveal">
                  {service.description}
                </p>
                
                {/* Features List - Clean Design */}
                <div className="mb-8 space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start text-neutral-700">
                      <div className="w-1 h-1 bg-neutral-800 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <span className="text-sm leading-relaxed scroll-reveal">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Timeline */}
                <div className="flex items-center mb-8 pb-6 border-b border-neutral-200">
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 scroll-reveal">Timeline</p>
                    <p className="text-lg font-light text-neutral-900 scroll-reveal">{service.duration}</p>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-block border border-neutral-800 px-10 py-3 text-sm tracking-[0.2em] hover:bg-neutral-800 hover:text-white transition-all duration-300"
                >
                  BOOK CONSULTATION
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 text-center bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wide mb-6 scroll-reveal">
            Ready to Get Started?
          </h2>
          <div className="w-24 h-px bg-white mx-auto my-8 opacity-50" />
          <p className="text-lg mb-10 text-neutral-300 leading-relaxed max-w-2xl mx-auto scroll-reveal">
            Schedule a consultation with our master tailors and experience the art of bespoke tailoring
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-neutral-900 px-12 py-4 text-sm tracking-[0.2em] hover:bg-neutral-100 transition-all duration-300"
          >
            CONTACT US TODAY
          </Link>
        </div>
      </section>
      {/* Thin divider */}
<div className="h-px bg-neutral-700" />
    </>
  )
}