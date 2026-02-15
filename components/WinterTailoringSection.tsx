import Image from 'next/image';

export default function WinterTailoringSection() {
  return (
    <section className="winter-tailoring-section bg-[#f5f4f2] py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        <div className="md:w-1/2 w-full flex flex-col items-start">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-gray-900 tracking-tight">Winter Tailoring</h2>
          <p className="font-sans text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            From staple overcoats to expertly tailored suiting, discover winter tailoring made for the season’s demands.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="/contact" className="px-6 py-3 bg-black text-white font-medium rounded-full text-base hover:bg-gray-800 transition">CONTACT US</a>
            <a href="/contact" className="px-6 py-3 border border-black text-black font-medium rounded-full text-base hover:bg-gray-100 transition">BOOK APPOINTMENT</a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <a href="#" className="underline hover:text-black">London</a>
            <span className="mx-2">|</span>
            <a href="#" className="underline hover:text-black">New York</a>
            <span className="mx-2">|</span>
            <a href="#" className="underline hover:text-black">Trunk Shows</a>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src="/images/winter-tailoring.jpg"
            alt="Winter Tailoring Collection"
            width={600}
            height={800}
            className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[500px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
