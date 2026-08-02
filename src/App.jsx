import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import CraftsmanshipGrid from './components/CraftsmanshipGrid';
import CraftsmanshipCycle from './components/CraftsmanshipCycle';
import VideoShowcase from './components/VideoShowcase';
import InteractiveCatalog from './components/InteractiveCatalog';
import ContactAndLocation from './components/ContactAndLocation';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div>
      {/* Animated Preloader matching Template Screenshot 2 */}
      {loading && <Preloader onLoaded={() => setLoading(false)} />}

      {/* Main Website Content */}
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main>
        {/* Full-width Carousel Hero — 5 AI-branded slides */}
        <HeroCarousel />

        {/* Split Hero detail section */}
        <Hero onOpenQuoteModal={() => setQuoteModalOpen(true)} />

        <Philosophy />
        <CraftsmanshipGrid />

        {/* "Engineering in Motion" Craftsmanship Cycle section */}
        <CraftsmanshipCycle />

        <VideoShowcase />
        <InteractiveCatalog onOpenQuoteModal={() => setQuoteModalOpen(true)} />

        {/* Full Catalogue Gallery — all 18 PDF pages at 4K */}
        <ContactAndLocation />
      </main>

      <Footer />

      {/* Floating WhatsApp Action matching Screenshots */}
      <WhatsAppWidget />

      {/* Quick Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
