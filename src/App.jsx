import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import CraftedForExcellence from './components/CraftedForExcellence';
import CollectionsShowcase from './components/CollectionsShowcase';
import CollectionCategoryPage from './components/CollectionCategoryPage';
import OwnerStory from './components/OwnerStory';
import VideoShowcase from './components/VideoShowcase';
import ContactAndLocation from './components/ContactAndLocation';
import WhatsAppWidget from './components/WhatsAppWidget';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Sync hash routing e.g. #collections/barstool
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#category-')) {
        const cat = hash.replace('#category-', '');
        setActiveCategory(cat);
      } else if (hash === '#carousel-hero' || hash === '#home' || hash === '#about' || hash === '#workshop' || hash === '') {
        setActiveCategory(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectCategory = (key) => {
    setActiveCategory(key);
    if (key) {
      window.location.hash = `category-${key}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = 'carousel-hero';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Animated Preloader matching Brand Theme */}
      {loading && <Preloader onLoaded={() => setLoading(false)} />}

      {/* Top Phone & Location Bar */}
      <TopBar />

      {/* Main Navigation Bar with COLLECTION dropdown menu */}
      <Navbar 
        onOpenQuoteModal={() => setQuoteModalOpen(true)} 
        onSelectCategory={handleSelectCategory}
        activeCategory={activeCategory}
      />

      <main style={{ paddingBottom: 0 }}>
        {activeCategory ? (
          /* Dedicated Collection Category Page matching Promax template screenshot */
          <CollectionCategoryPage 
            categoryKey={activeCategory} 
            onNavigateBack={() => handleSelectCategory(null)} 
          />
        ) : (
          /* Main Home Page Layout */
          <>
            {/* Section 1: Hero Carousel with Editorial Typography & 6 Dots */}
            <HeroCarousel />

            {/* Section 2: Crafted for Excellence - Where Design Meets Performance */}
            <CraftedForExcellence />

            {/* Section 3: Explore Our Collections Banner Cards */}
            <CollectionsShowcase onSelectCategory={handleSelectCategory} />

            {/* Section 4: Owner's Story - 2 Friends, 400+ Orders Journey */}
            <OwnerStory />

            {/* Section 5: Direct From Our Bengaluru Workshop (Command Center Video Showcase) */}
            <VideoShowcase />

            {/* Section 6: Location & Storefront */}
            <ContactAndLocation />
          </>
        )}
      </main>

      <Footer />

      {/* Floating WhatsApp Icon */}
      <WhatsAppWidget />

      {/* Fixed Mobile Bottom Navigation Bar matching Template Screenshot */}
      <MobileBottomNav />

      {/* Quick Quote Popup Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
