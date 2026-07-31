import React from 'react';
import { Phone, MapPin, Instagram, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--color-primary-dark)', color: '#A0B4B0', paddingTop: '4.5rem', paddingBottom: '2.5rem', borderTop: '1px solid rgba(197, 160, 117, 0.2)' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.85rem' }}>
              LK FURNITURE<span style={{ color: 'var(--color-gold)' }}> WORLD1</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#A0B4B0' }}>
              Affordable commercial & residential custom furniture. Engineered for perpetual comfort, durability, and luxury aesthetics in Bengaluru.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href="https://www.instagram.com/lkfurnitureworld1/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E1306C',
                  transition: 'background 0.2s ease'
                }}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#home" style={{ color: '#A0B4B0', transition: 'color 0.2s' }}>Home</a></li>
              <li><a href="#about" style={{ color: '#A0B4B0', transition: 'color 0.2s' }}>About Philosophy</a></li>
              <li><a href="#collection" style={{ color: '#A0B4B0', transition: 'color 0.2s' }}>Product Collections</a></li>
              <li><a href="#solutions" style={{ color: '#A0B4B0', transition: 'color 0.2s' }}>Quote Estimator</a></li>
              <li><a href="#craftsmanship" style={{ color: '#A0B4B0', transition: 'color 0.2s' }}>Craftsmanship</a></li>
              <li><a href="#workshop" style={{ color: '#A0B4B0', transition: 'color 0.2s' }}>Workshop Video</a></li>
              <li><a href="#contact" style={{ color: '#A0B4B0', transition: 'color 0.2s' }}>Location & Contact</a></li>
            </ul>
          </div>

          {/* Product Categories SEO list */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Product Range
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>Ergonomic Executive Office Chairs</li>
              <li>Modular Collaborative Workstations</li>
              <li>4-Seater Heavy Duty School Desks</li>
              <li>Luxury Reception Lounge Couches</li>
              <li>Woven Cane & Metal Bar Stools</li>
              <li>Custom Commercial Bunk Beds</li>
              <li>Stainless Steel Waiting Chairs</li>
            </ul>
          </div>

          {/* Location & Direct Calls */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Factory Storefront
            </h4>
            <div style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem', color: '#A0B4B0' }}>
              <MapPin size={16} color="var(--color-gold)" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              #1, 1st Main Road, Mysore Rd, opp. Beereshwara Temple, Bapuji Nagar, Bengaluru - 560026
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
              <a href="tel:+916362642688" style={{ color: 'var(--color-gold)', fontWeight: '700' }}>
                <Phone size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> +91 63626 42688
              </a>
              <a href="tel:+918884487020" style={{ color: 'var(--color-gold)', fontWeight: '700' }}>
                <Phone size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> +91 88844 87020
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.82rem'
        }}>
          <div>
            © {new Date().getFullYear()} LK Furniture World1. All Rights Reserved. Built with Precision & Care.
          </div>

          <button 
            onClick={scrollToTop} 
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#FFFFFF',
              border: 'none',
              padding: '0.6rem 1rem',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
