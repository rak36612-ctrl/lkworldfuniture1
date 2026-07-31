import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Instagram } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(24, 59, 53, 0.08)',
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo matching Promax template style */}
        <a href="#carousel-hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            background: 'var(--color-primary)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(24, 59, 53, 0.2)'
          }}>
            <span style={{ color: '#C5A075', fontWeight: '800', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>LK</span>
          </div>
          <div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: '800', 
              fontSize: '1.2rem', 
              color: 'var(--color-primary-dark)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              LK FURNITURE<span style={{ color: 'var(--color-gold)' }}> WORLD1</span><span style={{ fontSize: '0.65rem', verticalAlign: 'super', color: 'var(--color-text-muted)' }}>™</span>
            </div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: '600' }}>
              The Custom Destination
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#collection" className="nav-link">COLLECTION</a>
          <a href="#solutions" className="nav-link">SOLUTIONS</a>
          <a href="#craftsmanship" className="nav-link">CRAFTSMANSHIP</a>
          <a href="#workshop" className="nav-link">VIDEO TOUR</a>
          <a href="#contact" className="nav-link">LOCATION</a>
        </nav>

        {/* Action Button & Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="tel:+918884487020" style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontSize: '0.85rem', 
            fontWeight: '600', 
            color: 'var(--color-primary-dark)' 
          }} className="phone-desktop">
            <Phone size={15} color="var(--color-gold)" />
            +91 88844 87020
          </a>

          <button onClick={onOpenQuoteModal} className="btn-primary" style={{ padding: '0.75rem 1.6rem', fontSize: '0.85rem' }}>
            GET QUOTE <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="mobile-toggle"
            style={{ background: 'none', padding: '0.5rem', color: 'var(--color-primary)' }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#FFFFFF',
          borderBottom: '2px solid var(--color-primary-subtle)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">HOME</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">ABOUT</a>
          <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">COLLECTION</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">SOLUTIONS</a>
          <a href="#craftsmanship" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">CRAFTSMANSHIP</a>
          <a href="#workshop" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">VIDEO TOUR</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">LOCATION</a>

          <div style={{ paddingTop: '1rem', borderTop: '1px solid #EAEAEA', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="tel:+916362642688" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--color-primary)' }}>
              <Phone size={16} color="var(--color-gold)" /> +91 63626 42688
            </a>
            <a href="tel:+918884487020" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--color-primary)' }}>
              <Phone size={16} color="var(--color-gold)" /> +91 88844 87020
            </a>
            <a href="https://www.instagram.com/lkfurnitureworld1/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#E1306C' }}>
              <Instagram size={16} /> @lkfurnitureworld1
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-primary-dark);
          position: relative;
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--color-gold);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-gold);
          transition: width var(--transition-normal);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          padding: 0.5rem 0;
        }
        .mobile-toggle {
          display: none;
        }
        @media (min-width: 992px) {
          .phone-desktop {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
