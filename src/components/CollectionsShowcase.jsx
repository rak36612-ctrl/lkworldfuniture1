import React from 'react';
import { ArrowRight, Armchair, Layout, Monitor, Sofa, GraduationCap, Wine } from 'lucide-react';

const CATEGORY_CARDS = [
  {
    id: 1,
    key: 'executive-chairs',
    title: 'Executive Chairs',
    sub: 'Command comfort. Lead with style.',
    image: '/images/ExecutiveChair1.jpeg',
    icon: <Armchair size={26} color="#C5A075" strokeWidth={1.5} />
  },
  {
    id: 2,
    key: 'boardstation-chairs',
    title: 'Boardstation Chairs',
    sub: 'Designed for strategy. Built to impress.',
    image: '/images/BoardstationChair1.jpeg',
    icon: <Layout size={26} color="#C5A075" strokeWidth={1.5} />
  },
  {
    id: 3,
    key: 'workstations',
    title: 'Workstation Solutions',
    sub: 'Smart spaces. Maximum productivity.',
    image: '/images/custom_workstation.jpg',
    icon: <Monitor size={26} color="#C5A075" strokeWidth={1.5} />
  },
  {
    id: 4,
    key: 'lounge',
    title: 'Lounge Furniture',
    sub: 'Comfort that complements luxury.',
    image: '/images/ergonomic_lumbar.webp',
    icon: <Sofa size={26} color="#C5A075" strokeWidth={1.5} />
  },
  {
    id: 5,
    key: 'school-desks',
    title: 'School Desks',
    sub: 'Heavy-duty 4-seater classroom furniture.',
    image: '/images/school_desks.jpg',
    icon: <GraduationCap size={26} color="#C5A075" strokeWidth={1.5} />
  },
  {
    id: 6,
    key: 'barstool',
    title: 'Bar Stools & Cafe',
    sub: 'Woven cane & sleek metal aesthetic.',
    image: '/images/woven_barstool.jpg',
    icon: <Wine size={26} color="#C5A075" strokeWidth={1.5} />
  }
];

export default function CollectionsShowcase({ onSelectCategory }) {
  const handleClick = (key) => {
    if (onSelectCategory) {
      onSelectCategory(key);
    }
  };

  return (
    <section id="collection" style={{ background: '#121A18', padding: '2.5rem 0', color: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header matching screenshot */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.9rem',
            fontWeight: '700',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C5A075'
          }}>
            EXPLORE OUR COLLECTIONS
          </div>

          <button 
            onClick={() => handleClick('barstool')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#A0B4B0',
              fontSize: '0.85rem',
              fontWeight: '600',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            className="view-all-link"
          >
            View All <ArrowRight size={15} color="#C5A075" />
          </button>
        </div>

        {/* Vertical Stack of Category Cards matching screenshot */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {CATEGORY_CARDS.map(card => (
            <div
              key={card.id}
              onClick={() => handleClick(card.key)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                color: '#FFFFFF',
                height: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1.5rem',
                border: '1px solid rgba(197, 160, 117, 0.2)',
                background: '#182421',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer'
              }}
              className="collection-card-hover"
            >
              {/* Background Image overlay matching screenshot */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '65%',
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)',
                opacity: 0.75,
                zIndex: 0
              }} />

              {/* Left Content Area: Icon + Title + Subtitle */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '1.25rem', maxWidth: '75%' }}>
                {/* Round Icon Box */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(24, 36, 33, 0.85)',
                  border: '1px solid rgba(197, 160, 117, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  backdropFilter: 'blur(6px)'
                }}>
                  {card.icon}
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 3.5vw, 1.6rem)',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    marginBottom: '0.2rem'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.35
                  }}>
                    {card.sub}
                  </p>
                </div>
              </div>

              {/* Right Side: Circular Gold Arrow Button matching screenshot */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#C5A075',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(197, 160, 117, 0.4)',
                flexShrink: 0,
                transition: 'transform 0.2s ease'
              }} className="arrow-btn-hover">
                <ArrowRight size={20} color="#182421" />
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .collection-card-hover:hover {
          transform: translateY(-3px);
          border-color: #C5A075 !important;
        }
        .collection-card-hover:hover .arrow-btn-hover {
          transform: scale(1.1);
          background-color: #D4AF37 !important;
        }
        .view-all-link:hover {
          color: #C5A075 !important;
        }
      `}</style>
    </section>
  );
}
