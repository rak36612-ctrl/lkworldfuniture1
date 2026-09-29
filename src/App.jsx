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

  // Sync hash routing e.g. #categories and dynamic SEO metadata
  useEffect(() => {
    const SEO_MAP = {
      'executive-chairs': {
        title: 'Executive Chairs in Bengaluru | Ergonomic High-Back Seating - LK Furniture World1',
        description: 'Explore high-back luxury leatherette and mesh executive chairs in Bengaluru manufactured with synchronized tilt and chrome swivel base.'
      },
      'boss-chairs': {
        title: 'Boss Chairs in Bangalore | Luxury Command Seating - LK Furniture World1',
        description: 'Command suite luxury boss chairs for CEOs, directors, and leaders in Bengaluru. Direct factory showroom on Mysore Road.'
      },
      'office-workstation': {
        title: 'Office & Workstation Chairs Bangalore | Ergonomic Task Seating - LK Furniture World1',
        description: 'Ergonomic office workstation chairs with breathable mesh, lumbar support, and 3D armrests in Bengaluru. Bulk corporate orders.'
      },
      'boardstation-chairs': {
        title: 'Boardstation & Boardroom Chairs Bengaluru | LK Furniture World1',
        description: 'Executive conference and boardroom chairs in Bangalore. Premium leatherette and chrome finishes on Mysore Road.'
      },
      'visitor-chairs': {
        title: 'Visitor & Guest Chairs in Bengaluru | Cantilever Seating - LK Furniture World1',
        description: 'Commercial visitor and consultation chairs for corporate offices, reception desks, and institutions in Bangalore.'
      },
      'waiting-chairs': {
        title: 'Waiting Chairs & Steel Benches Bengaluru | LK Furniture World1',
        description: 'Heavy-duty 3-seater and 4-seater stainless steel waiting benches for hospitals, airports, and public lobbies in Bangalore.'
      },
      'lounge': {
        title: 'Lounge Chairs & Reception Armchairs Bangalore | LK Furniture World1',
        description: 'Luxury upholstered velvet and leatherette accent lounge chairs for corporate lobbies, hotels, and executive waiting rooms.'
      },
      'school-desks': {
        title: 'School Desks & Student Benches Manufacturer Bangalore | LK Furniture World1',
        description: 'Heavy-duty classroom desks and dual student benches for schools and colleges in Bengaluru. Factory direct prices.'
      },
      'bunker-cot-beds': {
        title: 'Steel Bunker Cot Beds Hostel & PG Bangalore | LK Furniture World1',
        description: 'Dual-tier heavy-duty metal bunk beds for hostels, dormitories, and PG accommodations across Bengaluru.'
      },
      'writing-pad-chairs': {
        title: 'Writing Pad Chairs & Training Room Seating Bangalore | LK Furniture World1',
        description: 'Institutional lecture and training room chairs with attached folding writing pads in Bangalore.'
      },
      'restaurant-tables': {
        title: 'Restaurant & Cafe Dining Tables Manufacturer Bengaluru | LK Furniture World1',
        description: 'Commercial solid hardwood and heavy metal base dining tables for restaurants, bistros, and cafes in Bangalore.'
      },
      'cafeteria-chairs': {
        title: 'Cafeteria Chairs & Food Court Seating Bangalore | LK Furniture World1',
        description: 'Ergonomic, stackable commercial cafeteria chairs and dining shells for food courts, colleges, and offices in Bengaluru.'
      },
      'barstool': {
        title: 'Bar Stools & Bar Tables in Bengaluru | LK Furniture World1',
        description: 'Pneumatic swivel bar stools, woven cane counter chairs, and sleek modern bar tables in Bangalore.'
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#category-')) {
        const cat = hash.replace('#category-', '');
        setActiveCategory(cat);
        if (SEO_MAP[cat]) {
          document.title = SEO_MAP[cat].title;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute('content', SEO_MAP[cat].description);
        }
      } else {
        if (hash === '#carousel-hero' || hash === '#home' || hash === '#about' || hash === '#workshop' || hash === '#contact' || hash === '#collection' || hash === '') {
          setActiveCategory(null);
        }
        document.title = 'LK Furniture World1 | Office Chairs, School Desks & Custom Furniture Bengaluru';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'LK Furniture World1 in Bapuji Nagar, Mysore Road Bengaluru is a premier manufacturer of ergonomic office chairs, executive & boss chairs, school desks, bunker cot beds, cafeteria chairs, and custom commercial seating. Direct factory prices, 400+ completed projects. Call +91 88844 87020 / +91 63626 42688.');
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

      <main style={{ paddingBottom: 0, paddingTop: 'clamp(64px, 9vw, 96px)' }}>
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
