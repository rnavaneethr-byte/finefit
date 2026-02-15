import Image from 'next/image';
import Link from 'next/link';

export default function HeritageSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <p className="uppercase tracking-widest text-xs text-gold-700 mb-2 font-serif opacity-80">Since 2008</p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-gray-900 tracking-tight">Our Heritage</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
              For over a decade, FineFit (formerly Chandra Textiles) has been synonymous with luxury bespoke tailoring. Our legacy is built on uncompromising excellence and timeless craftsmanship.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
              Every stitch, every fabric, every detail reflects our commitment to creating garments that transcend fashion and become heirlooms.
            </p>
            <Link href="/about" className="inline-block px-8 py-3 bg-black text-white font-serif text-base rounded-full shadow hover:bg-gold-700 hover:text-white transition-all duration-200">
              Our Story
            </Link>
          </div>
          <div className="relative h-[500px] animate-slideInRight overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/winter-tailoring.jpg"
              alt="Master Tailor at Work"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
