import React from 'react';
import { Home, LayoutGrid, BookOpen, PhoneCall } from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <div 
      className="mobile-bottom-nav-wrap"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        background: '#101715',
        borderTop: '1px solid rgba(197, 160, 117, 0.25)',
        padding: '0.5rem 0 0.6rem',
        boxShadow: '0 -8px 24px rgba(0, 0, 0, 0.4)',
        display: 'none'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        
        {/* Home */}
        <a 
          href="#carousel-hero" 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            color: '#C5A075',
            fontSize: '0.68rem',
            fontWeight: '600',
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <Home size={20} color="#C5A075" />
          <span>Home</span>
        </a>

        {/* Collections */}
        <a 
          href="#collection" 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: '0.68rem',
            fontWeight: '600',
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <LayoutGrid size={20} color="rgba(255, 255, 255, 0.75)" />
          <span>Collections</span>
        </a>

        {/* Catalogue (Replaces Workshop) */}
        <a 
          href="/lkfinale.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: '0.68rem',
            fontWeight: '600',
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <BookOpen size={20} color="rgba(255, 255, 255, 0.75)" />
          <span>Catalogue</span>
        </a>

        {/* Contact */}
        <a 
          href="#contact" 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: '0.68rem',
            fontWeight: '600',
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <PhoneCall size={20} color="rgba(255, 255, 255, 0.75)" />
          <span>Contact</span>
        </a>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .mobile-bottom-nav-wrap {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
