import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Features } from './components/Features';
import { IntermediateCTA } from './components/IntermediateCTA';
import { Steps } from './components/Steps';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Features />
      <IntermediateCTA />
      <Steps />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;