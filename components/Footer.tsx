
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/logo-white.png" alt="FineFit Logo" className="h-12 w-auto mb-6" />
            <p className="text-sm text-neutral-400 leading-relaxed">
              Bespoke tailoring – a personal investment in timeless elegance since 2008.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] mb-4 text-neutral-400">DISCOVER</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/bespoke" className="hover:text-neutral-400 transition">Bespoke Tailoring</a></li>
              <li><a href="/services" className="hover:text-neutral-400 transition">Our Services</a></li>
              <li><a href="/heritage" className="hover:text-neutral-400 transition">Heritage</a></li>
              <li><a href="/contact" className="hover:text-neutral-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] mb-4 text-neutral-400">CONTACT</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-neutral-400">Bahrain</li>
              <li><a href="tel:+00973-17254668" className="hover:text-neutral-400 transition">+00973-17254668</a></li>
              <li><a href="mailto:finefitbh@gmail.com" className="hover:text-neutral-400 transition">finefitbh@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] mb-4 text-neutral-400">STAY CONNECTED</h4>
            <p className="text-sm text-neutral-400 mb-4">Subscribe to our newsletter</p>
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-neutral-600 py-2 text-sm focus:outline-none focus:border-white transition" />
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col items-center text-xs text-neutral-500">
          <div className="flex flex-col md:flex-row w-full justify-between items-center mb-2">
            <p>© 2024 FINFIT. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            </div>
          </div>
          <span className="text-[11px] text-neutral-600 text-center">built by <a href="https://maithri-portfolio-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">maithri</a></span>
        </div>
      </div>
    </footer>
  )
}
