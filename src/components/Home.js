import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <h1 className='home'>EPIC</h1>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;