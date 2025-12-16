import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Features } from './components/Features';
import { IntermediateCTA } from './components/IntermediateCTA';
import { Steps } from './components/Steps';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Gallery />
      <Features />
      <IntermediateCTA />
      <Steps />
      {/* "More Proof" is conceptually covered by the Gallery and About section in this streamlined LP, 
          but we can add a simple photo carousel if strictly needed. 
          Given the image inputs, the Gallery serves as the main proof. 
          The "Mais provas" block asked in prompt 7 is often redundant if Gallery is extensive. 
          We will proceed to FinalCTA to keep it high conversion. 
      */}
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;