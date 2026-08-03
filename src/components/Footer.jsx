import React from 'react';
import { Instagram, Linkedin, Facebook, MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#FAF9F5',
      color: '#183B35',
      paddingTop: '2rem',
      paddingBottom: '5rem',
      borderTop: '1px solid rgba(24, 59, 53, 0.08)',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
        
        {/* Top Brand Block matching Promax footer screenshot */}
        <div style={{ marginBottom: '3rem' }}>
          
          {/* Logo image + Title */}
          <div style={{ marginBottom: '0.85rem' }}>
            <img 
              src="/images/Final_Logo.png" 
              alt="LK Furniture World1" 
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
                margin: '0 auto 0.75rem',
                display: 'block'
              }}
            />
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.4rem, 4.5vw, 2rem)',
              fontWeight: '900',
              color: '#183B35',
              letterSpacing: '0.04em',
              lineHeight: 1.1
            }}>
              LK FURNITURE<span style={{ color: '#B08C5B' }}> WORLD1</span>
            </div>
          </div>

          {/* Subtitle statement */}
          <p style={{
            fontSize: '0.92rem',
            color: '#5C6E6A',
            lineHeight: 1.6,
            maxWidth: '460px',
            margin: '0 auto 1.25rem',
            fontFamily: 'var(--font-body)'
          }}>
            Crafting the future of workspace comfort through design-led ergonomic excellence.
          </p>

          {/* Contact email / phone */}
          <div style={{ marginBottom: '1.75rem' }}>
            <a 
              href="mailto:info@lkfurnitureworld1.com" 
              style={{
                color: '#183B35',
                fontWeight: '700',
                fontSize: '0.9rem',
                textDecoration: 'none',
                letterSpacing: '0.02em'
              }}
            >
              info@lkfurnitureworld1.com
            </a>
          </div>

          {/* Circular outline social icons matching screenshot */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a
              href="https://www.instagram.com/lkfurnitureworld1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(24, 59, 53, 0.18)',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#183B35',
                transition: 'all 0.25s ease'
              }}
              className="footer-social-icon"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://wa.me/918884487020"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(24, 59, 53, 0.18)',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#183B35',
                transition: 'all 0.25s ease'
              }}
              className="footer-social-icon"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="tel:+918884487020"
              aria-label="Phone Call"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(24, 59, 53, 0.18)',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#183B35',
                transition: 'all 0.25s ease'
              }}
              className="footer-social-icon"
            >
              <Phone size={18} />
            </a>
          </div>

        </div>

        {/* 2-Column Links Grid (COLLECTION & COMPANY) matching screenshot */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          
          {/* Column 1: COLLECTION */}
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.78rem',
              fontWeight: '800',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B08C5B',
              marginBottom: '1.25rem'
            }}>
              COLLECTION
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <li><a href="#category-executive-chairs" style={{ color: '#183B35', textDecoration: 'none' }}>EXECUTIVE CHAIR</a></li>
              <li><a href="#category-workstations" style={{ color: '#183B35', textDecoration: 'none' }}>WORKSTATION CHAIR</a></li>
              <li><a href="#category-lounge" style={{ color: '#183B35', textDecoration: 'none' }}>CAFE CHAIR</a></li>
              <li><a href="#category-barstool" style={{ color: '#183B35', textDecoration: 'none' }}>BARSTOOL</a></li>
              <li><a href="#collection" style={{ color: '#B08C5B', textDecoration: 'none' }}>VIEW ALL</a></li>
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.78rem',
              fontWeight: '800',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B08C5B',
              marginBottom: '1.25rem'
            }}>
              COMPANY
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', fontWeight: '600', color: '#3A4D48' }}>
              <li><a href="#about" style={{ color: '#3A4D48', textDecoration: 'none' }}>Our Story</a></li>
              <li><a href="#craftsmanship" style={{ color: '#3A4D48', textDecoration: 'none' }}>Craftsmanship</a></li>
              <li><a href="#workshop" style={{ color: '#3A4D48', textDecoration: 'none' }}>Video Tour</a></li>
              <li><a href="#contact" style={{ color: '#3A4D48', textDecoration: 'none' }}>Showroom Location</a></li>
            </ul>
          </div>

        </div>

        {/* Section 3: SUPPORT matching screenshot */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.78rem',
            fontWeight: '800',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#B08C5B',
            marginBottom: '1.25rem'
          }}>
            SUPPORT
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', fontWeight: '600', color: '#3A4D48' }}>
            <li><a href="#contact" style={{ color: '#3A4D48', textDecoration: 'none' }}>Warranty & FAQ</a></li>
            <li><a href="#contact" style={{ color: '#3A4D48', textDecoration: 'none' }}>Shipping & Delivery</a></li>
            <li><a href="#contact" style={{ color: '#3A4D48', textDecoration: 'none' }}>Custom Order Inquiries</a></li>
            <li><a href="#contact" style={{ color: '#3A4D48', textDecoration: 'none' }}>Contact Us</a></li>
          </ul>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(24, 59, 53, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.78rem',
          color: '#687A76'
        }}>
          <div>
            © {new Date().getFullYear()} LK Furniture World1. All Rights Reserved. <br />
            #1, Mysore Road, Bapuji Nagar, Bengaluru - 560026
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: '#FFFFFF',
              color: '#183B35',
              border: '1px solid rgba(24, 59, 53, 0.15)',
              padding: '0.55rem 1.25rem',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              fontWeight: '700',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-social-icon:hover {
          border-color: #B08C5B !important;
          color: #B08C5B !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
