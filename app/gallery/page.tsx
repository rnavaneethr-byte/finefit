import Image from 'next/image'
import Link from 'next/link'

export default function GalleryPage() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800',
      alt: 'Classic Navy Bespoke Suit',
      category: 'Suits'
    },
    {
      src: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=800',
      alt: 'Grey Three-Piece Suit',
      category: 'Suits'
    },
    {
      src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800',
      alt: 'Charcoal Business Suit',
      category: 'Suits'
    },
    {
      src: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800',
      alt: 'Custom Dress Shirts',
      category: 'Shirts'
    },
    {
      src: 'https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=800',
      alt: 'Fabric Rolls',
      category: 'Fabrics'
    },
    {
      src: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=800',
      alt: 'Workshop Details',
      category: 'Workshop'
    },
    {
      src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=800',
      alt: 'Wedding Tuxedo',
      category: 'Formalwear'
    },
    {
      src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800',
      alt: 'Master Tailor at Work',
      category: 'Workshop'
    },
    {
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800',
      alt: 'Luxury Suit Detail',
      category: 'Suits'
    },
    {
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
      alt: 'Measuring and Fitting',
      category: 'Workshop'
    },
    {
      src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800',
      alt: 'Brown Tweed Suit',
      category: 'Suits'
    },
    {
      src: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=800',
      alt: 'Premium Fabric Swatches',
      category: 'Fabrics'
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2086"
          alt="Gallery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fadeInUp">
            <p className="section-subtitle" style={{ color: '#C8A16F' }}>Our Work</p>
            <h1 className="font-serif text-5xl md:text-6xl">Gallery</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center animate-fadeInUp">
        <div className="mb-6 inline-block">
          <div className="luxury-line mx-auto" />
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore our collection of bespoke tailoring masterpieces. Each piece represents 
          our commitment to excellence, craftsmanship, and timeless elegance.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-[3/4] cursor-pointer rounded-lg shadow-lg hover-lift animate-fadeInUp" style={{ animationDelay: `${idx * 0.05}s` }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#C8A16F' }}>
                  {image.category}
                </p>
                <h3 className="text-lg font-serif text-white leading-tight">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <p className="section-subtitle">Collections</p>
            <h2 className="section-title">Browse by Category</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {['Suits', 'Shirts', 'Formalwear', 'Workshop'].map((category, idx) => (
              <div key={idx} className="relative overflow-hidden bg-white rounded-lg p-8 text-center hover-lift group animate-fadeInUp shadow-md" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: 'linear-gradient(90deg, #C8A16F 0%, #D9B080 100%)' }} />
                <h3 className="font-serif text-2xl text-gray-900 mb-2 transition-colors duration-300" style={{ '--hover-color': '#C8A16F' } as any}>{category}</h3>
                <p className="text-gray-600 text-sm transition-colors duration-300" style={{ '--hover-color': '#C8A16F' } as any}>Explore Collection →</p>
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
          <h2 className="font-serif text-4xl md:text-5xl mb-6 animate-fadeInUp">
            Create Your Masterpiece
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Let us craft a bespoke garment that reflects your unique style and personality
          </p>
          <Link href="/contact" className="btn-primary inline-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
