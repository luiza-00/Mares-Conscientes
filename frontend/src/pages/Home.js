// src/pages/Home.js
import React from 'react';
import Navbar from '../components/common/Nav/Navbar.js';
import ImageCarousel from '../components/common/Carrossel/ImageCarousel.js';
import HeroSection from '../components/sections/HomeSection/HomeSection';
import AboutUsSection from '../components/sections/AboutUsSection/AboutUsSection';
import SponsorSection from '../components/sections/SponsorSection/SponsorSection.js';
import Footer from '../components/footer/Footer';
function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ImageCarousel/>
      <SponsorSection />
      <Footer />
    </div>
  );
}

export default Home;