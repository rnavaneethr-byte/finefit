'use client';


import Header from '../components/Header';
import HeroSection from '../components/herosection';
import IntroSection from '../components/IntroSection';
import ServicesSection from '../components/ServicesSection';
import FullWidthImageSection from '../components/FullWidthImageSection';
import HeritageSection from '../components/HeritageSection';
import TestimonialSection from '../components/TestimonialSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';


export default function HomePage() {
  return (
    <div className="font-serif text-neutral-800 bg-white">
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <FullWidthImageSection />
      <HeritageSection />
      <TestimonialSection />
      <FeaturesSection />
      <CTASection />
     
    </div>
  );
}
