import Image from 'next/image';
import Link from 'next/link';

export default function LocationsShowcase() {
  return (
    <section className="locations-showcase w-full bg-black py-0">
      <div className="w-full">
        <div className="flex flex-col md:flex-row w-full">
          {/* London */}
          <Link href="#" className="relative w-full md:w-1/3 h-[600px] md:h-[700px] group overflow-hidden border-r border-white/20">
            <Image
              src="/images/about1.png"
              alt="London Savile Row Tailoring"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
              <p className="text-[11px] tracking-[0.3em] mb-6 font-light uppercase">OUR LOCATIONS</p>
              <h2 className="text-6xl md:text-7xl font-normal mb-4 tracking-tight leading-none">LONDON</h2>
              <p className="text-2xl md:text-3xl font-light mb-6 tracking-wide">Savile Row</p>
              <div className="w-12 h-[1px] bg-white/30 my-6"></div>
              <p className="italic text-xl md:text-2xl font-light mb-10 tracking-wide">Bespoke Tailoring</p>
              <span className="text-[11px] tracking-[0.25em] uppercase font-normal hover:opacity-70 transition-opacity">DISCOVER NOW</span>
            </div>
          </Link>

          {/* New York */}
          <Link href="#" className="relative w-full md:w-1/3 h-[600px] md:h-[700px] group overflow-hidden border-r border-white/20">
            <Image
              src="/images/about2.png"
              alt="New York W57th St Tailoring"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
              <p className="text-[11px] tracking-[0.3em] mb-6 font-light uppercase">OUR LOCATIONS</p>
              <h2 className="text-6xl md:text-7xl font-normal mb-4 tracking-tight leading-none">NEW YORK</h2>
              <p className="text-2xl md:text-3xl font-light mb-6 tracking-wide">W.57th St</p>
              <div className="w-12 h-[1px] bg-white/30 my-6"></div>
              <p className="italic text-xl md:text-2xl font-light mb-10 tracking-wide">Bespoke Tailoring</p>
              <span className="text-[11px] tracking-[0.25em] uppercase font-normal hover:opacity-70 transition-opacity">DISCOVER NOW</span>
            </div>
          </Link>

          {/* Trunk Shows */}
          <Link href="#" className="relative w-full md:w-1/3 h-[600px] md:h-[700px] group overflow-hidden">
            <Image
              src="/images/about3.png"
              alt="Trunk Shows Globe"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
              <p className="text-[11px] tracking-[0.3em] mb-6 font-light uppercase">OUR LOCATIONS</p>
              <h2 className="text-5xl md:text-6xl font-normal mb-4 tracking-tight leading-none">TRUNK SHOWS</h2>
              <p className="text-2xl md:text-3xl font-light mb-6 tracking-wide">Dates & Locations</p>
              <div className="w-12 h-[1px] bg-white/30 my-6"></div>
              <p className="italic text-xl md:text-2xl font-light mb-10 tracking-wide opacity-0">Placeholder</p>
              <span className="text-[11px] tracking-[0.25em] uppercase font-normal hover:opacity-70 transition-opacity">DISCOVER NOW</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}