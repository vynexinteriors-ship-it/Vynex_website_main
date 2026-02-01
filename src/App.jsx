import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ValueStrip from './components/ValueStrip.jsx';
import DesignSession from './components/DesignSession.jsx';
import JourneySteps from './components/JourneySteps.jsx';
import SolutionsGrid from './components/SolutionsGrid.jsx';
import Galleries from './components/Galleries.jsx';
import PriceTeaser from './components/PriceTeaser.jsx';
import ReferralBanner from './components/ReferralBanner.jsx';
import FAQ from './components/FAQ.jsx';
import TrustBand from './components/TrustBand.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <ValueStrip />
      <DesignSession />
      <JourneySteps />
      <SolutionsGrid />
      <Galleries />
      <PriceTeaser />
      <ReferralBanner />
      <FAQ />
      <TrustBand />
    </main>
    <Footer />
  </>
);

export default App;
