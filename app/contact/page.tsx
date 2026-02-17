'use client';

import React, { useState } from 'react';
import useScrollReveal from '../../utils/useScrollReveal';
import ScrollToTop from '../../components/ScrollToTop';

export default function ContactPage() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert('Thank you! We will contact you shortly.');
      });
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
          <h1 className="text-6xl lg:text-8xl font-light tracking-[0.2em] text-center scroll-reveal">
            CONTACT
          </h1>
          <p className="text-xl lg:text-2xl font-light italic tracking-wide mt-4 scroll-reveal">
            We Look Forward to Welcoming You
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <ScrollToTop />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide mb-8 scroll-reveal">
            Begin Your <em className="text-neutral-600">Journey</em>
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto my-8" />
          <p className="text-lg leading-relaxed text-neutral-700 scroll-reveal">
            Whether you're interested in commissioning a bespoke suit, have questions about our
            services, or simply wish to discuss your tailoring needs, we invite you to get in touch.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="text-3xl font-light tracking-wide mb-8 scroll-reveal">
              Book a Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input type="text" name="name" placeholder="Full Name"
                required value={formData.name} onChange={handleChange}
                className="w-full border-b py-3 bg-transparent" />

              <input type="email" name="email" placeholder="Email"
                required value={formData.email} onChange={handleChange}
                className="w-full border-b py-3 bg-transparent" />

              <input type="tel" name="phone" placeholder="Phone"
                required value={formData.phone} onChange={handleChange}
                className="w-full border-b py-3 bg-transparent" />

              <select name="service" required value={formData.service}
                onChange={handleChange}
                className="w-full border-b py-3 bg-transparent">
                <option value="">Service</option>
                <option>Bespoke Suit</option>
                <option>Bespoke Shirt</option>
                <option>Alterations</option>
              </select>

              <input type="date" name="preferredDate"
                value={formData.preferredDate} onChange={handleChange}
                className="w-full border-b py-3 bg-transparent" />

              <textarea name="message" rows={4}
                placeholder="Message"
                value={formData.message} onChange={handleChange}
                className="w-full border p-3 bg-transparent" />

              <button className="w-full bg-neutral-800 text-white py-4 tracking-[0.2em] hover:bg-neutral-700">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-light mb-6 scroll-reveal">
                Visit Our Store
              </h2>
              <p className="text-lg leading-relaxed">
                Finefit Bespoke Tailoring<br />
                Manama, Bahrain
              </p>
              <p className="mt-4">
                📞 +973 1725 4668 <br />
                ✉️ finefitbh@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ PREMIUM GOOGLE MAP */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">

          <h2 className="text-4xl font-light tracking-wide mb-10 text-center scroll-reveal">
            Find Us on the Map
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] scroll-reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.683052345166!2d50.5764618!3d26.233696799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af5fc482d077%3A0xf5dd9a9e675bc56!2sFINEFIT%20WLL%20(%20Formerly%20-%20Chandra%20Textiles%20Company%20WLL%20)!5e1!3m2!1sen!2sin!4v1771311049626!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Finefit WLL Location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-24 text-center">
        <h2 className="text-5xl font-light mb-6 scroll-reveal">
          Ready to Begin?
        </h2>
        <p className="mb-10 scroll-reveal">
          Contact us today to schedule your consultation.
        </p>

        <a href="tel:+97317254668"
          className="bg-white text-neutral-800 px-12 py-4 tracking-[0.2em]">
          CALL NOW
        </a>
      </section>

    </div>
  );
}
