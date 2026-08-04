import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone, Instagram, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal, onSelectCategory, activeCategory }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (key) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectCategory) {
      onSelectCategory(key);
    }
  };

  const handleHomeClick = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectCategory) {
      onSelectCategory(null);
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 100001,
      padding: '0.65rem 0',
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(247, 245, 240, 0.96)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(24, 59, 53, 0.08)',
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo Box matching Promax template screenshot */}
        <a 
          href="#carousel-hero" 
          onClick={handleHomeClick}
          style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}
        >
          <img 
            src="/images/Final_Logo.png" 
            alt="LK Furniture World1" 
            style={{ 
              height: 'clamp(40px, 9vw, 48px)', 
              width: 'auto', 
              objectFit: 'contain',
              display: 'block'
            }}
          />

          <div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: '800', 
              fontSize: 'clamp(0.95rem, 3.8vw, 1.2rem)', 
              color: '#182422',
              lineHeight: 1.15,
              letterSpacing: '0.02em'
            }}>
              LK FURNITURE
            </div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: '800', 
              fontSize: 'clamp(0.75rem, 3vw, 0.9rem)', 
              color: '#C5A075',
              lineHeight: 1,
              letterSpacing: '0.08em'
            }}>
              WORLD1
            </div>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#687A76', fontWeight: '600', marginTop: '1px' }}>
              THE CUSTOM DESTINATION
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links matching Promax screenshot layout */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          <a href="#carousel-hero" onClick={handleHomeClick} className="nav-link">HOME</a>
          <a href="#about" onClick={handleHomeClick} className="nav-link">ABOUT</a>
          
          {/* COLLECTION Dropdown Menu matching Promax website */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              onClick={() => handleCategoryClick('barstool')}
              className="nav-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.5rem 0',
                color: activeCategory ? '#C5A075' : 'var(--color-primary-dark)'
              }}
            >
              COLLECTION <ChevronDown size={14} />
            </button>

            {/* Dropdown Card */}
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '220px',
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '0.75rem 0',
                boxShadow: '0 12px 36px rgba(24, 59, 53, 0.15)',
                border: '1px solid rgba(197, 160, 117, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
                zIndex: 100
              }}>
                <button onClick={() => handleCategoryClick('barstool')} className="dropdown-item">
                  BARSTOOL
                </button>
                <button onClick={() => handleCategoryClick('executive-chairs')} className="dropdown-item">
                  EXECUTIVE CHAIRS
                </button>
                <button onClick={() => handleCategoryClick('boardroom-tables')} className="dropdown-item">
                  BOARDROOM TABLES
                </button>
                <button onClick={() => handleCategoryClick('workstations')} className="dropdown-item">
                  WORKSTATION CHAIRS
                </button>
                <button onClick={() => handleCategoryClick('lounge')} className="dropdown-item">
                  LOUNGE FURNITURE
                </button>
                <button onClick={() => handleCategoryClick('school-desks')} className="dropdown-item">
                  SCHOOL DESKS
                </button>
              </div>
            )}
          </div>

          <a href="#craftsmanship" onClick={handleHomeClick} className="nav-link">CRAFTSMANSHIP</a>
          <a href="#workshop" onClick={handleHomeClick} className="nav-link">VIDEO TOUR</a>
          <a href="#contact" onClick={handleHomeClick} className="nav-link">LOCATION</a>
        </nav>

        {/* Action Buttons & Hamburger Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button 
            onClick={onOpenQuoteModal} 
            style={{ 
              backgroundColor: '#162220',
              color: '#FFFFFF',
              padding: '0.65rem 1.25rem',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: '0.78rem',
              letterSpacing: '0.06em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(22, 34, 32, 0.25)',
              transition: 'transform 0.2s ease',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            GET QUOTE <ArrowRight size={14} color="#C5A075" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="mobile-toggle"
            style={{ background: 'none', border: 'none', padding: '0.35rem', color: '#162220', cursor: 'pointer' }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
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
          gap: '0.85rem'
        }}>
          <a href="#carousel-hero" onClick={handleHomeClick} className="mobile-nav-link">HOME</a>
          
          <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#C5A075', letterSpacing: '0.12em', marginTop: '0.5rem' }}>
            COLLECTIONS
          </div>
          <button onClick={() => handleCategoryClick('barstool')} className="mobile-nav-sublink">
            • BARSTOOL
          </button>
          <button onClick={() => handleCategoryClick('executive-chairs')} className="mobile-nav-sublink">
            • EXECUTIVE CHAIRS
          </button>
          <button onClick={() => handleCategoryClick('boardroom-tables')} className="mobile-nav-sublink">
            • BOARDROOM TABLES
          </button>
          <button onClick={() => handleCategoryClick('workstations')} className="mobile-nav-sublink">
            • WORKSTATIONS
          </button>
          <button onClick={() => handleCategoryClick('lounge')} className="mobile-nav-sublink">
            • LOUNGE FURNITURE
          </button>
          <button onClick={() => handleCategoryClick('school-desks')} className="mobile-nav-sublink">
            • SCHOOL DESKS
          </button>

          <a href="#craftsmanship" onClick={handleHomeClick} className="mobile-nav-link" style={{ marginTop: '0.5rem' }}>CRAFTSMANSHIP</a>
          <a href="#workshop" onClick={handleHomeClick} className="mobile-nav-link">VIDEO TOUR</a>
          <a href="#contact" onClick={handleHomeClick} className="mobile-nav-link">LOCATION</a>

          <div style={{ paddingTop: '1rem', borderTop: '1px solid #EAEAEA', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <a href="tel:+916362642688" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--color-primary)', textDecoration: 'none' }}>
              <Phone size={15} color="var(--color-gold)" /> +91 63626 42688
            </a>
            <a href="tel:+918884487020" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--color-primary)', textDecoration: 'none' }}>
              <Phone size={15} color="var(--color-gold)" /> +91 88844 87020
            </a>
            <a href="https://www.instagram.com/lkfurnitureworld1/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: '#E1306C', textDecoration: 'none' }}>
              <Instagram size={15} /> @lkfurnitureworld1
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--color-primary-dark);
          transition: color var(--transition-fast);
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--color-gold);
        }
        .dropdown-item {
          padding: 0.6rem 1.25rem;
          text-align: left;
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 700;
          color: #183B35;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .dropdown-item:hover {
          background: #F0F4F2;
          color: #C5A075;
        }
        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          padding: 0.35rem 0;
          text-decoration: none;
        }
        .mobile-nav-sublink {
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 700;
          color: #576B67;
          text-align: left;
          background: none;
          border: none;
          padding: 0.25rem 0.5rem;
          cursor: pointer;
        }
        .mobile-toggle {
          display: none;
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
