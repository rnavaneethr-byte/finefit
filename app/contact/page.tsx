'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you shortly.');
  };

  return (
    <div className="font-serif text-neutral-800 bg-white">


      {/* Hero */}
      <section className="relative h-[50vh]">
        <img
          src="/images/contact.png"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-6xl lg:text-8xl font-light tracking-[0.2em] text-center">
            CONTACT
          </h1>
          <p className="text-xl lg:text-2xl font-light italic tracking-wide mt-4">
            We Look Forward to Welcoming You
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide mb-8">
            Begin Your <em className="text-neutral-600">Journey</em>
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto my-8" />
          <p className="text-lg leading-relaxed text-neutral-700">
            Whether you're interested in commissioning a bespoke suit, have questions about our 
            services, or simply wish to discuss your tailoring needs, we invite you to get in touch. 
            Our team is here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-8">Book a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wider mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-neutral-300 py-3 px-0 focus:outline-none focus:border-neutral-800 transition bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-wider mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-neutral-300 py-3 px-0 focus:outline-none focus:border-neutral-800 transition bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm tracking-wider mb-2">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-neutral-300 py-3 px-0 focus:outline-none focus:border-neutral-800 transition bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm tracking-wider mb-2">
                    SERVICE INTERESTED IN *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-b border-neutral-300 py-3 px-0 focus:outline-none focus:border-neutral-800 transition bg-transparent"
                  >
                    <option value="">Please select</option>
                    <option value="bespoke-suit">Bespoke Suit</option>
                    <option value="bespoke-shirt">Bespoke Shirt</option>
                    <option value="sports-jacket">Sports Jacket</option>
                    <option value="trousers">Trousers</option>
                    <option value="overcoat">Overcoat</option>
                    <option value="formal-wear">Formal Wear</option>
                    <option value="alterations">Alterations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm tracking-wider mb-2">
                    PREFERRED APPOINTMENT DATE
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full border-b border-neutral-300 py-3 px-0 focus:outline-none focus:border-neutral-800 transition bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wider mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 py-3 px-4 focus:outline-none focus:border-neutral-800 transition bg-transparent resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-neutral-800 text-white py-4 text-sm tracking-[0.2em] hover:bg-neutral-700 transition-all duration-300"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-light tracking-wide mb-8">Visit Our Store</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs tracking-[0.2em] text-neutral-500 mb-2">LOCATION</h3>
                    <p className="text-lg leading-relaxed">
                      Finfit Bespoke Tailoring
                      <br />
                      Manama, Bahrain
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-[0.2em] text-neutral-500 mb-2">OPENING HOURS</h3>
                    <div className="text-base space-y-1">
                      <p className="flex justify-between max-w-xs">
                        <span>Saturday - Thursday</span>
                        <span className="font-light">9:00 AM - 8:00 PM</span>
                      </p>
                      <p className="flex justify-between max-w-xs">
                        <span>Friday</span>
                        <span className="font-light">2:00 PM - 8:00 PM</span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-[0.2em] text-neutral-500 mb-2">CONTACT</h3>
                    <div className="space-y-2 text-base">
                      <p>
                        <a href="tel:+97317123456" className="hover:text-neutral-600 transition">
                          +973 1712 3456
                        </a>
                      </p>
                      <p>
                        <a href="mailto:info@finfit.com" className="hover:text-neutral-600 transition">
                          info@finfit.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-12">
                <h3 className="text-2xl font-light tracking-wide mb-6">What to Expect</h3>
                <div className="space-y-4 text-base leading-relaxed text-neutral-700">
                  <p>
                    During your initial consultation, we'll discuss your requirements, lifestyle, 
                    and preferences. This typically takes 45-60 minutes.
                  </p>
                  <p>
                    You'll have the opportunity to explore our extensive fabric collection and 
                    review style options with our master tailor.
                  </p>
                  <p>
                    We'll take detailed measurements and discuss the timeline for your bespoke 
                    garment, which typically requires 8-10 weeks for completion.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-800 text-white p-8">
                <h3 className="text-xl tracking-wider mb-4 font-light">APPOINTMENTS RECOMMENDED</h3>
                <p className="text-sm leading-relaxed text-neutral-300">
                  While walk-ins are welcome, we recommend booking an appointment to ensure our 
                  master tailor can give you his undivided attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="h-[500px] bg-neutral-200">
        <div className="w-full h-full flex items-center justify-center text-neutral-500">
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-sm tracking-wider">
              [Google Maps Integration]
              <br />
              <span className="text-xs">Add your store location coordinates</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today to schedule your consultation and experience the art of bespoke tailoring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+97317123456"
              className="bg-white text-neutral-800 px-12 py-4 text-sm tracking-[0.2em] hover:bg-neutral-100 transition-all duration-300"
            >
              CALL NOW
            </a>
            <a
              href="mailto:info@finfit.com"
              className="border border-white px-12 py-4 text-sm tracking-[0.2em] hover:bg-white hover:text-neutral-800 transition-all duration-300"
            >
              SEND EMAIL
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
