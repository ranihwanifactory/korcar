import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Inventory from './components/Inventory';
import AICarAdvisor from './components/AICarAdvisor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-blue-500 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Inventory />
        <AICarAdvisor />
      </main>
      <Footer />
    </div>
  );
};

export default App;